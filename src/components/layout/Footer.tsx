import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "../ui/Logo";
import { MapPin, Mail, Phone, ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-navy text-white border-t border-navy-dark pt-16 pb-12 font-sans">
      <Container>
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Company Profile (4 cols on desktop) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" />
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm pt-2">
              Technology that solves real business problems. We build intelligent web
              applications, data-driven dashboards, AI automation pipelines, and scalable
              cloud architectures.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-green-brand flex-shrink-0" />
              <span>Enterprise Grade Quality & Security</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <CheckCircle2 className="w-4 h-4 text-cyan-tech flex-shrink-0" />
              <span>Registered B2B Software Provider</span>
            </div>
          </div>

          {/* Column 2: Company Navigation (2 cols on desktop) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-green-brand transition-colors inline-flex items-center gap-1"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/projects"
                  className="text-gray-300 hover:text-green-brand transition-colors inline-flex items-center gap-1"
                >
                  Projects
                </Link>
              </li> */}
              <li>
                <Link
                  href="/careers"
                  className="text-gray-300 hover:text-green-brand transition-colors inline-flex items-center gap-1"
                >
                  Careers
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-brand/20 text-green-brand font-bold">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-green-brand transition-colors inline-flex items-center gap-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services (3 cols on desktop) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-gray-300 hover:text-green-brand transition-colors inline-flex items-center gap-1 group"
                >
                  Web Development
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-green-brand" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/data-analytics"
                  className="text-gray-300 hover:text-green-brand transition-colors inline-flex items-center gap-1 group"
                >
                  Data Analytics
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-green-brand" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-automation"
                  className="text-gray-300 hover:text-green-brand transition-colors inline-flex items-center gap-1 group"
                >
                  AI Automation
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-green-brand" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/erp-crm"
                  className="text-gray-300 hover:text-green-brand transition-colors inline-flex items-center gap-1 group"
                >
                  ERP & CRM
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-green-brand" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-hosting"
                  className="text-gray-300 hover:text-green-brand transition-colors inline-flex items-center gap-1 group"
                >
                  Web Hosting & Cloud
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-green-brand" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information (3 cols on desktop) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Headquarters
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-tech flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">The Nexify</span>
                  <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
                    Madurai, Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-green-brand flex-shrink-0" />
                <a
                  href="mailto:thenexifymadurai@gmail.com"
                  className="text-gray-300 hover:text-green-brand transition-colors text-xs"
                >
                  thenexifymadurai@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-green-brand flex-shrink-0" />
                <a
                  href="tel:+919566567588"
                  className="text-gray-300 hover:text-green-brand transition-colors text-xs"
                >
                  +91 95665 67588
                </a>
              </div>

              <div className="pt-2">
                <span className="inline-block text-[11px] text-gray-400 bg-white/5 border border-white/10 rounded px-2.5 py-1">
                  Business Hours: Mon - Sat (10:00 AM - 6:00 PM IST)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} The Nexify. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-green-brand transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/terms"
              className="hover:text-green-brand transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
