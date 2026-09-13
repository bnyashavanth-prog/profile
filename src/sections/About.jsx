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
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center relative z-10">
        
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

        {/* Right Column - Graphic */}
        <motion.div
          className="relative h-[450px] lg:h-[600px] w-full flex items-center justify-center mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {/* Constellation Background inside the image column */}
          <div className="absolute inset-0 z-0">
            <Constellation 
              labels={['ENGINEERING', 'QUALITY', 'ARCHITECTURE']} 
              className="opacity-70 scale-110"
            />
          </div>
          
          {/* Image Container with Vignette Blending */}
          <div className="relative w-full h-full max-w-[450px] mx-auto z-10 pointer-events-none flex items-center justify-center">
            {/* Soft glowing halo behind image */}
            <div className="absolute inset-0 bg-accent-orange/5 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative w-full h-full overflow-hidden flex items-center justify-center"
                 style={{ WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)', maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)' }}>
              
              <img 
                src="/edited_portrait.jpg" 
                alt="Yashavanth BN" 
                className="w-full h-full object-cover pointer-events-auto"
                style={{ 
                  objectPosition: '50% 10%',
                  filter: 'contrast(1.05)'
                }}
              />
              
              {/* Additional Vignette Overlays for deep integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg opacity-80 pointer-events-none mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-transparent to-dark-bg opacity-80 pointer-events-none mix-blend-multiply"></div>
            </div>
            
            {/* Subtle floating overlay elements to integrate the photo with the tech theme */}
            <motion.div 
              className="absolute right-4 bottom-1/4 w-1 h-12 bg-accent-orange/30 rounded-full"
              animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 3, repeat: Infinity }}
            ></motion.div>
            <motion.div 
              className="absolute left-8 top-1/4 w-2 h-2 rounded-full border border-accent-orange/50"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
