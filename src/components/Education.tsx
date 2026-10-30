'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'B.E. Computer Science and Engineering',
    specialization: 'Specialization in Cyber Security',
    institution: 'R.M.D. Engineering College',
    location: 'Thiruvallur',
    duration: 'September 2024 – June 2028',
    grade: 'CGPA: 8.36',
    accent: '#00F0FF',
  },
  {
    degree: 'Higher Secondary Education',
    specialization: null,
    institution: 'Revoor Padmanabha Chetty Matriculation Higher Secondary School',
    location: 'Chennai',
    duration: '2023 – 2024',
    grade: 'Percentage: 91.83%',
    accent: '#0066FF',
  },
];

export default function Education() {
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
          <p className="text-accent-cyan font-mono text-sm tracking-wider mb-2">// EDUCATION</p>
          <h2 className="section-heading">MY ACADEMIC JOURNEY</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-accent-cyan to-transparent mb-16" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-accent-blue/30 to-transparent" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-2.5 md:left-6.5 w-3 h-3 rounded-full border-2 bg-bg-primary"
                  style={{ borderColor: edu.accent, boxShadow: `0 0 10px ${edu.accent}40` }}
                />

                <div className="glass-card rounded-2xl p-6 md:p-8 hover:border-accent-cyan/20 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={22} className="text-accent-cyan" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg font-bold text-white tracking-wider">
                        {edu.degree}
                      </h3>
                      {edu.specialization && (
                        <p className="text-accent-cyan text-sm font-mono mt-0.5">
                          {edu.specialization}
                        </p>
                      )}
                      <p className="text-text-secondary text-sm mt-2">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 mt-3 text-xs font-mono text-text-muted">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {edu.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {edu.location}
                        </span>
                      </div>
                      <div className="mt-3 inline-block px-3 py-1 rounded-md bg-accent-cyan/5 border border-accent-cyan/10">
                        <span className="text-accent-cyan text-xs font-mono font-bold">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
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
