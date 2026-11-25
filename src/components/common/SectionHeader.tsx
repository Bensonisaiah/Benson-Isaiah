import React from 'react';
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
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl mb-12 sm:mb-16 ${alignmentClass} ${className}`}>
      {badge && (
        <div className={`mb-3 ${align === 'center' ? 'flex justify-center' : ''}`}>
          <Badge label={badge} icon={badgeIcon} />
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold tracking-tight text-neutral-950 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg font-body font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
