import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';
import { PlayCircle, Image as ImageIcon, Sparkles } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const { content } = useContent();
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');

  const filteredItems = (content.portfolio || []).filter(item => 
    filter === 'all' ? true : item.type === filter
  );

  return (
    <section id="portfolio" className="py-24 bg-cyberGray relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block animate-bounce-slow">
             <Sparkles className="text-brandYellow w-8 h-8 mx-auto mb-2" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            我的大厨 <span className="text-brandOrange">招牌菜</span> (Works)
          </h2>
          <p className="text-gray-400 font-medium max-w-2xl mx-auto">
            这里都是我亲自操刀的作品。无论是让人流口水的 Food Porn，还是看一眼就想 Click 的 Viral Video，通通都在这里。
          </p>
        </div>

        {/* Filters - Fixed: Added flex-wrap and items-center to prevent overlap */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-bold transition-all whitespace-nowrap ${filter === 'all' ? 'bg-brandOrange text-white shadow-glow-orange scale-105' : 'bg-black/40 text-gray-400 border border-white/10 hover:text-white hover:border-brandOrange/50'}`}
          >
            全部 All
          </button>
          <button 
            onClick={() => setFilter('image')}
            className={`px-6 py-2 rounded-full font-bold transition-all flex items-center justify-center gap-2 whitespace-nowrap ${filter === 'image' ? 'bg-brandYellow text-black shadow-glow-yellow scale-105' : 'bg-black/40 text-gray-400 border border-white/10 hover:text-white hover:border-brandYellow/50'}`}
          >
            <ImageIcon size={18} className="flex-shrink-0" /> 
            <span>平面 Design</span>
          </button>
          <button 
            onClick={() => setFilter('video')}
            className={`px-6 py-2 rounded-full font-bold transition-all flex items-center justify-center gap-2 whitespace-nowrap ${filter === 'video' ? 'bg-red-600 text-white shadow-[0_0_15px_#DC2626] scale-105' : 'bg-black/40 text-gray-400 border border-white/10 hover:text-white hover:border-red-600/50'}`}
          >
            <PlayCircle size={18} className="flex-shrink-0" /> 
            <span>视频 Video</span>
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-black/50 border border-white/10 hover:border-brandOrange/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.type === 'image' ? (
                <div className="relative overflow-hidden">
                  <img 
                    src={item.url} 
                    alt={item.title} 
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-brandYellow text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                      <ImageIcon size={12}/> Graphic / Poster
                    </span>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <video 
                    src={item.url} 
                    controls 
                    className="w-full h-auto bg-black"
                    poster={item.url + "#t=0.1"} // Simple trick for video thumbnail if supported
                  />
                  <div className="p-4 bg-black/80 border-t border-white/5">
                    <span className="text-red-500 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                      <PlayCircle size={12}/> Video Content
                    </span>
                    <h3 className="text-white font-bold text-sm truncate">{item.title}</h3>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/5 border-dashed animate-pulse">
            <p className="text-gray-500">暂时没有作品，请去 Admin Panel 上传。</p>
          </div>
        )}

      </div>
    </section>
  );
};