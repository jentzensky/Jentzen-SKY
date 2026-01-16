import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, TestCase, Partner, PortfolioItem } from '../types';

// Default content (Initial State) - Malaysian Localized
const defaultContent: SiteContent = {
  seo: {
    title: "Jentzen SKY | 帮你 'Goreng' 出好业绩的 Marketing 大厨",
    description: "做 Marketing 不只要 Volume，最重要是有 Sales！8年实战经验，Jentzen SKY 帮你把 Viewer 变成 Customer。"
  },
  hero: {
    title: "Marketing 就像炒菜",
    subtitle: "火候不对，再好的料都浪费！",
    description: "老板，别再烧钱做无效广告了！引流是 Amplifier，产品是 Core。我有 8 年实战经验，不讲 Theory，只讲 Result。不管是 F&B 还是 Service Line，我都懂怎样帮你找客源，让你的生意 Huat 啊！"
  },
  cases: [
    {
      id: '1',
      name: "Alex (名将美食馆)",
      result: "12点烧肉就卖完",
      desc: "以前店里静到拍苍蝇，找不到吃。Jentzen 帮我搞了那个 Brand Story 还有拍美美的烧肉照，现在 everyday 12点 烧肉就卖完 liao！生意好到我想哭，真的很 Keng！",
      image: "" // Empty image triggers default User Icon
    },
    {
      id: '2',
      name: "Tommy Wong (Summer Cafe)",
      result: "厨房佬 Complain 做不及",
      desc: "之前都是安哥安娣来，Jentzen 把那个菠萝包和奶茶拍到几诱人一下，现在全是年轻人排队打卡！厨房佬都 Complain 做不及，但我数钱数到爽啦！",
      image: "" // Empty image triggers default User Icon
    },
    {
      id: '3',
      name: "Hou (星喜咖喱面)",
      result: "排队排到大马路",
      desc: "那个 Video 一出，哇不得了！Weekend 排队排到大马路，连 KL 的人都特地跑来吃。我的咖喱面卖到锅底都空去。这个 Marketing 钱花得最值得！",
      image: "" // Empty image triggers default User Icon
    }
  ],
  partners: [], // Partners are now handled via the PDF Link in Testimonials component
  portfolio: [] // Portfolio now uses hardcoded links in component, but we keep the type structure valid
};

interface ContentContextType {
  content: SiteContent;
  updateSEO: (seo: SiteContent['seo']) => void;
  updateHero: (hero: SiteContent['hero']) => void;
  updateCase: (id: string, field: keyof TestCase, value: string) => void;
  updatePartner: (id: string, field: keyof Partner, value: string) => void;
  addPartner: (name: string, logo?: string) => void;
  removePartner: (id: string) => void;
  addPortfolioItem: (item: PortfolioItem) => void;
  removePortfolioItem: (id: string) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem('site_content');
    return saved ? JSON.parse(saved) : defaultContent;
  });

  useEffect(() => {
    localStorage.setItem('site_content', JSON.stringify(content));
  }, [content]);

  const updateSEO = (seo: SiteContent['seo']) => {
    setContent(prev => ({ ...prev, seo }));
  };

  const updateHero = (hero: SiteContent['hero']) => {
    setContent(prev => ({ ...prev, hero }));
  };

  const updateCase = (id: string, field: keyof TestCase, value: string) => {
    setContent(prev => ({
      ...prev,
      cases: prev.cases.map(c => c.id === id ? { ...c, [field]: value } : c)
    }));
  };

  const updatePartner = (id: string, field: keyof Partner, value: string) => {
    setContent(prev => ({
      ...prev,
      partners: prev.partners.map(p => p.id === id ? { ...p, [field]: value } : p)
    }));
  };

  const addPartner = (name: string, logo?: string) => {
    const newPartner = { id: Date.now().toString(), name, logo };
    setContent(prev => ({
      ...prev,
      partners: [newPartner, ...prev.partners]
    }));
  };

  const removePartner = (id: string) => {
    setContent(prev => ({
      ...prev,
      partners: prev.partners.filter(p => p.id !== id)
    }));
  };

  const addPortfolioItem = (item: PortfolioItem) => {
    setContent(prev => ({
      ...prev,
      portfolio: [item, ...prev.portfolio || []]
    }));
  };

  const removePortfolioItem = (id: string) => {
    setContent(prev => ({
      ...prev,
      portfolio: prev.portfolio?.filter(p => p.id !== id) || []
    }));
  };

  const resetContent = () => {
    if (confirm("确定要重置所有内容吗？你的 Setting 会不见掉哦。")) {
      setContent(defaultContent);
    }
  };

  return (
    <ContentContext.Provider value={{ 
      content, 
      updateSEO, 
      updateHero, 
      updateCase, 
      updatePartner, 
      addPartner, 
      removePartner, 
      addPortfolioItem, 
      removePortfolioItem, 
      resetContent 
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within ContentProvider');
  return context;
};