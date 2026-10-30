'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

const profiles = [
  {
    name: 'GitHub',
    icon: Github,
    description: 'Open source contributions, projects, and code repositories.',
    url: siteConfig.social.github,
    color: 'from-gray-400 to-gray-600',
    bgColor: 'bg-gray-500/5',
    borderColor: 'border-gray-500/20 hover:border-gray-500/40',
  },
  {
    name: 'SkillRack',
    icon: Code2,
    description: 'Competitive programming practice and problem solving.',
    url: siteConfig.social.skillrack,
    color: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-500/5',
    borderColor: 'border-green-500/20 hover:border-green-500/40',
  },
  {
    name: 'LinkedIn',
    icon: ExternalLink,
    description: 'Professional network and career connections.',
    url: siteConfig.social.linkedin,
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-500/5',
    borderColor: 'border-blue-500/20 hover:border-blue-500/40',
  },
];

export default function CodingProfiles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-20 md:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-cyan font-mono text-sm tracking-wider mb-2">// PROFILES</p>
          <h2 className="section-heading">PROBLEM SOLVING NEVER STOPS</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {profiles.map((profile, i) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className={`glass-card rounded-xl p-8 text-center group ${profile.borderColor} transition-all duration-300`}
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl ${profile.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <profile.icon size={28} className="text-white/70" />
              </div>
              <h3 className="font-display text-lg font-bold text-white tracking-wider mb-2">
                {profile.name}
              </h3>
              <p className="text-text-secondary text-sm mb-6">{profile.description}</p>
              {profile.url ? (
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg ${profile.bgColor} border ${profile.borderColor.split(' ')[0]} text-sm font-mono text-white hover:scale-105 transition-all duration-300`}
                >
                  <ExternalLink size={14} />
                  VISIT PROFILE
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm font-mono text-text-muted">
                  COMING SOON
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
