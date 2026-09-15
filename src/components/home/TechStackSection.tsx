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

/* =========================================================
   CATEGORY CONFIGURATION
========================================================= */

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

/* =========================================================
   TECHNOLOGY LOGOS
========================================================= */

/*
  The key must match tech.name from technologiesData.

  Simple Icons CDN is used so you don't need to download
  individual SVG files into your project.
*/

const techLogos: Record<string, string> = {
  /* ---------------- FRONTEND ---------------- */

  React: "https://cdn.simpleicons.org/react/61DAFB",

  "Next.js": "https://cdn.simpleicons.org/nextdotjs/000000",

  Vue: "https://cdn.simpleicons.org/vuedotjs/4FC08D",

  "Vue.js": "https://cdn.simpleicons.org/vuedotjs/4FC08D",

  Angular: "https://cdn.simpleicons.org/angular/DD0031",

  JavaScript:
    "https://cdn.simpleicons.org/javascript/F7DF1E",

  TypeScript:
    "https://cdn.simpleicons.org/typescript/3178C6",

  HTML5:
    "https://cdn.simpleicons.org/html5/E34F26",

  HTML:
    "https://cdn.simpleicons.org/html5/E34F26",

  CSS3:
    "https://cdn.simpleicons.org/css/1572B6",

  CSS:
    "https://cdn.simpleicons.org/css/1572B6",

  TailwindCSS:
    "https://cdn.simpleicons.org/tailwindcss/06B6D4",

  "Tailwind CSS":
    "https://cdn.simpleicons.org/tailwindcss/06B6D4",

  Bootstrap:
    "https://cdn.simpleicons.org/bootstrap/7952B3",

  /* ---------------- BACKEND ---------------- */

  Python:
    "https://cdn.simpleicons.org/python/3776AB",

  FastAPI:
    "https://cdn.simpleicons.org/fastapi/009688",

  Node:
    "https://cdn.simpleicons.org/nodedotjs/339933",

  "Node.js":
    "https://cdn.simpleicons.org/nodedotjs/339933",

  Express:
    "https://cdn.simpleicons.org/express/000000",

  "Express.js":
    "https://cdn.simpleicons.org/express/000000",

  Java:
    "https://cdn.simpleicons.org/openjdk/000000",

  "Java SE":
    "https://cdn.simpleicons.org/openjdk/000000",

  PHP:
    "https://cdn.simpleicons.org/php/777BB4",

  "C++":
    "https://cdn.simpleicons.org/cplusplus/00599C",

  C:
    "https://cdn.simpleicons.org/c/00599C",

  ".NET":
    "https://cdn.simpleicons.org/dotnet/512BD4",

  ".NET Core":
    "https://cdn.simpleicons.org/dotnet/512BD4",

  /* ---------------- DATABASE ---------------- */

  MySQL:
    "https://cdn.simpleicons.org/mysql/4479A1",

  PostgreSQL:
    "https://cdn.simpleicons.org/postgresql/4169E1",

  MongoDB:
    "https://cdn.simpleicons.org/mongodb/47A248",

  Redis:
    "https://cdn.simpleicons.org/redis/DC382D",

  SQLite:
    "https://cdn.simpleicons.org/sqlite/003B57",

  Firebase:
    "https://cdn.simpleicons.org/firebase/FFCA28",

  Supabase:
    "https://cdn.simpleicons.org/supabase/3FCF8E",

  /* ---------------- DATA & AI ---------------- */

  Pandas:
    "https://cdn.simpleicons.org/pandas/150458",

  NumPy:
    "https://cdn.simpleicons.org/numpy/013243",

  TensorFlow:
    "https://cdn.simpleicons.org/tensorflow/FF6F00",

  PyTorch:
    "https://cdn.simpleicons.org/pytorch/EE4C2C",

  OpenAI:
    "https://cdn.simpleicons.org/openai/000000",

  Gemini:
    "https://cdn.simpleicons.org/googlegemini/8E75B2",

  "Google Gemini":
    "https://cdn.simpleicons.org/googlegemini/8E75B2",

  LangChain:
    "https://cdn.simpleicons.org/langchain/1C3C3C",

  Jupyter:
    "https://cdn.simpleicons.org/jupyter/F37626",

  ScikitLearn:
    "https://cdn.simpleicons.org/scikitlearn/F7931E",

  "Scikit-learn":
    "https://cdn.simpleicons.org/scikitlearn/F7931E",

  "Power BI":
    "https://cdn.simpleicons.org/powerbi/F2C811",

  /* ---------------- DEVOPS & CLOUD ---------------- */

  Docker:
    "https://cdn.simpleicons.org/docker/2496ED",

  Git:
    "https://cdn.simpleicons.org/git/F05032",

  GitHub:
    "https://cdn.simpleicons.org/github/181717",

  GitLab:
    "https://cdn.simpleicons.org/gitlab/FC6D26",

  AWS:
    "https://cdn.simpleicons.org/amazonwebservices/232F3E",

  Vercel:
    "https://cdn.simpleicons.org/vercel/000000",

  Render:
    "https://cdn.simpleicons.org/render/46E3B7",

  Kubernetes:
    "https://cdn.simpleicons.org/kubernetes/326CE5",

  Nginx:
    "https://cdn.simpleicons.org/nginx/009639",
};

