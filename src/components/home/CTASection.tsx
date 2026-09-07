import React from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { ArrowRight, MessageSquare, PhoneCall } from "lucide-react";

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-navy text-white relative overflow-hidden font-sans border-b border-navy-dark">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-green-brand/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-cyan-tech/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 hero-grid-pattern opacity-40 pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 mx-auto">
            <span className="w-2 h-2 rounded-full bg-green-brand" />
            <span className="text-xs font-bold uppercase tracking-widest text-green-brand">
              GET IN TOUCH
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Have a Business Challenge?
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s turn your idea, process or business challenge into a practical
            technology solution.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start a Project
            </Button>

            <Button
              href="/contact"
              variant="secondary-dark"
              size="lg"
              icon={<MessageSquare className="w-4 h-4" />}
              iconPosition="left"
            >
              Talk to Nexify
            </Button>
          </div>

          <div className="pt-8 text-xs text-gray-400">
            Based in Madurai, Tamil Nadu • Serving Enterprises Nationwide
          </div>
        </div>
      </Container>
    </section>
  );
};
