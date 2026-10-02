import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 20); // 20ms * 100 = 2000ms
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
    >
      {/* Lightning Effect Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <motion.div
          animate={{
            opacity: [0, 0, 1, 0, 0, 0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            times: [0, 0.1, 0.15, 0.2, 0.5, 0.55, 0.6]
          }}
          className="w-full h-full bg-cyan-400 mix-blend-overlay"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 text-6xl md:text-8xl font-black tracking-tighter mb-4 tabular-nums"
        >
          {progress}%
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-slate-300 text-lg md:text-xl font-medium tracking-widest uppercase text-center"
        >
          Welcome To My Portfolio Website
        </motion.h1>

        {/* Loading bar */}
        <div className="w-64 md:w-96 h-1 bg-slate-800 mt-8 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
