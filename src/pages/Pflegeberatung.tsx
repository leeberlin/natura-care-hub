import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Users, Clock, Shield, Heart, FileText, Lightbulb, Euro, Calendar, ArrowRight, Star, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import beratungImg from "@/assets/Beratung/beratung3.png";

export default function Pflegeberatung() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/Beratung/beratung.png" 
            alt="Pflegeberatung Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-nature-charcoal/80 via-nature-charcoal/60 to-nature-charcoal/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-nunito leading-tight">
              <span className="text-nature-coral">Pflegeberatung</span> nach § 37.3
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-source leading-relaxed">
              Zertifizierte Beratung - Vollständig kostenfrei durch Pflegekassenfinanzierung
            </p>
            
            <div className="flex items-center justify-center space-x-4 mt-12">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-nature-coral"></div>
              <div className="w-3 h-3 bg-nature-coral rounded-full"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-nature-coral"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="py-20 bg-gradient-to-br from-nature-cream/20 via-white to-nature-sage/5">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block">
                  <div className="h-1 w-16 bg-gradient-to-r from-nature-coral to-amber-500 rounded-full mb-6"></div>
                </div>
                
                <div className="inline-flex items-center gap-3 bg-nature-coral/10 text-nature-coral px-6 py-3 rounded-full mb-8 font-semibold shadow-sm">
                  <CheckCircle className="h-5 w-5" />
                  Garantierte Kostenübernahme durch Pflegekasse
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-nature-charcoal font-nunito leading-tight">
                  Professionelle Beratung für Ihre Familie
                </h2>
                
                <p className="text-xl text-muted-foreground font-source leading-relaxed">
                  Wir unterstützen Sie dabei, die besten Pflege- und Betreuungsangebote zu finden 
                  und helfen Ihnen durch den Dschungel der Pflegeversicherung. Unsere zertifizierten 
                  Berater stehen Ihnen mit langjähriger Erfahrung zur Seite.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "§ 37.3 SGB XI", subtitle: "Gesetzlich verankert" },
                  { title: "100%", subtitle: "Kostenübernahme" },
                  { title: "30-45 Min", subtitle: "Beratungsdauer" },
                  { title: "Zertifiziert", subtitle: "Qualifizierte Berater" }
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                    <div className="text-xl font-bold text-nature-coral font-nunito">{item.title}</div>
                    <div className="text-sm text-muted-foreground font-source">{item.subtitle}</div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-nature-coral to-rose-500 hover:from-nature-coral/90 hover:to-rose-500/90 text-white font-nunito group px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300" 
                  asChild
                >
                  <a href="/digital-beratung">
                    <Calendar className="h-5 w-5 mr-2" />
                    Termin online buchen
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative flex justify-center">
              <div className="relative w-96 h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={beratungImg} 
                  alt="Pflegeberatung" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nature-charcoal/20 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
                Was Sie von uns erwarten können
              </h3>
              <p className="text-xl text-muted-foreground font-source max-w-3xl mx-auto">
                Umfassende Beratung zu allen Aspekten der Pflege - individuell auf Ihre Situation abgestimmt
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Individuelle Pflegegradantrag",
                  description: "Unterstützung bei der Beantragung und Vorbereitung auf die Begutachtung",
                  color: "nature-sage"
                },
                {
                  icon: Euro,
                  title: "Finanzierungsberatung",
                  description: "Aufklärung über Leistungen und Finanzierungsmöglichkeiten der Pflegeversicherung",
                  color: "nature-coral"
                },
                {
                  icon: Heart,
                  title: "Pflegekonzepte",
                  description: "Entwicklung individueller Pflege- und Betreuungskonzepte für zu Hause",
                  color: "nature-teal"
                },
                {
                  icon: Shield,
                  title: "Qualitätssicherung",
                  description: "Beratung zu Qualitätskriterien und Auswahl geeigneter Pflegedienste",
                  color: "amber-500"
                },
                {
                  icon: Lightbulb,
                  title: "Entlastungsmöglichkeiten",
                  description: "Aufzeigen von Entlastungsangeboten für pflegende Angehörige",
                  color: "rose-500"
                },
                {
                  icon: FileText,
                  title: "Rechtliche Beratung",
                  description: "Information zu rechtlichen Aspekten der Pflege und Vorsorgevollmachten",
                  color: "blue-500"
                }
              ].map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-stone-100">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 bg-${service.color}/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`h-8 w-8 text-${service.color}`} />
                    </div>
                    <h4 className="text-xl font-bold text-nature-charcoal mb-4 font-nunito group-hover:text-nature-sage transition-colors duration-300">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground font-source leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-br from-nature-cream/10 via-white to-nature-sage/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
                So läuft Ihre Beratung ab
              </h3>
              <p className="text-xl text-muted-foreground font-source">
                Einfach, unkompliziert und komplett kostenfrei
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Termin vereinbaren",
                  description: "Online oder telefonisch - wählen Sie den für Sie passenden Termin",
                  icon: Calendar
                },
                {
                  step: "02", 
                  title: "Beratungsgespräch",
                  description: "Ausführliche Analyse Ihrer Situation und individuelle Beratung",
                  icon: Users
                },
                {
                  step: "03",
                  title: "Nachbetreuung",
                  description: "Unterstützung bei der Umsetzung und weitere Begleitung bei Bedarf",
                  icon: CheckCircle
                }
              ].map((step, index) => (
                <div key={index} className="relative text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                         <div className="relative mb-6">
                       <div className="w-20 h-20 mx-auto bg-gradient-to-r from-nature-coral to-rose-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl font-nunito shadow-lg group-hover:scale-110 transition-transform duration-300">
                         {step.step}
                       </div>
                       <div className="flex justify-center mt-4">
                         <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-nature-coral/20">
                           <step.icon className="h-6 w-6 text-nature-coral" />
                         </div>
                       </div>
                     </div>
                    <h4 className="text-xl font-bold text-nature-charcoal mb-4 font-nunito">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground font-source leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-nature-coral to-rose-500"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-nature-sage via-nature-teal to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-nature-cream rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-nunito">
              Starten Sie jetzt Ihre kostenlose Beratung
            </h2>
            <p className="text-xl text-white/90 mb-8 font-source leading-relaxed">
              Vereinbaren Sie noch heute Ihren Termin. Wir sind für Sie da und helfen Ihnen gerne weiter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-nature-sage hover:bg-white/90 hover:text-nature-sage/90 font-nunito group px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <a href="/digital-beratung">
                  <Calendar className="h-5 w-5 mr-2" />
                  Online Termin buchen
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button size="lg" className="bg-white text-nature-sage hover:bg-white/90 hover:text-nature-sage/90 font-nunito px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white" asChild>
                <a href="/contact">
                  <Mail className="h-5 w-5 mr-2" />
                  Kontakt aufnehmen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}