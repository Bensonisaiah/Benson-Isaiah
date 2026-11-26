import React from 'react';
import { Icon } from '@iconify/react';
import { experiences } from '../../../data/experience';
import { Container } from '../../common/Container';
import { SectionHeader } from '../../common/SectionHeader';
import { Badge } from '../../common/Badge';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-neutral-200 dark:border-white/5 relative">
      <Container>
        <SectionHeader
          badge="Career Journey"
          badgeIcon="mdi:briefcase-outline"
          title="Work Experience"
          subtitle="My professional path, milestones, and development contributions."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white dark:bg-[#0B0C10] border-2 border-indigo-600 dark:border-indigo-500 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                </div>

                {/* Content Box */}
                <div className="p-6 rounded-2xl bg-white/80 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-indigo-500/30 shadow-sm transition-all">
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
