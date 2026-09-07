import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "light",
  className = "",
  showSubtitle = false,
}) => {
  const isDarkBg = variant === "dark";

  return (
    <Link
      href="/"
      className={clsx(
        "inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-brand rounded-md py-1",
        className
      )}
      aria-label="The Nexify Homepage"
    >
    
      <div className="flex flex-col">
        <Image
                src="/images/nexify-logo.jpg"
                alt="THE NEXIFY - Training & Placement"
                width={120}
                height={20}
                priority
                className="object-contain object-left"
              />
        {showSubtitle && (
          <span
            className={clsx(
              "text-[10px] uppercase font-semibold tracking-wider mt-0.5",
              isDarkBg ? "text-gray-400" : "text-brandText-secondary"
            )}
          >
            Solutions
          </span>
        )}
      </div>
    </Link>
  );
};
