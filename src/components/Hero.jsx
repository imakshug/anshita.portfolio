import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <motion.img
        src="/profile.jpeg"
        alt="Anshita Gupta"
        className="hero-img"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />
      <h1 className="hero-title">Anshita Gupta</h1>
      
      <h2 className="hero-subtitle">PGDM | Marketing & Finance</h2>
      <p className="hero-desc">
        A people-centric professional with strong negotiation, communication,
        and problem-solving skills. Passionate about creating positive
        workplace environments and contributing to organizational goals.
      </p>
      <a href="/Anshita_Gupta_Resume.pdf" download>
        <button className="hero-btn">Download Resume</button>
      </a>
    </section>
  );
}
