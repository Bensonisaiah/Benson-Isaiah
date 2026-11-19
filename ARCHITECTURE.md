# Project Architecture & Guidelines

This document outlines the architecture, directory structure, design principles, and development workflows for the **Personal Portfolio** project.

---

## 1. Tech Stack Overview

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode enabled)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (imported via `@tailwindcss/vite`)
- **Icons**: [@iconify/react](https://iconify.design/) (Unified icon library supporting Material Design, Lucide, Tabler, etc.)
- **Fonts & Aesthetics**: Modern dark mode, glassmorphism, responsive typography, and subtle micro-interactions.

---

## 2. Directory Structure

```text
Main Portfolio/
├── public/                     # Static public assets (favicon, resume PDF, etc.)
├── src/
│   ├── assets/                 # Bundled static media (images, hero graphics)
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── common/             # Reusable atomic UI components
│   │   │   ├── Badge.tsx       # Tech pill / tag component
│   │   │   ├── Button.tsx      # Configurable button (primary, secondary, ghost)
│   │   │   ├── Card.tsx        # Glassmorphic card container
│   │   │   ├── Container.tsx   # Responsive max-width wrapper
│   │   │   └── SectionHeader.tsx # Standardized section title + badge + description
│   │   │
│   │   ├── layout/             # Application structural layout
│   │   │   ├── Navbar.tsx      # Desktop sticky navbar with glass blur
│   │   │   ├── MobileNav.tsx   # Mobile drawer with animated navigation
│   │   │   └── Footer.tsx      # Footer with copyright, links, and socials
│   │   │
│   │   └── sections/           # Modular one-page sections
│   │       ├── Hero/           # Introduction, headline, primary CTAs, social links
│   │       ├── About/          # Background, biography, core strengths
│   │       ├── Skills/         # Categorized skills (Frontend, Backend, Tools)
│   │       ├── Projects/       # Featured projects with tags, demos, & GitHub links
│   │       ├── Experience/     # Work history, roles, and timeline
│   │       └── Contact/        # Contact details & direct message form
│   │
│   ├── data/                   # Centralized content (Single Source of Truth)
│   │   ├── personalInfo.ts     # Bio, contact info, social handles
│   │   ├── navigation.ts       # Nav links and section anchors
│   │   ├── skills.ts           # Skill items and categories
│   │   ├── projects.ts         # Portfolio projects list
│   │   └── experience.ts       # Career milestones & education
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useActiveSection.ts # IntersectionObserver scroll-spy for active link
│   │   └── useScrollHeader.ts  # Scroll position detector for navbar styling
│   │
│   ├── types/                  # TypeScript interface contracts
│   │   └── index.ts            # Type definitions for data, props, and states
│   │
│   ├── utils/                  # Helper functions
│   │   └── helpers.ts          # Class merging, string utilities, smooth scrolling
│   │
│   ├── App.tsx                 # Main application orchestrator
│   ├── main.tsx                # React entry point
│   └── index.css               # Global stylesheet & Tailwind CSS entry
│
├── ARCHITECTURE.md             # This architecture documentation
├── README.md                   # Repository overview & setup instructions
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript project configuration
└── vite.config.ts              # Vite configuration
```

---

## 3. Core Architectural Principles

### 3.1 Content / Presentation Decoupling (`src/data/`)
Content (project names, dates, skills, links) is strictly separated from presentation logic. 
- **To add a project**: Edit `src/data/projects.ts`. No JSX changes required.
- **To update skills**: Edit `src/data/skills.ts`.
- **To update contact info or social links**: Edit `src/data/personalInfo.ts`.

### 3.2 Dual Navigation System (Desktop & Mobile)
- **Desktop (`Navbar.tsx`)**:
  - Pinned with sticky positioning (`sticky top-0 z-40`).
  - Automatically activates backdrop-blur when the user scrolls down (`useScrollHeader`).
  - Highlights active section using IntersectionObserver (`useActiveSection`).
- **Mobile (`MobileNav.tsx`)**:
  - Accessible via a clean hamburger menu toggle.
  - Full-screen / slide-out overlay designed for touch ergonomics.
  - Automatically closes upon clicking any navigation link or backdrop.
  - Prevents body background scrolling while open.

### 3.3 Atomic & Reusable Primitives (`src/components/common/`)
- All visual cards share the base `Card` styling (semi-transparent dark background, subtle border, smooth hover transitions).
- Headings share `SectionHeader` to guarantee identical spacing, badge styles, and typography hierarchy throughout all sections.
- Pill tags share `Badge` for consistent tech stack labeling across Projects, Skills, and Experience.

---

## 4. Data Models & TypeScript Contracts

All core data structures reside in `src/types/index.ts`:

- `Project`: Defines title, description, category, tags, live URL, GitHub URL, featured status, and image.
- `SkillCategory` & `SkillItem`: Defines categorized technical skills with Iconify icon strings and proficiency labels.
- `ExperienceItem`: Defines company, role, period, description bullet points, and technologies used.
- `PersonalInfo`: Defines name, title, bio, email, location, resume URL, and social media links.
- `NavLink`: Defines label, section ID anchor, and optional icon.

---

## 5. Adding New Sections or Content

1. **Add Data**: Define the new data structure in `src/types/index.ts` and add content in `src/data/`.
2. **Create Section Component**: Add `src/components/sections/YourSection/YourSection.tsx`.
3. **Register in Navigation**: Add the anchor ID to `src/data/navigation.ts`.
4. **Mount in App**: Import and place the section inside `src/App.tsx`.

---

## 6. Styling & Design Standards

- **Theme**: Premium Dark (`#030712` / `gray-950` with glassmorphic cards `bg-white/5` and `border-white/10`).
- **Accent Palette**: Electric Indigo / Cyan / Emerald highlights for interactive states.
- **Typography**: Clean, readable sans-serif with strong hierarchy (`text-3xl` to `text-5xl` for section titles).
- **Responsiveness**: Mobile-first design (single column on mobile, 2 columns on tablet `md:`, 3-4 columns on desktop `lg:`).
