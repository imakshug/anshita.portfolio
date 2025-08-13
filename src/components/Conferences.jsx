
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function Conferences() {
  return (
    <motion.section className="bg-white rounded-xl shadow p-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex items-center gap-3 mb-2">
        <Award className="text-indigo-500" />
        <h2 className="text-2xl font-semibold">Conferences & Workshops</h2>
      </div>
      <ul className="list-disc ml-6">
        <li>Google Extend AI, GDG Cloud Bhopal (May 2023)</li>
        <li>Entrepreneurship Cell, IIT Bombay (Oct 2022)</li>
      </ul>
    </motion.section>
  );
}
