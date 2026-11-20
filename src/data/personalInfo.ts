import type { PersonalInfo } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Benson Isaiah',
  title: 'Full Stack Software Engineer',
  tagline: 'Crafting responsive, high-performance web applications with clean code and modern architecture.',
  location: 'Nigeria',
  email: 'isaiahobenson@gmail.com',
  availableForHire: true,
  resumeUrl: '#',
  bio: [
    'I am a passionate Full Stack Engineer specializing in building modern web applications with React, TypeScript, Node.js, and cloud ecosystems.',
    'I focus on writing clean, scalable code and delivering seamless user experiences from frontend interfaces to robust backend architectures.',
    'Always curious, eager to solve complex problems, and constantly exploring cutting-edge web technologies.'
  ],
  socials: [
    {
      name: 'GitHub',
      url: 'https://github.com/Bensonisaiah',
      icon: 'mdi:github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/bensonisaiah',
      icon: 'mdi:linkedin',
    },
    {
      name: 'Twitter / X',
      url: 'https://twitter.com/bensonisaiah',
      icon: 'mdi:twitter',
    },
    {
      name: 'Email',
      url: 'mailto:isaiahobenson@gmail.com',
      icon: 'mdi:email-outline',
    },
  ],
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Core Technologies', value: '10+' },
    { label: 'Client Satisfaction', value: '100%' },
  ],
};
