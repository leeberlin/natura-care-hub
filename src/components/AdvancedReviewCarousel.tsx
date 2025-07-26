import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const AdvancedReviewCarousel = () => {
  const reviews = [
    {
      id: 1,
      name: "Maria Schneider",
      rating: 5,
      location: "Nürnberg-Südstadt",
      date: "vor 2 Wochen",
      text: "Natura Pflegedienst hat unserer Familie in einer schwierigen Zeit unglaublich geholfen. Die Pflegekräfte sind nicht nur fachlich kompetent, sondern auch sehr einfühlsam.",
      fullText: "Natura Pflegedienst hat unserer Familie in einer schwierigen Zeit unglaublich geholfen. Die Pflegekräfte sind nicht nur fachlich kompetent, sondern auch sehr einfühlsam. Meine Mutter fühlt sich bei ihnen wohl und sicher. Die Flexibilität bei Terminänderungen und die schnelle Reaktion bei Notfällen haben uns besonders beeindruckt. Absolut empfehlenswert!",
      avatar: "M",
      color: "bg-nature-coral"
    },
    {
      id: 2,
      name: "Hans Weber",
      rating: 5,
      location: "Nürnberg-Nordstadt",
      date: "vor 1 Woche",
      text: "Seit 6 Monaten wird meine Frau von Natura betreut. Das Team ist zuverlässig, freundlich und sehr professionell. Wir können den Service nur weiterempfehlen.",
      fullText: "Seit 6 Monaten wird meine Frau von Natura betreut. Das Team ist zuverlässig, freundlich und sehr professionell. Besonders schätzen wir die kontinuierliche Betreuung durch dieselben Pflegekräfte, die eine vertrauensvolle Beziehung aufgebaut haben. Die Kommunikation mit der Pflegeleitung ist immer transparent und hilfsbereit. Wir können den Service nur weiterempfehlen.",
      avatar: "H",
      color: "bg-nature-sage"
    },
    {
      id: 3,
      name: "Ingrid Müller",
      rating: 5,
      location: "Nürnberg-Weststadt",
      date: "vor 3 Tagen",
      text: "Die Betreuung durch Natura ist einfach wunderbar. Mein Vater freut sich jeden Tag auf die Pflegekräfte und ist viel fröhlicher geworden.",
      fullText: "Die Betreuung durch Natura ist einfach wunderbar. Mein Vater freut sich jeden Tag auf die Pflegekräfte und ist viel fröhlicher geworden. Sie gehen nicht nur auf seine pflegerischen Bedürfnisse ein, sondern nehmen sich auch Zeit für Gespräche und kleine Spaziergänge. Das macht den großen Unterschied aus. Die Qualität der Pflege ist durchweg exzellent.",
      avatar: "I",
      color: "bg-nature-teal"
    },
    {
      id: 4,
      name: "Klaus Bauer",
      rating: 5,
      location: "Nürnberg-Oststadt",
      date: "vor 1 Monat",
      text: "Nach einem Sturz brauchte ich vorübergehend Hilfe. Das Team von Natura war sofort da und hat mir den Alltag erheblich erleichtert. Sehr kompetent!",
      fullText: "Nach einem Sturz brauchte ich vorübergehend Hilfe. Das Team von Natura war sofort da und hat mir den Alltag erheblich erleichtert. Von der Körperpflege bis zur Haushaltsführung wurde alles professionell übernommen. Die Pflegekräfte waren immer pünktlich und haben mit viel Geduld und Verständnis gearbeitet. Sehr kompetent und menschlich!",
      avatar: "K",
      color: "bg-nature-coral"
    },
    {
      id: 5,
      name: "Elisabeth Jung",
      rating: 5,
      location: "Nürnberg-Altstadt",
      date: "vor 2 Monaten",
      text: "Natura hat uns in der Pflege meiner Mutter fantastisch unterstützt. Die Pflegekräfte sind wie Familie geworden. Absolute Empfehlung!",
      fullText: "Natura hat uns in der Pflege meiner Mutter fantastisch unterstützt. Die Pflegekräfte sind wie Familie geworden und gehen weit über ihre Pflichten hinaus. Sie bringen nicht nur fachliche Kompetenz mit, sondern auch Herzlichkeit und Aufmerksamkeit. Meine Mutter hat wieder Lebensfreude gewonnen. Absolute Empfehlung für alle, die qualitätsvolle Pflege suchen!",
      avatar: "E",
      color: "bg-nature-sage"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 6000 })]
  );
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

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

  const toggleExpanded = (reviewId: number) => {
    const newExpanded = new Set(expandedReviews);
    if (newExpanded.has(reviewId)) {
      newExpanded.delete(reviewId);
    } else {
      newExpanded.add(reviewId);
    }
    setExpandedReviews(newExpanded);
  };

  return (
    <section className="py-20 bg-nature-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-bold text-nature-charcoal font-nunito">5,0</span>
            <span className="text-muted-foreground font-source">/ 120 Bewertungen</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-nature-charcoal mb-4 font-nunito">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-source">
            Echte Erfahrungen von Familien, die unseren Pflegedienst vertrauen
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review) => (
                <div key={review.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-4">
                  <div className="bg-white rounded-xl p-6 shadow-soft h-full flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg font-nunito",
                          review.color
                        )}>
                          {review.avatar}
                        </div>
                        <div>
                          <h3 className="font-bold text-nature-charcoal font-nunito">{review.name}</h3>
                          <p className="text-sm text-muted-foreground font-source">{review.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-muted-foreground font-source leading-relaxed mb-4">
                        {expandedReviews.has(review.id) ? review.fullText : review.text}
                      </p>
                      
                      {review.fullText.length > review.text.length && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpanded(review.id)}
                          className="text-nature-sage hover:text-nature-sage/80 p-0 h-auto font-source"
                        >
                          {expandedReviews.has(review.id) ? 'Weniger anzeigen' : 'Mehr lesen'}
                        </Button>
                      )}
                    </div>

                    <div className="text-sm text-muted-foreground font-source mt-4 pt-4 border-t border-gray-100">
                      {review.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-nature-sage hover:bg-nature-sage hover:text-white transition-colors"
              aria-label="Vorherige Bewertung"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex space-x-2">
              {reviews.slice(0, 3).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    index === selectedIndex % 3 ? "bg-nature-coral" : "bg-gray-300"
                  )}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full bg-white shadow-soft flex items-center justify-center text-nature-sage hover:bg-nature-sage hover:text-white transition-colors"
              aria-label="Nächste Bewertung"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Google Reviews Badge */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-soft">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
              alt="Google" 
              className="h-5 w-5"
            />
            <span className="font-semibold text-nature-charcoal font-source">Google Bewertungen</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedReviewCarousel;