import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, Heart } from 'lucide-react';

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
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-cyan-400 rounded-full mb-4"></div>
        <p className="text-slate-400 max-w-lg">Have a project in mind or just want to say hi? Feel free to drop a message!</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 rounded-3xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-400">Name</label>
              <input 
                type="text" 
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-400">Email</label>
              <input 
                type="email" 
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600"
                placeholder="john@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
              <textarea 
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-slate-600 resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="mt-4 bg-cyan-500 text-slate-950 font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
            >
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>

        {/* Guestbook Widget */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 rounded-3xl flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="text-cyan-400" />
            <h3 className="text-2xl font-bold text-white">Guestbook</h3>
          </div>
          
          <div className="flex-1 flex flex-col gap-4 overflow-y-auto max-h-[350px] pr-2 custom-scrollbar">
            {/* Dummy Comments */}
            {[
              { name: 'Alice', text: 'Love the dark space theme! Incredible work.', time: '2h ago' },
              { name: 'Bob', text: 'The lightning loading screen is so cool.', time: '5h ago' },
              { name: 'Charlie', text: 'Great portfolio, let\'s connect on LinkedIn!', time: '1d ago' },
            ].map((comment, i) => (
              <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-cyan-300">{comment.name}</span>
                  <span className="text-xs text-slate-500">{comment.time}</span>
                </div>
                <p className="text-sm text-slate-300">{comment.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/10 flex gap-2">
            <input 
              type="text" 
              placeholder="Sign the guestbook..."
              className="flex-1 bg-slate-900/50 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
              Post
            </button>
          </div>
        </motion.div>
      </div>

      <footer className="w-full mt-24 py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} My Portfolio. Built with React & Vite.
        </p>
        <p className="text-slate-500 text-sm flex items-center gap-1">
          Made with <Heart size={14} className="text-red-500 mx-1" /> in Deep Space
        </p>
      </footer>
    </section>
  );
};

export default Contact;
