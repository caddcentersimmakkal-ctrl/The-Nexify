import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { servicesData } from "@/data/services";
import { CTASection } from "@/components/home/CTASection";
import {
  Code,
  BarChart3,
  Sparkles,
  Database,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Core Technology Services | Nexify IT Solutions",
  description:
    "Explore Nexify IT's 5 core software services: Web Development, Data Analytics, AI Automation, ERP & CRM, and Web Hosting & Cloud.",
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-green-brand";
    switch (iconName) {
      case "Code":
        return <Code className={iconClass} />;
      case "BarChart3":
        return <BarChart3 className={iconClass} />;
      case "Sparkles":
        return <Sparkles className={iconClass} />;
      case "Database":
        return <Database className={iconClass} />;
      case "Cloud":
        return <Cloud className={iconClass} />;
      default:
        return <Code className={iconClass} />;
    }
  };

  return (
    <div className="font-sans">
      {/* Page Hero Header */}
      <section className="bg-navy text-white py-16 lg:py-24 relative overflow-hidden border-b border-navy-dark">
        <div className="absolute inset-0 hero-grid-pattern opacity-50 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-brand" />
              <span className="text-xs font-bold uppercase tracking-widest text-green-brand">
                OUR EXPERTISE
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Enterprise Software &{" "}
              <span className="text-green-brand">Digital Services</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed">
              We engineer scalable software, data dashboards, AI bots, and custom management
              systems built around your specific business goals.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List Deep-Dive */}
      <section className="py-20 lg:py-24 bg-white">
        <Container>
          <div className="space-y-16 lg:space-y-20">
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="bg-brandBg-secondary rounded-2xl border border-brandBorder p-8 sm:p-10 lg:p-12 shadow-card hover:shadow-cardHover transition-all duration-200"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Column 1: Info */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-green-light flex items-center justify-center border border-green-brand/20">
                          {getIcon(service.iconName)}
                        </div>
                        <div>
                          <span className="text-xs font-mono font-bold text-green-brand uppercase tracking-wider">
                            SERVICE {service.number}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-bold text-navy">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-brandText-secondary leading-relaxed">
                        {service.fullDescription}
                      </p>

                      {/* Capabilities grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {service.capabilities.map((cap) => (
                          <div
                            key={cap.title}
                            className="bg-white p-3.5 rounded-lg border border-brandBorder"
                          >
                            <div className="text-xs font-bold text-navy mb-1 flex items-center justify-between">
                              <span>{cap.title}</span>
                              <span className="text-[10px] text-green-brand font-mono">
                                {cap.metrics}
                              </span>
                            </div>
                            <p className="text-[11px] text-brandText-secondary leading-snug">
                              {cap.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Tech badges */}
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        <span className="text-xs font-bold text-gray-400">
                          Tech:
                        </span>
                        {service.technologies.map((t) => (
                          <span
                            key={t}
                            className="text-xs bg-white px-2.5 py-1 rounded border border-brandBorder text-navy font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* CTA to individual service page */}
                      <div className="pt-3">
                        <Button
                          href={`/services/${service.slug}`}
                          variant="primary"
                          size="md"
                          icon={<ArrowRight className="w-4 h-4" />}
                        >
                          View Full {service.title} Details
                        </Button>
                      </div>
                    </div>

                    {/* Column 2: Highlights / Deliverables */}
                    <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-brandBorder space-y-4">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-navy border-b border-brandBorder pb-3">
                        Key Business Deliverables
                      </h3>

                      <div className="space-y-3">
                        {service.deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs text-brandText-primary"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-brand flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-brandBorder">
                        <div className="text-xs font-bold text-navy mb-2">
                          Core Features Included:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {service.features.map((feat) => (
                            <span
                              key={feat}
                              className="text-[11px] px-2.5 py-1 bg-brandBg-secondary rounded text-navy font-medium border border-brandBorder"
                            >
                              {feat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
