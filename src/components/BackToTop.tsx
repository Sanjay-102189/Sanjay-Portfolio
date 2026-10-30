'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-bg-secondary/80 backdrop-blur-xl border border-accent-cyan/20 flex items-center justify-center text-accent-cyan hover:bg-accent-cyan/10 hover:border-accent-cyan/40 transition-all duration-300 hover:scale-110 shadow-lg shadow-accent-cyan/10"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
