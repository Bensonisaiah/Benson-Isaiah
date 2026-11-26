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
    'inline-flex items-center justify-center font-body font-semibold rounded-full transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-neutral-950 text-white hover:bg-black dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 shadow-md hover:-translate-y-0.5',
    secondary:
      'bg-neutral-100 text-neutral-900 border border-neutral-300 hover:bg-neutral-200 dark:bg-white/10 dark:text-white dark:border-white/15 dark:hover:bg-white/20',
    outline:
      'border border-neutral-300 text-neutral-800 hover:border-neutral-900 hover:text-neutral-950 dark:border-white/20 dark:text-neutral-200 dark:hover:border-white dark:hover:text-white',
    ghost:
      'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-white/5',
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
