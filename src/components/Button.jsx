import React from 'react';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

export function Button({ 
  children, 
  variant = 'primary', 
  className, 
  icon = false,
  href,
  ...props 
}) {
  const baseClasses = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-accent-orange text-dark-bg",
    secondary: "bg-transparent border border-border-orange text-white",
  };

  const classes = twMerge(clsx(baseClasses, variants[variant], className));

  const content = (
    <span className="relative z-10 flex items-center">
      {children}
      {icon && (
        <motion.div 
          className="ml-2 h-4 w-4"
          variants={{ hover: { x: [0, 4, 0], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.div>
      )}
    </span>
  );

  const bgHover = variant === 'primary' 
    ? <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    : <div className="absolute inset-0 bg-accent-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />;

  const motionProps = {
    whileHover: "hover",
    variants: { hover: { scale: 1.03 } },
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...props}>
        {bgHover}{content}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} {...motionProps} {...props}>
      {bgHover}{content}
    </motion.button>
  );
}
