'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: 'PROGRAMMING LANGUAGES',
    color: 'from-cyan-400 to-blue-500',
    borderColor: 'border-cyan-500/20 hover:border-cyan-500/40',
    bgColor: 'bg-cyan-500/5',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++ (Basics)', 'SQL'],
  },
  {
    title: 'FRONTEND & MOBILE',
    color: 'from-blue-400 to-indigo-500',
    borderColor: 'border-blue-500/20 hover:border-blue-500/40',
    bgColor: 'bg-blue-500/5',
    skills: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'Flutter', 'Dart'],
  },
  {
    title: 'BACKEND',
    color: 'from-green-400 to-emerald-500',
    borderColor: 'border-green-500/20 hover:border-green-500/40',
    bgColor: 'bg-green-500/5',
    skills: ['Spring Boot', 'Node.js', 'REST APIs', 'Flask', 'FastAPI'],
  },
  {
    title: 'DATABASES',
    color: 'from-orange-400 to-red-500',
    borderColor: 'border-orange-500/20 hover:border-orange-500/40',
    bgColor: 'bg-orange-500/5',
    skills: ['MySQL', 'MongoDB', 'Supabase'],
  },
  {
    title: 'AI & AUTOMATION',
    color: 'from-purple-400 to-pink-500',
    borderColor: 'border-purple-500/20 hover:border-purple-500/40',
    bgColor: 'bg-purple-500/5',
    skills: ['n8n', 'API Integration', 'Workflow Automation', 'Machine Learning', 'Random Forest'],
  },
  {
    title: 'CYBERSECURITY',
    color: 'from-red-400 to-rose-500',
    borderColor: 'border-red-500/20 hover:border-red-500/40',
    bgColor: 'bg-red-500/5',
    skills: ['Ethical Hacking Fundamentals', 'Intrusion Detection'],
  },
  {
    title: 'TOOLS',
    color: 'from-teal-400 to-cyan-500',
    borderColor: 'border-teal-500/20 hover:border-teal-500/40',
    bgColor: 'bg-teal-500/5',
    skills: ['Git', 'GitHub', 'Visual Studio Code'],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory
    ? skillCategories.filter((c) => c.title === activeCategory)
    : skillCategories;

  return (
    <section id="skills" className="relative py-20 md:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-cyan font-mono text-sm tracking-wider mb-2">// SKILLS</p>
          <h2 className="section-heading">MY TECH ARSENAL</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent mb-8" />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all duration-300 ${
              !activeCategory
                ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30'
                : 'text-text-muted border border-white/5 hover:border-white/20 hover:text-white'
            }`}
          >
            ALL
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(activeCategory === cat.title ? null : cat.title)}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all duration-300 ${
                activeCategory === cat.title
                  ? 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30'
                  : 'text-text-muted border border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + catIdx * 0.1 }}
              className={`glass-card p-6 rounded-xl ${category.borderColor} transition-all duration-300 group`}
            >
              <div className={`inline-block px-3 py-1 rounded-md ${category.bgColor} mb-4`}>
                <h3
                  className={`text-[10px] font-display tracking-widest font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-text-secondary text-xs font-mono hover:border-accent-cyan/30 hover:text-accent-cyan hover:bg-accent-cyan/5 transition-all duration-300 cursor-default"
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
