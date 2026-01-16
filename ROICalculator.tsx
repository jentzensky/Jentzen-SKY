import React, { useState } from 'react';
import { Calculator, TrendingUp, Users, Target, Info } from 'lucide-react';

export const ROICalculator: React.FC = () => {
  // Min Budget = RM 1500 (Service) + RM 1000 (Ads) = RM 2500
  const [totalBudget, setTotalBudget] = useState(2500);

  const serviceFee = 1500;
  const adSpend = totalBudget - serviceFee;

  // Logic: Only Ad Spend generates Traffic
  // RM1 Ad Spend = ~80-120 Views
  // RM1 Ad Spend = ~0.05 - 0.1 Leads
  const estimatedViews = Math.floor(adSpend * 100); 
  const estimatedLeads = Math.floor(adSpend * 0.05); // e.g. RM 1000 ads -> 50 leads
  const potentialReach = Math.floor(adSpend * 200); 

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-cyberGray border-y border-white/5 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-green-500/50 bg-green-500/10 text-green-400 font-bold text-sm mb-4">
            <Calculator size={16} /> 业绩模拟器
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            算一算，你的 <span className="text-brandOrange">Huat</span> 指数！
          </h2>
          <p className="text-gray-400">
            透明化收费，把每一分钱算清楚。拉动下面看看你的 Budget 能带来多少潜在业绩。
            <br/><span className="text-xs text-gray-500">*Service Fee RM 1,500 起，Ads Budget RM 1,000 起。</span>
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="mb-8">
            <label className="flex justify-between items-end mb-4">
              <span className="text-lg font-bold text-white">总预算 Total Budget (Monthly)</span>
              <span className="text-3xl font-black text-brandOrange">RM {formatNumber(totalBudget)}</span>
            </label>
            <input 
              type="range" 
              min="2500" 
              max="20000" 
              step="100" 
              value={totalBudget} 
              onChange={(e) => setTotalBudget(Number(e.target.value))}
              className="w-full h-4 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-brandOrange"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2 font-mono">
              <span>RM 2,500 (Starter)</span>
              <span>RM 20,000+ (Scale)</span>
            </div>
          </div>

          {/* Budget Breakdown Visualizer */}
          <div className="bg-black/40 rounded-xl p-4 mb-8 border border-white/5 flex flex-col md:flex-row gap-4 justify-between items-center text-sm">
             <div className="flex items-center gap-2 text-gray-400">
                <Info size={16} className="text-brandYellow" />
                <span>预算分配 Breakdown:</span>
             </div>
             <div className="flex gap-4 w-full md:w-auto">
                <div className="flex-1 bg-gray-800 rounded px-3 py-2 border-l-4 border-gray-500">
                   <p className="text-[10px] text-gray-400 uppercase">Service Fee (人力/策划)</p>
                   <p className="font-bold text-white">RM {formatNumber(serviceFee)}</p>
                </div>
                <div className="flex-1 bg-gray-800 rounded px-3 py-2 border-l-4 border-brandOrange">
                   <p className="text-[10px] text-brandOrange uppercase font-bold">Actual Ad Spend (流量)</p>
                   <p className="font-bold text-white">RM {formatNumber(adSpend)}</p>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Metric 1 */}
            <div className="bg-black/40 p-6 rounded-2xl border border-white/5 text-center group hover:border-brandYellow/50 transition-all">
              <div className="w-12 h-12 bg-brandYellow/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <Users className="text-brandYellow w-6 h-6" />
              </div>
              <h3 className="text-gray-400 text-sm font-bold mb-1">潜在触达人数 (Reach)</h3>
              <p className="text-2xl font-black text-white">{formatNumber(potentialReach)}+</p>
            </div>

            {/* Metric 2 */}
            <div className="bg-black/40 p-6 rounded-2xl border border-white/5 text-center group hover:border-brandOrange/50 transition-all relative overflow-hidden">
               <div className="absolute inset-0 bg-brandOrange/5 animate-pulse"></div>
              <div className="w-12 h-12 bg-brandOrange/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform relative z-10">
                <Target className="text-brandOrange w-6 h-6" />
              </div>
              <h3 className="text-gray-400 text-sm font-bold mb-1 relative z-10">预计曝光量 (Views)</h3>
              <p className="text-2xl font-black text-white relative z-10">{formatNumber(estimatedViews)}+</p>
            </div>

            {/* Metric 3 */}
            <div className="bg-black/40 p-6 rounded-2xl border border-white/5 text-center group hover:border-green-500/50 transition-all">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <TrendingUp className="text-green-500 w-6 h-6" />
              </div>
              <h3 className="text-gray-400 text-sm font-bold mb-1">潜在询问 (Leads)</h3>
              <p className="text-2xl font-black text-white">~{estimatedLeads}</p>
            </div>
          </div>

          <div className="mt-8 text-center">
             <a 
               href={`https://wa.me/60126539881?text=Hi%20Jentzen,%20my%20total%20budget%20is%20RM${totalBudget}%20(RM${serviceFee}%20Service%20+%20RM${adSpend}%20Ads).%20Can%20we%20start?`}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-black hover:bg-brandOrange hover:text-white transition-all shadow-lg hover:shadow-[0_0_20px_#FF6600]"
             >
               <Calculator size={18} /> 用 RM {formatNumber(totalBudget)} 启动计划
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};