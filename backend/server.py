from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone
import pandas as pd
import csv


ROOT_DIR = Path(__file__).parent
env_path = ROOT_DIR / '.env'
if env_path.exists():
    load_dotenv(env_path)
else:
    logging.warning(f".env file not found at {env_path}")

# MongoDB connection settings
mongo_url = os.environ.get('MONGO_URL', 'mongodb://localhost:27017')
db_name = os.environ.get('DB_NAME', 'jishnu_db')

try:
    client = AsyncIOMotorClient(mongo_url, serverSelectionTimeoutMS=2000)
    db = client[db_name]
    logging.info(f"Initialized MongoDB client for {mongo_url}")
except Exception as e:
    logging.error(f"Failed to initialize MongoDB client: {e}")
    db = None

CSV_FILE = ROOT_DIR / 'contacts.csv'

def save_to_csv(data: dict):
    file_exists = CSV_FILE.exists()
    try:
        with open(CSV_FILE, mode='a', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=data.keys())
            if not file_exists:
                writer.writeheader()
            writer.writerow(data)
        logging.info(f"Saved contact to CSV: {CSV_FILE}")
    except Exception as e:
        logging.error(f"Failed to save to CSV: {e}")

async def send_to_google_sheets(data: dict):
    webhook_url = os.environ.get('GOOGLE_SHEETS_WEBHOOK_URL')
    if not webhook_url:
        return
    
    try:
        import requests
        # Convert datetime to string for JSON serialization if needed
        json_data = {k: str(v) if isinstance(v, datetime) else v for k, v in data.items()}
        response = requests.post(webhook_url, json=json_data, timeout=5)
        if response.status_code == 200:
            logging.info("Successfully sent data to Google Sheets")
        else:
            logging.warning(f"Google Sheets webhook returned {response.status_code}")
    except Exception as e:
        logging.error(f"Failed to send to Google Sheets: {e}")

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: str = ""
    lookingFor: str = ""
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactMessageCreate(BaseModel):
    name: str
    email: str
    company: str = ""
    lookingFor: str = ""
    message: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    if db is None:
        return status_obj
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(input: ContactMessageCreate):
    msg_dict = input.model_dump()
    msg_obj = ContactMessage(**msg_dict)
    doc = msg_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    # Always save to CSV (Excel compatible)
    save_to_csv(doc)
    
    # Try sending to Google Sheets if configured
    await send_to_google_sheets(doc)
    
    # Try saving to MongoDB if available
    if db is not None:
        try:
            await db.contact_messages.insert_one(doc)
            logging.info("Saved to MongoDB")
        except Exception as e:
            logging.error(f"MongoDB save failed: {e}")
            # We don't fail the request since we have the CSV
            
    return msg_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    if db is None:
        return []
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contact_messages():
    if db is None:
        return []
    messages = await db.contact_messages.find({}, {"_id": 0}).to_list(1000)
    for msg in messages:
        if isinstance(msg['timestamp'], str):
            msg['timestamp'] = datetime.fromisoformat(msg['timestamp'])
    return messages

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    if 'client' in globals() and client:
        client.close()