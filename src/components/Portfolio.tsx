import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Atom, TrendingUp, Code2, Cpu, LineChart } from 'lucide-react';

const categories = ['Skills Matrix', 'Global Experience'];

const skillsMatrix = [
  { 
    title: 'Physics, Quantum & Applied Math',
    icon: Atom,
    items: ['Solid State Physics', 'Quantum Mechanics', 'Electrodynamics', 'Thermodynamics', 'Vector Calculus', 'Laplace & Fourier Transforms', 'Computational Fluid Dynamics (CFD)', 'Orbital Mechanics']
  },
  {
    title: 'Quantitative Finance & Economics',
    icon: TrendingUp,
    items: ['Forex XAUUSD Trading', 'Bitcoin & Web3 Ecosystems', 'Global Equity Markets', 'Algorithmic Trading', 'Macro/Micro Economics', 'Risk Management', 'Quantitative Modeling', 'Sentiment Analysis']
  },
  {
    title: 'Software Engineering & AI',
    icon: Code2,
    items: ['Python (NumPy, Pandas, TensorFlow, PyTorch)', 'C++', 'Rust', 'Full-Stack Web (HTML, CSS, JS, React, Next.js)', 'Glassmorphism UI', 'Cloud Architecture (AWS/GCP)', 'Machine Learning', 'Computer Vision', 'Cybersecurity Fundamentals', 'Smart Contract Auditing']
  },
  {
    title: 'Hardware, IoT & Mechanical',
    icon: Cpu,
    items: ['FPGA ZYNQ-7000 Architecture', 'Data Acquisition Systems (DAQ)', 'Sensor Signal Conditioning', 'State Machine Design', 'iOS Hardware Diagnostics (Panic Logs)', 'Advanced Microcontrollers', 'Robotics', 'Mechanical Bore-Up & Combustion Optimization']
  },
  {
    title: 'Business, Strategy & Leadership',
    icon: LineChart,
    items: ['Data-Driven Decision Making', 'Enterprise Product Management', 'Venture Capital Feasibility Analysis', 'Agile Leadership', 'Complex Systems Architecture', 'Strategic Negotiation']
  }
];

const timeline = [
  {
    title: 'Global Quantitative Trading & Hedge Arbitrage',
    date: '2020 - Present',
    desc: 'Mengelola dan mengalokasikan modal melintasi berbagai kelas aset (XAUUSD, Kripto, Saham Global). Mendesain algoritma trading berfrekuensi tinggi (HFT) dan model manajemen risiko probabilistik di pasar bervolatilitas ekstrem.',
  },
  {
    title: 'Advanced FPGA-Based Aerospace & Industrial Control Systems',
    date: 'Recent',
    desc: 'Membangun arsitektur perangkat keras low-level (State Machine) pada FPGA ZYNQ-7000 untuk pengondisian sinyal sensor real-time yang krusial bagi sistem automasi industri dan telemetri presisi.',
  },
  {
    title: 'Computational Data Science & Quantum Simulation',
    date: 'Recent',
    desc: 'Mengembangkan arsitektur komputasi menggunakan Python untuk memvisualisasikan solusi interval gelombang mekanik, deret Fourier kompleks, dan pemodelan dinamika partikel dalam fisika material padat.',
  },
  {
    title: 'Next-Gen Front-End Development & Web3 Interfaces',
    date: 'Recent',
    desc: 'Merancang arsitektur aplikasi web berkinerja tinggi menggunakan teknologi front-end modern, glassmorphism UI, dan animasi 60fps, lengkap dengan integrasi multimedia dan pemrosesan audio asinkron.',
  },
  {
    title: 'Elite Hardware Diagnostics & Thermodynamics Engineering',
    date: 'Recent',
    desc: 'Mempelopori teknik troubleshooting perangkat keras pada level komponen dasar, termasuk dekripsi iOS panic log untuk anomali sensor, serta rekayasa mekanis tingkat lanjut (bore-up) untuk optimalisasi efisiensi termal mesin pembakaran dalam.',
  },
  {
    title: 'Executive Leadership - Mentor Pilar UI 2026',
    date: '2026',
    desc: 'Memimpin, menyusun strategi, dan mengeksekusi kerangka kerja pengembangan kapasitas untuk ratusan mahasiswa (Fokus: Kelompok 185) dalam skala universitas, memastikan keunggulan operasional dan komunikasi krisis.',
  }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('Skills Matrix');

  return (
    <section id="portfolio" className="min-h-screen w-full py-24 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex flex-col items-center text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          World-Class <span className="text-accent-cyan text-glow">Expertise</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full mb-10"></div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 glass p-2 rounded-full">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === cat 
                  ? 'bg-gradient-to-r from-accent-cyan to-accent-blue text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.5)]' 
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="flex-1 w-full relative min-h-[500px]">
        <AnimatePresence mode="wait">
          {/* Skills Matrix View */}
          {activeTab === 'Skills Matrix' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillsMatrix.map((skillGroup, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-3xl flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-300 group border-t border-accent-cyan/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent-cyan/10 flex items-center justify-center text-accent-cyan group-hover:scale-110 group-hover:bg-accent-cyan/20 transition-all">
                      <skillGroup.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">{skillGroup.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {skillGroup.items.map(item => (
                      <span key={item} className="text-xs font-mono px-3 py-1.5 bg-slate-800/50 text-slate-300 rounded-lg border border-white/5 hover:border-accent-cyan/30 hover:text-accent-cyan transition-colors cursor-default">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* Global Experience View */}
          {activeTab === 'Global Experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-4xl mx-auto"
            >
              <div className="flex flex-col gap-8 relative">
                <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-gradient-to-b from-accent-cyan via-accent-blue to-transparent rounded-full opacity-30" />
                
                {timeline.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative pl-20 group"
                  >
                    <div className="absolute left-[18px] top-6 w-6 h-6 rounded-full bg-slate-900 border-4 border-accent-cyan shadow-[0_0_15px_rgba(34,211,238,0.5)] group-hover:scale-125 transition-transform z-10" />
                    
                    <div className="glass-panel p-6 md:p-8 rounded-3xl group-hover:bg-slate-800/60 transition-colors border-l-2 border-l-transparent group-hover:border-l-accent-cyan">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors">{item.title}</h4>
                        <span className="text-sm font-mono font-bold text-accent-gold whitespace-nowrap bg-accent-gold/10 px-3 py-1 rounded-full">{item.date}</span>
                      </div>
                      <p className="text-slate-300 text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
