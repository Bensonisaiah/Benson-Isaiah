import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { projects } from '../../../data/projects';
import type { ProjectCategory } from '../../../types';
import { Container } from '../../common/Container';
import { SectionHeader } from '../../common/SectionHeader';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';

const categories: ProjectCategory[] = ['All', 'Full Stack', 'Frontend'];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-neutral-200 dark:border-white/5 relative">
      <Container>
        <SectionHeader
          badge="Portfolio"
          badgeIcon="mdi:folder-multiple-outline"
          title="Featured Projects"
          subtitle="Explore some of the web platforms, applications, and tools I have developed."
        />

        {/* Filter buttons */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-body font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 shadow-md font-semibold'
                  : 'bg-neutral-100 text-neutral-600 hover:text-neutral-950 dark:bg-white/5 dark:text-neutral-400 dark:hover:text-white border border-neutral-200 dark:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full group">
              {/* Card top banner / preview box */}
              <div className="h-44 rounded-xl bg-gradient-to-tr from-neutral-100 to-neutral-200 dark:from-neutral-900/90 dark:to-neutral-950 border border-neutral-200 dark:border-white/10 flex items-center justify-center relative overflow-hidden mb-5">
                <div className="text-center p-4">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-white dark:bg-white/10 shadow-sm flex items-center justify-center text-neutral-800 dark:text-indigo-400 mb-2">
                    <Icon icon="mdi:rocket-launch-outline" className="w-6 h-6" />
                  </div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral-600 dark:text-neutral-400">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-heading font-medium text-neutral-950 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-body font-normal text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} label={tag} variant="secondary" />
                    ))}
                  </div>

                  {/* Actions (Demo & GitHub) */}
                  <div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-white/10">
                    {project.demoUrl && project.demoUrl !== '#' && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                      >
                        <Icon icon="mdi:open-in-new" className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                      >
                        <Icon icon="mdi:github" className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
