import { useState, useEffect } from 'react';

/**
 * Detects whether the window has been scrolled past a threshold
 * @param threshold Scroll threshold in pixels (default: 20)
 */
export function useScrollHeader(threshold: number = 20): boolean {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return isScrolled;
}
