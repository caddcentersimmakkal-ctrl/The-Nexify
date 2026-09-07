"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { ProjectCard } from "../ui/ProjectCard";
import { projectsData } from "@/data/projects";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

export const FeaturedProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Web Development",
    "Data Analytics",
    "AI Automation",
    "ERP / CRM",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-brandBorder font-sans">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <SectionHeader
            eyebrow="FEATURED WORK"
            title="Engineered Solutions &"
            highlightedText="Demo Systems"
            description="Explore our sample technical architectures, customized business dashboards, intelligent AI bots, and ERP workflows."
          />

          <div className="hidden sm:block flex-shrink-0">
            <Button
              href="/projects"
              variant="secondary-light"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All Work
            </Button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                "px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap border",
                activeCategory === cat
                  ? "bg-navy text-white border-navy"
                  : "bg-brandBg-secondary text-brandText-secondary border-brandBorder hover:border-gray-400 hover:text-navy"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4-Column Desktop / 2-Col Tablet / 1-Col Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Mobile View All button */}
        <div className="mt-8 text-center sm:hidden">
          <Button
            href="/projects"
            variant="secondary-light"
            size="md"
            className="w-full"
          >
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
};
