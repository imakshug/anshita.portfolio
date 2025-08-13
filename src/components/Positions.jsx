 
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Positions() {
  return (
    <motion.section className="bg-white rounded-xl shadow p-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex items-center gap-3 mb-2">
        <Briefcase className="text-red-500" />
        <h2 className="text-2xl font-semibold">Positions of Responsibility</h2>
      </div>
      <ul className="list-disc ml-6">
        <li>SOMCOMM Member (Social Media Committee), Narayana Business School (Sep 2024 - Present)</li>
        <li>Placement Cell Member, Institute for Excellence in Higher Education, Bhopal (Jul 2022 - Apr 2024)</li>
      </ul>
    </motion.section>
  );
}
