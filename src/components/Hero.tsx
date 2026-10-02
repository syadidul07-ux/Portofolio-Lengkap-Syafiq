import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import MusicPlayer from './MusicPlayer';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-between w-full pt-20">
      <div className="flex flex-col gap-6 md:gap-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-cyan-400 font-mono tracking-widest text-sm mb-2">HELLO, WORLD.</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Turning Ideas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Into Reality
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-400 text-lg max-w-lg leading-relaxed"
        >
          I'm a passionate software developer dedicated to crafting modern, interactive, and responsive web experiences. Let's build something amazing together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4 mt-4"
        >
          <a href="#portfolio" className="bg-cyan-500 text-slate-950 px-6 py-3 rounded-full font-semibold hover:bg-cyan-400 transition-colors flex items-center gap-2 group shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
            Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="glass px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center gap-4 mt-8"
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
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all"
            >
              <social.icon size={20} />
            </a>
          ))}
        </motion.div>
      </div>

      <div className="hidden lg:flex flex-col items-end gap-12">
        <MusicPlayer />
      </div>
    </section>
  );
};

export default Hero;
