import { Phone, User, FileText, Heart, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Kostenloses Erstgespräch",
      description: "Vereinbaren Sie unverbindlich ein kostenloses Gespräch bei Ihnen zu Hause. Wir lernen Sie kennen und besprechen Ihre Bedürfnisse.",
      features: [
        "Kostenlose Beratung",
        "Termin nach Wunsch", 
        "Zuhause oder telefonisch",
        "Ohne Verpflichtung"
      ]
    },
    {
      number: "02", 
      icon: User,
      title: "Individuelle Beratung",
      description: "Gemeinsam erstellen wir einen individuellen Pflegeplan, der perfekt zu Ihren Bedürfnissen passt.",
      features: [
        "Individuelle Planung",
        "Berücksichtigung Ihrer Wünsche",
        "Flexible Zeiten",
        "Abstimmung mit Angehörigen"
      ]
    },
    {
      number: "03",
      icon: FileText,
      title: "Persönliches Angebot", 
      description: "Wir klären die Finanzierung mit Ihrer Pflegekasse und anderen Kostenträgern - transparent und verständlich.",
      features: [
        "Kostenübernahme prüfen",
        "Anträge stellen",
        "Transparente Abrechnung",
        "Maximale Ausschöpfung"
      ]
    },
    {
      number: "04",
      icon: Heart,
      title: "Pflege beginnt",
      description: "Ihre persönliche Pflegekraft beginnt die Betreuung. Wir sind für Sie da - verlässlich und professionell.",
      features: [
        "Feste Bezugsperson",
        "Regelmäßige Termine", 
        "24/7 Erreichbarkeit",
        "Kontinuierliche Betreuung"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-nature-sage font-medium mb-2 font-source">
            So einfach geht's
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-nunito">
            In nur <span className="text-nature-sage">4 Schritten</span> zur perfekten Pflege
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto font-source">
            Von der ersten Beratung bis zum Pflegebeginn begleiten wir Sie persönlich. Einfach, transparent und ohne Stress.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-nature-sage/30 z-0" 
                       style={{ transform: 'translateX(50%)' }} />
                )}
                
                <div className="text-center relative z-10">
                  {/* Icon circle */}
                  <div className="w-24 h-24 bg-nature-sage rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Step number */}
                  <p className="text-sm font-semibold text-nature-sage mb-2 font-source">
                    Schritt {step.number}
                  </p>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-nunito">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 font-source">
                    {step.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-1">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-nature-sage font-medium font-source flex items-center justify-center">
                        <span className="w-1 h-1 bg-nature-sage rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-nature-sage to-nature-teal rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-nunito">
            Bereit für den ersten Schritt?
          </h3>
          <p className="text-lg mb-6 opacity-90 font-source">
            Kontaktieren Sie uns noch heute für Ihr kostenloses Beratungsgespräch
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="outline" className="bg-white text-nature-sage border-white hover:bg-gray-50 font-nunito">
              <Phone className="h-5 w-5 mr-2" />
              0911 / 123 45 67
            </Button>
            <Button size="lg" className="bg-nature-coral hover:bg-nature-coral/90 text-white font-nunito">
              Beratungstermin vereinbaren
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;