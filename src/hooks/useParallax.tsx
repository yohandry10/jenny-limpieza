import { useState, useEffect, RefObject } from 'react';

interface ParallaxPosition {
  x: number;
  y: number;
}

/**
 * A hook that creates a parallax effect based on mouse movement
 */
const useParallax = (ref: RefObject<HTMLElement>) => {
  const [position, setPosition] = useState<ParallaxPosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      // Get the center of the viewport
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      // Calculate the distance from center (normalized to -1 to 1)
      const x = (e.clientX - centerX) / centerX;
      const y = (e.clientY - centerY) / centerY;
      
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ref]);

  return position;
};

export default useParallax;