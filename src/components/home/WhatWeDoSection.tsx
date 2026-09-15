"use client";

import React from "react";
import { Container } from "../layout/Container";
import { servicesData } from "@/data/services";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Code2,
  BarChart3,
  BrainCircuit,
  UsersRound,
  Cloud,
  Layers3,
  Check,
} from "lucide-react";

export const WhatWeDoSection: React.FC = () => {
  const getService = (id: string) =>
    servicesData.find((service) => service.id === id);

  const webDevelopment = getService("web-development");
  const dataAnalytics = getService("data-analytics");
  const aiAutomation = getService("ai-automation");
  const erpCrm = getService("erp-crm");
  const webHosting = getService("web-hosting");

  /*
   * Keep the service order exactly as required:
   *
   * ROW 1:
   * Digital Core | Web Development | Data Analytics
   *
   * ROW 2:
   * AI Automation | ERP & CRM | Web Hosting & Cloud
   */
  const finalServices = [
    webDevelopment,
    dataAnalytics,
    aiAutomation,
    erpCrm,
    webHosting,
  ].filter(Boolean);

  const serviceIcons: Record<string, React.ElementType> = {
    "web-development": Code2,
    "data-analytics": BarChart3,
    "ai-automation": BrainCircuit,
    "erp-crm": UsersRound,
    "web-hosting": Cloud,
  };

  /*
   * Related service visuals.
   *
   * Add these files inside:
   *
   * public/images/services/
   *
   * web-development.webp
   * data-analytics.webp
   * ai-automation.webp
   * erp-crm.webp
   * web-hosting.webp
   */
  const serviceImages: Record<string, string> = {
    "web-development": "/images/services/web-development.png",
    "data-analytics": "/images/services/data-analytics.png",
    "ai-automation": "/images/services/ai-automation.png",
    "erp-crm": "/images/services/erp-crm.png",
    "web-hosting": "/images/services/web-hosting.png",
  };

  const serviceAccents: Record<
    string,
    {
      icon: string;
      iconBg: string;
      glow: string;
      border: string;
    }
  > = {
    "web-development": {
      icon: "text-cyan-600",
      iconBg: "bg-cyan-50",
      glow: "bg-cyan-300/20",
      border: "hover:border-cyan-300",
    },

    "data-analytics": {
      icon: "text-violet-600",
      iconBg: "bg-violet-50",
      glow: "bg-violet-300/20",
      border: "hover:border-violet-300",
    },

    "ai-automation": {
      icon: "text-cyan-600",
      iconBg: "bg-cyan-50",
      glow: "bg-cyan-300/20",
      border: "hover:border-cyan-300",
    },

    "erp-crm": {
      icon: "text-green-brand",
      iconBg: "bg-green-brand/10",
      glow: "bg-green-300/20",
      border: "hover:border-green-brand/40",
    },

    "web-hosting": {
      icon: "text-blue-600",
      iconBg: "bg-blue-50",
      glow: "bg-blue-300/20",
      border: "hover:border-blue-300",
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#f7faf9] py-20 lg:py-28">
      {/* =========================================================
          LIGHT PREMIUM BACKGROUND
      ========================================================= */}

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}
        {/* <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        /> */}

        {/* Green glow */}
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-green-brand/10 blur-3xl" />

        {/* Cyan glow */}
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-tech/10 blur-3xl" />

      </div>

      <Container>
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <div className="relative mx-auto mb-14 max-w-4xl text-center lg:mb-16">

          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-green-brand/70" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-green-brand">
              What We Do
            </span>

            <span className="h-px w-10 bg-green-brand/70" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-black leading-[1] tracking-[-0.045em] text-navy sm:text-5xl lg:text-6xl">
            Technology built around your{" "}
            <span className="text-green-brand">
              business.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-brandText-secondary lg:text-base">
            Digital solutions. Measurable outcomes.
          </p>
        </div>

        {/* =========================================================
            SERVICES GRID
        ========================================================= */}

        <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">

          {/* =======================================================
              DIGITAL CORE
          ======================================================= */}

          <div
            className="
              group relative min-h-[360px]
              overflow-hidden rounded-[28px]
              border border-cyan-200
              bg-white
              p-7
              shadow-[0_20px_70px_rgba(15,23,42,0.06)]
              transition-all duration-500
              hover:-translate-y-1
              hover:shadow-[0_30px_90px_rgba(15,23,42,0.10)]
              lg:col-span-6
              lg:p-9
            "
          >
            {/* Background glow */}
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-100/60 blur-[80px]" />

            {/* Decorative circles */}
            <div className="absolute -bottom-36 right-[-50px] h-[400px] w-[400px] rounded-full border border-cyan-100">
              <div className="absolute inset-8 rounded-full border border-cyan-100">
                <div className="absolute inset-8 rounded-full border border-green-brand/10">
                  <div className="absolute inset-12 rounded-full border border-cyan-100" />
                </div>
              </div>
            </div>

            {/* Digital Core visual */}
            <div
              className="
                pointer-events-none absolute
                bottom-[-35px] right-[-10px]
                h-[260px] w-[260px]
                rounded-full
                bg-gradient-to-br
                from-cyan-100
                via-white
                to-green-100
                opacity-80
                blur-[1px]
              "
            />

            <div className="relative z-10 flex h-full flex-col">

              {/* Top */}
              <div className="flex items-start justify-between">

                <div
                  className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-2xl
                    border border-green-brand/20
                    bg-green-brand/10
                    text-green-brand
                  "
                >
                  <Layers3
                    className="h-6 w-6"
                    strokeWidth={1.7}
                  />
                </div>

                <span className="font-mono text-[9px] font-bold tracking-[0.25em] text-slate-400">
                  NXF / CORE
                </span>
              </div>

              {/* Content */}
              <div className="mt-9 max-w-[55%]">

                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-green-brand">
                  Digital Core
                </p>

                <h3 className="text-3xl font-bold leading-[1.05] tracking-tight text-navy">
                  One digital partner.
                  <span className="block text-green-brand">
                    Multiple capabilities.
                  </span>
                </h3>

                <p className="mt-5 text-sm leading-6 text-brandText-secondary">
                  From your first website to intelligent business systems,
                  Nexify brings everything together under one technology
                  ecosystem.
                </p>
              </div>

              {/* Core visual */}
              <div
                className="
                  absolute
                  bottom-[-15px]
                  right-[10px]
                  flex
                  h-[230px]
                  w-[230px]
                  items-center
                  justify-center
                "
              >
                <div className="absolute h-[190px] w-[190px] rounded-full border border-cyan-200" />

                <div className="absolute h-[150px] w-[150px] rounded-full border border-cyan-200" />

                <div className="absolute h-[110px] w-[110px] rounded-full border border-green-brand/20" />

                <div
                  className="
                    flex h-20 w-20
                    items-center justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-cyan-500
                    to-green-brand
                    shadow-[0_15px_45px_rgba(34,211,238,0.28)]
                  "
                >
                  <Sparkles
                    className="h-9 w-9 text-white"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Bottom tags */}
              <div className="mt-auto flex items-center gap-4 pt-8">

                <span className="flex items-center gap-2 text-[9px] font-semibold text-slate-500">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
                  WEB
                </span>

                <span className="flex items-center gap-2 text-[9px] font-semibold text-slate-500">
                  <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
                  DATA
                </span>

                <span className="flex items-center gap-2 text-[9px] font-semibold text-slate-500">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-brand" />
                  AI
                </span>

                <span className="text-[9px] font-semibold text-slate-400">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-50" />
                  BUSINESS
                </span>

              </div>
            </div>
          </div>

          {/* =======================================================
              SERVICE CARDS
          ======================================================= */}

          {finalServices.map((service, index) => {
            if (!service) return null;

            const Icon =
              serviceIcons[service.id] || Sparkles;

            const accent =
              serviceAccents[service.id] ||
              serviceAccents["web-development"];

            const image =
              serviceImages[service.id];

            /*
             * 01 + 02 = 3 columns
             * 03 + 04 + 05 = 4 columns
             */
            const gridClass =
              index < 2
                ? "lg:col-span-3"
                : "lg:col-span-4";

            return (
              <article
                key={service.id}
                className={`
                  group relative
                  min-h-[360px]
                  overflow-hidden
                  rounded-[28px]
                  border border-slate-200
                  bg-white
                  p-6
                  shadow-[0_18px_60px_rgba(15,23,42,0.045)]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:shadow-[0_28px_80px_rgba(15,23,42,0.09)]
                  ${accent.border}
                  ${gridClass}
                `}
              >

                {/* Soft service glow */}
                <div
                  className={`
                    pointer-events-none
                    absolute
                    -bottom-20
                    -right-20
                    h-60
                    w-60
                    rounded-full
                    ${accent.glow}
                    opacity-0
                    blur-[70px]
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  `}
                />

                {/* Number */}
                <div className="absolute right-6 top-6 flex items-center gap-2">

                  <span className="font-mono text-[9px] font-semibold tracking-widest text-slate-400">
                    0{index + 1}
                  </span>

                  <span className="h-px w-7 bg-slate-300" />

                </div>

                <div className="relative z-10 flex h-full min-h-[308px] flex-col">

                  {/* Icon */}
                  <div
                    className={`
                      flex h-11 w-11
                      items-center justify-center
                      rounded-xl
                      ${accent.iconBg}
                      ${accent.icon}
                      border border-white
                      shadow-sm
                      transition-all
                      duration-500
                      group-hover:scale-105
                    `}
                  >
                    <Icon
                      className="h-5 w-5"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Main content */}
                  <div className="mt-7 max-w-[62%]">

                    <h3 className="text-[19px] font-extrabold leading-tight tracking-tight text-navy">
                      {service.title}
                    </h3>

                    {/* <p className="mt-4 text-[11px] leading-5 text-brandText-secondary">
                      {service.shortDescription}
                    </p> */}

                  </div>

                  {/* =================================================
                      RELATED SERVICE IMAGE
                  ================================================= */}

                  {image && (
                    <div
                      className="
                        pointer-events-none
                        absolute
                        bottom-[50px]
                        right-[-5px]
                        flex
                        h-[150px]
                        w-[150px]
                        items-center
                        justify-center
                        opacity-90
                        transition-all
                        duration-500
                        group-hover:scale-105
                        group-hover:translate-x-[-4px]
                      "
                    >
                      <div
                        className="
                          absolute inset-0
                          rounded-full
                          bg-gradient-to-br
                          from-white
                          to-slate-50
                          opacity-90
                        "
                      />

                      <img
                        src={image}
                        alt={`${service.title} illustration`}
                        className="
                          relative
                          z-10
                          h-full
                          w-full
                          object-contain
                          drop-shadow-[0_15px_25px_rgba(15,23,42,0.10)]
                        "
                      />
                    </div>
                  )}

                  {/* =================================================
                      CAPABILITIES
                  ================================================= */}

                  <div className="mt-5 max-w-[65%] space-y-2">

                    {service.features
                      ?.slice(0, 3)
                      .map(
                        (
                          feature: string,
                          featureIndex: number
                        ) => (
                          <div
                            key={`${service.id}-${featureIndex}`}
                            className="
                              flex
                              items-center
                              gap-2
                              text-[9px]
                              leading-4
                              text-slate-500
                            "
                          >
                            <span
                              className="
                                flex
                                h-3.5
                                w-3.5
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-green-brand/10
                                text-green-brand
                              "
                            >
                              <Check className="h-2 w-2" />
                            </span>

                            <span>{feature}</span>
                          </div>
                        )
                      )}

                  </div>

                  {/* =================================================
                      CTA
                  ================================================= */}

                  <a
                    href={`/services/${service.slug}`}
                    className="
                      mt-auto
                      inline-flex
                      items-center
                      gap-2
                      pt-6
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.13em]
                      text-green-brand
                      transition-all
                      duration-300
                      group-hover:gap-3
                    "
                  >

                    <span
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        bg-green-brand
                        text-white
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                    >
                      <ArrowRight className="h-3 w-3" />
                    </span>

                    Explore Services

                    <ArrowRight
                      className="
                        h-3
                        w-3
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />

                  </a>
                </div>

                {/* Bottom accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-[2px]
                    origin-left
                    scale-x-0
                    bg-gradient-to-r
                    from-green-brand
                    via-cyan-400
                    to-violet-400
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />
              </article>
            );
          })}
        </div>

        {/* =========================================================
            BOTTOM CTA
        ========================================================= */}

        <div
          className="
            relative
            mt-5
            overflow-hidden
            rounded-[28px]
            border
            border-cyan-100
            bg-white
            px-8
            py-8
            text-center
            shadow-[0_18px_60px_rgba(15,23,42,0.045)]
          "
        >

          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/70 via-white to-green-50/70" />

          {/* Decorative lines */}
          <div className="absolute -left-20 bottom-[-100px] h-52 w-72 rounded-full border border-cyan-100" />

          <div className="absolute -right-20 bottom-[-100px] h-52 w-72 rounded-full border border-green-brand/10" />

          <div className="relative">

            <div className="mx-auto mb-4 flex items-center justify-center gap-4">

              <span className="h-px w-12 bg-green-brand/50" />

              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-green-brand">
                Let&apos;s build something great together
              </span>

              <span className="h-px w-12 bg-green-brand/50" />

            </div>

            <a
              href="/contact"
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-navy
                px-6
                py-3
                text-[11px]
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-green-brand
              "
            >
              Start a conversation

              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

          </div>
        </div>
      </Container>
    </section>
  );
};