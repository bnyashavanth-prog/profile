import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { Constellation } from '../components/Constellation';

export function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border-subtle bg-dark-bg">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-sm text-accent-orange mb-6">
            // ABOUT ME
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 leading-tight">
            I'm a Computer Science & Engineering student pursuing my Bachelor of Engineering 
            at Maharaja Institute of Technology, Mysore, currently maintaining an 8.1 CGPA.
          </h2>
          
          <div className="space-y-6 text-text-gray mb-12 text-base sm:text-lg">
            <p>
              As a Software Developer with a growing interest in Software Testing, I am passionate 
              about ensuring quality at every stage of development. My experience includes functional 
              testing, precise bug identification, and rigorous API testing to ensure robust performance.
            </p>
            <p>
              I have practical experience building complex ERP systems and student-focused platforms 
              that solve real institutional problems. I thrive on diving deep into the full software 
              lifecycle — from conceptualization and architectural design to deployment and maintenance.
            </p>
            <p>
              My goal is to bridge the gap between business requirements and technical implementation, 
              building products that are not just functionally complete, but intuitively designed and 
              highly reliable.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button href="#work" icon>View My Work</Button>
            <Button href="#contact" variant="secondary">Get In Touch</Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 font-mono text-sm pt-8 border-t border-border-subtle">
            <div className="pr-6 sm:border-r border-border-subtle">
              <span className="block text-white font-bold text-lg">5+</span>
              <span className="text-text-gray">Projects Built</span>
            </div>
            <div className="sm:px-6 sm:border-r border-border-subtle">
              <span className="block text-white font-bold text-lg">3+ Years</span>
              <span className="text-text-gray">Experience</span>
            </div>
            <div className="sm:pl-6">
              <span className="block text-white font-bold text-lg">∞</span>
              <span className="text-text-gray">Learning Always</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Graphic */}
        <motion.div
          className="relative h-[500px] w-full hidden lg:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0">
            <Constellation labels={['ENGINEERING', 'QUALITY', 'ARCHITECTURE']} />
          </div>
          
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <div className="w-[350px] h-[450px] bg-dark-card border border-border-subtle rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-orange/10 to-transparent"></div>
              <div className="text-text-gray/20 font-mono text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
                [ PORTRAIT ALT ]<br/>
                <span className="text-xs mt-2 block">Alternative angle or secondary photo</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
