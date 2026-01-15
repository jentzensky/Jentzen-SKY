import React from 'react';

export const Workflow: React.FC = () => {
  const steps = [
    { num: "01", title: "初步咨询 (Consultation)", desc: "了解你的生意模式与 Sakkie 痛点" },
    { num: "02", title: "需求评估 (Audit)", desc: "Check 你的 Brand，找出问题根源" },
    { num: "03", title: "提案报价 (Quotation)", desc: "量身定制方案，Price 公道透明" },
    { num: "04", title: "业绩起飞 (Huat Ah)", desc: "Execute 方案，优化 Data，坐等收钱" },
  ];

  return (
    <section className="py-20 bg-cyberGray">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           {steps.map((step, idx) => (
             <div key={idx} className="relative p-6 border-l-4 border-white/10 hover:border-brandOrange transition-colors bg-black/20 rounded-r-lg">
               <span className="text-5xl font-black text-white/5 absolute top-2 right-4 font-sans italic">{step.num}</span>
               <h3 className="text-lg font-black text-white mb-2">{step.title}</h3>
               <p className="text-gray-400 text-sm font-medium">{step.desc}</p>
             </div>
           ))}
         </div>
       </div>
    </section>
  );
};