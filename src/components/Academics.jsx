import { motion } from 'framer-motion';

const academics = [
  { degree: 'PGDM', inst: 'NBS Ahmedabad', year: '2023-2025', cgpa: '8.5' },
  { degree: 'B.Com', inst: 'IEHE Bhopal', year: '2020-2023', cgpa: '8.2' },
];

export default function Academics() {
  return (
    <section id="academics" className="max-w-4xl w-full mx-auto bg-white rounded-2xl shadow-xl p-10 mt-16 border border-gold">
      <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-2xl font-bold text-olive uppercase font-poppins mb-8">Academics</motion.h2>
      <div className="relative pl-8">
        <div className="absolute left-2 top-0 h-full w-1 bg-gold rounded"></div>
        {academics.map((item, idx) => (
          <motion.div key={item.degree} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + idx * 0.2, duration: 0.6 }} className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <span className="text-lg font-bold text-rose">{item.degree} ({item.year})</span>
              <span className="text-md text-olive">{item.inst}</span>
              <span className="text-md text-gold">CGPA: {item.cgpa}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
