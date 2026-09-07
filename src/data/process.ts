export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Understanding Core Business Challenges",
    description:
      "We begin by thoroughly analyzing your business workflow, pain points, technical bottlenecks, and strategic growth goals.",
    deliverables: ["Scope Definition", "Workflow Mapping", "Technical Feasibility"],
  },
  {
    step: "02",
    title: "Plan",
    subtitle: "Architecture & Roadmap Definition",
    description:
      "We design the technical architecture, data models, API endpoints, milestone schedules, and budget allocations with clear precision.",
    deliverables: ["Architecture Blueprint", "Project Timeline", "Tech Stack Selection"],
  },
  {
    step: "03",
    title: "Design",
    subtitle: "Corporate UI/UX & Data Schemas",
    description:
      "We build intuitive, high-fidelity wireframes, interactive dashboard interfaces, and frictionless user journeys adhering to modern design systems.",
    deliverables: ["Interactive Wireframes", "Design System Tokens", "User Flow Diagrams"],
  },
  {
    step: "04",
    title: "Develop",
    subtitle: "Modular, High-Performance Code",
    description:
      "Our engineers write clean, type-safe code, implement automated workflows, build custom algorithms, and link enterprise databases.",
    deliverables: ["Clean Modular Codebase", "API Documentation", "Sprint Demos"],
  },
  {
    step: "05",
    title: "Deploy",
    subtitle: "Testing, Hardening & Launch",
    description:
      "We conduct end-to-end security checks, load testing, SEO optimization, and zero-downtime production deployment on managed cloud servers.",
    deliverables: ["Security Hardening", "Cloud CI/CD Pipeline", "Production Release"],
  },
  {
    step: "06",
    title: "Support",
    subtitle: "Long-Term Evolution & Uptime",
    description:
      "We provide continuous 24/7 server monitoring, proactive security updates, periodic data backups, and iterative feature scaling.",
    deliverables: ["24/7 Monitoring", "Automated Backups", "SLA Maintenance"],
  },
];
