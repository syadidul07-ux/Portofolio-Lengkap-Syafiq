import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen w-full py-24 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center lg:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-accent-cyan text-glow">Me</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full mx-auto lg:mx-0"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: High-tech 3D Avatar/Image */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden group border border-white/10 glass shadow-[0_0_40px_rgba(34,211,238,0.15)]"
          >
            {/* Hover Effects */}
            <div className="absolute inset-0 bg-accent-cyan/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent z-10" />
            
            {/* Tech overlays */}
            <div className="absolute top-4 left-4 z-20 font-mono text-[10px] text-accent-cyan opacity-70">
              [ SYS.INIT // 2406356012 ]
            </div>
            <div className="absolute bottom-4 right-4 z-20 font-mono text-[10px] text-accent-gold opacity-70">
              TARGET ACQUIRED: GLOBAL IMPACT
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" 
              alt="High-Tech Avatar" 
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
            />
          </motion.div>
        </div>

        {/* Right: Text Description */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden"
          >
            {/* Decorative element */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl" />
            
            <p className="text-slate-300 leading-relaxed text-lg md:text-xl text-justify relative z-10 font-sans">
              Saya adalah mahasiswa S1 Fisika Universitas Indonesia (NPM 2406356012) dengan peminatan Fisika Instrumentasi, sekaligus polymath yang mendedikasikan diri pada persilangan antara sains murni, rekayasa teknologi tingkat tinggi, dan pasar keuangan makro.
              <br/><br/>
              Dengan rekam jejak multidisipliner yang merentang dari analisis struktur kristal dan komputasi kuantum, arsitektur sistem tertanam (embedded systems), pengembangan perangkat lunak berbasis AI dan Web3, hingga manajemen portofolio investasi global sejak 2020.
              <br/><br/>
              Saya membangun solusi dari level abstraksi terendah—seperti desain mikrokontroler dan persamaan matematis—hingga infrastruktur digital dan strategi bisnis skala enterprise.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
