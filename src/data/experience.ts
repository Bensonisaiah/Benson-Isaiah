import type { ExperienceItem } from '../types';

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Full Stack Developer',
    company: 'Independent / Freelance',
    period: '2023 - Present',
    description: [
      'Engineered and delivered responsive web applications using React, TypeScript, and modern styling libraries.',
      'Designed and integrated scalable RESTful APIs with Node.js and PostgreSQL/Prisma backends.',
      'Optimized client-side rendering and asset bundle sizes, cutting initial page load times by over 35%.'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Git'],
  },
  {
    id: 'exp-2',
    role: 'Frontend Engineering Intern',
    company: 'SIWES Technical Training',
    period: '2022 - 2023',
    description: [
      'Collaborated on frontend UI feature sets and implemented accessible component designs.',
      'Integrated authentication flows, form validation, and reactive application state management.',
      'Participated in code reviews, bug fixes, and cross-browser quality assurance testing.'
    ],
    technologies: ['JavaScript', 'React', 'CSS3', 'REST APIs', 'Git'],
  },
];
