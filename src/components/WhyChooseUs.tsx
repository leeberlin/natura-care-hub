import { Button } from "./ui/button";
import { 
  Award, 
  Users, 
  Heart, 
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "Erfahrenes Team",
      description: "Qualifizierte Pflegefachkräfte mit langjähriger Erfahrung und regelmäßigen Fortbildungen.",
      highlights: [
        "Examinierte Pflegefachkräfte",
        "Regelmäßige Schulungen",
        "Persönliche Betreuung",
        "Empathisches Personal"
      ]
    },
    {
      icon: Heart,
      title: "Individuelle Pflege",
      description: "Maßgeschneiderte Pflegepläne, die sich an Ihren persönlichen Bedürfnissen orientieren.",
      highlights: [
        "Persönlicher Pflegeplan",
        "Flexible Zeiten",
        "Respekt vor Gewohnheiten",
        "Familienorientiert"
      ]
    },
    {
      icon: Award,
      title: "Zertifizierte Qualität",
      description: "Höchste Qualitätsstandards durch Zertifizierungen und kontinuierliche Qualitätssicherung.",
      highlights: [
        "MDK-Qualitätsprüfung",
        "Pflegequalität Note 1,2",
        "Zertifizierte Abläufe",
        "Transparente Dokumentation"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Maria Schmidt",
      age: "Tochter von Pflegebedürftiger",
      text: "Das Team von Natura Pflegedienst kümmert sich so liebevoll um meine Mutter. Endlich kann ich wieder ruhig schlafen.",
      rating: 5
    },
    {
      name: "Hans Weber",
      age: "Ehemann von Pflegebedürftiger",
      text: "Professionell und herzlich zugleich. Die Pflegerinnen sind wie Familie geworden.",
      rating: 5
    },
    {
      name: "Anna Müller",
      age: "Pflegebedürftige",
      text: "Ich fühle mich zuhause sicher und gut betreut. Das bedeutet mir sehr viel.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-nature-cream/60 px-4 py-2 rounded-full text-sm font-source text-nature-charcoal mb-6">
            <Star className="h-4 w-4 text-nature-coral" />
            <span>Warum Natura Pflegedienst?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
            Liebevolle Betreuung{" "}
            <span className="text-nature-sage">und erstklassige Pflege</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-source leading-relaxed">
            Fürsorge und Qualität stehen im Mittelpunkt unserer individuellen Pflege und Betreuung. 
            Für die Ausbildung unserer Betreuungskräfte haben wir ein mehrstufiges Lehrprogramm erarbeitet.
          </p>
        </div>

        {/* Why Choose Us Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-card hover:shadow-soft transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-nature-charcoal mb-4 font-nunito">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 font-source leading-relaxed">
                  {reason.description}
                </p>
                
                <ul className="space-y-3">
                  {reason.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-nature-sage flex-shrink-0" />
                      <span className="text-sm text-muted-foreground font-source">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-nature-charcoal text-center mb-12 font-nunito">
            Was unsere Kunden sagen
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-card hover:shadow-soft transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4 font-source leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-nature-charcoal font-nunito">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground font-source">
                    {testimonial.age}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-card">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-nature-charcoal mb-4 font-nunito">
              Die Sicherheit unserer Kunden liegt uns am Herzen.{" "}
              <span className="text-nature-coral">Wir sind den Menschen verpflichtet.</span>
            </h3>
            
            <p className="text-lg text-muted-foreground mb-8 font-source leading-relaxed">
              Regelmäßige Qualitätsprüfungen und kontinuierliche Weiterbildung unserer Mitarbeiter 
              garantieren Ihnen höchste Pflegestandards und maximale Sicherheit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="coral" size="lg" className="font-nunito group">
                Gute Gründe für Natura Pflegedienst
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="sage" size="lg" className="font-nunito">
                Qualitätsbericht ansehen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;