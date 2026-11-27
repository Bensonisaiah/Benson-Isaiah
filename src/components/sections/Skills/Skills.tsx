import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import { gsap, useGSAP } from '../../../lib/gsap';
import { skillCategories } from '../../../data/skills';
import { Container } from '../../common/Container';
import { SectionHeader } from '../../common/SectionHeader';
import { Card } from '../../common/Card';

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.skill-category-card', {
          y: 30,
          scale: 0.96,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 84%',
            once: true,
          },
        });

        gsap.from('.skill-item', {
          y: 14,
          opacity: 0,
          duration: 0.4,
          stagger: 0.03,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%',
            once: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="skills" className="py-12 sm:py-16 border-t border-neutral-200 dark:border-white/5 relative">
      <Container>
        <SectionHeader
          badge="Tech Stack"
          badgeIcon="mdi:code-tags"
          title="Skills & Technologies"
          subtitle="The frameworks, tools, and languages I use to build scalable products."
        />

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="skill-category-card flex flex-col h-full">
              {/* Category Header */}
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-neutral-200 dark:border-white/10">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/10 text-neutral-800 dark:text-indigo-400 flex items-center justify-center">
                  <Icon icon={category.icon} className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-neutral-950 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3 flex-grow">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-item p-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200/80 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/10 transition-all flex items-center gap-3 group"
                  >
                    <Icon
                      icon={skill.icon}
                      className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform"
                    />
                    <div className="truncate">
                      <p className="text-xs sm:text-sm font-body font-medium text-neutral-900 dark:text-white truncate">
                        {skill.name}
                      </p>
                      {skill.level && (
                        <p className="text-[10px] font-body font-normal text-neutral-500 dark:text-neutral-400 truncate">
                          {skill.level}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
