import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import AboutSection from './components/AboutSection';
import GalleryHub from './components/GalleryHub';
import VideoShowcase from './components/VideoShowcase';
import SocialPlatformsSection from './components/SocialPlatformsSection';
import SkillsExpertiseSection from './components/SkillsExpertiseSection';
import ToolsProficiencySection from './components/ToolsProficiencySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const handleScrollToSection = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#333333] selection:bg-[#D4818F]/30 selection:text-[#333333] flex flex-col font-sans">
      
      {/* Top Fixed Navigation */}
      <Navbar 
        onOpenContact={() => handleScrollToSection('connect')}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero
          onExploreAbout={() => handleScrollToSection('about')}
          onOpenContact={() => handleScrollToSection('connect')}
        />

        {/* Dynamic Infinite Marquee Ticker */}
        <MarqueeTicker />

        {/* 1. About Me (Objectives, Working Experiences, Education Background) */}
        <AboutSection />

        {/* 2. Gallery Hub with Niche-Based Organization */}
        <GalleryHub />

        {/* 3. Video Showcase - Featured Video Works */}
        <VideoShowcase />

        {/* 4. Social Media Platforms (Facebook, Instagram, TikTok, X, LinkedIn, YouTube) */}
        <SocialPlatformsSection />

        {/* 5. Skills & Expertise */}
        <SkillsExpertiseSection />

        {/* 6. Tools Proficiency */}
        <ToolsProficiencySection />

        {/* 7. Connect */}
        <ContactSection />

      </main>

      {/* Chic Editorial Footer */}
      <Footer />

    </div>
  );
}

