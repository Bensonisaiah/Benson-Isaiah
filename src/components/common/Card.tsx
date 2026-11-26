import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
}) => {
  return (
    <div
      className={`bg-white/80 dark:bg-white/[0.03] backdrop-blur-md border border-neutral-200 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 shadow-sm dark:shadow-none ${
        hoverEffect
          ? 'hover:border-neutral-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/40'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
