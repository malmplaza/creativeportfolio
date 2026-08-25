import { ArrowUpRight, Mail, Sparkles, CheckCircle2 } from 'lucide-react';
import { LUISA_PROFILE } from '../data/portfolioData';

interface HeroProps {
  onExploreAbout: () => void;
  onOpenContact: () => void;
}

export default function Hero({ onExploreAbout, onOpenContact }: HeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#FDFBF7]">
      
      {/* Background Watermark Outlined Typography */}
      <div className="absolute right-[-40px] top-[20%] rotate-90 hidden xl:block pointer-events-none select-none z-0">
        <span className="text-[140px] font-black text-outline opacity-20 whitespace-nowrap tracking-tighter">
          PORTFOLIO PORTFOLIO
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Greeting & Big Bold Headline */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Top Pill Greeting */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E2E2] shadow-2xs mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4818F]"></span>
              <span className="text-xs font-black uppercase tracking-wider text-[#333333]">
                Hello, I'm Luisa
              </span>
              <span className="text-xs font-bold text-[#909090]">•</span>
              <span className="text-xs font-black uppercase tracking-wider pink-accent">
                {LUISA_PROFILE.tagline}
              </span>
            </div>

            {/* Giant Bold Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[0.9] font-black tracking-tighter text-[#333333] mb-6 font-heading">
              DIGITAL <br />
              <span className="pink-accent">MARKETER</span> &amp; <br />
              CONTENT SPECIALIST
            </h1>

            {/* Intro Objective Summary */}
            <p className="text-base sm:text-lg font-medium text-[#505050] max-w-xl mx-auto lg:mx-0 leading-relaxed italic mb-8">
              STEM graduate currently pursuing a Bachelor of Science in Accounting Information Systems, blending analytical rigor with creative content strategy, visual media, and digital campaign execution.
            </p>

            {/* Quick Industry Pillars */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8">
              {LUISA_PROFILE.industries.map((ind, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-white border border-[#E2E2E2] text-xs font-black uppercase tracking-wider text-[#333333]"
                >
                  ✦ {ind}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="hero-about-btn"
                onClick={onExploreAbout}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#111111] text-white font-black text-xs uppercase tracking-widest hover:bg-[#D4818F] transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>EXPLORE ABOUT ME</span>
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-y-0.5 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>

              <button
                id="hero-contact-btn"
                onClick={onOpenContact}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white text-[#333333] border-2 border-[#111111] font-black text-xs uppercase tracking-widest hover:bg-[#111111] hover:text-white transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Mail className="w-4 h-4 pink-accent" />
                <span>CONNECT</span>
              </button>
            </div>

          </div>

          {/* Right Column: Layered Card Profile Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] sm:min-h-[480px]">
            
            {/* Layer 0: Pink Angled Card */}
            <div className="w-[300px] sm:w-[350px] h-[400px] sm:h-[450px] pink-bg rounded-[40px] rotate-[-4deg] absolute z-0 opacity-40"></div>

            {/* Layer 1: Gray Structural Card */}
            <div className="w-[300px] sm:w-[350px] h-[400px] sm:h-[450px] gray-bg rounded-[40px] absolute z-1"></div>

            {/* Layer 2: Main Foreground Card */}
            <div className="w-[300px] sm:w-[350px] h-[400px] sm:h-[450px] border-2 border-[#D4818F] rounded-[40px] rotate-[3deg] absolute z-2 flex flex-col justify-between p-7 sm:p-8 bg-white/80 backdrop-blur-md shadow-xl">
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-black text-[#333333] tracking-tighter">
                    2+ YRS
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#D4818F] px-3 py-1 rounded-full bg-[#FFB7C5]/30 border border-[#FFB7C5]">
                    EXPERIENCE
                  </span>
                </div>
                
                <div className="h-1 w-12 pink-bg mb-4"></div>

                <h3 className="text-2xl font-black text-[#333333] font-heading">
                  MARIA LUISA M. PLAZA
                </h3>

                <p className="text-xs text-[#707070] mt-2 font-bold uppercase tracking-wider">
                  BS Accounting Information Systems • Mapúa University (Makati)
                </p>
                <p className="text-xs text-[#909090] mt-1 font-medium italic">
                  STEM Graduate • Bilingual English Speaker • Analytical Problem Solver
                </p>
              </div>

              {/* Snapshot Skills in Card */}
              <div className="space-y-3 pt-2">
                <div className="space-y-1.5">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#909090]">
                    CORE COMPETENCIES
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Content Creation', 'Social Media Analytics', 'Media Buying', 'Community Mgmt'].map((s, i) => (
                      <span key={i} className="text-[10px] font-bold bg-[#FDFBF7] border border-[#E2E2E2] px-2.5 py-1 rounded-md text-[#333333]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E2E2E2] flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#333333]">
                  <span>Manila, Philippines</span>
                  <span className="pink-accent flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Available
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
