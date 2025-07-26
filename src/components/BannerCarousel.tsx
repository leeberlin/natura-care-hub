import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import banner1 from '@/assets/banner1.png';
import banner2 from '@/assets/banner2.png';
import banner3 from '@/assets/banner3.png';
import banner4 from '@/assets/banner4.png';
import banner5 from '@/assets/banner5.png';

const BannerCarousel = () => {
  const bannerImages = [
    { id: 1, src: banner1, alt: 'Natura Pflegedienst Banner 1' },
    { id: 2, src: banner2, alt: 'Natura Pflegedienst Banner 2' },
    { id: 3, src: banner3, alt: 'Natura Pflegedienst Banner 3' },
    { id: 4, src: banner4, alt: 'Natura Pflegedienst Banner 4' },
    { id: 5, src: banner5, alt: 'Natura Pflegedienst Banner 5' },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000 })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isLogoVisible, setIsLogoVisible] = useState(false);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  // Scroll detection for logo animation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Show logo when user scrolls down (after 100px)
      setIsLogoVisible(currentScrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {bannerImages.map((banner) => (
            <div key={banner.id} className="flex-[0_0_100%] min-w-0">
              <div className="relative h-screen">
                <img
                  src={banner.src}
                  alt={banner.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient background if image fails to load
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-4 h-4 rounded-full transition-all duration-300 backdrop-blur-sm",
              index === selectedIndex
                ? "bg-nature-coral scale-125 shadow-lg"
                : "bg-white/60 hover:bg-white/80 hover:scale-110"
            )}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll-triggered Logo Overlay */}
      <div className={cn(
        "absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700 ease-out z-20",
        isLogoVisible 
          ? "opacity-100 transform scale-100" 
          : "opacity-0 transform scale-75"
      )}>
        <div className="relative">
          {/* Logo Background */}
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-white/95 backdrop-blur-md shadow-2xl flex items-center justify-center transform transition-all duration-500 hover:scale-110">
            <img 
              src="/lovable-uploads/7e9df2db-9333-4d29-85cc-b32f727b93cc.png" 
              alt="Natura Pflegedienst Logo"
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
            />
          </div>
          
          {/* Pulsing Ring Animation */}
          <div className="absolute inset-0 rounded-full border-4 border-nature-sage animate-ping opacity-30"></div>
          <div className="absolute inset-2 rounded-full border-2 border-nature-coral animate-pulse opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default BannerCarousel;