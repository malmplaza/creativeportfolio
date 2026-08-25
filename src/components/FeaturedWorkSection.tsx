import { Sparkles, Layers, ArrowUpRight, Megaphone, Palette, Briefcase } from 'lucide-react';
import aerio1 from '../../Images/Social Media Posts/aerio1.png';
import aerio2 from '../../Images/Social Media Posts/aerio2.png';
import aerio3 from '../../Images/Social Media Posts/aerio3.png';
import aerio4 from '../../Images/Social Media Posts/aerio4.png';
import aerio5 from '../../Images/Social Media Posts/aerio5.png';
import aerio6 from '../../Images/Social Media Posts/aerio6.png';
import aerio7 from '../../Images/Social Media Posts/aerio7.png';
import aerio8 from '../../Images/Social Media Posts/aerio8.png';
import canon from '../../Images/Social Media Posts/canon.png';
import nara from '../../Images/Social Media Posts/NARA-2.png';
import rizalDay from '../../Images/Social Media Posts/Rizal Day.png';
import sc1 from '../../Images/Social Media Posts/sc1.png';
import sc2 from '../../Images/Social Media Posts/sc2.png';

export default function FeaturedWorkSection() {
  const creativeDomains = [
    {
      title: 'Public Affairs & Student Governance',
      role: 'Head of Public Relations',
      tagline: 'Advocacy campaigns, official press releases & public engagement',
      color: '#D4818F',
      metrics: 'Campus-wide visibility & institutional communication',
      icon: Megaphone,
      skills: ['Campaign Strategy', 'Copywriting', 'Press Releases', 'Visual Collateral'],
      images: [
        { src: nara, alt: 'NARA public affairs social media design' },
        { src: rizalDay, alt: 'Rizal Day campaign social media design' },
        { src: sc1, alt: 'Student council campaign social media design' },
        { src: sc2, alt: 'Student council campaign announcement design' }
      ]
    },
    {
      title: 'Beauty & Aesthetics Marketing',
      role: 'Content & Social Specialist',
      tagline: 'Brand tone development, aesthetic feed layouts & promo visuals',
      color: '#333333',
      metrics: 'Engaging visual identity & high organic reach',
      icon: Palette,
      skills: ['Social Ad Copy', 'Brand Identity', 'Aesthetic Curation', 'Engagement'],
      images: [{ src: canon, alt: 'Beauty and aesthetics social media design' }]
    },
    {
      title: 'B2B Recruitment & Corporate HR',
      role: 'Social Media Management',
      tagline: 'Talent acquisition branding, thought leadership & B2B lead funnels',
      color: '#D4818F',
      metrics: 'Employer branding & candidate attraction',
      icon: Briefcase,
      skills: ['LinkedIn Growth', 'B2B Outreach', 'Employer Branding', 'Analytics'],
      images: [
        { src: aerio1, alt: 'Aerio recruitment social media design 1' },
        { src: aerio2, alt: 'Aerio recruitment social media design 2' },
        { src: aerio3, alt: 'Aerio recruitment social media design 3' },
        { src: aerio4, alt: 'Aerio recruitment social media design 4' },
        { src: aerio5, alt: 'Aerio recruitment social media design 5' },
        { src: aerio6, alt: 'Aerio recruitment social media design 6' },
        { src: aerio7, alt: 'Aerio recruitment social media design 7' },
        { src: aerio8, alt: 'Aerio recruitment social media design 8' }
      ]
    }
  ];

  return (
    <section id="featured-work" className="py-20 md:py-32 bg-white border-t border-[#E2E2E2] relative">
      
      {/* Background Watermark */}
      <div className="absolute right-6 top-10 select-none pointer-events-none opacity-15 hidden lg:block">
        <span className="text-[120px] font-black text-outline tracking-tighter">WORKS</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#909090] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4818F]"></span>
              CREATIVE DIRECTION &amp; CAMPAIGNS
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#333333] font-heading tracking-tight leading-[0.95]">
              FEATURED <span className="pink-accent">DOMAINS.</span>
            </h2>
            <p className="text-base text-[#505050] max-w-xl mt-3 italic">
              Specialized campaign execution and content marketing frameworks across key industry verticals.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#FDFBF7] px-4 py-2 rounded-full border border-[#E2E2E2] self-start md:self-auto text-xs font-black uppercase tracking-wider text-[#333333]">
            <Layers className="w-3.5 h-3.5 pink-accent" />
            <span>3 Core Verticals</span>
          </div>
        </div>

        {/* 3 Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creativeDomains.map((domain, idx) => {
            const Icon = domain.icon;
            return (
              <div
                key={idx}
                className="group bg-[#FDFBF7] rounded-[32px] border border-[#E2E2E2] hover:border-[#D4818F] p-8 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#E2E2E2] flex items-center justify-center text-[#333333] group-hover:bg-[#D4818F] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-black text-[#909090]">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="text-[10px] font-black uppercase tracking-widest pink-accent mb-1">
                    {domain.role}
                  </div>

                  <div className={`grid gap-2 mb-6 ${domain.images.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                    {domain.images.map((image) => (
                      <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        className="w-full aspect-[4/3] object-cover rounded-xl border border-[#E2E2E2] bg-white"
                      />
                    ))}
                  </div>

                  <h3 className="text-2xl font-black text-[#333333] font-heading leading-tight mb-3">
                    {domain.title}
                  </h3>

                  <p className="text-sm text-[#505050] leading-relaxed mb-6">
                    {domain.tagline}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-[#E2E2E2]">
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#909090]">
                      Competencies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-bold px-2.5 py-1 rounded bg-white text-[#333333] border border-[#E2E2E2]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E2E2] flex items-center justify-between text-xs text-[#707070]">
                  <span className="italic">{domain.metrics}</span>
                  <div className="w-8 h-8 rounded-full bg-white border border-[#E2E2E2] group-hover:border-[#D4818F] group-hover:bg-[#D4818F] group-hover:text-white flex items-center justify-center text-[#333333] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
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
