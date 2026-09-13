import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function Work() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'FULL STACK', 'SAAS', 'ERP', 'AI', 'RESEARCH', 'HACKATHON'];

  const projects = [
    {
      id: '01',
      title: 'No-Due Portal',
      subtitle: 'No Due Clearance Management System',
      category: 'SAAS',
      description: 'Multi-tenant SaaS that digitizes student No Due Certificate workflows, connecting faculty, coordinators, library, accounts, HODs, and administration with automated dues, payments, approvals, and PDF certificates.',
      highlight: false
    },
    {
      id: '02',
      title: 'AcadOps ERP',
      subtitle: 'Engineering College ERP',
      category: 'ERP',
      description: 'Governance-focused ERP for managing admissions, academics, attendance, internal assessments, examinations, mentorship, results, role-based access, and institutional workflows.',
      highlight: true
    },
    {
      id: '03',
      title: 'SynthMind',
      subtitle: 'AI Research Assistant',
      category: 'AI',
      description: 'An AI-powered tool designed to help researchers parse through dense academic papers, extract key methodologies, and synthesize literature reviews automatically.',
      highlight: false
    },
    {
      id: '04',
      title: 'CodeCollab',
      subtitle: 'Real-time IDE & Platform',
      category: 'HACKATHON',
      description: 'Award-winning hackathon project featuring a collaborative code editor with WebRTC audio channels, live terminal, and AI pair programming capabilities built in 48 hours.',
      highlight: false
    }
  ];

  const filteredProjects = activeFilter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="work" className="py-24 px-6 border-t border-border-subtle bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-sm text-accent-orange mb-4">
            // SELECTED WORK
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white max-w-2xl leading-tight">
            Building systems that solve real-world problems.
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-colors border ${
                activeFilter === filter 
                  ? 'bg-accent-orange text-dark-bg border-accent-orange' 
                  : 'bg-transparent text-text-gray border-border-subtle hover:border-accent-orange/50 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className={`group relative bg-dark-card rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                  project.highlight 
                    ? 'border-accent-orange shadow-[0_0_30px_rgba(245,166,35,0.1)]' 
                    : 'border-border-subtle hover:border-accent-orange/50'
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="font-mono text-4xl font-bold text-white/10 group-hover:text-accent-orange/20 transition-colors">
                    {project.id}
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center group-hover:bg-accent-orange group-hover:text-dark-bg group-hover:border-accent-orange transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-orange transition-colors">
                  {project.title}
                </h3>
                
                <div className="font-mono text-xs text-accent-orange mb-4 tracking-wider">
                  {project.subtitle}
                </div>
                
                <p className="text-text-gray leading-relaxed text-sm">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
