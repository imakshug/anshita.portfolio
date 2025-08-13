import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function AcademicDetails() {
  return (
    <motion.section className="bg-white rounded-xl shadow p-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex items-center gap-3 mb-2">
        <Award className="text-green-500" />
        <h2 className="text-2xl font-semibold">Academic Details</h2>
      </div>
      <ul className="list-disc ml-6">
        <li>PGDM (Marketing & Finance), Narayana Business School, AICTE, 7.31 CGPA, 2026</li>
        <li>B.Com (Accounting), Institute for Excellence in Higher Education, 7.8 CGPA, 2024</li>
      </ul>
    </motion.section>
  );
}
