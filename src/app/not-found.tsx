'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-8xl md:text-9xl font-bold bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent mb-4">
            404
          </h1>
          <div className="w-24 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-blue mx-auto mb-8" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="font-mono text-accent-cyan text-sm mb-2 tracking-wider">
            ERROR: PAGE_NOT_FOUND
          </p>
          <p className="text-text-secondary text-base mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved to another dimension.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-blue text-bg-primary font-display text-xs tracking-wider font-bold hover:shadow-lg hover:shadow-accent-cyan/25 transition-all hover:scale-105"
            >
              <Home size={14} />
              RETURN HOME
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/5 text-white font-display text-xs tracking-wider hover:bg-white/10 transition-all"
            >
              <ArrowLeft size={14} />
              GO BACK
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
