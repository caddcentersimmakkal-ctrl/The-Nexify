export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Data & AI" | "DevOps & Cloud";
  description: string;
}

export const technologiesData: TechItem[] = [
  { name: "Next.js", category: "Frontend", description: "React Framework for Production" },
  { name: "React", category: "Frontend", description: "Component UI Architecture" },
  { name: "TypeScript", category: "Frontend", description: "Type-Safe Robust Codebase" },
  { name: "Python", category: "Backend", description: "Data Engineering & AI Pipelines" },
  { name: "FastAPI", category: "Backend", description: "High-Performance Asynchronous APIs" },
  { name: "Node.js", category: "Backend", description: "Scalable Event-Driven Services" },
  { name: "PostgreSQL", category: "Database", description: "Relational Enterprise Database" },
  { name: "MySQL", category: "Database", description: "Structured Relational Storage" },
  { name: "MongoDB", category: "Database", description: "Flexible Document Data Stores" },
  { name: "Power BI", category: "Data & AI", description: "Business Intelligence & Reporting" },
  { name: "AI / LLM", category: "Data & AI", description: "Custom Knowledge Assistants & OCR" },
  { name: "Docker", category: "DevOps & Cloud", description: "Containerized Microservices" },
  { name: "Git & GitHub", category: "DevOps & Cloud", description: "Version Control & CI/CD Pipelines" },
  { name: "Cloud Infrastructure", category: "DevOps & Cloud", description: "AWS, DigitalOcean & Cloudflare" },
];
