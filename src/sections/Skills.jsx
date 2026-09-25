import React from 'react';
import { motion } from 'framer-motion';

export function Skills() {
  const categories = [
    { title: 'CORE DEVELOPMENT', items: ['React', 'Next.js', 'TypeScript', 'NestJS'], pos: 'top-left' },
    { title: 'LANGUAGES & SYSTEMS', items: ['C / C++', 'Python', 'AWS', 'Docker'], pos: 'top-right' },
    { title: 'DATA & QUALITY', items: ['PostgreSQL', 'MongoDB', 'Cypress', 'Jest'], pos: 'bottom' }
  ];

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    show: { pathLength: 1, opacity: [0.2, 1, 0.4], transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" } }
  };

  return (
    <section id="skills" className="py-32 px-6 border-t border-border-subtle bg-dark-bg relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-24 text-center"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="font-mono text-sm text-[#f5b942] tracking-widest uppercase mb-6 flex items-center justify-center gap-4">
            Technical Arsenal
          </motion.div>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="text-5xl md:text-7xl font-display font-black text-white leading-[1.1] uppercase max-w-4xl mx-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            ARCHITECTURAL MASTERY. <br />
            <span className="text-gradient-gold">PRECISION APPLIED.</span>
          </motion.h2>
        </motion.div>

        {/* Node Diagram Container */}
        <div className="relative w-full max-w-4xl mx-auto h-[600px] flex items-center justify-center">
          
          {/* Circuit SVG Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ filter: 'drop-shadow(0 0 8px rgba(245,185,66,0.5))' }}>
            {/* Top Left Line */}
            <motion.path 
              d="M 50% 50% L 25% 25%" 
              stroke="#f5b942" strokeWidth="2" fill="none"
              variants={lineVariants} initial="hidden" whileInView="show"
            />
            {/* Top Right Line */}
            <motion.path 
              d="M 50% 50% L 75% 25%" 
              stroke="#f5b942" strokeWidth="2" fill="none"
              variants={lineVariants} initial="hidden" whileInView="show"
            />
            {/* Bottom Line */}
            <motion.path 
              d="M 50% 50% L 50% 75%" 
              stroke="#3b82f6" strokeWidth="2" fill="none"
              variants={lineVariants} initial="hidden" whileInView="show"
            />
          </svg>

          {/* Central Hub */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5, duration: 1 }}
            className="absolute z-20 w-32 h-32 rounded-3xl bg-[#0a0a0f] border-2 border-[#f5b942] shadow-[0_0_40px_rgba(245,185,66,0.3)] flex flex-col items-center justify-center"
          >
            <span className="font-display font-black text-xl text-[#f5b942]">NODE</span>
            <span className="font-mono text-[10px] text-white/50 tracking-widest mt-1">CORE</span>
          </motion.div>

          {/* Satellite Nodes */}
          {categories.map((category, idx) => {
            const posClasses = {
              'top-left': 'top-[10%] left-[5%] md:left-[10%]',
              'top-right': 'top-[10%] right-[5%] md:right-[10%]',
              'bottom': 'bottom-[5%] left-1/2 -translate-x-1/2'
            }[category.pos];

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + idx * 0.2 }}
                className={`absolute z-10 p-6 rounded-2xl bg-[#0d1117] border border-border-subtle shadow-xl min-w-[200px] ${posClasses}`}
              >
                <div className="font-mono text-[10px] text-text-gray tracking-widest mb-4 border-b border-border-subtle pb-2 uppercase">
                  {category.title}
                </div>
                <div className="flex flex-col gap-2">
                  {category.items.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-blue shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                      <span className="text-sm font-bold tracking-wide text-white/90">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
