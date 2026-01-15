import React, { useState, useEffect } from 'react';
import { Menu, X, ChefHat } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-cyberDark/95 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 bg-gradient-to-tr from-brandOrange to-brandYellow rounded-full flex items-center justify-center shadow-glow-orange">
              <ChefHat className="text-black w-6 h-6" />
            </div>
            <span className="font-black text-2xl tracking-tighter text-white">
              JENTZEN <span className="text-brandOrange">SKY</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <button onClick={() => scrollToSection('pain-points')} className="hover:text-brandOrange transition-colors px-3 py-2 rounded-md text-sm font-bold">做老板的痛</button>
              <button onClick={() => scrollToSection('usp')} className="hover:text-brandOrange transition-colors px-3 py-2 rounded-md text-sm font-bold">我的招数</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-brandOrange transition-colors px-3 py-2 rounded-md text-sm font-bold">Service Menu</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-brandYellow text-brandYellow transition-colors px-3 py-2 rounded-md text-sm font-bold border border-brandYellow/30">看作品 🔥</button>
              <button onClick={() => scrollToSection('success')} className="hover:text-brandOrange transition-colors px-3 py-2 rounded-md text-sm font-bold">战绩 Wall</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-brandOrange text-white hover:bg-white hover:text-brandOrange transition-all px-6 py-2 rounded-full font-black text-sm shadow-glow-orange uppercase ml-2"
              >
                PM 聊聊
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-cyberGray border-b border-white/10 absolute w-full left-0 top-20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <button onClick={() => scrollToSection('pain-points')} className="text-gray-300 hover:text-brandOrange block px-3 py-3 rounded-md text-base font-bold w-full text-left border-b border-white/5">做老板的痛</button>
            <button onClick={() => scrollToSection('usp')} className="text-gray-300 hover:text-brandOrange block px-3 py-3 rounded-md text-base font-bold w-full text-left border-b border-white/5">我的招数</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-brandOrange block px-3 py-3 rounded-md text-base font-bold w-full text-left border-b border-white/5">Service Menu</button>
             <button onClick={() => scrollToSection('portfolio')} className="text-brandYellow hover:text-white block px-3 py-3 rounded-md text-base font-bold w-full text-left border-b border-white/5">看作品 (Works) 🔥</button>
            <button onClick={() => scrollToSection('success')} className="text-gray-300 hover:text-brandOrange block px-3 py-3 rounded-md text-base font-bold w-full text-left border-b border-white/5">战绩 Wall</button>
            <button onClick={() => scrollToSection('contact')} className="text-white bg-brandOrange hover:bg-brandOrange/90 block px-3 py-3 rounded-md text-base font-black w-full text-center mt-6 shadow-glow-orange">PM 聊聊</button>
          </div>
        </div>
      )}
    </nav>
  );
};