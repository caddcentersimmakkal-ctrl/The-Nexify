"use client";

import React, { useMemo, useState } from "react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { technologiesData } from "@/data/technologies";
import {
  Code2,
  Database,
  Server,
  Cpu,
  Layers,
  ArrowUpRight,
  Sparkles,
  Terminal,
  Boxes,
} from "lucide-react";

const categoryConfig: Record<
  string,
  {
    icon: React.ElementType;
    color: string;
    bg: string;
    border: string;
    dot: string;
  }
> = {
  Frontend: {
    icon: Code2,
    color: "text-green-brand",
    bg: "bg-green-brand/10",
    border: "border-green-brand/20",
    dot: "bg-green-brand",
  },

  Backend: {
    icon: Server,
    color: "text-cyan-tech",
    bg: "bg-cyan-tech/10",
    border: "border-cyan-tech/20",
    dot: "bg-cyan-tech",
  },

  Database: {
    icon: Database,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    dot: "bg-blue-500",
  },

  "Data & AI": {
    icon: Cpu,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    dot: "bg-purple-500",
  },

  "DevOps & Cloud": {
    icon: Layers,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    dot: "bg-orange-500",
  },
};

export const TechStackSection: React.FC = () => {
  const categories = useMemo(() => {
    return Array.from(
      new Set(technologiesData.map((tech) => tech.category))
    );
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const filteredTechnologies =
    activeCategory === "All"
      ? technologiesData
      : technologiesData.filter(
          (tech) => tech.category === activeCategory
        );

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-20 lg:py-28 border-b border-brandBorder font-sans">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Green glow */}
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-green-brand/10 blur-3xl" />

        {/* Cyan glow */}
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-tech/10 blur-3xl" />

      </div>


      <Container>

        {/* ================= HEADER ================= */}

        <div className="relative mb-10">

          <SectionHeader
            eyebrow="TECHNOLOGY STACK"
            title="Technology that powers"
            highlightedText="Nexify"
            description="We combine proven frameworks, scalable infrastructure and intelligent technologies to build digital products that are fast, secure and built to evolve."
            className="mb-0"
          />

        </div>


        {/* ================= FILTER BAR ================= */}

        <div className="relative mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex flex-wrap gap-2">

            {/* ALL */}
            <button
              onClick={() => {
                setActiveCategory("All");
                setActiveTech(null);
              }}
              className={`
                rounded-full px-4 py-2
                text-xs font-bold
                transition-all duration-300
                ${
                  activeCategory === "All"
                    ? "bg-navy text-white shadow-md shadow-navy/15"
                    : "border border-slate-200 bg-white text-slate-500 hover:border-green-brand/40 hover:text-navy"
                }
              `}
            >
              All Technologies
            </button>


            {/* CATEGORIES */}
            {categories.map((category) => {

              const config =
                categoryConfig[category] || categoryConfig.Frontend;

              const Icon = config.icon;

              return (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveTech(null);
                  }}
                  className={`
                    group flex items-center gap-2
                    rounded-full px-4 py-2
                    text-xs font-bold
                    transition-all duration-300
                    ${
                      activeCategory === category
                        ? "bg-navy text-white shadow-md shadow-navy/15"
                        : "border border-slate-200 bg-white text-slate-500 hover:border-green-brand/40 hover:text-navy"
                    }
                  `}
                >
                  <Icon className="h-3.5 w-3.5" />

                  {category}
                </button>
              );
            })}

          </div>


          {/* Status */}
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-slate-400">

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-brand opacity-50" />
              <span className="relative h-2 w-2 rounded-full bg-green-brand" />
            </span>

            Technology ecosystem / active

          </div>

        </div>


        {/* ================= TECHNOLOGY PANEL ================= */}

        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-tech/10 blur-3xl" />

          <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-green-brand/10 blur-3xl" />


          {/* ================= PANEL HEADER ================= */}

          <div className="relative flex flex-col gap-4 border-b border-slate-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-green-brand shadow-sm">
                <Terminal className="h-4 w-4" />
              </div>

              <div>

                <p className="text-sm font-bold text-navy">
                  Nexify Technology Core
                </p>

                <p className="text-[10px] text-slate-400">
                  Tools selected for scalability, performance & maintainability
                </p>

              </div>

            </div>


            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-slate-400">

              <span>STACK</span>

              <span className="text-slate-300">/</span>

              <span className="font-bold text-navy">
                {filteredTechnologies.length
                  .toString()
                  .padStart(2, "0")}
              </span>

            </div>

          </div>


          {/* ================= TECHNOLOGY GRID ================= */}

          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">

            {filteredTechnologies.map((tech, index) => {

              const config =
                categoryConfig[tech.category] ||
                categoryConfig.Frontend;

              const Icon = config.icon;

              const isActive = activeTech === tech.name;

              return (
                <button
                  key={tech.name}
                  onMouseEnter={() => setActiveTech(tech.name)}
                  onMouseLeave={() => setActiveTech(null)}
                  onClick={() =>
                    setActiveTech(
                      isActive ? null : tech.name
                    )
                  }
                  className={`
                    group relative min-h-[160px]
                    border-b border-r border-slate-100
                    bg-white p-5 text-left
                    transition-all duration-300
                    hover:z-10
                    ${
                      isActive
                        ? "bg-slate-50 shadow-[inset_0_0_0_1px_rgba(15,23,42,0.04)]"
                        : "hover:bg-slate-50"
                    }
                  `}
                >

                  {/* Number */}
                  <span className="absolute right-4 top-4 font-mono text-[8px] font-bold text-slate-300">
                    {(index + 1)
                      .toString()
                      .padStart(2, "0")}
                  </span>


                  {/* Icon */}
                  <div
                    className={`
                      relative mb-6 flex h-10 w-10
                      items-center justify-center
                      rounded-xl border
                      ${config.bg}
                      ${config.border}
                      ${config.color}
                      transition-all duration-500
                      group-hover:scale-110
                      group-hover:-rotate-3
                    `}
                  >
                    <Icon className="h-4 w-4" />

                    {/* Glow */}
                    <div
                      className={`
                        absolute inset-0 rounded-xl
                        blur-md opacity-0
                        transition-opacity duration-500
                        group-hover:opacity-30
                        ${config.bg}
                      `}
                    />
                  </div>


                  {/* Name */}
                  <h3
                    className={`
                      relative text-sm font-bold
                      transition-colors duration-300
                      ${
                        isActive
                          ? "text-navy"
                          : "text-slate-700 group-hover:text-navy"
                      }
                    `}
                  >
                    {tech.name}
                  </h3>


                  {/* Description */}
                  <p className="relative mt-1.5 line-clamp-2 text-[10px] leading-relaxed text-slate-400">
                    {tech.description}
                  </p>


                  {/* Bottom category indicator */}
                  <div className="absolute bottom-0 left-5 right-5 h-[2px] overflow-hidden bg-slate-100">

                    <div
                      className={`
                        h-full origin-left rounded-full
                        transition-all duration-500
                        ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-1/2"
                        }
                        ${config.dot}
                      `}
                    />

                  </div>

                </button>
              );
            })}

          </div>


          {/* ================= FOOTER ================= */}

          <div className="relative flex flex-col gap-3 border-t border-slate-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">

            <div className="flex items-center gap-2">

              <Boxes className="h-3.5 w-3.5 text-cyan-tech" />

              <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-400">
                Modular architecture
              </span>

            </div>


            <div className="flex items-center gap-4 text-[9px] font-semibold uppercase tracking-widest text-slate-300">

              <span>Scalable</span>

              <span>•</span>

              <span>Secure</span>

              <span>•</span>

              <span>Maintainable</span>

            </div>

          </div>

        </div>


        {/* ================= ACTIVE TECHNOLOGY ================= */}

        <div
          className={`
            mt-4 overflow-hidden rounded-2xl
            border border-slate-200 bg-white
            transition-all duration-500
            ${
              activeTech
                ? "max-h-32 opacity-100"
                : "max-h-0 border-transparent opacity-0"
            }
          `}
        >

          {activeTech && (

            <div className="flex items-center justify-between gap-6 p-5">

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-brand/10 text-green-brand">

                  <Sparkles className="h-4 w-4" />

                </div>

                <div>

                  <p className="text-sm font-bold text-navy">
                    {activeTech}
                  </p>

                  <p className="mt-1 text-xs text-brandText-secondary">
                    {
                      technologiesData.find(
                        (tech) =>
                          tech.name === activeTech
                      )?.description
                    }
                  </p>

                </div>

              </div>

              <ArrowUpRight className="hidden h-5 w-5 text-slate-300 sm:block" />

            </div>

          )}

        </div>

      </Container>

    </section>
  );
};