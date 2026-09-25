import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon = false,
  href,
  ...props 
}) {
  const baseClasses = `inline-flex items-center justify-center rounded-sm px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all duration-300 relative overflow-hidden group ${className}`;
  
  const isPrimary = variant === 'primary';

  // Primary: Filled gold, black text, glows on hover
  // Secondary: Ghost/Outline, gold border, text shifts to gold on hover
  const colorClasses = isPrimary 
    ? "bg-[#f5b942] text-[#0a0a0f] border border-[#f5b942] hover:shadow-[0_0_25px_rgba(245,185,66,0.5)]"
    : "bg-transparent text-white border border-[#f5b942] hover:text-[#f5b942] hover:shadow-[inset_0_0_20px_rgba(245,185,66,0.2)]";

  const classes = `${baseClasses} ${colorClasses}`;

  const content = (
    <span className="relative z-10 flex items-center gap-3">
      {children}
      {icon && (
        <motion.div 
          variants={{ hover: { x: [0, 5, 0], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } }}
        >
          <ArrowRight size={16} />
        </motion.div>
      )}
    </span>
  );

  const motionProps = {
    whileHover: "hover",
    variants: { hover: { scale: 1.05 } },
    whileTap: { scale: 0.95 },
  };

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...props}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} {...motionProps} {...props}>
      {content}
    </motion.button>
  );
}
