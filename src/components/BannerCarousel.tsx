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
    <section className="relative w-full h-64 md:h-80 overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {bannerImages.map((banner) => (
            <div key={banner.id} className="flex-[0_0_100%] min-w-0">
              <div className="relative h-64 md:h-80">
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
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === selectedIndex
                ? "bg-nature-coral scale-110"
                : "bg-white/60 hover:bg-white/80"
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