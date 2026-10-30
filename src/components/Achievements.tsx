'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Award, Code2 } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Runner-Up – Vibe Coding Competition',
    description: 'Velammal Engineering College, Chennai.',
    color: 'from-yellow-400 to-orange-500',
    bgColor: 'bg-yellow-500/5',
    borderColor: 'border-yellow-500/20 hover:border-yellow-500/40',
  },
  {
    icon: Award,
    title: 'Smart India Hackathon 2026',
    description: 'Secured a Top 5 position among 100+ teams in the internal hackathon.',
    color: 'from-cyan-400 to-blue-500',
    bgColor: 'bg-cyan-500/5',
    borderColor: 'border-cyan-500/20 hover:border-cyan-500/40',
  },
  {
    icon: Code2,
    title: 'Competitive Programming',
    description: 'Solved 1000+ coding problems across competitive programming and coding platforms.',
    color: 'from-purple-400 to-pink-500',
    bgColor: 'bg-purple-500/5',
    borderColor: 'border-purple-500/20 hover:border-purple-500/40',
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="achievements" className="relative py-20 md:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-cyan font-mono text-sm tracking-wider mb-2">// ACHIEVEMENTS</p>
          <h2 className="section-heading">BEYOND THE CODE</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent mb-16" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, i) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`glass-card rounded-2xl p-8 text-center group ${achievement.borderColor} transition-all duration-500 relative overflow-hidden`}
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 ${achievement.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl ${achievement.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon
                    size={28}
                    className={`bg-gradient-to-r ${achievement.color} bg-clip-text`}
                    style={{ color: 'inherit' }}
                  />
                </div>

                <h3 className="font-display text-base font-bold text-white tracking-wider mb-3 group-hover:text-accent-cyan transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
