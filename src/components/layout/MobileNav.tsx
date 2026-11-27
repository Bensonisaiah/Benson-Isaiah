import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { gsap, useGSAP } from '../../lib/gsap';
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
  const rootRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const hasOpenedOnce = useRef(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useGSAP(
    () => {
      if (!rootRef.current || !backdropRef.current || !drawerRef.current) return;

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Initial hidden state on first mount
      if (!hasOpenedOnce.current && !isOpen) {
        gsap.set(rootRef.current, { autoAlpha: 0 });
        gsap.set(drawerRef.current, { xPercent: 100 });
        gsap.set(backdropRef.current, { opacity: 0 });
        return;
      }

      hasOpenedOnce.current = true;
      gsap.killTweensOf([rootRef.current, backdropRef.current, drawerRef.current, '.mobile-nav-item']);

      if (isOpen) {
        const tl = gsap.timeline();
        tl.set(rootRef.current, { autoAlpha: 1 })
          .fromTo(
            backdropRef.current,
            { opacity: 0 },
            { opacity: 1, duration: reduced ? 0.01 : 0.3, ease: 'power2.out' },
            0
          )
          .fromTo(
            drawerRef.current,
            { xPercent: 100 },
            { xPercent: 0, duration: reduced ? 0.01 : 0.42, ease: 'power3.out' },
            0
          )
          .fromTo(
            '.mobile-nav-item',
            { x: 24, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: reduced ? 0.01 : 0.32,
              stagger: reduced ? 0 : 0.045,
              ease: 'power2.out',
              clearProps: 'transform,opacity',
            },
            0.14
          );
      } else {
        const tl = gsap.timeline({
          onComplete: () => {
            if (rootRef.current) gsap.set(rootRef.current, { autoAlpha: 0 });
          },
        });
        tl.to('.mobile-nav-item', {
          x: 16,
          opacity: 0,
          duration: reduced ? 0.01 : 0.18,
          stagger: reduced ? 0 : 0.02,
          ease: 'power2.in',
        })
          .to(
            drawerRef.current,
            { xPercent: 100, duration: reduced ? 0.01 : 0.32, ease: 'power3.in' },
            0.05
          )
          .to(
            backdropRef.current,
            { opacity: 0, duration: reduced ? 0.01 : 0.25, ease: 'power2.in' },
            0.08
          );
      }
    },
    { scope: rootRef, dependencies: [isOpen] }
  );

  return (
    <div
      ref={rootRef}
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 md:hidden ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      {/* Backdrop overlay */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-out drawer */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-[#0B0C10] border-l border-neutral-200 dark:border-white/10 p-6 flex flex-col justify-between shadow-2xl will-change-transform"
      >
        <div>
          {/* Header with logo & close button */}
          <div className="mobile-nav-item flex items-center justify-between pb-6 border-b border-neutral-200 dark:border-white/10">
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
                className="p-2 rounded-lg text-neutral-500 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5 transition-all hover:rotate-90 duration-200"
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
                  className={`mobile-nav-item flex items-center justify-between px-4 py-3 rounded-xl text-base font-body font-medium transition-all ${
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
            className="mobile-nav-item w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-neutral-950 text-white hover:bg-black dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 font-body font-semibold text-sm transition-all shadow-md"
          >
            <span>Let's Talk</span>
            <Icon icon="lucide:arrow-up-right" className="w-4 h-4 stroke-[2.5]" />
          </a>

          {/* Social Icons */}
          <div className="mobile-nav-item flex items-center justify-center gap-4 pt-2">
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
