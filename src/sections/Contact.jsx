import React from 'react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border-subtle bg-dark-bg relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
            LET'S BUILD <br className="sm:hidden" />
            <span className="text-accent-orange">SOMETHING USEFUL.</span>
          </h2>
          <p className="text-xl text-text-gray mb-16">
            Have an idea, product or technology problem? Let's talk.
          </p>
        </motion.div>

        {/* Small constellation graphic pointing to form */}
        <div className="flex justify-center mb-8 opacity-50">
          <svg width="24" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="12" y1="0" x2="12" y2="60" stroke="var(--color-accent-orange)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="12" cy="12" r="3" fill="var(--color-accent-orange)" />
            <circle cx="12" cy="48" r="3" fill="var(--color-accent-orange)" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="bg-dark-card border border-border-subtle rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto text-left shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-mono text-text-gray tracking-wider">
                    NAME
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    placeholder="John Doe"
                    className="w-full bg-dark-bg border border-border-subtle rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono text-text-gray tracking-wider">
                    EMAIL
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="john@example.com"
                    className="w-full bg-dark-bg border border-border-subtle rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono text-text-gray tracking-wider">
                  MESSAGE
                </label>
                <textarea 
                  id="message"
                  rows="4"
                  placeholder="How can I help you?"
                  className="w-full bg-dark-bg border border-border-subtle rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all resize-none"
                ></textarea>
              </div>
              
              <div className="pt-4">
                <button 
                  type="button" 
                  className="w-full inline-flex items-center justify-center rounded-full bg-accent-orange text-dark-bg px-8 py-4 font-bold hover:bg-accent-hover hover:scale-[1.02] transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
      
      {/* Footer minimal */}
      <div className="mt-32 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-border-subtle pt-8 text-xs font-mono text-text-gray">
        <div>&copy; {new Date().getFullYear()} Yashavanth BN. All rights reserved.</div>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <a href="#" className="hover:text-accent-orange transition-colors">GITHUB</a>
          <a href="#" className="hover:text-accent-orange transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-accent-orange transition-colors">TWITTER</a>
        </div>
      </div>
    </section>
  );
}
