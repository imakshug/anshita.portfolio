import { Mail, Award, Briefcase, User, Sparkles, Linkedin, Instagram, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';
import anshitaImg from './assets/anshita.jpg';

import ProfileSummary from './components/ProfileSummary';
import AcademicDetails from './components/AcademicDetails';
import SkillsTechnical from './components/SkillsTechnical';
import Experience from './components/Experience';
import ProjectsInternship from './components/ProjectsInternship';
import Certifications from './components/Certifications';
import Positions from './components/Positions';
import Conferences from './components/Conferences';
import VolunteerWork from './components/VolunteerWork';
import ContactSection from './components/ContactSection';

function App() {
  return (
  <div className="min-h-screen bg-blush flex font-sans">
      {/* Sidebar */}
      <aside className="w-80 bg-white/90 shadow-xl rounded-r-3xl flex flex-col items-center py-10 px-6 gap-8 border-r-2 border-blush">
        <div className="flex flex-col items-center gap-2">
          <img src={anshitaImg} alt="Anshita Gupta" className="rounded-full w-20 h-20 object-cover border-4 border-gold shadow-lg mb-2" />
          <h1 className="text-2xl font-bold text-olive">Anshita Gupta</h1>
          <span className="text-md text-gold">PGDM | Marketing & Finance</span>
        </div>
        <nav className="flex flex-col gap-4 w-full mt-4">
          <a href="#profile" className="text-gold font-semibold hover:text-rose transition">Profile</a>
          <a href="#academics" className="text-gold font-semibold hover:text-rose transition">Academics</a>
          <a href="#skills" className="text-gold font-semibold hover:text-rose transition">Skills</a>
          <a href="#experience" className="text-gold font-semibold hover:text-rose transition">Experience</a>
          <a href="#projects" className="text-gold font-semibold hover:text-rose transition">Projects</a>
          <a href="#contact" className="text-gold font-semibold hover:text-rose transition">Contact</a>
        </nav>
        <div className="flex gap-4 mt-6">
          <a href="https://www.linkedin.com/in/anshita-gupta-b0839725a/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition">
            <Linkedin className="text-sky" size={22} />
          </a>
          <a href="https://www.instagram.com/anshiita.g/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition">
            <Instagram className="text-rose" size={22} />
          </a>
          <a href="https://github.com/anshitagupta2004" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition">
            <Github className="text-olive" size={22} />
          </a>
        </div>
        <a href="assets/Anshita_Cv.pdf" download className="bg-gold text-olive px-4 py-2 rounded-full shadow hover:bg-rose hover:text-white transition font-semibold mt-4">Download Resume</a>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-8 py-12 grid grid-cols-1 gap-8">
  <section id="profile" className="bg-white rounded-2xl shadow p-8 border-2 border-gold">
          <ProfileSummary />
        </section>
        <section id="academics" className="bg-white rounded-2xl shadow p-8 border border-blush">
  <section id="academics" className="bg-white rounded-2xl shadow p-8 border-2 border-gold">
          <AcademicDetails />
        </section>
        <section id="skills" className="bg-white rounded-2xl shadow p-8 border border-blush">
  <section id="skills" className="bg-white rounded-2xl shadow p-8 border-2 border-gold">
          <SkillsTechnical />
        </section>
        <section id="experience" className="bg-white rounded-2xl shadow p-8 border border-blush">
  <section id="experience" className="bg-white rounded-2xl shadow p-8 border-2 border-gold">
          <Experience />
        </section>
        <section id="projects" className="bg-white rounded-2xl shadow p-8 border border-blush">
  <section id="projects" className="bg-white rounded-2xl shadow p-8 border-2 border-gold">
          <ProjectsInternship />
        </section>
        <section className="bg-white rounded-2xl shadow p-8 border border-blush">
  <section className="bg-white rounded-2xl shadow p-8 border-2 border-gold">
  <section className="bg-white rounded-2xl shadow p-8 border-2 border-gold">
  <section className="bg-white rounded-2xl shadow p-8 border-2 border-gold">
  <section className="bg-white rounded-2xl shadow p-8 border-2 border-gold">
          <Certifications />
        </section>
        <section className="bg-white rounded-2xl shadow p-8 border border-blush">
          <Positions />
        </section>
        <section className="bg-white rounded-2xl shadow p-8 border border-blush">
          <Conferences />
        </section>
        <section className="bg-white rounded-2xl shadow p-8 border border-blush">
          <VolunteerWork />
        </section>
        <section id="contact" className="bg-white rounded-2xl shadow p-8 border border-blush">
  <section id="contact" className="bg-white rounded-2xl shadow p-8 border-2 border-gold">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-80 w-[calc(100%-20rem)] py-4 bg-white/80 rounded-t-2xl shadow flex justify-center gap-6 text-gray-500">
        <span>&copy; {new Date().getFullYear()} Anshita Gupta Portfolio</span>
        <a href="https://www.linkedin.com/in/anshita-gupta-b0839725a/" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition">
          <Linkedin className="text-sky" size={20} />
        </a>
        <a href="https://instagram.com/anshita" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition">
          <Instagram className="text-rose" size={20} />
        </a>
        <a href="https://github.com/anshitagupta2004" target="_blank" rel="noopener noreferrer" className="hover:scale-105 transition">
          <Github className="text-olive" size={20} />
        </a>
    </div>
  );
}

export default App;
