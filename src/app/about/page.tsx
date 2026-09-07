import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import {
  Target,
  Compass,
  CheckCircle2,
  Shield,
  Cpu,
  Users,
  MapPin,
  ArrowRight,
  Code2,
  BarChart2,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Nexify IT - Enterprise Software & Digital Transformation",
  description:
    "Learn about Nexify IT, a Madurai-based software development company committed to engineering practical technology that solves real business challenges.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-6 h-6 text-green-brand" />,
      title: "Pragmatic Engineering",
      description:
        "We prioritize business outcomes over technological hype. Every software system is built for speed, security, and measurable operational ROI.",
    },
    {
      icon: <Lock className="w-6 h-6 text-cyan-tech" />,
      title: "Data Privacy & Governance",
      description:
        "We build bank-grade security protocols, encryption, and automated database backups directly into every solution we architect.",
    },
    {
      icon: <Users className="w-6 h-6 text-green-brand" />,
      title: "Dedicated Partnership",
      description:
        "We act as an extension of your internal team, providing proactive 24/7 cloud support, ongoing maintenance, and iterative scaling.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-cyan-tech" />,
      title: "Modern Tech Standards",
      description:
        "From Next.js and Python to LLMs and high-concurrency SQL engines, our solutions are built on modern, future-proof tech stacks.",
    },
  ];

  return (
    <div className="font-sans">
      {/* Page Header (Navy Hero) */}
      <section className="bg-navy text-white py-16 lg:py-24 relative overflow-hidden border-b border-navy-dark">
        <div className="absolute inset-0 hero-grid-pattern opacity-50 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-brand" />
              <span className="text-xs font-bold uppercase tracking-widest text-green-brand">
                WHO WE ARE
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Technology Built Around{" "}
              <span className="text-green-brand">Your Business</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed">
              Nexify IT is a digital transformation company based in Madurai, Tamil Nadu.
              We specialize in custom web applications, business analytics, AI automation,
              and enterprise resource management systems.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 lg:py-24 bg-white border-b border-brandBorder">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                eyebrow="OUR MISSION"
                title="Solving Real Problems With"
                highlightedText="Practical Tech"
                description="Our mission is to help modern businesses replace fragmented manual processes, slow spreadsheets, and rigid legacy software with unified, high-performance digital solutions."
              />

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-brand flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-brandText-primary">
                    <span className="font-bold text-navy">Custom Tailoring:</span> Every business has unique workflows; we design software that fits your exact processes.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-brand flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-brandText-primary">
                    <span className="font-bold text-navy">High-Uptime Cloud:</span> Reliable cloud hosting and proactive monitoring so your operations never stop.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-brand flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-brandText-primary">
                    <span className="font-bold text-navy">AI-Driven Efficiency:</span> Practical machine learning tools and LLM bots to accelerate repetitive workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-brandBg-secondary p-8 sm:p-10 rounded-xl border border-brandBorder space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center text-green-brand">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy">
                      Headquartered in Madurai
                    </h3>
                    <p className="text-xs text-brandText-secondary">
                      Tamil Nadu, India
                    </p>
                  </div>
                </div>

                <p className="text-sm text-brandText-secondary leading-relaxed">
                  Located in the cultural and industrial heart of Southern Tamil Nadu, Nexify IT combines regional engineering talent with world-class software standards to serve enterprises across diverse sectors.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brandBorder text-xs">
                  <div>
                    <span className="text-gray-400 block">Core Focus</span>
                    <span className="font-bold text-navy">B2B Software & AI</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block">Delivery Model</span>
                    <span className="font-bold text-green-brand">Agile Sprints</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Principles */}
      <section className="py-20 lg:py-24 bg-brandBg-secondary border-b border-brandBorder">
        <Container>
          <SectionHeader
            eyebrow="OUR VALUES"
            title="The Principles That Guide"
            highlightedText="Our Work"
            description="How we maintain consistent quality, clear communication, and high reliability across every project."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white p-6 sm:p-7 rounded-xl border border-brandBorder shadow-card hover:shadow-cardHover hover:border-green-brand/50 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-brandBg-secondary flex items-center justify-center mb-4 border border-brandBorder">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-brandText-secondary leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
