// Mock data for Jishnu's portfolio

export const personalInfo = {
  name: "Jishnu G L",
  primaryRole: "Business Analyst",
  secondaryRole: "ITSM Automation & CRM Implementation Specialist",
  tagline: "I help companies streamline operations, automate workflows, and implement revenue-generating ITSM & CRM systems.",
  email: "jishnugl92@gmail.com",
  phone: "+91 9994674488",
  linkedin: "https://www.linkedin.com/in/jishnu-g-l-649167197/",
  github: "#",
  availability: "Open to work",
  startDate: "Immediate / Within 2 weeks",
  location: "India (Open to Remote)",
  languages: ["EN", "ML"]
};

export const metrics = [
  {
    id: 1,
    value: "3+",
    label: "Years Experience",
    description: "In ITSM, CRM, automation, and customer support across multiple platforms"
  },
  {
    id: 2,
    value: "10+",
    label: "Certifications",
    description: "Including HubSpot, Freshworks, AWS, and Cybersecurity certifications"
  },
  {
    id: 3,
    value: "5+",
    label: "Platforms Mastered",
    description: "Freshservice, Freshdesk, Freshsales, HubSpot, and automation tools"
  }
];

export const clients = [
  { name: "Kambaa Incorporation", logo: null, industry: "ITSM & Business Analysis" },
  { name: "NVIDIA (via Randstad)", logo: null, industry: "AI/ML Data Operations" },
  { name: "Osai e-Biz Integrators", logo: null, industry: "CRM & Technical Support" },
  { name: "Enterprise Clients", logo: null, industry: "Various Sectors" }
];

export const projects = [
  {
    id: 1,
    title: "ITSM Implementation for Campus Operations",
    client: "Kambaa Incorporation",
    industry: "Enterprise",
    category: "ITSM",
    tagline: "Transformed support operations with Freshservice automation",
    metrics: [
      { label: "SLA Compliance", value: "+30%" },
      { label: "Response Time", value: "-40%" },
      { label: "Tickets Automated", value: "500+/month" }
    ],
    tags: ["Freshservice", "ITSM", "Workflow Automation", "SLA Management"],
    problem: "Campus support team struggled with manual ticket routing, SLA breaches, and inconsistent service delivery across 500+ monthly requests.",
    solution: "Implemented Freshservice with custom workflows, automated ticket routing, SLA policies, and self-service portal. Configured approval workflows and integrated with existing systems.",
    impact: [
      "Improved SLA compliance by 30% within first quarter",
      "Reduced average response time from 4 hours to 90 minutes",
      "Automated 60% of routine ticket routing and assignments",
      "Enabled self-service resolution for 25% of common issues"
    ],
    testimonial: null,
    liveUrl: null,
    codeUrl: null
  },
  {
    id: 2,
    title: "YOLO-Based Object Detection System",
    client: "NVIDIA (via Randstad)",
    industry: "AI/ML",
    category: "Data & AI",
    tagline: "Enhanced autonomous vehicle accuracy through dataset optimization",
    metrics: [
      { label: "Dataset Quality", value: "+20%" },
      { label: "Detection Accuracy", value: "95%+" },
      { label: "Annotations Processed", value: "10K+" }
    ],
    tags: ["YOLO", "Computer Vision", "Dataset Management", "Quality Assurance"],
    problem: "Autonomous vehicle ML models required high-quality annotated datasets for object detection training with strict accuracy requirements.",
    solution: "Managed and validated large-scale image annotation datasets for YOLO-based detection systems. Implemented quality control processes and validation workflows.",
    impact: [
      "Processed and validated 10,000+ image annotations",
      "Improved dataset quality by 20% through systematic QA",
      "Contributed to 95%+ detection accuracy in production models",
      "Reduced annotation errors by implementing validation checkpoints"
    ],
    testimonial: null,
    liveUrl: null,
    codeUrl: null
  },
  {
    id: 3,
    title: "Retail Inventory Management System",
    client: "Osai e-Biz Integrators",
    industry: "Retail",
    category: "CRM",
    tagline: "Streamlined inventory and sales pipeline management",
    metrics: [
      { label: "Pipeline Visibility", value: "+100%" },
      { label: "Stock Accuracy", value: "98%" },
      { label: "Sales Cycle", value: "-25%" }
    ],
    tags: ["Freshsales", "CRM", "Inventory Management", "Sales Pipeline"],
    problem: "Retail operations lacked visibility into inventory levels and sales pipeline, leading to stockouts and missed opportunities.",
    solution: "Implemented Freshsales CRM with custom fields for inventory tracking. Built automated workflows for low-stock alerts and sales follow-ups.",
    impact: [
      "Achieved 98% inventory accuracy across all locations",
      "Reduced sales cycle length by 25% with automated follow-ups",
      "Eliminated stockouts for top 20 products",
      "Increased sales team productivity by 30%"
    ],
    testimonial: null,
    liveUrl: null,
    codeUrl: null
  },
  {
    id: 4,
    title: "Multi-Channel Support Automation",
    client: "Enterprise SaaS Company",
    industry: "SaaS",
    category: "Support",
    tagline: "Unified support across email, chat, and phone channels",
    metrics: [
      { label: "CSAT Score", value: "4.6/5" },
      { label: "First Response", value: "-50%" },
      { label: "Agent Productivity", value: "+35%" }
    ],
    tags: ["Freshdesk", "Omnichannel Support", "Automation", "Customer Success"],
    problem: "Support team struggled with fragmented channels, duplicate tickets, and inconsistent customer experience across touchpoints.",
    solution: "Deployed Freshdesk with omnichannel inbox, intelligent ticket routing, canned responses, and knowledge base integration.",
    impact: [
      "Unified support across 3 channels into single interface",
      "Improved CSAT score from 3.8 to 4.6 out of 5",
      "Reduced first response time by 50% with automation",
      "Increased agent productivity by 35% with better tools"
    ],
    testimonial: null,
    liveUrl: null,
    codeUrl: null
  }
];

