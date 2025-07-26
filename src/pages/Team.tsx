import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, Heart, Star } from "lucide-react";

const Team = () => {
  const leadership = [
    {
      name: "Tuan Pham",
      role: "Geschäftsführerin & Pflegedienstleitung",
      qualifications: ["Examinierte Altenpflegerin", "Pflegedienstleitung", "15 Jahre Erfahrung"],
      description: "Mit über 15 Jahren Erfahrung in der Altenpflege leitet Tuan unser Team mit Kompetenz und Herzlichkeit."
    },
    {
      name: "Linh Tran",
      role: "Stellvertretende Pflegedienstleitung",
      qualifications: ["Examinierte Krankenschwester", "Palliativpflege", "10 Jahre Erfahrung"],
      description: "Linh bringt ihre umfassende medizinische Expertise und einfühlsame Betreuung in unser Team ein."
    }
  ];

  const teamMembers = [
    { name: "Quyen Dao", role: "Stellvertretende PDL", specialization: "Wundmanagement" },
    { name: "Mai Nguyen", role: "Examinierte Altenpflegerin", specialization: "Demenzbetreuung" },
    { name: "Hoa Le", role: "Pflegefachkraft", specialization: "Behandlungspflege" },
    { name: "Lan Vu", role: "Pflegehelferin", specialization: "Grundpflege" },
    { name: "Duc Tran", role: "Pflegefachkraft", specialization: "Diabetes-Schulung" },
    { name: "Thy Pham", role: "Betreuungskraft", specialization: "Aktivierung" }
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
            
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-nature-sage font-nunito">15+</div>
                <div className="text-sm text-muted-foreground font-source">Mitarbeiter</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-nature-coral font-nunito">8</div>
                <div className="text-sm text-muted-foreground font-source">Fachkräfte</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-nature-sage font-nunito">100+</div>
                <div className="text-sm text-muted-foreground font-source">Betreute Kunden</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-nature-coral font-nunito">24/7</div>
                <div className="text-sm text-muted-foreground font-source">Bereitschaft</div>
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
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-nature-sage/10 rounded-full flex items-center justify-center">
                        <Users className="h-8 w-8 text-nature-sage" />
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-nature-charcoal mb-4 font-nunito">
                Unser <span className="text-nature-coral">Pflegeteam</span>
              </h2>
              <p className="text-lg text-muted-foreground font-source">
                Qualifizierte Fachkräfte mit vietnamesisch-deutscher Kompetenz
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-nature-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-6 w-6 text-nature-coral" />
                    </div>
                    <h3 className="text-lg font-bold text-nature-charcoal mb-2 font-nunito">
                      {member.name}
                    </h3>
                    <p className="text-nature-coral font-semibold mb-2 font-source text-sm">
                      {member.role}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {member.specialization}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-nature-sage/10 to-nature-coral/10 rounded-2xl p-8 md:p-12">
              <Star className="h-12 w-12 text-nature-sage mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-nature-charcoal mb-4 font-nunito">
                Werden Sie Teil unseres <span className="text-nature-sage">Teams</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 font-source">
                Wir suchen engagierte Pflegefachkräfte, die unsere Werte teilen und mit Herz pflegen möchten.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="font-nunito">
                  <Award className="h-5 w-5 mr-2" />
                  Stellenangebote ansehen
                </Button>
                <Button variant="outline" size="lg" className="font-nunito">
                  Initiativbewerbung
                </Button>
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