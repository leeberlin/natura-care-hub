import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Allgemeine Fragen zum Pflegedienst",
      items: [
        {
          question: "Was ist Natura Pflegedienst und welche Leistungen bieten Sie an?",
          answer: "Natura Pflegedienst ist ein ambulanter Pflegedienst in Nürnberg, der liebevolle Pflege zuhause anbietet. Wir unterstützen bei Grundpflege, häuslicher Krankenpflege, Haushaltshilfe, Betreuung und bieten 24/7-Notfallbereitschaft. Unser Motto: 'Liebevolle Pflege zuhause' steht für würdevolle und professionelle Betreuung in der gewohnten Umgebung."
        },
        {
          question: "Wer kann die Leistungen von Natura Pflegedienst in Anspruch nehmen?",
          answer: "Alle Personen mit einem anerkannten Pflegegrad (1-5) können unsere Leistungen nutzen. Auch Menschen ohne Pflegegrad können bei medizinischer Notwendigkeit häusliche Krankenpflege erhalten. Wir betreuen Menschen jeden Alters - von Kindern bis zu Senioren."
        },
        {
          question: "In welchen Gebieten ist Natura Pflegedienst tätig?",
          answer: "Wir sind in ganz Nürnberg und den umliegenden Gemeinden tätig. Dazu gehören Fürth, Erlangen, Schwabach und weitere Orte im Großraum Nürnberg. Kontaktieren Sie uns gerne für eine Beratung zur Verfügbarkeit in Ihrem Wohnort."
        },
        {
          question: "Wie schnell können Sie mit der Pflege beginnen?",
          answer: "In regulären Fällen können wir innerhalb von 24-48 Stunden mit der Pflege beginnen. Bei Notfällen sind wir auch kurzfristig verfügbar. Unsere 24/7-Hotline (017645858098) steht Ihnen jederzeit zur Verfügung."
        },
        {
          question: "Sind Ihre Pflegekräfte qualifiziert und versichert?",
          answer: "Ja, alle unsere Pflegekräfte sind examinierte Fachkräfte mit entsprechender Ausbildung und regelmäßigen Fortbildungen. Sie sind vollständig versichert und verfügen über aktuelle Zertifikate. Wir legen größten Wert auf Qualität und Sicherheit."
        }
      ]
    },
    {
      title: "Pflegegrade & Anträge",
      items: [
        {
          question: "Was sind Pflegegrade und wie funktioniert das System 2025?",
          answer: "Pflegegrade von 1-5 bestimmen den Hilfebedarf. Pflegegrad 1: geringe Beeinträchtigung (12,5-27 Punkte), Pflegegrad 2: erhebliche Beeinträchtigung (27-47,5 Punkte), Pflegegrad 3: schwere Beeinträchtigung (47,5-70 Punkte), Pflegegrad 4: schwerste Beeinträchtigung (70-90 Punkte), Pflegegrad 5: schwerste Beeinträchtigung mit besonderen Anforderungen (90-100 Punkte)."
        },
        {
          question: "Wie beantrage ich einen Pflegegrad?",
          answer: "1. Antrag bei der Pflegekasse stellen, 2. MDK/MEDICPROOF-Begutachtung (meist binnen 25 Werktagen), 3. Bescheid der Pflegekasse, 4. Bei Bedarf Widerspruch einlegen. Wir unterstützen Sie kostenlos durch den gesamten Prozess und bereiten Sie optimal auf die Begutachtung vor."
        },
        {
          question: "Wie läuft die MDK-Begutachtung ab?",
          answer: "Der MDK prüft sechs Bereiche: Mobilität (10%), kognitive/kommunikative Fähigkeiten (15%), Verhaltensweisen (15%), Selbstversorgung (40% - sehr wichtig!), Bewältigung therapiebedingter Anforderungen (20%) und Alltagsgestaltung (15%). Wir bereiten Sie gezielt auf diesen Termin vor."
        },
        {
          question: "Kann ich einen höheren Pflegegrad beantragen?",
          answer: "Ja, bei Verschlechterung des Zustands können Sie eine Höherstufung beantragen. Sammeln Sie Belege über neue Problembereiche und lassen Sie sich ärztlich dokumentieren. Wir helfen Ihnen bei der Antragstellung und Begutachtungsvorbereitung."
        },
        {
          question: "Was passiert, wenn der Pflegegradantrag abgelehnt wird?",
          answer: "Sie können innerhalb eines Monats Widerspruch einlegen. Wir unterstützen Sie dabei kostenlos, sammeln zusätzliche Belege und bereiten eine fundierte Begründung vor. Oft führt ein gut begründeter Widerspruch zum Erfolg."
        }
      ]
    },
    {
      title: "Kosten & Finanzierung 2025",
      items: [
        {
          question: "Was kostet ambulante Pflege und wer zahlt?",
          answer: "Die Kosten variieren je nach Pflegegrad und Leistungsumfang. Die Pflegekasse übernimmt die Kosten bis zu den Höchstbeträgen 2025: Pflegegrad 2: 796€, Pflegegrad 3: 1.497€, Pflegegrad 4: 1.859€, Pflegegrad 5: 2.299€ monatlich. Häusliche Krankenpflege wird zu 100% von der Krankenkasse übernommen."
        },
        {
          question: "Was ist der Entlastungsbetrag und wie hoch ist er 2025?",
          answer: "Der Entlastungsbetrag beträgt 2025 neu 131€ monatlich (erhöht von 125€) für alle Pflegegrade 1-5. Er kann für Haushaltshilfe, Betreuung, Tagespflege und weitere Unterstützungsleistungen genutzt werden. Nicht genutzte Beträge können bis zum 30. Juni des Folgejahres angespart werden."
        },
        {
          question: "Wie hoch ist das Pflegegeld 2025?",
          answer: "Das Pflegegeld wurde 2025 um 4,5% erhöht: Pflegegrad 2: 347€, Pflegegrad 3: 599€, Pflegegrad 4: 800€, Pflegegrad 5: 990€ monatlich. Das Pflegegeld erhalten Sie bei häuslicher Pflege durch Angehörige zusätzlich zu anderen Leistungen."
        },
        {
          question: "Was ist neu bei Verhinderungs- und Kurzzeitpflege 2025?",
          answer: "Große Neuerung ab Juli 2025: Gemeinsamer Jahresbetrag von 3.539€ für Verhinderungs- und Kurzzeitpflege! Keine getrennten Budgets mehr - maximale Flexibilität bei der Nutzung. Die 6-monatige Vorpflegezeit bei Verhinderungspflege entfällt komplett."
        },
        {
          question: "Muss ich in Vorleistung gehen?",
          answer: "Nein! Wir rechnen direkt mit Ihrer Pflegekasse ab. Sie müssen nicht in Vorleistung gehen. Bei privaten Zusatzleistungen besprechen wir die Abrechnung transparent mit Ihnen vorab."
        },
        {
          question: "Übernimmt die Krankenkasse häusliche Krankenpflege?",
          answer: "Ja, häusliche Krankenpflege wird bei ärztlicher Verordnung zu 100% von der Krankenkasse übernommen - ohne Zuzahlung für Sie. Das umfasst Medikamentengabe, Wundversorgung, Injektionen und alle verordneten medizinischen Leistungen."
        }
      ]
    },
    {
      title: "Pflegeleistungen & Betreuung",
      items: [
        {
          question: "Was umfasst die Grundpflege bei Natura?",
          answer: "Unsere Grundpflege umfasst: Ganzkörperwäsche, Hilfe beim Duschen/Baden, Haar- und Hautpflege, Rasur, An-/Auskleiden, Mund- und Zahnhygiene, Kontinenzversorgung. Wir arbeiten nach dem Prinzip 'soviel Selbstständigkeit wie möglich, soviel Hilfe wie nötig'."
        },
        {
          question: "Welche haushaltsnahen Leistungen bieten Sie?",
          answer: "Wir bieten umfassende Haushaltshilfe: Reinigung und Ordnung halten, Einkaufsservice, Wäschepflege, Mahlzeitenzubereitung, Fensterreinigung, Haustierpflege. Diese können über den Entlastungsbetrag (131€/Monat) oder Umwandlung von Pflegesachleistungen finanziert werden."
        },
        {
          question: "Bieten Sie spezielle Demenzbetreuung an?",
          answer: "Ja, wir haben zertifizierte Demenz-Fachkräfte im Team. Wir bieten Validationstherapie, biografieorientierte Pflege, strukturierte Tagesabläufe und Angehörigenberatung. Die vertraute häusliche Umgebung bleibt erhalten - das ist besonders wichtig für Menschen mit Demenz."
        },
        {
          question: "Welche medizinischen Leistungen führen Sie durch?",
          answer: "Unsere Behandlungspflege umfasst: Medikamentengabe und Injektionen, Wundversorgung, Vitalzeichenkontrolle, Kompressionstherapie, Stomapflege, Kathetermanagement, Dekubitusprophylaxe. Alle Leistungen werden nur von examinierten Pflegefachkräften durchgeführt."
        },
        {
          question: "Arbeiten Sie mit festen Bezugspersonen?",
          answer: "Ja, wir setzen auf das Bezugspflegeprinzip. Sie erhalten feste Ansprechpartner, die Sie und Ihre Bedürfnisse kennen. Das schafft Vertrauen und Kontinuität in der Pflege. Bei Urlaub oder Krankheit sorgen wir für qualifizierte Vertretung."
        }
      ]
    },
    {
      title: "Notfall & Verfügbarkeit",
      items: [
        {
          question: "Sind Sie auch nachts und am Wochenende erreichbar?",
          answer: "Ja, unsere Notfall-Hotline 017645858098 ist 24 Stunden täglich, 7 Tage die Woche besetzt - auch an Feiertagen. Bei medizinischen Notfällen oder plötzlichem Pflegebedarf sind wir sofort für Sie da."
        },
        {
          question: "Was passiert, wenn meine pflegende Angehörige plötzlich ausfällt?",
          answer: "Rufen Sie sofort unsere Notfall-Hotline an! Wir organisieren binnen weniger Stunden Ersatzpflege über Verhinderungspflege. Unser Bereitschaftsdienst kann meist innerhalb von 2 Stunden bei Ihnen sein."
        },
        {
          question: "Kommen Sie auch an Feiertagen?",
          answer: "Selbstverständlich! Pflege kennt keine Feiertage. Wir sind 365 Tage im Jahr für Sie da. Auch Weihnachten, Ostern oder andere Feiertage sind für uns normale Arbeitstage, wenn Sie uns brauchen."
        },
        {
          question: "Wie schnell reagieren Sie bei Notfällen?",
          answer: "Bei echten Notfällen sind wir meist innerhalb von 2 Stunden vor Ort. Wir haben qualifizierte Pflegefachkräfte im Bereitschaftsdienst und können sofort reagieren. Rufen Sie 017645858098 - wir sind da!"
        }
      ]
    },
    {
      title: "Beratung & Unterstützung",
      items: [
        {
          question: "Bieten Sie kostenlose Pflegeberatung an?",
          answer: "Ja! Wir bieten kostenlose Pflegeberatung nach § 37.3 SGB XI an. Diese ist sogar vorgeschrieben für Pflegegeldempfänger. Zusätzlich beraten wir kostenfrei zu allen Pflegethemen, Ansprüchen und optimaler Nutzung der 2025 erhöhten Leistungen."
        },
        {
          question: "Helfen Sie bei Anträgen und Behördengängen?",
          answer: "Absolut! Wir unterstützen Sie bei Pflegegradanträgen, Widersprüchen, Hilfsmittelanträgen und allen pflegerelevanten Behördengängen. Unser erfahrenes Team kennt alle Formulare und Abläufe - Sie sparen Zeit und Nerven."
        },
        {
          question: "Führen Sie Hausbesuche zur Beratung durch?",
          answer: "Ja, Hausbesuche sind unser Standard! Wir kommen gerne zu Ihnen nach Hause, schauen uns die Situation vor Ort an und beraten individuell. So können wir maßgeschneiderte Lösungen für Ihre spezielle Wohn- und Pflegesituation entwickeln."
        },
        {
          question: "Beraten Sie auch Angehörige?",
          answer: "Selbstverständlich! Wir bieten Schulungen für pflegende Angehörige, Entlastungsgespräche und praktische Anleitungen. Pflegende Angehörige sind für uns genauso wichtig wie die Pflegebedürftigen selbst - Sie brauchen Unterstützung und Entlastung."
        }
      ]
    },
    {
      title: "Kontakt & Organisation",
      items: [
        {
          question: "Wie kann ich Natura Pflegedienst erreichen?",
          answer: "Telefon: 017645858098 (Herr Tuan Pham, auch am Wochenende), Büro: 0911/123456 (Mo-Do 8:00-15:00, Fr 9:00-14:00), E-Mail: info@naturapflegedienst.de. Für Notfälle ist die Hauptnummer 24/7 erreichbar."
        },
        {
          question: "Wer ist mein Ansprechpartner?",
          answer: "Herr Tuan Pham ist Ihr persönlicher Ansprechpartner und qualifizierter Pflegeberater. Er führt die Erstberatung durch, koordiniert Ihre Pflege und steht für alle Fragen zur Verfügung. Sie haben immer einen direkten Draht zur Leitung."
        },
        {
          question: "Kann ich eine unverbindliche Beratung bekommen?",
          answer: "Ja, die Erstberatung ist für Sie völlig kostenlos und unverbindlich! Wir besuchen Sie gerne zu Hause, analysieren Ihren Bedarf und erklären alle Möglichkeiten. Sie entscheiden in Ruhe, ohne Druck oder Verpflichtungen."
        },
        {
          question: "Wie flexibel sind Ihre Pflegezeiten?",
          answer: "Sehr flexibel! Wir richten uns nach Ihren Bedürfnissen und gewohnten Abläufen. Ob morgens, mittags, abends oder auch am Wochenende - wir passen uns Ihrem Rhythmus an. Termine können auch kurzfristig angepasst werden."
        },
        {
          question: "Was passiert bei längerer Abwesenheit (Urlaub, Krankenhaus)?",
          answer: "Informieren Sie uns frühzeitig, dann pausieren wir die Pflege entsprechend. Bei Krankenhausaufenthalten unterstützen wir bei der Entlassung und organisieren nahtlose Anschlusspflege. Für Ihren Urlaub können wir auch Begleitpflege oder Kurzzeitpflege organisieren."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
              Häufig gestellte <span className="text-nature-sage">Fragen</span>
            </h1>
            <p className="text-xl text-muted-foreground font-source">
              Alle wichtigen Antworten zu Pflege, Kosten und Leistungen 2025
            </p>
          </div>

          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl p-8 shadow-soft">
                <h2 className="text-2xl font-bold text-nature-charcoal mb-6 font-nunito">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible>
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`item-${categoryIndex}-${itemIndex}`}>
                      <AccordionTrigger className="text-left font-source font-semibold hover:text-nature-sage transition-colors">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground font-source leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-nature-sage/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-nature-charcoal mb-4 font-nunito">
              Weitere Fragen?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 font-source">
              Wir beraten Sie gerne persönlich und kostenlos zu allen Pflegethemen
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:017645858098" className="inline-flex items-center px-6 py-3 bg-nature-sage text-white rounded-lg hover:bg-nature-sage/90 transition-colors font-source font-semibold">
                📞 017645858098 anrufen
              </a>
              <a href="mailto:info@naturapflegedienst.de" className="inline-flex items-center px-6 py-3 bg-nature-teal text-white rounded-lg hover:bg-nature-teal/90 transition-colors font-source font-semibold">
                📧 E-Mail senden
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;