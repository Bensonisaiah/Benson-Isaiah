import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import { gsap, useGSAP } from '../../../lib/gsap';
import { experiences } from '../../../data/experience';
import { Container } from '../../common/Container';
import { SectionHeader } from '../../common/SectionHeader';
import { Badge } from '../../common/Badge';

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          '.timeline-progress',
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.timeline-container',
              start: 'top 75%',
              end: 'bottom 70%',
              scrub: 0.6,
            },
          }
        );

        gsap.utils.toArray<HTMLElement>('.exp-item').forEach((item) => {
          const dot = item.querySelector('.exp-dot');
          const card = item.querySelector('.exp-card');
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: 'top 84%',
              once: true,
            },
          });

          if (dot) {
            tl.from(dot, { scale: 0, duration: 0.4, ease: 'back.out(2)', clearProps: 'transform' });
          }
          if (card) {
            tl.from(card, { x: 28, opacity: 0, duration: 0.55, ease: 'power3.out', clearProps: 'transform,opacity' }, '-=0.25');
          }
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="experience" className="py-12 sm:py-16 border-t border-neutral-200 dark:border-white/5 relative">
      <Container>
        <SectionHeader
          badge="Career Journey"
          badgeIcon="mdi:briefcase-outline"
          title="Work Experience"
          subtitle="My professional path, milestones, and development contributions."
        />

        <div className="max-w-3xl mx-auto">
          <div className="timeline-container relative border-l-2 border-indigo-500/20 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
            {/* Animated Glowing Timeline Progress Line */}
            <div className="timeline-progress absolute -left-[2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-emerald-400 to-indigo-500 origin-top" />

            {experiences.map((exp) => (
              <div key={exp.id} className="exp-item relative group">
                {/* Timeline node icon */}
                <div className="exp-dot absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white dark:bg-[#0B0C10] border-2 border-indigo-600 dark:border-indigo-500 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                </div>

                {/* Content Box */}
                <div className="exp-card p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-indigo-500/30 shadow-sm transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-lg font-heading font-semibold text-neutral-950 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-body font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm font-body font-medium text-neutral-600 dark:text-neutral-300 mb-4 flex items-center gap-2">
                    <Icon icon="mdi:domain" className="w-4 h-4 text-neutral-400" />
                    {exp.company}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((point, index) => (
                      <li
                        key={index}
                        className="text-sm font-body font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-indigo-600 dark:text-indigo-400 mt-1">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-200 dark:border-white/10">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} label={tech} variant="outline" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
