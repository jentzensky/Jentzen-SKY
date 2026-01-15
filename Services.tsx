import React from 'react';
import { LayoutDashboard, Video, Rocket, Megaphone, CheckCircle2, MessageCircle } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <LayoutDashboard className="w-8 h-8 text-brandOrange" />,
      title: "Social Media 全托管 (Management)",
      desc: "Facebook & Instagram 交给我们。不仅仅是 Post 爽，我们负责账号规划、回复 PM、还会做 Crisis Management。让你的 Page 看起来 Professional。",
      borderColor: "hover:border-brandOrange hover:shadow-[0_0_20px_rgba(255,102,0,0.2)]",
      features: []
    },
    {
      icon: <Video className="w-8 h-8 text-brandYellow" />,
      title: "拍摄与设计 (Shooting & Design)",
      desc: "专业 Team 上门拍摄。无论是 Reels 短视频、产品照、还是 Menu 设计，全部包办。用 Pattern 很多的画面来吸引顾客。",
      borderColor: "hover:border-brandYellow hover:shadow-[0_0_20px_rgba(255,204,0,0.2)]",
      features: []
    },
    {
      icon: <Rocket className="w-8 h-8 text-red-500" />,
      title: "广告投放 (Ads Performance)",
      desc: "Facebook & Instagram Ads 精准投放。拒绝盲目烧钱，每一分 Budget 都花在刀刃上。我们看 Data 讲话，不好我们就改到好。",
      borderColor: "hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]",
      features: []
    },
    {
      icon: <Megaphone className="w-8 h-8 text-green-500" />,
      title: "好食光推广配套 (Fun4Life)",
      desc: "最强引流爆款！结合 KOC + 5大平台，瞬间引爆 Traffic。",
      borderColor: "hover:border-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]",
      features: [
        "亲自到现场拍摄 🎬",
        "Video 拍摄 + 剪辑",
        "超强 Copywriting 文案",
        "设计吸睛 Cover Photo",
        "5平台 Viral Post (FB, IG, TikTok, Douyin, XHS)",
        "Review 满意才 Post",
        "送你 Final Video 慢慢用"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-cyberGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Marketing 大厨的 <span className="text-brandOrange">Full Course Menu</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-medium">
            从 Account Management、拍摄剪辑、Design 到下 Ads，一站式搞定。<br/>
            我不做所谓的“小编”，我做的是帮你赚钱的“操盘手”。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={index} className={`glass bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 transition-all duration-300 group ${service.borderColor} flex flex-col hover:-translate-y-2`}>
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-white/5 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brandOrange transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </div>
              </div>
              
              {service.features.length > 0 && (
                <div className="mt-auto pt-4 border-t border-white/5 pl-[4.5rem]">
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-sm text-gray-300 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brandYellow flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            href="https://wa.me/60126539881?text=Hi%20Jentzen,%20I%20am%20interested%20in%20your%20Social%20Media%20Services."
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#128C7E] shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-all transform hover:-translate-y-1 active:scale-95"
          >
            <MessageCircle className="w-6 h-6" />
            定制你的 Marketing 方案: 012-653 9881
          </a>
        </div>
      </div>
    </section>
  );
};