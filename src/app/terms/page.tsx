import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Terms & Conditions | Nexify IT Solutions",
  description: "Terms and Conditions of service for Nexify IT Solutions.",
};

export default function TermsPage() {
  return (
    <div className="font-sans">
      <section className="bg-navy text-white py-16 lg:py-20 relative border-b border-navy-dark">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Terms & Conditions
            </h1>
            <p className="mt-3 text-sm text-gray-300">
              Effective Date: January 2026 • Nexify IT Solutions
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl space-y-8 text-sm text-brandText-secondary leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the Nexify IT website, engaging our custom software engineering services, or contracting for cloud infrastructure management, you agree to be bound by these Terms and Conditions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                2. Scope of Services & Deliverables
              </h2>
              <p>
                Nexify IT provides custom software development, Power BI data analytics, AI workflow automation, ERP/CRM development, and cloud hosting services. Specific deliverables, sprint schedules, milestones, and payment terms will be governed by individual Master Services Agreements (MSA) and Statements of Work (SOW).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                3. Intellectual Property Rights
              </h2>
              <p>
                Upon final project settlement, all custom source code, application assets, data models, and configurations developed specifically for the client transfer fully to the client, subject to standard open-source library licenses used in modern web development.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                4. Service Level Agreements & Uptime
              </h2>
              <p>
                For cloud hosting and managed infrastructure services, Nexify IT provides targeted 99.9% uptime SLAs with scheduled maintenance windows communicated in advance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                5. Jurisdiction & Dispute Resolution
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India, under the exclusive jurisdiction of the courts in Madurai, Tamil Nadu.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
