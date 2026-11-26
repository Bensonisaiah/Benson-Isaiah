import React from 'react';
import { Icon } from '@iconify/react';

interface BadgeProps {
  label: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'emerald';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  icon,
  variant = 'primary',
  className = '',
}) => {
  const variantStyles = {
    primary: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20',
    secondary: 'bg-neutral-100 text-neutral-700 border-neutral-200 dark:bg-white/5 dark:text-neutral-300 dark:border-white/10',
    outline: 'bg-transparent text-neutral-600 border-neutral-300 dark:text-neutral-400 dark:border-white/15',
    emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-medium border transition-colors ${variantStyles[variant]} ${className}`}
    >
      {icon && <Icon icon={icon} className="w-3.5 h-3.5" />}
      {label}
    </span>
  );
};
