import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const core = ["Creativity", "Decision Making", "Leadership", "Problem-Solving"];
  const tech = ["Excel", "Tally ERP 9.0", "Microsoft Tools", "Power BI"];

  return (
    <>
      <h4 className="section-title" style={{ marginTop: 0 }}>Core Skills</h4>
      <div>
        {core.map((s) => (
          <motion.span key={s} whileHover={{ scale: 1.06 }} className="chip">
            {s}
          </motion.span>
        ))}
      </div>

      <h4 className="section-title" style={{ marginTop: "1.25rem" }}>
        Technical Skills
      </h4>
      <div>
        {tech.map((s) => (
          <motion.span key={s} whileHover={{ scale: 1.06 }} className="chip">
            {s}
          </motion.span>
        ))}
      </div>
    </>
  );
}
