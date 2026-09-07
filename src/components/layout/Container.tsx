import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  as: Component = "div",
  ...props
}) => {
  return (
    <Component
      className={twMerge(
        "w-full max-w-[1320px] mx-auto px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
