import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function SkillsTechnical() {
  return (
    <motion.section className="bg-white rounded-xl shadow p-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex items-center gap-3 mb-2">
        <Briefcase className="text-purple-500" />
        <h2 className="text-2xl font-semibold">Core Skills & Technical Proficiency</h2>
      </div>
      <ul className="list-disc ml-6">
        <li>Creativity, Decision Making, Leadership, Problem-Solving</li>
        <li>Excel, Tally ERP 9.0, Microsoft Tools, Power BI</li>
      </ul>
    </motion.section>
  );
}
