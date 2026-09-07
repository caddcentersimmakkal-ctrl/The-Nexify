import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary-light" | "secondary-dark" | "outline-green";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  icon,
  iconPosition = "right",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium font-sans transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer text-center";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 rounded-md gap-1.5",
    md: "text-sm px-5 py-2.5 rounded-md gap-2", // ~12px 22px
    lg: "text-base px-6 py-3.5 rounded-md gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-green-brand text-white hover:bg-green-hover shadow-sm hover:shadow hover:-translate-y-0.5 focus-visible:ring-green-brand active:translate-y-0",
    "secondary-light":
      "bg-transparent text-navy border border-navy/30 hover:border-navy hover:bg-navy/5 focus-visible:ring-navy hover:-translate-y-0.5 active:translate-y-0",
    "secondary-dark":
      "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10 focus-visible:ring-white hover:-translate-y-0.5 active:translate-y-0",
    "outline-green":
      "bg-transparent text-green-brand border border-green-brand/50 hover:border-green-brand hover:bg-green-brand/10 focus-visible:ring-green-brand",
  };

  const combinedClasses = twMerge(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};
