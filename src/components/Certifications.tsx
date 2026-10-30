'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';

const certifications = [
  {
    title: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    date: 'October 2025',
    verifyKey: 'oracleAI' as keyof typeof siteConfig.certifications,
  },
  {
    title: 'Agentic AI Certified Foundations Associate',
    issuer: 'Oracle',
    date: 'July 2026',
    verifyKey: 'agenticAI' as keyof typeof siteConfig.certifications,
  },
  {
    title: 'ReactJS',
    issuer: 'Infosys Springboard',
    date: 'February 2026',
    verifyKey: 'reactJS' as keyof typeof siteConfig.certifications,
  },
  {
    title: 'MongoDB Basics for Students',
    issuer: 'MongoDB',
    date: 'August 2026',
    verifyKey: 'mongodb' as keyof typeof siteConfig.certifications,
  },
  {
    title: 'Critical Thinking in the AI Era',
    issuer: 'HP LIFE',
    date: 'February 2026',
    verifyKey: 'criticalThinking' as keyof typeof siteConfig.certifications,
  },
  {
    title: 'Cybersecurity Analyst Job Simulation',
    issuer: 'Tata Forage',
    date: 'February 2026',
    verifyKey: 'cybersecurity' as keyof typeof siteConfig.certifications,
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="relative py-20 md:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-cyan font-mono text-sm tracking-wider mb-2">// CERTIFICATIONS</p>
          <h2 className="section-heading">KNOWLEDGE &amp; CERTIFICATIONS</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => {
            const verifyUrl = siteConfig.certifications[cert.verifyKey];
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass-card rounded-xl p-6 group hover:border-accent-cyan/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent-blue/20 transition-colors">
                    <Award size={18} className="text-accent-blue" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm mb-1 leading-tight group-hover:text-accent-cyan transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-accent-cyan/60 text-xs font-mono mb-2">{cert.issuer}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1 text-text-muted text-xs">
                        <Calendar size={11} />
                        {cert.date}
                      </span>
                      {verifyUrl && (
                        <a
                          href={verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-accent-cyan/50 hover:text-accent-cyan transition-colors"
                        >
                          <ExternalLink size={11} />
                          Verify
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
