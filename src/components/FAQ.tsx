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
      answer: "Wir können in der Regel innerhalb von 24-48 Stunden nach Ihrem Anruf mit der Pflege beginnen. In Notfällen sind wir auch kurzfristig verfügbar und haben eine 24/7-Hotline (017645858098) für Eilfälle."
    },
    {
      question: "Was kostet ambulante Pflege 2025 und wer übernimmt die Kosten?",
      answer: "Die Pflegekasse übernimmt die Kosten bis zu den erhöhten Höchstbeträgen 2025: Pflegegrad 2: 796€, Pflegegrad 3: 1.497€, Pflegegrad 4: 1.859€, Pflegegrad 5: 2.299€ monatlich. Häusliche Krankenpflege wird zu 100% von der Krankenkasse übernommen - wir rechnen direkt ab."
    },
    {
      question: "Was ist der Entlastungsbetrag 2025 und wie kann ich ihn nutzen?",
      answer: "Der Entlastungsbetrag wurde 2025 auf 131€ monatlich erhöht (von 125€) für alle Pflegegrade 1-5. Er kann für Haushaltshilfe, Betreuung, Einkaufsservice, Tagespflege und weitere Unterstützungsleistungen genutzt werden. Nicht genutzte Beträge werden angespart."
    },
    {
      question: "Bieten Sie kostenlose Pflegeberatung nach §37.3 SGB XI an?",
      answer: "Ja, wir bieten kostenlose Pflegeberatung gemäß §37.3 SGB XI an. Diese dient der Qualitätssicherung und ist für Pflegegeldempfänger sogar vorgeschrieben. Zusätzlich beraten wir kostenfrei zu allen neuen Leistungen 2025 und optimaler Nutzung aller Ansprüche."
    },
    {
      question: "Unterstützt Natura Pflegedienst bei der Beantragung eines Pflegegrades?",
      answer: "Selbstverständlich! Wir begleiten Sie kostenlos durch den gesamten Prozess: Antragstellung, MDK-Vorbereitung, Begleitung beim Gutachtungstermin und bei Bedarf Widerspruchsverfahren. Wir kennen alle Tricks für eine optimale Bewertung."
    },
    {
      question: "Was ist neu bei Verhinderungs- und Kurzzeitpflege 2025?",
      answer: "Große Neuerung ab Juli 2025: Gemeinsamer Jahresbetrag von 3.539€ für beide Leistungen! Keine getrennten Budgets mehr - maximale Flexibilität. Die 6-monatige Vorpflegezeit bei Verhinderungspflege entfällt komplett."
    },
    {
      question: "Welche medizinischen Leistungen führen Sie durch?",
      answer: "Unsere examinierten Pflegefachkräfte führen alle häuslichen Krankenpflegeleistungen durch: Medikamentengabe, Injektionen, Wundversorgung, Kompressionstherapie, Stomapflege, Kathetermanagement. Alle Leistungen werden zu 100% von der Krankenkasse übernommen."
    },
    {
      question: "Bieten Sie spezielle Demenzbetreuung an?",
      answer: "Ja, wir haben zertifizierte Demenz-Fachkräfte im Team. Wir bieten Validationstherapie, biografieorientierte Pflege, strukturierte Tagesabläufe und Angehörigenberatung. Die vertraute häusliche Umgebung bleibt erhalten - das ist besonders wichtig für Menschen mit Demenz."
    },
    {
      question: "Sind Sie auch nachts, am Wochenende und an Feiertagen erreichbar?",
      answer: "Ja, unsere Notfall-Hotline 017645858098 ist 24/7 besetzt - auch an Feiertagen! Bei medizinischen Notfällen oder plötzlichem Pflegebedarf sind wir meist innerhalb von 2 Stunden vor Ort. Pflege kennt keine Feiertage."
    },
    {
      question: "Arbeiten Sie mit festen Bezugspersonen?",
      answer: "Ja, wir setzen auf das Bezugspflegeprinzip. Sie erhalten feste Ansprechpartner, die Sie und Ihre Bedürfnisse kennen. Das schafft Vertrauen und Kontinuität. Bei Urlaub oder Krankheit sorgen wir für qualifizierte Vertretung aus unserem Team."
    },
    {
      question: "Welche haushaltsnahen Leistungen bieten Sie an?",
      answer: "Wir bieten umfassende Haushaltshilfe: Reinigung, Einkaufsservice, Wäschepflege, Mahlzeitenzubereitung, Fensterreinigung, Haustierpflege. Diese können über den erhöhten Entlastungsbetrag (131€/Monat) oder Umwandlung von Pflegesachleistungen finanziert werden."
    },
    {
      question: "In welchen Gebieten sind Sie tätig?",
      answer: "Wir sind in ganz Nürnberg und Umgebung tätig: Fürth, Erlangen, Schwabach und weitere Gemeinden im Großraum Nürnberg. Kontaktieren Sie uns gerne für eine kostenlose Beratung zur Verfügbarkeit in Ihrem Wohnort."
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
          <p className="text-lg text-muted-foreground font-source max-w-2xl mx-auto">
            Antworten zu Pflegeleistungen, Kosten und neuen Regelungen 2025
          </p>
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
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors"
              >
                <div className="flex items-start space-x-4 flex-1">
                  <div className="w-8 h-8 bg-nature-coral rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="font-medium text-nature-charcoal font-nunito text-lg leading-tight">
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
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-nature-charcoal mb-4 font-nunito">
            Weitere Fragen zu unserer Pflege?
          </h3>
          <p className="text-lg text-muted-foreground mb-6 font-source">
            Wir beraten Sie gerne persönlich und kostenlos zu allen Pflegethemen 2025
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:017645858098" 
              className="inline-flex items-center space-x-2 px-6 py-3 bg-nature-coral text-white rounded-lg hover:bg-nature-coral/90 transition-colors font-source font-semibold"
            >
              <Phone className="h-4 w-4" />
              <span>017645858098 anrufen</span>
            </a>
            <a 
              href="mailto:info@naturapflegedienst.de" 
              className="inline-flex items-center space-x-2 px-6 py-3 bg-nature-sage text-white rounded-lg hover:bg-nature-sage/90 transition-colors font-source font-semibold"
            >
              <Mail className="h-4 w-4" />
              <span>E-Mail senden</span>
            </a>
            <a 
              href="/faq" 
              className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-nature-coral text-nature-coral rounded-lg hover:bg-nature-coral hover:text-white transition-colors font-source font-semibold"
            >
              <span>Alle FAQ ansehen</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;