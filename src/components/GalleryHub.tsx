import { useState } from 'react';
import { ArrowRight, Megaphone, Palette, Briefcase } from 'lucide-react';
import Gallery from './Gallery';
import sc1 from '../../Images/Social Media Posts/sc1.png';
import sc2 from '../../Images/Social Media Posts/sc2.png';
import sc3 from '../../Images/Social Media Posts/sc3.png';
import brand1 from '../../Images/Social Media Posts/brand1.png';
import brand2 from '../../Images/Social Media Posts/brand2.png';
import brand3 from '../../Images/Social Media Posts/brand3.png';
import brand4 from '../../Images/Social Media Posts/brand4.png';
import aerio1 from '../../Images/Social Media Posts/aerio1.png';
import aerio2 from '../../Images/Social Media Posts/aerio2.png';
import aerio3 from '../../Images/Social Media Posts/aerio3.png';
import aerio4 from '../../Images/Social Media Posts/aerio4.png';

export default function GalleryHub() {
  const [selectedNiche, setSelectedNiche] = useState<string | null>(null);

  const niches = [
    {
      id: 'community-posts',
      title: 'Community Posts',
      subtitle: 'Public Awareness & Engagement',
      description: 'Student council campaigns, public awareness initiatives, and community-focused content',
      icon: Megaphone,
      color: '#D4818F',
      skills: ['Community Engagement', 'Advocacy', 'Public Relations'],
      thumbnails: [sc1, sc2, sc3, sc1],
    },
    {
      id: 'product-posts',
      title: 'Product Posts',
      subtitle: 'Brand Aesthetics & Product Marketing',
      description: 'Beauty brand promotions, product showcases, and aesthetic lifestyle content',
      icon: Palette,
      color: '#333333',
      skills: ['Product Marketing', 'Brand Identity', 'Aesthetics'],
      thumbnails: [brand1, brand2, brand3, brand4],
    },
    {
      id: 'advertising-branding',
      title: 'Advertising & Branding',
      subtitle: 'Commercial Campaigns & Promotions',
      description: 'Corporate branding, recruitment campaigns, and promotional advertisements',
      icon: Briefcase,
      color: '#D4818F',
      skills: ['Brand Strategy', 'Campaign Management', 'B2B Marketing'],
      thumbnails: [aerio1, aerio2, aerio3, aerio4],
    },
  ];

  if (selectedNiche) {
    return <Gallery nicheName={selectedNiche} onClose={() => setSelectedNiche(null)} />;
  }

  return (
    <section id="featured-work" className="py-20 md:py-32 bg-white border-t border-[#E2E2E2] relative">
      
      {/* Background Watermark */}
      <div className="absolute right-6 top-10 select-none pointer-events-none opacity-15 hidden lg:block">
        <span className="text-[120px] font-black text-outline tracking-tighter">GALLERY</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#909090] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4818F]"></span>
            CREATIVE GALLERIES
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#333333] tracking-tight leading-[0.95]">
            EXPLORE MY <span className="pink-accent">PORTFOLIO.</span>
          </h2>
          <p className="text-base text-[#505050] max-w-2xl mt-4 font-light">
            Browse my work organized by content type. Click on each gallery to explore the complete collection.
          </p>
        </div>

        {/* Gallery Type Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {niches.map((niche) => {
            const Icon = niche.icon;
            return (
              <div
                key={niche.id}
                onClick={() => setSelectedNiche(niche.id)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg border-2 border-[#E2E2E2] hover:border-current transition-all duration-300 flex flex-col justify-between bg-[#FDFBF7] hover:bg-white transform hover:scale-105"
                  style={{ '--hover-color': niche.color } as React.CSSProperties}
                >
                  {/* Thumbnail Grid */}
                  <div className="relative grid grid-cols-2 gap-0 bg-gray-100 overflow-hidden">
                    {niche.thumbnails.map((thumb, idx) => (
                      <div key={idx} className="relative overflow-hidden aspect-square">
                        <img 
                          src={thumb} 
                          alt={`${niche.title} preview ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                      </div>
                    ))}
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-between flex-1">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-all"
                        style={{ 
                          backgroundColor: `${niche.color}20`,
                          color: niche.color
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-[#333333] mb-2 leading-snug">
                        {niche.title}
                      </h3>
                      <p className="text-sm text-[#666666] mb-4">
                        {niche.description}
                      </p>
                      
                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {niche.skills.slice(0, 2).map((skill, idx) => (
                          <span key={idx} className="text-xs font-semibold px-2 py-1 rounded-full border"
                            style={{
                              backgroundColor: `${niche.color}10`,
                              color: niche.color,
                              borderColor: `${niche.color}30`
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-bold transition-all duration-300 group-hover:gap-3"
                      style={{ color: niche.color }}
                    >
                      <span>VIEW GALLERY</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>

                    {/* Hover Accent */}
                    <div 
                      className="absolute top-0 left-0 w-1 h-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ backgroundColor: niche.color }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
