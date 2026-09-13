import React, { useEffect, useState } from 'react';
import { motion, useSpring, useReducedMotion } from 'framer-motion';

export function Constellation({ labels = [], className = '' }) {
  const prefersReducedMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  // Parallax spring
  const springX = useSpring(0, { stiffness: 50, damping: 20 });
  const springY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // max +/- 10px
      const y = (e.clientY / innerHeight - 0.5) * 20;
      springX.set(x);
      springY.set(y);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [springX, springY, prefersReducedMotion]);

  const nodes = [
    { x: 20, y: 30 }, { x: 80, y: 15 }, { x: 50, y: 50 }, 
    { x: 15, y: 75 }, { x: 85, y: 80 }, { x: 40, y: 90 }
  ];
  const connections = [[0, 2], [1, 2], [2, 3], [2, 4], [3, 5], [4, 5]];
  
  // Random embers
  const embers = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 10 + Math.random() * 20,
    delay: Math.random() * 5,
    size: Math.random() * 2 + 1
  }));

  return (
    <motion.div 
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ x: springX, y: springY }}
    >
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Draw lines with shimmer */}
        {connections.map(([i, j], idx) => {
          const p1 = nodes[i];
          const p2 = nodes[j];
          return (
            <g key={`line-group-${idx}`}>
              <line x1={`${p1.x}%`} y1={`${p1.y}%`} x2={`${p2.x}%`} y2={`${p2.y}%`} stroke="rgba(245, 166, 35, 0.1)" strokeWidth="0.5" />
              <motion.line
                x1={`${p1.x}%`} y1={`${p1.y}%`} x2={`${p2.x}%`} y2={`${p2.y}%`}
                stroke="var(--color-accent-orange)"
                strokeWidth="1"
                strokeOpacity="0.5"
                strokeDasharray="100%"
                initial={{ strokeDashoffset: "100%" }}
                animate={{ strokeDashoffset: ["100%", "-100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: idx * 0.8 }}
              />
            </g>
          );
        })}
        
        {/* Draw nodes */}
        {nodes.map((node, idx) => (
          <motion.circle
            key={`node-${idx}`}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="2"
            fill="var(--color-accent-orange)"
            filter="url(#glow)"
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2 + (idx % 3), repeat: Infinity, ease: "easeInOut", delay: idx * 0.2 }}
          />
        ))}
      </svg>
      
      {/* Floating Embers */}
      {embers.map(ember => (
        <motion.div
          key={ember.id}
          className="absolute rounded-full bg-accent-orange"
          style={{ width: ember.size, height: ember.size, left: `${ember.x}%`, top: `${ember.y}%` }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -100, opacity: [0, 0.8, 0] }}
          transition={{ duration: ember.duration, repeat: Infinity, ease: "linear", delay: ember.delay }}
        />
      ))}
      
      {/* Floating Labels */}
      {labels.map((label, idx) => {
        // Safe peripheral coordinates to avoid overlapping the central portrait
        const safePositions = [
          { x: 10, y: 15 }, { x: 85, y: 15 },
          { x: 10, y: 85 }, { x: 85, y: 85 },
          { x: 50, y: 10 }, { x: 50, y: 90 }
        ];
        const pos = safePositions[idx % safePositions.length];
        return (
          <motion.div
            key={idx}
            className="absolute font-mono text-[10px] sm:text-xs text-text-gray tracking-widest whitespace-nowrap"
            style={{ left: `${pos.x}%`, top: `${pos.y}%`, x: "-50%", y: "-50%" }}
            initial={{ y: "-50%" }}
            animate={{ y: ["-50%", "-80%", "-50%"] }}
            transition={{ duration: 4 + (idx % 2), repeat: Infinity, ease: "easeInOut", delay: idx * 0.5 }}
          >
            [ {label} ]
          </motion.div>
        );
      })}
    </motion.div>
  );
}
