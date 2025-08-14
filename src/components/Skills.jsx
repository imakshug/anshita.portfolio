import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "Creativity & Content ideation",
    "Networking & Relationship Building",
    "Excel", 
    "Tally ERP 9.0", 
    "Microsoft Tools", 
    "Power BI",
    "Social Media Marketing & Analytics", 
    "Marketing Strategy", 
    "Data Analysis", 
    "Communication", 
    "Market Research & Insights", 
    "Event Planning & Management",
    "Team Coordination",
    "Social Media Campaign Management",
    "Crisis Management During Events",
    "Cross-Functional Collaboration",
    "Competitor Analysis & Benchmarking",
    "Photography & Event Coverage"
  ];

  return (
    <div className="skills-grid">
      {skills.map((skill) => (
        <motion.span 
          key={skill} 
          whileHover={{ scale: 1.06 }} 
          className="skill-chip"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  );
}
