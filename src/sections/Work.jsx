import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';

function GithubIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

export function Work() {
  const projects = [
    {
      id: '01', 
      title: 'No-Due Portal', 
      subtitle: 'SaaS / Full Stack',
      description: 'Multi-tenant SaaS that digitizes student No Due Certificate workflows, connecting faculty, coordinators, library, accounts, HODs, and administration with automated dues, payments, approvals, and PDF certificates.',
      stack: ['React', 'Node.js', 'PostgreSQL'],
      link: 'https://noc-portal-self.vercel.app/'
    },
    {
      id: '02', 
      title: 'AcadOps ERP', 
      subtitle: 'Engineering College ERP',
      description: 'Governance-focused ERP for managing admissions, academics, attendance, internal assessments, examinations, mentorship, results, role-based access, and institutional workflows.',
      stack: ['Next.js', 'NestJS', 'MongoDB'],
      link: null
    },
    {
      id: '03', 
      title: 'MITM PlacePro', 
      subtitle: 'Placement Management Platform',
      description: 'Full-stack placement platform connecting students, placement administrators, and companies through job drives, assessments, interviews, feedback, recruitment workflows, and analytics.',
      stack: ['React', 'Express', 'Tailwind'],
      link: 'https://mitm-placepro.vercel.app/'
    }
  ];

  return (
    <section id="work" className="py-32 px-6 bg-dark-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-32"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="font-mono text-xs md:text-sm text-[#f5b942] tracking-widest uppercase mb-4 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#f5b942]"></span>
            Featured Projects
          </motion.div>
          <motion.h2 variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="text-4xl md:text-6xl font-display font-black text-white leading-tight uppercase">
            Built for <span className="text-gradient-gold">Impact</span>.
          </motion.h2>
        </motion.div>

        <div className="space-y-48">
          {projects.map((project, idx) => (
            <div key={project.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center perspective-[1200px]`}>
              
              {/* Fanned Browser Window Gallery */}
              <div className="w-full lg:w-3/5 relative h-[300px] sm:h-[400px] md:h-[450px]">
                
                {/* Background Window 2 (Deepest) */}
                <motion.div 
                  initial={{ opacity: 0, rotateY: idx % 2 === 1 ? 15 : -15, z: -200, x: idx % 2 === 1 ? -40 : 40 }}
                  whileInView={{ opacity: 0.3, rotateY: idx % 2 === 1 ? 20 : -20, z: -150, x: idx % 2 === 1 ? -60 : 60 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute inset-0 rounded-xl overflow-hidden bg-dark-card border border-border-subtle shadow-2xl blur-[4px] scale-90 origin-center"
                >
                  <div className="bg-[#1a1f29] border-b border-border-subtle px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/50"></div><div className="w-3 h-3 rounded-full bg-yellow-500/50"></div><div className="w-3 h-3 rounded-full bg-green-500/50"></div></div>
                  </div>
                  <div className="w-full h-full bg-[#0d1117]/80"></div>
                </motion.div>

                {/* Background Window 1 */}
                <motion.div 
                  initial={{ opacity: 0, rotateY: idx % 2 === 1 ? 10 : -10, z: -100, x: idx % 2 === 1 ? -20 : 20 }}
                  whileInView={{ opacity: 0.6, rotateY: idx % 2 === 1 ? 10 : -10, z: -50, x: idx % 2 === 1 ? -30 : 30 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                  className="absolute inset-0 rounded-xl overflow-hidden bg-dark-card border border-border-subtle shadow-2xl blur-[2px] scale-95 origin-center"
                >
                  <div className="bg-[#1a1f29] border-b border-border-subtle px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500/80"></div><div className="w-3 h-3 rounded-full bg-yellow-500/80"></div><div className="w-3 h-3 rounded-full bg-green-500/80"></div></div>
                  </div>
                  <div className="w-full h-full bg-[#0a0a0f]"></div>
                </motion.div>

                {/* Main Front Window */}
                <motion.div 
                  initial={{ opacity: 0, rotateY: 0, z: 0, x: 0 }}
                  whileInView={{ opacity: 1, rotateY: idx % 2 === 1 ? -5 : 5, z: 50, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.2, type: "spring" }}
                  className="absolute inset-0 rounded-xl overflow-hidden bg-[#0d1117]/90 backdrop-blur-xl border border-border-subtle shadow-[0_20px_50px_-12px_rgba(59,130,246,0.15)] origin-center z-10 hover:border-[#f5b942]/50 hover:shadow-[0_0_30px_rgba(245,185,66,0.2)] transition-all duration-500"
                >
                  {/* Browser Header */}
                  <div className="bg-[#1a1f29] border-b border-border-subtle px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="mx-auto bg-dark-bg/50 rounded-md px-3 py-1 font-mono text-[10px] text-text-gray w-1/2 text-center overflow-hidden text-ellipsis whitespace-nowrap">
                      {project.link ? new URL(project.link).hostname : 'internal-system.local'}
                    </div>
                  </div>
                  {/* Main Content Area */}
                  <div className="w-full h-full bg-dark-bg relative overflow-hidden flex items-center justify-center p-8">
                     <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.2)_0%,_#0a0a0f_100%)]"></div>
                     <span className="font-display text-4xl sm:text-6xl text-white/5 opacity-50 absolute -rotate-12 select-none pointer-events-none">
                       {project.title.toUpperCase()}
                     </span>
                     <div className="relative z-10 w-full h-full border border-white/5 rounded-lg bg-white/5 backdrop-blur-sm p-4 flex flex-col gap-4">
                        <div className="w-1/3 h-4 bg-white/10 rounded"></div>
                        <div className="w-full h-1/2 bg-white/5 rounded"></div>
                        <div className="flex gap-4 h-1/4">
                          <div className="w-1/4 h-full bg-white/5 rounded"></div>
                          <div className="w-1/4 h-full bg-white/5 rounded"></div>
                        </div>
                     </div>
                  </div>
                </motion.div>
              </div>

              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 1 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="w-full lg:w-2/5 flex flex-col justify-center"
              >
                <div className="font-mono text-[#3b82f6] text-sm tracking-[0.2em] mb-4 uppercase">
                  {project.id} // {project.subtitle}
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 font-display uppercase tracking-wide group-hover:text-gradient-gold transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-text-gray leading-relaxed mb-8 text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-4 py-1.5 text-xs font-mono font-bold tracking-wider border border-border-subtle rounded-sm text-white/80 bg-dark-card/50">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {project.link && (
                    <Button href={project.link} target="_blank" rel="noopener noreferrer" variant="primary" icon>
                      View Live
                    </Button>
                  )}
                  <Button href="#" variant="secondary" className="gap-2 text-[#d1d5db]">
                    <GithubIcon size={16} /> GitHub
                  </Button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
