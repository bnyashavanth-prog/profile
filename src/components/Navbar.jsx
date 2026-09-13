import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [time, setTime] = useState(new Date());
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => {
    const nextState = !isDark;
    setIsDark(nextState);
    if (nextState) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  };

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
    setMobileMenuOpen(false);
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
        isScrolled ? 'bg-dark-bg/90 backdrop-blur-md border-b border-border-subtle py-3 sm:py-4' : 'bg-dark-bg/80 backdrop-blur-sm border-b border-border-subtle/40 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {!isScrolled ? (
          /* Terminal Style Hero Nav */
          <div className="flex flex-col md:flex-row items-center justify-between font-mono text-xs sm:text-sm text-text-gray gap-2 sm:gap-4">
            <div className="w-full md:w-auto flex items-center justify-between">
              <motion.div variants={navContainer} className="flex items-center text-accent-orange">
                <span className="mr-2 font-bold text-accent-orange">❯</span>
                <span className="text-white font-medium text-xs sm:text-sm">yashavnth@portfolio:~</span>
              </motion.div>

              {/* Mobile theme button for terminal nav on small screens */}
              <div className="flex items-center gap-2 md:hidden">
                <button 
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="text-text-gray hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
                >
                  {isDark ? <Moon size={16} /> : <Sun size={16} />}
                </button>
              </div>
            </div>
            
            <motion.nav variants={navContainer} className="flex items-center justify-center space-x-2 sm:space-x-4 overflow-x-auto max-w-full py-1">
              {['home', 'about', 'work', 'skills', 'contact'].map((item, idx) => (
                <React.Fragment key={item}>
                  <a 
                    href={`#${item}`} 
                    onClick={(e) => scrollTo(e, `#${item}`)} 
                    className={`hover:text-white transition-colors whitespace-nowrap relative group ${item === 'home' ? 'text-accent-orange font-medium' : 'text-text-gray'}`}
                  >
                    {item}
                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-accent-orange transition-all duration-300 ${item === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </a>
                  {idx < 4 && <span className="text-border-subtle text-[10px]">·</span>}
                </React.Fragment>
              ))}
            </motion.nav>
            
            <motion.div variants={navContainer} className="hidden md:flex items-center space-x-4 sm:space-x-6">
              <div className="flex items-center text-accent-orange">
                <motion.span 
                  className="mr-2 text-xs text-accent-orange"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >●</motion.span>
                <span className="text-text-gray tracking-wider text-xs">STATUS: <span className="text-white font-medium">ONLINE</span></span>
              </div>
              <div className="hidden sm:block text-accent-orange font-mono font-medium tracking-wider text-xs">
                {time.toLocaleTimeString('en-US', { hour12: true })}
              </div>
              <button 
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="text-text-gray hover:text-white transition-colors p-1.5 rounded-full hover:bg-white/10 overflow-hidden relative w-8 h-8 flex items-center justify-center"
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
            </motion.div>
          </div>
        ) : (
          /* Regular Sticky Nav */
          <div className="flex items-center justify-between font-mono text-sm">
            <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="font-bold text-white text-lg tracking-tighter uppercase font-sans">
              YVB<span className="text-accent-orange">.</span>
            </a>
            
            {/* Desktop Nav Items */}
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
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={toggleTheme}
                aria-label="Toggle theme"
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

              {/* Mobile Hamburger Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open mobile menu"
                className="md:hidden text-text-gray hover:text-white p-2"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        )}

        {/* Mobile Dropdown Menu Drawer */}
        <AnimatePresence>
          {isScrolled && mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pt-4 pb-2 border-t border-border-subtle mt-3 overflow-hidden font-mono"
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollTo(e, item.href)}
                    className="text-text-gray hover:text-accent-orange text-sm font-medium py-1 transition-colors"
                  >
                    // {item.name.toUpperCase()}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
