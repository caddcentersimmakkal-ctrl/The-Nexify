"use client";

import React from "react";
import {
  Globe2,
  BarChart3,
  Bot,
  Boxes,
  Cloud,
  ArrowUpRight,
  Sparkles,
  Database,
  Workflow,
  ShieldCheck,
} from "lucide-react";

export const HeroVisual: React.FC = () => {
  const services = [
    {
      title: "Web Development",
      subtitle: "Digital Experiences",
      icon: Globe2,
      position:
        "top-[2%] left-[2%] lg:top-[8%] lg:left-[4%]",
      accent: "text-cyan-tech",
      bg: "bg-cyan-tech/10",
      border: "border-cyan-tech/30",
      line: "bg-cyan-tech",
    },
    {
      title: "Data Analytics",
      subtitle: "Business Intelligence",
      icon: BarChart3,
      position:
        "top-[2%] right-[2%] lg:top-[8%] lg:right-[4%]",
      accent: "text-green-brand",
      bg: "bg-green-brand/10",
      border: "border-green-brand/30",
      line: "bg-green-brand",
    },
    {
      title: "AI Automation",
      subtitle: "Intelligent Workflows",
      icon: Bot,
      position:
        "bottom-[3%] left-[2%] lg:bottom-[8%] lg:left-[4%]",
      accent: "text-cyan-tech",
      bg: "bg-cyan-tech/10",
      border: "border-cyan-tech/30",
      line: "bg-cyan-tech",
    },
    {
      title: "ERP / CRM",
      subtitle: "Connected Operations",
      icon: Boxes,
      position:
        "bottom-[3%] right-[2%] lg:bottom-[8%] lg:right-[4%]",
      accent: "text-green-brand",
      bg: "bg-green-brand/10",
      border: "border-green-brand/30",
      line: "bg-green-brand",
    },
  ];

  return (
    <div className="relative w-full max-w-[680px] mx-auto h-[470px] sm:h-[520px] lg:h-[560px] select-none">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Main glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-cyan-tech/10 blur-[90px]" />

        {/* Secondary glow */}
        <div className="absolute left-[30%] top-[15%] w-[180px] h-[180px] rounded-full bg-green-brand/10 blur-[80px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
          }}
        />

      </div>


      {/* =====================================================
          CONNECTING SYSTEM LINES
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Horizontal */}
        <div className="absolute left-[15%] right-[15%] top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-tech/40 to-transparent" />

        {/* Vertical */}
        <div className="absolute top-[15%] bottom-[15%] left-1/2 w-px bg-gradient-to-b from-transparent via-green-brand/30 to-transparent" />

        {/* Diagonal lines */}

        <div className="absolute w-[250px] h-px bg-cyan-tech/20 rotate-[27deg] top-[28%] left-[18%]" />

        <div className="absolute w-[250px] h-px bg-green-brand/20 rotate-[-27deg] top-[28%] right-[18%]" />

        <div className="absolute w-[250px] h-px bg-cyan-tech/20 rotate-[-27deg] bottom-[28%] left-[18%]" />

        <div className="absolute w-[250px] h-px bg-green-brand/20 rotate-[27deg] bottom-[28%] right-[18%]" />

      </div>


      {/* =====================================================
          FLOATING SERVICE CARDS
      ====================================================== */}

      {services.map((service) => {
        const Icon = service.icon;

        return (
          <div
            key={service.title}
            className={`
              absolute ${service.position}
              z-20
              w-[175px] sm:w-[195px]
              group
            `}
          >

            <div
              className={`
                relative
                rounded-xl
                border ${service.border}
                bg-[#082951]/90
                backdrop-blur-xl
                p-3.5 sm:p-4
                shadow-2xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#0b315d]
              `}
            >

              {/* Status */}
              <div className="absolute top-3 right-3 flex items-center gap-1.5">

                <span
                  className={`
                    w-1.5 h-1.5 rounded-full
                    ${service.line}
                    animate-pulse
                  `}
                />

                <span className="text-[8px] uppercase tracking-wider text-white/40">
                  Active
                </span>

              </div>


              {/* Icon */}

              <div
                className={`
                  w-9 h-9 rounded-lg
                  ${service.bg}
                  ${service.accent}
                  flex items-center justify-center
                  mb-3
                `}
              >
                <Icon className="w-4.5 h-4.5" />
              </div>


              {/* Content */}

              <div>

                <div className="text-[12px] sm:text-[13px] font-bold text-white">
                  {service.title}
                </div>

                <div className="text-[10px] text-white/45 mt-0.5">
                  {service.subtitle}
                </div>

              </div>


              {/* Arrow */}

              <div
                className={`
                  absolute bottom-3 right-3
                  ${service.accent}
                  opacity-0 group-hover:opacity-100
                  transition-opacity
                `}
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>

            </div>

          </div>
        );
      })}


      {/* =====================================================
          CENTRAL NEXIFY ENGINE
      ====================================================== */}

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">

        {/* Outer rings */}

        <div className="absolute -inset-14 rounded-full border border-cyan-tech/10 animate-[spin_20s_linear_infinite]" />

        <div className="absolute -inset-10 rounded-full border border-dashed border-green-brand/20 animate-[spin_15s_linear_infinite_reverse]" />

        <div className="absolute -inset-6 rounded-full bg-cyan-tech/5 blur-xl" />


        {/* Core */}

        <div className="
          relative
          w-[190px] h-[190px]
          sm:w-[220px] sm:h-[220px]
          rounded-full
          border border-white/15
          bg-[#061f3d]/95
          backdrop-blur-2xl
          shadow-[0_0_80px_rgba(0,168,198,0.15)]
          flex items-center justify-center
        ">

          {/* Inner ring */}

          <div className="
            absolute inset-5
            rounded-full
            border border-cyan-tech/20
          " />

          {/* Animated dots */}

          <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">

            <span className="
              absolute
              top-1/2
              -left-1
              w-2 h-2
              rounded-full
              bg-cyan-tech
              shadow-[0_0_12px_rgba(0,168,198,0.8)]
            " />

            <span className="
              absolute
              top-1/2
              -right-1
              w-2 h-2
              rounded-full
              bg-green-brand
              shadow-[0_0_12px_rgba(69,182,73,0.8)]
            " />

          </div>


          {/* Core content */}

          <div className="relative text-center">

            <div className="
              mx-auto
              w-12 h-12
              rounded-xl
              bg-gradient-to-br
              from-cyan-tech/20
              to-green-brand/20
              border border-white/10
              flex items-center justify-center
              mb-3
            ">

              <Sparkles className="w-6 h-6 text-white" />

            </div>


            <div className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-cyan-tech
              font-bold
            ">
              NEXIFY
            </div>


            <div className="
              text-xl
              sm:text-2xl
              font-black
              tracking-tight
              text-white
              mt-1
            ">
              DIGITAL
              <span className="text-green-brand">
                ENGINE
              </span>
            </div>


            <div className="
              text-[9px]
              uppercase
              tracking-widest
              text-white/35
              mt-2
            ">
              Business Technology Core
            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          TOP CENTER LABEL
      ====================================================== */}

      <div className="
        absolute
        top-[46%]
        left-1/2
        -translate-x-1/2
        -translate-y-[145px]
        z-20
        hidden sm:flex
        items-center gap-2
        px-3 py-1.5
        rounded-full
        border border-white/10
        bg-white/5
        backdrop-blur-md
      ">

        <span className="w-1.5 h-1.5 rounded-full bg-green-brand animate-pulse" />

        <span className="
          text-[9px]
          uppercase
          tracking-[0.18em]
          font-bold
          text-white/60
        ">
          Integrated Technology Stack
        </span>

      </div>


      {/* =====================================================
          BOTTOM INFRASTRUCTURE BAR
      ====================================================== */}

      <div className="
        absolute
        left-1/2
        bottom-0
        -translate-x-1/2
        z-30
        w-[88%]
        sm:w-[72%]
      ">

        <div className="
          flex
          items-center
          justify-between
          gap-3
          px-4
          py-3
          rounded-xl
          border border-white/10
          bg-[#061f3d]/90
          backdrop-blur-xl
          shadow-xl
        ">

          {/* Data */}

          <div className="flex items-center gap-2">

            <div className="w-7 h-7 rounded-md bg-cyan-tech/10 flex items-center justify-center">
              <Database className="w-3.5 h-3.5 text-cyan-tech" />
            </div>

            <div className="hidden sm:block">

              <div className="text-[9px] uppercase tracking-wider text-white/35">
                Data Layer
              </div>

              <div className="text-[10px] font-bold text-white">
                Connected
              </div>

            </div>

          </div>


          {/* Workflow */}

          <div className="flex items-center gap-2">

            <div className="w-7 h-7 rounded-md bg-green-brand/10 flex items-center justify-center">
              <Workflow className="w-3.5 h-3.5 text-green-brand" />
            </div>

            <div className="hidden sm:block">

              <div className="text-[9px] uppercase tracking-wider text-white/35">
                Automation
              </div>

              <div className="text-[10px] font-bold text-white">
                Intelligent
              </div>

            </div>

          </div>


          {/* Cloud */}

          <div className="flex items-center gap-2">

            <div className="w-7 h-7 rounded-md bg-cyan-tech/10 flex items-center justify-center">
              <Cloud className="w-3.5 h-3.5 text-cyan-tech" />
            </div>

            <div className="hidden sm:block">

              <div className="text-[9px] uppercase tracking-wider text-white/35">
                Infrastructure
              </div>

              <div className="text-[10px] font-bold text-white">
                Cloud Ready
              </div>

            </div>

          </div>


          {/* Security */}

          <div className="flex items-center gap-2">

            <div className="w-7 h-7 rounded-md bg-green-brand/10 flex items-center justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-green-brand" />
            </div>

            <div className="hidden sm:block">

              <div className="text-[9px] uppercase tracking-wider text-white/35">
                Security
              </div>

              <div className="text-[10px] font-bold text-white">
                Enterprise
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          FLOATING DATA PARTICLES
      ====================================================== */}

      <span className="
        absolute
        top-[31%]
        left-[31%]
        w-1.5 h-1.5
        rounded-full
        bg-cyan-tech
        shadow-[0_0_10px_rgba(0,168,198,0.8)]
        animate-pulse
      " />

      <span className="
        absolute
        top-[35%]
        right-[29%]
        w-1 h-1
        rounded-full
        bg-green-brand
        shadow-[0_0_10px_rgba(69,182,73,0.8)]
        animate-pulse
      " />

      <span className="
        absolute
        bottom-[32%]
        left-[35%]
        w-1 h-1
        rounded-full
        bg-white
        opacity-50
        animate-pulse
      " />

    </div>
  );
};