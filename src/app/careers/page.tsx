"use client";

import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";

import {
  MapPin,
  Clock,
  CheckCircle2,
  Zap,
  Heart,
  TrendingUp,
  X,
  Send,
  AlertCircle,
} from "lucide-react";

export default function CareersPage() {
  // -----------------------------------------
  // SELECTED JOB
  // -----------------------------------------

  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  // -----------------------------------------
  // APPLICATION STATUS
  // -----------------------------------------

  const [appStatus, setAppStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  // -----------------------------------------
  // ERROR MESSAGE
  // -----------------------------------------

  const [errorMessage, setErrorMessage] = useState("");

  // -----------------------------------------
  // FORM DATA
  // -----------------------------------------

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    portfolio: "",
    message: "",
  });

  // -----------------------------------------
  // OPEN POSITIONS
  // -----------------------------------------

  const openings = [
    // {
    //   id: "frontend-dev",
    //   title: "Frontend Engineer (Next.js / React / TypeScript)",
    //   department: "Web Development",
    //   location: "Madurai, Tamil Nadu (On-Site / Hybrid)",
    //   type: "Full-Time",
    //   experience: "2+ Years",

    //   summary:
    //     "Build enterprise-grade web applications, responsive customer portals, and high-conversion corporate websites using Next.js and Tailwind CSS.",

    //   requirements: [
    //     "Strong proficiency in React, Next.js (App Router), TypeScript, and CSS/Tailwind",
    //     "Deep understanding of Core Web Vitals, performance profiling, and SEO hierarchy",
    //     "Experience consuming REST & GraphQL APIs with client caching strategies",
    //   ],
    // },

    // {
    //   id: "ai-python-dev",
    //   title: "Python & AI Automation Engineer",
    //   department: "AI & Automation",
    //   location: "Madurai, Tamil Nadu (On-Site / Hybrid)",
    //   type: "Full-Time",
    //   experience: "2+ Years",

    //   summary:
    //     "Design and deploy intelligent workflow bots, document AI OCR parsers, and custom LLM assistants using FastAPI and LangChain.",

    //   requirements: [
    //     "Strong backend programming in Python, FastAPI, and asynchronous concurrency",
    //     "Hands-on experience with OpenAI/Anthropic APIs, vector databases, and embeddings",
    //     "Experience building automated webhooks and OCR data extraction pipelines",
    //   ],
    // },

    // {
    //   id: "data-analyst",
    //   title: "Data Analyst & Power BI Specialist",
    //   department: "Data Analytics",
    //   location: "Madurai, Tamil Nadu (On-Site / Hybrid)",
    //   type: "Full-Time",
    //   experience: "1-3 Years",

    //   summary:
    //     "Build interactive executive dashboards, optimize complex SQL analytical queries, and automate scheduled MIS reporting workflows.",

    //   requirements: [
    //     "Advanced proficiency in Power BI, DAX formulas, and data modeling",
    //     "Strong relational database querying in PostgreSQL / MySQL / SQL Server",
    //     "Ability to translate complex business metrics into clean visual dashboards",
    //   ],
    // },

    // {
    //   id: "fullstack-erp",
    //   title: "Full-Stack Engineer (Node.js & PostgreSQL)",
    //   department: "ERP & CRM",
    //   location: "Madurai, Tamil Nadu (On-Site / Hybrid)",
    //   type: "Full-Time",
    //   experience: "2+ Years",

    //   summary:
    //     "Architect custom ERP, inventory, and GST billing platforms with granular role-based access control and high database integrity.",

    //   requirements: [
    //     "Proficiency in Node.js, Express/Nest, PostgreSQL, and Prisma/TypeORM",
    //     "Experience designing robust database schemas and transactional rollbacks",
    //     "Knowledge of GST invoicing logic and multi-branch inventory models is a plus",
    //   ],
    // },

    {
      id: "ui-ux-designer",
      title: "UI/UX Designer",
      department: "Design",
      location: "Madurai, Tamil Nadu (On-Site / Hybrid)",
      type: "Full-Time",
      experience: "2+ Years",

      summary:
        "Design intuitive digital experiences, modern interfaces, and scalable design systems for enterprise applications, websites, and customer-facing products.",

      requirements: [
        "Strong proficiency in Figma, UI design, UX research, wireframing, prototyping, and design systems",
        "Deep understanding of user-centered design, responsive layouts, accessibility, visual hierarchy, and interaction design",
        "Experience collaborating with developers and product teams to translate designs into high-quality digital experiences",
      ],
    },

    {
      id: "mobile-dev",
      title: "Mobile Application Developer (Flutter / React Native)",
      department: "Mobile Development",
      location: "Madurai, Tamil Nadu (On-Site / Hybrid)",
      type: "Full-Time",
      experience: "2+ Years",

      summary:
        "Build scalable, high-performance mobile applications for Android and iOS with seamless user experiences, robust API integrations, and production-ready architecture.",

      requirements: [
        "Strong proficiency in Flutter or React Native with solid knowledge of Dart or TypeScript",
        "Experience with REST APIs, authentication, state management, local storage, push notifications, and third-party integrations",
        "Understanding of mobile performance optimization, responsive UI, app lifecycle, debugging, testing, and Play Store / App Store deployment",
      ],
    },

    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      department: "Cloud & Infrastructure",
      location: "Madurai, Tamil Nadu (On-Site / Hybrid)",
      type: "Full-Time",
      experience: "2+ Years",

      summary:
        "Build reliable cloud infrastructure, automate deployment pipelines, and maintain secure, scalable environments for modern web applications and enterprise systems.",

      requirements: [
        "Strong proficiency in Linux, Git, Docker, CI/CD pipelines, and cloud platforms such as AWS, Azure, or Google Cloud",
        "Experience with infrastructure automation, containerization, monitoring, logging, networking, and production deployment workflows",
        "Understanding of cloud security, system reliability, performance optimization, backup strategies, and automated deployment processes",
      ],
    },
  ];

  // -----------------------------------------
  // COMPANY PERKS
  // -----------------------------------------

  const perks = [
    {
      icon: <Zap className="w-5 h-5 text-green-brand" />,

      title: "Work with Modern Tech",

      description:
        "No outdated legacy stacks. We build exclusively with Next.js, Python, PostgreSQL, and modern AI models.",
    },

    {
      icon: <TrendingUp className="w-5 h-5 text-cyan-tech" />,

      title: "High-Impact Engineering",

      description:
        "Your code and architectures directly power real business operations and decision-making for growing enterprises.",
    },

    {
      icon: <Heart className="w-5 h-5 text-green-brand" />,

      title: "Engineering Culture in Madurai",

      description:
        "Work with passionate software builders in Madurai, with competitive compensation and healthy work-life balance.",
    },
  ];

  // -----------------------------------------
  // HANDLE APPLY
  // -----------------------------------------

  const handleApply = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setErrorMessage("");
    setAppStatus("submitting");

    try {
      // Make absolutely sure selected job
      // is included in submitted data.

      const applicationData = {
        ...formData,
        position: selectedJob || formData.position,
      };

      console.log(
        "Submitting The Nexify application:",
        applicationData
      );

      const response = await fetch("/api/careers", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(applicationData),
      });

      const result = await response.json();

      console.log("Careers API response:", result);

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
          "Unable to submit your application."
        );
      }

      setAppStatus("success");
    } catch (error) {
      console.error(
        "Application submission error:",
        error
      );

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );

      setAppStatus("error");
    }
  };

  // -----------------------------------------
  // CLOSE MODAL
  // -----------------------------------------

  const closeApplication = () => {
    setSelectedJob(null);

    setAppStatus("idle");

    setErrorMessage("");

    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      portfolio: "",
      message: "",
    });
  };

  // -----------------------------------------
  // OPEN APPLICATION
  // -----------------------------------------

  const openApplication = (jobTitle: string) => {
    setSelectedJob(jobTitle);

    setAppStatus("idle");

    setErrorMessage("");

    setFormData({
      name: "",
      email: "",
      phone: "",
      position: jobTitle,
      experience: "",
      portfolio: "",
      message: "",
    });
  };

  return (
    <div className="font-sans">

      {/* =====================================
          HERO
      ====================================== */}

      <section className="bg-navy text-white py-16 lg:py-24 relative overflow-hidden border-b border-navy-dark">

        <div className="absolute inset-0 hero-grid-pattern opacity-50 pointer-events-none" />

        <Container className="relative z-10">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 mb-4">

              <span className="w-2 h-2 rounded-full bg-green-brand" />

              <span className="text-xs font-bold uppercase tracking-widest text-green-brand">
                JOIN THE NEXIFY TEAM
              </span>

            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">

              Build Technology That{" "}

              <span className="text-green-brand">
                Moves Business Forward
              </span>

            </h1>

            <p className="mt-5 text-base sm:text-lg text-gray-300 leading-relaxed">

              We are expanding our software engineering,
              AI, and data analytics team in Madurai.
              Explore open roles and build production-grade
              solutions.

            </p>

          </div>

        </Container>

      </section>


      {/* =====================================
          CULTURE & PERKS
      ====================================== */}

      <section className="py-16 bg-brandBg-secondary border-b border-brandBorder">

        <Container>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {perks.map((perk) => (

              <div
                key={perk.title}
                className="bg-white p-6 rounded-xl border border-brandBorder shadow-sm"
              >

                <div className="w-10 h-10 rounded-lg bg-brandBg-secondary flex items-center justify-center mb-3">
                  {perk.icon}
                </div>

                <h3 className="text-base font-bold text-navy mb-1">
                  {perk.title}
                </h3>

                <p className="text-xs sm:text-sm text-brandText-secondary leading-relaxed">
                  {perk.description}
                </p>

              </div>

            ))}

          </div>

        </Container>

      </section>


      {/* =====================================
          OPEN POSITIONS
      ====================================== */}

      <section className="py-20 bg-white border-b border-brandBorder">

        <Container>

          <SectionHeader
            eyebrow="CURRENT OPENINGS"
            title="Open Engineering"
            highlightedText="Positions"
            description="Find your next career milestone at Nexify IT in Madurai, Tamil Nadu."
            className="mb-12"
          />

          <div className="space-y-6">

            {openings.map((job) => (

              <div
                key={job.id}
                className="bg-white rounded-xl border border-brandBorder p-6 sm:p-8 hover:border-green-brand/50 shadow-card hover:shadow-cardHover transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >

                <div className="space-y-3 max-w-3xl">

                  <div className="flex flex-wrap items-center gap-2 text-xs">

                    <span className="px-2.5 py-0.5 rounded bg-green-light text-green-brand font-bold">
                      {job.department}
                    </span>

                    <span className="text-gray-400">
                      •
                    </span>

                    <span className="text-brandText-secondary flex items-center gap-1">

                      <MapPin className="w-3.5 h-3.5 text-cyan-tech" />

                      {job.location}

                    </span>

                    <span className="text-gray-400">
                      •
                    </span>

                    <span className="text-brandText-secondary flex items-center gap-1">

                      <Clock className="w-3.5 h-3.5 text-gray-400" />

                      {job.type} ({job.experience})

                    </span>

                  </div>


                  <h3 className="text-xl font-bold text-navy">
                    {job.title}
                  </h3>


                  <p className="text-sm text-brandText-secondary leading-relaxed">
                    {job.summary}
                  </p>


                  <div className="pt-2">

                    <div className="text-xs font-bold text-navy mb-1.5">
                      Key Competencies:
                    </div>

                    <ul className="space-y-1">

                      {job.requirements.map(
                        (requirement, index) => (

                          <li
                            key={index}
                            className="flex items-start gap-2 text-xs text-brandText-primary"
                          >

                            <CheckCircle2 className="w-3.5 h-3.5 text-green-brand flex-shrink-0 mt-0.5" />

                            <span>
                              {requirement}
                            </span>

                          </li>

                        )
                      )}

                    </ul>

                  </div>

                </div>


                <div className="flex-shrink-0">

                  <Button
                    variant="primary"
                    size="md"
                    onClick={() =>
                      openApplication(job.title)
                    }
                  >
                    Apply for Role
                  </Button>

                </div>

              </div>

            ))}

          </div>

        </Container>

      </section>


      {/* =====================================
          APPLICATION MODAL
      ====================================== */}

      {selectedJob && (

        <div
          className="fixed inset-0 z-50 flex justify-center bg-navy/80 backdrop-blur-sm p-4 overflow-y-auto"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeApplication();
            }
          }}
        >

          <div className="bg-white rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-brandBorder relative my-8 h-fit">

            {/* CLOSE */}

            <button
              type="button"
              onClick={closeApplication}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-navy rounded-full hover:bg-brandBg-secondary transition-colors"
              aria-label="Close application form"
            >
              <X className="w-5 h-5" />
            </button>


            {/* =================================
                SUCCESS
            ================================== */}

            {appStatus === "success" ? (

              <div className="text-center py-8 space-y-4">

                <div className="w-14 h-14 rounded-full bg-green-light text-green-brand flex items-center justify-center mx-auto">

                  <CheckCircle2 className="w-8 h-8" />

                </div>

                <h4 className="text-xl font-bold text-navy">
                  Application Submitted!
                </h4>

                <p className="text-sm text-brandText-secondary leading-relaxed">

                  Thank you for applying for{" "}

                  <span className="font-bold text-navy">
                    {selectedJob}
                  </span>

                  . Our recruitment team in Madurai
                  will review your profile and reach out
                  if your experience matches the role.

                </p>

                <div className="pt-3">

                  <Button
                    type="button"
                    variant="primary"
                    size="sm"
                    onClick={closeApplication}
                  >
                    Close
                  </Button>

                </div>

              </div>

            ) : (

              /* =================================
                 APPLICATION FORM
              ================================== */

              <form
                onSubmit={handleApply}
                className="space-y-4"
              >

                {/* FORM HEADING */}

                <div className="pr-8">

                  <span className="text-xs font-bold uppercase tracking-wider text-green-brand">
                    Job Application
                  </span>

                  <h4 className="text-lg font-bold text-navy mt-0.5">
                    {selectedJob}
                  </h4>

                </div>


                {/* ERROR */}

                {appStatus === "error" && (

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700">

                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />

                    <p className="text-xs leading-relaxed">
                      {errorMessage ||
                        "Something went wrong. Please try again."}
                    </p>

                  </div>

                )}


                {/* NAME */}

                <div className="space-y-1">

                  <label className="text-xs font-bold text-navy">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2.5 rounded-md border border-brandBorder text-sm text-brandText-primary focus:ring-2 focus:ring-green-brand focus:outline-none"
                  />

                </div>


                {/* EMAIL */}

                <div className="space-y-1">

                  <label className="text-xs font-bold text-navy">
                    Email *
                  </label>

                  <input
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2.5 rounded-md border border-brandBorder text-sm text-brandText-primary focus:ring-2 focus:ring-green-brand focus:outline-none"
                  />

                </div>


                {/* PHONE */}

                <div className="space-y-1">

                  <label className="text-xs font-bold text-navy">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2.5 rounded-md border border-brandBorder text-sm text-brandText-primary focus:ring-2 focus:ring-green-brand focus:outline-none"
                  />

                </div>


                {/* PORTFOLIO */}

                <div className="space-y-1">

                  <label className="text-xs font-bold text-navy">
                    Portfolio / GitHub / LinkedIn URL
                  </label>

                  <input
                    type="url"
                    placeholder="https://github.com/yourhandle"
                    value={formData.portfolio}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        portfolio: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2.5 rounded-md border border-brandBorder text-sm text-brandText-primary focus:ring-2 focus:ring-green-brand focus:outline-none"
                  />

                </div>


                {/* EXPERIENCE */}

                <div className="space-y-1">

                  <label className="text-xs font-bold text-navy">
                    Experience
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. 2 years"
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        experience: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2.5 rounded-md border border-brandBorder text-sm text-brandText-primary focus:ring-2 focus:ring-green-brand focus:outline-none"
                  />

                </div>


                {/* MESSAGE */}

                <div className="space-y-1">

                  <label className="text-xs font-bold text-navy">
                    Brief Note on Experience
                  </label>

                  <textarea
                    rows={3}
                    placeholder="Highlight your key projects, tech stack, or years of relevant experience..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2.5 rounded-md border border-brandBorder text-sm text-brandText-primary focus:ring-2 focus:ring-green-brand focus:outline-none resize-y"
                  />

                </div>


                {/* SUBMIT */}

                <div className="pt-2">

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full"
                    disabled={
                      appStatus === "submitting"
                    }
                    icon={
                      <Send className="w-4 h-4" />
                    }
                  >

                    {appStatus === "submitting"
                      ? "Submitting Application..."
                      : "Submit Application"}

                  </Button>

                </div>


                <p className="text-center text-[10px] text-gray-400 pt-1">
                  Your information will be sent securely to
                  the The Nexify recruitment team.
                </p>

              </form>

            )}

          </div>

        </div>

      )}


      {/* =====================================
          CTA
      ====================================== */}

      <CTASection />

    </div>
  );
}