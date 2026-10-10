import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowRight, PlayCircle } from 'lucide-react';

const ROLES = [
  "Undergraduate Physics Student at UI",
  "Quantitative Analyst",
  "Full-Stack Developer",
  "Hardware & IoT Engineer",
  "Polymath & Problem Solver"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = ROLES[roleIndex];
      
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(currentRole.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, typingSpeed]);

  const dispatchMusicEvent = () => {
    window.dispatchEvent(new CustomEvent('toggle-music-player'));
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center w-full pt-20">
      <div className="flex flex-col items-center text-center gap-6 md:gap-8 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-accent-gold font-mono tracking-widest text-sm md:text-base mb-4 uppercase">HELLO, I AM</h2>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-tight mb-4">
            Syafiq <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-blue text-glow">
              Syadidul Azmi
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-mono text-slate-300 mt-4 min-h-[40px] flex justify-center">
            <span>{text}</span>
            <span className="animate-blink ml-1 border-r-2 border-accent-cyan"></span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-400 text-lg md:text-xl max-w-3xl leading-relaxed mt-4"
        >
          Bridging Complex Physics, Advanced Artificial Intelligence, Aerospace Dynamics, and Global Financial Markets into Unified Scalable Solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-8"
        >
          <a href="#about" className="bg-gradient-to-r from-accent-cyan to-accent-blue text-slate-950 px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] hover:-translate-y-1">
            Explore My Universe
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button onClick={dispatchMusicEvent} className="glass px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2 text-accent-gold border-accent-gold/30 hover:border-accent-gold/60 hover:-translate-y-1">
            <PlayCircle size={20} />
            Listen to My Playlist
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-6 mt-12"
        >
          {[
            { icon: Github, href: 'https://github.com' },
            { icon: Linkedin, href: 'https://linkedin.com' },
            { icon: Instagram, href: 'https://instagram.com' }
          ].map((social, idx) => (
            <a 
              key={idx}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 hover:text-accent-cyan hover:scale-110 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all"
            >
              <social.icon size={22} />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
