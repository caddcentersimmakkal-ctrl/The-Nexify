"use client";

import React from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { servicesData } from "@/data/services";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";

export const WhatWeDoSection: React.FC = () => {
  /*
   * Safely render icons from servicesData.
   *
   * Supports:
   * icon: SomeLucideIcon
   *
   * and:
   * icon: <SomeLucideIcon />
   */
  const renderServiceIcon = (icon: unknown) => {
    if (!icon) {
      return <Sparkles className="h-5 w-5" strokeWidth={1.8} />;
    }

    if (React.isValidElement(icon)) {
      return icon;
    }

    if (
      typeof icon === "function" ||
      (typeof icon === "object" && icon !== null)
    ) {
      const Icon = icon as React.ElementType;

      return <Icon className="h-5 w-5" strokeWidth={1.8} />;
    }

    return <Sparkles className="h-5 w-5" strokeWidth={1.8} />;
  };

  /*
   * We want this exact desktop order:
   *
   * Row 1:
   * NEXIFY | WEB DEVELOPMENT | WEB HOSTING
   *
   * Row 2:
   * DATA ANALYTICS | AI AUTOMATION | ERP & CRM
   *
   * servicesData order does not matter.
   */

  const getService = (id: string) =>
    servicesData.find((service) => service.id === id);

  const webDevelopment = getService("web-development");
  const dataAnalytics = getService("data-analytics");
  const aiAutomation = getService("ai-automation");
  const erpCrm = getService("erp-crm");
  const webHosting = getService("web-hosting-cloud");

  /*
   * If your actual IDs are different, the fallback below
   * keeps the section working with your existing array.
   */
  const orderedServices = [
    webDevelopment,
    webHosting,
    dataAnalytics,
    aiAutomation,
    erpCrm,
  ].filter(Boolean);

  /*
   * Fallback:
   * If the IDs above don't match your services.ts,
   * use the original servicesData order.
   */
  const finalServices =
    orderedServices.length === servicesData.length
      ? orderedServices
      : servicesData;

  return (
    <section className="relative overflow-hidden border-b border-brandBorder bg-[#f8fafc] py-20 font-sans lg:py-28">
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top left glow */}
        <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-green-brand/10 blur-3xl" />

        {/* Top right glow */}
        <div className="absolute -right-40 -top-20 h-96 w-96 rounded-full bg-cyan-tech/10 blur-3xl" />

        {/* Bottom center glow */}
        <div className="absolute bottom-[-220px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-green-brand/5 blur-3xl" />

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container>
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className="relative mb-12 lg:mb-14">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            {/* Heading */}
            <div className="lg:col-span-7">
              {/* Section label */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-brand/20 bg-green-brand/5 px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-brand opacity-60" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-brand" />
                </span>

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-brand">
                  WHAT WE DO
                </span>
              </div>

              <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-[-0.045em] text-navy sm:text-5xl lg:text-6xl">
                Digital systems built
                <span className="block">
                  to{" "}
                  <span className="relative inline-block text-green-brand">
                    move business
                    <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-green-brand/20" />
                  </span>
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="lg:col-span-5 lg:pl-10">
              <p className="max-w-lg text-sm leading-7 text-brandText-secondary lg:text-base">
                We combine technology, data and automation to build digital
                solutions that help businesses operate smarter, faster and
                better.
              </p>

              <div className="mt-5">
                <Button
                  href="/services"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="h-4 w-4" />}
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            PERFECT 3 x 2 GRID
        ========================================================= */}

        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">

          {/* =======================================================
              01 — NEXIFY INTRO
              4 / 12 COLUMNS
          ======================================================= */}

          <div className="group relative min-h-[310px] overflow-hidden rounded-[28px] bg-navy p-7 lg:col-span-4 lg:p-8">
            {/* Cyan glow */}
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-tech/20 blur-3xl transition-all duration-700 group-hover:bg-cyan-tech/30" />

            {/* Decorative rings */}
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110">
              <div className="absolute inset-6 rounded-full border border-white/10">
                <div className="absolute inset-7 rounded-full border border-green-brand/30">
                  <div className="absolute inset-8 rounded-full border border-cyan-tech/20">
                    <div className="absolute inset-10 rounded-full border border-white/5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom labels */}
            <div className="absolute bottom-7 left-7 flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-green-brand" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-tech" />
              <span className="h-2.5 w-2.5 rounded-full bg-purple-400" />

              <span className="ml-1 text-[8px] font-medium text-white/40">
                WEB · DATA · AI · BUSINESS
              </span>
            </div>

            <div className="relative z-10 flex h-full flex-col">
              {/* Top */}
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-green-brand backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                  <Sparkles className="h-5 w-5" />
                </div>

                <span className="font-mono text-[8px] font-bold tracking-widest text-white/30">
                  NXF / CORE
                </span>
              </div>

              {/* Content */}
              <div className="mt-9">
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-green-brand">
                  Digital Core
                </p>

                <h3 className="max-w-xs text-[23px] font-bold leading-tight text-white">
                  One digital partner.
                  <span className="block text-green-brand">
                    Multiple capabilities.
                  </span>
                </h3>

                <p className="mt-4 max-w-sm text-[11px] leading-5 text-white/50">
                  From your first website to intelligent business systems,
                  Nexify brings everything together under one technology
                  ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* =======================================================
              SERVICE CARDS
          ======================================================= */}

          {finalServices.map((service, index) => {
            if (!service) return null;

            return (
              <article
                key={service.id}
                className="group relative lg:col-span-4"
              >
                {/* Hover gradient */}
                <div
                  className="
                    absolute
                    -inset-[1px]
                    rounded-[28px]
                    bg-gradient-to-br
                    from-green-brand/0
                    via-cyan-tech/0
                    to-purple-500/0
                    opacity-0
                    blur-[2px]
                    transition-all
                    duration-500
                    group-hover:from-green-brand/40
                    group-hover:via-cyan-tech/30
                    group-hover:to-purple-500/30
                    group-hover:opacity-100
                  "
                />

                {/* =================================================
                    CARD
                ================================================= */}

                <div
                  className="
                    relative
                    h-full
                    min-h-[310px]
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-slate-200/80
                    bg-white
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:border-transparent
                    group-hover:shadow-[0_20px_60px_rgba(15,23,42,0.11)]
                  "
                >
                  {/* Top gradient line */}
                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-0
                      h-[2px]
                      origin-left
                      scale-x-0
                      bg-gradient-to-r
                      from-green-brand
                      via-cyan-tech
                      to-purple-500
                      transition-transform
                      duration-500
                      group-hover:scale-x-100
                    "
                  />

                  {/* Background glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-24
                      -right-24
                      h-56
                      w-56
                      rounded-full
                      bg-green-brand/10
                      blur-3xl
                      opacity-0
                      transition-opacity
                      duration-700
                      group-hover:opacity-100
                    "
                  />

                  {/* Service number */}
                  <span
                    className="
                      absolute
                      right-6
                      top-6
                      font-mono
                      text-[9px]
                      font-bold
                      tracking-widest
                      text-slate-300
                      transition-colors
                      duration-300
                      group-hover:text-slate-400
                    "
                  >
                    0{index + 1}
                  </span>

                  {/* =================================================
                      CARD INNER
                  ================================================= */}

                  <div className="relative z-10 flex h-full flex-col p-6 lg:p-7">
                    {/* =================================================
                        ICON + ARROW
                    ================================================= */}

                    <div className="mb-7 flex items-center justify-between">
                      {/* ICON */}
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-xl
                          bg-green-brand/10
                          text-green-brand
                          transition-all
                          duration-500
                          group-hover:bg-green-brand
                          group-hover:text-white
                          group-hover:shadow-lg
                          group-hover:shadow-green-brand/20
                        "
                      >
                        {renderServiceIcon(service.icon)}
                      </div>

                      {/* ARROW */}
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-slate-200
                          text-slate-400
                          transition-all
                          duration-300
                          group-hover:border-navy
                          group-hover:bg-navy
                          group-hover:text-white
                        "
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <div
                      className="
                        grid
                        flex-1
                        grid-cols-1
                        gap-6
                        lg:grid-cols-[minmax(0,1fr)_minmax(125px,0.75fr)]
                        lg:gap-6
                      "
                    >
                      {/* LEFT — TITLE + DESCRIPTION */}
                      <div>
                        <h3 className="text-[18px] font-extrabold leading-tight tracking-tight text-navy">
                          {service.title}
                        </h3>

                        <p className="mt-3 text-[11px] leading-5 text-brandText-secondary">
                          {service.description}
                        </p>
                      </div>

                      {/* RIGHT — CAPABILITIES */}
                      <div
                        className="
                          border-t
                          border-slate-100
                          pt-5
                          lg:border-l
                          lg:border-t-0
                          lg:pl-5
                          lg:pt-0
                        "
                      >
                        {/* Label */}
                        <div className="mb-3 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-brand" />

                          <span className="text-[8px] font-bold uppercase tracking-[0.17em] text-slate-400">
                            Capabilities
                          </span>
                        </div>

                        {/* Features */}
                        <div className="space-y-2">
                          {service.features?.map(
                            (feature: string, featureIndex: number) => (
                              <div
                                key={`${service.id}-${featureIndex}`}
                                className="
                                  flex
                                  items-start
                                  gap-2
                                  text-[9px]
                                  leading-4
                                  text-brandText-secondary
                                  transition-colors
                                  duration-300
                                  group-hover:text-navy
                                "
                              >
                                {/* Check circle */}
                                <span
                                  className="
                                    mt-[1px]
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

                        {/* Learn more */}
                        <a
                          href={`/services/${service.slug}`}
                          className="
                            mt-4
                            inline-flex
                            items-center
                            gap-1
                            text-[8px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-navy
                            transition-colors
                            hover:text-green-brand
                          "
                        >
                          Learn more

                          <ArrowRight
                            className="
                              h-2.5
                              w-2.5
                              transition-transform
                              duration-300
                              group-hover:translate-x-1
                            "
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Bottom hover indicator */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      h-1
                      origin-left
                      scale-x-0
                      bg-gradient-to-r
                      from-green-brand
                      to-cyan-tech
                      transition-transform
                      duration-500
                      group-hover:scale-x-100
                    "
                  />
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};