import React from "react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { processSteps } from "@/data/process";
import { Check } from "lucide-react";

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-brandBg-secondary border-b border-brandBorder font-sans">
      <Container>
        <SectionHeader
          eyebrow="OUR METHODOLOGY"
          title="How We Build & Deliver"
          highlightedText="Solutions"
          description="A structured, transparent 6-stage engineering process designed to eliminate risks, align stakeholders, and ensure timely deployment."
          className="mb-14"
        />

        {/* 6-Step Grid (Horizontal on Desktop, 2x3 on Tablet, Vertical on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className="bg-white rounded-xl p-6 border border-brandBorder shadow-sm flex flex-col justify-between relative group hover:border-green-brand/60 hover:shadow-card transition-all duration-200"
            >
              <div>
                {/* Step Number in Nexify Green */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-extrabold font-mono text-green-brand">
                    {step.step}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-green-brand/40 group-hover:bg-green-brand transition-colors" />
                </div>

                {/* Step Title in Navy */}
                <h3 className="text-lg font-bold text-navy mb-1">
                  {step.title}
                </h3>

                <div className="text-[11px] font-semibold text-cyan-tech uppercase tracking-wider mb-3">
                  {step.subtitle}
                </div>

                <p className="text-xs text-brandText-secondary leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* Deliverable pills */}
              <div className="pt-3 border-t border-brandBorder/60 space-y-1.5">
                {step.deliverables.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-1.5 text-[10px] text-brandText-primary font-medium"
                  >
                    <Check className="w-3 h-3 text-green-brand flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
