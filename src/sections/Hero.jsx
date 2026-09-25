import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlightImage } from '../components/SpotlightImage';
import { Button } from '../components/Button';

const taglines = [
  "I BUILD DIGITAL EXPERIENCES",
  "I DON'T JUST WRITE CODE",
  "I BUILD WHAT'S NEXT"
];

const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  initX: Math.random() * 1200,
  initY: Math.random() * 800,
  initOpacity: Math.random() * 0.5 + 0.1,
  animY: Math.random() * -200 - 100,
  animX: (Math.random() - 0.5) * 100,
  animOpacity: Math.random() * 0.8,
  duration: Math.random() * 10 + 10,
}));

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-dark-bg selection:bg-accent-orange">
      
      {/* Spotlight Beam Cone */}
      <motion.div 
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 right-0 md:right-[10%] w-[150%] md:w-[600px] h-full spotlight-cone origin-top pointer-events-none z-0"
      />

      {/* Floating Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 blur-[1px]"
            initial={{ x: p.initX, y: p.initY, opacity: p.initOpacity }}
            animate={{ y: [null, p.animY], x: [null, p.animX], opacity: [null, p.animOpacity, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-20 h-full flex-grow items-start pt-10">
        
        {/* Left Content - Top Left Alignment */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-start text-left mt-8 lg:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-mono text-accent-blue text-xs md:text-sm tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-accent-blue"></span>
              Yashavanth BN
            </h2>
          </motion.div>
          
          <div className="h-40 sm:h-48 md:h-56 w-full flex items-start justify-start">
            <AnimatePresence mode="wait">
              <motion.h1
                key={taglineIndex}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-black leading-[1.05] text-[#f5b942] uppercase text-left max-w-2xl drop-shadow-[0_0_15px_rgba(245,185,66,0.3)]"
              >
                {/* Ensure it splits onto 2 lines naturally */}
                {taglines[taglineIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-text-gray max-w-md space-y-4"
          >
            <p className="text-lg leading-relaxed">
              CISO & Software Developer specializing in resilient architecture, full-stack systems, and rigorous quality assurance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-5 mt-12 w-full sm:w-auto"
          >
            <Button href="#work" variant="primary">Explore My Work</Button>
            <Button href="#contact" variant="secondary">Download Resume</Button>
          </motion.div>
        </div>

        {/* Right Content - Spotlight Image */}
        <div className="order-1 lg:order-2 relative w-full h-[40vh] lg:h-[75vh] flex items-end lg:items-center justify-center lg:justify-end">
          <SpotlightImage src="/hero-portrait.jpg" alt="Yashavanth BN" className="translate-y-10 lg:translate-y-0 lg:scale-110" />
        </div>

      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-6 md:left-12 flex flex-col items-center justify-center opacity-50 z-20"
      >
        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-[#f5b942] to-transparent mb-4"
        />
        <span className="font-mono text-[10px] text-white tracking-[0.3em] uppercase rotate-180" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
      </motion.div>
    </section>
  );
}
