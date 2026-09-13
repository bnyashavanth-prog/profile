import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { Constellation } from '../components/Constellation';

export function About() {
  const stagger = {
    hidden: { opacity: 0, y: 30 },
    show: (custom) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.6, delay: custom * 0.1, ease: "easeOut" }
    })
  };

  return (
    <section id="about" className="py-24 px-6 border-t border-border-subtle bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Column - Text */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div custom={1} variants={stagger} className="font-mono text-sm text-accent-orange mb-6">
            // ABOUT ME
          </motion.div>
          
          <motion.h2 custom={2} variants={stagger} className="text-2xl sm:text-3xl font-bold mb-8 leading-tight">
            I'm a Computer Science & Engineering student pursuing my Bachelor of Engineering 
            at Maharaja Institute of Technology, Mysore, currently maintaining an 8.1 CGPA.
          </motion.h2>
          
          <div className="space-y-6 text-text-gray mb-12 text-base sm:text-lg">
            <motion.p custom={3} variants={stagger}>
              As a Software Developer with a growing interest in Software Testing, I am passionate 
              about ensuring quality at every stage of development. My experience includes functional 
              testing, precise bug identification, and rigorous API testing to ensure robust performance.
            </motion.p>
            <motion.p custom={4} variants={stagger}>
              I have practical experience building complex ERP systems and student-focused platforms 
              that solve real institutional problems. I thrive on diving deep into the full software 
              lifecycle — from conceptualization and architectural design to deployment and maintenance.
            </motion.p>
            <motion.p custom={5} variants={stagger}>
              My goal is to bridge the gap between business requirements and technical implementation, 
              building products that are not just functionally complete, but intuitively designed and 
              highly reliable.
            </motion.p>
          </div>
          
          <motion.div custom={6} variants={stagger} className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button href="#work" icon>View My Work</Button>
            <Button href="#contact" variant="secondary">Get In Touch</Button>
          </motion.div>
          
          <motion.div custom={7} variants={stagger} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 font-mono text-sm pt-8 border-t border-border-subtle">
            <div className="pr-6 sm:border-r border-border-subtle cursor-default hover:text-accent-orange transition-colors">
              <span className="block text-white font-bold text-lg">5+</span>
              <span className="text-text-gray">Projects Built</span>
            </div>
            <div className="sm:px-6 sm:border-r border-border-subtle cursor-default hover:text-accent-orange transition-colors">
              <span className="block text-white font-bold text-lg">3+ Years</span>
              <span className="text-text-gray">Experience</span>
            </div>
            <div className="sm:pl-6 cursor-default hover:text-accent-orange transition-colors">
              <span className="block text-white font-bold text-lg">∞</span>
              <span className="text-text-gray">Learning Always</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Graphic & Photo */}
        <motion.div
          className="relative flex flex-col items-center justify-center mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {/* Constellation Background inside the image column */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Constellation 
              labels={['ENGINEERING', 'QUALITY', 'ARCHITECTURE']} 
              className="opacity-70 scale-110"
            />
          </div>
          
          {/* Image Container with Vignette Blending */}
          <div className="relative w-full max-w-[420px] aspect-[4/5] mx-auto z-10 flex flex-col items-center justify-center">
            {/* Soft glowing halo behind image */}
            <div className="absolute inset-0 bg-accent-orange/5 blur-[80px] rounded-full pointer-events-none"></div>

            <div 
              className="relative w-full h-full overflow-hidden flex items-center justify-center"
              style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, black 45%, transparent 75%)', maskImage: 'radial-gradient(ellipse at center, black 45%, transparent 75%)' }}
            >
              <img 
                src="/about-portrait.jpg" 
                alt="Yashavanth BN - Blue Blazer Portrait" 
                className="w-full h-full object-cover pointer-events-auto filter brightness-95 contrast-105"
                style={{ objectPosition: 'center top' }}
              />
              
              {/* Additional Vignette Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-90 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-transparent to-transparent opacity-50 pointer-events-none"></div>
            </div>
          </div>

          {/* Styled Personal Info Caption Card */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 z-20 border-l-2 border-accent-orange pl-4 py-1.5 font-mono bg-dark-card/60 backdrop-blur-sm rounded-r-lg max-w-[420px] w-full"
          >
            <div className="text-accent-orange font-bold text-sm tracking-wider uppercase">Yashavanth BN</div>
            <div className="text-white text-xs tracking-wide mt-0.5 font-mono">COO · SOFTWARE DEVELOPER</div>
            <div className="text-text-gray text-xs mt-1">Mysore, Karnataka, India</div>
            <div className="text-accent-orange/80 text-[11px] mt-1.5 font-mono italic">// Building with purpose</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
