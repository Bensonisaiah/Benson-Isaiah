import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: 'mdi:monitor-dashboard',
    skills: [
      { name: 'React', icon: 'mdi:react', level: 'Expert' },
      { name: 'TypeScript', icon: 'mdi:language-typescript', level: 'Advanced' },
      { name: 'Tailwind CSS', icon: 'mdi:tailwind', level: 'Expert' },
      { name: 'Next.js', icon: 'ri:nextjs-fill', level: 'Advanced' },
      { name: 'HTML5 / CSS3', icon: 'mdi:language-html5', level: 'Expert' },
      { name: 'Redux / Zustand', icon: 'simple-icons:redux', level: 'Advanced' },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: 'mdi:server-network',
    skills: [
      { name: 'Node.js', icon: 'mdi:nodejs', level: 'Advanced' },
      { name: 'Express.js', icon: 'simple-icons:express', level: 'Advanced' },
      { name: 'PostgreSQL', icon: 'simple-icons:postgresql', level: 'Intermediate' },
      { name: 'Prisma ORM', icon: 'simple-icons:prisma', level: 'Advanced' },
      { name: 'REST APIs', icon: 'mdi:api', level: 'Expert' },
      { name: 'JWT & Auth', icon: 'mdi:shield-key-outline', level: 'Advanced' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: 'mdi:tools',
    skills: [
      { name: 'Git & GitHub', icon: 'mdi:git', level: 'Expert' },
      { name: 'Vite', icon: 'simple-icons:vite', level: 'Advanced' },
      { name: 'Docker', icon: 'mdi:docker', level: 'Intermediate' },
      { name: 'Postman', icon: 'simple-icons:postman', level: 'Advanced' },
      { name: 'VS Code', icon: 'simple-icons:visualstudiocode', level: 'Expert' },
      { name: 'Linux / Bash', icon: 'simple-icons:gnubash', level: 'Intermediate' },
    ],
  },
];
