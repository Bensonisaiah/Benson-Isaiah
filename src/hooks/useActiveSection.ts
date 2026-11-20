import { useState, useEffect } from 'react';

/**
 * Tracks the current in-view section ID based on scroll position
 * @param sectionIds Array of section element IDs without hash (e.g. ['about', 'skills'])
 * @param offset Pixel offset from top for detection threshold
 */
export function useActiveSection(sectionIds: string[], offset: number = 100): string {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollY >= top - offset) {
            setActiveSection(id);
            return;
          }
        }
      }

      // If above first section, clear or default to empty
      if (scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
