import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';
import { SpotlightImage } from '../components/SpotlightImage';

function LinkedinIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function GithubIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function Sparkle() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="absolute -top-8 -right-8 text-[#f5b942] opacity-80">
      <path d="M12 0L13.5 8.5L22 10L13.5 11.5L12 20L10.5 11.5L2 10L10.5 8.5L12 0Z" fill="currentColor" />
    </svg>
  );
}

export function Contact() {
  const links = [
    { name: 'Email', icon: <Mail size={24} />, href: 'mailto:bnyashavanth-prog@users.noreply.github.com' },
    { name: 'LinkedIn', icon: <LinkedinIcon size={24} />, href: '#' },
    { name: 'GitHub', icon: <GithubIcon size={24} />, href: 'https://github.com/bnyashavanth-prog' },
    { name: 'Resume', icon: <FileText size={24} />, href: '#' }
  ];

  return (
    <section id="contact" className="relative py-32 px-6 bg-dark-bg overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      
      {/* Return of the Spotlight */}
      <motion.div 
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-full bg-[radial-gradient(ellipse_at_center,_rgba(96,165,250,0.15)_0%,_transparent_70%)] pointer-events-none z-0 origin-bottom"
      />

      <div className="max-w-4xl mx-auto relative z-10 w-full text-center flex flex-col items-center">
        
        <div className="w-48 h-48 sm:w-64 sm:h-64 mb-12 relative overflow-hidden flex items-end">
           <SpotlightImage src="/hero-portrait.jpg" alt="Silhouette Outro" silhouette={true} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <Sparkle />
          <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-display font-black text-white uppercase tracking-tight leading-none mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Let's build <br className="md:hidden" />
            <span className="text-gradient-gold">what's next.</span>
          </h2>
          <p className="text-text-gray text-lg md:text-xl max-w-lg mx-auto mb-16">
            Open for opportunities, collaborations, and discussions on architecture, testing, and system design.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-6"
        >
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="group flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#f5b942]/30 text-white bg-[#0d1117] hover:border-[#f5b942] hover:text-[#0a0a0f] hover:bg-[#f5b942] hover:shadow-[0_0_30px_rgba(245,185,66,0.6)] hover:scale-110 transition-all duration-300"
              aria-label={link.name}
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {link.icon}
              </div>
            </a>
          ))}
        </motion.div>

      </div>

      <div className="absolute bottom-6 text-center w-full text-text-gray font-mono text-xs opacity-50 pointer-events-none tracking-widest uppercase">
        © {new Date().getFullYear()} YASHAVANTH BN. BUILT WITH REACT + VITE.
      </div>
    </section>
  );
}
