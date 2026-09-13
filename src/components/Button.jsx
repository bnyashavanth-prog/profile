import React from 'react';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function Button({ 
  children, 
  variant = 'primary', 
  className, 
  icon = false,
  href,
  ...props 
}) {
  const baseClasses = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";
  
  const variants = {
    primary: "bg-accent-orange text-dark-bg hover:bg-accent-hover hover:scale-105",
    secondary: "bg-transparent border border-border-orange text-white hover:border-accent-orange hover:bg-accent-orange/10",
  };

  const classes = twMerge(clsx(baseClasses, variants[variant], className));

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 h-4 w-4" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
