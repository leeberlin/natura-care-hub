import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ArrowRight, Users, Heart, Clock, Shield, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Services = () => {
  const [bannerIndex, setBannerIndex] = useState(0);
  
  const bannerImages = [
    { src: '/services-banner1.png', alt: 'Professionelle Pflegeleistungen' },
    { src: '/services-banner2.png', alt: 'Individuelle Betreuung' },
    { src: '/services-banner3.png', alt: 'Qualifizierte Pflegekräfte' }
  ];

  const services = [
    {
      id: 1,
      title: "Grundpflege & Körperpflege",
      description: "Unterstützung bei der täglichen Körperpflege, Anziehen, Essen und Trinken. Unsere einfühlsamen Pflegekräfte helfen dabei, die Würde und Selbstständigkeit zu bewahren.",
      features: ["Körperpflege", "An- und Auskleiden", "Hilfe beim Essen", "Mobilisation"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Behandlungspflege",
      description: "Medizinische Behandlungspflege nach ärztlicher Verordnung. Von Medikamentengabe bis zur Wundversorgung - immer in enger Abstimmung mit Ihrem Arzt.",
      features: ["Medikamentengabe", "Wundversorgung", "Injektionen", "Blutdruckmessung"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Hauswirtschaftliche Versorgung",
      description: "Unterstützung im Haushalt, damit Sie sich in Ihrem Zuhause wohlfühlen können. Wir helfen bei der Reinigung, beim Einkaufen und bei der Essenszubereitung.",
      features: ["Reinigung", "Einkaufen", "Kochen", "Wäschepflege"],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Betreuung & Begleitung",
      description: "Soziale Betreuung und emotionale Unterstützung. Gespräche, gemeinsame Aktivitäten und Begleitung zu Arztterminen gehören zu unserem ganzheitlichen Ansatz.",
      features: ["Gespräche führen", "Freizeitgestaltung", "Arztbegleitung", "Einkaufsbegleitung"],
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const faqItems = [
    {
      question: "Wie wird die Pflegebedürftigkeit festgestellt?",
      answer: "Die Pflegebedürftigkeit wird durch den Medizinischen Dienst der Krankenversicherung (MDK) festgestellt. Nach einem Begutachtungstermin wird ein Pflegegrad von 1-5 vergeben."
    },
    {
      question: "Übernimmt die Pflegekasse die Kosten?",
      answer: "Je nach Pflegegrad übernimmt die Pflegekasse einen Teil der Kosten. Wir beraten Sie gerne über die Finanzierungsmöglichkeiten und helfen bei der Antragstellung."
    },
    {
      question: "Wie schnell können Sie mit der Pflege beginnen?",
      answer: "In der Regel können wir innerhalb von 24-48 Stunden nach der Erstberatung mit der Pflege beginnen. In Notfällen auch kurzfristiger."
    },
    {
      question: "Sind Ihre Pflegekräfte qualifiziert?",
      answer: "Ja, alle unsere Pflegekräfte sind examiniert und verfügen über langjährige Erfahrung. Regelmäßige Fortbildungen gewährleisten höchste Qualitätsstandards."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Banner Slider */}
      <section className="relative h-80 overflow-hidden">
        <div className="relative h-full">
          <img
            src={bannerImages[bannerIndex]?.src || "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80"}
            alt={bannerImages[bannerIndex]?.alt || "Pflegeleistungen"}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80";
            }}
          />
          <div className="absolute inset-0 bg-nature-charcoal/60 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-nunito">
                Unsere Pflegeleistungen
              </h1>
              <p className="text-xl font-source opacity-90">
                Professionelle Pflege mit Herz und Verstand
              </p>
            </div>
          </div>
        </div>
        
        {/* Banner Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === bannerIndex ? 'bg-nature-coral' : 'bg-white/60'
              }`}
              onClick={() => setBannerIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-nature-charcoal mb-6 font-nunito">
              Umfassende Pflegeleistungen
            </h2>
            <p className="text-lg text-muted-foreground font-source">
              Von der Grundpflege bis zur medizinischen Behandlungspflege - wir sind für Sie da
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="text-2xl font-bold text-nature-charcoal font-nunito">
                    {service.title}
                  </h3>
                  <p className="text-lg text-muted-foreground font-source leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-nature-sage flex-shrink-0" />
                        <span className="text-sm font-source">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="sage" className="font-nunito group">
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden shadow-soft">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nature-charcoal/20 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-nature-cream/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-nature-charcoal mb-6 font-nunito">
                Häufig gestellte Fragen
              </h2>
              <p className="text-lg text-muted-foreground font-source">
                Hier finden Sie Antworten auf die wichtigsten Fragen rund um unsere Pflegeleistungen
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left font-nunito font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-source">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-hero rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-6 font-nunito">
              Kostenlose Beratung vereinbaren
            </h2>
            <p className="text-xl mb-8 opacity-90 font-source max-w-2xl mx-auto">
              Lassen Sie sich unverbindlich beraten. Wir erstellen gemeinsam einen individuellen Pflegeplan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="font-nunito group">
                <Phone className="h-5 w-5" />
                0911-123456 anrufen
              </Button>
              <Button variant="cream" size="lg" className="font-nunito group">
                Online Termin buchen
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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