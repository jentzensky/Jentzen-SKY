import React from 'react';
import { Facebook, Instagram, Video } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-black text-white">JENTZEN <span className="text-neonBlue">SKY</span></h3>
          <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-neonBlue transition-colors"><Facebook /></a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><Instagram /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Video /></a>
        </div>
      </div>
    </footer>
  );
};