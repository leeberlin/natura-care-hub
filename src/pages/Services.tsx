import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Import service images
import grundpflegeImg from "@/assets/Grundpflege/grundpflege.jpg";
import behandlungspflegeImg from "@/assets/Bahandlungspflege/krankenpflege.jpg";
import beratungImg from "@/assets/Beratung/beratung3.png";
import hwsImg from "@/assets/companion-care.jpg";
import krankenpflegeImg from "@/assets/haeusliche-krankenpflege/medikamentengabe.png";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/hero-care.jpg" 
            alt="Unsere Dienstleistungen Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-nature-charcoal/80 via-nature-charcoal/60 to-nature-charcoal/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-nunito leading-tight">
              Unsere <span className="text-nature-coral">Dienstleistungen</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-source leading-relaxed">
              Individuelle und natürliche Pflegelösungen für Ihre Bedürfnisse
            </p>
            
            <div className="flex items-center justify-center space-x-4 mt-12">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-nature-coral"></div>
              <div className="w-3 h-3 bg-nature-coral rounded-full"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-nature-coral"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
              Unsere Pflegedienstleistungen
            </h2>
            <p className="text-xl text-muted-foreground font-source leading-relaxed">
              Bei Natura Pflege bieten wir ein breites Spektrum an Pflegedienstleistungen an, die auf Ihre individuellen
              Bedürfnisse und Wünsche zugeschnitten sind. Unser Ziel ist es, Ihnen oder Ihren Angehörigen ein
              selbstbestimmtes Leben in der vertrauten häuslichen Umgebung zu ermöglichen und dabei eine hohe
              Lebensqualität zu gewährleisten.
            </p>
          </div>
        </div>
      </section>

      {/* Ambulante Pflege */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-block">
                    <div className="h-1 w-16 bg-gradient-to-r from-nature-sage to-nature-teal rounded-full mb-6"></div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-nature-charcoal font-nunito">
                    Ambulante Pflege
                  </h3>
                  
                  <p className="text-xl text-slate-600 font-source leading-relaxed">
                    Unsere ambulante Pflege unterstützt Sie im Alltag bei allen pflegerischen Maßnahmen, die Sie nicht mehr
                    selbstständig durchführen können. Unser professionelles Pflegeteam kommt zu Ihnen nach Hause und hilft
                    Ihnen bei der Bewältigung des Alltags.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Grundpflege",
                      description: "Unterstützung bei der Körperpflege, An- und Auskleiden, Hilfe bei der Nahrungsaufnahme."
                    },
                    {
                      title: "Hauswirtschaftliche Versorgung",
                      description: "Unterstützung bei Einkäufen, Zubereitung von Mahlzeiten und leichten Reinigungsarbeiten."
                    },
                    {
                      title: "Mobilität",
                      description: "Hilfe beim Aufstehen, Hinlegen und bei der Fortbewegung im häuslichen Umfeld."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                      <CheckCircle className="h-6 w-6 text-nature-sage flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-nature-charcoal mb-2 font-nunito">{item.title}</h4>
                        <p className="text-muted-foreground font-source">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-nature-cream/30 rounded-xl p-6">
                  <h4 className="font-bold text-nature-charcoal mb-3 font-nunito">Kostenübernahme</h4>
                  <p className="text-muted-foreground font-source">
                    Die Kosten für die ambulante Pflege werden bei vorliegendem Pflegegrad ganz oder teilweise von der
                    Pflegekasse übernommen. Wir beraten Sie gerne zu den Möglichkeiten der Finanzierung und unterstützen
                    Sie bei der Antragstellung.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={grundpflegeImg} 
                    alt="Ambulante Pflege" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nature-charcoal/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Häusliche Krankenpflege */}
      <section className="py-20 bg-gradient-to-br from-nature-cream/10 via-white to-nature-sage/5">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative lg:order-1">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={krankenpflegeImg} 
                    alt="Häusliche Krankenpflege" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nature-charcoal/20 via-transparent to-transparent"></div>
                </div>
              </div>
              
              <div className="space-y-8 lg:order-2">
                <div className="space-y-6">
                  <div className="inline-block">
                    <div className="h-1 w-16 bg-gradient-to-r from-nature-coral to-rose-500 rounded-full mb-6"></div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-nature-charcoal font-nunito">
                    Häusliche Krankenpflege
                  </h3>
                  
                  <p className="text-xl text-slate-600 font-source leading-relaxed">
                    Die häusliche Krankenpflege umfasst alle ärztlich verordneten medizinischen Behandlungspflegemaßnahmen,
                    die in Ihrem Zuhause durchgeführt werden können. Unsere qualifizierten Pflegefachkräfte führen diese
                    professionell und mit größter Sorgfalt durch.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Medikamentengabe",
                      description: "Vorbereitung und Verabreichung von Medikamenten gemäß ärztlicher Verordnung."
                    },
                    {
                      title: "Wundversorgung",
                      description: "Professionelle Wundbehandlung und Verbandswechsel nach aktuellen Pflegestandards."
                    },
                    {
                      title: "Injektionen",
                      description: "Fachgerechte Verabreichung von Injektionen aller Art (s.c., i.m., i.v.)."
                    },
                    {
                      title: "Weitere Behandlungspflege",
                      description: "Blutzuckermessung, Blutdruckkontrolle, Kompressionstherapie, Katheter- und Stomaversorgung."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                      <CheckCircle className="h-6 w-6 text-nature-coral flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-nature-charcoal mb-2 font-nunito">{item.title}</h4>
                        <p className="text-muted-foreground font-source">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-nature-coral/10 rounded-xl p-6">
                  <h4 className="font-bold text-nature-charcoal mb-3 font-nunito">Kostenübernahme</h4>
                  <p className="text-muted-foreground font-source">
                    Die Kosten für die häusliche Krankenpflege werden bei ärztlicher Verordnung in der Regel von der
                    Krankenkasse übernommen. Wir kümmern uns um die Genehmigung und Abrechnung mit Ihrer Krankenkasse.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Betreuungsleistungen */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-block">
                    <div className="h-1 w-16 bg-gradient-to-r from-nature-teal to-blue-500 rounded-full mb-6"></div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-nature-charcoal font-nunito">
                    Betreuungsleistungen
                  </h3>
                  
                  <p className="text-xl text-slate-600 font-source leading-relaxed">
                    Unsere Betreuungsleistungen gehen über die reine Pflege hinaus und bieten soziale Unterstützung und
                    geistige Anregung im Alltag. Dies ist besonders wichtig für Menschen mit kognitiven Einschränkungen oder
                    Demenz, aber auch für alle, die Gesellschaft und Unterstützung im Alltag benötigen.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Gemeinsame Aktivitäten",
                      description: "Spaziergänge, Spielenachmittage, Vorlesen und Gespräche führen."
                    },
                    {
                      title: "Gedächtnistraining",
                      description: "Übungen zur Förderung der geistigen Fitness und Alltagskompetenz."
                    },
                    {
                      title: "Alltagsbegleitung",
                      description: "Begleitung bei Arztbesuchen, Behördengängen und kulturellen Veranstaltungen."
                    },
                    {
                      title: "Entlastung pflegender Angehöriger",
                      description: "Stundenweise Betreuung zur Entlastung der Hauptpflegepersonen."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                      <CheckCircle className="h-6 w-6 text-nature-teal flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-nature-charcoal mb-2 font-nunito">{item.title}</h4>
                        <p className="text-muted-foreground font-source">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-nature-teal/10 rounded-xl p-6">
                  <h4 className="font-bold text-nature-charcoal mb-3 font-nunito">Kostenübernahme</h4>
                  <p className="text-muted-foreground font-source">
                    Betreuungsleistungen können über den Entlastungsbetrag (125€ monatlich) oder über das Pflegegeld bzw.
                    die Pflegesachleistungen finanziert werden. Wir beraten Sie gerne zu allen Möglichkeiten.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={hwsImg} 
                    alt="Betreuungsleistungen" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nature-charcoal/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ganzheitliche Beratung */}
      <section className="py-20 bg-gradient-to-br from-amber-50/30 via-white to-orange-50/20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative lg:order-1 flex justify-center">
                <div className="relative w-96 h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={beratungImg} 
                    alt="Ganzheitliche Pflegeberatung" 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nature-charcoal/20 via-transparent to-transparent"></div>
                </div>
              </div>
              
              <div className="space-y-8 lg:order-2">
                <div className="space-y-6">
                  <div className="inline-block">
                    <div className="h-1 w-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6"></div>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold text-nature-charcoal font-nunito">
                    Ganzheitliche Pflegeberatung
                  </h3>
                  
                  <p className="text-xl text-slate-600 font-source leading-relaxed">
                    Unsere ganzheitliche Beratung bietet Ihnen und Ihren Angehörigen umfassende Informationen zu allen
                    Fragen rund um das Thema Pflege. Wir betrachten dabei nicht nur die medizinischen und pflegerischen
                    Aspekte, sondern auch soziale, finanzielle und rechtliche Faktoren.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Erstberatung",
                      description: "Ausführliches Gespräch zur Erfassung der individuellen Pflegesituation und Bedürfnisse."
                    },
                    {
                      title: "Finanzierungsberatung",
                      description: "Informationen zu Pflegegraden, Leistungen der Pflegeversicherung und weiteren Finanzierungsmöglichkeiten."
                    },
                    {
                      title: "Unterstützung bei Anträgen",
                      description: "Hilfe bei der Beantragung von Pflegeleistungen und beim Umgang mit Behörden."
                    },
                    {
                      title: "Angehörigenberatung",
                      description: "Tipps und Tricks für pflegende Angehörige, Entlastungsmöglichkeiten und Selbstfürsorge."
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-stone-100">
                      <CheckCircle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-nature-charcoal mb-2 font-nunito">{item.title}</h4>
                        <p className="text-muted-foreground font-source">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-amber-50 rounded-xl p-6">
                  <h4 className="font-bold text-nature-charcoal mb-3 font-nunito">Kostenübernahme</h4>
                  <p className="text-muted-foreground font-source">
                    Die Erstberatung bieten wir kostenlos an. Umfassendere Beratungsleistungen können teilweise über die
                    Pflegeversicherung abgerechnet werden, z.B. im Rahmen der Pflegeberatung nach § 37.3 SGB XI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
                Häufig gestellte Fragen
              </h2>
              <p className="text-xl text-muted-foreground font-source">
                Antworten auf die wichtigsten Fragen zu unseren Pflegedienstleistungen
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Wie wird die Pflegebedürftigkeit festgestellt?",
                  answer: "Die Pflegebedürftigkeit wird durch den Medizinischen Dienst der Krankenversicherung (MDK) festgestellt. Nach einem Begutachtungstermin wird ein Pflegegrad von 1-5 vergeben."
                },
                {
                  question: "Welche Kosten werden von der Pflegeversicherung übernommen?",
                  answer: "Je nach Pflegegrad übernimmt die Pflegeversicherung einen bestimmten Betrag für Pflegesachleistungen. Bei Pflegegrad 2-5 werden auch Betreuungsleistungen über den Entlastungsbetrag finanziert."
                },
                {
                  question: "Kann ich meinen Pflegedienst frei wählen?",
                  answer: "Ja, Sie haben die freie Wahl des Pflegedienstes. Wichtig ist nur, dass der Dienst einen Versorgungsvertrag mit den Pflegekassen hat - wie wir bei Natura Pflege."
                },
                {
                  question: "Wie schnell kann die Pflege beginnen?",
                  answer: "Nach einem Erstbesuch und der Pflegeplanung können wir in der Regel innerhalb weniger Tage mit der Pflege beginnen. In Notfällen ist auch ein schnellerer Start möglich."
                },
                {
                  question: "Was passiert, wenn eine Pflegekraft krank ist?",
                  answer: "Wir haben ein stabiles Team und Vertretungsregelungen. Auch bei Krankheit oder Urlaub einer Pflegekraft ist Ihre Versorgung sichergestellt."
                }
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl border border-stone-200 shadow-sm">
                  <AccordionTrigger className="px-6 py-4 text-left font-nunito font-semibold text-nature-charcoal hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground font-source">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-nature-sage via-nature-teal to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-nature-cream rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-nunito">
              Bereit für professionelle Unterstützung?
            </h2>
            <p className="text-xl text-white/90 mb-8 font-source leading-relaxed">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. Gemeinsam finden wir die passende
              Pflegelösung für Sie oder Ihre Angehörigen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-nature-sage hover:bg-white/90 hover:text-nature-sage/90 font-nunito group px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                <a href="/contact">
                  <Mail className="h-5 w-5 mr-2" />
                  Kontakt aufnehmen
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button size="lg" className="bg-white text-nature-sage hover:bg-white/90 hover:text-nature-sage/90 font-nunito px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-white" asChild>
                <a href="tel:+4991123456789">
                  <Phone className="h-5 w-5 mr-2" />
                  Jetzt anrufen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;