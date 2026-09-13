import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../components/Button';
import { Constellation } from '../components/Constellation';

const CountUp = ({ to, duration = 2, delay = 0 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let animationFrame = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * to));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    const timer = setTimeout(() => {
      animationFrame = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [to, duration, delay]);

  return <span>{count}</span>;
};

export function Hero() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 200]);
  
  const stagger = {
    hidden: { opacity: 0, y: 30 },
    show: (custom) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.7, delay: custom * 0.15, ease: "easeOut" }
    })
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-12 overflow-hidden bg-dark-bg">
      {/* Constellation background layer */}
      <div className="absolute inset-0 z-0">
        <Constellation labels={['PRODUCT', 'STRATEGY', 'SYSTEMS', 'TECHNOLOGY']} />
      </div>

      <motion.div style={{ y: yParallax }} className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 min-h-[600px]">
        
        {/* Left Content */}
        <div className="lg:col-span-6 xl:col-span-6 z-20 py-8">
          <motion.div custom={4} variants={stagger} initial="hidden" animate="show" className="font-mono text-sm text-text-gray mb-6">
            // BUILDING DIGITAL SOLUTIONS
          </motion.div>
          
          <h1 className="text-6xl sm:text-7xl md:text-[80px] font-bold leading-none tracking-tight mb-6">
            <motion.span custom={5} variants={stagger} initial="hidden" animate="show" className="block text-white">Yashavanth</motion.span>
            <motion.span custom={6} variants={stagger} initial="hidden" animate="show" className="block text-accent-orange">
              <motion.span animate={{ color: ["#fff", "#F5A623"] }} transition={{ duration: 0.5, delay: 0.9 }}>BN</motion.span>
            </motion.span>
          </h1>
          
          <motion.div custom={7} variants={stagger} initial="hidden" animate="show" className="flex items-center text-sm font-mono tracking-widest text-text-gray mb-8 space-x-3 flex-wrap gap-y-2">
            <motion.span 
              className="text-accent-orange text-lg leading-none"
              initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 1] }} transition={{ delay: 1.1, duration: 0.5 }}
            >●</motion.span>
            <span>COO</span><span>•</span><span>SOFTWARE DEVELOPER</span><span>•</span><span>PRODUCT BUILDER</span>
          </motion.div>
          
          <motion.p custom={8} variants={stagger} initial="hidden" animate="show" className="text-lg md:text-xl text-text-gray max-w-xl mb-10 leading-relaxed">
            I build scalable web applications, solve real-world problems and turn 
            ideas into products that make an impact.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <motion.div custom={9} variants={stagger} initial="hidden" animate="show"><Button href="#work" icon>View My Work</Button></motion.div>
            <motion.div custom={10} variants={stagger} initial="hidden" animate="show"><Button href="#contact" variant="secondary">Get In Touch</Button></motion.div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-0 font-mono text-sm">
            <motion.div custom={11} variants={stagger} initial="hidden" animate="show" whileHover={{ scale: 1.05 }} className="pr-6 sm:border-r border-border-subtle cursor-default">
              <span className="block text-white font-bold text-lg"><CountUp to={5} delay={1.7} />+</span>
              <span className="text-text-gray">Projects Built</span>
            </motion.div>
            <motion.div custom={12} variants={stagger} initial="hidden" animate="show" whileHover={{ scale: 1.05 }} className="sm:px-6 sm:border-r border-border-subtle cursor-default">
              <span className="block text-white font-bold text-lg"><CountUp to={3} delay={1.8} />+ Years</span>
              <span className="text-text-gray">Experience</span>
            </motion.div>
            <motion.div custom={13} variants={stagger} initial="hidden" animate="show" whileHover={{ scale: 1.05 }} className="sm:pl-6 cursor-default">
              <span className="block text-white font-bold text-lg">∞</span>
              <span className="text-text-gray">Learning Always</span>
            </motion.div>
          </div>
        </div>

        {/* Right Content - Full Bleed Portrait Image */}
        <div className="lg:col-span-6 xl:col-span-6 relative h-full min-h-[500px] lg:min-h-[650px] flex items-end justify-center lg:justify-end pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            className="relative w-full h-full max-w-[550px] lg:max-w-none flex items-end justify-end overflow-hidden"
          >
            <img 
              src="/portrait.jpg" 
              alt="Yashavanth BN" 
              className="w-full h-auto max-h-[650px] object-cover object-top filter brightness-95 contrast-105 pointer-events-auto"
            />
            {/* Soft edge gradient fades - Left and Bottom */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-transparent to-transparent w-1/2 z-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent h-1/3 top-auto bottom-0 z-10 pointer-events-none"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Rotated Vertical Text on far right */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:block z-20 h-64 overflow-hidden pointer-events-none">
        <motion.div 
          className="font-mono text-xs tracking-[0.3em] text-text-gray/40 flex flex-col items-center gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: ["0%", "-50%"] }}
          transition={{ opacity: { delay: 1.5, duration: 1 }, y: { repeat: Infinity, duration: 20, ease: "linear" } }}
          style={{ writingMode: 'vertical-rl' }}
        >
          <span>/ YASHAVANTH BN — PORTFOLIO /</span>
          <span>/ YASHAVANTH BN — PORTFOLIO /</span>
        </motion.div>
      </div>
    </section>
  );
}
