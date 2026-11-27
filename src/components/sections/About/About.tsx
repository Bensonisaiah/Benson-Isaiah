import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import { gsap, useGSAP } from '../../../lib/gsap';
import { personalInfo } from '../../../data/personalInfo';
import { Container } from '../../common/Container';
import { SectionHeader } from '../../common/SectionHeader';
import { Card } from '../../common/Card';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.about-left-card', {
          y: 28,
          opacity: 0,
          duration: 0.65,
          stagger: 0.15,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.about-grid',
            start: 'top 84%',
            once: true,
          },
        });

        gsap.from('.about-strength', {
          y: 24,
          scale: 0.96,
          opacity: 0,
          duration: 0.55,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.about-strengths',
            start: 'top 84%',
            once: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );
  const highlights = [
    {
      icon: 'mdi:code-braces',
      title: 'Clean Architecture',
      description: 'Writing maintainable, modular, and self-documenting code built for scale.',
    },
    {
      icon: 'mdi:lightning-bolt',
      title: 'Performance First',
      description: 'Optimizing render cycles, bundle sizes, and network payloads for maximum speed.',
    },
    {
      icon: 'mdi:responsive',
      title: 'Adaptive UX/UI',
      description: 'Creating seamless, intuitive experiences across mobile, tablet, and desktop.',
    },
    {
      icon: 'mdi:database-sync',
      title: 'Full Stack Integration',
      description: 'Connecting sleek frontend views with secure, robust backend APIs and databases.',
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-12 sm:py-16 border-t border-neutral-200 dark:border-white/5 relative">
      <Container>
        <SectionHeader
          badge="About Me"
          badgeIcon="mdi:account-outline"
          title="Passion for Engineering & Quality"
          subtitle="A glimpse into my background, philosophy, and approach to modern software development."
        />

        <div className="about-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Portrait Card above "Who I Am" Card */}
          <div className="lg:col-span-7 space-y-6">
            {/* Portrait Feature Card */}
            <Card hoverEffect={false} className="about-left-card p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
                <div className="relative w-full sm:w-52 md:w-56 aspect-square rounded-2xl overflow-hidden shrink-0 border border-neutral-200 dark:border-white/10 bg-neutral-900 shadow-md">
                  <img
                    src="/Myimage.webp"
                    alt={personalInfo.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left space-y-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-semibold text-neutral-950 dark:text-white">
                      {personalInfo.name}
                    </h3>
                    <p className="text-sm font-body font-medium text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {personalInfo.title}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm font-body text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {personalInfo.tagline}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-950 text-white hover:bg-black dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 font-body font-semibold text-xs transition-all hover:scale-105"
                    >
                      <span>Let's Collaborate</span>
                      <Icon icon="lucide:arrow-up-right" className="w-3.5 h-3.5" />
                    </a>
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-white/10 border border-neutral-200/80 dark:border-white/10 text-xs font-body text-neutral-600 dark:text-neutral-300">
                      <Icon icon="mdi:map-marker-outline" className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Bio Card ("Who I Am") */}
            <Card hoverEffect={false} className="about-left-card space-y-4">
              <h3 className="text-xl font-heading font-semibold text-neutral-950 dark:text-white flex items-center gap-2">
                <Icon icon="mdi:card-account-details-outline" className="text-indigo-600 dark:text-indigo-400 w-6 h-6" />
                Who I Am
              </h3>
              {personalInfo.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-neutral-600 dark:text-neutral-300 font-body font-normal leading-relaxed text-sm sm:text-base"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-neutral-200 dark:border-white/10 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Icon icon="mdi:map-marker-outline" className="text-indigo-600 dark:text-indigo-400 w-4 h-4" />
                  {personalInfo.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon icon="mdi:email-outline" className="text-indigo-600 dark:text-indigo-400 w-4 h-4" />
                  {personalInfo.email}
                </span>
              </div>
            </Card>
          </div>

          {/* Right Column: Core Strengths Grid */}
          <div className="about-strengths lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="about-strength p-5 rounded-2xl bg-white/80 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-neutral-400 dark:hover:border-indigo-500/30 shadow-sm transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/10 text-neutral-800 dark:text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon icon={item.icon} className="w-5 h-5" />
                </div>
                <h4 className="text-base font-heading font-semibold text-neutral-950 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm font-body font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