export const achievements = [
  {
    id: 1,
    title: "SLA Compliance Transformation",
    description: "Helped Kambaa Incorporation improve their campus support SLA compliance by 30% through Freshservice automation and workflow optimization.",
    metric: "30% improvement",
    icon: "Target"
  },

  {
    id: 3,
    title: "AI/ML Dataset Quality Leadership",
    description: "Supported NVIDIA autonomous vehicle project by ensuring 95%+ detection accuracy through systematic dataset validation and quality control.",
    metric: "95%+ accuracy",
    icon: "Award"
  }
];

export const timeline = [
  {
    year: "Feb 2025 - Present",
    role: "Business Analyst",
    company: "Kambaa Incorporation",
    achievement: "Leading ITSM operations using Freshservice with focus on SLA compliance and automated workflows",
    metric: "Multi-platform integration expert"
  },
  {
    year: "Aug 2024 - Feb 2025",
    role: "Associate Process Executive",
    company: "NVIDIA (via Randstad)",
    achievement: "Annotated 2D dynamic obstacles and human behavior datasets for autonomous vehicle training",
    metric: "High-precision ML data labeling"
  },
  {
    year: "Apr 2022 - Sep 2023",
    role: "Technical Support Engineer",
    company: "Osai e-Biz Integrators Pvt. Ltd.",
    achievement: "Managed support tickets in Freshservice and customer leads in Freshsales",
    metric: "Created ITSM/CRM training materials"
  },
  {
    year: "2022 - 2024",
    role: "M.Sc. Computer Science",
    company: "Sri Ramakrishna College of Arts & Science",
    achievement: "Advanced studies in computer science with focus on ITSM and automation",
    metric: "CGPA: 7.96"
  }
];

