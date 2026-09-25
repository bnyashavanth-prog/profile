import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function CountUp({ end, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const endVal = parseFloat(end);
  const isDecimal = end.includes('.');

  useEffect(() => {
    if (inView) {
      let current = 0;
      const steps = isDecimal ? Math.round(endVal * 10) : endVal;
      const incrementTime = (duration * 1000) / (steps || 1);
      
      if (steps === 0) return;

      const timer = setInterval(() => {
        current += 1;
        setCount(current);
        if (current >= steps) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [inView, endVal, duration, isDecimal]);

  const displayValue = isDecimal ? (count / 10).toFixed(1) : count;

  return (
    <span ref={ref} className="text-6xl md:text-8xl font-display font-black text-gradient-gold drop-shadow-[0_0_20px_rgba(245,185,66,0.3)]">
      {displayValue}{suffix}
    </span>
  );
}

export function Stats() {
  const stats = [
    { label: "Projects Built", value: "5", suffix: "+" },
    { label: "CGPA", value: "8.1", suffix: "" },
    { label: "Years Exp", value: "3", suffix: "+" },
    { label: "Tech Skills", value: "12", suffix: "+" }
  ];

  // Particle positions
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: Math.random() * 0.5 + 0.5,
    delay: Math.random() * 5
  }));

  return (
    <section className="py-32 border-y border-border-subtle relative overflow-hidden bg-gradient-to-b from-[#1a1100] to-[#0a0a0f] z-20 min-h-[70vh] flex items-center">
      
      {/* Floating Gold Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(p => (
          <motion.div 
            key={p.id}
            className="absolute w-2 h-2 bg-[#f5b942] rounded-full blur-[2px]"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            animate={{ 
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2]
            }}
            transition={{
              duration: 4 + p.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row items-center justify-center h-full">
        
        {/* 3D Depth Card Stack */}
        <div className="relative w-full max-w-lg h-[400px] flex items-center justify-center perspective-[1000px]">
          
          {/* Back Card (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -100, rotateY: 30, z: -200 }}
            whileInView={{ opacity: 0.4, x: -80, rotateY: 15, z: -100 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute p-8 rounded-2xl border border-[#f5b942]/20 bg-dark-card shadow-2xl flex flex-col items-center justify-center blur-[6px] scale-75"
          >
            <span className="text-6xl font-display font-black text-white/30">{stats[1].value}</span>
            <span className="text-text-gray font-mono text-xs uppercase mt-4">{stats[1].label}</span>
          </motion.div>

          {/* Back Card (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 100, rotateY: -30, z: -200 }}
            whileInView={{ opacity: 0.4, x: 80, rotateY: -15, z: -100 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute p-8 rounded-2xl border border-[#f5b942]/20 bg-dark-card shadow-2xl flex flex-col items-center justify-center blur-[4px] scale-80"
          >
            <span className="text-6xl font-display font-black text-white/30">{stats[3].value}{stats[3].suffix}</span>
            <span className="text-text-gray font-mono text-xs uppercase mt-4">{stats[3].label}</span>
          </motion.div>

          {/* Front Center Card (In Focus) */}
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9, rotateY: 0 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="absolute z-30 p-12 w-full max-w-sm rounded-3xl border-2 border-[#f5b942] bg-[#0a0a0f]/90 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_50px_rgba(245,185,66,0.15)]"
          >
            <CountUp end={stats[0].value} suffix={stats[0].suffix} />
            <span className="text-text-gray font-mono text-sm tracking-[0.2em] uppercase mt-6 text-center text-[#f5b942]">
              {stats[0].label}
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
