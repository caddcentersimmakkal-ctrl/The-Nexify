import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import { ServiceDetailView } from "@/components/services/ServiceDetailView";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Data Analytics & Power BI Dashboards | Nexify IT",
  description:
    "Transform enterprise data into actionable Power BI dashboards, automated SQL ETL pipelines, and executive MIS reports.",
};

export default function DataAnalyticsPage() {
  const service = servicesData.find((s) => s.slug === "data-analytics");
  if (!service) return notFound();

  return <ServiceDetailView service={service} />;
}
