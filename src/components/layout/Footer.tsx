import React from 'react';
import { Icon } from '@iconify/react';
import { personalInfo } from '../../data/personalInfo';
import { navLinks } from '../../data/navigation';
import { Container } from '../common/Container';
import { Logo } from '../common/Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-white/10 bg-neutral-100/70 dark:bg-[#0B0C10]/90 pt-16 pb-12 transition-colors duration-300">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-neutral-200 dark:border-white/10">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <Logo size="sm" />
              <span className="text-xl font-heading font-semibold text-neutral-950 dark:text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm font-body font-normal text-neutral-600 dark:text-gray-400 max-w-sm">
              {personalInfo.title} — Building scalable, responsive, and intuitive web applications.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-body font-medium text-neutral-600 dark:text-gray-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            {personalInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-600 dark:text-gray-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-200/70 dark:hover:bg-white/10 shadow-sm transition-all hover:-translate-y-0.5"
                aria-label={social.name}
              >
                <Icon icon={social.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-body font-normal text-neutral-500 dark:text-gray-500 text-center">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React 19, TypeScript & Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
};
