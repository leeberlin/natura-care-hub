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

        {/* Modern Testimonials Section */}
        <div className="mb-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4 font-nunito">
              Was die Kunden über uns sagen
            </h3>
            <p className="text-lg text-gray-700 font-nunito mb-2">Worte, die bleiben.</p>
            <p className="text-gray-600 max-w-2xl mx-auto font-source leading-relaxed">
              Unsere Kund:innen sagen oft besser, was unseren ambulanten Pflegedienst ausmacht. 
              Sie erzählen von <strong>Vertrauen, Dankbarkeit</strong> und kleinen Momenten, <strong>die zählen.</strong>
            </p>
            <p className="text-gray-600 mt-2 font-source">
              Und genau darum machen wir, was wir machen – Tag für Tag.
            </p>
          </div>

          {/* Google Reviews Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg shadow-md px-6 py-3 flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <svg className="h-6 w-6" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-semibold text-gray-800">Google</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="font-bold text-gray-800 ml-1">5.0</span>
              </div>
              <span className="text-gray-600 font-medium">Bestbewerteter Service</span>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Profile Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg font-nunito">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 font-nunito">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-500 font-source">
                        vor 2 Monaten
                      </div>
                    </div>
                    <div className="ml-auto">
                      <svg className="h-5 w-5 text-blue-500" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-gray-700 font-source leading-relaxed text-sm">
                    {testimonial.text}
                  </p>
                  
                  {/* Read More Link */}
                  <button className="text-blue-600 text-sm font-medium mt-3 hover:underline font-source">
                    Weiterlesen
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Badge */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              <CheckCircle className="h-4 w-4" />
              <span>Verifiziert von: Trustindex</span>
            </div>
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