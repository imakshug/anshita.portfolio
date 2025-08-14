import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaInstagram, FaGithub } from "react-icons/fa";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";

const FloatingSocials = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/anshita-gupta-b0839725a/",
      label: "LinkedIn",
      color: "#0077B5"
    },
    {
      icon: FaEnvelope,
      url: "mailto:anshitagupta2004@gmail.com",
      label: "Email",
      color: "#EA4335"
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/anshiita.g/",
      label: "Instagram",
      color: "#E4405F"
    },
    {
      icon: FaGithub,
      url: "https://github.com/imakshug",
      label: "GitHub",
      color: "#333"
    }
  ];

  const toggleSocials = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-socials">
      {/* Main Toggle Button */}
      <motion.button
        className="social-toggle"
        onClick={toggleSocials}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
      >
        <ChatBubbleLeftEllipsisIcon className="w-6 h-6" />
      </motion.button>

      {/* Social Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ '--social-color': social.color }}
                initial={{ 
                  scale: 0, 
                  y: 20,
                  opacity: 0 
                }}
                animate={{ 
                  scale: 1, 
                  y: 0,
                  opacity: 1 
                }}
                exit={{ 
                  scale: 0, 
                  y: 20,
                  opacity: 0 
                }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300 
                }}
                whileHover={{ 
                  scale: 1.2,
                  y: -5 
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="social-icon" />
                <span className="social-tooltip">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ripple Effect */}
      <motion.div
        className="social-ripple"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default FloatingSocials;
