import { cn } from "@/lib/utils"

type Props = {
  className?: string
  /** Strength multiplier for parallax scale/shift (CSS-only). */
  strength?: number
}

/**
 * Fixed, global aura background. No JS. Uses CSS scroll-driven animation when available.
 * Respects prefers-reduced-motion.
 */
export function GradientBackground({ className, strength = 1 }: Props) {
  return (
    <div
      aria-hidden
      data-gradient-bg
      className={cn(
  "fixed inset-0 z-[-1] pointer-events-none bg-aura",
        // fallback color so there's no FOUC on first paint
  "[background-color:var(--background)]",
        className,
      )}
      style={{
        // Expose a tunable var to CSS animation
        // @ts-expect-error custom CSS var OK
        "--parallax-strength": String(strength),
      }}
    />
  )
}
