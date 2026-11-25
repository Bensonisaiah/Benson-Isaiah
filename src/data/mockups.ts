import type { HeroMockupsConfig } from '../types';

/**
 * Hero Device Mockup Configuration
 *
 * How to change images:
 * 1. Place your screenshot images in the `public/mockups/` directory.
 *    - For the laptop: a webpage screenshot (the component adds the MacBook frame).
 *    - For the tablet & phone: use full-device static images (no component frame needed).
 *
 * 2. Update the `image` field below with the relative path (e.g. `image: '/mockups/my-project.jpg'`)
 *    OR paste any external image URL.
 *
 * 3. The `url` field is shown in the browser address bars of each device.
 */
export const heroMockupsConfig: HeroMockupsConfig = {
  laptop: {
    // Transparent-background static image of full Dell laptop with UI
    image: '/mockups/laptop-studguide.png',
    title: 'StudGuide — Interactive Learning Platform',
    subtitle: 'EdTech · 2800+ Online Courses · Desktop Web App',
    url: 'stud-guide.vercel.app',
  },
  tablet: {
    // Transparent-background static image of full iPad device with UI
    image: '/mockups/tablet-studguide.png',
    title: 'StudGuide — Interactive Learning Platform',
    subtitle: 'EdTech · 2800+ Online Courses · Responsive Web App',
    url: 'stud-guide.vercel.app',
  },
  phone: {
    // Transparent-background static image of full iPhone device with UI
    image: '/mockups/phone-studguide.png',
    title: 'StudGuide Mobile',
    subtitle: 'Progressive Web App · iOS & Android Optimized',
    url: 'stud-guide.vercel.app',
  },
};
