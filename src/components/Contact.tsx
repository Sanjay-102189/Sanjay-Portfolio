'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Copy, Check, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');

    // Check if EmailJS is configured
    if (siteConfig.emailjs.serviceId && siteConfig.emailjs.templateId && siteConfig.emailjs.publicKey) {
      try {
        const emailjs = await import('@emailjs/browser');
        await emailjs.send(
          siteConfig.emailjs.serviceId,
          siteConfig.emailjs.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: siteConfig.email,
          },
          siteConfig.emailjs.publicKey
        );
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } catch {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } else {
      // Fallback to mailto
      const mailtoUrl = `mailto:${siteConfig.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      window.open(mailtoUrl, '_blank');
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-32">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent-cyan font-mono text-sm tracking-wider mb-2">// CONTACT</p>
          <h2 className="section-heading mx-auto">LET&apos;S BUILD SOMETHING GREAT</h2>
          <p className="section-subheading mx-auto mt-4">
            Have an opportunity, project idea or collaboration in mind? Let&apos;s connect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Email */}
            <div className="glass-card rounded-xl p-5 group hover:border-accent-cyan/20 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
                  <Mail size={18} className="text-accent-cyan" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-text-muted text-xs font-mono mb-0.5">EMAIL</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-white text-sm hover:text-accent-cyan transition-colors truncate block"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg hover:bg-white/5 text-text-muted hover:text-accent-cyan transition-all"
                  title="Copy email"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card rounded-xl p-5 group hover:border-accent-cyan/20 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                  <Phone size={18} className="text-accent-blue" />
                </div>
                <div>
                  <p className="text-text-muted text-xs font-mono mb-0.5">PHONE</p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                    className="text-white text-sm hover:text-accent-cyan transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="glass-card rounded-xl p-5 group hover:border-accent-cyan/20 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-purple/10 flex items-center justify-center">
                  <MapPin size={18} className="text-accent-purple" />
                </div>
                <div>
                  <p className="text-text-muted text-xs font-mono mb-0.5">LOCATION</p>
                  <p className="text-white text-sm">{siteConfig.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
                title="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
                title="Call"
              >
                <Phone size={18} />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={siteConfig.social.skillrack}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/30 transition-all"
                title="SkillRack"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-mono text-text-muted mb-2 tracking-wider">NAME</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      errors.name ? 'border-red-500/50' : 'border-white/10'
                    } text-white text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors placeholder:text-text-muted/50`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs font-mono text-text-muted mb-2 tracking-wider">EMAIL</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                      errors.email ? 'border-red-500/50' : 'border-white/10'
                    } text-white text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors placeholder:text-text-muted/50`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-text-muted mb-2 tracking-wider">SUBJECT</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: '' });
                  }}
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                    errors.subject ? 'border-red-500/50' : 'border-white/10'
                  } text-white text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors placeholder:text-text-muted/50`}
                  placeholder="Subject"
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>
              <div>
                <label className="block text-xs font-mono text-text-muted mb-2 tracking-wider">MESSAGE</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${
                    errors.message ? 'border-red-500/50' : 'border-white/10'
                  } text-white text-sm focus:outline-none focus:border-accent-cyan/50 transition-colors resize-none placeholder:text-text-muted/50`}
                  placeholder="Your message..."
                />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-primary font-display text-sm tracking-wider font-bold hover:shadow-lg hover:shadow-accent-cyan/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-bg-primary/30 border-t-bg-primary rounded-full animate-spin" />
                    SENDING...
                  </>
                ) : status === 'success' ? (
                  <>
                    <Check size={16} />
                    MESSAGE SENT!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    SEND MESSAGE
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">
                  Failed to send message. Please try{' '}
                  <a href={`mailto:${siteConfig.email}`} className="text-accent-cyan underline">
                    emailing directly
                  </a>
                  .
                </p>
              )}

              {!siteConfig.emailjs.serviceId && (
                <p className="text-text-muted text-xs text-center">
                  Form will open your default email client as a fallback.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
