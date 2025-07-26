import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Welcome = () => {
  const teamImages = [
    { id: 1, src: '/team.png', alt: 'Natura Pflegedienst Team Mitglied 1' },
    { id: 2, src: '/team2.png', alt: 'Natura Pflegedienst Team Mitglied 2' },
    { id: 3, src: '/team3.png', alt: 'Natura Pflegedienst Team Mitglied 3' },
    { id: 4, src: '/team4.png', alt: 'Natura Pflegedienst Team Mitglied 4' },
    { id: 5, src: '/team5.png', alt: 'Natura Pflegedienst Team Mitglied 5' },
    { id: 6, src: '/team6.png', alt: 'Natura Pflegedienst Team Mitglied 6' },
  ];

  // Fallback images from placeholder_images if team images are not available
  const fallbackImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80', alt: 'Professionelles Team Mitglied' },
    { id: 2, src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80', alt: 'Team in professioneller Umgebung' },
    { id: 3, src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80', alt: 'Zusammenarbeit im Team' },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000 })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
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
    <section className="py-20 bg-nature-cream/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Logo + Text */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-soft p-2">
                <img 
                  src="/lovable-uploads/7e9df2db-9333-4d29-85cc-b32f727b93cc.png" 
                  alt="Natura Pflegedienst Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-nature-charcoal font-nunito">
                  Natura Pflegedienst GmbH
                </h2>
                <p className="text-nature-sage font-source">
                  Ihr vertrauensvoller Partner
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-soft">
              <h3 className="text-3xl md:text-4xl font-bold text-nature-charcoal mb-6 font-nunito leading-tight">
                Willkommen bei Natura Pflegedienst GmbH
              </h3>
              
              <div className="space-y-4 text-lg font-source text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-nature-sage">Wir starten ab 2025</strong> mit unserem 
                  professionellen Pflegedienst in Nürnberg und Umgebung. Unser erfahrenes Team 
                  freut sich darauf, Ihnen und Ihren Liebsten die bestmögliche Pflege und 
                  Betreuung zu bieten.
                </p>
                
                <p>
                  Mit über 15 Jahren Erfahrung in der Pflege stehen wir für Qualität, 
                  Vertrauen und individuelle Betreuung. Unsere zertifizierten Pflegekräfte 
                  sorgen dafür, dass Sie sich in Ihrem Zuhause sicher und geborgen fühlen.
                </p>
                
                <div className="bg-nature-cream/50 rounded-lg p-4 mt-6">
                  <p className="text-nature-charcoal font-semibold">
                    💚 Bereits jetzt können Sie sich für eine kostenlose Beratung anmelden 
                    und mehr über unsere Leistungen erfahren.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Team Slider */}
          <div className="relative">
            <div className="bg-white rounded-xl p-6 shadow-soft">
              <h4 className="text-xl font-bold text-nature-charcoal mb-6 font-nunito text-center">
                Unser erfahrenes Team
              </h4>
              
              <div className="relative overflow-hidden rounded-lg" ref={emblaRef}>
                <div className="flex">
                  {teamImages.map((image, index) => (
                    <div key={image.id} className="flex-[0_0_100%] min-w-0">
                      <div className="relative h-80 mx-2">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover rounded-lg"
                          onError={(e) => {
                            // Fallback to placeholder images if team images fail
                            const fallbackIndex = index % fallbackImages.length;
                            e.currentTarget.src = fallbackImages[fallbackIndex].src;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-nature-charcoal/30 via-transparent to-transparent rounded-lg"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-center items-center space-x-4 mt-6">
                <button
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                    canScrollPrev 
                      ? "bg-nature-sage text-white hover:bg-nature-sage/80" 
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  )}
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  aria-label="Vorheriges Team-Bild"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Dots */}
                <div className="flex space-x-2">
                  {teamImages.map((_, index) => (
                    <div
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-colors",
                        index === selectedIndex ? "bg-nature-coral" : "bg-gray-300"
                      )}
                    />
                  ))}
                </div>

                <button
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                    canScrollNext 
                      ? "bg-nature-sage text-white hover:bg-nature-sage/80" 
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  )}
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  aria-label="Nächstes Team-Bild"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;