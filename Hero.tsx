import React from 'react';
import { ArrowRight, Flame, ChefHat } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const Hero: React.FC = () => {
  const { content } = useContent();
  const { title, subtitle, description } = content.hero;

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSuccess = () => {
    document.getElementById('success')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] bg-cover bg-center opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/80 to-cyberDark"></div>
      
      {/* Animated Floating Ingredients/Icons */}
      <div className="absolute top-1/4 left-10 text-4xl opacity-20 animate-float pointer-events-none select-none">🍔</div>
      <div className="absolute bottom-1/4 right-10 text-4xl opacity-20 animate-float-delayed pointer-events-none select-none">📈</div>
      <div className="absolute top-1/3 right-1/4 text-5xl opacity-10 animate-float pointer-events-none select-none">🔥</div>
      <div className="absolute bottom-1/3 left-1/4 text-4xl opacity-10 animate-float-delayed pointer-events-none select-none">💰</div>

      {/* Orange Glows */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brandOrange/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brandYellow/10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brandOrange/50 bg-brandOrange/10 backdrop-blur-sm mb-8 animate-bounce-slow hover:bg-brandOrange/20 transition-colors cursor-default">
          <Flame className="w-5 h-5 text-brandOrange animate-pulse" />
          <span className="text-brandOrange font-bold tracking-wide text-sm uppercase">8年实战经验 • No Bullshit</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
          {title}<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandOrange to-brandYellow drop-shadow-sm relative inline-block">
             {subtitle}
             {/* Small sparkle decor */}
             <span className="absolute -top-4 -right-6 text-2xl text-white animate-pulse">✨</span>
          </span>
          <span className="relative block mt-2 text-white/90">
            <svg className="absolute w-2/3 left-1/2 -translate-x-1/2 h-4 -bottom-2 text-brandOrange opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="none" className="animate-pulse"/>
            </svg>
          </span>
        </h1>

        <p className="mt-8 text-xl text-gray-300 max-w-3xl leading-relaxed whitespace-pre-line font-medium backdrop-blur-sm bg-black/10 p-4 rounded-xl">
          {description}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-20">
          <button 
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-gradient-to-r from-brandOrange to-red-600 text-white font-black text-lg rounded-xl overflow-hidden shadow-glow-orange hover:scale-105 transition-all duration-300 active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              来，帮忙“点火” 🔥 <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button 
            onClick={scrollToSuccess}
            className="px-8 py-4 bg-white/5 border border-white/20 text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-brandOrange/50 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            看我的战绩 (Result)
          </button>
        </div>
      </div>
    </section>
  );
};