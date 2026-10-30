'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Calendar, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    number: '01',
    title: 'CraftMitra',
    subtitle: 'AI-Powered Digital Business Manager for Artisans',
    date: 'September 2026',
    description:
      'An AI-powered mobile application designed to help marginalized Indian artisans digitize their products, generate catalogs, receive pricing recommendations and discover potential buyers.',
    features: [
      'AI-powered catalog generation',
      'Product image enhancement',
      'AI-generated product descriptions',
      'Smart pricing recommendations',
      'Buyer discovery',
      'Mobile application development',
    ],
    technologies: ['Flutter', 'Dart', 'AI Integration'],
    github: 'https://github.com/Sanjay-102189/DARK-CODERS',
    liveDemo: null,
    gradient: 'from-cyan-500 to-blue-500',
    accent: '#00F0FF',
  },
  {
    id: 2,
    number: '02',
    title: 'AI-Based Intrusion Detection System',
    subtitle: 'ML-Powered Network Security',
    date: 'March 2026',
    description:
      'Developed a machine learning-based intrusion detection system using the Random Forest algorithm and NSL-KDD dataset to identify malicious network traffic.',
    features: [
      'Network traffic classification',
      'Machine learning-based attack detection',
      'Data preprocessing and feature scaling',
      'Threat classification',
      'Flask-based monitoring dashboard',
    ],
    technologies: ['Python', 'Flask', 'Machine Learning', 'Random Forest', 'NSL-KDD'],
    github: 'https://github.com/Sanjay-102189/AI---Intrusion-Detection-System',
    liveDemo: null,
    gradient: 'from-purple-500 to-pink-500',
    accent: '#8B5CF6',
  },
  {
    id: 3,
    number: '03',
    title: 'Food Bridge',
    subtitle: 'Food Rescue and Sharing Network',
    date: 'October 2025',
    description:
      'A food-sharing platform that connects food donors with individuals and organizations in need, helping reduce food wastage.',
    features: [
      'Food donation management',
      'User authentication',
      'Location-based food discovery',
      'Food-sharing workflows',
    ],
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'OpenStreetMap API'],
    github: 'https://github.com/Sanjay-102189/Food-Bridge-Figma',
    liveDemo: null,
    gradient: 'from-green-500 to-emerald-500',
    accent: '#10B981',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="relative py-20 md:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-cyan font-mono text-sm tracking-wider mb-2">// PROJECTS</p>
          <h2 className="section-heading">PROJECTS THAT DEFINE MY JOURNEY</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent mb-16" />
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              onClick={() => setSelectedProject(project)}
              className="glass-card rounded-2xl p-6 md:p-8 cursor-pointer group hover:border-accent-cyan/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background accent glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[120px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: project.accent }}
              />

              <div className="relative flex flex-col md:flex-row md:items-start gap-6">
                {/* Project Number */}
                <div className="flex-shrink-0">
                  <span
                    className={`font-display text-5xl md:text-6xl font-bold bg-gradient-to-b ${project.gradient} bg-clip-text text-transparent opacity-20 group-hover:opacity-40 transition-opacity`}
                  >
                    {project.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar size={14} className="text-text-muted" />
                    <span className="text-text-muted text-xs font-mono">{project.date}</span>
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white tracking-wider mb-1 group-hover:text-accent-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-accent-cyan/70 text-sm font-mono mb-4">{project.subtitle}</p>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-text-muted text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent-cyan transition-colors"
                    >
                      <Github size={14} />
                      SOURCE CODE
                    </a>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-accent-cyan transition-colors"
                      >
                        <ExternalLink size={14} />
                        LIVE DEMO
                      </a>
                    )}
                    <span className="ml-auto flex items-center gap-1 text-xs font-mono text-text-muted group-hover:text-accent-cyan transition-colors">
                      VIEW DETAILS
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-bg-primary/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="glass-card rounded-2xl p-6 md:p-10 max-w-3xl w-full max-h-[85vh] overflow-y-auto border-gradient"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-text-muted hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <Calendar size={14} className="text-text-muted" />
                <span className="text-text-muted text-xs font-mono">{selectedProject.date}</span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-wider mb-1 bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">
                {selectedProject.title}
              </h3>
              <p className="text-accent-cyan/60 font-mono text-sm mb-6">{selectedProject.subtitle}</p>

              <p className="text-text-secondary leading-relaxed mb-8">{selectedProject.description}</p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="font-display text-sm tracking-wider text-white mb-4">KEY FEATURES</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                      <ChevronRight size={14} className="text-accent-cyan mt-0.5 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="font-display text-sm tracking-wider text-white mb-4">TECHNOLOGIES</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-accent-cyan/5 border border-accent-cyan/10 text-accent-cyan text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-accent-cyan/30 text-sm font-mono text-white hover:text-accent-cyan transition-all"
                >
                  <Github size={16} />
                  VIEW ON GITHUB
                </a>
                {selectedProject.liveDemo && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 text-sm font-mono text-accent-cyan hover:bg-accent-cyan/20 transition-all"
                  >
                    <ExternalLink size={16} />
                    LIVE DEMO
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
