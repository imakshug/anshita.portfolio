import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ isLoading, onLoadComplete }) => {
  if (!isLoading) return null;

  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onAnimationComplete={() => setTimeout(onLoadComplete, 500)}
    >
      {/* Ocean waves background */}
      <div className="loading-waves">
        <motion.div 
          className="wave wave-1"
          animate={{ 
            scaleY: [1, 1.2, 1],
            x: [0, 50, 0] 
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="wave wave-2"
          animate={{ 
            scaleY: [1.2, 1, 1.2],
            x: [0, -30, 0] 
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5 
          }}
        />
        <motion.div 
          className="wave wave-3"
          animate={{ 
            scaleY: [1, 1.3, 1],
            x: [0, 40, 0] 
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1 
          }}
        />
      </div>

      {/* Initials Animation */}
      <div className="loading-content">
        <motion.div 
          className="loading-initials"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.5,
            ease: "easeOut",
            delay: 0.5 
          }}
        >
          <motion.span
            className="initial-a"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            A
          </motion.span>
          <motion.span
            className="initial-g"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            G
          </motion.span>
        </motion.div>

        <motion.div 
          className="loading-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Welcome to Anshita's Portfolio
          </motion.span>
        </motion.div>

        {/* Loading progress */}
        <motion.div 
          className="loading-progress"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.5, duration: 2 }}
        />
      </div>

      {/* Floating particles */}
      <div className="loading-particles">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="loading-particle"
            style={{
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [100, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 1.5
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
