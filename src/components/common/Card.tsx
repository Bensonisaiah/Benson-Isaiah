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
      className={`bg-gray-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 ${
        hoverEffect
          ? 'hover:border-white/20 hover:bg-gray-900/80 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
