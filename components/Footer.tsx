import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end md:items-center gap-8">
        <div>
           <h2 className="font-display font-bold text-2xl text-white">VEBLIFY<span className="text-brand-accent">.</span></h2>
           <p className="text-brand-muted text-xs font-sans mt-2">© {new Date().getFullYear()} Veblify Digital. All rights reserved.</p>
        </div>

        <div className="flex gap-8">
            <a href="#" className="text-brand-muted hover:text-brand-accent text-sm font-sans uppercase tracking-wider transition-colors">Instagram</a>
            <a href="#" className="text-brand-muted hover:text-brand-accent text-sm font-sans uppercase tracking-wider transition-colors">LinkedIn</a>
            <a href="#" className="text-brand-muted hover:text-brand-accent text-sm font-sans uppercase tracking-wider transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};