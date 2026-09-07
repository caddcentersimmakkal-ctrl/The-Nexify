import React from "react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import {
  Briefcase,
  Cpu,
  Headphones,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: <Briefcase className="w-5 h-5 text-green-brand" />,
      title: "Business Focused",
      description:
        "Every line of code and dashboard is engineered to solve concrete bottlenecks, reduce operational overhead, and drive bottom-line ROI.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-tech" />,
      title: "Modern Technology",
      description:
        "We leverage modern Next.js, Python, PostgreSQL, and AI LLM models to build scalable architectures that age gracefully.",
    },
    {
      icon: <Headphones className="w-5 h-5 text-green-brand" />,
      title: "Long-Term Support",
      description:
        "From continuous cloud maintenance to feature iterations, we partner as your dedicated long-term technical ally.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-brandBg-secondary border-b border-brandBorder font-sans">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Abstract Nexify Technology Graphic (5 Cols on desktop) */}
          <div className="lg:col-span-5">
            <div className="relative bg-navy rounded-xl p-8 sm:p-10 border border-navy-light text-white shadow-xl overflow-hidden">
              {/* Background Geometric Lines */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#45B649_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-cyan-tech/20 rounded-full blur-2xl" />

              {/* Central Graphic Composition */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs uppercase font-bold tracking-widest text-green-brand">
                    Nexify DNA
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    Est. Madurai, TN
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-navy-dark/80 border border-white/10 flex items-start gap-3">
                    <div className="p-2 rounded bg-green-brand/20 text-green-brand">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Pragmatic Engineering
                      </h4>
                      <p className="text-xs text-gray-300 mt-1">
                        No buzzword bloat. We prioritize high uptime, clean APIs, and maintainable software.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-navy-dark/80 border border-white/10 flex items-start gap-3">
                    <div className="p-2 rounded bg-cyan-tech/20 text-cyan-tech">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        Enterprise Governance
                      </h4>
                      <p className="text-xs text-gray-300 mt-1">
                        Strict data privacy, automated backups, and adherence to security best practices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-gray-400">
                  <span>Madurai Software Center</span>
                  <span className="text-green-brand font-bold">100% In-House</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content & 3 Pillars (7 Cols on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-brand" />
              <span className="text-xs font-bold uppercase tracking-widest text-green-brand">
                ABOUT NEXIFY IT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
              Technology Built Around Your Business
            </h2>

            <p className="text-base text-brandText-secondary leading-relaxed">
              Nexify IT is a technology company focused on building practical digital solutions
              for businesses. We combine software development, data analytics, AI automation,
              ERP, CRM and cloud technologies to help organizations improve efficiency and scale
              with confidence.
            </p>

            {/* 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-4 bg-white rounded-lg border border-brandBorder shadow-sm"
                >
                  <div className="p-2 rounded bg-brandBg-secondary w-fit mb-3">
                    {pillar.icon}
                  </div>
                  <h4 className="text-sm font-bold text-navy mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-brandText-secondary leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                href="/about"
                variant="secondary-light"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Know More About Nexify
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
