import { useState } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music } from 'lucide-react';
import { motion } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="glass rounded-2xl p-4 w-72 flex flex-col gap-4 shadow-xl shadow-cyan-900/20"
    >
      <div className="flex items-center gap-4 relative">
        {/* Album Art Placeholder */}
        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
          <Music size={24} className="text-white z-10" />
          {isPlaying && (
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/20 to-transparent"
            />
          )}
        </div>
        
        <div className="flex-1">
          <h4 className="text-sm font-bold text-white truncate">Cosmic Journey</h4>
          <p className="text-xs text-slate-400 truncate">Deep Space Vibes</p>
        </div>
        
        {/* Audio Visualizer */}
        {isPlaying && (
          <div className="absolute right-0 top-2 flex gap-1 items-end h-4">
            {[1,2,3,4].map((i) => (
              <motion.div
                key={i}
                animate={{ height: ['20%', '100%', '20%'] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.1 }}
                className="w-1 bg-cyan-400 rounded-t-sm"
              />
            ))}
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="flex items-center gap-2 text-[10px] text-slate-400">
        <span>1:24</span>
        <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-cyan-400 w-1/3" />
        </div>
        <span>3:42</span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button className="text-slate-400 hover:text-white transition-colors">
          <SkipBack size={20} />
        </button>
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center hover:bg-cyan-400 transition-colors shadow-[0_0_15px_rgba(34,211,238,0.4)]"
        >
          {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
        </button>
        <button className="text-slate-400 hover:text-white transition-colors">
          <SkipForward size={20} />
        </button>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
