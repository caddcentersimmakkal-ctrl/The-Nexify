import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ShieldCheck, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Nexify IT Solutions",
  description: "Privacy Policy and Data Protection standards of Nexify IT.",
};

export default function PrivacyPage() {
  return (
    <div className="font-sans">
      <section className="bg-navy text-white py-16 lg:py-20 relative border-b border-navy-dark">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-gray-300">
              Last Updated: January 2026 • Nexify IT Solutions, Madurai, Tamil Nadu, India
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl space-y-8 text-sm text-brandText-secondary leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                1. Overview & Commitment
              </h2>
              <p>
                At Nexify IT Solutions (&ldquo;Nexify IT&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we take your privacy and data governance seriously. This Privacy Policy details how we collect, handle, protect, and process personal and corporate data obtained through our website, software products, and consulting engagements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                2. Information We Collect
              </h2>
              <p className="mb-2">
                We only collect data necessary to deliver high-quality technology services:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 text-brandText-primary">
                <li>Contact information: Name, business email, phone number, company name.</li>
                <li>Project requirements, architectural briefs, and budget estimates.</li>
                <li>Technical analytics: IP address, browser type, and interaction metrics to improve web performance.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                3. Enterprise Confidentiality & Data Security
              </h2>
              <p>
                All client source code, database credentials, proprietary algorithms, and internal business metrics shared during our discovery and development sprints are protected under rigorous non-disclosure agreements (NDAs) and stored using enterprise-grade encryption.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                4. Third-Party Disclosures
              </h2>
              <p>
                Nexify IT does not sell, rent, or trade your corporate information to any third parties or public advertising networks. We only integrate verified infrastructure providers (e.g., AWS, Cloudflare) essential to hosting and securing your custom software.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy mb-3">
                5. Contacting Our Data Governance Officer
              </h2>
              <p>
                If you have questions regarding data privacy or wish to request data erasure, please contact us at: <a href="mailto:contact@nexifyit.com" className="text-green-brand font-semibold hover:underline">contact@nexifyit.com</a>.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
