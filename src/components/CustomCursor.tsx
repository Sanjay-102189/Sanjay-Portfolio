'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
      setIsVisible(true);
      
      const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('a, button, [role="button"], input, textarea, select')) {
          setIsHovering(true);
        }
      };

      const handleMouseOut = () => {
        setIsHovering(false);
      };

      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseout', handleMouseOut);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseover', handleMouseOver);
        document.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9998] mix-blend-difference"
        style={{
          left: position.x - 4,
          top: position.y - 4,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#00F0FF',
          transition: 'transform 0.1s ease',
          transform: isHovering ? 'scale(3)' : 'scale(1)',
        }}
      />
      <div
        className="fixed pointer-events-none z-[9997]"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1px solid rgba(0, 240, 255, 0.3)',
          transition: 'transform 0.2s ease, opacity 0.2s ease',
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          opacity: isHovering ? 0.5 : 0.3,
        }}
      />
    </>
  );
}
