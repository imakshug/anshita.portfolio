import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const technicalSkills = [
    "Excel", 
    "Apollo.io",
    "Canva",
    "Power BI",
    "Tally ERP 9.0", 
    "Microsoft Tools", 
    "Data Analysis", 
  ];

  const softSkills = [
    "Creativity & Content ideation",
    "Networking & Relationship Building",
    "Marketing Strategy", 
    "Social Media Marketing & Analytics",
    "Market Research & Insights",
    "Social Media Campaign Management",
    "Competitor Analysis & Benchmarking",
    "Photography & Event Coverage",
    "Communication", 
    "Event Planning & Management",
    "Team Coordination",
    "Crisis Management During Events",
    "Cross-Functional Collaboration"
  ];

  return (
    <div className="skills-container">
      {/* Technical Skills Section */}
      <motion.div 
        className="skills-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h3 className="skills-category-title">Technical Skills</h3>
        <div className="skills-grid">
          {technicalSkills.map((skill, index) => (
            <motion.span 
              key={skill} 
              whileHover={{ scale: 1.06 }} 
              className="skill-chip technical"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Soft Skills Section */}
      <motion.div 
        className="skills-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h3 className="skills-category-title">Soft Skills</h3>
        <div className="skills-grid">
          {softSkills.map((skill, index) => (
            <motion.span 
              key={skill} 
              whileHover={{ scale: 1.06 }} 
              className="skill-chip soft"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
