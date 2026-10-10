import { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music, Volume2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TRACKLIST = [
  { title: "backburner", artist: "NIKI" },
  { title: "please dont call", artist: "merry chrismasth" },
  { title: "we can't be friends (wait for your love)", artist: "Ariana Grande" },
  { title: "about you", artist: "The 1975" }, // Added artist guess
  { title: "kota ini tak sama tanpamu", artist: "Unknown" },
  { title: "take a chance with me", artist: "NIKI" },
  { title: "kita usahakan rumah itu", artist: "Sal Priadi" }
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Simulate progress
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 1;
        });
      }, 1000); // 1% per second for simulation
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTrackIndex]);

  useEffect(() => {
    const handleToggle = () => {
      setIsVisible(true);
      setIsPlaying(true);
    };
    window.addEventListener('toggle-music-player', handleToggle);
    return () => window.removeEventListener('toggle-music-player', handleToggle);
  }, []);

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKLIST.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + TRACKLIST.length) % TRACKLIST.length);
    setProgress(0);
  };

  const currentTrack = TRACKLIST[currentTrackIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="fixed bottom-6 right-6 z-50 glass-panel rounded-2xl p-4 w-80 flex flex-col gap-4"
        >
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute -top-3 -right-3 w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center border border-white/10 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X size={14} />
          </button>

          <div className="flex items-center gap-4 relative">
            {/* Album Art */}
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center relative overflow-hidden shadow-lg shadow-accent-cyan/20">
              <Music size={24} className="text-white z-10" />
              {isPlaying && (
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/20 to-transparent"
                />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.h4 
                  key={currentTrack.title}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-sm font-bold text-white truncate pr-6"
                >
                  {currentTrack.title}
                </motion.h4>
              </AnimatePresence>
              <p className="text-xs text-accent-gold truncate">{currentTrack.artist}</p>
            </div>
            
            {/* Audio Visualizer */}
            {isPlaying && (
              <div className="absolute right-2 top-2 flex gap-1 items-end h-4">
                {[1,2,3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ height: ['20%', '100%', '20%'] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                    className="w-1 bg-accent-cyan rounded-t-sm"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-3 text-[10px] text-slate-400 font-mono">
            <span>{String(Math.floor((progress * 3) / 60)).padStart(1, '0')}:{String(Math.floor((progress * 3) % 60)).padStart(2, '0')}</span>
            <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden cursor-pointer">
              <motion.div 
                className="h-full bg-gradient-to-r from-accent-cyan to-accent-blue"
                style={{ width: `${progress}%` }}
                layout
              />
            </div>
            <span>3:00</span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between px-2">
            <Volume2 size={16} className="text-slate-500" />
            <div className="flex items-center justify-center gap-4">
              <button onClick={handlePrev} className="text-slate-400 hover:text-white transition-colors hover:scale-110">
                <SkipBack size={20} />
              </button>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-full bg-accent-cyan text-slate-950 flex items-center justify-center hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] hover:scale-105"
              >
                {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" className="ml-1" />}
              </button>
              <button onClick={handleNext} className="text-slate-400 hover:text-white transition-colors hover:scale-110">
                <SkipForward size={20} />
              </button>
            </div>
            <div className="w-4" /> {/* Spacer to balance volume icon */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MusicPlayer;
