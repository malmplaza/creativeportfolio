import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LUISA_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Me', href: '#about' },
    { label: 'Featured Work', href: '#featured-work' },
    { label: 'Social Platforms', href: '#social-platforms' },
    { label: 'Skills & Expertise', href: '#skills-expertise' },
    { label: 'Tools Proficiency', href: '#tools-proficiency' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3.5 bg-[#FDFBF7]/95 backdrop-blur-md shadow-xs border-b border-[#E2E2E2]' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        
        {/* Brand Logo & Monogram */}
        <a 
          href="#" 
          id="nav-logo"
          className="group flex items-center gap-3 transition-transform hover:scale-[1.02]"
        >
          <div className="w-10 h-10 rounded-full bg-[#111111] text-[#FDFBF7] flex items-center justify-center font-black text-xs tracking-tighter group-hover:bg-[#D4818F] group-hover:text-white transition-colors duration-300 shadow-sm">
            LP
          </div>
          <div>
            <span className="font-heading font-black text-xl text-[#333333] tracking-tighter block leading-none">
              LUISA PLAZA<span className="text-[#D4818F]">.</span>
            </span>
            <span className="text-[10px] text-[#909090] font-bold uppercase tracking-[0.25em]">
              Creative Portfolio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-[#707070]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#D4818F] transition-colors relative py-1 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4818F] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            id="nav-connect-btn"
            onClick={onOpenContact}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-white text-xs font-black uppercase tracking-wider hover:bg-[#D4818F] transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
            <ArrowRight className="w-3 h-3 text-[#FFB7C5]" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenContact}
            className="px-3.5 py-1.5 rounded-full bg-[#111111] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
          >
            <span>Connect</span>
          </button>
          
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white border border-[#E2E2E2] text-[#333333] hover:bg-[#FDFBF7]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Slide-down Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/98 backdrop-blur-xl border-b border-[#E2E2E2] px-6 pt-4 pb-6 shadow-lg"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-bold uppercase tracking-wider text-[#505050] hover:bg-[#FDFBF7] hover:text-[#D4818F] transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 border-t border-[#E2E2E2]">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full py-3 rounded-full bg-[#111111] text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
                >
                  <Mail className="w-4 h-4 text-[#D4818F]" />
                  <span>Connect with Luisa</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
