import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
}) => {
  const sizeStyles = {
    sm: 'w-8 h-8 p-0.5 rounded-lg',
    md: 'w-9.5 h-9.5 p-1 rounded-xl',
    lg: 'w-12 h-12 p-1.5 rounded-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 group ${className}`}>
      {/* Gothic B-I-Z Monogram Emblem */}
      <div
        className={`${sizeStyles[size]} bg-neutral-950 dark:bg-black/80 border border-neutral-800 dark:border-white/15 overflow-hidden flex items-center justify-center shadow-sm dark:shadow-md dark:shadow-black/50 group-hover:border-neutral-700 dark:group-hover:border-white/30 group-hover:scale-105 transition-all duration-300`}
      >
        <img
          src="/logo.webp"
          alt="Benson Isaiah Emblem"
          className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.15)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] transition-all duration-300"
          loading="eager"
          decoding="async"
        />
      </div>

      {showText && (
        <span className="font-heading font-semibold text-lg sm:text-xl tracking-tight text-neutral-950 dark:text-white">
          Benson Isaiah
        </span>
      )}
    </div>
  );
};
