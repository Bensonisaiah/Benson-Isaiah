import React from 'react';
import { Icon } from '@iconify/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  iconPosition?: 'left' | 'right';
  href?: string;
  isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  href,
  isExternal = false,
  className = '',
  ...rest
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-body font-semibold rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/35 hover:-translate-y-0.5',
    secondary:
      'bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/20',
    outline:
      'border border-indigo-500/40 hover:border-indigo-400 text-indigo-400 hover:text-white hover:bg-indigo-600/10',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/5',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const iconElement = icon ? (
    <Icon
      icon={icon}
      className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-5 h-5' : 'w-4.5 h-4.5'}
    />
  ) : null;

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={combinedStyles}
      >
        {icon && iconPosition === 'left' && iconElement}
        {children}
        {icon && iconPosition === 'right' && iconElement}
      </a>
    );
  }

  return (
    <button className={combinedStyles} {...rest}>
      {icon && iconPosition === 'left' && iconElement}
      {children}
      {icon && iconPosition === 'right' && iconElement}
    </button>
  );
};
