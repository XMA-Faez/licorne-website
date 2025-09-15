import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary text-inverse hover:bg-primary-hover active:bg-primary-active",
    secondary:
      "bg-secondary text-inverse hover:bg-secondary-hover active:bg-secondary-active",
    success:
      "bg-success text-inverse hover:bg-success-hover active:bg-success-active",
    warning:
      "bg-warning text-inverse hover:bg-warning-hover active:bg-warning-active",
    danger:
      "bg-danger text-inverse hover:bg-danger-hover active:bg-danger-active",
    ghost:
      "bg-transparent text-text hover:bg-surface-hover active:bg-surface-active",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
