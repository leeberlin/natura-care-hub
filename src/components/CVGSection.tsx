import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import bannerPflegeImg from "@/assets/banner-pflege.png";

const CVGSection = () => {
  return <section className="relative py-20 bg-cover bg-center bg-fixed" style={{
    backgroundImage: `url('${bannerPflegeImg}')`
  }}>
      <div className="absolute inset-0 bg-nature-charcoal/70"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-nunito leading-tight">
            Vertrauensvolle Pflege macht{" "}
            <span className="text-nature-coral">den Unterschied</span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 opacity-90 font-source leading-relaxed">Bei Natura Pflegedienst steht der Mensch im Mittelpunkt. Wir verbinden professionelle Kompetenz mit echter Herzlichkeit.</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="coral" size="lg" className="font-nunito group text-lg px-8 py-4" asChild>
              <a href="/digital-beratung">
                Jetzt kostenlos beraten lassen
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button variant="secondary" size="lg" className="font-nunito text-lg px-8 py-4" asChild>
              <a href="/about">Mehr über uns erfahren</a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-nature-coral mb-2 font-nunito">2025</div>
              <div className="text-white/80 font-source">Unser Start</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-nature-coral mb-2 font-nunito">Neu</div>
              <div className="text-white/80 font-source">Moderne Pflege</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-nature-coral mb-2 font-nunito">24/7</div>
              <div className="text-white/80 font-source">Erreichbarkeit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-nature-coral mb-2 font-nunito">100%</div>
              <div className="text-white/80 font-source">Zertifiziert</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default CVGSection;