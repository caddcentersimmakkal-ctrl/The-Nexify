export interface NavItem {
  label: string;
  href: string;
  dropdown?: {
    label: string;
    href: string;
    description: string;
    icon: string;
  }[];
}

export const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      {
        label: "Web Development",
        href: "/services/web-development",
        description: "Modern websites, e-commerce, & enterprise portals",
        icon: "Code",
      },
      {
        label: "Data Analytics",
        href: "/services/data-analytics",
        description: "Power BI, SQL analytics, & business dashboards",
        icon: "BarChart3",
      },
      {
        label: "AI Automation",
        href: "/services/ai-automation",
        description: "AI assistants, document AI, & automated workflows",
        icon: "Sparkles",
      },
      {
        label: "ERP & CRM",
        href: "/services/erp-crm",
        description: "Unified operations, CRM, inventory, & GST billing",
        icon: "Database",
      },
      {
        label: "Web Hosting & Cloud",
        href: "/services/web-hosting",
        description: "Managed VPS, SSL security, & 24/7 infrastructure",
        icon: "Cloud",
      },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];
