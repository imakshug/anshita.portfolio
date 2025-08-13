
 import { Mail, Award, Briefcase, User, Sparkles } from 'lucide-react';
import './App.css';

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-pink-50 text-gray-900">
      <header className="py-8 text-center flex flex-col items-center">
        <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl font-bold mb-2 flex justify-center items-center gap-2">
          <Sparkles className="inline-block text-pink-500" size={32} /> ANSHITA GUPTA
        </motion.h1>
  <img src="/anshita%20copy.jpg" alt="Anshita Gupta" className="rounded-full w-32 h-32 object-cover shadow-lg mb-2" />
        <p className="text-lg">PGDM Dual Specialization: Marketing & Finance</p>
        <a href="https://www.linkedin.com/in/anshita-gupta-b0839725a/" target="_blank" className="text-blue-600 underline">LinkedIn</a>
  <a href="/Anshita_Cv.pdf" download className="text-pink-600 underline mt-2">Download Resume</a>
      </header>

      <main className="max-w-3xl mx-auto px-4 space-y-12">
        <ProfileSummary />
        <AcademicDetails />
        <SkillsTechnical />
        <Experience />
        <ProjectsInternship />
        <Certifications />
        <Positions />
        <Conferences />
        <VolunteerWork />
        <ContactSection />
      </main>

      <footer className="py-6 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Anshita Gupta Portfolio
      </footer>
    </div>
  );
}

export default App;
