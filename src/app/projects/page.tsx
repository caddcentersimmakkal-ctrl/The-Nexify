"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projectsData } from "@/data/projects";
import { CTASection } from "@/components/home/CTASection";
import { clsx } from "clsx";

export default function ProjectsPage() {
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
    <div className="font-sans">
      {/* Hero Banner */}
      <section className="bg-navy text-white py-16 lg:py-24 relative overflow-hidden border-b border-navy-dark">
        <div className="absolute inset-0 hero-grid-pattern opacity-50 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-brand" />
              <span className="text-xs font-bold uppercase tracking-widest text-green-brand">
                PORTFOLIO & ARCHITECTURES
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Featured Work &{" "}
              <span className="text-green-brand">Demo Systems</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed">
              Explore sample software architectures, custom dashboards, AI assistants, and
              ERP platforms engineered by Nexify IT.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 bg-white border-b border-brandBorder">
        <Container>
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
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

          {/* 4-column responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
