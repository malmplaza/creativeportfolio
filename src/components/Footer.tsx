import { ArrowUp, Mail, Phone } from 'lucide-react';
import { LUISA_PROFILE } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FDFBF7] border-t border-[#E2E2E2] py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Bold Outlined Typography Accent */}
        <div className="pb-12 border-b border-[#E2E2E2] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#909090] block mb-2">
              MARIA LUISA M. PLAZA
            </span>
            <div className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#333333] tracking-tighter leading-none font-heading">
              CREATIVE <span className="pink-accent">PORTFOLIO.</span>
            </div>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#111111] hover:pink-accent px-5 py-2.5 rounded-full border border-[#E2E2E2] hover:border-[#111111] bg-white transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-[#E2E2E2] items-start">
          
          {/* Col 1: Brand & Intro */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center font-black text-xs tracking-widest">
                LP
              </div>
              <span className="font-heading font-black text-xl text-[#333333] tracking-tight">
                {LUISA_PROFILE.name}
              </span>
            </div>
            
            <p className="text-sm text-[#505050] max-w-sm leading-relaxed italic">
              "2+ years in digital marketing. STEM graduate pursuing BS in Accounting Information Systems with experience in content creation, campaign strategy, and visual media."
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[10px] font-black text-[#909090] uppercase tracking-widest">
              NAVIGATION
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-black uppercase tracking-wider text-[#505050]">
              <a href="#about" className="hover:pink-accent transition-colors">About Me</a>
              <a href="#featured-work" className="hover:pink-accent transition-colors">Featured Work</a>
              <a href="#social-platforms" className="hover:pink-accent transition-colors">Social Platforms</a>
              <a href="#skills-expertise" className="hover:pink-accent transition-colors">Skills &amp; Expertise</a>
              <a href="#tools-proficiency" className="hover:pink-accent transition-colors">Tools Proficiency</a>
              <a href="#connect" className="hover:pink-accent transition-colors">Connect</a>
            </div>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] font-black text-[#909090] uppercase tracking-widest">
              DIRECT CONTACT
            </div>
            <div className="flex flex-col gap-2 text-xs font-black uppercase tracking-wider">
              <a 
                href={`mailto:${LUISA_PROFILE.email}`} 
                className="text-[#333333] hover:pink-accent transition-colors flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 pink-accent" />
                <span>{LUISA_PROFILE.email}</span>
              </a>
              <a 
                href={`tel:${LUISA_PROFILE.phone.replace(/\s+/g, '')}`} 
                className="text-[#505050] hover:pink-accent transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 pink-accent" />
                <span>{LUISA_PROFILE.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#909090] uppercase tracking-wider">
          <div>
            © {new Date().getFullYear()} {LUISA_PROFILE.name}. All Rights Reserved.
          </div>
          <div>
            DIGITAL MARKETING • CONTENT CREATION • INFORMATION SYSTEMS
          </div>
        </div>

      </div>
    </footer>
  );
}
