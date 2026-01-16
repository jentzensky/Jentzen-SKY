import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase, TABLE_NAME } from '../services/supabaseClient';
import { LeadForm, ServiceType } from '../types';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadForm>({
    name: '',
    company_name: '',
    social_media_handle: '',
    phone: '',
    service_type: ServiceType.STRATEGY,
    budget_range: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // 1. Attempt to save to Supabase (Optional/Backup)
      const isConfigured = supabase.supabaseUrl && !supabase.supabaseUrl.includes('example.supabase.co');
      if (isConfigured) {
        await supabase.from(TABLE_NAME).insert([formData]);
      } else {
        console.log("Mock submission to Supabase:", formData);
      }

      // 2. Construct WhatsApp Message and Redirect
      const message = `你好 Jentzen，我想咨询 Marketing 服务：
姓名: ${formData.name}
公司: ${formData.company_name}
电话: ${formData.phone}
社交媒体: ${formData.social_media_handle}
服务类型: ${formData.service_type}
预算范围: ${formData.budget_range}`;

      const whatsappUrl = `https://wa.me/60126539881?text=${encodeURIComponent(message)}`;
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');

      setStatus('success');
      setFormData({
        name: '',
        company_name: '',
        social_media_handle: '',
        phone: '',
        service_type: ServiceType.STRATEGY,
        budget_range: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative">
       <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brandOrange to-brandYellow"></div>
       
       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-cyberGray/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-[0_0_50px_rgba(255,102,0,0.2)]">
           
           <div className="text-center mb-10">
             <h2 className="text-3xl font-black text-white mb-2">
               准备好让 Sales <span className="text-brandOrange">翻倍</span> 了吗？
             </h2>
             <p className="text-gray-400 font-medium">
               填这个 Form，会直接 Jump 去 WhatsApp 跟我讲话。<br/>
               <span className="text-brandYellow text-sm font-bold">* Slots 有限，每个月只接 3 个 Full Package 客户</span>
             </p>
           </div>

           {status === 'success' ? (
             <div className="text-center py-12">
               <CheckCircle className="w-20 h-20 text-brandYellow mx-auto mb-6" />
               <h3 className="text-2xl font-bold text-white mb-2">收到！正在 Jump 去 WhatsApp...</h3>
               <p className="text-gray-400">如果没有自动跳，可以检查你的 Browser Setting。</p>
               <button onClick={() => setStatus('idle')} className="mt-8 text-brandOrange hover:underline font-bold">Send 多一次</button>
             </div>
           ) : (
             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-bold text-gray-400 mb-2">你的名字 Name</label>
                   <input 
                    required
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandOrange focus:ring-1 focus:ring-brandOrange transition-all font-medium"
                    placeholder="Jentzen Sky"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-gray-400 mb-2">电话 Phone</label>
                   <input 
                    required
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandOrange focus:ring-1 focus:ring-brandOrange transition-all font-medium"
                    placeholder="012-345 6789"
                   />
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-bold text-gray-400 mb-2">公司/品牌 Company</label>
                   <input 
                    required
                    type="text" 
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandOrange focus:ring-1 focus:ring-brandOrange transition-all font-medium"
                    placeholder="My Awesome Brand"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-gray-400 mb-2">Social Handle (FB/IG)</label>
                   <input 
                    type="text" 
                    name="social_media_handle"
                    value={formData.social_media_handle}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandOrange focus:ring-1 focus:ring-brandOrange transition-all font-medium"
                    placeholder="@mybrand"
                   />
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-bold text-gray-400 mb-2">你需要什么 Service?</label>
                 <select 
                  name="service_type"
                  value={formData.service_type}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandOrange focus:ring-1 focus:ring-brandOrange transition-all font-medium"
                 >
                   {Object.values(ServiceType).map((svc) => (
                     <option key={svc} value={svc} className="bg-black">{svc}</option>
                   ))}
                 </select>
               </div>

               <div>
                 <label className="block text-sm font-bold text-gray-400 mb-2">
                    Total Budget Range (Service + Ads)
                    <span className="block text-xs text-brandOrange font-normal mt-1">
                      *Service Fee RM 1,500 起，Ads Budget RM 1,000 起
                    </span>
                 </label>
                 <select 
                  name="budget_range"
                  value={formData.budget_range}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brandOrange focus:ring-1 focus:ring-brandOrange transition-all font-medium"
                 >
                   <option value="" disabled className="bg-black">请选择 Budget</option>
                   <option value="RM 2.5k - RM 5k" className="bg-black">RM 2,500 - RM 5,000 (Starter)</option>
                   <option value="RM 5k - RM 10k" className="bg-black">RM 5,000 - RM 10,000 (Growth)</option>
                   <option value="> RM 10k" className="bg-black">RM 10,000 + (Aggressive Scale)</option>
                 </select>
               </div>

               {status === 'error' && (
                 <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded font-bold">
                   <AlertCircle size={16} />
                   Aiyoh, 出错了。请检查 Internet 或者直接 WhatsApp 我。
                 </div>
               )}

               <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-gradient-to-r from-brandOrange to-brandYellow text-black font-black text-lg py-4 rounded-xl hover:shadow-[0_0_20px_#FF6600] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase"
               >
                 {status === 'submitting' ? 'Jumping...' : 'Send 去 WhatsApp'} <Send size={20} />
               </button>
             </form>
           )}
         </div>
       </div>
    </section>
  );
};