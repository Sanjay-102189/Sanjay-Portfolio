'use client';

import { Download, Github, Linkedin, ExternalLink, Mail, ArrowUp } from 'lucide-react';
import { siteConfig, navLinks } from '@/config/site';

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center font-display font-bold text-bg-primary text-sm">
                SS
              </div>
              <span className="font-display text-lg font-bold tracking-wider text-white">
                SANJAY S.
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Building secure, intelligent and innovative digital experiences.
            </p>
            {/* Resume Download */}
            <a
              href={siteConfig.resumePath}
              download={siteConfig.resumeFilename}
              className="download-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-display tracking-wider text-accent-cyan mt-6"
            >
              <Download size={14} />
              DOWNLOAD RESUME
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-wider text-white mb-4">
              QUICK LINKS
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-text-secondary text-sm hover:text-accent-cyan transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display text-sm font-bold tracking-wider text-white mb-4">
              CONNECT
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={siteConfig.social.skillrack}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
                title="SkillRack"
              >
                <ExternalLink size={16} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
                title="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs font-mono">
            &copy; 2026 Sanjay S. All Rights Reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-text-muted text-xs hover:text-accent-cyan transition-colors"
          >
            BACK TO TOP
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
