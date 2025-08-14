import React from "react";
import { motion } from "framer-motion";
import { AcademicCapIcon, CalendarIcon, StarIcon } from "@heroicons/react/24/outline";

export default function Academics() {
  const items = [
    {
      degree: "PGDM (Marketing & Finance)",
      inst: "Narayana Business School (AICTE)",
      cgpa: "7.7 CGPA",
      year: "2026",
      icon: AcademicCapIcon,
      color: "var(--ocean-mid)",
      description: "Specializing in Marketing strategies and Financial analysis with focus on data-driven decision making"
    },
    {
      degree: "B.Com (Accounting)",
      inst: "Institute for Excellence in Higher Education",
      cgpa: "7.8 CGPA", 
      year: "2024",
      icon: StarIcon,
      color: "var(--seafoam)",
      description: "Strong foundation in Accounting principles, Financial reporting, and Business management"
    },
  ];

  return (
    <div className="academic-section">
      {/* Background particles */}
      <div className="academic-particles">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="academic-particle"
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {items.map((item, i) => (
        <motion.div
          key={item.degree}
          className="academic-card"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            delay: 0.2 * i,
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            y: -10,
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          {/* Card glow effect */}
          <motion.div 
            className="card-glow"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            style={{ background: `linear-gradient(45deg, ${item.color}, var(--pearl))` }}
          />
          
          {/* Icon header */}
          <motion.div 
            className="academic-icon-container"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <item.icon className="academic-icon" style={{ color: item.color }} />
          </motion.div>

          <div className="academic-content">
            <motion.div 
              className="academic-degree"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              {item.degree}
            </motion.div>
            
            <motion.div 
              className="academic-inst"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
            >
              {item.inst}
            </motion.div>

            <motion.div 
              className="academic-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              {item.description}
            </motion.div>

            <motion.div 
              className="academic-footer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <div className="academic-cgpa">
                <StarIcon className="cgpa-icon" />
                {item.cgpa}
              </div>
              <div className="academic-year">
                <CalendarIcon className="year-icon" />
                {item.year}
              </div>
            </motion.div>
          </div>

          {/* Floating decorative elements */}
          <motion.div 
            className="academic-decoration-1"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="academic-decoration-2"
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
