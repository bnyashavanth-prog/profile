import React from 'react';
import { motion } from 'framer-motion';
import { Constellation } from '../components/Constellation';

export function Skills() {
  const categories = [
    {
      title: 'DEVELOPMENT',
      skills: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'Next.js', 'Tailwind CSS', 'Node.js', 'NestJS']
    },
    {
      title: 'TOOLS & PLATFORMS',
      skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Vercel', 'Postman', 'Figma', 'Linux', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'TESTING & QA',
      skills: ['Functional Testing', 'API Testing', 'Jest', 'Cypress', 'Bug Tracking', 'Quality Assurance']
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 border-t border-border-subtle overflow-hidden relative">
      {/* Background Graphic */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 lg:opacity-100 pointer-events-none">
        <Constellation labels={['FRONTEND', 'BACKEND', 'DEVOPS']} className="translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="font-mono text-sm text-accent-orange mb-4">
            // TECHNICAL ARSENAL
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white leading-tight">
            Tools, technologies, and creative disciplines.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-dark-card border border-border-subtle rounded-3xl p-8 hover:border-accent-orange/30 transition-colors"
            >
              <h3 className="font-mono text-sm text-text-gray tracking-wider mb-6 pb-4 border-b border-border-subtle">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-dark-bg border border-border-subtle rounded-full text-sm text-white/90 hover:text-accent-orange hover:border-accent-orange/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
