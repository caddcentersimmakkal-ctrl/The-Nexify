export interface ProjectItem {
  id: string;
  title: string;
  category: "Data Analytics" | "Web Development" | "AI Automation" | "ERP / CRM";
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  uiHighlights: string[];
  mockupType:
    | "dashboard"
    | "ecommerce"
    | "ai-assistant"
    | "crm-erp"
    | "corporate"
    | "inventory";
}

export const projectsData: ProjectItem[] = [
  {
    id: "business-analytics-dashboard",
    title: "Business Analytics Dashboard",
    category: "Data Analytics",
    shortDescription:
      "Enterprise executive dashboard consolidating sales, inventory velocity, and multi-branch revenue KPIs.",
    fullDescription:
      "A comprehensive business intelligence dashboard built for multi-branch retail and distribution operations. It replaces manual spreadsheet consolidation with real-time automated data refreshes, visual forecasting models, and interactive drill-downs.",
    tags: ["Power BI", "SQL Warehousing", "Python", "Data Modeling"],
    metrics: [
      { label: "Reporting Speed", value: "+85%" },
      { label: "Data Accuracy", value: "99.9%" },
      { label: "Branches Synced", value: "12+" },
    ],
    accentColor: "#00A8C6",
    uiHighlights: [
      "Real-time revenue velocity chart with date range comparative filters",
      "Branch-wise margin breakdown with automated anomaly detection alerts",
      "Executive export to PDF with 1-click scheduled email triggers",
    ],
    mockupType: "dashboard",
  },
  {
    id: "ecommerce-platform",
    title: "Modern E-Commerce Platform",
    category: "Web Development",
    shortDescription:
      "High-performance B2B & B2C digital storefront with instant catalog search and automated checkout.",
    fullDescription:
      "A blazing-fast e-commerce experience engineered with Next.js and secure payment integrations. Includes an optimized product catalog, instantaneous filtering, coupon engine, dynamic cart management, and seamless mobile checkout.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Payment Gateway"],
    metrics: [
      { label: "Load Time", value: "0.9s" },
      { label: "Checkout Conversion", value: "+38%" },
      { label: "Mobile Score", value: "98/100" },
    ],
    accentColor: "#45B649",
    uiHighlights: [
      "Instant faceted search with real-time price & category filtering",
      "Frictionless 3-step checkout with UPI, Net Banking & Card support",
      "Live order status tracker with WhatsApp notification dispatch",
    ],
    mockupType: "ecommerce",
  },
  {
    id: "ai-customer-assistant",
    title: "AI Customer Support Assistant",
    category: "AI Automation",
    shortDescription:
      "Intelligent 24/7 conversational bot trained on internal SOPs and catalog databases for instant query resolution.",
    fullDescription:
      "An enterprise AI chatbot solution that integrates into company websites and messaging channels. Uses vector retrieval to answer complex customer inquiries, process order lookups, and automatically triage support tickets.",
    tags: ["AI / LLM", "Python FastAPI", "Vector Search", "Automation"],
    metrics: [
      { label: "First Response", value: "< 2s" },
      { label: "Query Resolution", value: "84%" },
      { label: "Support Coverage", value: "24/7" },
    ],
    accentColor: "#00A8C6",
    uiHighlights: [
      "Context-aware natural language understanding with multilingual support",
      "Automated fallback escalation to human representatives",
      "Direct integration with CRM ticket logging and customer profiles",
    ],
    mockupType: "ai-assistant",
  },
  {
    id: "business-management-system",
    title: "Business Management System",
    category: "ERP / CRM",
    shortDescription:
      "Unified enterprise CRM connecting leads, sales pipelines, client contracts, and GST invoicing.",
    fullDescription:
      "An all-in-one operations portal replacing disjointed commercial tools. Features end-to-end lead stages, automated quotation generators, client history timelines, contract expiry reminders, and financial ledger reconciliations.",
    tags: ["PostgreSQL", "Node.js", "React", "Role-Based Access"],
    metrics: [
      { label: "Sales Cycle", value: "-25%" },
      { label: "Quote Turnaround", value: "5 mins" },
      { label: "Audit Compliance", value: "100%" },
    ],
    accentColor: "#06264A",
    uiHighlights: [
      "Drag-and-drop Kanban pipeline for prospect stages and deal values",
      "1-click GST invoice generator with automated ledger posting",
      "Granular role-based permissions for sales reps, managers, and accountants",
    ],
    mockupType: "crm-erp",
  },
  {
    id: "corporate-technology-website",
    title: "Corporate Website & Portal",
    category: "Web Development",
    shortDescription:
      "Corporate web presence crafted for B2B authority, client self-service, and lead generation.",
    fullDescription:
      "A modern corporate brand website engineered to establish industry leadership. Features sleek typography, fast asset loading, accessible interaction design, dynamic service showcases, and a secure client document repository.",
    tags: ["Next.js", "SEO Engineered", "Framer Motion", "Cloudflare"],
    metrics: [
      { label: "Lighthouse Score", value: "100" },
      { label: "Bounce Rate", value: "-40%" },
      { label: "Organic Search", value: "+120%" },
    ],
    accentColor: "#45B649",
    uiHighlights: [
      "Strict corporate visual hierarchy with interactive service explorers",
      "Rich interactive case study showcases with structured metadata",
      "Secure client inquiry hub with automated spam prevention",
    ],
    mockupType: "corporate",
  },
  {
    id: "inventory-management-system",
    title: "Inventory Management System",
    category: "ERP / CRM",
    shortDescription:
      "Multi-warehouse stock tracking system with automated reorder levels and supplier integration.",
    fullDescription:
      "A robust warehouse and stock control system designed to eliminate stockouts and wastage. Tracks SKU movements, batch numbers, barcode entries, low-stock thresholds, and purchase order lifecycles in real time.",
    tags: ["ERP", "Database Design", "Barcode Engine", "Cloud VPS"],
    metrics: [
      { label: "Stock Accuracy", value: "99.8%" },
      { label: "Stockout Reduction", value: "90%" },
      { label: "Warehouse Sync", value: "Instant" },
    ],
    accentColor: "#06264A",
    uiHighlights: [
      "Live multi-warehouse stock visualizer with real-time SKU levels",
      "Automated PO trigger when raw materials reach minimum threshold",
      "Barcode scanning interface optimized for handheld warehouse scanners",
    ],
    mockupType: "inventory",
  },
];
