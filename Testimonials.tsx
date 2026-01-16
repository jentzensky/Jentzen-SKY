import React from 'react';
import { Star, TrendingUp, MessageCircle, Building2, FileText, ExternalLink, Quote, User } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const Testimonials: React.FC = () => {
  const { content } = useContent();
  const { cases } = content;

  return (
    <section id="success" className="py-24 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
             <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              老板真心话 <span className="text-brandOrange">Real Feedback</span>
            </h2>
            <p className="text-gray-400 font-medium">听听这些老板用了 Jentzen SKY 之后怎么说？</p>
          </div>
          <div className="hidden md:block">
            <span className="text-brandYellow font-mono text-sm border border-brandYellow px-2 py-1 rounded">Trust Score: 100%</span>
          </div>
        </div>

        {/* Featured Cases - Redesigned as Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cases.map((item) => (
            <div key={item.id} className="relative p-8 rounded-3xl bg-cyberGray border border-white/10 hover:border-brandOrange/50 transition-all duration-300 group hover:-translate-y-2 flex flex-col">
              {/* Background Decor */}
              <Quote className="absolute top-6 right-6 text-white/5 w-20 h-20 rotate-12 group-hover:text-brandOrange/10 transition-colors" />
              
              {/* Header: Avatar & Info */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-16 h-16 rounded-full border-2 border-brandOrange p-0.5 shadow-[0_0_15px_rgba(255,102,0,0.3)] bg-gray-900 flex items-center justify-center overflow-hidden">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <User className="w-9 h-9 text-gray-500" />
                    )}
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white leading-tight">{item.name}</h3>
                    <div className="flex gap-1 mt-1 text-brandYellow">
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                        <Star size={12} fill="currentColor" />
                    </div>
                </div>
              </div>

              {/* Body: Quote */}
              <div className="relative z-10 flex-1">
                 <p className="text-gray-300 italic leading-relaxed text-sm mb-6">
                   "{item.desc}"
                 </p>
              </div>

              {/* Footer: Result Tag */}
              <div className="relative z-10 pt-4 border-t border-white/10 mt-auto">
                 <div className="inline-flex items-center gap-2 text-brandOrange font-bold text-sm bg-brandOrange/10 px-3 py-1.5 rounded-lg">
                    <TrendingUp size={14} />
                    {item.result}
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners Link Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
              <Building2 className="text-brandOrange" />
              更多合作商家 Trusted Partners
            </h3>
            <div className="h-1 w-12 bg-white/10 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
                还有超过 50+ 间 F&B 和各行各业的老板选择相信我们。点击下方查看完整 List。
            </p>
          </div>
          
          <div className="flex justify-center">
             <a 
               href="https://drive.google.com/file/d/1_0-6rkRwL0GwaCA3804FeO1M9jNxQXG5/view?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
               className="group relative flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brandOrange rounded-2xl p-6 transition-all duration-300 w-full max-w-2xl hover:-translate-y-1 hover:shadow-glow-orange"
             >
                <div className="bg-brandOrange/20 p-4 rounded-xl group-hover:bg-brandOrange group-hover:text-white transition-colors text-brandOrange">
                    <FileText size={32} />
                </div>
                <div className="flex-1 text-left">
                    <h4 className="text-lg font-bold text-white group-hover:text-brandOrange transition-colors">
                        点击查看完整商家名单 (PDF)
                    </h4>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300">
                        View Full Partners List - Google Drive
                    </p>
                </div>
                <div className="bg-black/20 p-2 rounded-full text-gray-500 group-hover:text-white transition-colors">
                    <ExternalLink size={20} />
                </div>
             </a>
          </div>
        </div>

        <div className="flex justify-center">
          <a 
            href="https://wa.me/60126539881?text=Hi%20Jentzen,%20I%20saw%20your%20clients%20result,%20I%20want%20to%20know%20more."
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