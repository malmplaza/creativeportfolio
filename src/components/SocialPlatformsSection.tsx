import { ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { LUISA_PROFILE } from '../data/portfolioData';

export default function SocialPlatformsSection() {
  const getPlatformLogo = (name: string) => {
    switch (name) {
      case 'Facebook':
        return (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case 'Instagram':
        return (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case 'TikTok':
        return (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
          </svg>
        );
      case 'X (Twitter)':
        return (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case 'LinkedIn':
        return (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case 'YouTube':
        return (
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
          </svg>
        );
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  const getPlatformColors = (name: string) => {
    switch (name) {
      case 'Facebook':
        return {
          hoverBorder: 'hover:border-[#1877F2]',
          badgeBg: 'bg-[#1877F2]/10 text-[#1877F2] border-[#1877F2]/20',
          iconHover: 'group-hover:text-[#1877F2]'
        };
      case 'Instagram':
        return {
          hoverBorder: 'hover:border-[#E1306C]',
          badgeBg: 'bg-[#E1306C]/10 text-[#E1306C] border-[#E1306C]/20',
          iconHover: 'group-hover:text-[#E1306C]'
        };
      case 'TikTok':
        return {
          hoverBorder: 'hover:border-[#111111]',
          badgeBg: 'bg-[#111111]/10 text-[#111111] border-[#111111]/20',
          iconHover: 'group-hover:text-[#111111]'
        };
      case 'X (Twitter)':
        return {
          hoverBorder: 'hover:border-[#111111]',
          badgeBg: 'bg-[#111111]/10 text-[#111111] border-[#111111]/20',
          iconHover: 'group-hover:text-[#111111]'
        };
      case 'LinkedIn':
        return {
          hoverBorder: 'hover:border-[#0A66C2]',
          badgeBg: 'bg-[#0A66C2]/10 text-[#0A66C2] border-[#0A66C2]/20',
          iconHover: 'group-hover:text-[#0A66C2]'
        };
      case 'YouTube':
        return {
          hoverBorder: 'hover:border-[#FF0000]',
          badgeBg: 'bg-[#FF0000]/10 text-[#FF0000] border-[#FF0000]/20',
          iconHover: 'group-hover:text-[#FF0000]'
        };
      default:
        return {
          hoverBorder: 'hover:border-[#D4818F]',
          badgeBg: 'bg-[#FFB7C5]/30 text-[#D4818F] border-[#FFB7C5]',
          iconHover: 'group-hover:text-[#D4818F]'
        };
    }
  };

  return (
    <section id="social-platforms" className="py-20 md:py-32 bg-[#FDFBF7] border-t border-[#E2E2E2] relative">
      
      {/* Background Subtle Watermark Text */}
      <div className="absolute right-6 top-10 select-none pointer-events-none opacity-15 hidden lg:block">
        <span className="text-[120px] font-black text-outline tracking-tighter">SOCIAL</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#909090] mb-2">
            DISTRIBUTION CHANNELS &amp; CONTENT CHANNELS
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#333333] font-heading tracking-tight leading-[0.95]">
            SOCIAL MEDIA <span className="pink-accent">PLATFORMS:</span>
          </h2>
          <p className="text-base text-[#505050] max-w-2xl mt-3 italic">
            Active management, content creation, community engagement, and performance optimization across major social channels: Facebook, Instagram, TikTok, X (Twitter), LinkedIn, and YouTube.
          </p>
        </div>

        {/* 6 Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LUISA_PROFILE.socialPlatforms.map((platform, idx) => {
            const colors = getPlatformColors(platform.name);
            return (
              <div
                key={idx}
                className={`p-8 rounded-[36px] bg-white border border-[#E2E2E2] ${colors.hoverBorder} transition-all duration-300 shadow-xs flex flex-col justify-between group relative overflow-hidden`}
              >
                <div>
                  
                  {/* Top Bar: Logo & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-[#FDFBF7] border border-[#E2E2E2] flex items-center justify-center text-[#333333] ${colors.iconHover} transition-colors shadow-2xs`}>
                      {getPlatformLogo(platform.name)}
                    </div>
                    
                    <span className="text-xs font-black uppercase tracking-widest text-[#909090]">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Platform Title & Role */}
                  <h3 className="text-2xl font-black text-[#333333] font-heading tracking-tight">
                    {platform.name}
                  </h3>

                  <div className="mt-2 mb-3">
                    <span className={`inline-block text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border ${colors.badgeBg}`}>
                      {platform.role}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#505050] leading-relaxed">
                    {platform.description}
                  </p>

                </div>

                {/* Bottom Bar: Capability Status */}
                <div className="mt-6 pt-4 border-t border-[#E2E2E2] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#909090]">
                    {platform.handle}
                  </span>
                  
                  <span className="flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-[#333333]">
                    <CheckCircle2 className="w-3.5 h-3.5 pink-accent" />
                    Active
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
