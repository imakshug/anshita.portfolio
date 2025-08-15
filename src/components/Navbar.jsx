import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon, CameraIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import "../App.css";

export default function Navbar({ 
  sections, 
  activeId, 
  currentPage, 
  setCurrentPage, 
  showAdmin, 
  setShowAdmin 
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-theme');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-content">
        <motion.button 
          className="navbar-brand"
          onClick={() => handlePageChange('portfolio')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Anshita
        </motion.button>

        <div className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
          {/* Portfolio Section Links (only show when on portfolio page) */}
          {currentPage === 'portfolio' && sections.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              className={`navbar-link ${
                activeId === item.id ? "active" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Page Navigation Buttons */}
          <motion.button
            className={`navbar-page-btn ${currentPage === 'gallery' ? 'active' : ''}`}
            onClick={() => handlePageChange('gallery')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <CameraIcon className="page-btn-icon" />
            <span>Gallery</span>
          </motion.button>

          {/* Admin Panel Toggle (only show on gallery page) */}
          {currentPage === 'gallery' && (
            <motion.button
              className={`navbar-admin-btn ${showAdmin ? 'active' : ''}`}
              onClick={() => setShowAdmin(!showAdmin)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title={showAdmin ? 'Close Admin Panel' : 'Open Admin Panel'}
            >
              <Cog6ToothIcon className="admin-btn-icon" />
              <span>Admin</span>
              {!showAdmin && <div className="admin-notification-badge" />}
            </motion.button>
          )}
          
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? (
              <SunIcon className="w-6 h-6" />
            ) : (
              <MoonIcon className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile menu toggle button */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMenu}
          style={{ display: 'none' }}
        >
          ☰
        </button>
      </div>
    </motion.nav>
  );
}
