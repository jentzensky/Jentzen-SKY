import React from 'react';
import { Star, TrendingUp, MessageCircle, Building2 } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const Testimonials: React.FC = () => {
  const { content } = useContent();
  const { cases, partners } = content;

  return (
    <section id="success" className="py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
             <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              战绩 Wall <span className="text-brandOrange">Success Stories</span>
            </h2>
            <p className="text-gray-400 font-medium">Data 不会骗人，业绩才是硬道理。</p>
          </div>
          <div className="hidden md:block">
            <span className="text-brandYellow font-mono text-sm border border-brandYellow px-2 py-1 rounded">Trust Score: 100%</span>
          </div>
        </div>

        {/* Featured Cases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cases.map((item) => (
            <div key={item.id} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-cyberGray hover:border-brandOrange/50 transition-colors">
              <div className="aspect-w-16 aspect-h-9 h-48 overflow-hidden bg-gray-800 relative">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
                />
                 {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white leading-tight">{item.name}</h3>
                  <div className="flex items-center gap-1 bg-brandOrange/20 px-2 py-1 rounded text-brandOrange text-xs font-bold whitespace-nowrap ml-2">
                    <TrendingUp size={14} /> {item.result}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4 min-h-[80px] font-medium">
                  {item.desc}
                </p>
                <div className="flex gap-1 text-brandYellow">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted Partners Logo Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
              <Building2 className="text-brandOrange" />
              更多合作商家 Trusted Partners
            </h3>
            <div className="h-1 w-12 bg-white/10 mx-auto rounded-full"></div>
          </div>
          
          {/* Dynamic Grid with Hover Effects */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {partners.map((partner) => (
              <div 
                key={partner.id} 
                className="group relative flex flex-col justify-center items-center p-4 bg-white/5 border border-white/5 rounded-xl transition-all duration-300 aspect-[3/2] cursor-pointer
                           hover:border-brandOrange hover:bg-white/10 hover:shadow-glow-orange hover:scale-105 hover:-translate-y-1"
              >
                 {/* Use custom logo if available, else use generated avatar */}
                 <img 
                   src={partner.logo || `https://ui-avatars.com/api/?name=${encodeURIComponent(partner.name)}&background=random&color=fff&size=128&length=2&font-size=0.4&bold=true`}
                   alt={partner.name}
                   className="w-12 h-12 rounded-full mb-2 shadow-lg opacity-80 group-hover:opacity-100 transition-opacity object-cover"
                 />
                 <span className="text-xs text-gray-400 group-hover:text-white text-center font-bold leading-tight line-clamp-2 transition-colors">
                   {partner.name}
                 </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <a 
            href="https://wa.me/60126539881?text=Hi%20Jentzen,%20I%20want%20to%20achieve%20similar%20results."
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all transform hover:-translate-y-1"
          >
            <MessageCircle className="w-6 h-6" />
            我也要爆单: 012-653 9881
          </a>
        </div>
      </div>
    </section>
  );
};