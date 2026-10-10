import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, FileCode2 } from 'lucide-react';

const services = [
  { label: 'Data', value: 'Analysis', icon: FileCode2 },
  { label: 'Hardware', value: 'Troubleshoot', icon: Award },
  { label: 'Web', value: 'Development', icon: BookOpen },
  { label: 'Technical', value: 'Consulting', icon: Briefcase },
];

const timeline = [
  {
    title: 'FPGA Automated Control System',
    org: 'Hardware & Instrumentation',
    date: 'Experience',
    desc: 'Designed state machine architecture and sensor signal conditioning for a smart water control system using ZYNQ-7000 FPGA.'
  },
  {
    title: 'Data Science & Computational Visualization',
    org: 'Physics & Code',
    date: 'Project',
    desc: 'Utilized Python (Matplotlib & NumPy) to visualize mathematical interval solutions, Fourier series, and wave sampling graph analysis.'
  },
  {
    title: 'Front-End Web Development',
    org: 'Software Development',
    date: 'Project',
    desc: 'Designed and deployed responsive, interactive single-file web applications featuring keyframe animations and audio integration.'
  },
  {
    title: 'Hardware Diagnostics & Mechanical Analysis',
    org: 'Troubleshooting',
    date: 'Experience',
    desc: 'Performed advanced hardware troubleshooting (iOS panic log analysis) and mechanical calculations for vehicle engine bore-up.'
  },
  {
    title: 'Mentor Pilar UI 2026',
    org: 'Universitas Indonesia',
    date: 'Leadership',
    desc: 'Led, organized, and managed new students (Group 185) during orientation, ensuring effective communication and program success.'
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

          <div className="grid grid-cols-2 gap-4">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-4 rounded-xl flex flex-col items-center justify-center text-center group hover:bg-white/10 transition-colors"
              >
                <service.icon className="text-cyan-400 mb-2 group-hover:scale-110 transition-transform" size={24} />
                <span className="text-xl font-bold text-white mb-1">{service.value}</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400">{service.label}</span>
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
              I am an Undergraduate Physics Student at Universitas Indonesia (NPM 2406356012) majoring in Instrumentation Physics. I have a deep interest in solving complex problems at the intersection of pure science, information technology, and business/economic analysis. I am accustomed to decomposing systemic problems—from mathematical equations to hardware architecture—to deliver efficient, scalable, and impactful solutions.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Briefcase className="text-cyan-400" size={20} />
              Experience & Projects
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
