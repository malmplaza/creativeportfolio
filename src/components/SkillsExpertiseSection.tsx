import { CheckCircle2, Sparkles, Brain, Layers } from 'lucide-react';
import { LUISA_PROFILE } from '../data/portfolioData';

export default function SkillsExpertiseSection() {
  return (
    <section id="skills-expertise" className="py-20 md:py-32 bg-[#FDFBF7] border-t border-[#E2E2E2] relative">
      
      {/* Background Subtle Watermark Text */}
      <div className="absolute right-6 top-10 select-none pointer-events-none opacity-15 hidden lg:block">
        <span className="text-[120px] font-black text-outline tracking-tighter">SKILLS</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#909090] mb-2">
            CORE ATTRIBUTES &amp; DOMAIN MASTERY
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#333333] font-heading tracking-tight leading-[0.95]">
            SKILLS &amp; <span className="pink-accent">EXPERTISE.</span>
          </h2>
          <p className="text-base text-[#505050] max-w-xl mt-3 italic">
            Analytical foundation merged with modern creative execution, strategic content thinking, and systems management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: SKILLS */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FFB7C5]/30 border border-[#FFB7C5] flex items-center justify-center">
                <Brain className="w-5 h-5 pink-accent" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#909090] block">
                  FOUNDATIONAL CAPABILITIES
                </span>
                <h3 className="text-3xl font-black text-[#333333] font-heading tracking-tight">
                  Skills
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              {LUISA_PROFILE.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-3xl bg-white border border-[#E2E2E2] hover:border-[#D4818F] transition-all duration-300 shadow-xs flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#FDFBF7] border border-[#E2E2E2] flex items-center justify-center font-black text-xs text-[#333333] group-hover:bg-[#111111] group-hover:text-white transition-colors">
                      0{idx + 1}
                    </div>
                    <span className="text-base font-black text-[#333333] font-heading tracking-tight">
                      {skill}
                    </span>
                  </div>

                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4818F]"></span>
                </div>
              ))}
            </div>

          </div>

          {/* Column 2: EXPERTISE */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#111111] text-white flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#909090] block">
                  PRACTICAL DISCIPLINES
                </span>
                <h3 className="text-3xl font-black text-[#333333] font-heading tracking-tight">
                  Expertise
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {LUISA_PROFILE.expertise.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-3xl bg-white border border-[#E2E2E2] hover:border-[#111111] transition-all duration-300 shadow-xs flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#FFB7C5]/30 border border-[#FFB7C5] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 pink-accent" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#333333] font-heading uppercase tracking-wide">
                      {item}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
