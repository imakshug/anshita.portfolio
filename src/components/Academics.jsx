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
    <ol className="timeline">
      {items.map((it, i) => (
        <motion.li
          key={it.degree}
          className="timeline-item"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 * i }}
        >
          <div>
            <p className="timeline-degree">{it.degree}</p>
            <p className="timeline-inst">{it.inst}</p>
            <p className="timeline-cgpa">
              {it.cgpa} • {it.year}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
