import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
              Über <span className="text-nature-sage">Natura Pflegedienst</span>
            </h1>
            <p className="text-xl text-muted-foreground font-source leading-relaxed">
              Seit über 15 Jahren Ihr vertrauensvoller Partner für professionelle Pflege in Nürnberg
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-nature-charcoal font-nunito">
                Unsere Geschichte
              </h2>
              <div className="space-y-4 text-lg font-source text-muted-foreground">
                <p>
                  Natura Pflegedienst wurde mit der Vision gegründet, Menschen in ihrem gewohnten 
                  Umfeld die bestmögliche Pflege und Betreuung zu bieten. Was als kleines Team 
                  begann, ist heute zu einem der vertrauenswürdigsten Pflegedienste in Nürnberg gewachsen.
                </p>
                <p>
                  Wir starten ab 2025 neu durch mit einem erweiterten Team und modernsten Standards, 
                  um Ihnen noch bessere Pflegeleistungen anzubieten.
                </p>
              </div>
            </div>
            <div className="bg-nature-cream/30 rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, title: "500+", subtitle: "Betreute Familien" },
                  { icon: Award, title: "15+", subtitle: "Jahre Erfahrung" },
                  { icon: Heart, title: "24/7", subtitle: "Verfügbarkeit" },
                  { icon: Users, title: "50+", subtitle: "Qualifizierte Mitarbeiter" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="h-8 w-8 text-nature-coral mx-auto mb-2" />
                    <div className="text-2xl font-bold text-nature-sage font-nunito">{stat.title}</div>
                    <div className="text-sm text-muted-foreground font-source">{stat.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-nature-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-nature-charcoal mb-6 font-nunito">
              Unsere Werte
            </h2>
            <p className="text-lg text-muted-foreground font-source">
              Diese Prinzipien leiten unser tägliches Handeln und prägen unsere Beziehung zu unseren Klienten
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vertrauen",
                description: "Wir bauen langfristige Beziehungen auf, die auf Vertrauen und Respekt basieren."
              },
              {
                title: "Qualität",
                description: "Höchste Standards in der Pflege durch kontinuliche Weiterbildung und Zertifizierung."
              },
              {
                title: "Individualität",
                description: "Jeder Mensch ist einzigartig - unsere Pflege passt sich Ihren Bedürfnissen an."
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-soft text-center">
                <h3 className="text-xl font-bold text-nature-charcoal mb-4 font-nunito">
                  {value.title}
                </h3>
                <p className="text-muted-foreground font-source">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6 font-nunito">
              Lernen Sie uns persönlich kennen
            </h2>
            <p className="text-xl mb-8 opacity-90 font-source">
              Vereinbaren Sie noch heute ein unverbindliches Beratungsgespräch
            </p>
            <Button variant="secondary" size="lg" className="font-nunito group">
              Kostenlose Beratung vereinbaren
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;