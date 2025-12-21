// Mock data for Jishnu's portfolio

export const personalInfo = {
  name: "Jishnu G L",
  primaryRole: "Business Analyst",
  secondaryRole: "ITSM Automation & CRM Implementation Specialist",
  tagline: "I help companies streamline operations, automate workflows, and implement revenue-generating ITSM & CRM systems.",
  email: "jishnugl92@gmail.com",
  linkedin: "https://www.linkedin.com/in/jishnu-gl",
  github: "#",
  availability: "Open to work",
  startDate: "Immediate / Within 2 weeks",
  location: "India (Open to Remote)",
  languages: ["EN", "ML"]
};

export const metrics = [
  {
    id: 1,
    value: "10+",
    label: "ITSM & CRM Projects",
    description: "Implemented across Freshservice, Freshdesk, Freshsales & HubSpot"
  },
  {
    id: 2,
    value: "3+",
    label: "Years Experience",
    description: "In ITSM automation, CRM implementation, and business analysis"
  },
  {
    id: 3,
    value: "25%",
    label: "Avg Efficiency Gain",
    description: "Improved operational efficiency through automation"
  }
];

export const clients = [
  { name: "Kambaa Incorporation", logo: null, industry: "Tech" },
  { name: "NVIDIA (via Randstad)", logo: null, industry: "AI/ML" },
  { name: "Osai e-Biz Integrators", logo: null, industry: "eCommerce" },
  { name: "Enterprise Clients", logo: null, industry: "Various" }
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
  },
  {
    id: 5,
    title: "HubSpot Sales Pipeline Optimization",
    client: "B2B Marketing Agency",
    industry: "Marketing",
    category: "CRM",
    tagline: "Doubled pipeline visibility and lead conversion rates",
    metrics: [
      { label: "Lead Conversion", value: "+45%" },
      { label: "Deal Velocity", value: "+30%" },
      { label: "Revenue Impact", value: "$200K+" }
    ],
    tags: ["HubSpot", "Sales Pipeline", "Lead Scoring", "Reporting"],
    problem: "Marketing agency had poor lead tracking, manual follow-ups, and no visibility into pipeline health or conversion metrics.",
    solution: "Configured HubSpot CRM with custom pipelines, automated lead scoring, email sequences, and executive dashboards with key metrics.",
    impact: [
      "Increased lead-to-customer conversion by 45%",
      "Reduced average deal cycle from 60 to 42 days",
      "Generated $200K+ in additional revenue within 6 months",
      "Automated 70% of routine sales follow-up tasks"
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
    id: 2,
    title: "Revenue-Generating CRM Implementation",
    description: "Implemented HubSpot CRM for B2B agency that generated $200K+ in additional revenue through improved pipeline visibility and automation.",
    metric: "$200K+ impact",
    icon: "TrendingUp"
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
    year: "2024 - Present",
    role: "ITSM & CRM Consultant",
    company: "Freelance",
    achievement: "Helping businesses optimize support and sales operations",
    metric: "5+ successful implementations"
  },
  {
    year: "2023 - 2024",
    role: "Business Analyst",
    company: "Kambaa Incorporation",
    achievement: "Led ITSM implementation improving SLA compliance by 30%",
    metric: "500+ tickets/month automated"
  },
  {
    year: "2022 - 2023",
    role: "Data Analyst",
    company: "NVIDIA (via Randstad)",
    achievement: "Contributed to autonomous vehicle ML model accuracy",
    metric: "10K+ annotations validated"
  },
  {
    year: "2021 - 2022",
    role: "Junior Business Analyst",
    company: "Osai e-Biz Integrators",
    achievement: "Implemented retail CRM achieving 98% inventory accuracy",
    metric: "First CRM implementation"
  }
];

export const skills = {
  "ITSM Platforms": [
    { name: "Freshservice", level: "Expert", projects: "5+" },
    { name: "Freshdesk", level: "Advanced", projects: "4+" },
    { name: "ServiceNow (Basic)", level: "Intermediate", projects: "1" }
  ],
  "CRM Platforms": [
    { name: "Freshsales", level: "Advanced", projects: "3+" },
    { name: "HubSpot", level: "Advanced", projects: "3+" },
    { name: "Salesforce (Basic)", level: "Intermediate", projects: "1" }
  ],
  "Automation & Integration": [
    { name: "Workflow Automation", level: "Expert", projects: "8+" },
    { name: "API Integration", level: "Advanced", projects: "5+" },
    { name: "Zapier/Make", level: "Advanced", projects: "4+" }
  ],
  "Business Analysis": [
    { name: "Requirements Gathering", level: "Expert", projects: "10+" },
    { name: "Process Mapping", level: "Advanced", projects: "8+" },
    { name: "Stakeholder Management", level: "Expert", projects: "10+" }
  ],
  "Data & Reporting": [
    { name: "Excel/Google Sheets", level: "Advanced", projects: "10+" },
    { name: "SQL (Basic)", level: "Intermediate", projects: "3+" },
    { name: "Dashboard Design", level: "Advanced", projects: "6+" }
  ],
  "Technical Skills": [
    { name: "Data Annotation (YOLO)", level: "Advanced", projects: "1" },
    { name: "Quality Assurance", level: "Advanced", projects: "5+" },
    { name: "Documentation", level: "Expert", projects: "10+" }
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
    id: 2,
    quote: "The HubSpot implementation was a game-changer. We finally have visibility into our sales pipeline, and our conversion rates have never been better. Highly recommend Jishnu for CRM projects.",
    author: "Rajesh Kumar",
    role: "Sales Director",
    company: "B2B Marketing Agency",
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
