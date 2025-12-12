import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Reality from './components/sections/Reality';
import Problem from './components/sections/Problem';
import Solution from './components/sections/Solution';
import HowItWorks from './components/sections/HowItWorks';
import Features from './components/sections/Features';
import CitizenAlert from './components/sections/CitizenAlert';
import ForWho from './components/sections/ForWho';
import Impact from './components/sections/Impact';
import Roadmap from './components/sections/Roadmap';
import Partners from './components/sections/Partners';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Reality />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <CitizenAlert />
      <ForWho />
      <Impact />
      <Roadmap />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
