import React from "react";
import { motion } from "framer-motion";

/** A nice fade+slide in wrapper for each section */
export default function AnimatedSection({ id, title, children, bg = "white" }) {
  return (
    <motion.section
      id={id}
      className="section"
      style={{ background: bg }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="section-content">
        {title ? <h3 className="section-title">{title}</h3> : null}
        {children}
      </div>
    </motion.section>
  );
}
