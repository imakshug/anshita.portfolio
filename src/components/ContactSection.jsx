import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <motion.section className="bg-white rounded-xl shadow p-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex items-center gap-3 mb-2">
        <Mail className="text-red-500" />
        <h2 className="text-2xl font-semibold">Contact</h2>
      </div>
   
 </motion.section>
  );
}
