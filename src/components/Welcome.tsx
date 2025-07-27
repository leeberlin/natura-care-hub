import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Import team images from assets
import team1 from '@/assets/team.png';
import team2 from '@/assets/team2.png';
import team3 from '@/assets/team3.png';
import team4 from '@/assets/team4.png';
import team5 from '@/assets/team5.png';
import team6 from '@/assets/team6.png';
import team7 from '@/assets/team7.png';

const Welcome = () => {
  const teamImages = [
    { id: 1, src: team1, alt: 'Natura Pflegedienst Team - Gemeinsam für Ihre Pflege' },
    { id: 2, src: team2, alt: 'Natura Pflegedienst Team - Professionelle Betreuung' },
    { id: 3, src: team3, alt: 'Natura Pflegedienst Team - Herzliche Pflege' },
    { id: 4, src: team4, alt: 'Natura Pflegedienst Team - Kompetente Fachkräfte' },
    { id: 5, src: team5, alt: 'Natura Pflegedienst Team - Vertrauensvolle Begleitung' },
    { id: 6, src: team6, alt: 'Natura Pflegedienst Team - Individuelle Betreuung' },
    { id: 7, src: team7, alt: 'Natura Pflegedienst Team - Liebevolle Unterstützung' },
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


            <div className="bg-gradient-to-br from-white via-nature-cream/30 to-white rounded-2xl p-10 shadow-soft border border-nature-sage/10">
              {/* Header Section */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-nature-sage/10 px-4 py-2 rounded-full text-sm font-source text-nature-sage mb-4">
                  <div className="w-2 h-2 bg-nature-sage rounded-full animate-pulse"></div>
                  <span>Neu ab 2025</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nature-charcoal mb-3 font-nunito leading-tight">
                  Willkommen bei{" "}
                  <span className="text-nature-sage">Natura Pflegedienst GmbH</span>
                </h3>
                
                <h4 className="text-xl md:text-2xl font-semibold text-nature-coral mb-6 font-nunito">
                  Moderne Pflege mit Herz und Verstand
                </h4>
              </div>
              
              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="p-6 bg-white/70 rounded-xl border-l-4 border-nature-sage">
                    <h5 className="font-bold text-nature-charcoal mb-3 font-nunito">🚀 Unser Start 2025</h5>
                    <p className="text-muted-foreground font-source leading-relaxed">
                      Wir starten ab 2025 mit einem jungen, dynamischen und leidenschaftlichen Team von Pflegefachkräften – bei uns steht die Leidenschaft für den Beruf immer an erster Stelle.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-white/70 rounded-xl border-l-4 border-nature-coral">
                    <h5 className="font-bold text-nature-charcoal mb-3 font-nunito">💡 Unsere Vision</h5>
                    <p className="text-muted-foreground font-source leading-relaxed">
                      Unsere Vision ist es, Pflege neu zu denken: modern, individuell und mit einem ganzheitlichen Ansatz, der die Bedürfnisse unserer Kunden in den Mittelpunkt stellt.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="p-6 bg-white/70 rounded-xl border-l-4 border-nature-teal">
                    <h5 className="font-bold text-nature-charcoal mb-3 font-nunito">🔬 Innovation & Tradition</h5>
                    <p className="text-muted-foreground font-source leading-relaxed">
                      Wir sind überzeugt, dass Pflege mehr ist als nur medizinische Versorgung. Bei Natura Pflege verbinden wir traditionelle Fürsorge mit innovativen, technologiegestützten Konzepten.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-white/70 rounded-xl border-l-4 border-nature-beige">
                    <h5 className="font-bold text-nature-charcoal mb-3 font-nunito">✨ Qualitätsversprechen</h5>
                    <p className="text-muted-foreground font-source leading-relaxed">
                      Durch Transparenz, Nachhaltigkeit und kontinuierliche Weiterbildung stellen wir sicher, dass wir stets höchste Pflegequalität liefern.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Featured Slogan */}
              <div className="text-center bg-gradient-to-r from-nature-sage/10 via-nature-teal/10 to-nature-sage/10 rounded-xl p-6 md:p-8">
                <div className="max-w-4xl mx-auto">
                  <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-nature-charcoal mb-4 md:mb-6 font-nunito leading-tight">
                    Vertrauen Sie Natura Pflege
                  </h4>
                  
                  <div className="space-y-3 md:space-y-4">
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-nature-sage font-nunito leading-relaxed">
                      Weil Ihre Gesundheit und Ihr Wohlbefinden in den besten Händen sind.
                    </p>
                    <p className="text-base md:text-lg text-muted-foreground font-source leading-relaxed">
                      Eine Betreuung, die sowohl fachlich exzellent als auch menschlich nah ist.
                    </p>
                  </div>
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