import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <div className="relative w-full min-h-screen text-slate-200">
          <Background />
          <Navbar />
          
          <main className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl mx-auto px-4 md:px-8">
            <Hero />
            <About />
            <Portfolio />
            <Contact />
          </main>
          
          {/* Floating Music Player */}
          <MusicPlayer />
        </div>
      )}
    </>
  );
}

export default App;
