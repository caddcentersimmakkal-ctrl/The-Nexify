import React from "react";
import type { Metadata } from "next";
import { servicesData } from "@/data/services";
import { ServiceDetailView } from "@/components/services/ServiceDetailView";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "AI Automation & Intelligent LLM Bots | The Nexify",
  description:
    "Automate enterprise operations using private LLM assistants, document AI OCR extraction, and multi-step workflow bots.",
};

export default function AIAutomationPage() {
  const service = servicesData.find((s) => s.slug === "ai-automation");
  if (!service) return notFound();

  return <ServiceDetailView service={service} />;
}
