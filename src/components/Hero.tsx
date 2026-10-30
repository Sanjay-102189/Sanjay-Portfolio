'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowDown, Mail, Users, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/site';
import HeroScene from './HeroScene';

const roles = [
  'Cyber Security Enthusiast',
  'Full-Stack Developer',
  'AI & Automation Explorer',
  'Problem Solver',
  'Application Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 30 : 60;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 mb-8"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-xs font-mono tracking-wider">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wider mb-4"
            >
              <span className="text-text-secondary text-xl sm:text-2xl font-sans font-light tracking-normal block mb-2">
                Hey, I&apos;m
              </span>
              <span className="bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple bg-clip-text text-transparent">
                SANJAY S.
              </span>
            </motion.h1>

            {/* Animated tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90 mb-4"
            >
              Building Intelligent Digital{' '}
              <span className="text-accent-cyan">Experiences.</span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-text-secondary text-sm sm:text-base max-w-xl mb-6 leading-relaxed"
            >
              Cyber Security &amp; Full-Stack Developer passionate about building
              secure applications, AI-powered solutions and innovative digital
              experiences.
            </motion.p>

            {/* Rotating Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3 mb-10"
            >
              <Sparkles size={16} className="text-accent-purple" />
              <span className="font-mono text-sm text-accent-cyan">
                {'> '}
                {displayText}
                <span className="animate-pulse text-accent-cyan">|</span>
              </span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-6 py-3 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-lg font-display text-xs tracking-wider text-bg-primary font-bold hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300 hover:scale-105"
              >
                EXPLORE MY WORK
              </button>
              <a
                href={siteConfig.resumePath}
                download={siteConfig.resumeFilename}
                className="download-btn flex items-center gap-2 px-6 py-3 rounded-lg font-display text-xs tracking-wider text-accent-cyan hover:scale-105 transition-transform"
              >
                <Download size={14} className="group-hover:animate-bounce" />
                DOWNLOAD RESUME
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="px-6 py-3 rounded-lg border border-white/10 bg-white/5 font-display text-xs tracking-wider text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Mail size={14} className="inline mr-2" />
                CONTACT ME
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-lg border border-accent-purple/20 bg-accent-purple/5 font-display text-xs tracking-wider text-accent-purple hover:bg-accent-purple/10 hover:border-accent-purple/40 transition-all duration-300"
              >
                <Users size={14} className="inline mr-2" />
                LET&apos;S CONNECT
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="order-1 lg:order-2 relative h-[350px] sm:h-[400px] lg:h-[550px]"
          >
            <HeroScene />
            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-bg-secondary/60 backdrop-blur-sm border border-accent-cyan/10"
            >
              <span className="w-1.5 h-1.5 bg-accent-cyan rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-accent-cyan/70 tracking-wider">
                INITIALIZING DEVELOPER PROFILE...
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-text-muted text-[10px] font-mono tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-accent-cyan/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
