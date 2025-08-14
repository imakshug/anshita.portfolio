import React from "react";
import { motion } from "framer-motion";

export default function Academics() {
  const items = [
    {
      degree: "PGDM (Marketing & Finance)",
      inst: "Narayana Business School (AICTE)",
      cgpa: "7.31 CGPA",
      year: "2026",
    },
    {
      degree: "B.Com (Accounting)",
      inst: "Institute for Excellence in Higher Education",
      cgpa: "7.8 CGPA",
      year: "2024",
    },
  ];

  return (
    <div className="academic-section">
      {items.map((item, i) => (
        <motion.div
          key={item.degree}
          className="academic-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 * i }}
        >
          <div className="academic-degree">{item.degree}</div>
          <div className="academic-inst">{item.inst}</div>
          <div className="academic-cgpa">{item.cgpa} • {item.year}</div>
        </motion.div>
      ))}
    </div>
  );
}
