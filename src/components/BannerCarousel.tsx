import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

const BannerCarousel = () => {
  const bannerImages = [
    { id: 1, src: '/banner1.png', alt: 'Natura Pflegedienst Banner 1' },
    { id: 2, src: '/banner2.png', alt: 'Natura Pflegedienst Banner 2' },
    { id: 3, src: '/banner3.png', alt: 'Natura Pflegedienst Banner 3' },
    { id: 4, src: '/banner4.png', alt: 'Natura Pflegedienst Banner 4' },
    { id: 5, src: '/image.png', alt: 'Natura Pflegedienst Banner 5' },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000 })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);

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
                <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
                
                {/* Logo overlay with animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center animate-fade-in">
                    <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl animate-scale-in">
                      <div className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                        🌿
                      </div>
                    </div>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl mb-4 animate-fade-in delay-500 font-nunito">
                      Natura <span className="text-nature-sage-light">Pflege</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 drop-shadow-lg animate-fade-in delay-700 font-source max-w-2xl mx-auto px-4">
                      Liebevolle Pflege mit natürlicher Fürsorge - seit über 15 Jahren Ihr vertrauensvoller Partner
                    </p>
                  </div>
                </div>
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
    </section>
  );
};

export default BannerCarousel;