 
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <motion.section className="bg-white rounded-xl shadow p-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex items-center gap-3 mb-2">
        <Briefcase className="text-yellow-500" />
        <h2 className="text-2xl font-semibold">Experience</h2>
      </div>
      <ul className="list-disc ml-6">
        <li>Digital Marketing Intern, MOXSH Overseas Educon Limited (Feb 2024 - Apr 2024)</li>
        <li>Accounting Intern, Gupta Arora & Co (Aug 2023)</li>
        <li>Assisted in digital marketing campaigns, content creation, bookkeeping, and tax filing.</li>
      </ul>
    </motion.section>
  );
}
