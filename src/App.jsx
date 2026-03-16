import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsMarquee from './components/SkillsMarquee';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans selection:bg-brand-cyan selection:text-brand-black">
      <Navbar />
      <Hero />
      <About />
      <SkillsMarquee />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
