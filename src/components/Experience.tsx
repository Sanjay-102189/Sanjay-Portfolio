'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, Briefcase, ChevronRight } from 'lucide-react';

const experiences = [
  {
    id: 1,
    organization: 'NJS InfoTech',
    role: 'IT Intern',
    location: 'Chennai',
    duration: 'May 2026 – July 2026',
    project: 'Self-Healing Incident Management System',
    description:
      'Contributed to developing an automated incident management system that detects, classifies and resolves system incidents through predefined rule-based self-healing mechanisms.',
    responsibilities: [
      'Incident detection and classification',
      'Rule-based automated incident resolution',
      'Frontend and backend development',
      'Application testing and debugging',
      'Technical documentation',
    ],
    technologies: ['Next.js', 'Node.js', 'JavaScript'],
    accent: '#00F0FF',
  },
  {
    id: 2,
    organization: 'Infosys Springboard',
    role: 'Virtual Intern – SignSpeak AI Project',
    location: 'Remote',
    duration: '2026',
    project: 'SignSpeak – AI Sign Language Learning and Assessment Platform',
    description:
      'Collaborated with a team to develop an AI-powered sign language learning platform featuring real-time gesture recognition, structured learning, automated assessment and performance tracking.',
    responsibilities: [],
    technologies: ['React.js', 'Tailwind CSS', 'Python', 'FastAPI', 'MediaPipe', 'OpenCV', 'PostgreSQL'],
    accent: '#0066FF',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-20 md:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-cyan font-mono text-sm tracking-wider mb-2">// EXPERIENCE</p>
          <h2 className="section-heading">WHERE I&apos;VE GROWN</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent mb-16" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-accent-blue/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-2.5 md:left-6.5 w-3 h-3 rounded-full border-2 bg-bg-primary"
                  style={{ borderColor: exp.accent, boxShadow: `0 0 10px ${exp.accent}40` }}
                />

                <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-accent-cyan/20 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-bold text-white tracking-wider">
                        {exp.organization}
                      </h3>
                      <p className="text-accent-cyan text-sm font-mono mt-1">{exp.role}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-xs font-mono text-text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Project */}
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase size={14} className="text-accent-blue" />
                    <span className="text-sm font-mono text-accent-blue/80">{exp.project}</span>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  {exp.responsibilities.length > 0 && (
                    <div className="mb-4">
                      <div className="grid sm:grid-cols-2 gap-1.5">
                        {exp.responsibilities.map((resp) => (
                          <div key={resp} className="flex items-start gap-2 text-sm text-text-secondary">
                            <ChevronRight size={12} className="text-accent-cyan mt-1 flex-shrink-0" />
                            {resp}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-text-muted text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
