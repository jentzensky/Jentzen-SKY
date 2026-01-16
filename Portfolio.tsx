import React from 'react';
import { PlayCircle, Image as ImageIcon, Sparkles, ExternalLink, FolderOpen } from 'lucide-react';

export const Portfolio: React.FC = () => {
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
            这里都是我亲自操刀的作品。点击下方文件夹，直接进入 Google Drive 查看高清原图和完整 Video。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Graphic Design Card */}
          <a 
            href="https://drive.google.com/drive/folders/1DEwAKXOl2dNqxT6xDSg4WWIq90LmwbIv?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-80 rounded-3xl overflow-hidden border border-white/10 hover:border-brandYellow/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,204,0,0.3)] hover:-translate-y-2"
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626785774573-4b7993143a2d?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 bg-brandYellow/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform backdrop-blur-md border border-brandYellow/30">
                <ImageIcon className="w-8 h-8 text-brandYellow" />
              </div>
              <h3 className="text-3xl font-black text-white mb-2">平面设计作品集</h3>
              <p className="text-brandYellow font-bold tracking-widest text-sm uppercase mb-6">Graphic Design Portfolio</p>
              <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-brandYellow hover:text-black text-white px-6 py-3 rounded-full font-bold transition-all backdrop-blur-sm border border-white/20 group-hover:border-transparent">
                <FolderOpen size={18} /> 点击查看 (Google Drive) <ExternalLink size={14} />
              </div>
            </div>
          </a>

          {/* Video Card */}
          <a 
            href="https://drive.google.com/drive/folders/1WyJPJ2Hr6zQIyaeYwXA5uEGWAJ3QtWr7?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative h-80 rounded-3xl overflow-hidden border border-white/10 hover:border-red-600/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:-translate-y-2"
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform backdrop-blur-md border border-red-600/30">
                <PlayCircle className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-3xl font-black text-white mb-2">视频拍摄作品集</h3>
              <p className="text-red-500 font-bold tracking-widest text-sm uppercase mb-6">Video Production Portfolio</p>
              <div className="inline-flex items-center gap-2 bg-white/10 hover:bg-red-600 hover:text-white text-white px-6 py-3 rounded-full font-bold transition-all backdrop-blur-sm border border-white/20 group-hover:border-transparent">
                <FolderOpen size={18} /> 点击查看 (Google Drive) <ExternalLink size={14} />
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};