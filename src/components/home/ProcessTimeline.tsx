"use client";

import React, { useState } from "react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { processSteps } from "@/data/process";
import {
  Check,
  ArrowRight,
  MousePointer2,
} from "lucide-react";

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = processSteps[activeStep];

  return (
    <section className="relative overflow-hidden border-b border-brandBorder bg-[#f7fafc] py-20 font-sans">

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


          {/* =======================================================
              NEXIFY AI GUIDE
          ======================================================= */}

          <div
            className="
              hidden
              lg:block
              absolute
              -top-[118px]
              left-0
              z-30
              w-[calc(16.666%)]
              pointer-events-none
              transition-all
              duration-700
              ease-[cubic-bezier(.22,1,.36,1)]
            "
            style={{
              transform: `translateX(${activeStep * 100}%)`,
            }}
          >

            <div className="flex flex-col items-center">


              {/* =================================================
                  SPEECH BUBBLE
              ================================================= */}

              <div
                className="
                  relative
                  mb-3
                  w-[178px]
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  px-4
                  py-3
                  text-center
                  shadow-[0_10px_35px_rgba(15,23,42,0.10)]
                "
              >

                {/* AI Guide label */}
                <div className="mb-1.5 flex items-center justify-center gap-1.5">

                  <div className="relative flex h-3 w-3 items-center justify-center">

                    <span
                      className="
                        absolute
                        h-2.5
                        w-2.5
                        animate-pulse
                        rounded-full
                        bg-green-brand/20
                      "
                    />

                    <span
                      className="
                        relative
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-green-brand
                        shadow-[0_0_7px_rgba(69,182,73,0.8)]
                      "
                    />

                  </div>

                  <span
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-green-brand
                    "
                  >
                    THE NEXIFY AI GUIDE
                  </span>

                </div>


                {/* Guide message */}
                <p
                  className="
                    text-[11px]
                    font-bold
                    leading-relaxed
                    text-navy
                  "
                >
                  {getGuideMessage(activeStep)}
                </p>


                {/* Technical ID */}
                {/* <div
                  className="
                    mt-2
                    font-mono
                    text-[7px]
                    uppercase
                    tracking-widest
                    text-slate-300
                  "
                >
                  AI_GUIDE / ACTIVE
                </div> */}


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
                  PROFESSIONAL AI ROBOT
              ================================================= */}

              <div
                className="
                  relative
                  h-[78px]
                  w-[68px]
                "
              >

                {/* =================================================
                    GROUND SHADOW
                ================================================= */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-2
                    w-12
                    -translate-x-1/2
                    rounded-full
                    bg-navy/15
                    blur-md
                  "
                />


                {/* =================================================
                    ROBOT BODY
                ================================================= */}

                <div
                  className="
                    absolute
                    bottom-2
                    left-1/2
                    h-[38px]
                    w-[34px]
                    -translate-x-1/2
                    rounded-[10px]
                    border
                    border-slate-300
                    bg-gradient-to-b
                    from-slate-100
                    via-white
                    to-slate-200
                    shadow-[0_5px_15px_rgba(15,23,42,0.18)]
                  "
                >

                  {/* Chest panel */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-[9px]
                      h-[15px]
                      w-[20px]
                      -translate-x-1/2
                      rounded-md
                      border
                      border-slate-300
                      bg-navy
                      shadow-inner
                    "
                  >

                    {/* AI status light */}
                    <div
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-1.5
                        w-1.5
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-green-brand
                        shadow-[0_0_8px_rgba(69,182,73,0.8)]
                      "
                    />

                    {/* Data lines */}
                    <div
                      className="
                        absolute
                        left-2
                        top-2
                        h-px
                        w-2
                        bg-cyan-tech/70
                      "
                    />

                    <div
                      className="
                        absolute
                        right-2
                        top-2
                        h-px
                        w-2
                        bg-cyan-tech/70
                      "
                    />

                  </div>


                  {/* Left shoulder */}
                  <div
                    className="
                      absolute
                      -left-[5px]
                      top-[5px]
                      h-5
                      w-2
                      rounded-full
                      border
                      border-slate-300
                      bg-slate-200
                    "
                  />


                  {/* Right shoulder */}
                  <div
                    className="
                      absolute
                      -right-[5px]
                      top-[5px]
                      h-5
                      w-2
                      rounded-full
                      border
                      border-slate-300
                      bg-slate-200
                    "
                  />

                </div>


                {/* =================================================
                    ROBOT NECK
                ================================================= */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-[25px]
                    h-3
                    w-3
                    -translate-x-1/2
                    rounded-sm
                    bg-slate-400
                  "
                />


                {/* =================================================
                    ROBOT HEAD
                ================================================= */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-[34px]
                    w-[42px]
                    -translate-x-1/2
                    rounded-[12px]
                    border
                    border-slate-300
                    bg-gradient-to-b
                    from-white
                    via-slate-100
                    to-slate-200
                    shadow-[0_6px_18px_rgba(15,23,42,0.18)]
                  "
                >

                  {/* Dark face display */}
                  <div
                    className="
                      absolute
                      left-1/2
                      top-[7px]
                      h-[16px]
                      w-[29px]
                      -translate-x-1/2
                      overflow-hidden
                      rounded-[7px]
                      border
                      border-slate-700
                      bg-[#071525]
                      shadow-inner
                    "
                  >

                    {/* Scanning line */}
                    <div
                      className="
                        absolute
                        left-0
                        top-1/2
                        h-px
                        w-full
                        bg-cyan-tech/20
                      "
                    />


                    {/* Left AI eye */}
                    <div
                      className="
                        absolute
                        left-[7px]
                        top-[6px]
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-cyan-tech
                        shadow-[0_0_7px_rgba(0,168,198,0.9)]
                        animate-pulse
                      "
                    />


                    {/* Right AI eye */}
                    <div
                      className="
                        absolute
                        right-[7px]
                        top-[6px]
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-cyan-tech
                        shadow-[0_0_7px_rgba(0,168,198,0.9)]
                        animate-pulse
                      "
                    />

                  </div>


                  {/* Head top sensor */}
                  <div
                    className="
                      absolute
                      left-1/2
                      -top-[5px]
                      h-2
                      w-6
                      -translate-x-1/2
                      rounded-full
                      border
                      border-slate-300
                      bg-slate-100
                    "
                  />


                  {/* Green status LED */}
                  <div
                    className="
                      absolute
                      right-[5px]
                      top-[5px]
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-green-brand
                      shadow-[0_0_6px_rgba(69,182,73,0.9)]
                    "
                  />

                </div>


                {/* =================================================
                    ANTENNA
                ================================================= */}

                <div
                  className="
                    absolute
                    left-1/2
                    -top-[9px]
                    h-3
                    w-px
                    -translate-x-1/2
                    bg-slate-400
                  "
                />

                <div
                  className="
                    absolute
                    left-1/2
                    -top-[12px]
                    h-2
                    w-2
                    -translate-x-1/2
                    rounded-full
                    border
                    border-green-brand/40
                    bg-green-brand
                    shadow-[0_0_8px_rgba(69,182,73,0.8)]
                  "
                />


                {/* =================================================
                    RIGHT ROBOT ARM
                ================================================= */}

                <div
                  className="
                    absolute
                    right-[-8px]
                    top-[39px]
                    h-[5px]
                    w-[23px]
                    origin-left
                    rotate-[-18deg]
                    rounded-full
                    bg-gradient-to-r
                    from-slate-400
                    to-slate-200
                    shadow-sm
                  "
                >

                  {/* Elbow joint */}
                  <div
                    className="
                      absolute
                      left-[-3px]
                      top-[-2px]
                      h-2.5
                      w-2.5
                      rounded-full
                      border
                      border-slate-400
                      bg-white
                    "
                  />


                  {/* Robotic hand */}
                  <div
                    className="
                      absolute
                      -right-[4px]
                      -top-[3px]
                      h-3
                      w-3
                      rounded-full
                      border
                      border-slate-400
                      bg-white
                      shadow-sm
                    "
                  />


                  {/* Pointer finger */}
                  <div
                    className="
                      absolute
                      -right-[8px]
                      top-[-1px]
                      h-1.5
                      w-2
                      rounded-full
                      bg-slate-300
                    "
                  />

                </div>


                {/* =================================================
                    LEFT ROBOT ARM
                ================================================= */}

                <div
                  className="
                    absolute
                    left-[-5px]
                    top-[40px]
                    h-[5px]
                    w-[16px]
                    rotate-[12deg]
                    rounded-full
                    bg-gradient-to-r
                    from-slate-300
                    to-slate-400
                  "
                />

              </div>

            </div>

          </div>


          {/* =========================================================
              TIMELINE
          ========================================================= */}

          <div className="relative">

            {/* Desktop connecting line */}
            <div
              className="
                absolute
                left-[8.33%]
                right-[8.33%]
                top-[28px]
                hidden
                h-[2px]
                bg-slate-200
                lg:block
              "
            />


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
            <div
              className="
                absolute
                bottom-8
                left-[28px]
                top-8
                w-px
                bg-slate-200
                md:hidden
              "
            />


            {/* =====================================================
                PROCESS GRID
            ===================================================== */}

            <div
              className="
                grid
                grid-cols-1
                gap-4
                md:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-6
                lg:gap-3
              "
            >

              {processSteps.map((step, index) => {

                const isActive = activeStep === index;

                return (
                  <div
                    key={step.step}
                    className="relative"
                    onMouseEnter={() => setActiveStep(index)}
                  >

                    {/* =================================================
                        TIMELINE NODE
                    ================================================= */}

                    <div
                      className="
                        relative
                        z-20
                        mb-6
                        flex
                        h-[58px]
                        items-center
                        justify-center
                      "
                    >

                      <button
                        onClick={() => setActiveStep(index)}
                        aria-label={`Select process step ${index + 1}`}
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

                          ${isActive
                            ? "scale-110 border-green-brand bg-navy text-white shadow-[0_0_0_7px_rgba(34,197,94,0.10),0_10px_30px_rgba(15,23,42,0.18)]"
                            : "border-white bg-white text-slate-400 shadow-md hover:border-green-brand/30 hover:text-green-brand"
                          }
                        `}
                      >

                        <span className="font-mono text-xs font-bold">
                          {String(index + 1).padStart(2, "0")}
                        </span>


                        {/* Active pulse */}
                        {isActive && (
                          <span
                            className="
                              absolute
                              inset-[-7px]
                              animate-ping
                              rounded-full
                              border
                              border-green-brand/20
                            "
                          />
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

                        ${isActive
                          ? "border-green-brand/40 -translate-y-1 shadow-[0_18px_40px_rgba(15,23,42,0.10)]"
                          : "border-slate-200 hover:-translate-y-1 hover:border-green-brand/20 hover:shadow-lg"
                        }
                      `}
                    >

                      {/* Top gradient */}
                      <div
                        className={`
                          absolute
                          left-0
                          right-0
                          top-0
                          h-[3px]
                          bg-gradient-to-r
                          from-green-brand
                          to-cyan-tech
                          transition-opacity
                          duration-300

                          ${isActive ? "opacity-100" : "opacity-0"}
                        `}
                      />


                      {/* =================================================
                          STEP NUMBER
                      ================================================= */}

                      <div className="mb-5 flex items-center justify-between">

                        <span
                          className={`
                            font-mono
                            text-[10px]
                            font-bold

                            ${isActive
                              ? "text-green-brand"
                              : "text-slate-300"
                            }
                          `}
                        >
                          PROCESS / {String(index + 1).padStart(2, "0")}
                        </span>


                        <ArrowRight
                          className={`
                            h-3.5
                            w-3.5
                            transition-all
                            duration-300

                            ${isActive
                              ? "translate-x-1 text-green-brand"
                              : "text-slate-300"
                            }
                          `}
                        />

                      </div>


                      {/* =================================================
                          TITLE
                      ================================================= */}

                      <h3
                        className={`
                          text-base
                          font-extrabold
                          tracking-tight
                          transition-colors
                          duration-300

                          ${isActive
                            ? "text-navy"
                            : "text-slate-700"
                          }
                        `}
                      >
                        {step.title}
                      </h3>


                      {/* =================================================
                          SUBTITLE
                      ================================================= */}

                      <div
                        className={`
                          mt-1.5
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.12em]

                          ${isActive
                            ? "text-cyan-tech"
                            : "text-slate-400"
                          }
                        `}
                      >
                        {step.subtitle}
                      </div>


                      {/* =================================================
                          DESCRIPTION
                      ================================================= */}

                      <p
                        className="
                          mt-3
                          min-h-[58px]
                          text-[11px]
                          leading-relaxed
                          text-brandText-secondary
                        "
                      >
                        {step.description}
                      </p>


                      {/* =================================================
                          DELIVERABLES
                      ================================================= */}

                      <div
                        className={`
                          mt-4
                          border-t
                          pt-4
                          transition-all
                          duration-500

                          ${isActive
                            ? "border-green-brand/15"
                            : "border-slate-100"
                          }
                        `}
                      >

                        {step.deliverables?.slice(0, 2).map((item) => (

                          <div
                            key={item}
                            className="
                              mb-1.5
                              flex
                              items-start
                              gap-1.5
                              text-[9px]
                              text-slate-500
                            "
                          >

                            <Check
                              className={`
                                mt-0.5
                                h-3
                                w-3
                                shrink-0

                                ${isActive
                                  ? "text-green-brand"
                                  : "text-slate-300"
                                }
                              `}
                            />

                            <span>{item}</span>

                          </div>

                        ))}

                      </div>


                      {/* =================================================
                          ACTIVE INDICATOR
                      ================================================= */}

                      <div
                        className="
                          mt-4
                          h-1
                          overflow-hidden
                          rounded-full
                          bg-slate-100
                        "
                      >

                        <div
                          className={`
                            h-full
                            rounded-full
                            bg-gradient-to-r
                            from-green-brand
                            to-cyan-tech
                            transition-all
                            duration-700

                            ${isActive
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