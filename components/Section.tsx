import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

type Fade = "none" | "top" | "bottom" | "both"
type Corner = "LL" | "TL" | "TR" | "BR"

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string
  fade?: Fade
  blobFrom?: Corner
  blobTo?: Exclude<Corner, never>
}

/**
 * Transparent section wrapper that applies edge fades and exposes handoff attributes.
 */
export function Section({ id, className, children, fade = "both", blobFrom, blobTo, ...rest }: SectionProps) {
  return (
    <section
      id={id}
      data-fade={fade === "none" ? undefined : fade}
      data-blob-from={blobFrom}
      data-blob-to={blobTo}
      className={cn(
        // Keep surfaces translucent; do not block the global background
        "relative py-24",
        "bg-white/0 dark:bg-black/0",
        // Allow optional glass cards within sections without full solid backgrounds
        className,
        fade === "top" && "edge-fade-top",
        fade === "bottom" && "edge-fade-bottom",
        fade === "both" && "edge-fade-both",
      )}
      {...rest}
    >
      {children}
    </section>
  )
}
