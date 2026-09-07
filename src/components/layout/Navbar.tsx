"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { navLinks } from "@/data/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Code,
  BarChart3,
  Sparkles,
  Database,
  Cloud,
  ArrowRight,
  PhoneCall,
  Mail,
  MapPin,
} from "lucide-react";
import { clsx } from "clsx";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-5 h-5 text-green-brand flex-shrink-0" />;
      case "BarChart3":
        return <BarChart3 className="w-5 h-5 text-green-brand flex-shrink-0" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-green-brand flex-shrink-0" />;
      case "Database":
        return <Database className="w-5 h-5 text-green-brand flex-shrink-0" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-green-brand flex-shrink-0" />;
      default:
        return <Code className="w-5 h-5 text-green-brand flex-shrink-0" />;
    }
  };

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full bg-white transition-all duration-200 border-b h-20 border-brandBorder/80"
      )}
    >
      <Container className="h-full flex items-center justify-between">
        {/* Left: The Nexify Logo */}
        <Logo />

        {/* Center/Right: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const isServices = item.label === "Services";
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            if (isServices && item.dropdown) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    className={clsx(
                      "flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-colors rounded-md group",
                      isActive
                        ? "text-green-brand font-semibold"
                        : "text-navy hover:text-green-brand"
                    )}
                    aria-expanded={servicesDropdownOpen}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={clsx(
                        "w-4 h-4 transition-transform duration-200 text-gray-400 group-hover:text-green-brand",
                        servicesDropdownOpen && "rotate-180 text-green-brand"
                      )}
                    />
                  </Link>

                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 w-[420px] bg-white border border-brandBorder shadow-cardHover rounded-lg p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-3 py-1.5 border-b border-brandBorder mb-2">
                        Core Technology Services
                      </div>
                      <div className="space-y-1">
                        {item.dropdown.map((subItem) => {
                          const isSubActive = pathname === subItem.href;
                          return (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className={clsx(
                                "flex items-start gap-3 p-2.5 rounded-md transition-colors group",
                                isSubActive
                                  ? "bg-green-light text-navy"
                                  : "hover:bg-brandBg-secondary text-brandText-primary"
                              )}
                            >
                              <div className="p-2 rounded-md bg-white border border-brandBorder group-hover:border-green-brand/40 shadow-xs transition-colors">
                                {getServiceIcon(subItem.icon)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold text-navy group-hover:text-green-brand flex items-center justify-between">
                                  <span>{subItem.label}</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-green-brand" />
                                </div>
                                <p className="text-xs text-brandText-secondary mt-0.5 line-clamp-1">
                                  {subItem.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="mt-2 pt-2 border-t border-brandBorder px-3 flex items-center justify-between">
                        <span className="text-xs text-brandText-secondary">
                          Looking for tailored tech?
                        </span>
                        <Link
                          href="/services"
                          className="text-xs font-semibold text-green-brand hover:underline inline-flex items-center gap-1"
                        >
                          View All Services
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={clsx(
                  "px-3.5 py-2 text-sm font-medium transition-colors rounded-md relative",
                  isActive
                    ? "text-green-brand font-semibold"
                    : "text-navy hover:text-green-brand"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-green-brand rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Button href="/contact" variant="primary" size="md">
            Get in Touch
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-navy hover:text-green-brand hover:bg-brandBg-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-green-brand"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{background: "white"}} className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-white/98 backdrop-blur-md z-50 overflow-y-auto border-t border-brandBorder px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 pb-6">
            <Link
              href="/"
              
              className={clsx(
                "px-3 py-2 text-base font-semibold rounded-md",
                pathname === "/"
                  ? "text-green-brand bg-green-light"
                  : "text-navy hover:bg-brandBg-secondary"
              )}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={clsx(
                "px-3 py-2 text-base font-semibold rounded-md",
                pathname === "/about"
                  ? "text-green-brand bg-green-light"
                  : "text-navy hover:bg-brandBg-secondary"
              )}
            >
              About Us
            </Link>

            {/* Services with sub-items */}
            <div className="border border-brandBorder rounded-lg p-3 bg-brandBg-secondary/50">
              <div className="flex items-center justify-between mb-2">
                <Link
                  href="/services"
                  className="text-base font-semibold text-navy hover:text-green-brand"
                >
                  Services
                </Link>
                <span className="text-xs uppercase font-bold text-green-brand tracking-wider">
                  5 Offerings
                </span>
              </div>
              <div className="space-y-1.5 pl-2">
                {navLinks
                  .find((item) => item.label === "Services")
                  ?.dropdown?.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className={clsx(
                        "flex items-center gap-2.5 py-1.5 px-2 text-sm rounded-md",
                        pathname === sub.href
                          ? "text-green-brand font-bold bg-white"
                          : "text-brandText-secondary hover:text-navy"
                      )}
                    >
                      {getServiceIcon(sub.icon)}
                      <span>{sub.label}</span>
                    </Link>
                  ))}
              </div>
            </div>

            {/* <Link
              href="/projects"
              className={clsx(
                "px-3 py-2 text-base font-semibold rounded-md",
                pathname === "/projects"
                  ? "text-green-brand bg-green-light"
                  : "text-navy hover:bg-brandBg-secondary"
              )}
            >
              Projects
            </Link> */}

            <Link
              href="/careers"
              className={clsx(
                "px-3 py-2 text-base font-semibold rounded-md",
                pathname === "/careers"
                  ? "text-green-brand bg-green-light"
                  : "text-navy hover:bg-brandBg-secondary"
              )}
            >
              Careers
            </Link>

            <Link
              href="/contact"
              className={clsx(
                "px-3 py-2 text-base font-semibold rounded-md",
                pathname === "/contact"
                  ? "text-green-brand bg-green-light"
                  : "text-navy hover:bg-brandBg-secondary"
              )}
            >
              Contact
            </Link>

            <div className="pt-4">
              <Button href="/contact" variant="primary" size="lg" className="w-full">
                Get in Touch
              </Button>
            </div>

            {/* Mobile Contact Quick Bar */}
            <div className="mt-6 pt-6 border-t border-brandBorder text-xs text-brandText-secondary space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-tech flex-shrink-0" />
                <span>Madurai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-brand flex-shrink-0" />
                <span>thenexifymadurai@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
