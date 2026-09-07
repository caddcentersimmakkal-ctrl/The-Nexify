import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/ui/ContactForm";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | The Nexify - Madurai, Tamil Nadu",
  description:
    "Get in touch with The Nexify for your web development, data analytics, AI automation, or ERP/CRM requirements. Based in Madurai, India.",
};

export default function ContactPage() {
  return (
    <div className="font-sans">
      {/* Hero Banner */}
      <section className="bg-navy text-white py-16 lg:py-24 relative overflow-hidden border-b border-navy-dark">
        <div className="absolute inset-0 hero-grid-pattern opacity-50 pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-green-brand" />
              <span className="text-xs font-bold uppercase tracking-widest text-green-brand">
                START A CONVERSATION
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let&apos;s Build Something{" "}
              <span className="text-green-brand">That Matters.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed">
              Have an operational challenge, a new software requirement, or need to automate
              business processes? Fill out the project brief below to receive a direct
              proposal from our engineering team.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-brandBg-secondary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            {/* Left: Contact Info & Value Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-xl border border-brandBorder shadow-card space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-green-brand">
                    Headquarters
                  </span>
                  <h3 className="text-xl font-bold text-navy mt-1">
                    The Nexify
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-brandText-secondary">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-cyan-light flex items-center justify-center text-cyan-tech flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-navy block">Office Location:</span>
                      <span>Madurai, Tamil Nadu, India</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-green-light flex items-center justify-center text-green-brand flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-navy block">Direct Email:</span>
                      <a
                        href="mailto:thenexifymadurai@gmail.com"
                        className="text-green-brand hover:underline font-medium"
                      >
                        thenexifymadurai@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-green-light flex items-center justify-center text-green-brand flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-navy block">Phone & WhatsApp:</span>
                      <a
                        href="tel:+919566567588"
                        className="text-green-brand hover:underline font-medium"
                      >
                        +91 95665 67588
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-brandBg-secondary flex items-center justify-center text-navy flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-navy block">Working Hours:</span>
                      <span>Mon – Sat: 10:00 AM – 6:00 PM (IST)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge Card */}
              <div className="bg-navy text-white p-6 sm:p-8 rounded-xl border border-navy-light space-y-3 shadow-xl">
                <div className="flex items-center gap-2 text-green-brand text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confidentiality Guaranteed</span>
                </div>
                <h4 className="text-base font-bold text-white">
                  Strict NDA & Intellectual Property Protection
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  All discussions, architecture schemas, and business metrics shared with Nexify IT are strictly confidential.
                </p>
              </div>
            </div>

            {/* Right: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
