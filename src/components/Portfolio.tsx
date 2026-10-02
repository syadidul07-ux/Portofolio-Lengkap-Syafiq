import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const categories = ['Projects', 'Certificates', 'Awards', 'Tech Stack'];

const projects = [
  { id: 1, title: 'E-Commerce Platform', category: 'Projects', img: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop', desc: 'A full-stack e-commerce solution with cart and checkout.', tech: ['Next.js', 'Tailwind', 'Supabase'] },
  { id: 2, title: 'Task Manager', category: 'Projects', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop', desc: 'Kanban style task management tool.', tech: ['React', 'Framer Motion', 'Firebase'] },
  { id: 3, title: 'AI Image Generator', category: 'Projects', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop', desc: 'Generate images using OpenAI API.', tech: ['Vite', 'Node.js', 'OpenAI'] },
];

const techStack = [
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Tailwind CSS', icon: '🌊' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Supabase', icon: '⚡' },
  { name: 'Figma', icon: '🎨' },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Projects');

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

          {/* Tech Stack View */}
          {activeTab === 'Tech Stack' && (
            <motion.div
              key="tech"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {techStack.map(tech => (
                <div key={tech.name} className="glass aspect-square rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-white/10 hover:border-cyan-500/30 transition-all group">
                  <span className="text-4xl group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-300">{tech.icon}</span>
                  <span className="font-medium text-slate-300 group-hover:text-cyan-400 transition-colors">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* Placeholder for Certificates and Awards */}
          {(activeTab === 'Certificates' || activeTab === 'Awards') && (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-64 flex flex-col items-center justify-center text-slate-500 glass rounded-2xl border-dashed"
            >
              <Award size={48} className="mb-4 opacity-50" />
              <p>No {activeTab.toLowerCase()} to display yet.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
