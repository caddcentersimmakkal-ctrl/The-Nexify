"use client";

import React, { useState } from "react";
import { ProjectItem } from "@/data/projects";
import { ProjectMockup } from "./ProjectMockup";
import { ArrowRight, Sparkles, ExternalLink, X, CheckCircle2 } from "lucide-react";
import { Button } from "./Button";
import { clsx } from "clsx";

interface ProjectCardProps {
  project: ProjectItem;
  className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  className = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className={clsx(
          "group bg-white border border-brandBorder rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-green-brand/50 shadow-card hover:shadow-cardHover",
          className
        )}
      >
        <div>
          {/* Mockup Preview Area (16:10 aspect ratio) */}
          <div className="relative w-full aspect-[16/10] bg-navy-dark overflow-hidden border-b border-brandBorder">
            <ProjectMockup type={project.mockupType} />
            <div className="absolute top-3 right-3 z-10">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-navy-dark/90 text-white border border-white/20">
                Demo Project
              </span>
            </div>
          </div>

          {/* Card Content (16-20px padding) */}
          <div className="p-5 sm:p-6">
            {/* Category in Nexify Green */}
            <div className="text-xs font-bold uppercase tracking-wider text-green-brand mb-2">
              {project.category}
            </div>

            {/* Project Title */}
            <h3 className="text-lg font-bold text-navy group-hover:text-green-brand transition-colors mb-2 leading-snug">
              {project.title}
            </h3>

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-brandText-secondary leading-relaxed mb-4 line-clamp-2">
              {project.shortDescription}
            </p>

            {/* Metrics Chips */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="bg-brandBg-secondary px-2.5 py-1 rounded text-[11px] font-semibold text-navy border border-brandBorder flex items-center gap-1"
                >
                  <span className="text-brandText-secondary font-normal">{m.label}:</span>
                  <span className="text-green-brand font-bold">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card Action Link */}
        <div className="px-5 sm:px-6 pb-5 pt-0">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full py-2.5 px-3 rounded-md bg-brandBg-secondary hover:bg-green-brand hover:text-white text-navy font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-1.5 group-hover:border-green-brand"
          >
            <span>View Architecture & Scope</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* In-depth Project Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-brandBorder relative my-8">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-navy rounded-full hover:bg-brandBg-secondary transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-bold uppercase tracking-wider text-green-brand mb-1">
              {project.category} Showcase
            </div>

            <h3 className="text-2xl font-extrabold text-navy mb-3">
              {project.title}
            </h3>

            <div className="w-full aspect-[16/9] bg-navy-dark rounded-lg overflow-hidden my-4 border border-brandBorder">
              <ProjectMockup type={project.mockupType} />
            </div>

            <p className="text-sm text-brandText-secondary leading-relaxed mb-4">
              {project.fullDescription}
            </p>

            <div className="my-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-2">
                Technical Highlights & Scope:
              </h4>
              <div className="space-y-2">
                {project.uiHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-xs text-brandText-primary"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-brand flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="my-4 pt-4 border-t border-brandBorder flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium bg-brandBg-secondary px-2.5 py-1 rounded text-navy border border-brandBorder"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-brandBorder flex items-center justify-between">
              <span className="text-xs text-brandText-secondary">
                Need a similar system for your company?
              </span>
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                onClick={() => setIsModalOpen(false)}
              >
                Discuss This Architecture
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
