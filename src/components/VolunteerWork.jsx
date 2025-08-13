import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function VolunteerWork() {
  return (
    <motion.section className="bg-white rounded-xl shadow p-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex items-center gap-3 mb-2">
        <Award className="text-teal-500" />
        <h2 className="text-2xl font-semibold">Volunteer Work</h2>
      </div>
      <ul className="list-disc ml-6">
        <li>Radha Krishna Mandir (Krishna Janmashtami) – Social Services (Aug 2024)</li>
        <li>Google Cloud Community – Education (Apr 2023 - Jun 2024)</li>
      </ul>
    </motion.section>
  );
}
