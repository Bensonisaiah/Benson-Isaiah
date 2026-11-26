import { ThemeProvider } from './context/ThemeProvider';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero/Hero';
import { About } from './components/sections/About/About';
import { Skills } from './components/sections/Skills/Skills';
import { Projects } from './components/sections/Projects/Projects';
import { Experience } from './components/sections/Experience/Experience';
import { Contact } from './components/sections/Contact/Contact';
import { Footer } from './components/layout/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F9FAFB] text-neutral-900 dark:bg-[#0B0C10] dark:text-white transition-colors duration-300 selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-950">
        {/* Navigation (Desktop & Mobile Drawer) */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
