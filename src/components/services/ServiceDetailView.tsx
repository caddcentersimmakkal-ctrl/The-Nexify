import React from "react";
import Link from "next/link";
import { ServiceDetail, servicesData } from "@/data/services";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";
import { CTASection } from "../home/CTASection";
import {
  Code,
  BarChart3,
  Sparkles,
  Database,
  Cloud,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

interface ServiceDetailViewProps {
  service: ServiceDetail;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
}) => {
  const getIcon = () => {
    const iconClass = "w-8 h-8 text-green-brand";
    switch (service.iconName) {
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

  const otherServices = servicesData.filter((s) => s.id !== service.id);

  return (
    <div className="font-sans">
      {/* Hero Banner */}
      <section className="bg-navy text-white py-16 lg:py-24 relative overflow-hidden border-b border-navy-dark">
        <div className="absolute inset-0 hero-grid-pattern opacity-50 pointer-events-none" />
        <Container className="relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-green-brand font-semibold">
              {service.title}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10">
                <span className="text-xs font-mono font-bold text-green-brand">
                  SERVICE {service.number}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                {service.fullDescription}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Request {service.title} Consultation
                </Button>
                {/* <Button href="/projects" variant="secondary-dark" size="lg">
                  View Demo Work
                </Button> */}
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <div className="w-32 h-32 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center shadow-2xl backdrop-blur-md">
                {getIcon()}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities & Architecture */}
      <section className="py-20 bg-white border-b border-brandBorder">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12">
              <div>
                <SectionHeader
                  eyebrow="CAPABILITIES"
                  title="What We Engineer in"
                  highlightedText={service.title}
                  description="Modular, high-performance implementations built to align with your exact business processes."
                  className="mb-8"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.capabilities.map((cap) => (
                    <div
                      key={cap.title}
                      className="bg-brandBg-secondary p-6 rounded-xl border border-brandBorder shadow-card hover:border-green-brand/50 transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-green-brand">
                          {cap.metrics}
                        </span>
                        <ShieldCheck className="w-4 h-4 text-cyan-tech" />
                      </div>
                      <h3 className="text-base font-bold text-navy mb-2">
                        {cap.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brandText-secondary leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Benefits */}
              <div className="bg-brandBg-secondary rounded-xl p-8 border border-brandBorder">
                <h3 className="text-lg font-bold text-navy mb-4">
                  Business ROI & Impact
                </h3>
                <div className="space-y-3">
                  {service.businessBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-light flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-brand" />
                      </div>
                      <p className="text-sm text-brandText-primary font-medium">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-bold text-navy mb-4">
                  Technologies & Frameworks
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-md bg-white border border-brandBorder text-sm font-semibold text-navy shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {service.faq && service.faq.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-navy mb-6 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-cyan-tech" />
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {service.faq.map((f, i) => (
                      <div
                        key={i}
                        className="bg-white p-5 rounded-lg border border-brandBorder shadow-xs"
                      >
                        <h4 className="text-sm font-bold text-navy mb-2">
                          {f.question}
                        </h4>
                        <p className="text-xs sm:text-sm text-brandText-secondary leading-relaxed">
                          {f.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar: Other Services & Quick Quote */}
            <div className="lg:col-span-4 space-y-6">
              {/* Deliverables Card */}
              <div className="bg-white p-6 rounded-xl border border-brandBorder shadow-card">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-4 border-b border-brandBorder pb-2">
                  Project Deliverables
                </h4>
                <div className="space-y-2.5">
                  {service.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-brandText-primary"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-brand flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Services Navigation */}
              <div className="bg-brandBg-secondary p-6 rounded-xl border border-brandBorder">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy mb-3">
                  Other Services
                </h4>
                <div className="space-y-1.5">
                  {otherServices.map((other) => (
                    <Link
                      key={other.id}
                      href={`/services/${other.slug}`}
                      className="flex items-center justify-between p-2.5 rounded-md hover:bg-white text-xs font-semibold text-navy hover:text-green-brand transition-colors group"
                    >
                      <span>{other.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-green-brand" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Contact Card */}
              <div className="bg-navy p-6 rounded-xl text-white border border-navy-light space-y-4">
                <div className="text-xs font-mono text-green-brand uppercase font-bold">
                  Consultation
                </div>
                <h4 className="text-lg font-bold text-white leading-snug">
                  Need a custom scope estimate?
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Tell us your requirements and we will send a detailed architecture proposal.
                </p>
                <Button href="/contact" variant="primary" size="md" className="w-full">
                  Get Free Technical Estimate
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
};
