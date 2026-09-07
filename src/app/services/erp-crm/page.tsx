import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import { ServiceDetailView } from "@/components/services/ServiceDetailView";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Custom ERP & CRM Software Development | The Nexify",
  description:
    "Unify customer pipelines, multi-warehouse inventory, automated GST billing, and operations management through custom ERP software.",
};

export default function ERPCRMPage() {
  const service = servicesData.find((s) => s.slug === "erp-crm");
  if (!service) return notFound();

  return <ServiceDetailView service={service} />;
}
