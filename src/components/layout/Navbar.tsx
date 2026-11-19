import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { navLinks } from '../../data/navigation';
import { personalInfo } from '../../data/personalInfo';
import { useScrollHeader } from '../../hooks/useScrollHeader';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Container } from '../common/Container';
import { Logo } from '../common/Logo';
import { MobileNav } from './MobileNav';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrollHeader(20);
  const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
  const activeSection = useActiveSection(sectionIds, 120);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-gray-950/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/25 py-3.5'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Left: Logo & "Available for New Project" Pill */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex items-center gap-2 group transition-transform hover:scale-105"
                aria-label="Home"
              >
                <Logo size="sm" />
                <span className="hidden xl:inline text-base font-heading font-semibold text-white tracking-tight">
                  {personalInfo.name}
                </span>
              </a>

              {/* Status Pill Badge as shown in reference */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-body font-medium text-gray-200 shadow-sm backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-xs sm:text-xs tracking-tight">Available for New Project</span>
              </div>
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
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.badge && (
                      <span
                        className={`text-xs font-normal tracking-wide transition-colors ${
                          isActive
                            ? 'text-indigo-400 font-medium'
                            : 'text-gray-500 group-hover:text-gray-400'
                        }`}
                      >
                        [{link.badge}]
                      </span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right: "Let's Talk ↗" Pill Button & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-white text-gray-950 hover:bg-gray-200 font-body font-semibold text-sm shadow-md shadow-white/5 hover:scale-105 active:scale-95 transition-all duration-200 group/btn"
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
                className="md:hidden p-2 rounded-full text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
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
