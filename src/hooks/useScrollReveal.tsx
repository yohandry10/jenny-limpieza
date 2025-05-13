import { useState, useEffect, useRef, RefObject } from 'react';

/**
 * A hook that detects when an element enters the viewport
 */
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, no need to keep observing
          observer.unobserve(current);
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: '0px 0px -10% 0px' // Slightly before the element enters the viewport
      }
    );

    observer.observe(current);

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return { ref, isVisible };
};

export default useScrollReveal;