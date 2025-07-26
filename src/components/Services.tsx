import { useState } from "react";
import { Button } from "./ui/button";
import { 
  Heart, 
  Home, 
  Users, 
  Stethoscope, 
  Clock, 
  Shield,
  ArrowRight
} from "lucide-react";
import careAssistanceImage from "@/assets/care-assistance.jpg";
import householdHelpImage from "@/assets/household-help.jpg";
import companionCareImage from "@/assets/companion-care.jpg";

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const services = [
    {
      id: "basic-care",
      title: "Grundpflege",
      description: "Körperpflege, Mobilisation und medizinische Grundversorgung durch qualifizierte Pflegekräfte.",
      icon: Heart,
      image: careAssistanceImage,
      features: ["Körperpflege", "Medikamentengabe", "Mobilisation", "Wundversorgung"]
    },
    {
      id: "household",
      title: "Hauswirtschaft",
      description: "Unterstützung im Haushalt, Einkaufen, Kochen und Reinigung für mehr Lebensqualität.",
      icon: Home,
      image: householdHelpImage,
      features: ["Einkaufen", "Kochen", "Reinigung", "Wäschepflege"]
    },
    {
      id: "companion",
      title: "Betreuungsleistungen",
      description: "Soziale Betreuung, Gespräche und Aktivitäten für geistige und emotionale Unterstützung.",
      icon: Users,
      image: companionCareImage,
      features: ["Gespräche", "Spaziergänge", "Vorlesen", "Gesellschaftsspiele"]
    },
    {
      id: "medical",
      title: "Behandlungspflege",
      description: "Medizinische Versorgung nach ärztlicher Verordnung durch examinierte Pflegefachkräfte.",
      icon: Stethoscope,
      image: careAssistanceImage,
      features: ["Injektionen", "Verbandswechsel", "Medizinische Überwachung", "Therapiebegleitung"]
    },
    {
      id: "respite",
      title: "Verhinderungspflege",
      description: "Entlastung für pflegende Angehörige mit stundenweiser oder tageweiser Betreuung.",
      icon: Clock,
      image: companionCareImage,
      features: ["Stundenweise Entlastung", "Urlaubsvertretung", "Notfallbetreuung", "Flexible Zeiten"]
    },
    {
      id: "intensive",
      title: "24-Stunden-Betreuung",
      description: "Rund-um-die-Uhr Betreuung und Pflege in der gewohnten häuslichen Umgebung.",
      icon: Shield,
      image: householdHelpImage,
      features: ["24/7 Betreuung", "Nachtbereitschaft", "Intensivpflege", "Palliativpflege"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-nature-cream/60 px-4 py-2 rounded-full text-sm font-source text-nature-charcoal mb-6">
            <Heart className="h-4 w-4 text-nature-coral" />
            <span>Unsere Leistungen</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
            Rundum gut betreut{" "}
            <span className="text-nature-sage">mit Natura Pflegedienst</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-source leading-relaxed">
            Wir begleiten Sie, auch über einen langen Zeitraum. Egal, welche Art von Unterstützung oder 
            Betreuung Sie benötigen, wir sind in Ihrem Zuhause an Ihrer Seite.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="bg-card rounded-xl shadow-card hover:shadow-soft transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-nature-sage" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3 font-nunito">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 font-source leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-nature-coral rounded-full"></div>
                        <span className="text-muted-foreground font-source">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="cream" className="w-full group font-nunito">
                    Mehr Informationen
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-soft rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-nature-charcoal mb-4 font-nunito">
            Pflege- und Betreuungsleistungen über die Pflegekasse finanzierbar
          </h3>
          <p className="text-muted-foreground mb-8 font-source text-lg">
            Lassen Sie sich kostenlos beraten - wir prüfen gemeinsam Ihre Ansprüche und Möglichkeiten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="coral" size="lg" className="font-nunito">
              Kostenlose Beratung vereinbaren
            </Button>
            <Button variant="sage" size="lg" className="font-nunito">
              Kostenübersicht ansehen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;