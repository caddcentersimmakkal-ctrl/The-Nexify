"use client";

import React from "react";
import { Container } from "../layout/Container";
import { ServiceCard } from "../ui/ServiceCard";
import { Button } from "../ui/Button";
import { servicesData } from "@/data/services";
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";

export const WhatWeDoSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-brandBorder font-sans">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: 4 Cols on Desktop (Sticky Info) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-brand" />
              <span className="text-xs font-bold uppercase tracking-widest text-green-brand">
                WHAT WE DO
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              Powering Digital Growth
            </h2>

            <p className="text-base text-brandText-secondary leading-relaxed">
              From modern web applications to intelligent automation and business analytics,
              The Nexify helps organizations build, optimize and scale their digital
              operations.
            </p>

            <div className="pt-2">
              <Button
                href="/services"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Services
              </Button>
            </div>

            {/* Quick Value Metrics */}
            <div className="mt-8 pt-8 border-t border-brandBorder space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-green-light flex items-center justify-center text-green-brand flex-shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy">Engineered for Performance</div>
                  <div className="text-[11px] text-brandText-secondary">Sub-second response and fast pipelines</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-cyan-light flex items-center justify-center text-cyan-tech flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-navy">Business-Centric Architecture</div>
                  <div className="text-[11px] text-brandText-secondary">Designed to solve real operational bottlenecks</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 8 Cols on Desktop (5 Service Cards Grid) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {servicesData.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  className={index === 4 ? "sm:col-span-2 sm:max-w-md sm:mx-auto w-full lg:max-w-none" : ""}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
