import React, { useRef } from 'react';
import { gsap, useGSAP } from '../../lib/gsap';
import { Badge } from './Badge';

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.section-reveal', {
          y: 22,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 86%',
            once: true,
          },
        });
      });
    },
    { scope: headerRef }
  );

  return (
    <div ref={headerRef} className={`max-w-4xl mb-12 sm:mb-16 ${alignmentClass} ${className}`}>
      {badge && (
        <div className={`section-reveal mb-3 ${align === 'center' ? 'flex justify-center' : ''}`}>
          <Badge label={badge} icon={badgeIcon} />
        </div>
      )}
      <h2 className="section-reveal text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold tracking-tight text-neutral-950 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`section-reveal max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } text-base sm:text-lg font-body font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
