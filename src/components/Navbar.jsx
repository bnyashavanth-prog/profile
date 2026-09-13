import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [time, setTime] = useState(new Date());
  const [isDark, setIsDark] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'YVB&Co', href: '#yvbco' },
    { name: 'Work', href: '#work' },
    { name: 'Skills', href: '#skills' },
    { name: 'Creative', href: '#creative' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navContainer = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
  };

  return (
    <motion.header
      variants={navContainer}
      initial="hidden"
      animate="show"
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-dark-bg/90 backdrop-blur-md border-b border-border-subtle py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {!isScrolled ? (
          /* Terminal Style Hero Nav */
          <div className="flex flex-col md:flex-row items-center justify-between font-mono text-xs sm:text-sm text-text-gray">
            <motion.div variants={navContainer} className="flex items-center text-accent-orange mb-4 md:mb-0">
              <span className="mr-2">❯</span>
              <span>yashavanth@portfolio:~</span>
            </motion.div>
            
            <motion.nav variants={navContainer} className="flex items-center space-x-2 sm:space-x-4 mb-4 md:mb-0">
              {['home', 'about', 'work', 'skills', 'contact'].map((item, idx) => (
                <React.Fragment key={item}>
                  <a href={`#${item}`} onClick={(e) => scrollTo(e, `#${item}`)} className="hover:text-white transition-colors relative group">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-orange transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  {idx < 4 && <span>·</span>}
                </React.Fragment>
              ))}
            </motion.nav>
            
            <motion.div variants={navContainer} className="flex items-center space-x-4">
              <div className="flex items-center text-green-500">
                <motion.span 
                  className="mr-2 text-[10px]"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >●</motion.span>
                <span>STATUS: ONLINE</span>
              </div>
              <div className="hidden sm:block text-accent-orange">{time.toLocaleTimeString('en-US', { hour12: true })}</div>
            </motion.div>
          </div>
        ) : (
          /* Regular Sticky Nav */
          <div className="flex items-center justify-between font-mono text-sm">
            <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="font-bold text-white text-lg tracking-tighter uppercase font-sans">
              YVB<span className="text-accent-orange">.</span>
            </a>
            
            <nav className="hidden md:flex items-center text-text-gray">
              {navItems.map((item, idx) => (
                <React.Fragment key={item.name}>
                  <a href={item.href} onClick={(e) => scrollTo(e, item.href)} className="hover:text-white transition-colors relative group px-2">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent-orange transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  {idx < navItems.length - 1 && <span className="mx-2 opacity-50">·</span>}
                </React.Fragment>
              ))}
            </nav>
            
            <button 
              onClick={() => setIsDark(!isDark)}
              className="text-text-gray hover:text-white transition-colors p-2 rounded-full hover:bg-white/5 overflow-hidden relative w-8 h-8 flex items-center justify-center"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isDark ? "moon" : "sun"}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  {isDark ? <Moon size={18} /> : <Sun size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        )}
      </div>
    </motion.header>
  );
}
