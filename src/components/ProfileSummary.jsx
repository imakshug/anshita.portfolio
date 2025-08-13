import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function ProfileSummary() {
  return (
    <motion.section
      className="bg-white rounded-xl shadow p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-2"
      >
        <User className="text-blue-500" />
        <h2 className="text-2xl font-semibold">Profile Summary</h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        A people-centric professional with strong negotiation, communication, and problem-solving skills. Adept at fostering collaboration, managing diverse perspectives, and driving meaningful outcomes. Passionate about creating positive workplace environments and contributing to organizational goals.
      </motion.p>
    </motion.section>
  );
}
