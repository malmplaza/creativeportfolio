import { Wrench, Check, Laptop, Sparkles, FolderKanban, FileSpreadsheet, Palette } from 'lucide-react';
import { LUISA_PROFILE } from '../data/portfolioData';

export default function ToolsProficiencySection() {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Marketing')) return Laptop;
    if (category.includes('Workspace')) return FolderKanban;
    if (category.includes('Productivity')) return FileSpreadsheet;
    return Palette;
  };

  return (
    <section id="tools-proficiency" className="py-20 md:py-32 bg-white border-t border-[#E2E2E2] relative">
      
      {/* Background Subtle Watermark Text */}
      <div className="absolute right-6 top-10 select-none pointer-events-none opacity-15 hidden lg:block">
        <span className="text-[120px] font-black text-outline tracking-tighter">TOOLS</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#909090] mb-2">
            SOFTWARE &amp; TECHNICAL ARSENAL
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#333333] font-heading tracking-tight leading-[0.95]">
            TOOLS <span className="pink-accent">PROFICIENCY.</span>
          </h2>
          <p className="text-base text-[#505050] max-w-xl mt-3 italic">
            Proficient across marketing analytics suites, productivity frameworks, collaboration hubs, and visual design software.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LUISA_PROFILE.toolCategories.map((group, idx) => {
            const Icon = getCategoryIcon(group.category);
            return (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-[36px] bg-[#FDFBF7] border border-[#E2E2E2] hover:border-[#D4818F] transition-all duration-300 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-white border border-[#E2E2E2] flex items-center justify-center text-[#111111]">
                      <Icon className="w-5 h-5 pink-accent" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#909090] block">
                        CATEGORY 0{idx + 1}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-[#333333] font-heading tracking-tight">
                        {group.category}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {group.tools.map((tool, tIdx) => (
                      <div
                        key={tIdx}
                        className="px-4 py-2.5 rounded-2xl bg-white border border-[#E2E2E2] hover:border-[#111111] transition-colors flex items-center gap-2"
                      >
                        <Check className="w-3.5 h-3.5 pink-accent" />
                        <span className="text-xs font-black uppercase tracking-wider text-[#333333]">
                          {tool}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#E2E2E2] flex items-center justify-between text-[11px] font-bold text-[#909090] uppercase tracking-wider">
                  <span>{group.tools.length} Software Applications</span>
                  <span className="pink-accent font-black">Proficient</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
