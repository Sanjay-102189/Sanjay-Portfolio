'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { siteConfig, navLinks } from '@/config/site';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.id);
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-accent-cyan/10 shadow-lg shadow-accent-cyan/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center font-display font-bold text-bg-primary text-sm">
                SS
              </div>
              <span className="font-display text-lg font-bold tracking-wider text-white group-hover:text-accent-cyan transition-colors">
                SANJAY.S
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-3 py-2 text-xs font-mono tracking-wider transition-all duration-300 rounded-lg ${
                    activeSection === link.id
                      ? 'text-accent-cyan bg-accent-cyan/10'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-3">
              <span className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                OPEN TO WORK
              </span>
              <a
                href={siteConfig.resumePath}
                download={siteConfig.resumeFilename}
                className="download-btn flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-display tracking-wider text-accent-cyan"
              >
                <Download size={14} />
                RESUME
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-text-secondary hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-bg-primary/95 backdrop-blur-xl" />
            <div className="relative flex flex-col items-center justify-center h-full gap-6 p-8">
              <span className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-4">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                OPEN TO OPPORTUNITIES
              </span>
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-lg font-display tracking-widest transition-colors ${
                    activeSection === link.id ? 'text-accent-cyan' : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {link.label.toUpperCase()}
                </motion.button>
              ))}
              <a
                href={siteConfig.resumePath}
                download={siteConfig.resumeFilename}
                className="download-btn flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-display tracking-wider text-accent-cyan mt-4"
              >
                <Download size={16} />
                DOWNLOAD RESUME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
