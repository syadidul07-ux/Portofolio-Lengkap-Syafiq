import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const categories = ['Skills', 'Projects'];

const projects = [
  { id: 1, title: 'FPGA Automated Control System', category: 'Projects', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop', desc: 'Designed state machine architecture and sensor signal conditioning for a smart water control system using ZYNQ-7000 FPGA and advanced data processing pipelines.', tech: ['FPGA', 'ZYNQ-7000', 'State Machine', 'Signal Conditioning'] },
  { id: 2, title: 'Data Science & Visualizations', category: 'Projects', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', desc: 'Utilized Python to visualize mathematical interval solutions, Fourier series, and wave sampling graph analysis of complex physics equations.', tech: ['Python', 'NumPy', 'Matplotlib', 'Data Science'] },
  { id: 3, title: 'Front-End Web Development', category: 'Projects', img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop', desc: 'Designed and deployed responsive, interactive single-file web applications featuring keyframe animations, photo galleries, and audio integration.', tech: ['HTML/CSS/JS', 'Glassmorphism', 'Animations'] },
];

const skills = [
  { category: 'Coding & Software', items: 'Python (NumPy, Matplotlib), Front-End Web Development (HTML, CSS, JS, Glassmorphism UI, CSS Animations), LaTeX for advanced technical writing.' },
  { category: 'Hardware & Instrumentation Physics', items: 'FPGA ZYNQ-7000, Data Acquisition Systems (DAQ), Sensor Signal Conditioning, State Machine Design, Hardware Diagnostics (iOS Panic Log Analysis).' },
  { category: 'Physics & Mathematics', items: 'Solid State Physics (Crystal Lattice Structure, Bragg\'s Law), Electrodynamics, Mathematical Physics, Vector Calculus, Laplace Equations, Digital Signal Analysis & Sampling.' },
  { category: 'Business, Economics & Management', items: 'Data-Driven Decision Making, Technical Feasibility Analysis for Projects, System Efficiency Modeling, Strategic Leadership.' }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Skills');

  return (
    <section id="portfolio" className="min-h-screen w-full py-24 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex flex-col items-center text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          My <span className="text-cyan-400">Portfolio</span>
        </h2>
        <div className="w-24 h-1 bg-cyan-400 rounded-full mb-8"></div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 glass p-2 rounded-full">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === cat 
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.4)]' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="flex-1 w-full relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {/* Projects View */}
          {activeTab === 'Projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
            >
              {projects.map((project) => (
                <div key={project.id} className="glass rounded-2xl overflow-hidden group flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors z-10" />
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-slate-400 mb-4 flex-1">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs font-mono px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 mt-auto">
                      <a href="#" className="flex-1 bg-white/5 hover:bg-white/10 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                        Details <ExternalLink size={16} />
                      </a>
                      <a href="#" className="p-2 glass rounded-lg hover:text-cyan-400 transition-colors">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Skills View */}
          {activeTab === 'Skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {skills.map((skill, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl flex flex-col gap-3 hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold text-cyan-400">{skill.category}</h3>
                  <p className="text-slate-300 leading-relaxed">{skill.items}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