export const skills = {
  "CRM Platforms": [
    { name: "Freshsales", level: "Expert", projects: "10+" },
    { name: "HubSpot CRM", level: "Expert", projects: "8+" },
    { name: "Freshdesk", level: "Expert", projects: "10+" },
    { name: "Salesforce (Basic)", level: "Intermediate", projects: "2" }
  ],
  "ITSM Platforms": [
    { name: "Freshservice", level: "Expert", projects: "10+" },
    { name: "HelpDesk", level: "Advanced", projects: "5+" },
    { name: "ServiceNow (Basic)", level: "Intermediate", projects: "1" }
  ],
  "Automation & AI Tools": [
    { name: "UiPath RPA", level: "Advanced", projects: "4+" },
    { name: "Freshchat (AI Chatbot)", level: "Expert", projects: "6+" },
    { name: "LiveChat.com", level: "Advanced", projects: "4+" },
    { name: "GTaaS", level: "Advanced", projects: "3+" }
  ],
  "Programming & Database": [
    { name: "Python", level: "Intermediate", projects: "5+" },
    { name: "SQL", level: "Advanced", projects: "8+" },
    { name: "HTML", level: "Intermediate", projects: "4+" }
  ],
  "Data & Analytics": [
    { name: "Data Analysis", level: "Advanced", projects: "10+" },
    { name: "Reporting & Dashboards", level: "Expert", projects: "10+" },
    { name: "Cross-platform Integration", level: "Advanced", projects: "6+" },
    { name: "Data Labeling (ML)", level: "Advanced", projects: "1" }
  ],
  "Cloud & Certifications": [
    { name: "AWS Cloud Practitioner", level: "Certified", projects: "N/A" },
    { name: "HubSpot Marketing Hub", level: "Certified", projects: "N/A" },
    { name: "Cybersecurity Foundation", level: "Certified", projects: "N/A" }
  ]
};

export const process = [
  {
    step: 1,
    title: "Discover",
    icon: "Search",
    points: [
      "Understand current workflows and pain points",
      "Identify bottlenecks and inefficiencies",
      "Define success metrics and KPIs"
    ]
  },
  {
    step: 2,
    title: "Design",
    icon: "Pencil",
    points: [
      "Map optimized processes and workflows",
      "Configure platform to match requirements",
      "Create automation rules and triggers"
    ]
  },
  {
    step: 3,
    title: "Build",
    icon: "Settings",
    points: [
      "Implement and configure chosen platform",
      "Set up integrations and data migration",
      "Create custom fields, forms, and workflows"
    ]
  },
  {
    step: 4,
    title: "Test",
    icon: "CheckCircle",
    points: [
      "User acceptance testing with stakeholders",
      "Refine workflows based on feedback",
      "Ensure data accuracy and performance"
    ]
  },
  {
    step: 5,
    title: "Launch & Support",
    icon: "Rocket",
    points: [
      "Train team members and admins",
      "Monitor performance and adoption",
      "Provide ongoing optimization support"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "Jishnu transformed our support operations. What used to take hours now happens automatically. Our SLA compliance improved by 30% in just three months.",
    author: "Priya Sharma",
    role: "IT Manager",
    company: "Kambaa Incorporation",
    logo: null
  },

  {
    id: 3,
    quote: "Working with Jishnu on our inventory management system was seamless. He understood our retail challenges and delivered a solution that actually works in the real world.",
    author: "Anika Reddy",
    role: "Operations Lead",
    company: "Osai e-Biz Integrators",
    logo: null
  },
  {
    id: 4,
    quote: "Exceptional attention to detail and commitment to quality. Jishnu's work on our dataset validation contributed significantly to our model accuracy.",
    author: "Michael Chen",
    role: "ML Engineering Manager",
    company: "NVIDIA (Contractor)",
    logo: null
  }
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "ITSM", label: "ITSM" },
  { id: "CRM", label: "CRM" },
  { id: "Support", label: "Support" },
  { id: "Data & AI", label: "Data & AI" }
];
