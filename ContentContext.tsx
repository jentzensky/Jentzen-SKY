import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteContent, TestCase, Partner, PortfolioItem } from '../types';

// Default content (Initial State) - Malaysian Localized
const defaultContent: SiteContent = {const defaultContent: SiteContent = {
  "seo": {
    "title": "Jentzen SKY | 帮你 'Goreng' 出好业绩的 Marketing 大厨",
    "description": "做 Marketing 不只要 Volume，最重要是有 Sales！8年实战经验，Jentzen SKY 帮你把 Viewer 变成 Customer。"
  },
  "hero": {
    "title": "Marketing 就像炒菜",
    "subtitle": "火候不对，再好的料都浪费！",
    "description": "老板，别再烧钱做无效广告了！引流是 Amplifier，产品是 Core。我有 8 年实战经验，不讲 Theory，只讲 Result。不管是 F&B 还是 Service Line，我都懂怎样帮你找客源，让你的生意 Huat 啊！"
  },
  "cases": [
    {
      "id": "1",
      "name": "名将美食馆 Ming Jiong",
      "result": "Sales 翻倍 120%",
      "desc": "主打炭烧烧腊。之前亏到想哭，我帮他重新讲 Brand Story，直接打中吃货的心。3个月直接反亏为盈，烧肉都不够卖！",
      "image": "https://placehold.co/600x400/FFD700/d60000?text=Ming+Jiong+%E5%90%8D%E5%B0%87&font=roboto"
    },
    {
      "id": "2",
      "name": "Summer Cafe 夏日冰室",
      "result": "Booking 电话响不停",
      "desc": "定位重新调整，专门 Target 年轻人。Ads 一跑，Reservation 满到 Kitchen 做不及，老板笑着说'太忙了'。",
      "image": "https://picsum.photos/400/300?random=3"
    },
    {
      "id": "3",
      "name": "星喜咖喱面家",
      "result": "排队排到路边",
      "desc": "用'好食光' KOC 去探店，Video 一出，周末直接爆场。老板忙到没有时间吃饭，还要请人帮忙数钱！",
      "image": "https://picsum.photos/400/300?random=2"
    }
  ],
  "partners": [
    {
      "id": "1",
      "name": "Ah Muk Cha Chaan Teng"
    },
    {
      "id": "2",
      "name": "Back Alley Group"
    },
    {
      "id": "3",
      "name": "Mr. Wu"
    },
    {
      "id": "4",
      "name": "Fenix Restaurant"
    },
    {
      "id": "5",
      "name": "Ming Jiong"
    },
    {
      "id": "6",
      "name": "De' massak"
    },
    {
      "id": "7",
      "name": "Issen Hin Ramen"
    },
    {
      "id": "8",
      "name": "Hao Yi Tea House"
    },
    {
      "id": "9",
      "name": "Ni Kizoku"
    },
    {
      "id": "10",
      "name": "Zok Noodle House"
    }
  ],
  "portfolio": [
    {
      "id": "1",
      "type": "image",
      "url": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
      "title": "F&B Menu Design",
      "category": "Graphic"
    },
    {
      "id": "2",
      "type": "image",
      "url": "https://images.unsplash.com/photo-1511690656952-34342d2c28f5?auto=format&fit=crop&q=80&w=800",
      "title": "CNY Campaign Poster",
      "category": "Graphic"
    },
    {
      "id": "3",
      "type": "image",
      "url": "https://images.unsplash.com/photo-1550963393-27d967469a4c?auto=format&fit=crop&q=80&w=800",
      "title": "Restaurant Opening",
      "category": "Graphic"
    }
  ]
};
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
      name: "名将美食馆 Ming Jiong",
      result: "Sales 翻倍 120%",
      desc: "主打炭烧烧腊。之前亏到想哭，我帮他重新讲 Brand Story，直接打中吃货的心。3个月直接反亏为盈，烧肉都不够卖！",
      image: "https://placehold.co/600x400/FFD700/d60000?text=Ming+Jiong+%E5%90%8D%E5%B0%87&font=roboto"
    },
    {
      id: '2',
      name: "Summer Cafe 夏日冰室",
      result: "Booking 电话响不停",
      desc: "定位重新调整，专门 Target 年轻人。Ads 一跑，Reservation 满到 Kitchen 做不及，老板笑着说'太忙了'。",
      image: "https://picsum.photos/400/300?random=3"
    },
    {
      id: '3',
      name: "星喜咖喱面家",
      result: "排队排到路边",
      desc: "用'好食光' KOC 去探店，Video 一出，周末直接爆场。老板忙到没有时间吃饭，还要请人帮忙数钱！",
      image: "https://picsum.photos/400/300?random=2"
    }
  ],
  partners: [
    { id: '1', name: "Ah Muk Cha Chaan Teng" },
    { id: '2', name: "Back Alley Group" },
    { id: '3', name: "Mr. Wu" },
    { id: '4', name: "Fenix Restaurant" },
    { id: '5', name: "Ming Jiong" },
    { id: '6', name: "De' massak" },
    { id: '7', name: "Issen Hin Ramen" },
    { id: '8', name: "Hao Yi Tea House" },
    { id: '9', name: "Ni Kizoku" },
    { id: '10', name: "Zok Noodle House" },
  ],
  portfolio: [
    { 
      id: '1', 
      type: 'image', 
      url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800', 
      title: 'F&B Menu Design', 
      category: 'Graphic' 
    },
    { 
      id: '2', 
      type: 'image', 
      url: 'https://images.unsplash.com/photo-1511690656952-34342d2c28f5?auto=format&fit=crop&q=80&w=800', 
      title: 'CNY Campaign Poster', 
      category: 'Graphic' 
    },
    { 
      id: '3', 
      type: 'image', 
      url: 'https://images.unsplash.com/photo-1550963393-27d967469a4c?auto=format&fit=crop&q=80&w=800', 
      title: 'Restaurant Opening', 
      category: 'Graphic' 
    }
  ]
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
