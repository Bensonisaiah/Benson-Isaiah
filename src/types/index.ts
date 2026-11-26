export interface NavLink {
  label: string;
  href: string; // e.g. '#about', '#projects'
  icon?: string;
  badge?: string; // e.g. '15+', '4', '3y+'
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // Iconify icon string e.g. 'mdi:github'
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string[];
  location: string;
  email: string;
  availableForHire: boolean;
  resumeUrl?: string;
  socials: SocialLink[];
  stats?: {
    label: string;
    value: string;
  }[];
}

export interface SkillItem {
  name: string;
  icon: string; // Iconify icon identifier
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: SkillItem[];
}

export type ProjectCategory = 'Full Stack' | 'Frontend' | 'Backend' | 'Mobile' | 'All';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: Exclude<ProjectCategory, 'All'>;
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface DeviceMockupItem {
  image?: string; // Image path or URL (e.g. '/mockups/laptop.png'). If empty, falls back to built-in product UI preview
  title: string;
  subtitle?: string;
  url?: string; // Display URL shown in browser bar (e.g. 'bensonisaiah.dev/platform')
}

export interface HeroMockupsConfig {
  laptop: DeviceMockupItem;
  tablet: DeviceMockupItem;
  phone: DeviceMockupItem;
}

