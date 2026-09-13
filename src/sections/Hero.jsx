import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { Button } from '../components/Button';
import { Constellation } from '../components/Constellation';

const CountUp = ({ to, duration = 0.8, delay = 0 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime;
    let animationFrame;
    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime - delay * 1000) / (duration * 1000), 1);
      if (progress > 0) setCount(Math.floor(progress * to));
      if (progress < 1) animationFrame = requestAnimationFrame(animate);
      else setCount(to);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [to, duration, delay]);
  return <span>{count}</span>;
};

const TiltCard = ({ children }) => {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e) => {
    if (prefersReducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  const rotateX = useTransform(y, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-4deg", "4deg"]);

  return (
    <motion.div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full h-full perspective-1000 group cursor-default"
      initial={{ opacity: 0, scale: 0.95, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
    >
      {children}
    </motion.div>
  );
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
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Constellation labels={['PRODUCT', 'STRATEGY', 'SYSTEMS', 'TECHNOLOGY']} />
      </div>

      <motion.div style={{ y: yParallax }} className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Content */}
        <div>
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

        {/* Right Content - Portrait */}
        <div className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center [perspective:1000px]">
          <TiltCard>
            <div className="w-[300px] h-[400px] lg:w-[400px] lg:h-[550px] bg-dark-card border border-border-subtle rounded-2xl overflow-hidden relative shadow-2xl flex items-center justify-center group pointer-events-auto transition-all duration-300 group-hover:border-accent-orange/50 group-hover:shadow-[0_20px_50px_rgba(245,166,35,0.1)] mx-auto mt-12 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-60 z-10 pointer-events-none"></div>
              
              {/* Nested UI Preview element */}
              <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center opacity-50 font-mono text-[8px] text-text-gray pointer-events-none">
                <div>...ork · skills · contact</div>
                <div className="flex items-center gap-1">
                  <motion.div animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  STATUS: ONLINE
                </div>
              </div>

              <img 
                src="/portrait.jpg" 
                alt="Yashavanth BN Portrait" 
                className="w-full h-full object-cover"
                style={{ objectPosition: '75% center' }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none z-20"></div>
            </div>
          </TiltCard>
        </div>
      </motion.div>

      {/* Vertical Rotated Text */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block z-10 h-64 overflow-hidden">
        <motion.div 
          className="font-mono text-xs tracking-[0.3em] text-text-gray/50 flex flex-col items-center gap-8"
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
