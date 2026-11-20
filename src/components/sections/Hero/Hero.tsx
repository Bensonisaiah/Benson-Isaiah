import React from 'react';
import { Icon } from '@iconify/react';
import { personalInfo } from '../../../data/personalInfo';
import { Container } from '../../common/Container';
import { Button } from '../../common/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[550px] h-96 sm:h-[550px] bg-gradient-to-tr from-indigo-600/20 to-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container>
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-semibold tracking-tight text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Subtitle / Role */}
          <p className="text-xl sm:text-2xl font-heading font-medium text-gray-300 mb-4">
            {personalInfo.title}
          </p>

          {/* Tagline */}
          <p className="text-base sm:text-lg font-body font-normal text-gray-400 max-w-2xl mb-10 leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              icon="mdi:arrow-right"
              iconPosition="right"
            >
              View My Work
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              icon="mdi:email-outline"
            >
              Contact Me
            </Button>
            {personalInfo.resumeUrl && personalInfo.resumeUrl !== '#' && (
              <Button
                href={personalInfo.resumeUrl}
                isExternal
                variant="outline"
                size="lg"
                icon="mdi:file-document-outline"
              >
                Resume
              </Button>
            )}
          </div>

          {/* Key Stats Counter Grid */}
          {personalInfo.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl pt-8 border-t border-white/10">
              {personalInfo.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm text-center"
                >
                  <p className="text-2xl sm:text-3xl font-heading font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm font-body font-normal text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Social Icons row */}
          <div className="flex items-center gap-4 mt-10">
            {personalInfo.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all hover:-translate-y-1"
                aria-label={social.name}
              >
                <Icon icon={social.icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
