import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/footer';

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Project';
import Skills from './components/Skill';

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
