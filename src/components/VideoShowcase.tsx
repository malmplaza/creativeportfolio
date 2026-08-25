import { Film, Zap, TrendingUp, Megaphone } from 'lucide-react';

interface VideoCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  color: string;
  videos: Array<{
    path: string;
  }>;
}

export default function VideoShowcase() {

  const videoCategories: VideoCategory[] = [
    {
      id: 'advertising',
      title: 'Advertising',
      subtitle: 'Commercial & Promotional Content',
      description: 'Advertising campaigns and promotional video content',
      icon: Megaphone,
      color: '#333333',
      videos: [
        {
          path: '../../Images/videos/ADV1.MOV',
        },
        {
          path: '../../Images/videos/ADV2.mov',
        },
        {
          path: '../../Images/videos/ADV3.MOV',
        },
      ],
    },
    {
      id: 'brand',
      title: 'Brand Videos',
      subtitle: 'Corporate & Brand Storytelling',
      description: 'Professional brand narratives and company messaging videos',
      icon: Film,
      color: '#D4818F',
      videos: [
        {
          path: '../../Images/videos/BRAND.MP4',
        },
        {
          path: '../../Images/videos/BRAND2.MP4',
        },
        {
          path: '../../Images/videos/BRAND3.MP4',
        },
      ],
    },
    {
      id: 'trend',
      title: 'Trend Videos',
      subtitle: 'Engaging & Viral Content',
      description: 'Trending content and entertainment-focused video creations',
      icon: Zap,
      color: '#333333',
      videos: [
        {
          path: '../../Images/videos/FUN1.MP4',
        },
        {
          path: '../../Images/videos/FUN2.MP4',
        },
        {
          path: '../../Images/videos/FUN3.MP4',
        },
        {
          path: '../../Images/videos/FUN4.MP4',
        },
      ],
    },
    {
      id: 'top-performing',
      title: 'Top Performing',
      subtitle: 'High-Impact Content',
      description: 'Best-performing videos with proven engagement and reach',
      icon: TrendingUp,
      color: '#D4818F',
      videos: [
        {
          path: '../../Images/videos/TOP1.MP4',
        },
        {
          path: '../../Images/videos/TOP2.MP4',
        },
        {
          path: '../../Images/videos/TOP3.MP4',
        },
      ],
    },
  ];

  return (
    <section id="video-showcase" className="py-20 md:py-32 bg-[#FDFBF7] border-t border-[#E2E2E2] relative">
      
      {/* Background Watermark */}
      <div className="absolute right-6 top-10 select-none pointer-events-none opacity-15 hidden lg:block">
        <span className="text-[120px] font-black text-outline tracking-tighter">VIDEO</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#909090] mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D4818F]"></span>
            VIDEO CONTENT
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#333333] tracking-tight leading-[0.95]">
            FEATURED VIDEO <span className="pink-accent">WORKS.</span>
          </h2>
          <p className="text-base text-[#505050] max-w-2xl mt-4 font-light">
            Explore my video content portfolio organized by category. Click on any video to watch the full content.
          </p>
        </div>

        {/* Video Categories */}
        <div className="space-y-16">
          {videoCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ 
                      backgroundColor: `${category.color}20`,
                      color: category.color
                    }}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#333333] tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-sm text-[#666666] mt-1">{category.description}</p>
                  </div>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.videos.map((video, idx) => (
                    <div key={idx} className="flex flex-col">
                      {/* Video Player */}
                      <div className="rounded-2xl border-2 border-[#E2E2E2] overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <video
                          src={video.path}
                          controls
                          preload="metadata"
                          className="w-full h-auto bg-black"
                          controlsList="nodownload"
                        />
                      </div>


                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
