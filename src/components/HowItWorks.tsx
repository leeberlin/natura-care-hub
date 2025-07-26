import { CheckCircle, Clock, Calendar, Phone, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Kostenloses Erstgespräch",
      description: "Vereinbaren Sie unverbindlich ein kostenloses Gespräch bei Ihnen zu Hause.",
      highlight: "Persönliche Beratung vor Ort"
    },
    {
      number: "2", 
      title: "Individuelle Beratung",
      description: "Wir klären gemeinsam Ihre Wünsche und Bedürfnisse.",
      highlight: "Maßgeschneiderter Pflegeplan"
    },
    {
      number: "3",
      title: "Persönliches Angebot", 
      description: "Sie erhalten von uns ein transparentes, individuelles Angebot.",
      highlight: "Transparente Kostenaufstellung"
    },
    {
      number: "4",
      title: "Offene Fragen klären",
      description: "Wir beantworten alle noch offenen Fragen verständlich und ohne Zeitdruck.",
      highlight: "Kompetente Beratung"
    },
    {
      number: "5",
      title: "Start der Pflege",
      description: "Sobald Sie sich entscheiden, beginnen wir zuverlässig und unkompliziert.",
      highlight: "Schneller Pflegebeginn"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Steps */}
          <div>
            <div className="mb-8">
              <p className="text-nature-coral font-medium mb-2 font-source">
                Die ersten Schritte zur ambulanten Pflege mit Natura Pflegedienst
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4 font-nunito">
                So starten Sie unkompliziert Ihre Pflege mit uns
              </h2>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-orange-400 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1 font-nunito">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-1 font-source">
                      {step.description}
                    </p>
                    <p className="text-xs text-orange-600 font-medium font-source">
                      ✓ {step.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-blue-600 font-medium text-sm mb-2 font-source">
                Pflegedienst Nürnberg kontaktieren
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6 font-nunito">
                Wir freuen uns, Sie persönlich kennenzulernen
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-nature-coral" />
                  <div>
                    <p className="text-sm text-gray-500 font-source">Telefon:</p>
                    <p className="font-semibold text-blue-600 font-nunito">0911 / 123 45 67</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-nature-coral" />
                  <div>
                    <p className="text-sm text-gray-500 font-source">Adresse:</p>
                    <p className="font-semibold text-gray-800 font-nunito">Musterstraße 123, 90459 Nürnberg</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-nature-coral" />
                  <div>
                    <p className="text-sm text-gray-500 font-source">E-Mail:</p>
                    <p className="font-semibold text-blue-600 font-nunito">info@natura-pflegedienst.de</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <p className="text-blue-600 text-sm mb-4 font-source">
                  <span className="font-semibold">Kontaktieren</span> Sie uns unverbindlich. Wir sind persönlich und mit echter Zuwendung für Sie da.
                </p>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-nunito">
                  Jetzt kontaktieren
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;