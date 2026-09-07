import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import { ServiceDetailView } from "@/components/services/ServiceDetailView";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Managed Web Hosting & Cloud Infrastructure | Nexify IT",
  description:
    "High-speed cloud VPS, automated SSL security, daily disaster recovery snapshots, and 24/7 server infrastructure management.",
};

export default function WebHostingPage() {
  const service = servicesData.find((s) => s.slug === "web-hosting");
  if (!service) return notFound();

  return <ServiceDetailView service={service} />;
}
