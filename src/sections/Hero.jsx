import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { Constellation } from '../components/Constellation';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Content */}
        <motion.div 
          className="z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="font-mono text-sm text-text-gray mb-6">
            // BUILDING DIGITAL SOLUTIONS
          </div>
          
          <h1 className="text-6xl sm:text-7xl md:text-[80px] font-bold leading-none tracking-tight mb-6">
            <span className="block text-white">Yashavnth</span>
            <span className="block text-accent-orange">BN</span>
          </h1>
          
          <div className="flex items-center text-sm font-mono tracking-widest text-text-gray mb-8 space-x-3 flex-wrap gap-y-2">
            <span className="text-accent-orange text-lg leading-none">●</span>
            <span>COO</span>
            <span>•</span>
            <span>SOFTWARE DEVELOPER</span>
            <span>•</span>
            <span>PRODUCT BUILDER</span>
          </div>
          
          <p className="text-lg md:text-xl text-text-gray max-w-xl mb-10 leading-relaxed">
            I build scalable web applications, solve real-world problems and turn 
            ideas into products that make an impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button href="#work" icon>View My Work</Button>
            <Button href="#contact" variant="secondary">Get In Touch</Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 font-mono text-sm">
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

        {/* Right Content - Portrait & Constellation */}
        <motion.div 
          className="relative h-[500px] lg:h-[700px] w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="absolute inset-0 z-0">
            <Constellation labels={['PRODUCT', 'STRATEGY', 'SYSTEMS', 'TECHNOLOGY']} />
          </div>
          
          {/* Placeholder for portrait. Since we don't have the image file, use a stylized placeholder */}
          <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[400px] lg:w-[400px] lg:h-[550px] bg-dark-card border border-border-subtle rounded-2xl overflow-hidden relative shadow-2xl flex items-center justify-center group pointer-events-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-60 z-10"></div>
              {/* If an image is provided later, replace this div with an <img> */}
              <div className="text-text-gray/20 font-mono text-center px-4">
                [ PORTRAIT IMAGE PLACEHOLDER ]<br/>
                <span className="text-xs mt-2 block">Man in dark suit, white shirt</span>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Vertical Rotated Text */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="origin-center rotate-90 whitespace-nowrap font-mono text-xs tracking-[0.3em] text-text-gray/50">
          / YASHAVNTH BN — PORTFOLIO /
        </div>
      </div>
    </section>
  );
}
