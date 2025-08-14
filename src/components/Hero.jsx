import React from "react";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon, SparklesIcon } from "@heroicons/react/24/outline";
import profileImage from "/profile.jpeg";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Simplified floating decorative elements */}
      <div className="hero-decorations">
        <motion.div 
          className="floating-shape shape-1"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="floating-shape shape-2"
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0] 
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2 
          }}
        />
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={profileImage}
          alt="Anshita Gupta"
          className="hero-img"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        />
        
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Anshita Gupta
          <SparklesIcon className="sparkle-icon" />
        </motion.h1>
        
        <motion.div 
          className="hero-subtitle-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="hero-subtitle">
            PGDM | Marketing | Finance 
          </h2>
        </motion.div>

        <motion.div 
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span>A people-centric professional with strong negotiation, communication, and problem-solving skills.</span>
          <span>Adept at fostering collaboration, managing diverse perspectives, and driving meaningful outcomes.</span>
          <span>Passionate Team Leader creating positive workplace environments and organizational success.</span>
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <a href="/Anshita_Gupta_Resume.pdf" download>
            <motion.button 
              className="hero-btn primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowDownTrayIcon className="btn-icon" />
              Download Resume
            </motion.button>
          </a>
          
          <motion.button 
            className="hero-btn secondary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div 
          className="scroll-mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
