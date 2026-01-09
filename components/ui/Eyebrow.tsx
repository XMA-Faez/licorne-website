import { cn } from "@/lib/utils"

type EyebrowVariant = "hero" | "section" | "light"

type EyebrowProps = {
  children: React.ReactNode
  variant?: EyebrowVariant
  className?: string
}

export function Eyebrow({ children, variant = "section", className }: EyebrowProps) {
  if (variant === "hero" || variant === "light") {
    return (
      <span
        className={cn(
          "font-semibold text-sm uppercase tracking-wider text-white",
          className
        )}
      >
        {children}
      </span>
    )
  }

  return (
    <span
      className={cn(
        "font-semibold text-sm uppercase tracking-wider text-primary",
        className
      )}
    >
      {children}
    </span>
  )
}
