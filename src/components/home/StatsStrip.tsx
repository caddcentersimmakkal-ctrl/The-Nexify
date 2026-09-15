"use client";

import React from "react";
import { Container } from "../layout/Container";
import {
  Layers,
  Sparkles,
  Workflow,
  Server,
  ArrowUpRight,
  Activity,
} from "lucide-react";

export const StatsStrip: React.FC = () => {
  const stats = [
    {
      icon: Layers,
      value: "5+",
      label: "Core Technology Services",
      detail: "Web · Data · AI · ERP/CRM · Cloud",
      accent: "cyan",
    },
    {
      icon: Workflow,
      value: "End-to-End",
      label: "Digital Solutions",
      detail: "Ideation → Development → Deployment",
      accent: "green",
    },
    {
      icon: Sparkles,
      value: "AI + Data",
      label: "Driven Development",
      detail: "Intelligent workflows & custom models",
      accent: "purple",
    },
    {
      icon: Server,
      value: "24/7",
      label: "Digital Infrastructure",
      detail: "Managed uptime · Security · SLA",
      accent: "blue",
    },
  ];

  const accentStyles: Record<
    string,
    {
      icon: string;
      bg: string;
      line: string;
      glow: string;
    }
  > = {
    cyan: {
      icon: "text-cyan-600",
      bg: "bg-cyan-50",
      line: "bg-cyan-500",
      glow: "group-hover:shadow-cyan-500/10",
    },
    green: {
      icon: "text-green-brand",
      bg: "bg-green-brand/10",
      line: "bg-green-brand",
      glow: "group-hover:shadow-green-brand/10",
    },
    purple: {
      icon: "text-violet-600",
      bg: "bg-violet-50",
      line: "bg-violet-500",
      glow: "group-hover:shadow-violet-500/10",
    },
    blue: {
      icon: "text-blue-600",
      bg: "bg-blue-50",
      line: "bg-blue-500",
      glow: "group-hover:shadow-blue-500/10",
    },
  };

  return (
    <section className="relative overflow-hidden bg-brandBg-secondary py-20 lg:py-28">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Soft atmospheric glows */}
        <div className="absolute left-[-160px] top-[-160px] h-[420px] w-[420px] rounded-full bg-cyan-300/[0.07] blur-[120px]" />

        <div className="absolute right-[-140px] bottom-[-160px] h-[420px] w-[420px] rounded-full bg-green-300/[0.07] blur-[120px]" />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,23,42,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Soft fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(247,250,249,0.7)_90%)]" />
      </div>

      <Container>
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="relative mb-10 lg:mb-12">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            {/* Left */}
            <div>

              <div className="mb-4 flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-green-brand" />

                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-green-brand">
                  NEXIFY / CAPABILITIES
                </span>

              </div>

              <h2 className="max-w-2xl text-3xl font-black tracking-[-0.04em] text-navy sm:text-4xl lg:text-[42px]">
                Built for modern
                <span className="text-green-brand">
                  {" "}digital operations.
                </span>
              </h2>

            </div>

            {/* Right */}
            <div className="flex items-center gap-2 text-xs text-brandText-secondary lg:pb-1">

              <Activity className="h-4 w-4 text-green-brand" />

              <span>
                Technology · Intelligence · Infrastructure
              </span>

            </div>

          </div>
        </div>

        {/* =========================================================
            STATS
        ========================================================= */}

        <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const style = accentStyles[stat.accent];

            return (
              <div
                key={stat.label}
                className={`
                  group relative
                  overflow-hidden
                  rounded-[24px]
                  border border-slate-200/80
                  bg-white
                  p-6
                  shadow-[0_12px_45px_rgba(15,23,42,0.045)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-slate-300
                  hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)]
                  ${style.glow}
                  lg:p-7
                `}
              >

                {/* =================================================
                    TOP
                ================================================= */}

                <div className="relative flex items-start justify-between">

                  {/* Icon */}
                  <div
                    className={`
                      flex h-11 w-11
                      items-center justify-center
                      rounded-xl
                      ${style.bg}
                      ${style.icon}
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:rotate-2
                    `}
                  >
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Number */}
                  <span className="font-mono text-[9px] font-semibold tracking-[0.2em] text-slate-300">
                    0{index + 1}
                  </span>

                </div>

                {/* =================================================
                    VALUE
                ================================================= */}

                <div className="relative mt-9">

                  <div
                    className={`
                      font-black
                      leading-none
                      tracking-[-0.055em]
                      text-navy
                      ${
                        stat.value.length > 5
                          ? "text-3xl lg:text-[38px]"
                          : "text-5xl lg:text-[52px]"
                      }
                    `}
                  >
                    {stat.value}
                  </div>

                </div>

                {/* =================================================
                    LABEL
                ================================================= */}

                <div className="relative mt-4">

                  <h3 className="text-sm font-extrabold tracking-tight text-navy">
                    {stat.label}
                  </h3>

                  <p className="mt-2 min-h-[38px] max-w-[230px] text-[11px] leading-5 text-brandText-secondary">
                    {stat.detail}
                  </p>

                </div>

                {/* =================================================
                    BOTTOM ACCENT
                ================================================= */}

                <div className="relative mt-7 h-[2px] w-full overflow-hidden rounded-full bg-slate-100">

                  <div
                    className={`
                      h-full
                      w-1/4
                      rounded-full
                      ${style.line}
                      transition-all
                      duration-700
                      group-hover:w-full
                    `}
                  />

                </div>

                {/* =================================================
                    CORNER DECORATION
                ================================================= */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    -bottom-16
                    -right-16
                    h-32
                    w-32
                    rounded-full
                    ${style.bg}
                    opacity-0
                    blur-2xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  `}
                />

              </div>
            );
          })}

        </div>

        {/* =========================================================
            BOTTOM STATUS
        ========================================================= */}

        <div className="relative mt-5 flex flex-col gap-3 rounded-[20px] border border-slate-200/70 bg-white/70 px-6 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-2">

            <span className="relative flex h-2 w-2">

              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-brand opacity-40" />

              <span className="relative h-2 w-2 rounded-full bg-green-brand" />

            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Digital infrastructure ready
            </span>

          </div>

          <span className="font-mono text-[9px] tracking-wider text-slate-300">
            NXF_CORE_SYSTEM / 2026
          </span>

        </div>

      </Container>
    </section>
  );
};