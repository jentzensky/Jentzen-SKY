import React from 'react';
import { TrendingDown, UserX, Ghost, MessageCircle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const pains = [
    {
      icon: <TrendingDown className="w-12 h-12 text-red-500" />,
      title: "做 F&B 的",
      desc: "食物明明很好吃，但店里静过图书馆？只能靠 Discount 来吸引那些“吃了就跑”的顾客？",
      bg: "bg-red-500/5 hover:border-red-500/50 hover:bg-red-500/10"
    },
    {
      icon: <Ghost className="w-12 h-12 text-gray-400" />,
      title: "做 Service / 装修的",
      desc: "Facebook Page开了几年，PM 只有小猫两三只？Leads 也是那种问爽不要买的？",
      bg: "bg-gray-500/5 hover:border-gray-400/50 hover:bg-gray-500/10"
    },
    {
      icon: <UserX className="w-12 h-12 text-brandOrange" />,
      title: "做 Brand 的",
      desc: "产品很好，但没有人懂？投了 Ads 也是把钱丢进大海，ROI 惨不忍睹？",
      bg: "bg-orange-500/5 hover:border-brandOrange/50 hover:bg-brandOrange/10"
    }
  ];

  return (
    <section id="pain-points" className="py-24 bg-cyberGray relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            你的生意是不是也遇到<br/><span className="text-brandOrange">这些“头痛”的问题</span>？
          </h2>
          <div className="h-1.5 w-24 bg-brandOrange mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pains.map((pain, index) => (
            <div key={index} className={`group p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:shadow-2xl hover:animate-shake cursor-default ${pain.bg}`}>
              <div className="mb-6 p-4 rounded-full bg-black/40 w-fit group-hover:scale-110 transition-transform duration-300 border border-white/5 shadow-lg relative overflow-hidden">
                {pain.icon}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">{pain.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium group-hover:text-gray-300">
                {pain.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href="https://wa.me/60126539881?text=Hi%20Jentzen,%20sakit%20kepala%20la%20my%20marketing."
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] shadow-lg hover:-translate-y-1 transition-all group"
          >
            <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
            解决你的 Sakit Kepala: 012-653 9881
          </a>
        </div>
      </div>
    </section>
  );
};