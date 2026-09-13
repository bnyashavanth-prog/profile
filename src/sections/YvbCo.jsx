import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function YvbCo() {
  const stats = [
    { value: '02', label: 'CORE SYSTEMS DEPLOYED' },
    { value: '06+', label: 'ENGINEERS & DESIGNERS' },
    { value: '100%', label: 'INDEPENDENT & SELF-FUNDED' },
    { value: 'IN', label: 'BASED IN INDIA' },
  ];

  return (
    <section id="yvbco" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="bg-dark-card border border-border-subtle rounded-3xl p-8 md:p-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-orange/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            {/* Left Column */}
            <div>
              <div className="inline-block px-3 py-1 border border-accent-orange/30 text-accent-orange font-mono text-xs rounded-full mb-8 bg-accent-orange/5">
                PARTNER STUDIO
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white">
                YVB&CO
              </h2>
              
              <h3 className="text-xl md:text-2xl font-mono text-text-gray mb-8">
                ENGINEER YOUR VISION.
              </h3>
              
              <p className="text-lg text-text-gray mb-10 leading-relaxed max-w-lg">
                YVB&Co is an independent technology studio based in India, operating globally. 
                We're a team of six engineers and designers building websites, apps, ERP systems, 
                and tools around the way businesses actually work — not the other way around. 
                I serve as COO, leading the company operations.
              </p>
              
              <a 
                href="#" 
                className="inline-flex items-center justify-center rounded-full bg-white text-dark-bg px-8 py-3 text-sm font-bold hover:bg-gray-200 transition-colors group"
              >
                VISIT YVB&CO
                <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Right Column - Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-fit lg:mt-auto">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="border border-border-subtle rounded-2xl p-6 bg-dark-bg/50 backdrop-blur-sm hover:border-accent-orange/50 transition-colors"
                >
                  <div className="text-4xl font-bold text-white mb-2 font-mono">
                    {stat.value} <span className="text-accent-orange">—</span>
                  </div>
                  <div className="text-xs font-mono text-text-gray tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
