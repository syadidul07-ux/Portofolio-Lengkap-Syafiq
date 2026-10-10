import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent successfully! (Demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen w-full py-24 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center flex flex-col items-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Initiate <span className="text-accent-cyan text-glow">Contact</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-blue rounded-full mb-4"></div>
        <p className="text-slate-400 max-w-lg">Ready to build something extraordinary? Connect via the terminal below.</p>
      </motion.div>

      <div className="w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-1 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.15)] relative"
        >
          {/* Animated border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan via-transparent to-accent-blue opacity-50" />
          
          <div className="bg-slate-950/90 rounded-[22px] p-8 md:p-12 relative z-10">
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
              <Terminal className="text-accent-cyan" size={24} />
              <h3 className="text-xl font-mono font-bold text-white">sys.contact_protocol</h3>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="name" className="text-xs font-mono text-accent-gold uppercase tracking-wider">Target.Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white font-mono focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all placeholder:text-slate-700"
                    placeholder="Enter designation..."
                  />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="email" className="text-xs font-mono text-accent-gold uppercase tracking-wider">Target.Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white font-mono focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all placeholder:text-slate-700"
                    placeholder="Enter comm link..."
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono text-accent-gold uppercase tracking-wider">Payload.Message</label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white font-mono focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-all placeholder:text-slate-700 resize-none"
                  placeholder="Transmit your message here..."
                ></textarea>
              </div>
              
              <div className="flex justify-end mt-4">
                <button 
                  type="submit"
                  className="bg-accent-cyan text-slate-950 font-bold font-mono py-3 px-8 rounded-xl flex items-center justify-center gap-3 hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:-translate-y-1"
                >
                  EXECUTE <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      <footer className="w-full mt-32 pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-4">
        <p className="text-slate-400 text-sm font-mono text-center">
          © 2026 Syafiq Syadidul Azmi. Crafted with Logic, Physics, Code, and Harmony.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
