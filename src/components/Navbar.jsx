import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../App.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "profile", label: "Profile" },
    { id: "academics", label: "Academics" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Track scroll position for active link highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPos = window.scrollY + 120; // offset for navbar height

      for (let section of sections) {
        if (
          section &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="nav-logo">Anshita Gupta</span>
        <span className="nav-sub">PGDM | Marketing & Finance</span>
      </div>

      <div className="nav-right">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            smooth={true}
            duration={500}
            spy={true}
            offset={-100}
            className={`nav-link ${
              activeSection === item.id ? "active" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
