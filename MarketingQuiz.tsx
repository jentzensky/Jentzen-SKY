import React, { useState } from 'react';
import { ChefHat, AlertTriangle, CheckCircle2, RefreshCcw } from 'lucide-react';

export const MarketingQuiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      q: "你的 Facebook Page 多久 Update 一次？",
      options: [
        { text: "想到才 Post (一两个月一次)", points: 0 },
        { text: "一星期 1-2 次 (还有呼吸)", points: 5 },
        { text: "天天 Post (很勤劳)", points: 10 }
      ]
    },
    {
      q: "你的 Video 内容通常是什么？",
      options: [
        { text: "没有拍 Video，只放照片", points: 0 },
        { text: "拍美美的环境/食物 Close up", points: 5 },
        { text: "有故事、有真人出镜讲解", points: 10 }
      ]
    },
    {
      q: "现在有在投广告 (Ads) 吗？",
      options: [
        { text: "没有，靠缘分 (Organic)", points: 0 },
        { text: "有 Boost Post，但不懂怎样看 Data", points: 5 },
        { text: "有专门的 Funnel 和 Target Audience", points: 10 }
      ]
    }
  ];

  const handleAnswer = (points: number) => {
    const newScore = score + points;
    setScore(newScore);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // Finished
      // Trigger confetti if score is high, or just for fun
      // Cast window to any to avoid TypeScript error since confetti is likely a global script
      if ((window as any).confetti) {
        (window as any).confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const resetQuiz = () => {
    setStep(0);
    setScore(0);
  };

  const getResult = () => {
    if (score < 10) return {
      title: "白开水 (Tawar) 😱",
      desc: "老板，你的 Marketing 味道太淡了！难怪顾客记不住你。你需要立刻加料！",
      color: "text-gray-400",
      icon: <AlertTriangle className="w-12 h-12 text-gray-400 mb-4" />
    };
    if (score < 25) return {
      title: "家常菜 (Normal) 🤔",
      desc: "还可以，但是不够‘Wok Hei’。在这个竞争激烈的市场，你很难突围而出。",
      color: "text-brandYellow",
      icon: <ChefHat className="w-12 h-12 text-brandYellow mb-4" />
    };
    return {
      title: "麻辣火锅 (Pedas!) 🔥",
      desc: "不错哦！你的 Marketing 很有火候。但如果你想把生意再 Scale up，我们需要更高阶的 Strategy！",
      color: "text-brandOrange",
      icon: <CheckCircle2 className="w-12 h-12 text-brandOrange mb-4" />
    };
  };

  return (
    <section className="py-24 bg-cyberGray border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
           <h2 className="text-3xl font-black text-white mb-4">
             Marketing <span className="text-brandOrange">味蕾测试</span> (Taste Test)
           </h2>
           <p className="text-gray-400">
             只需 30 秒，帮你 Check 你的 Marketing 够不够味！
           </p>
        </div>

        <div className="bg-black/50 border border-white/10 rounded-2xl p-8 min-h-[300px] flex flex-col justify-center items-center relative shadow-[0_0_30px_rgba(0,0,0,0.5)]">
           {/* Progress Bar */}
           {step < questions.length && (
             <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 rounded-t-2xl overflow-hidden">
               <div 
                 className="h-full bg-brandOrange transition-all duration-300"
                 style={{ width: `${((step + 1) / questions.length) * 100}%` }}
               ></div>
             </div>
           )}

           {step < questions.length ? (
             <div className="w-full animate-fade-in">
               <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center">
                 {step + 1}. {questions[step].q}
               </h3>
               <div className="grid gap-4">
                 {questions[step].options.map((opt, idx) => (
                   <button
                     key={idx}
                     onClick={() => handleAnswer(opt.points)}
                     className="w-full text-left p-4 rounded-xl border border-white/10 hover:border-brandOrange hover:bg-brandOrange/10 transition-all font-medium text-gray-300 hover:text-white"
                   >
                     {opt.text}
                   </button>
                 ))}
               </div>
             </div>
           ) : (
             <div className="text-center animate-shake w-full">
                {getResult().icon}
                <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">测试结果 Result</h3>
                <h2 className={`text-4xl font-black mb-4 ${getResult().color}`}>
                  {getResult().title}
                </h2>
                <p className="text-white text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                  {getResult().desc}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={`https://wa.me/60126539881?text=Hi%20Jentzen,%20my%20marketing%20score%20is%20${score}/30%20(${getResult().title}).%20Can%20you%20help?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-brandOrange text-white font-bold rounded-full hover:bg-white hover:text-brandOrange transition-all shadow-glow-orange"
                  >
                    找大厨“加料” 🔥
                  </a>
                  <button 
                    onClick={resetQuiz}
                    className="px-8 py-3 border border-white/20 text-gray-400 font-bold rounded-full hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    <RefreshCcw size={16} /> 再测一次
                  </button>
                </div>
             </div>
           )}
        </div>
      </div>
    </section>
  );
};