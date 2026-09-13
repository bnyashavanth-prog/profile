import React from 'react';
import { motion } from 'framer-motion';

export function Constellation({ labels = [], className = '' }) {
  // SVG points for the constellation network
  const nodes = [
    { x: 20, y: 30 },
    { x: 80, y: 15 },
    { x: 50, y: 50 },
    { x: 15, y: 75 },
    { x: 85, y: 80 },
    { x: 40, y: 90 }
  ];

  const connections = [
    [0, 2], [1, 2], [2, 3], [2, 4], [3, 5], [4, 5]
  ];

  return (
    <div className={`relative w-full h-full min-h-[400px] overflow-hidden ${className}`}>
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
        
        {/* Draw lines */}
        {connections.map(([i, j], idx) => {
          const p1 = nodes[i];
          const p2 = nodes[j];
          return (
            <motion.line
              key={`line-${idx}`}
              x1={`${p1.x}%`}
              y1={`${p1.y}%`}
              x2={`${p2.x}%`}
              y2={`${p2.y}%`}
              stroke="var(--color-accent-orange)"
              strokeWidth="0.5"
              strokeOpacity="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: idx * 0.2 }}
            />
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
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: [0.5, 1, 0.5] }}
            transition={{ 
              scale: { duration: 0.5, delay: idx * 0.1 },
              opacity: { duration: 2, repeat: Infinity, repeatType: 'reverse', delay: idx * 0.2 }
            }}
          />
        ))}
      </svg>
      
      {/* Floating Labels */}
      {labels.map((label, idx) => {
        // Position labels near specific nodes
        const node = nodes[idx % nodes.length];
        return (
          <motion.div
            key={idx}
            className="absolute font-mono text-[10px] sm:text-xs text-text-gray tracking-widest whitespace-nowrap"
            style={{ 
              left: `${node.x}%`, 
              top: `${node.y}%`,
              transform: 'translate(-50%, -200%)'
            }}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 + idx * 0.2 }}
          >
            [ {label} ]
          </motion.div>
        );
      })}
    </div>
  );
}
