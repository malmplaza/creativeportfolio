import { Briefcase, GraduationCap, Target, Sparkles, MapPin, Calendar } from 'lucide-react';
import { LUISA_PROFILE } from '../data/portfolioData';
import luisa1 from '../../Images/Luisa/Luisa1.jpg';
import luisa2 from '../../Images/Luisa/Luisa2.JPEG';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#FDFBF7] relative">
      
      {/* Background Subtle Watermark Text */}
      <div className="absolute right-6 top-10 select-none pointer-events-none opacity-15 hidden lg:block">
        <span className="text-[120px] font-black text-outline tracking-tighter">ABOUT</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#909090] mb-2">
            PROFILE &amp; BACKGROUND
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#333333] font-heading tracking-tight leading-[0.95]">
            ABOUT <span className="pink-accent">ME.</span>
          </h2>
          <div className="flex items-center gap-3 mt-4">
            <span className="text-lg font-bold text-[#333333]">Hello, I'm Luisa</span>
            <span className="text-sm font-bold text-[#909090]">•</span>
            <span className="px-3 py-1 rounded-full bg-[#FFB7C5]/30 border border-[#FFB7C5] text-xs font-black uppercase tracking-wider pink-accent">
              2+ Years in Digital Marketing
            </span>
          </div>
        </div>

        {/* VISUAL INTRODUCTION WITH PHOTOS */}
        <div className="mb-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-[24px] border-2 border-[#E2E2E2] hover:border-[#D4818F] transition-all duration-300 aspect-square shadow-lg transform hover:scale-105">
                <img 
                  src={luisa1} 
                  alt="Luisa profile photo 1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-[24px] border-2 border-[#E2E2E2] hover:border-[#D4818F] transition-all duration-300 aspect-square shadow-lg transform hover:scale-105 mt-8">
                <img 
                  src={luisa2} 
                  alt="Luisa profile photo 2" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* About Text */}
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFB7C5]/20 border border-[#FFB7C5] mb-4">
                  <Sparkles className="w-4 h-4 pink-accent" />
                  <span className="text-xs font-black uppercase tracking-widest pink-accent">Who I Am</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-[#333333] font-heading tracking-tight leading-snug mb-4">
                  Beyond the Portfolio
                </h3>
              </div>

              <p className="text-base text-[#505050] leading-relaxed mb-6">
                I'm a creative professional with a passion for crafting compelling digital narratives. With expertise in content creation, social media strategy, and visual storytelling, I transform ideas into impactful campaigns that resonate with audiences.
              </p>

              <p className="text-base text-[#505050] leading-relaxed mb-6">
                Currently pursuing my Bachelor of Science in Accounting Information Systems while actively working as a digital marketer, I blend analytical thinking with creative execution. My work spans recruitment branding, community engagement, and product marketing across diverse industries.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-[#FDFBF7] rounded-2xl border border-[#E2E2E2] text-center">
                  <div className="text-2xl font-black pink-accent mb-1">2+</div>
                  <div className="text-xs font-bold uppercase text-[#909090] tracking-wider">Years Experience</div>
                </div>
                <div className="p-4 bg-[#FDFBF7] rounded-2xl border border-[#E2E2E2] text-center">
                  <div className="text-2xl font-black pink-accent mb-1">3</div>
                  <div className="text-xs font-bold uppercase text-[#909090] tracking-wider">Core Niches</div>
                </div>
                <div className="p-4 bg-[#FDFBF7] rounded-2xl border border-[#E2E2E2] text-center">
                  <div className="text-2xl font-black pink-accent mb-1">5+</div>
                  <div className="text-xs font-bold uppercase text-[#909090] tracking-wider">Industries</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 1. OBJECTIVES */}
        <div className="mb-20">
          <div className="p-8 sm:p-12 rounded-[40px] bg-white border border-[#E2E2E2] shadow-xs relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#FFB7C5]/30 border border-[#FFB7C5] flex items-center justify-center">
                <Target className="w-5 h-5 pink-accent" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#909090] block">
                  CAREER VISION
                </span>
                <h3 className="text-2xl font-black text-[#333333] font-heading tracking-tight">
                  Objectives
                </h3>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#505050] leading-relaxed italic max-w-4xl">
              "{LUISA_PROFILE.objective}"
            </p>
          </div>
        </div>

        {/* 2. WORKING EXPERIENCES */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-[#111111] text-white flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#909090] block">
                CAREER TIMELINE
              </span>
              <h3 className="text-3xl font-black text-[#333333] font-heading tracking-tight">
                Working Experience
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LUISA_PROFILE.workExperiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-[36px] bg-white border border-[#E2E2E2] hover:border-[#D4818F] transition-all duration-300 shadow-xs flex flex-col justify-between group"
              >
                <div>
                  {/* Top Period & Location Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDFBF7] border border-[#E2E2E2] text-[11px] font-black uppercase tracking-wider text-[#707070]">
                      <Calendar className="w-3.5 h-3.5 pink-accent" />
                      <span>{exp.period}</span>
                    </div>

                    {exp.type && (
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md bg-[#FFB7C5]/30 border border-[#FFB7C5] pink-accent">
                        {exp.type}
                      </span>
                    )}
                  </div>

                  {/* Role & Company */}
                  <h4 className="text-xl sm:text-2xl font-black text-[#333333] font-heading tracking-tight group-hover:pink-accent transition-colors">
                    {exp.role}
                  </h4>
                  
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#909090] mt-1 mb-4">
                    <span className="text-[#333333] font-black">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 pink-accent" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#505050] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. EDUCATIONAL BACKGROUND */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-[#FFB7C5]/30 border border-[#FFB7C5] flex items-center justify-center">
              <GraduationCap className="w-5 h-5 pink-accent" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#909090] block">
                ACADEMIC FOUNDATION
              </span>
              <h3 className="text-3xl font-black text-[#333333] font-heading tracking-tight">
                Educational Background
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LUISA_PROFILE.education.map((edu, idx) => (
              <div
                key={idx}
                className="p-7 rounded-[32px] bg-white border border-[#E2E2E2] hover:border-[#111111] transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md bg-[#111111] text-white">
                      {edu.level.toUpperCase()}
                    </span>
                    <span className="text-xs font-black uppercase tracking-wider text-[#909090]">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-black text-[#333333] font-heading tracking-tight leading-snug mt-3">
                    {edu.degree}
                  </h4>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#707070] mt-2">
                    {edu.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
