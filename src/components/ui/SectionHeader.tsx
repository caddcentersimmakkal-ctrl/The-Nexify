import React from "react";
import { clsx } from "clsx";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  highlightedText,
  description,
  align = "left",
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";

  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-green-brand" />
          <span className="text-xs font-bold uppercase tracking-widest text-green-brand font-sans">
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={clsx(
          "text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-sans leading-tight",
          isDark ? "text-white" : "text-navy"
        )}
      >
        {title}{" "}
        {highlightedText && (
          <span className="text-green-brand">{highlightedText}</span>
        )}
      </h2>

      {description && (
        <p
          className={clsx(
            "mt-4 text-base sm:text-lg leading-relaxed font-sans",
            isDark ? "text-gray-300" : "text-brandText-secondary"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
