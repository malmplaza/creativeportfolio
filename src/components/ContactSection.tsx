import { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight } from 'lucide-react';
import { LUISA_PROFILE } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(LUISA_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(LUISA_PROFILE.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="connect" className="py-20 md:py-32 bg-[#FDFBF7] border-t border-[#E2E2E2] relative">
      
      {/* Background Subtle Watermark Text */}
      <div className="absolute right-6 top-10 select-none pointer-events-none opacity-15 hidden lg:block">
        <span className="text-[120px] font-black text-outline tracking-tighter">CONNECT</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Profile Card */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <div className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#909090]">
                GET IN TOUCH
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#333333] font-heading tracking-tight leading-[0.95]">
                LET'S <span className="pink-accent">CONNECT.</span>
              </h2>

              <p className="text-base text-[#505050] leading-relaxed italic">
                Interested in working together or discussing opportunities in digital marketing, social media management, and content creation? Reach out directly.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              
              {/* Full Name Card */}
              <div className="p-5 rounded-3xl bg-white border border-[#E2E2E2]">
                <div className="text-[10px] font-black text-[#909090] uppercase tracking-widest">
                  FULL NAME
                </div>
                <div className="text-lg font-black text-[#333333] font-heading mt-0.5">
                  {LUISA_PROFILE.name}
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-3xl bg-white border border-[#E2E2E2] flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#FDFBF7] border border-[#E2E2E2] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 pink-accent" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-[#909090] uppercase tracking-widest">EMAIL ADDRESS</div>
                    <a 
                      href={`mailto:${LUISA_PROFILE.email}`} 
                      className="text-sm font-black text-[#333333] hover:pink-accent transition-colors"
                    >
                      {LUISA_PROFILE.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  className="px-3.5 py-1.5 rounded-full bg-[#FDFBF7] hover:bg-[#FFB7C5]/30 text-[#333333] text-xs font-black uppercase tracking-wider transition-colors border border-[#E2E2E2] flex items-center gap-1 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 pink-accent" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-3xl bg-white border border-[#E2E2E2] flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-[#FDFBF7] border border-[#E2E2E2] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 pink-accent" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-[#909090] uppercase tracking-widest">PHONE / MOBILE</div>
                    <a 
                      href={`tel:${LUISA_PROFILE.phone.replace(/\s+/g, '')}`} 
                      className="text-sm font-black text-[#333333] hover:pink-accent transition-colors"
                    >
                      {LUISA_PROFILE.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  id="copy-phone-btn"
                  onClick={handleCopyPhone}
                  className="px-3.5 py-1.5 rounded-full bg-[#FDFBF7] hover:bg-[#FFB7C5]/30 text-[#333333] text-xs font-black uppercase tracking-wider transition-colors border border-[#E2E2E2] flex items-center gap-1 cursor-pointer"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 pink-accent" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Social Media Profiles */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* LinkedIn Section */}
            <div className="p-7 sm:p-12 rounded-[40px] bg-white border border-[#E2E2E2] shadow-xs">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-black text-[#909090] uppercase tracking-widest block mb-1">
                    PROFESSIONAL
                  </span>
                  <h3 className="text-2xl font-black text-[#333333] font-heading tracking-tight">
                    Connect with me
                  </h3>
                </div>

                <a
                  href="https://www.linkedin.com/in/workwithmarialuisa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-full bg-[#0A66C2] hover:bg-[#005BA9] text-white font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer group"
                >
                  <span>Visit LinkedIn Profile</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Social Media Profiles Section */}
            <div className="p-7 sm:p-12 rounded-[40px] bg-white border border-[#E2E2E2] shadow-xs">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-black text-[#909090] uppercase tracking-widest block mb-1">
                    PERSONAL CONTENT
                  </span>
                  <h3 className="text-2xl font-black text-[#333333] font-heading tracking-tight">
                    View more of my content
                  </h3>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://www.tiktok.com/@blusherdolls?_r=1&_t=ZS-96MmSoUrwkH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-full bg-[#000000] hover:bg-[#25F4EE] text-white hover:text-black font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer group"
                  >
                    <span>TikTok</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>

                  <a
                    href="https://www.instagram.com/blusherdiary?igsh=MWVpNjN3dWN1Z3BpeQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#833AB4] hover:opacity-90 text-white font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer group"
                  >
                    <span>Instagram</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
