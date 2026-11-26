import React from 'react';
import { Icon } from '@iconify/react';
import { personalInfo } from '../../../data/personalInfo';
import { Container } from '../../common/Container';
import { DeviceCluster } from '../../common/mockups/DeviceCluster';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#F9FAFB] via-[#F3F4F6] to-[#F9FAFB] dark:from-[#0B0C10] dark:via-[#0F1117] dark:to-[#0B0C10] transition-colors duration-300">
      {/* Dot Grid Background Pattern: Darker in light mode, Lighter in dark mode */}
      <div className="absolute inset-0 bg-[radial-gradient(#374151_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none opacity-45 dark:opacity-30" />

      {/* Subtle Ambient Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-neutral-200/30 dark:to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Authority, Value Proposition & Actionable CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            {/* Top Pill Badge */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-200/70 dark:bg-white/5 border border-neutral-300/60 dark:border-white/10 text-xs font-body font-medium text-neutral-600 dark:text-neutral-400">
                <Icon icon="mdi:code-tags" className="w-3.5 h-3.5 text-indigo-500" />
                <span>Product & Full Stack Engineer</span>
              </span>
            </div>

            {/* Main Editorial Headline (Space Grotesk 600) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold tracking-tight text-neutral-950 dark:text-white leading-[1.08] mb-5">
              Engineering{' '}
              <span className="text-stroke-2 text-neutral-950 dark:text-white">scalable</span>{' '}
              digital products with precision.
            </h1>

            {/* Value Proposition Subtext (Work Sans 400) */}
            <p className="text-base sm:text-lg font-body font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 max-w-xl">
              Hi, I'm <strong className="font-semibold text-neutral-950 dark:text-white">{personalInfo.name}</strong>. {personalInfo.tagline} Crafting end-to-end architectures from responsive web applications to scalable cloud microservices.
            </p>

            {/* Action Buttons Group */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-950 text-white hover:bg-black dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 font-body font-semibold text-sm shadow-md hover:scale-105 active:scale-95 transition-all duration-200 group"
              >
                <span>View Featured Work</span>
                <Icon icon="lucide:arrow-up-right" className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/80 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/10 font-body font-semibold text-sm transition-all duration-200"
              >
                <span>Let's Collaborate</span>
                <Icon icon="mdi:email-outline" className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
              </a>

              {personalInfo.resumeUrl && personalInfo.resumeUrl !== '#' && (
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white text-xs font-body font-medium transition-colors"
                >
                  <Icon icon="mdi:file-document-outline" className="w-4 h-4" />
                  <span>Resume</span>
                </a>
              )}
            </div>

            {/* Engineering Metrics Counter Grid */}
            {personalInfo.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-xl pt-6 border-t border-neutral-300/80 dark:border-white/10">
                {personalInfo.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-neutral-300/60 dark:border-white/5 shadow-sm"
                  >
                    <p className="text-xl sm:text-2xl font-heading font-semibold text-neutral-950 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="text-[11px] sm:text-xs font-body font-normal text-neutral-500 dark:text-neutral-400 mt-0.5 truncate">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Social Icons Quick Row */}
            <div className="flex items-center gap-2.5 mt-8">
              <span className="text-xs font-body font-medium text-neutral-400 mr-1 hidden sm:inline">Connect:</span>
              {personalInfo.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white dark:bg-white/5 border border-neutral-300/70 dark:border-white/10 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-400 dark:hover:border-white/25 shadow-sm transition-all hover:scale-105"
                  aria-label={social.name}
                >
                  <Icon icon={social.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Perspective Device Mockup Showcase (Laptop, Tablet, Phone) */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center w-full">
            <DeviceCluster className="w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
};
