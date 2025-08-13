import { motion } from 'framer-motion';

const skills = [
  'Creativity', 'Decision Making', 'Leadership', 'Problem-Solving',
  'Excel', 'Tally ERP 9.0', 'Microsoft Tools', 'Power BI'
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-4xl w-full mx-auto bg-white rounded-2xl shadow-xl p-10 mt-16 border border-gold">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl font-bold text-olive uppercase font-poppins mb-8">Skills</motion.h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {skills.map(skill => (
          <motion.span whileHover={{ scale: 1.08 }} className="px-4 py-2 rounded-full bg-sky/20 text-olive font-semibold shadow hover:bg-rose hover:text-white transition cursor-pointer" key={skill}>{skill}</motion.span>
        ))}
      </div>
      {/* Optional: Add progress bars or icon grid for technical skills */}
    </section>
  );
}
