import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);

    try {
      await fetch("https://formsubmit.co/ajax/bnyashavanth@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Inquiry from ${formData.name}`,
          _captcha: "false"
        })
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Failed to send message via AJAX:", err);
      // Fallback to mailto link
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:bnyashavanth@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
    } finally {
      setIsSending(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(false);
  };

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
          <div className="bg-dark-card border border-border-subtle rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto text-left shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6 relative z-10"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-mono text-text-gray tracking-wider">
                        NAME
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Yashavanth B N"
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
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="bnyashavanth@gmail.com"
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
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can I help you?"
                      className="w-full bg-dark-bg border border-border-subtle rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={isSending}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent-orange text-dark-bg px-8 py-4 font-bold hover:bg-accent-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-dark-bg border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-6 relative z-10"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-orange/10 text-accent-orange mb-2">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-mono">Message Sent Successfully!</h3>
                  <p className="text-text-gray max-w-md mx-auto text-sm leading-relaxed">
                    Thank you for reaching out! Your message has been routed directly to <span className="text-accent-orange font-mono">bnyashavanth@gmail.com</span>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-border-subtle text-xs font-mono text-text-gray hover:text-white hover:border-accent-orange transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      
      {/* Footer minimal */}
      <div className="mt-32 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-border-subtle pt-8 text-xs font-mono text-text-gray">
        <div>&copy; {new Date().getFullYear()} Yashavanth BN. All rights reserved.</div>
        <div className="mt-4 md:mt-0 flex space-x-6">
          <a href="https://github.com/bnyashavanth-prog" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange transition-colors">GITHUB</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange transition-colors">LINKEDIN</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange transition-colors">TWITTER</a>
        </div>
      </div>
    </section>
  );
}
