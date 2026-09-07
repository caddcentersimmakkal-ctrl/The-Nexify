import React from "react";
import Link from "next/link";
import { ServiceDetail } from "@/data/services";
import {
  Code,
  BarChart3,
  Sparkles,
  Database,
  Cloud,
  ArrowRight,
  Check,
} from "lucide-react";
import { clsx } from "clsx";

interface ServiceCardProps {
  service: ServiceDetail;
  variant?: "default" | "compact" | "detailed";
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  variant = "default",
  className = "",
}) => {
  const getIcon = () => {
    const iconClass = "w-6 h-6 text-green-brand";
    switch (service.iconName) {
      case "Code":
        return <Code className={iconClass} />;
      case "BarChart3":
        return <BarChart3 className={iconClass} />;
      case "Sparkles":
        return <Sparkles className={iconClass} />;
      case "Database":
        return <Database className={iconClass} />;
      case "Cloud":
        return <Cloud className={iconClass} />;
      default:
        return <Code className={iconClass} />;
    }
  };

  return (
    <div
      className={clsx(
        "group relative bg-white border border-brandBorder rounded-xl p-7 lg:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-green-brand/60 shadow-card hover:shadow-cardHover",
        className
      )}
    >
      <div>
        {/* Top bar: Icon & Number */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-lg bg-green-light flex items-center justify-center border border-green-brand/20 transition-transform duration-200 group-hover:scale-105">
            {getIcon()}
          </div>
          <span className="font-mono text-sm font-bold text-gray-400 group-hover:text-green-brand transition-colors">
            {service.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-navy group-hover:text-green-brand transition-colors mb-2.5">
          <Link href={`/services/${service.slug}`} className="focus:outline-none">
            {service.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-sm text-brandText-secondary leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {/* Feature Pills / List */}
        <div className="space-y-2 mb-6 pt-4 border-t border-brandBorder/60">
          {service.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-2 text-xs font-medium text-brandText-primary"
            >
              <div className="w-4 h-4 rounded-full bg-green-light flex items-center justify-center flex-shrink-0">
                <Check className="w-2.5 h-2.5 text-green-brand" />
              </div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer Link */}
      <div className="pt-2">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-navy group-hover:text-green-brand uppercase tracking-wider transition-colors"
        >
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
