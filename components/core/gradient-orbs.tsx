"use client"

import { cn } from "@/lib/utils"

interface GradientOrbsProps {
  variant?: "tl" | "tr" | "bl" | "br" | "center"
  intensity?: "sm" | "md" | "lg"
  className?: string
}

export function GradientOrbs({ variant = "tl", intensity = "md", className }: GradientOrbsProps) {
  const positions = {
    tl: "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    tr: "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    bl: "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    br: "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  }

  const sizes = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
  }

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {/* Brand Orb */}
      <div className={cn("gradient-orb gradient-orb-brand animate-pulse-glow", positions[variant], sizes[intensity])} />

      {/* Accent Orb */}
      <div
        className={cn(
          "gradient-orb gradient-orb-accent animate-pulse-glow",
          variant === "tl"
            ? "top-20 left-20"
            : variant === "tr"
              ? "top-20 right-20"
              : variant === "bl"
                ? "bottom-20 left-20"
                : variant === "br"
                  ? "bottom-20 right-20"
                  : "top-1/3 left-1/3",
          "w-48 h-48",
        )}
        style={{ animationDelay: "2s" }}
      />
    </div>
  )
}
