import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Profile', href: '#profile' },
  { name: 'Academics', href: '#academics' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <motion.nav initial={{ y: -60 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 transition-all duration-300 ${scrolled ? 'bg-white/80 shadow-lg backdrop-blur' : 'bg-transparent'}`}
    >
      <a href="#" className="text-2xl font-bold text-olive font-poppins tracking-widest">Anshita</a>
      <ul className="flex gap-8 items-center">
        {navLinks.map(link => (
          <li key={link.name}>
            <a href={link.href} className="text-md text-olive font-semibold hover:text-rose transition">{link.name}</a>
          </li>
        ))}
      </ul>
      <a href="assets/Anshita_Cv.pdf" download className="bg-rose text-white px-5 py-2 rounded-full shadow hover:bg-gold hover:text-olive transition font-poppins font-bold">Download Resume</a>
    </motion.nav>
  );
}
