import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import aerio1 from '../../Images/Social Media Posts/aerio1.png';
import aerio2 from '../../Images/Social Media Posts/aerio2.png';
import aerio3 from '../../Images/Social Media Posts/aerio3.png';
import aerio4 from '../../Images/Social Media Posts/aerio4.png';
import aerio5 from '../../Images/Social Media Posts/aerio5.png';
import aerio6 from '../../Images/Social Media Posts/aerio6.png';
import aerio7 from '../../Images/Social Media Posts/aerio7.png';
import aerio8 from '../../Images/Social Media Posts/aerio8.png';
import brand1 from '../../Images/Social Media Posts/brand1.png';
import brand2 from '../../Images/Social Media Posts/brand2.png';
import brand3 from '../../Images/Social Media Posts/brand3.png';
import brand4 from '../../Images/Social Media Posts/brand4.png';
import sc1 from '../../Images/Social Media Posts/sc1.png';
import sc2 from '../../Images/Social Media Posts/sc2.png';
import sc3 from '../../Images/Social Media Posts/sc3.png';

interface GalleryProps {
  nicheName: string;
  onClose: () => void;
}

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

export default function Gallery({ nicheName, onClose }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleries: Record<string, { title: string; subtitle: string; images: GalleryImage[] }> = {
    'community-posts': {
      title: 'Community Posts',
      subtitle: 'Public Awareness & Community Engagement',
      images: [
        { src: sc1, alt: 'Student council campaign social media design', title: 'Community Post 1' },
        { src: sc2, alt: 'Student council campaign announcement design', title: 'Community Post 2' },
        { src: sc3, alt: 'Student council social media design', title: 'Community Post 3' },
      ]
    },
    'product-posts': {
      title: 'Product Posts',
      subtitle: 'Brand Aesthetics & Product Marketing',
      images: [
        { src: brand1, alt: 'Brand product social media design 1', title: 'Product Post 1' },
        { src: brand2, alt: 'Brand product social media design 2', title: 'Product Post 2' },
        { src: brand3, alt: 'Brand product social media design 3', title: 'Product Post 3' },
        { src: brand4, alt: 'Brand product social media design 4', title: 'Product Post 4' },
      ]
    },
    'advertising-branding': {
      title: 'Advertising & Branding',
      subtitle: 'Commercial Campaigns & Brand Promotions',
      images: [
        { src: aerio1, alt: 'Aerio recruitment social media design 1', title: 'Aerio Post 1' },
        { src: aerio2, alt: 'Aerio recruitment social media design 2', title: 'Aerio Post 2' },
        { src: aerio3, alt: 'Aerio recruitment social media design 3', title: 'Aerio Post 3' },
        { src: aerio4, alt: 'Aerio recruitment social media design 4', title: 'Aerio Post 4' },
        { src: aerio5, alt: 'Aerio recruitment social media design 5', title: 'Aerio Post 5' },
        { src: aerio6, alt: 'Aerio recruitment social media design 6', title: 'Aerio Post 6' },
        { src: aerio7, alt: 'Aerio recruitment social media design 7', title: 'Aerio Post 7' },
        { src: aerio8, alt: 'Aerio recruitment social media design 8', title: 'Aerio Post 8' },
      ]
    }
  };

  const gallery = galleries[nicheName];
  if (!gallery) return null;

  const handlePrevious = () => {
    setSelectedImage((prev) => 
      prev === null ? gallery.images.length - 1 : prev === 0 ? gallery.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImage((prev) => 
      prev === null ? 0 : prev === gallery.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="min-h-screen bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header Content */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#333333] tracking-tight leading-[0.95]">
            {gallery.title}
          </h1>
          <p className="text-lg text-[#666666] mt-4 font-light">
            {gallery.subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {gallery.images.map((image, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className="group relative overflow-hidden rounded-lg border-2 border-[#E2E2E2] hover:border-[#D4818F] transition-all duration-300 cursor-pointer aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <div className="w-0 h-0 border-l-6 border-l-transparent border-r-0 border-t-4 border-t-[#D4818F] border-b-4 border-b-[#D4818F] ml-1" />
                  </div>
                </div>
              </div>

              {/* Image Title */}
              {image.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-sm">{image.title}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Back to Hub Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-3 bg-[#D4818F] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-base hover:bg-[#C4717F] transition-all duration-300 hover:gap-4 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>BACK TO HUB</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:bg-white/10 p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="absolute left-6 text-white hover:bg-white/10 p-2 rounded-full transition-colors z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Image Container */}
          <div className="max-w-4xl max-h-[80vh] flex items-center justify-center">
            <img
              src={gallery.images[selectedImage].src}
              alt={gallery.images[selectedImage].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-6 text-white hover:bg-white/10 p-2 rounded-full transition-colors z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white font-bold text-sm bg-black/50 px-4 py-2 rounded-full">
            {selectedImage + 1} / {gallery.images.length}
          </div>
        </div>
      )}
    </section>
  );
}
