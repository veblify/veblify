import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Workflow } from './components/Workflow';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a heavy asset load / branding intro
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-brand-black flex items-center justify-center z-50">
        <div className="flex flex-col items-center">
          <div className="text-4xl font-display font-bold text-white tracking-tighter animate-pulse">
            VEBLIFY
          </div>
          <div className="mt-4 w-32 h-[1px] bg-brand-accent/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-brand-accent animate-ping" style={{ animationDuration: '1s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-brand-black text-white selection:bg-brand-accent selection:text-brand-black">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-[60] bg-noise mix-blend-overlay"></div>
      
      <Cursor />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Philosophy />
        <Portfolio />
        <Services />
        <Workflow />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;