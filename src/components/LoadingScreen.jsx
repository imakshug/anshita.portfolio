import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = ({ isLoading, onLoadComplete }) => {
  if (!isLoading) return null;

  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8 } }}
      onAnimationComplete={() => setTimeout(onLoadComplete, 100)}
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

      {/* Logo Animation */}
      <div className="loading-content">
        <motion.div 
          className="loading-logo-container"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.5,
            ease: "easeOut",
            delay: 0.2 
          }}
        >
          <motion.img
            src="./logo.png"
            alt="Anshita Gupta Logo"
            className="loading-logo"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            onError={(e) => {
              console.error('Logo failed to load:', e.target.src);
              // Try alternative path
              e.target.src = './public/logo.png';
              e.target.onerror = () => {
                // If still fails, hide the image and show fallback
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="loading-logo-fallback">AG</div>';
              };
            }}
            onLoad={() => console.log('Logo loaded successfully')}
          />
        </motion.div>

        <motion.div 
          className="loading-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
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
