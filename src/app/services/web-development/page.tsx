import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import { ServiceDetailView } from "@/components/services/ServiceDetailView";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Web Development Services | Nexify IT Solutions",
  description:
    "High-speed websites, custom web applications, e-commerce storefronts, and B2B portals engineered with Next.js, React, and TypeScript.",
};

export default function WebDevelopmentPage() {
  const service = servicesData.find((s) => s.slug === "web-development");
  if (!service) return notFound();

  return <ServiceDetailView service={service} />;
}
