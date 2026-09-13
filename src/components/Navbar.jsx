import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Moon } from 'lucide-react';

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [time, setTime] = useState(new Date());

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-US', { hour12: true });

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

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-dark-bg/90 backdrop-blur-md border-b border-border-subtle py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {!isScrolled ? (
          /* Terminal Style Hero Nav */
          <div className="flex flex-col md:flex-row items-center justify-between font-mono text-xs sm:text-sm text-text-gray">
            <div className="flex items-center text-accent-orange mb-4 md:mb-0">
              <span className="mr-2">❯</span>
              <span>yashavanth@portfolio:~</span>
            </div>
            
            <nav className="flex items-center space-x-2 sm:space-x-4 mb-4 md:mb-0">
              <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="hover:text-white transition-colors">home</a>
              <span>·</span>
              <a href="#about" onClick={(e) => scrollTo(e, '#about')} className="hover:text-white transition-colors">about</a>
              <span>·</span>
              <a href="#work" onClick={(e) => scrollTo(e, '#work')} className="hover:text-white transition-colors">work</a>
              <span>·</span>
              <a href="#skills" onClick={(e) => scrollTo(e, '#skills')} className="hover:text-white transition-colors">skills</a>
              <span>·</span>
              <a href="#contact" onClick={(e) => scrollTo(e, '#contact')} className="hover:text-white transition-colors">contact</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-green-500">
                <span className="mr-2 text-[10px]">●</span>
                <span>STATUS: ONLINE</span>
              </div>
              <div className="hidden sm:block text-accent-orange">{timeString}</div>
            </div>
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
                  <a 
                    href={item.href} 
                    onClick={(e) => scrollTo(e, item.href)}
                    className="hover:text-white transition-colors relative group px-2"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-orange transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  {idx < navItems.length - 1 && <span className="mx-2 opacity-50">·</span>}
                </React.Fragment>
              ))}
            </nav>
            
            <button className="text-text-gray hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
              <Moon size={18} />
            </button>
          </div>
        )}
      </div>
    </motion.header>
  );
}
