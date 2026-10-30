'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Briefcase, FolderGit2, Trophy, Users } from 'lucide-react';

const stats = [
  { icon: Code2, value: '1000+', label: 'Coding Problems Solved' },
  { icon: Briefcase, value: '2', label: 'Internship Experiences' },
  { icon: FolderGit2, value: '3+', label: 'Featured Projects' },
  { icon: Trophy, value: 'Runner-Up', label: 'Vibe Coding Competition' },
  { icon: Users, value: 'Top 5', label: 'SIH 2026 Internal Hackathon' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="section-container" ref={ref}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-cyan font-mono text-sm tracking-wider mb-2">// ABOUT ME</p>
          <h2 className="section-heading">BEHIND THE CODE</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Text */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <p className="text-text-secondary leading-relaxed mb-6 text-base">
                I&apos;m <span className="text-white font-semibold">Sanjay S</span>, a third-year Computer Science and Engineering student specializing in{' '}
                <span className="text-accent-cyan">Cyber Security</span> at R.M.D. Engineering College.
              </p>
              <p className="text-text-secondary leading-relaxed mb-6 text-base">
                I enjoy building intelligent applications, exploring cybersecurity, developing full-stack solutions and experimenting with AI-powered technologies.
              </p>
              <p className="text-text-secondary leading-relaxed text-base">
                From machine learning-based intrusion detection systems to AI-powered mobile applications, I love transforming ideas into practical{' '}
                <span className="text-accent-blue">digital solutions</span>.
              </p>

              {/* Profile Card */}
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-accent-cyan/5 to-accent-blue/5 border border-accent-cyan/10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center font-display font-bold text-bg-primary text-xl">
                    SS
                  </div>
                  <div>
                    <h3 className="font-display text-white font-bold tracking-wider text-sm">SANJAY S</h3>
                    <p className="text-accent-cyan text-xs font-mono">Cyber Security & Full-Stack Developer</p>
                    <p className="text-text-muted text-xs mt-0.5">B.E. CSE (Cyber Security) • CGPA: 8.36</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="glass-card p-5 rounded-xl group hover:border-accent-cyan/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors">
                      <stat.icon size={18} className="text-accent-cyan" />
                    </div>
                    <div>
                      <p className="font-display text-white font-bold text-lg tracking-wider">
                        {stat.value}
                      </p>
                      <p className="text-text-muted text-xs">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
