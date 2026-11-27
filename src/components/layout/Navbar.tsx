import React, { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { gsap, useGSAP } from '../../lib/gsap';
import { navLinks } from '../../data/navigation';
import { personalInfo } from '../../data/personalInfo';
import { useScrollHeader } from '../../hooks/useScrollHeader';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useTheme } from '../../hooks/useTheme';
import { Container } from '../common/Container';
import { Logo } from '../common/Logo';
import { MobileNav } from './MobileNav';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const isScrolled = useScrollHeader(20);
  const { theme, toggleTheme } = useTheme();
  const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
  const activeSection = useActiveSection(sectionIds, 120);

  useGSAP(() => {
    if (!progressRef.current) return;
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.25,
      },
    });
  });

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-[#0B0C10]/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-white/10 shadow-sm dark:shadow-black/25 py-3.5'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        {/* Top Scroll Progress Bar */}
        <div
          ref={progressRef}
          className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-emerald-400 to-indigo-500 origin-left scale-x-0 pointer-events-none"
        />
        <Container>
          <div className="flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 group transition-transform hover:scale-105"
                aria-label="Home"
              >
                <Logo size="sm" />
                <span className="hidden xl:inline text-base font-heading font-semibold text-neutral-950 dark:text-white tracking-tight">
                  {personalInfo.name}
                </span>
              </a>
            </div>

            {/* Center: Minimalist Floating Nav Links with [Count] Badges */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9 xl:gap-11">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`group flex items-baseline gap-1 text-sm font-body font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-neutral-950 dark:text-white font-semibold'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span
                        className={`text-xs font-normal tracking-wide transition-colors ${
                          isActive
                            ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                            : 'text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300'
                        }`}
                      >
                        [{link.badge}]
                      </span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right: Theme Toggle & "Let's Talk ↗" Pill Button & Mobile Hamburger */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Theme Toggle (Light / Dark) */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/70 dark:hover:bg-white/10 border border-neutral-300/80 dark:border-white/10 transition-all duration-200"
                aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {theme === 'dark' ? (
                  <Icon icon="mdi:white-balance-sunny" className="w-4 h-4 text-amber-400" />
                ) : (
                  <Icon icon="mdi:moon-waning-crescent" className="w-4 h-4 text-neutral-700" />
                )}
              </button>

              {/* Pill Button: Let's Talk ↗ */}
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-neutral-950 text-white hover:bg-black dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 font-body font-semibold text-sm shadow-md hover:scale-105 active:scale-95 transition-all duration-200 group/btn"
              >
                <span>Let's Talk</span>
                <Icon
                  icon="lucide:arrow-up-right"
                  className="w-4 h-4 stroke-[2.5] transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                />
              </a>

              {/* Hamburger Button for Mobile */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-full text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/70 dark:hover:bg-white/10 border border-neutral-300/80 dark:border-white/10 transition-colors"
                aria-label="Open navigation menu"
              >
                <Icon icon="mdi:menu" className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};
