import { useState } from "react";
import { Plus, Minus, Heart, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Wie schnell erhalten wir professionelle Pflege von Natura Pflegedienst?",
      answer: "Wir können in der Regel innerhalb von 24-48 Stunden nach Ihrem Anruf mit der Pflege beginnen. In Notfällen sind wir auch kurzfristig verfügbar."
    },
    {
      question: "Wer übernimmt die Kosten für die häusliche Pflege?",
      answer: "Die Kosten werden je nach Pflegegrad von der Pflegeversicherung übernommen. Wir helfen Ihnen gerne bei der Antragsstellung und Abrechnung."
    },
    {
      question: "Bieten Sie eine kostenlose Pflegeberatung nach §37.3?",
      answer: "Ja, wir bieten kostenlose Pflegeberatung gemäß §37.3 SGB XI an. Diese dient der Qualitätssicherung und unterstützt Sie bei Fragen zur häuslichen Pflege."
    },
    {
      question: "Unterstützt Natura Pflegedienst bei der Beantragung eines Pflegegrades?",
      answer: "Selbstverständlich! Wir begleiten Sie durch den gesamten Prozess der Pflegegradbeantragung und bereiten Sie optimal auf den MDK-Termin vor."
    },
    {
      question: "Können wir Ihre Leistungen auch nur vorübergehend in Anspruch nehmen?",
      answer: "Ja, wir bieten auch Verhinderungspflege und kurzfristige Unterstützung an. Ob nach einem Krankenhausaufenthalt oder zur Entlastung von Angehörigen."
    },
    {
      question: "In welchen Stadtteilen bieten Sie ambulante Pflege an?",
      answer: "Wir sind in ganz Nürnberg und Umgebung tätig. Kontaktieren Sie uns für Informationen zur Verfügbarkeit in Ihrem Stadtteil."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-nature-coral/20 px-4 py-2 rounded-full text-sm font-source text-nature-coral mb-6">
            <Heart className="h-4 w-4" />
            <span>Häufige Fragen zur ambulanten Pflege in Nürnberg</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nature-coral mb-6 font-nunito">
            Was Kunden oft von uns wissen möchten
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-6 text-left flex items-center justify-between"
              >
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-8 h-8 bg-nature-coral rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="font-medium text-nature-charcoal font-nunito text-lg">
                    {faq.question}
                  </span>
                </div>
                <div className="ml-4 flex-shrink-0">
                  {openItems.includes(index) ? (
                    <Minus className="h-5 w-5 text-nature-coral" />
                  ) : (
                    <Plus className="h-5 w-5 text-nature-coral" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-6">
                  <div className="ml-12 text-muted-foreground font-source leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-nature-charcoal mb-2 font-nunito">
            Viele weitere Fragen zu unserer Pflege in Nürnberg finden Sie{" "}
            <span className="text-blue-600 font-semibold cursor-pointer hover:underline">hier</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;