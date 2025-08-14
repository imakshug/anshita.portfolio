import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      title: "Business Development and Market Research Intern",
      company: "CultureX Entertainment Pvt. Ltd.",
      period: "May 2025 - July 2025",
      description: "Conducted large-scale market research on 3,000+ brands, led influencer marketing research and brand–influencer alignment, created competitor analysis decks in Canva, and optimized sales funnel reports. Managed data collation, industry classification, and campaign analytics using Apollo.io, Excel, and social media insights to support data-driven marketing strategies."
    },
    {
      title: "Digital Marketing Intern",
      company: "MOXSH Overseas Educon Limited",
      period: "Feb 2024 - Apr 2024",
      description: "Assisted in digital marketing campaigns and content creation."
    },
    {
      title: "Accounting Intern", 
      company: "Gupta Arora & Co",
      period: "Aug 2023",
      description: "Supported bookkeeping activities and tax filing processes."
    }
  ];

  return (
    <div className="experience-grid">
      {/* First experience card - full width */}
      <motion.div
        key={experiences[0].title}
        className="experience-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0 }}
      >
        <div className="experience-title">{experiences[0].title}</div>
        <div className="experience-company">{experiences[0].company} • {experiences[0].period}</div>
        <div className="experience-description">{experiences[0].description}</div>
      </motion.div>

      {/* Second row with two cards */}
      <div className="experience-row">
        {experiences.slice(1).map((exp, i) => (
          <motion.div
            key={exp.title}
            className="experience-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * (i + 1) }}
          >
            <div className="experience-title">{exp.title}</div>
            <div className="experience-company">{exp.company} • {exp.period}</div>
            <div className="experience-description">{exp.description}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
