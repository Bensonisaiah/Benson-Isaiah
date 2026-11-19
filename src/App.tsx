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
    <div className="min-h-screen bg-gray-950 text-white selection:bg-indigo-500/30 selection:text-indigo-200">
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
  );
}