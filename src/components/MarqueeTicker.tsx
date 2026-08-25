import { Sparkles, BarChart2, Video, Globe, BookOpen, Layers } from 'lucide-react';

export default function MarqueeTicker() {
  const tickerItems = [
    { text: 'DIGITAL MARKETING', icon: Sparkles },
    { text: 'CONTENT CREATION & TIKTOK', icon: Video },
    { text: 'SOCIAL MEDIA STRATEGY', icon: Globe },
    { text: 'DATA & ANALYTICAL THINKING', icon: BarChart2 },
    { text: 'ACCOUNTING INFORMATION SYSTEMS', icon: BookOpen },
    { text: 'PUBLIC AFFAIRS & BEAUTY', icon: Layers },
    { text: 'COMMUNITY MANAGEMENT', icon: Sparkles },
    { text: 'ORGANIC GROWTH & PAID ADS', icon: BarChart2 }
  ];

  return (
    <div className="py-5 bg-[#FDFBF7] border-y border-[#E2E2E2] overflow-hidden">
      <div className="relative w-full overflow-hidden flex">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-6">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#E2E2E2] text-xs font-black uppercase tracking-wider text-[#333333] shadow-2xs hover:border-[#D4818F] transition-colors cursor-default"
              >
                <Icon className="w-3.5 h-3.5 pink-accent" />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
