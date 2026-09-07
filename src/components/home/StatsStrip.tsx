import React from "react";
import { Container } from "../layout/Container";
import {
  Layers,
  Sparkles,
  Workflow,
  Server,
} from "lucide-react";

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      icon: <Layers className="w-6 h-6 text-cyan-tech" />,
      value: "5+",
      label: "Core Technology Services",
      detail: "Web, Data, AI, ERP/CRM & Cloud",
    },
    {
      icon: <Workflow className="w-6 h-6 text-cyan-tech" />,
      value: "End-to-End",
      label: "Digital Solutions",
      detail: "From ideation to deployment & support",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-cyan-tech" />,
      value: "AI + Data",
      label: "Driven Development",
      detail: "Intelligent workflows & custom models",
    },
    {
      icon: <Server className="w-6 h-6 text-cyan-tech" />,
      value: "24/7",
      label: "Digital Infrastructure",
      detail: "Managed uptime, security & SLA",
    },
  ];

  return (
    <section className="py-12 bg-brandBg-secondary font-sans">
      <Container>
        <div className="bg-navy border border-navy-light rounded-xl p-8 lg:p-10 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-start ${
                  index > 0 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8" : ""
                }`}
              >
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 mb-4">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-sans">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-200 mt-1">
                  {stat.label}
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {stat.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
