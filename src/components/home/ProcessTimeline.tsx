"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { processSteps } from "@/data/process";
import {
  Check,
  ArrowRight,
  Sparkles,
  MousePointer2,
} from "lucide-react";

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = processSteps[activeStep];

  return (
    <section className="relative overflow-hidden border-b border-brandBorder bg-[#f7fafc] py-20 font-sans lg:py-28">

      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Technical grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Green glow */}
        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-green-brand/10 blur-3xl" />

        {/* Cyan glow */}
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-tech/10 blur-3xl" />

      </div>


      <Container>

        {/* =========================================================
            HEADER
        ========================================================= */}

        <SectionHeader
          eyebrow="OUR METHODOLOGY"
          title="How We Build & Deliver"
          highlightedText="Solutions"
          description="A structured, transparent engineering process designed to reduce risks, align stakeholders, and turn ideas into reliable digital products."
          className="mb-14"
        />


        {/* =========================================================
            INTERACTIVE PROCESS AREA
        ========================================================= */}

        <div className="relative">

          {/* ---------------------------------------------------------
              CHARACTER + SPEECH BUBBLE
          --------------------------------------------------------- */}

          <div
            className="
              hidden lg:block
              absolute
              -top-[108px]
              left-0
              z-30
              w-[calc(16.666%)]
              pointer-events-none
              transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
            "
            style={{
              transform: `translateX(${activeStep * 100}%)`,
            }}
          >

            <div className="flex flex-col items-center">

              {/* Speech bubble */}
              <div className="relative mb-3 w-[170px] rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center shadow-[0_10px_35px_rgba(15,23,42,0.10)]">

                <div className="mb-1 flex items-center justify-center gap-1.5">

                  <Sparkles className="h-3 w-3 text-green-brand" />

                  <span className="text-[9px] font-bold uppercase tracking-widest text-green-brand">
                    NEXIFY GUIDE
                  </span>

                </div>

                <p className="text-[11px] font-bold text-navy">
                  {getGuideMessage(activeStep)}
                </p>

                {/* Bubble pointer */}
                <div
                  className="
                    absolute
                    -bottom-2
                    left-1/2
                    h-4
                    w-4
                    -translate-x-1/2
                    rotate-45
                    border-b
                    border-r
                    border-slate-200
                    bg-white
                  "
                />

              </div>


              {/* =================================================
                  CHARACTER
              ================================================= */}

              <div className="relative h-[62px] w-[54px]">

                {/* Shadow */}
                <div className="absolute bottom-0 left-1/2 h-2 w-10 -translate-x-1/2 rounded-full bg-navy/10 blur-sm" />


                {/* Body */}
                <div className="absolute bottom-1 left-1/2 h-8 w-7 -translate-x-1/2 rounded-t-xl rounded-b-lg border border-navy/20 bg-navy shadow-md">

                  {/* Shirt accent */}
                  <div className="absolute left-1/2 top-2 h-1.5 w-3 -translate-x-1/2 rounded-full bg-green-brand" />

                </div>


                {/* Head */}
                <div className="absolute left-1/2 top-1 h-8 w-8 -translate-x-1/2 rounded-full border-2 border-navy/20 bg-white shadow-sm">

                  {/* Hair */}
                  <div className="absolute -top-1 left-1/2 h-2.5 w-6 -translate-x-1/2 rounded-t-full bg-navy" />

                  {/* Eyes */}
                  <div className="absolute left-[7px] top-[13px] h-1 w-1 rounded-full bg-navy" />

                  <div className="absolute right-[7px] top-[13px] h-1 w-1 rounded-full bg-navy" />

                  {/* Smile */}
                  <div className="absolute left-1/2 top-[19px] h-1 w-2 -translate-x-1/2 rounded-b-full border-b border-navy" />

                </div>


                {/* Pointing arm */}
                <div
                  className="
                    absolute
                    right-[-5px]
                    top-[30px]
                    h-2
                    w-7
                    origin-left
                    rotate-[-15deg]
                    rounded-full
                    bg-navy
                  "
                >

                  {/* Hand */}
                  <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-white border border-navy/20" />

                </div>

              </div>

            </div>

          </div>


          {/* =========================================================
              TIMELINE
          ========================================================= */}

          <div className="relative">

            {/* Desktop connecting line */}
            <div className="absolute left-[8.33%] right-[8.33%] top-[28px] hidden h-[2px] bg-slate-200 lg:block" />

            {/* Active line */}
            <div
              className="
                absolute
                left-[8.33%]
                top-[28px]
                hidden
                h-[2px]
                bg-gradient-to-r
                from-green-brand
                to-cyan-tech
                transition-all
                duration-700
                lg:block
              "
              style={{
                width: `${(activeStep / (processSteps.length - 1)) * 83.34}%`,
              }}
            />


            {/* Mobile / tablet line */}
            <div className="absolute left-[28px] top-8 bottom-8 w-px bg-slate-200 md:hidden" />


            {/* =====================================================
                PROCESS GRID
            ===================================================== */}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 lg:gap-3">

              {processSteps.map((step, index) => {

                const isActive = activeStep === index;

                return (
                  <div
                    key={step.step}
                    className="relative"
                    onMouseEnter={() => setActiveStep(index)}
                  >

                    {/* Timeline node */}
                    <div className="relative z-20 mb-6 flex h-[58px] items-center justify-center">

                      <button
                        onClick={() => setActiveStep(index)}
                        className={`
                          relative
                          flex
                          h-14
                          w-14
                          items-center
                          justify-center
                          rounded-full
                          border-4
                          transition-all
                          duration-500
                          ${
                            isActive
                              ? "border-green-brand bg-navy text-white shadow-[0_0_0_7px_rgba(34,197,94,0.10),0_10px_30px_rgba(15,23,42,0.18)] scale-110"
                              : "border-white bg-white text-slate-400 shadow-md hover:border-green-brand/30 hover:text-green-brand"
                          }
                        `}
                      >

                        <span className="font-mono text-xs font-bold">
                          {String(index + 1).padStart(2, "0")}
                        </span>


                        {/* Pulse */}
                        {isActive && (
                          <span className="absolute inset-[-7px] animate-ping rounded-full border border-green-brand/20" />
                        )}

                      </button>

                    </div>


                    {/* =================================================
                        STEP CARD
                    ================================================= */}

                    <button
                      onClick={() => setActiveStep(index)}
                      className={`
                        group
                        relative
                        w-full
                        overflow-hidden
                        rounded-2xl
                        border
                        bg-white
                        p-5
                        text-left
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "border-green-brand/40 -translate-y-1 shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
                            : "border-slate-200 hover:-translate-y-1 hover:border-green-brand/20 hover:shadow-lg"
                        }
                      `}
                    >

                      {/* Top gradient */}
                      <div
                        className={`
                          absolute left-0 right-0 top-0 h-[3px]
                          bg-gradient-to-r
                          from-green-brand
                          to-cyan-tech
                          transition-opacity duration-300
                          ${isActive ? "opacity-100" : "opacity-0"}
                        `}
                      />


                      {/* Step number */}
                      <div className="mb-5 flex items-center justify-between">

                        <span
                          className={`
                            font-mono text-[10px] font-bold
                            ${
                              isActive
                                ? "text-green-brand"
                                : "text-slate-300"
                            }
                          `}
                        >
                          PROCESS / {String(index + 1).padStart(2, "0")}
                        </span>

                        <ArrowRight
                          className={`
                            h-3.5 w-3.5
                            transition-all duration-300
                            ${
                              isActive
                                ? "translate-x-1 text-green-brand"
                                : "text-slate-300"
                            }
                          `}
                        />

                      </div>


                      {/* Title */}
                      <h3
                        className={`
                          text-base font-extrabold tracking-tight
                          transition-colors duration-300
                          ${
                            isActive
                              ? "text-navy"
                              : "text-slate-700"
                          }
                        `}
                      >
                        {step.title}
                      </h3>


                      {/* Subtitle */}
                      <div
                        className={`
                          mt-1.5 text-[9px] font-bold uppercase tracking-[0.12em]
                          ${
                            isActive
                              ? "text-cyan-tech"
                              : "text-slate-400"
                          }
                        `}
                      >
                        {step.subtitle}
                      </div>


                      {/* Description */}
                      <p className="mt-3 min-h-[58px] text-[11px] leading-relaxed text-brandText-secondary">
                        {step.description}
                      </p>


                      {/* Deliverables */}
                      <div
                        className={`
                          mt-4
                          border-t
                          pt-4
                          transition-all
                          duration-500
                          ${
                            isActive
                              ? "border-green-brand/15"
                              : "border-slate-100"
                          }
                        `}
                      >

                        {step.deliverables?.slice(0, 2).map((item) => (
                          <div
                            key={item}
                            className="mb-1.5 flex items-start gap-1.5 text-[9px] text-slate-500"
                          >
                            <Check
                              className={`
                                mt-0.5
                                h-3 w-3
                                shrink-0
                                ${
                                  isActive
                                    ? "text-green-brand"
                                    : "text-slate-300"
                                }
                              `}
                            />

                            <span>{item}</span>
                          </div>
                        ))}

                      </div>


                      {/* Bottom active indicator */}
                      <div className="mt-4 h-1 overflow-hidden rounded-full bg-slate-100">

                        <div
                          className={`
                            h-full rounded-full
                            bg-gradient-to-r
                            from-green-brand
                            to-cyan-tech
                            transition-all
                            duration-700
                            ${
                              isActive
                                ? "w-full"
                                : "w-0"
                            }
                          `}
                        />

                      </div>

                    </button>

                  </div>
                );
              })}

            </div>

          </div>


          {/* =========================================================
              CURRENT STEP INFO
          ========================================================= */}

          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-brand/10 text-green-brand">

                <MousePointer2 className="h-4 w-4" />

              </div>

              <div>

                <p className="text-[9px] font-bold uppercase tracking-widest text-green-brand">
                  CURRENT STAGE
                </p>

                <p className="mt-0.5 text-sm font-bold text-navy">
                  {currentStep.title}
                </p>

              </div>

            </div>


            <div className="flex items-center gap-2">

              {processSteps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  aria-label={`Go to process step ${index + 1}`}
                  className={`
                    h-1.5 rounded-full
                    transition-all duration-300
                    ${
                      activeStep === index
                        ? "w-8 bg-green-brand"
                        : "w-1.5 bg-slate-200 hover:bg-slate-300"
                    }
                  `}
                />
              ))}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};


/* =============================================================
   GUIDE MESSAGES
============================================================= */

function getGuideMessage(index: number) {
  const messages = [
    "Let's understand your idea.",
    "Now we define the right solution.",
    "Let's design the experience.",
    "Time to build it.",
    "Let's make sure everything works.",
    "Ready to launch.",
  ];

  return messages[index] || "Let's build something great.";
}