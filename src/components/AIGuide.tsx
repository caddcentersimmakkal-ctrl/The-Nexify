"use client";

import { useState } from "react";
import {
  Bot,
  X,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Database,
  BrainCircuit,
  BriefcaseBusiness,
} from "lucide-react";

const guideOptions = [
  {
    icon: Globe,
    title: "Web Development",
    text: "Build a modern website or web application.",
  },
  {
    icon: Database,
    title: "Data Analytics",
    text: "Turn your business data into insights.",
  },
  {
    icon: BrainCircuit,
    title: "AI Automation",
    text: "Automate workflows with AI.",
  },
  {
    icon: BriefcaseBusiness,
    title: "ERP & CRM",
    text: "Manage your business operations digitally.",
  },
];

export default function AIGuide() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating AI Guide */}
      <div className="fixed bottom-6 right-6 z-[100]">

        {/* Chat Panel */}
        {open && (
          <div
            className="
              absolute bottom-[90px] right-0
              w-[360px] max-w-[calc(100vw-32px)]
              overflow-hidden rounded-3xl
              border border-slate-200
              bg-white
              shadow-[0_25px_80px_rgba(2,38,74,0.18)]
            "
          >
            {/* Header */}
            <div className="relative overflow-hidden bg-[#06264A] px-5 py-5 text-white">

              {/* Background glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00A8C6]/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-[#45B649]/20 blur-3xl" />

              <div className="relative flex items-start justify-between">

                <div className="flex items-center gap-3">
                  {/* Mini Robot */}
                  <div className="
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl
                    border border-white/20
                    bg-white/10
                    backdrop-blur
                  ">
                    <Bot className="h-7 w-7 text-[#45B649]" />
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#45B649]">
                      Nexify AI
                    </p>

                    <h3 className="mt-1 text-lg font-bold">
                      Your Digital Guide
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="
                    rounded-xl p-2
                    text-white/60
                    transition
                    hover:bg-white/10
                    hover:text-white
                  "
                >
                  <X size={18} />
                </button>
              </div>

              <div className="relative mt-5 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#45B649]" />

                <span className="text-xs text-white/70">
                  AI assistant is online
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">

              <div className="mb-5">
                <p className="text-sm font-semibold text-[#10213B]">
                  Hi 👋 I'm Nexify AI.
                </p>

                <p className="mt-1 text-xs leading-5 text-[#4B5563]">
                  What are you looking to build for your business?
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5">
                {guideOptions.map((option) => {
                  const Icon = option.icon;

                  return (
                    <button
                      key={option.title}
                      className="
                        group flex w-full items-center gap-3
                        rounded-2xl
                        border border-slate-200
                        bg-slate-50
                        p-3
                        text-left
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:border-[#00A8C6]/30
                        hover:bg-white
                        hover:shadow-md
                      "
                    >
                      <div className="
                        flex h-10 w-10 shrink-0 items-center justify-center
                        rounded-xl
                        bg-[#06264A]
                        text-[#45B649]
                        transition
                        group-hover:bg-[#45B649]
                        group-hover:text-white
                      ">
                        <Icon size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-[#10213B]">
                          {option.title}
                        </p>

                        <p className="mt-0.5 truncate text-[10px] text-[#4B5563]">
                          {option.text}
                        </p>
                      </div>

                      <ArrowRight
                        size={15}
                        className="
                          text-slate-400
                          transition
                          group-hover:translate-x-1
                          group-hover:text-[#00A8C6]
                        "
                      />
                    </button>
                  );
                })}
              </div>

              {/* CTA */}
              <button
                className="
                  mt-4 flex w-full items-center justify-center gap-2
                  rounded-xl
                  bg-[#06264A]
                  px-4 py-3
                  text-xs font-bold text-white
                  transition
                  hover:bg-[#0A3563]
                "
              >
                <MessageCircle size={15} />
                Talk to Nexify
              </button>

              <p className="mt-3 text-center text-[9px] text-slate-400">
                Powered by Nexify Intelligent Systems
              </p>
            </div>
          </div>
        )}

        {/* Robot Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Open Nexify AI Guide"
          className="group relative"
        >
          {/* Outer glow */}
          <div
            className="
              absolute inset-0
              rounded-full
              bg-[#00A8C6]/20
              blur-xl
              transition-all duration-500
              group-hover:scale-125
              group-hover:bg-[#45B649]/25
            "
          />

          {/* Orbit */}
          <div
            className="
              absolute -inset-2
              rounded-full
              border border-[#00A8C6]/20
              transition duration-700
              group-hover:rotate-180
            "
          />

          {/* Robot body */}
          <div
            className="
              relative flex h-[68px] w-[68px]
              items-center justify-center
              rounded-[24px]
              border border-white
              bg-white
              shadow-[0_12px_40px_rgba(2,38,74,0.22)]
              transition-all duration-300
              group-hover:-translate-y-1
              group-hover:scale-105
            "
          >

            {/* Robot head */}
            <div
              className="
                relative
                flex h-[42px] w-[48px]
                items-center justify-center
                rounded-[15px]
                border-2 border-[#06264A]
                bg-[#F6F8FA]
                shadow-inner
              "
            >

              {/* Antenna */}
              <div className="absolute -top-[10px] left-1/2 -translate-x-1/2">
                <div className="mx-auto h-2 w-2 rounded-full bg-[#45B649] shadow-[0_0_10px_#45B649]" />
                <div className="mx-auto h-2 w-[1px] bg-[#06264A]" />
              </div>

              {/* Eyes */}
              <div className="flex gap-3">
                <span
                  className="
                    h-[7px] w-[7px]
                    rounded-full
                    bg-[#00A8C6]
                    shadow-[0_0_8px_rgba(0,168,198,0.8)]
                    animate-pulse
                  "
                />

                <span
                  className="
                    h-[7px] w-[7px]
                    rounded-full
                    bg-[#00A8C6]
                    shadow-[0_0_8px_rgba(0,168,198,0.8)]
                    animate-pulse
                  "
                />
              </div>

              {/* Mouth */}
              <div
                className="
                  absolute bottom-[7px]
                  h-[2px] w-[12px]
                  rounded-full
                  bg-[#45B649]
                "
              />
            </div>

            {/* Body */}
            <div
              className="
                absolute bottom-[6px]
                h-[5px] w-[18px]
                rounded-full
                bg-[#06264A]
              "
            />
          </div>

          {/* Sparkles */}
          <Sparkles
            size={14}
            className="
              absolute -right-2 -top-2
              text-[#45B649]
              transition
              group-hover:rotate-12
            "
          />
        </button>
      </div>
    </>
  );
}