import React from 'react';
import { Utensils, Users, Store, MessageCircle, ExternalLink, ChefHat } from 'lucide-react';

export const ChefTheory: React.FC = () => {
  // Updated order: XHS, FB, Douyin, IG, TikTok
  const platforms = [
    { name: '小红书 (XHS)', url: 'https://xhslink.com/m/6k9EGpFFLTW' },
    { name: 'Facebook', url: 'https://www.facebook.com/Fun4life.my' },
    { name: '抖音 (Douyin)', url: 'https://v.douyin.com/S4WH5uB/' },
    { name: 'Instagram', url: 'https://www.instagram.com/fun4life.my?igsh=MXNweWN1ZnhhZ3pieA==' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@fun4life.my' }
  ];

  return (
    <section id="usp" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-brandOrange/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Theory */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-brandYellow text-brandYellow font-bold text-sm mb-6 bg-brandYellow/10">
              <ChefHat size={16}/> UNIQUE SELLING POINT
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              独家 <span className="text-brandOrange">“Cooking 理论”</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              很多老板以为只要丢钱投 Ads，生意就会自动好。
              <br/><br/>
              <span className="text-brandYellow font-bold text-2xl">错！大错特错！</span>
              <br/><br/>
              引流只是 Amplifier（放大器）。你的产品是“食材”，我是“大厨”。
              如果食材不新鲜，神仙也救不了你。但如果食材好，
              <span className="text-brandOrange font-bold border-b border-brandOrange/50 pb-1">我会用我的火候（广告技术）和摆盘（Content Marketing），帮你炒出一盘让全城排队的爆款好菜！</span>
            </p>
            <div className="flex gap-4 mb-8">
              <div className="flex items-center gap-2 text-white font-bold bg-white/10 px-4 py-2 rounded-lg">
                <Utensils className="text-brandOrange" /> 挖卖点
              </div>
              <div className="flex items-center gap-2 text-white font-bold bg-white/10 px-4 py-2 rounded-lg">
                <Store className="text-brandOrange" /> 讲故事
              </div>
            </div>

            <a 
              href="https://wa.me/60126539881?text=Hi%20Jentzen,%20I%20want%20to%20know%20more%20about%20your%20Chef%20Theory."
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#128C7E] transition-colors"
            >
              <MessageCircle size={20} />
              马上咨询: 012-653 9881
            </a>
          </div>
          <div className="relative">
             <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
              alt="Digital Marketing Analytics Growth" 
              className="rounded-3xl rotate-3 hover:rotate-0 transition-transform duration-500 border-2 border-brandOrange/30 shadow-glow-orange opacity-90"
            />
            <div className="absolute -bottom-6 -left-6 bg-cyberGray p-6 rounded-xl border border-white/10 shadow-xl">
              <p className="text-brandYellow font-black text-4xl">120%</p>
              <p className="text-gray-400 text-sm font-bold">平均业绩 Up</p>
            </div>
          </div>
        </div>

        {/* Ecosystem */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border border-brandOrange/20 relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brandOrange/10 rounded-full blur-[80px]"></div>
           
           <div className="relative z-10 text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
                {/* Logo Placeholder - Replace src with actual logo URL if available */}
                <div className="mb-6 flex justify-center md:justify-start">
                  <div className="bg-white/10 p-4 rounded-xl border border-white/5 inline-block backdrop-blur-sm">
                     {/* Simulating the logo provided in prompt */}
                     <span className="text-3xl font-black text-white flex items-center gap-2">
                       <span className="text-brandYellow">好</span>
                       <span className="text-white">食</span>
                       <span className="text-brandYellow">光</span>
                       <span className="text-sm bg-brandYellow text-black px-2 py-0.5 rounded ml-2 font-bold">FUN 4 LIFE</span>
                     </span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  “自带流量”的 Ecosystem
                </h3>
                <p className="text-gray-400 mb-6 font-medium">
                  我不只是帮你投广告，我直接把流量带给你！
                  <br/>
                  利用我旗下 <strong>"好食光"</strong> 平台的 KOC 资源，全网粉丝超过 63,000+。
                  一站式分发到 5 大热门平台，让你的店瞬间变网红店。
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                  {platforms.map((platform) => (
                    <a 
                      key={platform.name} 
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1 px-4 py-2 bg-white/10 hover:bg-brandOrange border border-white/10 hover:border-brandOrange rounded-full text-sm text-gray-300 hover:text-white transition-all font-medium"
                    >
                      {platform.name} <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity"/>
                    </a>
                  ))}
                </div>
                
                <div className="flex justify-center md:justify-start">
                   <a 
                    href="https://wa.me/60126539881?text=Hi%20Jentzen,%20I%20am%20interested%20in%20your%20Fun4Life%20ecosystem."
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-[#25D366] font-bold hover:text-white transition-colors border-b border-[#25D366] pb-1"
                  >
                    <MessageCircle size={16} />
                    加入好食光: 012-653 9881
                  </a>
                </div>
             </div>
             <div className="flex flex-col items-center justify-center border-l-0 md:border-l border-white/10 pl-0 md:pl-12">
               <Users className="w-16 h-16 text-brandOrange mb-4" />
               <div className="text-5xl font-black text-white mb-2">50K+</div>
               <div className="text-brandOrange tracking-widest font-bold uppercase">Total Followers</div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};