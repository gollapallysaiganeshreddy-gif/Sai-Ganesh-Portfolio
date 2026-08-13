import { motion } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import WhatIBuild from './sections/WhatIBuild';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';

export default function App() {
  const { isDark, toggle } = useTheme(true);

  return (
    <div className="shell min-h-screen relative">
      <div className="mesh" />
      <div className="mist one" />
      <div className="mist two" />
      <div className="mist three" />
      <div className="grain" />

      <Navbar isDark={isDark} toggleTheme={toggle} />

      <main className="relative z-10 pt-24 md:pt-28">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.55 }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <WhatIBuild />
          <Education />
          <Achievements />
          <Contact />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
