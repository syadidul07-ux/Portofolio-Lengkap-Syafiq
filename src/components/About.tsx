import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, FileCode2 } from 'lucide-react';

const stats = [
  { label: 'Total Projects', value: '24+', icon: FileCode2 },
  { label: 'Certificates', value: '10', icon: Award },
  { label: 'Years Exp.', value: '3+', icon: Briefcase },
];

const timeline = [
  {
    type: 'Experience',
    title: 'Frontend Developer',
    org: 'Tech Innovators Inc.',
    date: '2023 - Present',
    desc: 'Building responsive web applications using React and Next.js.'
  },
  {
    type: 'Education',
    title: 'Bachelor of Computer Science',
    org: 'University of Technology',
    date: '2019 - 2023',
    desc: 'Graduated with Honors. Focused on Software Engineering.'
  }
];

const About = () => {
  return (
    <section id="about" className="min-h-screen w-full py-24 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <div className="w-24 h-1 bg-cyan-400 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image & Stats */}
        <div className="flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-sm mx-auto aspect-square rounded-2xl overflow-hidden group border border-white/10"
          >
            {/* Hover Effects */}
            <div className="absolute inset-0 bg-cyan-500/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?q=80&w=800&auto=format&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
            />
          </motion.div>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-4 rounded-xl flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors"
              >
                <stat.icon className="text-cyan-400 mb-2 group-hover:scale-110 transition-transform" size={24} />
                <span className="text-2xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Bio & Timeline */}
        <div className="flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-300 leading-relaxed text-lg mb-6">
              I am a dedicated developer with a strong focus on frontend technologies. I enjoy solving complex problems and turning designs into pixel-perfect, performant code. When I'm not coding, you'll find me exploring new technologies or listening to synthwave music.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <BookOpen className="text-cyan-400" size={20} />
              Journey
            </h3>
            
            <div className="flex flex-col gap-4 relative">
              <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-800" />
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-3 top-2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                  <div className="glass p-5 rounded-xl hover:bg-white/10 transition-colors">
                    <span className="text-xs font-mono text-cyan-400 mb-2 block">{item.date}</span>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <span className="text-sm text-slate-400 mb-3 block">{item.org}</span>
                    <p className="text-sm text-slate-300">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
