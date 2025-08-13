import React from "react";
import { motion } from "framer-motion";

// const icons = { negotiation: "🤝", communication: "💬", problemSolving: "💡" };

export default function ProfileSummary() {
  return (
    <div className="grid-2">
      <p>
        A people-centric professional with strong negotiation, communication,
        and problem-solving skills. Adept at fostering collaboration, managing
        diverse perspectives, and driving meaningful outcomes.
      </p>

      <div className="summary-icons">
        <motion.div whileHover={{ scale: 1.08 }} className="summary-card gold">
          {/* <span className="summary-emoji">{icons.negotiation}</span> */}
          <span className="summary-label">Negotiation</span>
        </motion.div>
        <motion.div whileHover={{ scale: 1.08 }} className="summary-card sky">
          {/* <span className="summary-emoji">{icons.communication}</span> */}
          <span className="summary-label">Communication</span>
        </motion.div>
        <motion.div whileHover={{ scale: 1.08 }} className="summary-card rose">
          {/* <span className="summary-emoji">{icons.problemSolving}</span> */}
          <span className="summary-label">Problem-Solving</span>
        </motion.div>
      </div>
    </div>
  );
}
