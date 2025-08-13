 
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function ProjectsInternship() {
  return (
    <motion.section className="bg-white rounded-xl shadow p-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="flex items-center gap-3 mb-2">
      </div>
      <ul className="list-disc ml-6">
        <li>Marketing Strategy (4Ps), Brand Positioning, Digital Campaigns, Competitive Analysis</li>
        <li>Consumer Behaviour & Retail Study at Manek Chowk</li>
        <li>Supermarket Operations & Customer Engagement</li>
        <li>Cost Feasibility Study for Manufacturing Unit (NPV, IRR)</li>
        <li>Power BI Dashboard for Sales Performance & Decision Making</li>
        <li>Vyndo Khakhra – Product Marketing & Branding Strategy</li>
        <li>Marketing Research on Unorganised Market</li>
        <li>Supermarket Study – Retail Management & Consumer Insights</li>
        <li>Financial Analysis – Cost Calculation for Manufacturing Unit</li>
        <li>Power BI Dashboard: Data Manipulation & Visualization</li>
      </ul>
    </motion.section>
  );
}
