'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="loading-spinner" />
        <div className="absolute inset-0 loading-spinner" style={{ 
          animationDirection: 'reverse', 
          animationDuration: '1.5s',
          borderTopColor: '#0066FF',
          width: '44px',
          height: '44px',
          margin: '8px',
        }} />
      </div>
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="font-display text-accent-cyan text-sm tracking-[0.3em] mb-2">
          INITIALIZING
        </p>
        <p className="text-text-secondary text-xs tracking-widest font-mono">
          SANJAY.S // PORTFOLIO
        </p>
      </motion.div>
    </motion.div>
  );
}
