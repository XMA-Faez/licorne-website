import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg' | 'none';
  children: ReactNode;
}

export function Card({ 
  variant = 'default', 
  padding = 'md',
  children, 
  className = '',
  ...props 
}: CardProps) {
  const baseStyles = 'rounded-lg transition-all duration-transition-base';
  
  const variants = {
    default: 'bg-surface border border-border',
    elevated: 'bg-surface shadow-shadow-lg hover:shadow-shadow-xl',
    outlined: 'bg-transparent border-2 border-border-strong',
  };
  
  const paddings = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8',
  };
  
  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ 
  children, 
  className = '',
  ...props 
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`pb-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ 
  children, 
  className = '',
  ...props 
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={`text-xl font-weight-semibold text ${className}`} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ 
  children, 
  className = '',
  ...props 
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`text-sm text-secondary mt-1 ${className}`} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ 
  children, 
  className = '',
  ...props 
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`text ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ 
  children, 
  className = '',
  ...props 
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`pt-4 ${className}`} {...props}>
      {children}
    </div>
  );
}
