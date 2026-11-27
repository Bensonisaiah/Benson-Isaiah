import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import { gsap, useGSAP } from '../../../lib/gsap';
import { personalInfo } from '../../../data/personalInfo';
import { Container } from '../../common/Container';
import { DeviceCluster } from '../../common/mockups/DeviceCluster';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.from('.hero-badge', { y: 18, opacity: 0, duration: 0.5, clearProps: 'transform,opacity' })
          .from('.hero-title', { y: 28, opacity: 0, duration: 0.65, clearProps: 'transform,opacity' }, '-=0.3')
          .fromTo(
            '.scalable-char',
            { opacity: 0, y: 8, clipPath: 'inset(0 100% 0 0)' },
            {
              opacity: 1,
              y: 0,
              clipPath: 'inset(0 0% 0 0)',
              duration: 0.35,
              stagger: 0.15,
              ease: 'power2.out',
              clearProps: 'transform,opacity,clipPath',
            },
            '-=0.15'
          )
          .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.55, clearProps: 'transform,opacity' }, '-=0.9')
          .from('.hero-cta', { y: 18, opacity: 0, duration: 0.5, stagger: 0.08, clearProps: 'transform,opacity' }, '-=0.35')
          .from('.hero-stat', { y: 20, opacity: 0, duration: 0.45, stagger: 0.07, clearProps: 'transform,opacity' }, '-=0.25')
          .from(
            '.hero-social',
            { scale: 0.7, opacity: 0, duration: 0.4, stagger: 0.06, ease: 'back.out(1.7)', clearProps: 'transform,opacity' },
            '-=0.3'
          );

        // Animated count-up for hero metrics
        const statNodes = gsap.utils.toArray<HTMLElement>('.hero-stat-value');
        statNodes.forEach((el) => {
          const raw = el.dataset.value || '';
          const match = raw.match(/^(\d+)(.*)$/);
          if (!match) return;
          const target = parseInt(match[1], 10);
          const suffix = match[2] || '';
          const counter = { val: 0 };
          gsap.to(counter, {
            val: target,
            duration: 1.35,
            delay: 0.4,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = `${Math.round(counter.val)}${suffix}`;
            },
          });
        });
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="relative pt-32 sm:pt-40 pb-5 sm:pb-10 overflow-hidden bg-gradient-to-b from-[#F9FAFB] via-[#F3F4F6] to-[#F9FAFB] dark:from-[#0B0C10] dark:via-[#0F1117] dark:to-[#0B0C10] transition-colors duration-300"
    >
      {/* Dot Grid Background Pattern: Darker in light mode, Lighter in dark mode */}
      <div className="absolute inset-0 bg-[radial-gradient(#374151_1.2px,transparent_1.2px)] dark:bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:24px_24px] pointer-events-none opacity-45 dark:opacity-30" />

      {/* Subtle Ambient Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-neutral-200/30 dark:to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Authority, Value Proposition & Actionable CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
            {/* Top Pill Badge */}
            <div className="hero-badge flex flex-wrap items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-200/70 dark:bg-white/5 border border-neutral-300/60 dark:border-white/10 text-xs font-body font-medium text-neutral-600 dark:text-neutral-400">
                <Icon icon="mdi:code-tags" className="w-3.5 h-3.5 text-indigo-500" />
                <span>Product & Full Stack Engineer</span>
              </span>
            </div>

            {/* Main Editorial Headline (Space Grotesk 600) */}
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-heading font-semibold tracking-tight text-neutral-950 dark:text-white leading-[1.08] mb-5">
              Engineering{' '}
              <span className="text-stroke-2 text-neutral-950 dark:text-white inline-flex">
                {'scalable'.split('').map((char, idx) => (
                  <span key={idx} className="scalable-char inline-block">
                    {char}
                  </span>
                ))}
              </span>{' '}
              digital products with precision.
            </h1>

            {/* Value Proposition Subtext (Work Sans 400) */}
            <p className="hero-subtitle text-base sm:text-lg font-body font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 max-w-xl">
              Hi, I'm <strong className="font-semibold text-neutral-950 dark:text-white">{personalInfo.name}</strong>. {personalInfo.tagline} Crafting end-to-end architectures from responsive web applications to scalable cloud microservices.
            </p>

            {/* Action Buttons Group */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="hero-cta w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-neutral-950 text-white hover:bg-black dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 font-body font-semibold text-sm shadow-md hover:scale-105 active:scale-95 transition-all duration-200 group"
              >
                <span>View Featured Work</span>
                <Icon icon="lucide:arrow-up-right" className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="hero-cta w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/80 dark:bg-white/5 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/10 font-body font-semibold text-sm transition-all duration-200"
              >
                <span>Let's Collaborate</span>
                <Icon icon="mdi:email-outline" className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
              </a>

              {personalInfo.resumeUrl && personalInfo.resumeUrl !== '#' && (
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-cta w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-full text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white text-xs font-body font-medium transition-colors"
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
                    className="hero-stat p-3 rounded-xl bg-white/70 dark:bg-white/[0.04] border border-neutral-300/60 dark:border-white/5 shadow-sm"
                  >
                    <p
                      data-value={stat.value}
                      className="hero-stat-value text-xl sm:text-2xl font-heading font-semibold text-neutral-950 dark:text-white"
                    >
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
                  className="hero-social w-9 h-9 rounded-full bg-white dark:bg-white/5 border border-neutral-300/70 dark:border-white/10 flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:border-neutral-400 dark:hover:border-white/25 shadow-sm transition-all hover:scale-105"
                  aria-label={social.name}
                >
                  <Icon icon={social.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: 3D Perspective Device Mockup Showcase (Laptop, Tablet, Phone) */}
          <div className="hero-device lg:col-span-6 xl:col-span-6 flex justify-center w-full">
            <DeviceCluster className="w-full" />
          </div>
        </div>
      </Container>
    </section>
  );
};
