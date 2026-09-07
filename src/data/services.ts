export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: "Code" | "BarChart3" | "Sparkles" | "Database" | "Cloud";
  features: string[];
  capabilities: {
    title: string;
    description: string;
    metrics: string;
  }[];
  technologies: string[];
  businessBenefits: string[];
  deliverables: string[];
  faq: { question: string; answer: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "web-development",
    slug: "web-development",
    number: "01",
    title: "Web Development",
    shortDescription:
      "Modern, responsive and high-performance websites and web applications built around your business goals.",
    fullDescription:
      "The Nexify crafts enterprise-ready web platforms, customer portals, and high-conversion business websites tailored to scale your operations. We utilize clean architecture, modern frontend frameworks, and robust APIs to ensure optimal speed, security, and search engine visibility.",
    iconName: "Code",
    features: [
      "Corporate Websites",
      "Web Applications",
      "E-Commerce",
      "Custom Portals",
    ],
    capabilities: [
      {
        title: "Enterprise Web Applications",
        description:
          "Scalable single-page and server-rendered web apps with role-based access control, real-time sync, and fluid UX.",
        metrics: "99.9% Uptime",
      },
      {
        title: "High-Speed Corporate Websites",
        description:
          "SEO-optimized corporate presences engineered for lightning-fast load times, flawless responsiveness, and high conversion.",
        metrics: "< 1.2s Load Time",
      },
      {
        title: "Custom B2B & E-Commerce Portals",
        description:
          "Secure transactional systems, inventory integrations, and payment gateways built for frictionless commerce.",
        metrics: "Bank-Grade Security",
      },
      {
        title: "API Design & System Integration",
        description:
          "Restful & GraphQL APIs connecting your web assets to third-party tools, payment systems, and internal databases.",
        metrics: "Seamless Data Flow",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    businessBenefits: [
      "Establish authoritative digital credibility with a sleek corporate presence",
      "Improve customer engagement with sub-second page loads and mobile-first design",
      "Streamline customer acquisition and conversion funnels",
      "Built-in enterprise-grade security and automated backup compliance",
    ],
    deliverables: [
      "Full source code and modular UI component library",
      "Responsive layout for mobile, tablet, and widescreen monitors",
      "Integrated SEO metadata, sitemaps, and OpenGraph tags",
      "Cross-browser testing reports & load testing verification",
    ],
    faq: [
      {
        question: "How long does a typical web application project take?",
        answer:
          "Timelines typically range between 4 to 12 weeks depending on scope, custom workflows, third-party integrations, and testing criteria.",
      },
      {
        question: "Will our website be optimized for mobile and SEO?",
        answer:
          "Yes. Every site is built mobile-first with automated structured data, semantic HTML5 hierarchy, and Core Web Vitals optimization.",
      },
    ],
  },
  {
    id: "data-analytics",
    slug: "data-analytics",
    number: "02",
    title: "Data Analytics",
    shortDescription:
      "Transform raw business data into meaningful dashboards, reports and actionable insights.",
    fullDescription:
      "Unlock the true potential of your company's records. The Nexify cleans, models, and visualizes complex enterprise data into interactive Power BI dashboards, automated MIS reporting pipelines, and real-time operational KPI trackers.",
    iconName: "BarChart3",
    features: [
      "Power BI",
      "SQL Analytics",
      "Business Dashboards",
      "MIS Automation",
    ],
    capabilities: [
      {
        title: "Interactive Power BI & Tableau Dashboards",
        description:
          "Executive-level visualization dashboards with drill-down capabilities, forecasting curves, and multi-department filtering.",
        metrics: "Real-time Sync",
      },
      {
        title: "Automated MIS & Financial Reporting",
        description:
          "Eliminate manual spreadsheet errors with automated daily, weekly, and monthly consolidated performance reports.",
        metrics: "10x Faster Reports",
      },
      {
        title: "SQL Data Warehousing & ETL Pipelines",
        description:
          "Extract, transform, and centralize fragmented data from POS, CRM, ERP, and payment databases into a single source of truth.",
        metrics: "Zero Data Silos",
      },
      {
        title: "Predictive Analytics & KPI Tracking",
        description:
          "Identify seasonal trends, customer churn signals, and inventory bottlenecks through statistical modeling.",
        metrics: "Actionable Insights",
      },
    ],
    technologies: [
      "Power BI",
      "Python",
      "PostgreSQL",
      "MySQL",
      "Pandas",
      "Metabase",
    ],
    businessBenefits: [
      "Empower management with real-time decision-making dashboards",
      "Eliminate repetitive manual Excel data aggregation and human errors",
      "Identify revenue leaks and operational inefficiencies instantly",
      "Consolidate multiple branch/store data streams into one pane of glass",
    ],
    deliverables: [
      "Custom Power BI / Web Dashboard suite with user permission levels",
      "Automated SQL ETL scripts and scheduled refresh pipelines",
      "Executive summary report templates and exportable formats (PDF/Excel)",
      "User training and dashboard navigation documentation",
    ],
    faq: [
      {
        question: "Can you connect our existing legacy database to Power BI?",
        answer:
          "Yes, we build secure data connectors and automated ETL pipelines for SQL Server, MySQL, PostgreSQL, Oracle, and ERP databases.",
      },
      {
        question: "How do you ensure enterprise data confidentiality?",
        answer:
          "All data warehousing and analytics are deployed either on your private cloud infrastructure or encrypted with role-based access control.",
      },
    ],
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    number: "03",
    title: "AI Automation",
    shortDescription:
      "Automate repetitive business processes using AI, intelligent workflows and AI-powered assistants.",
    fullDescription:
      "The Nexify empowers enterprises with custom AI assistants, OCR document extraction systems, and multi-step workflow automation. We integrate modern LLMs and intelligent bots directly into your existing communication and operational channels.",
    iconName: "Sparkles",
    features: [
      "AI Assistants",
      "AI Chatbots",
      "Document AI",
      "Workflow Automation",
    ],
    capabilities: [
      {
        title: "Custom LLM & AI Assistants",
        description:
          "Trained on your private knowledge base, product manuals, and company SOPs to answer client and staff queries accurately.",
        metrics: "24/7 Availability",
      },
      {
        title: "Intelligent Document Processing (OCR)",
        description:
          "Automatically parse invoices, purchase orders, identity verification docs, and contracts into structured database records.",
        metrics: "98%+ Accuracy",
      },
      {
        title: "Cross-System Workflow Automation",
        description:
          "Connect emails, CRM triggers, payment alerts, and WhatsApp business notifications without human intervention.",
        metrics: "80% Time Saved",
      },
      {
        title: "Conversational Customer Support Bots",
        description:
          "Multi-lingual customer support chatbots with automated ticket escalation and CRM data lookup.",
        metrics: "< 3s Response",
      },
    ],
    technologies: [
      "Python",
      "FastAPI",
      "OpenAI / Anthropic APIs",
      "LangChain",
      "Vector DBs",
      "n8n / Node.js",
    ],
    businessBenefits: [
      "Reduce customer support turnaround time from hours to seconds",
      "Automate tedious data entry and document verification workflows",
      "Free up high-value personnel to focus on strategic business development",
      "Ensure consistent, 24/7 standard operating procedures compliance",
    ],
    deliverables: [
      "Configured AI Agent and API gateway integrated into your web/app stack",
      "Document processing pipelines with validation thresholds",
      "Webhook and workflow trigger configuration dashboards",
      "Comprehensive prompt templates and guardrail monitoring tools",
    ],
    faq: [
      {
        question: "Will our proprietary business data be shared with public AI models?",
        answer:
          "No. We use dedicated enterprise endpoints with zero-data-retention agreements and local vector indexing to keep your data private.",
      },
      {
        question: "Can AI automation integrate with WhatsApp or Slack?",
        answer:
          "Yes, we build bots and automated notification bridges for WhatsApp Business API, Slack, Microsoft Teams, and email.",
      },
    ],
  },
  {
    id: "erp-crm",
    slug: "erp-crm",
    number: "04",
    title: "ERP & CRM",
    shortDescription:
      "Connect sales, customers, inventory, operations and business reporting through custom management systems.",
    fullDescription:
      "Ditch fragmented spreadsheets and off-the-shelf rigid software. Nexify IT builds tailor-made ERP and CRM solutions engineered around your exact manufacturing, distribution, retail, or service-based workflows.",
    iconName: "Database",
    features: [
      "CRM",
      "Inventory",
      "Sales",
      "Business Management",
    ],
    capabilities: [
      {
        title: "Customer Relationship Management (CRM)",
        description:
          "Lead pipeline management, quotation generation, automated follow-ups, customer lifecycle tracking, and sales analytics.",
        metrics: "360° Lead Tracking",
      },
      {
        title: "Inventory & Warehouse Management",
        description:
          "Multi-location stock monitoring, barcode scanning, reorder point triggers, batch tracking, and supplier coordination.",
        metrics: "Zero Stockouts",
      },
      {
        title: "Order Processing & Invoicing",
        description:
          "Automated GST billing, invoice generation, payment tracking, and ledger reconciliation.",
        metrics: "100% Tax Compliant",
      },
      {
        title: "Role-Based Staff & Operations Control",
        description:
          "Granular employee access permissions, audit logs, task delegations, and department performance scorecards.",
        metrics: "Full Audit Trail",
      },
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Prisma",
      "Redis",
    ],
    businessBenefits: [
      "Consolidate fragmented business functions into one unified hub",
      "Gain real-time visibility into inventory levels across all branches",
      "Accelerate sales cycle with instant quotations and automated client alerts",
      "Ensure strict financial governance and eliminate pilferage",
    ],
    deliverables: [
      "Custom ERP/CRM web platform with responsive admin dashboard",
      "Role-based permission architecture (Admin, Sales, Warehouse, Accounts)",
      "Automated PDF quotation & GST invoice generation modules",
      "Data migration scripts from legacy spreadsheets/software",
    ],
    faq: [
      {
        question: "Can you migrate our historical Excel records to the new ERP?",
        answer:
          "Yes, we run specialized data cleaning and validation scripts to import your customer, product, and inventory history seamlessly.",
      },
      {
        question: "Is the ERP customizable as our business scales?",
        answer:
          "Absolutely. We build modular microservices that allow you to add new branches, warehouses, or modules anytime.",
      },
    ],
  },
  {
    id: "web-hosting",
    slug: "web-hosting",
    number: "05",
    title: "Web Hosting & Cloud",
    shortDescription:
      "Reliable hosting, deployment, domains, SSL, backups and cloud infrastructure for your digital products.",
    fullDescription:
      "Keep your critical business applications online 24/7 with zero downtime. Nexify IT provisions, secures, and manages high-performance cloud hosting environments, automated SSL encryption, disaster recovery backups, and domain infrastructure.",
    iconName: "Cloud",
    features: [
      "Hosting",
      "Cloud Deployment",
      "SSL",
      "Backup & Maintenance",
    ],
    capabilities: [
      {
        title: "Managed Cloud VPS & Dedicated Servers",
        description:
          "Optimized cloud instances configured with Nginx/Caddy, PHP/Node runtimes, fast SSD storage, and isolated resources.",
        metrics: "99.95% SLA Uptime",
      },
      {
        title: "Automated Daily Backups & Disaster Recovery",
        description:
          "Offsite encrypted snapshot backups with 1-click restore functionality to safeguard against hardware failure or errors.",
        metrics: "Automated Offsite Snapshots",
      },
      {
        title: "Enterprise SSL & Cyber Hardening",
        description:
          "End-to-end SSL/TLS encryption, DDoS protection, firewall rules, and malware vulnerability monitoring.",
        metrics: "A+ SSL Rating",
      },
      {
        title: "Domain Management & Corporate DNS",
        description:
          "Domain registration, DNS record optimization (SPF, DKIM, DMARC), and corporate email setup for maximum deliverability.",
        metrics: "100% Email Deliverability",
      },
    ],
    technologies: [
      "AWS",
      "DigitalOcean",
      "Cloudflare",
      "Docker",
      "Nginx",
      "Linux / Ubuntu",
    ],
    businessBenefits: [
      "Eliminate server crashes during peak traffic and seasonal surges",
      "Protect your business against data loss with automated off-site backups",
      "Ensure corporate emails land in client inboxes, not spam folders",
      "Receive 24/7 proactive monitoring and rapid technical support",
    ],
    deliverables: [
      "Configured cloud server with production CI/CD deployment pipelines",
      "Automated daily/weekly snapshot backup configuration",
      "SSL certificates, Cloudflare CDN integration, and DDoS shielding",
      "Uptime monitoring alerts and server health telemetry dashboards",
    ],
    faq: [
      {
        question: "Do you handle website migration from our current host?",
        answer:
          "Yes, we perform complete zero-downtime website, database, and email migrations from your previous hosting provider.",
      },
      {
        question: "What happens if our website experiences unexpected traffic spikes?",
        answer:
          "We configure CDN caching, Redis object caching, and scalable cloud instances to handle heavy traffic loads effortlessly.",
      },
    ],
  },
];
