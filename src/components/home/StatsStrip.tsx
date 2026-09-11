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

  return (
    <section className="relative overflow-hidden bg-brandBg-secondary py-16 lg:py-20 font-sans">

      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-tech/10 blur-3xl" />

      <Container>

        {/* Header */}
        <div className="relative mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-brand shadow-[0_0_10px_rgba(34,197,94,0.6)]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-green-brand">
                NEXIFY / CAPABILITIES
              </span>
            </div>

            <h2 className="text-2xl font-black tracking-tight text-navy sm:text-3xl">
              Built for modern digital operations.
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs text-brandText-secondary">
            <Activity className="h-4 w-4 text-green-brand" />
            <span>Technology · Intelligence · Infrastructure</span>
          </div>

        </div>


        {/* Main Stats Container */}
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-navy shadow-[0_20px_60px_rgba(15,23,42,0.15)]">

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-cyan-tech/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-green-brand/10 blur-3xl" />

          {/* Internal grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
          />

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`
                    group relative p-6 lg:p-8
                    transition-all duration-500
                    hover:bg-white/[0.045]
                    ${index !== 0 ? "border-t sm:border-t-0 sm:border-l border-white/10" : ""}
                    ${index === 2 ? "lg:border-l" : ""}
                  `}
                >

                  {/* Hover glow */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative">

                    {/* Top row */}
                    <div className="mb-8 flex items-center justify-between">

                      <div
                        className={`
                          flex h-11 w-11 items-center justify-center
                          rounded-xl border
                          transition-all duration-500
                          group-hover:scale-110
                          group-hover:rotate-3

                          ${
                            stat.accent === "green"
                              ? "border-green-brand/20 bg-green-brand/10 text-green-brand group-hover:bg-green-brand group-hover:text-white"
                              : stat.accent === "purple"
                              ? "border-purple-400/20 bg-purple-400/10 text-purple-300 group-hover:bg-purple-400 group-hover:text-white"
                              : stat.accent === "blue"
                              ? "border-blue-400/20 bg-blue-400/10 text-blue-300 group-hover:bg-blue-400 group-hover:text-white"
                              : "border-cyan-tech/20 bg-cyan-tech/10 text-cyan-tech group-hover:bg-cyan-tech group-hover:text-white"
                          }
                        `}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 group-hover:border-white/30 group-hover:text-white">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>

                    </div>


                    {/* Value */}
                    <div
                      className={`
                        mb-2 font-black tracking-[-0.04em] text-white
                        ${
                          stat.value.length > 5
                            ? "text-2xl lg:text-3xl"
                            : "text-4xl lg:text-5xl"
                        }
                      `}
                    >
                      {stat.value}
                    </div>


                    {/* Label */}
                    <div className="text-sm font-bold text-white/90">
                      {stat.label}
                    </div>


                    {/* Detail */}
                    <p className="mt-2 min-h-[34px] text-[11px] leading-relaxed text-white/40">
                      {stat.detail}
                    </p>


                    {/* Bottom indicator */}
                    <div className="mt-7 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className={`
                          h-full w-1/3 origin-left scale-x-50 rounded-full
                          transition-all duration-700
                          group-hover:w-full group-hover:scale-x-100
                          ${
                            stat.accent === "green"
                              ? "bg-green-brand"
                              : stat.accent === "purple"
                              ? "bg-purple-400"
                              : stat.accent === "blue"
                              ? "bg-blue-400"
                              : "bg-cyan-tech"
                          }
                        `}
                      />
                    </div>

                  </div>
                </div>
              );
            })}

          </div>


          {/* Bottom status bar */}
          <div className="relative flex flex-col gap-2 border-t border-white/10 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8">

            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-brand opacity-50" />
                <span className="relative h-2 w-2 rounded-full bg-green-brand" />
              </span>

              <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">
                Digital infrastructure ready
              </span>
            </div>

            <span className="font-mono text-[10px] text-white/25">
              NXF_CORE_SYSTEM / 2026
            </span>

          </div>

        </div>

      </Container>
    </section>
  );
};