import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import banner1 from '@/assets/banner1.png';
import banner2 from '@/assets/banner2.png';
import banner3 from '@/assets/banner3.png';
import banner4 from '@/assets/banner4.png';
import banner5 from '@/assets/banner5.png';
import NaturaLogo from '@/assets/NATURA.svg';

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
  const [logoKey, setLogoKey] = useState(0); // For animation trigger

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    // Trigger logo animation on slide change
    setLogoKey(prev => prev + 1);
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
      const shouldShow = currentScrollY > 100;
      setIsLogoVisible(shouldShow);
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

      {/* Logo with Slide Animation - Near Bottom */}
      <div className="absolute inset-x-0 bottom-4 flex justify-center pointer-events-none z-20">
        <img 
          key={logoKey}
          src="/NATURA.svg" 
          alt="Natura Pflegedienst Logo"
          className="w-80 h-80 md:w-[460px] md:h-[460px] lg:w-[600px] lg:h-[600px] object-contain drop-shadow-2xl 
                     animate-[fadeInScale_0.8s_ease-out]"
        />
      </div>
    </section>
  );
};

export default BannerCarousel;