import React from 'react';
import { motion } from 'framer-motion';

export function SpotlightImage({ src, alt, className = '', silhouette = false }) {
  return (
    <div className={`relative flex items-center justify-center w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto ${className}`}>
      
      {/* 4. The Spotlight "Hit" Glow (Behind the Image) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none rounded-full"
        style={{
          boxShadow: '0 0 120px 40px rgba(96, 165, 250, 0.25)', // Stronger cool blue glow
          top: '20%',
          bottom: '10%',
          left: '10%',
          right: '10%'
        }}
      />
      
      <div className="relative z-10 w-full aspect-[3/4] flex items-center justify-center">
        
        {/* The Masked Container (Vignette Fade) - Tightened for zero rectangular edge */}
        <div 
          className="relative w-full h-full overflow-hidden"
          style={{
            WebkitMaskImage: 'radial-gradient(circle at 50% 30%, black 20%, transparent 60%)',
            maskImage: 'radial-gradient(circle at 50% 30%, black 20%, transparent 60%)',
          }}
        >
          {/* The Darkening & Contrast Filter + Blend Mode */}
          <motion.img 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            src={src} 
            alt={alt}
            className="w-full h-full object-cover object-[center_top] pointer-events-none"
            style={{ 
              filter: silhouette 
                ? 'brightness(0) contrast(200)' 
                : 'brightness(0.7) contrast(1.4) saturate(0.8)',
              mixBlendMode: silhouette ? 'normal' : 'luminosity'
            }}
          />

          {/* Foreground Edge Shadow - Very heavy to blend bottom completely */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: 'inset 0px -150px 100px -30px #0a0a0f', 
            }}
          />
        </div>

      </div>
    </div>
  );
}
