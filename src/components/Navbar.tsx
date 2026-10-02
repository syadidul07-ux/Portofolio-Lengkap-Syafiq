import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home, href: '#home' },
  { name: 'About', icon: User, href: '#about' },
  { name: 'Portfolio', icon: Briefcase, href: '#portfolio' },
  { name: 'Contact', icon: Mail, href: '#contact' },
];

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-md"
    >
      <nav className="glass rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-cyan-500/10">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="group flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <item.icon size={20} className="group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 absolute -bottom-4 transition-opacity">
              {item.name}
            </span>
          </a>
        ))}
      </nav>
    </motion.div>
  );
};

export default Navbar;
