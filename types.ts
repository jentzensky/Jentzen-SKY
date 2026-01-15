export interface LeadForm {
  name: string;
  company_name: string;
  social_media_handle: string;
  phone: string;
  service_type: string;
  budget_range: string;
}

export enum ServiceType {
  STRATEGY = '全案 Marketing Strategy (包到完)',
  CONTENT = 'Content Creation (拍照/拍片/写文案)',
  ADS = 'Ads 广告投放 (FB/IG/TikTok)',
  KOC = 'KOC / 好食光 Viral 推广',
  OTHER = '其他吹水/合作咨询'
}

export interface TestCase {
  id: string;
  name: string;
  result: string;
  desc: string;
  image: string;
}

export interface Partner {
  id: string;
  name: string;
  logo?: string; // Optional custom logo URL (base64)
}

export interface PortfolioItem {
  id: string;
  type: 'image' | 'video';
  url: string; // Base64 or URL
  title: string;
  category: string; // e.g., 'F&B', 'Corporate'
}

export interface SiteContent {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  cases: TestCase[];
  partners: Partner[];
  portfolio: PortfolioItem[];
}