import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function Timeline() {
  const milestones = [
    {
      year: 'PRESENT',
      title: 'Chief Information Security Officer & Software Developer',
      org: 'MITM / Internal Tech Team',
      desc: 'Leading security architecture and developing core administrative software solutions used by thousands of students and faculty.'
    },
    {
      year: '2023 - 2024',
      title: 'Full Stack Trainee & Developer',
      org: 'Various Projects',
      desc: 'Architected and deployed full-stack web applications including SaaS portals, college ERP systems, and logistics platforms using React and Node.js.'
    },
    {
      year: '2022 - PRESENT',
      title: 'Bachelor of Engineering in CS&E',
      org: 'Maharaja Institute of Technology, Mysore',
      desc: 'Focusing on core computer science fundamentals, maintaining an 8.1 CGPA while actively building real-world software products.'
    },
    {
      year: '2021',
      title: 'Higher Secondary Education',
      org: 'Pre-University College',
      desc: 'Built the foundational knowledge in mathematics and physics that drove my passion for complex problem-solving and software engineering.'
    }
  ];

  return (
    <section id="timeline" className="py-32 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-wide">
            The Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-border-subtle -translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#f5b942] via-[#f5b942] to-[#3b82f6] shadow-[0_0_15px_rgba(245,185,66,0.8)]"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 2, ease: "linear" }}
            />
          </div>

          <div className="space-y-24 relative z-10">
            {milestones.map((item, idx) => (
              <div key={idx} className="flex flex-row items-center w-full relative">
                
                {/* Node */}
                <div className="absolute left-1/2 w-5 h-5 rounded-full bg-[#0a0a0f] border-[3px] border-[#f5b942] -translate-x-1/2 shadow-[0_0_20px_rgba(245,185,66,1)] z-20" />
                
                {/* Content */}
                <div className="w-1/2 flex items-center justify-start pr-12 lg:pr-20 text-right opacity-0 md:opacity-100" />
                <div className="w-1/2 flex items-center justify-start pl-12 lg:pl-20 text-left opacity-0 md:opacity-100" />
                
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className={`absolute w-[45%] ${idx % 2 === 0 ? 'left-0 text-right pr-8 lg:pr-16' : 'right-0 text-left pl-8 lg:pl-16'}`}
                >
                  <div className="font-mono text-[#f5b942] text-sm md:text-base font-bold tracking-widest mb-3">{item.year}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-display tracking-wide uppercase">{item.title}</h3>
                  <div className="text-accent-blue text-sm md:text-base font-bold tracking-wide mb-4">{item.org}</div>
                  <p className="text-text-gray leading-relaxed text-sm md:text-base">
                    {item.desc}
                  </p>
                </motion.div>

              </div>
            ))}
          </div>

          {/* Downward Bouncing Arrow */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute left-1/2 -translate-x-1/2 -bottom-16 flex items-center justify-center text-[#3b82f6]"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="p-3 rounded-full bg-[#0d1117] border border-[#3b82f6]/30 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
