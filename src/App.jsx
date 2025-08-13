import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfileSummary from './components/ProfileSummary';
import Academics from './components/Academics';
import Skills from './components/Skills';

// Icon placeholders (replace with Lucide or SVGs for full design)
const icons = {
  negotiation: '🤝',
  communication: '💬',
  problemSolving: '💡',
};

function App() {
  const [modal, setModal] = useState(null);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blush via-gold to-sky font-sans flex flex-col items-center">
  <Navbar />
  <Hero />
  <ProfileSummary />
  <Academics />
  <Skills />
      {/* Hero/Profile Section */}
  {/* ...existing code... */}
      {/* Profile Summary */}
  <section className="max-w-3xl w-full bg-white rounded-xl shadow-xl p-8 mt-12 border border-gold">
  <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl font-bold text-olive uppercase tracking-widest font-poppins mb-4">Profile Summary</motion.h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <p className="text-gray-700 text-lg">PGDM student with dual specialization in Marketing & Finance. Passionate about negotiation, communication, and problem-solving. Adept at creative thinking and leadership, with a strong drive for results and professional growth.</p>
          <div className="flex flex-col gap-4 items-center justify-center">
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center bg-gold/20 rounded-lg p-4 shadow hover:shadow-lg transition"><span className="text-gold text-2xl mb-1">{icons.negotiation}</span><span className="text-olive font-semibold">Negotiation</span></motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center bg-sky/20 rounded-lg p-4 shadow hover:shadow-lg transition"><span className="text-sky text-2xl mb-1">{icons.communication}</span><span className="text-olive font-semibold">Communication</span></motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center bg-rose/20 rounded-lg p-4 shadow hover:shadow-lg transition"><span className="text-rose text-2xl mb-1">{icons.problemSolving}</span><span className="text-olive font-semibold">Problem-Solving</span></motion.div>
          </div>
        </div>
      </section>
      {/* Academics Timeline */}
  <section className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 mt-12 border-2 border-gold">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl font-bold text-olive uppercase tracking-widest font-poppins mb-6">Academics</motion.h2>
        <ol className="relative border-l-4 border-gold pl-8">
          <motion.li initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="mb-8"><div className="flex flex-col md:flex-row md:items-center gap-2"><span className="text-lg font-bold text-rose">PGDM (2023-2025)</span><span className="text-md text-olive">IMT Ghaziabad</span><span className="text-md text-gold">CGPA: 8.5</span></div></motion.li>
          <motion.li initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="mb-8"><div className="flex flex-col md:flex-row md:items-center gap-2"><span className="text-lg font-bold text-rose">B.Com (2020-2023)</span><span className="text-md text-olive">University of Delhi</span><span className="text-md text-gold">CGPA: 8.2</span></div></motion.li>
          <motion.li initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}><div className="flex flex-col md:flex-row md:items-center gap-2"><span className="text-lg font-bold text-rose">Class XII (2019)</span><span className="text-md text-olive">CBSE</span><span className="text-md text-gold">92%</span></div></motion.li>
        </ol>
      </section>
      {/* Skills Section */}
  <section className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 mt-12 border-2 border-gold">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl font-bold text-olive uppercase tracking-widest font-poppins mb-4">Skills</motion.h2>
        <div className="flex flex-wrap gap-3 mb-4">
          {['Creativity','Decision Making','Leadership','Problem-Solving'].map(skill => (
            <motion.span whileHover={{ scale: 1.08 }} className="chip" key={skill}>{skill}</motion.span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {['Excel','Tally ERP 9.0','Microsoft Tools','Power BI'].map(skill => (
            <motion.span whileHover={{ scale: 1.08 }} className="chip" key={skill}>{skill}</motion.span>
          ))}
        </div>
      </section>
      {/* Experience Section */}
  <section className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 mt-12 border-2 border-gold">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl font-bold text-olive uppercase tracking-widest font-poppins mb-4">Experience</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div whileHover={{ scale: 1.03 }} className="bg-blush rounded-xl p-4 shadow flex flex-col">
            <span className="text-lg font-bold text-rose">Marketing Intern</span>
            <span className="text-md text-olive">ABC Corp</span>
            <span className="text-md text-gold">May 2024 - July 2024</span>
            <ul className="list-disc ml-5 text-gray-700 text-sm mt-2">
              <li>Conducted market research and competitor analysis</li>
              <li>Assisted in campaign planning and execution</li>
            </ul>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03 }} className="bg-blush rounded-xl p-4 shadow flex flex-col">
            <span className="text-lg font-bold text-rose">Finance Intern</span>
            <span className="text-md text-olive">XYZ Ltd</span>
            <span className="text-md text-gold">Jan 2024 - Mar 2024</span>
            <ul className="list-disc ml-5 text-gray-700 text-sm mt-2">
              <li>Supported financial reporting and analysis</li>
              <li>Worked on budgeting and forecasting tasks</li>
            </ul>
          </motion.div>
        </div>
      </section>
      {/* Projects Section */}
  <section className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 mt-12 border-2 border-gold">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl font-bold text-olive uppercase tracking-widest font-poppins mb-4">Projects</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{
            title: 'Market Segmentation Analysis',
            org: 'IMT Ghaziabad',
            year: '2025',
            desc: 'Analyzed customer segments and developed targeted marketing strategies using Power BI.'
          },{
            title: 'Financial Dashboard',
            org: 'University of Delhi',
            year: '2023',
            desc: 'Created interactive dashboards for financial data visualization and reporting.'
          }].map((proj, idx) => (
            <motion.div whileHover={{ scale: 1.05 }} className="bg-blush rounded-xl p-4 shadow flex flex-col cursor-pointer" key={proj.title} onClick={() => setModal(idx)}>
              <span className="text-lg font-bold text-rose">{proj.title}</span>
              <span className="text-md text-olive">{proj.org}</span>
              <span className="text-md text-gold">{proj.year}</span>
              <p className="text-gray-700 text-sm mt-2">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
        {/* Modal for project details */}
        {modal !== null && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-2xl p-8 shadow-xl max-w-md w-full">
              <button className="absolute top-4 right-6 text-rose text-xl font-bold" onClick={() => setModal(null)}>&times;</button>
              <h3 className="text-xl font-bold text-olive mb-2">{modal === 0 ? 'Market Segmentation Analysis' : 'Financial Dashboard'}</h3>
              <p className="text-gray-700">{modal === 0 ? 'Full details about Market Segmentation Analysis project...' : 'Full details about Financial Dashboard project...'}</p>
            </motion.div>
          </div>
        )}
      </section>
      {/* Certifications Section */}
  <section className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 mt-12 border-2 border-gold">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl font-bold text-olive uppercase tracking-widest font-poppins mb-4">Certifications</motion.h2>
        <div className="flex flex-wrap gap-4">
          {['Power BI Certified','Excel Specialist','Tally Expert'].map(cert => (
            <motion.div whileHover={{ rotateY: 180 }} className="bg-gold rounded-full px-6 py-3 text-olive font-bold shadow cursor-pointer hover:bg-rose hover:text-white transition" key={cert}>{cert}</motion.div>
          ))}
        </div>
      </section>
      {/* Positions of Responsibility */}
  <section className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 mt-12 border-2 border-gold">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl font-bold text-olive uppercase tracking-widest font-poppins mb-4">Positions of Responsibility</motion.h2>
        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2"><span className="text-gold">★</span>Class Representative, IMT Ghaziabad</li>
          <li className="flex items-center gap-2"><span className="text-gold">★</span>Finance Club Member, University of Delhi</li>
        </ul>
      </section>
      {/* Conferences & Workshops */}
      <section className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 mt-8 border-2 border-gold">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl font-bold text-olive uppercase tracking-widest font-poppins mb-4">Conferences & Workshops</motion.h2>
        <div className="flex overflow-x-auto gap-6 pb-2">
          <motion.div whileHover={{ scale: 1.05 }} className="min-w-[220px] bg-blush rounded-xl p-4 shadow flex flex-col">
            <span className="text-md text-gold font-bold">2024</span>
            <span className="text-md text-olive">Marketing Analytics Workshop</span>
            <p className="text-gray-700 text-sm mt-2">Hands-on training in marketing analytics tools and techniques.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="min-w-[220px] bg-blush rounded-xl p-4 shadow flex flex-col">
            <span className="text-md text-gold font-bold">2023</span>
            <span className="text-md text-olive">Finance Leadership Conference</span>
            <p className="text-gray-700 text-sm mt-2">Participated in panel discussions on financial leadership.</p>
          </motion.div>
        </div>
      </section>
      {/* Volunteer Work */}
      <section className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 mt-8 border-2 border-gold">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl font-bold text-olive uppercase tracking-widest font-poppins mb-4">Volunteer Work</motion.h2>
        <div className="flex gap-6 items-center">
          {/* Volunteer image removed as requested */}
          <div className="flex-1">
            <span className="text-md text-olive font-bold">NGO Volunteer</span>
            <p className="text-gray-700 text-sm mt-2">Organized fundraising events and taught basic finance to underprivileged children.</p>
          </div>
        </div>
      </section>
      {/* Contact Section */}
  <section className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 mt-12 mb-12 border-2 border-gold">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-2xl font-bold text-olive uppercase tracking-widest font-poppins mb-4">Contact</motion.h2>
        <div className="flex flex-col gap-4">
          <span className="text-md text-olive font-bold">Email: <a href="mailto:anshitagupta2004@gmail.com" className="text-sky underline">anshitagupta2004@gmail.com</a></span>
          <span className="text-md text-olive font-bold">LinkedIn: <a href="https://www.linkedin.com/in/anshita-gupta-b0839725a/" className="text-sky underline">anshita-gupta-b0839725a</a></span>
          <form className="flex flex-col gap-3 mt-4">
            <input type="text" placeholder="Your Name" className="px-4 py-2 rounded bg-blush border-2 border-gold focus:outline-none focus:ring-2 focus:ring-rose transition" />
            <input type="email" placeholder="Your Email" className="px-4 py-2 rounded bg-blush border-2 border-gold focus:outline-none focus:ring-2 focus:ring-rose transition" />
            <textarea placeholder="Your Message" className="px-4 py-2 rounded bg-blush border-2 border-gold focus:outline-none focus:ring-2 focus:ring-rose transition" rows={3} />
            <button type="submit" className="bg-rose text-white px-6 py-2 rounded-full shadow-lg text-lg tracking-wide hover:bg-rose/80 transition">Send Message</button>
          </form>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full py-6 text-center text-olive bg-gold mt-4 rounded-t-2xl shadow">
        &copy; {new Date().getFullYear()} Anshita Gupta Portfolio
      </footer>
    </div>
  );
}

export default App;
