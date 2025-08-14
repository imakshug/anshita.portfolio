import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProfileSummary from "./components/ProfileSummary";
import Academics from "./components/Academics";
import Skills from "./components/Skills";
import AnimatedSection from "./components/animatedsection";
import Experience from "./components/Experience";
import ProjectsInternship from "./components/ProjectsInternship";
import useScrollSpy from "./hooks/useScrollSpy";
import { FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

function App() {
  const [modal, setModal] = useState(null);

  // sections in order (used by Navbar + scroll spy)
  const sections = [
    { id: "hero", label: "Home" },
    { id: "profile", label: "Profile" },
    { id: "academics", label: "Academics" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];
  const activeId = useScrollSpy(sections.map((s) => s.id));

  return (
    <div>
      {/* Navbar with scroll spy */}
      <Navbar sections={sections} activeId={activeId} />

      {/* Hero */}
      <Hero />

      {/* Academics */}
      <AnimatedSection id="academics" title="Academic Details" bg="#fbfbf9ff">
        <Academics />
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection id="skills" title="Skills" bg="#fff">
        <Skills />
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection id="experience" title="Experience" bg="#fff">
        <Experience />
      </AnimatedSection>

      {/* Projects & Internship */}
      <AnimatedSection id="projects" title="Projects & Internship" bg="#fff">
        <ProjectsInternship />
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection id="contact" title="Contact" bg="#fff">

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea rows="3" placeholder="Your Message" />
          <button type="submit">Send Message</button>
        </form>
      </AnimatedSection>

      {/* Footer with icons */}
      <footer className="footer">
        <div>
          <a href="mailto:anshitagupta2004@gmail.com" className="icon-link">
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/anshita-gupta-b0839725a/"
            className="icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
         <a
          href="https://www.instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-instagram"
        >
          <FaInstagram />
        </a>
        </div>
        <p>© {new Date().getFullYear()} Anshita Gupta Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
