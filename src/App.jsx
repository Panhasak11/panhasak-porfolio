import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Skill from './components/Skill/Skill'
import Contact from './components/Program/Languages'
import About from './components/About/About'
import ScrollManager from './components/Navbar/ScrollManager'
import Section from './components/Navbar/Section'
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Footer from "./components/Navbar/Footer";

function App() {

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 100,
    });
  }, []);

  return (
      <Router>
        <Navbar />
        <ScrollManager />
        <div className="w-full  overflow-x-hidden ">
          <Section name="home" color="bg-primary" text="Home Section">
            <Home />
          </Section>
          <Section name="about" color="bg-primary" text="About Section">
            <About />
          </Section>
          <Section name="skill" color="bg-primary" text="Skill Section">
            <Skill />
          </Section>
          <Section name="contact" color="bg-primary" text="Languages Section">
            <Contact />
          </Section>
        </div>
        <Footer />
      </Router>
  )
}

export default App
