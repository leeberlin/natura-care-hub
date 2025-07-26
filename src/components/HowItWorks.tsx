import { Button } from "./ui/button";
import { 
  Phone, 
  UserCheck, 
  FileText, 
  Heart,
  ArrowRight
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: Phone,
      title: "Erstberatung",
      description: "Unverbindliches Beratungsgespräch bei Ihnen zuhause. Wir lernen Sie kennen und besprechen Ihre Bedürfnisse.",
      details: ["Kostenlose Beratung", "Termin nach Wunsch", "Zuhause oder telefonisch", "Ohne Verpflichtung"]
    },
    {
      step: "02", 
      icon: UserCheck,
      title: "Pflegeplanung",
      description: "Gemeinsam erstellen wir einen individuellen Pflegeplan, der perfekt zu Ihren Bedürfnissen passt.",
      details: ["Individuelle Planung", "Berücksichtigung Ihrer Wünsche", "Flexible Zeiten", "Abstimmung mit Angehörigen"]
    },
    {
      step: "03",
      icon: FileText,
      title: "Kostenklärung",
      description: "Wir klären die Finanzierung mit Ihrer Pflegekasse und anderen Kostenträgern - transparent und verständlich.",
      details: ["Kostenübernahme prüfen", "Anträge stellen", "Transparente Abrechnung", "Maximale Ausschöpfung"]
    },
    {
      step: "04",
      icon: Heart,
      title: "Pflege beginnt",
      description: "Ihre persönliche Pflegekraft beginnt die Betreuung. Wir sind für Sie da - verlässlich und professionell.",
      details: ["Feste Bezugsperson", "Regelmäßige Termine", "24/7 Erreichbarkeit", "Kontinuierliche Betreuung"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-nature-cream/60 px-4 py-2 rounded-full text-sm font-source text-nature-charcoal mb-6">
            <Heart className="h-4 w-4 text-nature-coral" />
            <span>So einfach geht's</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
            In nur{" "}
            <span className="text-nature-sage">4 Schritten</span>{" "}
            zur perfekten Pflege
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-source leading-relaxed">
            Von der ersten Beratung bis zum Pflegebeginn begleiten wir Sie persönlich. 
            Einfach, transparent und ohne Stress.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isLast = index === steps.length - 1;
            
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-nature-sage/20 -translate-x-4 z-0">
                    <div className="w-1/2 h-full bg-nature-sage"></div>
                  </div>
                )}
                
                <div className="relative z-10 text-center">
                  {/* Step Number */}
                  <div className="w-24 h-24 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-card">
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* Step Badge */}
                  <div className="inline-block bg-nature-cream px-3 py-1 rounded-full text-sm font-semibold text-nature-charcoal mb-4 font-nunito">
                    Schritt {step.step}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-nature-charcoal mb-4 font-nunito">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 font-source leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="text-left space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-nature-coral rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground font-source">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-nunito">
            Bereit für den ersten Schritt?
          </h3>
          <p className="text-lg mb-8 opacity-90 font-source">
            Vereinbaren Sie noch heute Ihr kostenloses Beratungsgespräch. 
            Wir freuen uns darauf, Sie kennenzulernen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="coral" size="lg" className="font-nunito group">
              Jetzt Termin vereinbaren
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="font-nunito bg-white/10 border-white/30 text-white hover:bg-white hover:text-nature-charcoal"
            >
              0911-123456 anrufen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;