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
    primary: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    secondary: 'bg-white/5 text-gray-300 border-white/10',
    outline: 'bg-transparent text-gray-400 border-white/15',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
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
