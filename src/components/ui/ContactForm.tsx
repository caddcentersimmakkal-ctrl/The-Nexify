"use client";

import React, { useState } from "react";
import { Button } from "./Button";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  User,
  Mail,
  Phone,
  Briefcase,
  DollarSign,
  MessageSquare,
} from "lucide-react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Web Development",
    budget: "₹1,00,000 - ₹3,00,000",
    details: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const serviceOptions = [
    "Web Development",
    "Data Analytics",
    "AI Automation",
    "ERP & CRM",
    "Web Hosting & Cloud",
    "Other",
  ];

  const budgetOptions = [
    "Under ₹1,00,000",
    "₹1,00,000 - ₹3,00,000",
    "₹3,00,000 - ₹7,00,000",
    "₹7,00,000+",
    "Flexible / To be discussed",
  ];

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!formData.name || !formData.email || !formData.details) {
  //     setStatus("error");
  //     setErrorMessage("Please fill in all required fields (Name, Email, and Project Details).");
  //     return;
  //   }

  //   setStatus("submitting");
  //   // Simulate real asynchronous submission
  //   setTimeout(() => {
  //     setStatus("success");
  //   }, 1200);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrorMessage("");

    if (!formData.name || !formData.email || !formData.details) {
      setStatus("error");
      setErrorMessage(
        "Please fill in all required fields (Name, Email, and Project Details)."
      );
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Failed to submit your inquiry."
        );
      }

      setStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);

      setStatus("error");

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-xl border border-green-brand/40 p-8 sm:p-10 shadow-card text-center space-y-4 font-sans animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-green-light flex items-center justify-center mx-auto text-green-brand">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-extrabold text-navy">
          Inquiry Received Successfully!
        </h3>
        <p className="text-sm text-brandText-secondary max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to <span className="font-bold text-navy">Nexify IT</span>.
          Our technology team in Madurai will review your requirements and get back to you within 24 business hours.
        </p>
        <div className="pt-4">
          <Button
            variant="primary"
            size="md"
            onClick={() => {
              setStatus("idle");
              setFormData({
                name: "",
                company: "",
                email: "",
                phone: "",
                service: "Web Development",
                budget: "₹1,00,000 - ₹3,00,000",
                details: "",
              });
            }}
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl border border-brandBorder p-6 sm:p-8 lg:p-10 shadow-card font-sans space-y-6"
    >
      {status === "error" && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 text-xs">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-gray-400" />
            Your Full Name <span className="text-green-brand">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Anand Sundaram"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-md border border-brandBorder text-sm text-brandText-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-brand focus:border-transparent transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
            <Building className="w-3.5 h-3.5 text-gray-400" />
            Company / Organization
          </label>
          <input
            type="text"
            placeholder="e.g. Apex Industrial Solutions"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-md border border-brandBorder text-sm text-brandText-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-brand focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-gray-400" />
            Business Email <span className="text-green-brand">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="name@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-md border border-brandBorder text-sm text-brandText-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-brand focus:border-transparent transition-all"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-gray-400" />
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-md border border-brandBorder text-sm text-brandText-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-brand focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Row 3: Service & Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-gray-400" />
            Service Required <span className="text-green-brand">*</span>
          </label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-md border border-brandBorder text-sm text-brandText-primary bg-white focus:outline-none focus:ring-2 focus:ring-green-brand focus:border-transparent transition-all"
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5 text-gray-400" />
            Estimated Budget
          </label>
          <select
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-md border border-brandBorder text-sm text-brandText-primary bg-white focus:outline-none focus:ring-2 focus:ring-green-brand focus:border-transparent transition-all"
          >
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Project Details */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-gray-400" />
          Project Details & Objectives <span className="text-green-brand">*</span>
        </label>
        <textarea
          rows={4}
          required
          placeholder="Briefly describe your project requirements, target timeline, or existing technical setup..."
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-md border border-brandBorder text-sm text-brandText-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-brand focus:border-transparent transition-all resize-y"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={status === "submitting"}
          icon={<Send className="w-4 h-4" />}
        >
          {status === "submitting" ? "Submitting Inquiry..." : "Submit Project Inquiry"}
        </Button>
      </div>

      <div className="text-center text-[11px] text-gray-400">
        We respect your privacy. All inquiries are covered under our Non-Disclosure terms.
      </div>
    </form>
  );
};
