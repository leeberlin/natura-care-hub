import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, Heart, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// Import team member avatars
import mitarbeiter1 from "@/assets/Mitarbeiter-1.png";
import mitarbeiter2 from "@/assets/Mitarbeiter-2.png";
import mitarbeiter3 from "@/assets/Mitarbeiter-3.png";
import mitarbeiter4 from "@/assets/Mitarbeiter-4.png";
import mitarbeiter5 from "@/assets/Mitarbeiter-5.png";

// Import team photos for slider
import team1 from "@/assets/team.png";
import team2 from "@/assets/team2.png";
import team3 from "@/assets/team3.png";
import team4 from "@/assets/team4.png";
import team5 from "@/assets/team5.png";
import team6 from "@/assets/team6.png";
import team7 from "@/assets/team7.png";

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const teamPhotos = [team1, team2, team3, team4, team5, team6, team7];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamPhotos.length) % teamPhotos.length);
  };

  const leadership = [
    {
      name: "Tuan Pham",
      role: "Geschäftsführerin & Pflegedienstleitung",
      avatar: mitarbeiter1,
      qualifications: ["Examinierte Altenpflegerin", "Pflegedienstleitung", "Pflegefachkraft"],
      description: "Als erfahrene Pflegefachkraft leitet Tuan unser Team mit Kompetenz und Herzlichkeit."
    },
    {
      name: "Linh Tran",
      role: "Stellvertretende Pflegedienstleitung",
      avatar: mitarbeiter2,
      qualifications: ["Examinierte Krankenschwester", "Palliativpflege", "Medizinische Expertise"],
      description: "Linh bringt ihre medizinische Expertise und einfühlsame Betreuung in unser Team ein."
    }
  ];

  const teamMembers = [
    { 
      name: "Quyen Dao", 
      role: "Stellvertretende PDL", 
      avatar: mitarbeiter3,
      specializations: ["Wundmanagement", "Chronische Wunden", "Dekubitusprophylaxe", "Verbandstechnik"],
      experience: "8 Jahre Erfahrung"
    },
    { 
      name: "Mai Nguyen", 
      role: "Examinierte Altenpflegerin", 
      avatar: mitarbeiter4,
      specializations: ["Demenzbetreuung", "Validation", "Biografiearbeit", "Verhaltensauffälligkeiten"],
      experience: "6 Jahre Erfahrung"
    },
    { 
      name: "Hoa Le", 
      role: "Pflegefachkraft", 
      avatar: mitarbeiter5,
      specializations: ["Behandlungspflege", "Medikamentengabe", "Injektionen", "Katheterpflege"],
      experience: "5 Jahre Erfahrung"
    },
    { 
      name: "Lan Vu", 
      role: "Pflegehelferin", 
      avatar: mitarbeiter1,
      specializations: ["Grundpflege", "Körperpflege", "Mobilisation", "Lagerungstechniken"],
      experience: "4 Jahre Erfahrung"
    },
    { 
      name: "Duc Tran", 
      role: "Pflegefachkraft", 
      avatar: mitarbeiter2,
      specializations: ["Diabetes-Schulung", "Blutzuckermessung", "Insulingabe", "Ernährungsberatung"],
      experience: "7 Jahre Erfahrung"
    },
    { 
      name: "Thy Pham", 
      role: "Betreuungskraft", 
      avatar: mitarbeiter3,
      specializations: ["Aktivierung", "Gedächtnistraining", "Kreativtherapie", "Soziale Betreuung"],
      experience: "3 Jahre Erfahrung"
    },
    { 
      name: "An Hoang", 
      role: "Pflegefachkraft", 
      avatar: mitarbeiter4,
      specializations: ["Palliativpflege", "Schmerzmanagement", "Sterbebegleitung", "Angehörigenbetreuung"],
      experience: "9 Jahre Erfahrung"
    },
    { 
      name: "Minh Tran", 
      role: "Pflegehelferin", 
      avatar: mitarbeiter5,
      specializations: ["Hauswirtschaft", "Einkaufshilfe", "Mahlzeitenzubereitung", "Reinigungsarbeiten"],
      experience: "2 Jahre Erfahrung"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nature-sage/10 to-nature-coral/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
              Unser <span className="text-nature-sage">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground font-source mb-8">
              Lernen Sie unser erfahrenes und einfühlsames Pflegeteam kennen
            </p>
            
            {/* Updated Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center p-6 bg-white rounded-2xl shadow-soft">
                <div className="text-4xl font-bold text-nature-sage font-nunito mb-2">10</div>
                <div className="text-sm text-muted-foreground font-source">Mitarbeiter</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-soft">
                <div className="text-4xl font-bold text-nature-coral font-nunito mb-2">8</div>
                <div className="text-sm text-muted-foreground font-source">Fachkräfte</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-soft">
                <div className="text-4xl font-bold text-nature-sage font-nunito mb-2">30</div>
                <div className="text-sm text-muted-foreground font-source">Betreute Kunden</div>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-soft">
                <div className="text-4xl font-bold text-nature-coral font-nunito mb-2">24/7</div>
                <div className="text-sm text-muted-foreground font-source">Bereitschaft</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo Slider */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-nature-charcoal mb-4 font-nunito">
                Unser Team in <span className="text-nature-sage">Aktion</span>
              </h2>
              <p className="text-lg text-muted-foreground font-source">
                Einblicke in unseren Arbeitsalltag und Teamgeist
              </p>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {teamPhotos.map((photo, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                                             <img 
                         src={photo} 
                         alt={`Team Foto ${index + 1}`}
                         className="w-full h-[500px] md:h-[600px] object-cover"
                       />
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-nature-charcoal" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
              >
                <ChevronRight className="w-6 h-6 text-nature-charcoal" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {teamPhotos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-nature-charcoal mb-4 font-nunito">
                Unsere <span className="text-nature-sage">Leitung</span>
              </h2>
              <p className="text-lg text-muted-foreground font-source">
                Erfahrene Führungskräfte mit Herz und Kompetenz
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={leader.avatar} 
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-nature-charcoal mb-2 font-nunito">
                          {leader.name}
                        </h3>
                        <p className="text-nature-sage font-semibold mb-3 font-source">
                          {leader.role}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {leader.qualifications.map((qual, qIndex) => (
                            <Badge key={qIndex} variant="secondary" className="text-xs">
                              {qual}
                            </Badge>
                          ))}
                        </div>
                        <p className="text-muted-foreground font-source text-sm">
                          {leader.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-nature-charcoal mb-4 font-nunito">
                Unser <span className="text-nature-sage">Pflegeteam</span>
              </h2>
              <p className="text-lg text-muted-foreground font-source">
                Qualifizierte Fachkräfte für Ihre individuelle Betreuung
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-nature-charcoal mb-2 font-nunito">
                      {member.name}
                    </h3>
                    <p className="text-nature-sage font-semibold mb-2 font-source text-sm">
                      {member.role}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-2 justify-center">
                      {member.specializations.map((spec, specIndex) => (
                        <Badge key={specIndex} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-muted-foreground font-source text-xs">
                      {member.experience}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-nature-charcoal mb-8 font-nunito">
              Unsere <span className="text-nature-sage">Werte</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-nature-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-nature-sage" />
                </div>
                <h3 className="text-xl font-bold text-nature-charcoal mb-2 font-nunito">Herzlichkeit</h3>
                <p className="text-muted-foreground font-source">
                  Wir begegnen jedem Menschen mit Respekt, Wärme und Verständnis
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-nature-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-nature-coral" />
                </div>
                <h3 className="text-xl font-bold text-nature-charcoal mb-2 font-nunito">Kompetenz</h3>
                <p className="text-muted-foreground font-source">
                  Fachliche Exzellenz und kontinuierliche Weiterbildung sind unser Standard
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-nature-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-nature-sage" />
                </div>
                <h3 className="text-xl font-bold text-nature-charcoal mb-2 font-nunito">Qualität</h3>
                <p className="text-muted-foreground font-source">
                  Höchste Pflegestandards für Ihr Wohlbefinden und Ihre Sicherheit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;