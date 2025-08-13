 
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function Certifications() {
  return (
    <motion.section className="bg-white rounded-xl shadow p-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex items-center gap-3 mb-2">
        <Award className="text-blue-500" />
        <h2 className="text-2xl font-semibold">Certifications</h2>
      </div>
      <ul className="list-disc ml-6">
        <li>TCS ION Career Enhancement Programme</li>
        <li>Kotak Securities – Kona Kona Shiksha Initiative</li>
        <li>Career Ninja – Introduction to Digital Marketing</li>
        <li>NPTEL – Corporate Finance</li>
      </ul>
    </motion.section>
  );
}