/* =========================================================
   COMPONENT
========================================================= */

export const TechStackSection: React.FC = () => {
  /* =========================================================
     CATEGORIES
  ========================================================= */

  const categories = useMemo(() => {
    return Array.from(
      new Set(technologiesData.map((tech) => tech.category))
    );
  }, []);

  /* =========================================================
     STATE
  ========================================================= */

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [activeTech, setActiveTech] =
    useState<string | null>(null);

  /* =========================================================
     FILTERED TECHNOLOGIES
  ========================================================= */

  const filteredTechnologies =
    activeCategory === "All"
      ? technologiesData
      : technologiesData.filter(
          (tech) => tech.category === activeCategory
        );

  /* =========================================================
     ACTIVE TECHNOLOGY DATA
  ========================================================= */

  const selectedTechnology = activeTech
    ? technologiesData.find(
        (tech) => tech.name === activeTech
      )
    : null;

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <section className="relative overflow-hidden border-b border-brandBorder bg-[#f8fafc] py-20 font-sans lg:py-28">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Green glow */}
        <div
          className="
            absolute
            -left-32
            top-20
            h-96
            w-96
            rounded-full
            bg-green-brand/10
            blur-3xl
          "
        />

        {/* Cyan glow */}
        <div
          className="
            absolute
            right-0
            top-0
            h-96
            w-96
            rounded-full
            bg-cyan-tech/10
            blur-3xl
          "
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <Container>

        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="relative mb-10">

          <SectionHeader
            eyebrow="TECHNOLOGY STACK"
            title="Technology that powers"
            highlightedText="Nexify"
            description="We combine proven frameworks, scalable infrastructure and intelligent technologies to build digital products that are fast, secure and built to evolve."
            className="mb-0"
          />

        </div>

        {/* ===================================================
            FILTER BAR
        =================================================== */}

        <div className="relative mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Category buttons */}
          <div className="flex flex-wrap gap-2">

            {/* ALL */}
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setActiveTech(null);
              }}
              className={`
                rounded-full
                px-4
                py-2
                text-xs
                font-bold
                transition-all
                duration-300

                ${
                  activeCategory === "All"
                    ? `
                      bg-navy
                      text-white
                      shadow-md
                      shadow-navy/15
                    `
                    : `
                      border
                      border-slate-200
                      bg-white
                      text-slate-500
                      hover:border-green-brand/40
                      hover:text-navy
                    `
                }
              `}
            >
              All Technologies
            </button>

            {/* CATEGORIES */}
            {categories.map((category) => {

              const config =
                categoryConfig[category] ||
                categoryConfig.Frontend;

              const Icon = config.icon;

              return (
                <button
                  type="button"
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveTech(null);
                  }}
                  className={`
                    group
                    flex
                    items-center
                    gap-2
                    rounded-full
                    px-4
                    py-2
                    text-xs
                    font-bold
                    transition-all
                    duration-300

                    ${
                      activeCategory === category
                        ? `
                          bg-navy
                          text-white
                          shadow-md
                          shadow-navy/15
                        `
                        : `
                          border
                          border-slate-200
                          bg-white
                          text-slate-500
                          hover:border-green-brand/40
                          hover:text-navy
                        `
                    }
                  `}
                >

                  <Icon
                    className={`
                      h-3.5
                      w-3.5
                      ${
                        activeCategory === category
                          ? "text-green-brand"
                          : "text-slate-400 group-hover:text-green-brand"
                      }
                    `}
                  />

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

        {/* ===================================================
            TECHNOLOGY PANEL
        =================================================== */}

        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">

          {/* Decorative glows */}
          <div
            className="
              pointer-events-none
              absolute
              -right-32
              -top-32
              h-80
              w-80
              rounded-full
              bg-cyan-tech/10
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -left-32
              bottom-0
              h-80
              w-80
              rounded-full
              bg-green-brand/10
              blur-3xl
            "
          />

          {/* =================================================
              PANEL HEADER
          ================================================= */}

          <div className="relative flex flex-col gap-4 border-b border-slate-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">

            {/* Left */}
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

            {/* Right */}
            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-slate-400">

              <span>
                STACK
              </span>

              <span className="text-slate-300">
                /
              </span>

              <span className="font-bold text-navy">
                {filteredTechnologies.length
                  .toString()
                  .padStart(2, "0")}
              </span>

            </div>

          </div>

          {/* =================================================
              TECHNOLOGY GRID
          ================================================= */}

          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">

            {filteredTechnologies.map(
              (tech, index) => {

                const config =
                  categoryConfig[tech.category] ||
                  categoryConfig.Frontend;

                const Icon = config.icon;

                const isActive =
                  activeTech === tech.name;

                const logo =
                  techLogos[tech.name];

                return (
                  <button
                    type="button"
                    key={tech.name}
                    onMouseEnter={() =>
                      setActiveTech(tech.name)
                    }
                    onMouseLeave={() =>
                      setActiveTech(null)
                    }
                    onClick={() =>
                      setActiveTech(
                        isActive
                          ? null
                          : tech.name
                      )
                    }
                    className={`
                      group
                      relative
                      min-h-[180px]
                      border-b
                      border-r
                      border-slate-100
                      bg-white
                      p-5
                      text-left
                      transition-all
                      duration-300
                      hover:z-10

                      ${
                        isActive
                          ? `
                            bg-slate-50
                            shadow-[inset_0_0_0_1px_rgba(15,23,42,0.04)]
                          `
                          : `
                            hover:bg-slate-50
                          `
                      }
                    `}
                  >

                    {/* =====================================
                        NUMBER
                    ===================================== */}

                    <span className="absolute right-4 top-4 font-mono text-[8px] font-bold text-slate-300">
                      {(index + 1)
                        .toString()
                        .padStart(2, "0")}
                    </span>

                    {/* =====================================
                        TECHNOLOGY LOGO
                    ===================================== */}

                    <div
                      className={`
                        relative
                        mb-6
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        transition-all
                        duration-500

                        ${
                          isActive
                            ? `
                              scale-105
                              border-slate-300
                              bg-white
                              shadow-lg
                            `
                            : `
                              group-hover:scale-105
                              group-hover:-rotate-2
                              group-hover:border-slate-300
                              group-hover:bg-white
                              group-hover:shadow-md
                            `
                        }
                      `}
                    >

                      {logo ? (
                        <img
                          src={logo}
                          alt={`${tech.name} logo`}
                          className="
                            relative
                            z-10
                            h-7
                            w-7
                            object-contain
                          "
                          loading="lazy"
                          onError={(event) => {
                            event.currentTarget.style.display =
                              "none";

                            const fallback =
                              event.currentTarget
                                .nextElementSibling;

                            if (fallback) {
                              fallback.classList.remove(
                                "hidden"
                              );
                            }
                          }}
                        />
                      ) : null}

                      {/* Fallback icon */}
                      <Icon
                        className={`
                          h-5
                          w-5
                          ${config.color}
                          ${
                            logo
                              ? "hidden"
                              : "block"
                          }
                        `}
                        strokeWidth={1.8}
                      />

                      {/* Logo glow */}
                      <div
                        className={`
                          pointer-events-none
                          absolute
                          inset-0
                          rounded-xl
                          blur-xl
                          opacity-0
                          transition-opacity
                          duration-500
                          group-hover:opacity-30
                          ${config.bg}
                        `}
                      />

                    </div>

                    {/* =====================================
                        NAME
                    ===================================== */}

                    <h3
                      className={`
                        relative
                        text-sm
                        font-bold
                        transition-colors
                        duration-300

                        ${
                          isActive
                            ? "text-navy"
                            : "text-slate-700 group-hover:text-navy"
                        }
                      `}
                    >
                      {tech.name}
                    </h3>

                    {/* =====================================
                        DESCRIPTION
                    ===================================== */}

                    <p className="relative mt-1.5 line-clamp-2 text-[10px] leading-relaxed text-slate-400">
                      {tech.description}
                    </p>

                    {/* =====================================
                        CATEGORY LABEL
                    ===================================== */}

                    <div className="mt-3 flex items-center gap-1.5">

                      <span
                        className={`
                          h-1.5
                          w-1.5
                          rounded-full
                          ${config.dot}
                        `}
                      />

                      <span className="text-[8px] font-semibold uppercase tracking-wider text-slate-300">
                        {tech.category}
                      </span>

                    </div>

                    {/* =====================================
                        BOTTOM INDICATOR
                    ===================================== */}

                    <div className="absolute bottom-0 left-5 right-5 h-[2px] overflow-hidden bg-slate-100">

                      <div
                        className={`
                          h-full
                          origin-left
                          rounded-full
                          transition-all
                          duration-500

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
              }
            )}

          </div>

          {/* =================================================
              PANEL FOOTER
          ================================================= */}

          <div className="relative flex flex-col gap-3 border-t border-slate-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">

            {/* Left */}
            <div className="flex items-center gap-2">

              <Boxes className="h-3.5 w-3.5 text-cyan-tech" />

              <span className="text-[9px] font-semibold uppercase tracking-widest text-slate-400">
                Modular architecture
              </span>

            </div>

            {/* Right */}
            <div className="flex items-center gap-4 text-[9px] font-semibold uppercase tracking-widest text-slate-300">

              <span>
                Scalable
              </span>

              <span>
                •
              </span>

              <span>
                Secure
              </span>

              <span>
                •
              </span>

              <span>
                Maintainable
              </span>

            </div>

          </div>

        </div>

        {/* ===================================================
            ACTIVE TECHNOLOGY
        =================================================== */}

        <div
          className={`
            mt-4
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            transition-all
            duration-500

            ${
              activeTech
                ? "max-h-32 opacity-100"
                : "max-h-0 border-transparent opacity-0"
            }
          `}
        >

          {activeTech && selectedTechnology && (

            <div className="flex items-center justify-between gap-6 p-5">

              {/* Technology information */}
              <div className="flex items-center gap-4">

                {/* Actual logo */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50">

                  {techLogos[activeTech] ? (
                    <img
                      src={techLogos[activeTech]}
                      alt={`${activeTech} logo`}
                      className="h-6 w-6 object-contain"
                    />
                  ) : (
                    <Sparkles className="h-4 w-4 text-green-brand" />
                  )}

                </div>

                <div>

                  <p className="text-sm font-bold text-navy">
                    {selectedTechnology.name}
                  </p>

                  <p className="mt-1 text-xs text-brandText-secondary">
                    {selectedTechnology.description}
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