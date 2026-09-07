import React from "react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { technologiesData } from "@/data/technologies";
import { Code, Database, Server, Cpu, Layers } from "lucide-react";

export const TechStackSection: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Code className="w-3.5 h-3.5 text-green-brand" />;
      case "Backend":
        return <Server className="w-3.5 h-3.5 text-navy" />;
      case "Database":
        return <Database className="w-3.5 h-3.5 text-cyan-tech" />;
      case "Data & AI":
        return <Cpu className="w-3.5 h-3.5 text-green-brand" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-navy" />;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-brandBorder font-sans">
      <Container>
        <SectionHeader
          eyebrow="TECHNOLOGY STACK"
          title="Modern Technologies We"
          highlightedText="Work With"
          description="We select proven, enterprise-standard languages, databases, and frameworks ensuring long-term maintainability, speed, and security."
          className="mb-12"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {technologiesData.map((tech) => (
            <div
              key={tech.name}
              className="p-4 bg-brandBg-secondary rounded-lg border border-brandBorder hover:border-green-brand/60 hover:bg-white hover:shadow-card transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-green-brand transition-colors">
                  {tech.category}
                </span>
                {getCategoryIcon(tech.category)}
              </div>

              <div className="text-sm font-bold text-navy group-hover:text-navy leading-tight">
                {tech.name}
              </div>

              <p className="text-[11px] text-brandText-secondary mt-1.5 line-clamp-2">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
