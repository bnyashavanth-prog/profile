import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function Work() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filters = ['ALL', 'FULL STACK', 'SAAS', 'ERP', 'AI', 'RESEARCH', 'HACKATHON'];

  const projects = [
    {
      id: '01', title: 'No-Due Portal', subtitle: 'No Due Clearance Management System', categories: ['SAAS', 'FULL STACK'],
      description: 'Multi-tenant SaaS that digitizes student No Due Certificate workflows, connecting faculty, coordinators, library, accounts, HODs, and administration with automated dues, payments, approvals, and PDF certificates.',
      highlight: false
    },
    {
      id: '02', title: 'AcadOps ERP', subtitle: 'Engineering College ERP', categories: ['ERP', 'FULL STACK'],
      description: 'Governance-focused ERP for managing admissions, academics, attendance, internal assessments, examinations, mentorship, results, role-based access, and institutional workflows.',
      highlight: true
    },
    {
      id: '03', title: 'MITM PlacePro', subtitle: 'Placement Management Platform', categories: ['FULL STACK', 'SAAS'],
      description: 'Full-stack placement platform connecting students, placement administrators, and companies through job drives, assessments, interviews, feedback, recruitment workflows, and analytics.',
      highlight: false
    },
    {
      id: '04', title: 'MRF — Maharaja Research Foundation', subtitle: 'Research Management Platform', categories: ['FULL STACK', 'RESEARCH'],
      description: 'Digital research administration platform supporting the academic research lifecycle — from candidate registration and supervisor allocation to RAC reviews, progress reports, publications, examinations, and graduation.',
      highlight: false
    }
  ];

  const filteredProjects = activeFilter === 'ALL' ? projects : projects.filter(p => p.categories && p.categories.includes(activeFilter));

  return (
    <section id="work" className="py-24 px-6 border-t border-border-subtle bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="font-mono text-sm text-accent-orange mb-4">
            // SELECTED WORK
          </motion.div>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="text-4xl md:text-5xl font-bold mb-12 text-white max-w-2xl leading-tight">
            Building systems that solve real-world problems.
          </motion.h2>
          
          {/* Filters */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="flex flex-wrap gap-2 mb-12">
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
          </motion.div>
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                key={project.id}
                whileHover="hover"
                className={`group relative bg-dark-card rounded-2xl p-8 border transition-colors duration-300 ${
                  project.highlight 
                    ? 'border-accent-orange shadow-[0_0_30px_rgba(245,166,35,0.1)]' 
                    : 'border-border-subtle hover:border-accent-orange/50'
                }`}
              >
                {/* Framer motion wrapper for translateY lift on hover */}
                <motion.div variants={{ hover: { y: -6 } }} className="absolute inset-0 border border-transparent rounded-2xl group-hover:border-accent-orange/50 pointer-events-none transition-colors" />
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="font-mono text-4xl font-bold text-white/10 group-hover:text-accent-orange/20 transition-colors">
                    {project.id}
                  </div>
                  <motion.div 
                    variants={{ hover: { rotate: 45, backgroundColor: "var(--color-accent-orange)", color: "var(--color-dark-bg)", borderColor: "var(--color-accent-orange)" } }}
                    className="w-10 h-10 rounded-full border border-border-subtle flex items-center justify-center transition-colors"
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-orange transition-colors relative z-10">
                  {project.title}
                </h3>
                
                <div className="font-mono text-xs text-accent-orange mb-4 tracking-wider relative z-10">
                  {project.subtitle}
                </div>
                
                <p className="text-text-gray leading-relaxed text-sm relative z-10">
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
