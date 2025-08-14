import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Academics from "./components/Academics";
import Skills from "./components/Skills";
import AnimatedSection from "./components/animatedsection";
import Experience from "./components/Experience";
import ProjectsInternship from "./components/ProjectsInternship";
import ContactForm from "./components/ContactForm";
import LoadingScreen from "./components/LoadingScreen";
import FloatingSocials from "./components/FloatingSocials";
import useScrollSpy from "./hooks/useScrollSpy";
import { FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // sections in order (used by Navbar + scroll spy)
  const sections = [
    { id: "hero", label: "Home" },
    { id: "academics", label: "Academics" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Work" },
    { id: "contact", label: "Contact" },
  ];
  const activeId = useScrollSpy(sections.map((s) => s.id));

  useEffect(() => {
    // Reduce loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen 
            isLoading={isLoading} 
            onLoadComplete={() => setIsLoading(false)} 
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Floating particles background */}
          <div className="floating-particles">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="particle" />
            ))}
          </div>

          {/* Navbar with scroll spy */}
          <Navbar sections={sections} activeId={activeId} />

          {/* Hero */}
          <Hero />

          {/* Academics */}
          <AnimatedSection id="academics" title="Academic Details" bg="var(--pearl)">
            <Academics />
          </AnimatedSection>

          {/* Skills */}
          <AnimatedSection id="skills" title="Skills" bg="rgba(248, 253, 253, 0.8)">
            <Skills />
          </AnimatedSection>

          {/* Experience */}
          <AnimatedSection id="experience" title="Experience" bg="var(--pearl)">
            <Experience />
          </AnimatedSection>

          {/* Projects & Internship */}
          <AnimatedSection id="projects" title="Projects & Internship" bg="rgba(248, 253, 253, 0.8)">
            <ProjectsInternship />
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection id="contact" title="Get In Touch" bg="var(--pearl)">
            <ContactForm />
          </AnimatedSection>

          {/* Enhanced Footer */}
          <footer className="footer">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="footer-content">
                <h3>Let's Connect</h3>
                <p>Feel free to reach out for collaborations or just a friendly hello!</p>
                
                <div className="footer-socials">
                  <motion.a 
                    href="mailto:anshitagupta2004@gmail.com" 
                    className="footer-social-link"
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    <FaEnvelope />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/anshita-gupta-b0839725a/"
                    className="footer-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-link"
                    whileHover={{ scale: 1.1, y: -3 }}
                  >
                    <FaInstagram />
                  </motion.a>
                </div>
              </div>
              
              <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Anshita Gupta. Made with 💙 for my amazing sister!</p>
              </div>
            </motion.div>
          </footer>

          {/* Floating Social Media */}
          <FloatingSocials />
        </>
      )}
    </div>
  );
}

export default App;