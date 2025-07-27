import { Button } from "./ui/button";
import { ArrowRight, MapPin, Heart } from "lucide-react";
import heroImage from "@/assets/hero-care.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-soft">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-nature-cream/60 px-4 py-2 rounded-full text-sm font-source text-nature-charcoal">
                <Heart className="h-4 w-4 text-nature-coral" />
                <span>Neu ab Oktober 2025 für Sie da</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nature-charcoal leading-tight font-nunito">
                Liebevolle Pflege{" "}
                <span className="text-nature-sage">zuhause</span>{" "}
                in Nürnberg
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl font-source leading-relaxed">
                Individuelle Betreuung für Ihre Liebsten. Professionell, 
                vertrauensvoll und mit dem Herzen dabei - damit Sie sich 
                zuhause geborgen fühlen.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="coral" size="lg" className="font-nunito group" asChild>
                <a href="/digital-beratung">
                  Kostenlose Beratung vereinbaren
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="cream" size="lg" className="font-nunito" asChild>
                <a href="/about">Mehr erfahren</a>
              </Button>
            </div>

            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-nature-sage" />
              <span className="font-source">
                Killianstraße 119a, 90425 Nürnberg und Umgebung
              </span>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-nature-sage font-nunito">2025</div>
                <div className="text-sm text-muted-foreground font-source">Neuer Start</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-nature-sage font-nunito">100%</div>
                <div className="text-sm text-muted-foreground font-source">Qualifiziert</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-nature-sage font-nunito">24/7</div>
                <div className="text-sm text-muted-foreground font-source">Erreichbarkeit</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={heroImage} 
                alt="Liebevolle Pflege zuhause - Natura Pflegedienst Nürnberg" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-soft max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-nature-coral rounded-full flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-nature-charcoal font-nunito">
                    Überall dort, wo Sie uns brauchen
                  </div>
                  <div className="text-sm text-muted-foreground font-source">
                    In Ihrem Zuhause
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;