import React from 'react';
import { Icon } from '@iconify/react';
import { personalInfo } from '../../../data/personalInfo';
import { Container } from '../../common/Container';
import { SectionHeader } from '../../common/SectionHeader';
import { Card } from '../../common/Card';

export const About: React.FC = () => {
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
    <section id="about" className="py-20 sm:py-28 border-t border-white/5 relative">
      <Container>
        <SectionHeader
          badge="About Me"
          badgeIcon="mdi:account-outline"
          title="Passion for Engineering & Quality"
          subtitle="A glimpse into my background, philosophy, and approach to modern software development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Bio text cards */}
          <div className="lg:col-span-7 space-y-6">
            <Card hoverEffect={false} className="space-y-4">
              <h3 className="text-xl font-heading font-semibold text-white flex items-center gap-2">
                <Icon icon="mdi:card-account-details-outline" className="text-indigo-400 w-6 h-6" />
                Who I Am
              </h3>
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index} className="text-gray-300 font-body font-normal leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Icon icon="mdi:map-marker-outline" className="text-indigo-400 w-4 h-4" />
                  {personalInfo.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon icon="mdi:email-outline" className="text-indigo-400 w-4 h-4" />
                  {personalInfo.email}
                </span>
              </div>
            </Card>
          </div>

          {/* Core Strengths Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon icon={item.icon} className="w-5 h-5" />
                </div>
                <h4 className="text-base font-heading font-semibold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm font-body font-normal text-gray-400 leading-relaxed">
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
