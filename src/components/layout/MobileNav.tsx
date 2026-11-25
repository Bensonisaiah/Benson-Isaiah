import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import { navLinks } from '../../data/navigation';
import { personalInfo } from '../../data/personalInfo';
import { useTheme } from '../../hooks/useTheme';
import { Logo } from '../common/Logo';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  activeSection,
}) => {
  const { theme, toggleTheme } = useTheme();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-[#0B0C10] border-l border-neutral-200 dark:border-white/10 p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
        <div>
          {/* Header with logo & close button */}
          <div className="flex items-center justify-between pb-6 border-b border-neutral-200 dark:border-white/10">
            <div className="flex items-center gap-2.5">
              <Logo size="sm" />
              <span className="text-lg font-heading font-semibold text-neutral-950 dark:text-white">
                {personalInfo.name.split(' ')[0]}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {/* Theme Toggle in Mobile Nav */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Icon icon="mdi:white-balance-sunny" className="w-5 h-5 text-amber-400" />
                ) : (
                  <Icon icon="mdi:moon-waning-crescent" className="w-5 h-5 text-neutral-700" />
                )}
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-lg text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
                aria-label="Close navigation menu"
              >
                <Icon icon="mdi:close" className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-body font-medium transition-all ${
                    isActive
                      ? 'bg-neutral-100 dark:bg-white/10 text-neutral-950 dark:text-white font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {link.icon && <Icon icon={link.icon} className="w-5 h-5 text-neutral-400" />}
                    <span>{link.label}</span>
                  </div>
                  {link.badge && (
                    <span className="text-xs font-normal text-neutral-400 dark:text-neutral-500">
                      [{link.badge}]
                    </span>
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Footer in Drawer */}
        <div className="pt-6 border-t border-neutral-200 dark:border-white/10 space-y-4">
          <a
            href="#contact"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-neutral-950 text-white hover:bg-black dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 font-body font-semibold text-sm transition-all shadow-md"
          >
            <span>Let's Talk</span>
            <Icon icon="lucide:arrow-up-right" className="w-4 h-4 stroke-[2.5]" />
          </a>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 pt-2">
            {personalInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5 rounded-lg transition-colors"
                aria-label={social.name}
              >
                <Icon icon={social.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
