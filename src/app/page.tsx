import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatWeDoSection } from "@/components/home/WhatWeDoSection";
import { StatsStrip } from "@/components/home/StatsStrip";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { AboutSection } from "@/components/home/AboutSection";
import { TechStackSection } from "@/components/home/TechStackSection";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section (Deep Navy with Interactive Visual) */}
      <HeroSection />

      {/* 2. Intro / What We Do Section (4-col info + 8-col 5 service cards) */}
      <WhatWeDoSection />

      {/* 3. Dark Navy Statistics Strip (4 columns with cyan icons) */}
      <StatsStrip />

      {/* 4. Featured Projects (4-column grid with live UI previews & filters) */}
      <FeaturedProjects />

      {/* 5. About Nexify IT Section (2 columns with 3 core pillars) */}
      <AboutSection />

      {/* 6. Technology Stack (Subtle badge grid) */}
      <TechStackSection />

      {/* 7. How We Build Process (6-step timeline) */}
      <ProcessTimeline />

      {/* 8. Dark Navy CTA Section */}
      <CTASection />
    </>
  );
}
