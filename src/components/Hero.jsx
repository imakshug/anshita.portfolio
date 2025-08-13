import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blush via-gold to-sky pt-24" id="hero">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
        <div className="w-40 h-40 rounded-full bg-white shadow-2xl flex items-center justify-center mb-6 overflow-hidden">
          {/* Replace with actual profile image if available */}
          <span className="text-6xl text-rose font-poppins"></span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-olive mb-2 font-poppins text-center">Anshita Gupta</h1>
        <h2 className="text-2xl md:text-3xl text-gold font-semibold mb-4 text-center">PGDM | Marketing & Finance</h2>
        <p className="text-lg md:text-xl text-rose mb-6 text-center max-w-xl">Business Professional | Driven by Creativity & Leadership</p>
        <a href="assets/Anshita_Cv.pdf" download className="bg-rose text-white px-8 py-3 rounded-full shadow-lg font-poppins text-lg tracking-wide hover:bg-gold hover:text-olive transition-all duration-300">Download Resume</a>
      </motion.div>
      {/* Animated scroll indicator */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.7 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-8 h-8 flex items-center justify-center animate-bounce">
          <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold" viewBox="0 0 24 24"><path d="M12 5v14m7-7-7 7-7-7"/></svg>
        </div>
      </motion.div>
      {/* Abstract background shapes can be added here for extra style */}
    </section>
  );
}
