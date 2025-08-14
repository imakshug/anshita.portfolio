import React from "react";
import { motion } from "framer-motion";

export default function ProjectsInternship() {
  const projects = [
    {
      title: "Aqualogica Content Calendar For April 2025",
      description: "Created Trend-driven Instagram content strategy design using Canva",
      tags: ["Trend Research", "Canva", "Content Planning"]
    },
    {
      title: "Marketing Strategy (4Ps)",
      description: "Brand positioning and digital campaigns with competitive analysis",
      tags: ["Marketing", "Strategy", "Analysis"]
    },
    {
      title: "Consumer Behaviour Study",
      description: "Retail study at Manek Chowk focusing on consumer insights",
      tags: ["Research", "Consumer", "Retail"]
    },
    {
      title: "Power BI Dashboard",
      description: "Sales performance dashboard with data manipulation and visualization",
      tags: ["Power BI", "Analytics", "Visualization"]
    },
    
    {
      title: "Financial Statement Analysis",
      description: "Analyzed financial statements by evaluating liquidity, profitability, and leverage ratios to assess overall financial health and performance.",
      tags: ["Financial Analysis", "Performance Evaluation", "Trend Analysis"]
    },
    {
      title: "Supermarket Operations",
      description: "Retail management study with customer engagement analysis",
      tags: ["Retail", "Operations", "Customer"]
    }
  ];

  return (
    <div className="projects-grid">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          className="project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * i }}
        >
          <div className="project-title">{project.title}</div>
          <div className="project-description">{project.description}</div>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
