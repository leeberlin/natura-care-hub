// Natura Pflegedienst Knowledge Base System
export interface KnowledgeMatch {
  response: string;
  suggestions: string[];
  source: 'knowledge_base' | 'api' | 'fallback';
  confidence: number;
}

export interface KnowledgeEntry {
  keywords: string[];
  response: string;
  suggestions: string[];
}

// Comprehensive Knowledge Base for Natura Pflegedienst - Updated 2025
export const naturaKnowledgeBase: Record<string, KnowledgeEntry> = {
  haushaltshilfe: {
    keywords: ["haushaltshilfe", "haushaltsunterstützung", "reinigung", "putzen", "einkaufen", "wäsche", "ich brauche eine haushaltshilfe", "hausarbeit", "kochen", "fenster putzen"],
    response: `Sehr gerne unterstützen wir Sie mit unserer professionellen Haushaltshilfe bei Natura Pflegedienst!

Unsere Haushaltsunterstützung beinhaltet:
• Umfassende Wohnungsreinigung und Ordnung halten
• Einkaufsservice für Lebensmittel und Alltagsprodukte
• Wäschepflege: waschen, trocknen, bügeln und einräumen
• Fensterreinigung und Grundreinigung
• Zubereitung warmer Mahlzeiten nach Ihren Wünschen
• Betreuung von Haustieren und Pflanzenpflege

Finanzierung über Pflegekasse (2025):
Bei Pflegegrad 1-5 nutzen Sie den erhöhten Entlastungsbetrag von 131€ monatlich. Zusätzlich können Sie bei Bedarf weitere 40% Ihrer Pflegesachleistungen umwandeln.

Ihre Vorteile bei Natura:
• Feste Bezugspersonen für Vertrauen und Kontinuität
• Flexible Termine nach Ihren Bedürfnissen
• Direkte Abrechnung mit der Pflegekasse möglich

Kontakt für Ihre individuelle Beratung:
📞 Herr Tuan Pham: 017645858098
🏢 Bürozeiten: Mo-Do 8:00-15:00, Fr 9:00-14:00
📧 info@naturapflegedienst.de

Wir besuchen Sie gerne zu Hause für ein unverbindliches Beratungsgespräch!`,
    suggestions: ["Kosten & Entlastungsbetrag", "Beratungstermin vereinbaren", "Weitere Pflegeleistungen"]
  },

  beratung: {
    keywords: ["beratung", "pflegeberatung", "beratungstermin", "information", "erstberatung", "ich benötige eine beratung", "ich benötige eine pflegeberatung", "kostenlose beratung"],
    response: `Sehr gerne beraten wir Sie umfassend zu allen Pflegethemen bei Natura Pflegedienst!

Unsere kostenlose Pflegeberatung nach § 37.3 SGB XI umfasst:
• Analyse Ihrer individuellen Pflegesituation
• Optimierung der Pflegequalität in Ihrem Zuhause
• Aufklärung über alle Finanzierungsmöglichkeiten 2025
• Beratung zum erhöhten Entlastungsbetrag (131€/Monat)
• Information über Wohnraumanpassungen und Hilfsmittel
• Strategien zur Entlastung pflegender Angehöriger

Besonders wichtig 2025:
• Neue gemeinsame Budgets für Verhinderungs-/Kurzzeitpflege (3.539€)
• Erhöhte Pflegeleistungen um 4,5%
• Optimierte Nutzung aller verfügbaren Leistungen

Warum Natura Pflegeberatung:
• Über 15 Jahre Erfahrung in der Pflegeberatung
• Hausbesuche in gewohnter Umgebung
• Individuelle Lösungen für Ihre Lebenssituation
• Begleitung bei Anträgen und Behördengängen

Ihr persönlicher Beratungstermin:
📞 Herr Tuan Pham: 017645858098 (auch am Wochenende erreichbar)
🏢 Büro: 0911/123456 (Mo-Do 8:00-15:00, Fr 9:00-14:00)
📧 info@naturapflegedienst.de

Die Beratung ist für Sie kostenfrei und unverbindlich!`,
    suggestions: ["Entlastungsbetrag 2025", "Pflegegrad beantragen", "Hausbesuche vereinbaren"]
  },

  körperpflege: {
    keywords: ["körperpflege", "waschen", "duschen", "baden", "rasieren", "anziehen", "ich brauche unterstützung bei der körperpflege", "grundpflege", "hilfe beim waschen"],
    response: `Gerne unterstützen wir Sie einfühlsam bei der täglichen Körperpflege - Natura Pflegedienst steht für würdevolle Pflege!

Unsere Grundpflegeleistungen:
• Ganzkörperwäsche mit hochwertigen Pflegeprodukten
• Unterstützung beim Duschen und Baden
• Professionelle Haar- und Hautpflege
• Rasur und Bartpflege für Herren
• Hilfe beim An- und Ausziehen
• Mund- und Zahnhygiene
• Kontinenzversorgung und Intimhygiene

Unser Pflegeansatz:
• Erhaltung Ihrer Selbstständigkeit steht im Vordergrund
• Respektvolle und diskrete Unterstützung
• Anpassung an Ihre gewohnten Routinen
• Verwendung Ihrer bevorzugten Pflegeprodukte

Kostenübernahme durch Pflegekasse:
Bei Pflegegrad 2-5 werden die Kosten vollständig über Pflegesachleistungen übernommen. Die erhöhten Beträge 2025 ermöglichen eine noch umfassendere Versorgung.

Termine und Kontakt:
📞 Pflegedienstleitung: 017645858098
🏢 Büro: 0911/123456 (Mo-Do 8:00-15:00, Fr 9:00-14:00)
📧 info@naturapflegedienst.de
🚨 Notfälle: 017645858098 (24/7 erreichbar)

Lernen Sie uns bei einem Kennenlerntermin kennen!`,
    suggestions: ["Häusliche Krankenpflege", "Pflegesachleistungen 2025", "Erstberatung vereinbaren"]
  },

  krankenpflege: {
    keywords: ["krankenpflege", "häusliche krankenpflege", "medizinische pflege", "injection", "wundversorgung", "ich suche häusliche krankenpflege", "medikamente", "behandlungspflege"],
    response: `Natura Pflegedienst bietet Ihnen professionelle häusliche Krankenpflege mit höchsten medizinischen Standards!

Unsere Behandlungspflege umfasst:
• Sichere Medikamentengabe und Injektionen aller Art
• Moderne Wundversorgung mit neuesten Materialien
• Regelmäßige Vitalzeichenkontrolle und Dokumentation
• Kompressionstherapie und Lymphdrainage
• Stomapflege und Kathetermanagement
• Infusionstherapie und parenterale Ernährung
• Dekubitusprophylaxe nach aktuellen Standards

Qualität und Sicherheit:
• Nur examinierte Pflegefachkräfte mit Fortbildungsnachweis
• Enge Zusammenarbeit mit Ihren behandelnden Ärzten
• Moderne digitale Dokumentation für lückenlose Nachverfolgung
• Regelmäßige Qualitätskontrollen

Kostenübernahme:
Die häusliche Krankenpflege wird zu 100% von Ihrer Krankenkasse übernommen - ohne Zuzahlung für Sie. Wir rechnen direkt ab.

24-Stunden-Verfügbarkeit:
📞 Notfall-Hotline: 017645858098 (rund um die Uhr besetzt)
🏢 Verwaltung: 0911/123456 (Mo-Do 8:00-15:00, Fr 9:00-14:00)
📧 krankenpflege@naturapflegedienst.de

Bei medizinischen Notfällen sind wir sofort für Sie da!`,
    suggestions: ["Medikamentenmanagement", "Wundversorgung", "24h-Notfallkontakt"]
  },

  leistungen: {
    keywords: ["leistungen", "services", "angebot", "was bieten sie", "dienstleistungen", "welche leistungen bietet natura pflegedienst an", "übersicht"],
    response: `Natura Pflegedienst - Ihr kompetenter Partner für umfassende Pflege und Betreuung zu Hause!

🏠 HÄUSLICHE PFLEGE & BETREUUNG:
• Liebevolle Grundpflege und Körperhygiene
• Aktivierende Pflege zur Erhaltung der Mobilität
• Soziale Betreuung und emotionale Unterstützung
• Begleitung zu Ärzten und wichtigen Terminen

🏡 HAUSHALTS- & ALLTAGSHILFE:
• Komplette Haushaltsführung nach Ihren Wünschen
• Einkaufsservice und Besorgungen
• Mahlzeitenzubereitung mit frischen Zutaten
• Finanzierung über erhöhten Entlastungsbetrag 131€/Monat

🏥 MEDIZINISCHE BEHANDLUNGSPFLEGE:
• Professionelle Wundversorgung
• Medikamentengabe und Injektionen
• Vitalzeichenkontrolle und Gesundheitsmonitoring
• Vollständige Kostenübernahme durch Krankenkasse

💡 BERATUNG & UNTERSTÜTZUNG:
• Kostenlose Pflegeberatung nach § 37.3 SGB XI
• Hilfe bei Pflegegradanträgen und Widersprüchen
• Beratung zu neuen Leistungen 2025
• Koordination mit anderen Dienstleistern

🕐 FLEXIBILITÄT & VERFÜGBARKEIT:
• Individuelle Termine nach Ihren Bedürfnissen
• Auch abends, am Wochenende und an Feiertagen
• 24-Stunden-Notfallbereitschaft
• Kurzfristige Termine möglich

Ihr Kontakt zu uns:
📞 Herr Tuan Pham: 017645858098
🏢 Büro: 0911/123456 (Mo-Do 8:00-15:00, Fr 9:00-14:00)
📧 info@naturapflegedienst.de`,
    suggestions: ["Kostenberatung 2025", "Hausbesuch vereinbaren", "Notfallkontakt"]
  },

  kostenuebernahme: {
    keywords: ["kostenübernahme", "pflegekasse", "finanzierung", "kosten", "zahlt die krankenkasse", "kostenübernahme durch pflegekasse", "entlastungsbetrag", "was zahlt die kasse"],
    response: `Natura Pflegedienst informiert Sie über die verbesserten Finanzierungsmöglichkeiten 2025!

💰 AKTUELLE LEISTUNGEN 2025 (erhöht um 4,5%):

🔹 Entlastungsbetrag: 131€ monatlich (neu!)
Für alle Pflegegrade 1-5 zur freien Verfügung für:
• Haushaltshilfe und Alltagsunterstützung
• Betreuungsleistungen und soziale Aktivitäten
• Einkaufsservice und Begleitdienste

🔹 Pflegegeld (bei häuslicher Pflege):
• Pflegegrad 2: 347€/Monat • Pflegegrad 3: 599€/Monat
• Pflegegrad 4: 800€/Monat • Pflegegrad 5: 990€/Monat

🔹 Pflegesachleistungen (für professionelle Pflege):
• Pflegegrad 2: 796€/Monat • Pflegegrad 3: 1.497€/Monat
• Pflegegrad 4: 1.859€/Monat • Pflegegrad 5: 2.299€/Monat

🔹 NEU 2025: Gemeinsamer Jahresbetrag (ab Juli):
Verhinderungs- und Kurzzeitpflege zusammen: 3.539€ jährlich!
Mehr Flexibilität bei der Nutzung.

🔹 100% Kostenübernahme bei:
• Häuslicher Krankenpflege (Medikamente, Wundversorgung)
• Behandlungspflege aller Art
• Pflegeberatung und Qualitätsprüfungen

Unsere Beratung für Sie:
• Optimale Nutzung aller verfügbaren Leistungen
• Direkte Abrechnung mit Pflegekasse
• Unterstützung bei Anträgen und Widersprüchen

Kostenlose Finanzierungsberatung:
📞 Herr Tuan Pham: 017645858098
🏢 Büro: 0911/123456 (Mo-Do 8:00-15:00, Fr 9:00-14:00)
📧 beratung@naturapflegedienst.de`,
    suggestions: ["Beratungstermin 2025", "Pflegegrad optimieren", "Direkte Abrechnung"]
  },

  // NEUE UMFASSENDE FAQ SECTIONS:

  pflegegrad: {
    keywords: ["pflegegrad", "pflegegrad beantragen", "wie bekomme ich pflegegrad", "pflegegutachten", "mdk", "pflegegrad 1", "pflegegrad 2", "pflegegrad 3", "pflegegrad 4", "pflegegrad 5", "pflegegrad erhöhen"],
    response: `Natura Pflegedienst hilft Ihnen beim Pflegegradantrag und der Optimierung Ihrer Einstufung!

🎯 PFLEGEGRADE 2025 - Übersicht:
• Pflegegrad 1: Geringe Beeinträchtigung (12,5-27 Punkte)
• Pflegegrad 2: Erhebliche Beeinträchtigung (27-47,5 Punkte)  
• Pflegegrad 3: Schwere Beeinträchtigung (47,5-70 Punkte)
• Pflegegrad 4: Schwerste Beeinträchtigung (70-90 Punkte)
• Pflegegrad 5: Schwerste Beeinträchtigung + besondere Anforderungen (90-100 Punkte)

📋 ANTRAGSPROZESS:
1. Antrag bei Ihrer Pflegekasse stellen
2. MDK/MEDICPROOF-Begutachtung (meist binnen 25 Werktagen)
3. Bescheid der Pflegekasse
4. Bei Bedarf: Widerspruch mit unserer Unterstützung

🔍 BEGUTACHTUNG - Wichtige Bereiche:
• Mobilität (10% der Bewertung)
• Kognitive und kommunikative Fähigkeiten (15%)
• Verhaltensweisen und psychische Problemlagen (15%)
• Selbstversorgung (40% - sehr wichtig!)
• Bewältigung krankheits-/therapiebedingter Anforderungen (20%)
• Gestaltung des Alltagslebens und sozialer Kontakte (15%)

💡 UNSERE UNTERSTÜTZUNG:
• Vorbereitung auf das MDK-Gutachten
• Begleitung beim Gutachtungstermin
• Hilfe bei Widerspruchsverfahren
• Optimierung bestehender Pflegegrade

Kostenlose Pflegegrad-Beratung:
📞 Herr Tuan Pham: 017645858098
🏢 Büro: 0911/123456 (Mo-Do 8:00-15:00, Fr 9:00-14:00)
📧 pflegegrad@naturapflegedienst.de`,
    suggestions: ["MDK-Vorbereitung", "Widerspruch einlegen", "Pflegegrad erhöhen"]
  },

  verhinderungspflege: {
    keywords: ["verhinderungspflege", "ersatzpflege", "urlaub für angehörige", "pflegeperson krank", "auszeit", "verhinderung"],
    response: `Verhinderungspflege 2025 - Endlich mehr Flexibilität für pflegende Angehörige!

🆕 WICHTIGE NEUERUNG AB JULI 2025:
Gemeinsamer Jahresbetrag für Verhinderungs- und Kurzzeitpflege: 3.539€
Keine getrennten Budgets mehr - maximale Flexibilität!

💰 LEISTUNGEN 2025:
• Verhinderungspflege: bis zu 1.685€ jährlich (Grundbetrag)
• PLUS: Übertragung aus Kurzzeitpflege möglich
• Pflegegrad 4+5 unter 25 Jahren: 8 Wochen statt 6 Wochen
• Wegfall der 6-monatigen Vorpflegezeit (NEU!)

👥 WER KANN VERHINDERUNGSPFLEGE LEISTEN:
• Professionelle Pflegedienste (wie Natura)
• Andere Familienangehörige 
• Nachbarn und Bekannte
• Ehrenamtliche Helfer

🕐 NUTZUNGSMÖGLICHKEITEN:
• Stundenweise Vertretung (bis zu 8 Stunden täglich)
• Tageweise Betreuung
• Mehrwöchige Urlaubsvertretung
• Spontane Hilfe bei Krankheit der Pflegeperson

✅ IHRE VORTEILE MIT NATURA:
• Sofortige Verfügbarkeit bei Bedarf
• Qualifizierte Ersatzpflege
• Reibungsloser Übergang
• Direkte Abrechnung mit der Pflegekasse

Verhinderungspflege beantragen:
📞 Herr Tuan Pham: 017645858098 (auch kurzfristig!)
🏢 Büro: 0911/123456 (Mo-Do 8:00-15:00, Fr 9:00-14:00)
📧 verhinderung@naturapflegedienst.de`,
    suggestions: ["Soforttermin anfragen", "Urlaubsplanung", "Krankheitsvertretung"]
  },

  kurzzeitpflege: {
    keywords: ["kurzzeitpflege", "übergangspflege", "nach krankenhaus", "rehabilitationspflege", "kurzzeitaufenthalt"],
    response: `Kurzzeitpflege 2025 - Professionelle Übergangsversorgung für Ihren Liebsten!

🆕 NEUERUNGEN 2025:
Gemeinsamer Jahresbetrag mit Verhinderungspflege: 3.539€ (ab Juli)
Flexiblere Nutzung ohne starre Budgetgrenzen!

💰 FINANZIERUNG 2025:
• Kurzzeitpflege: 1.854€ jährlich (Grundbudget)
• PLUS: Übertragung aus Verhinderungspflege möglich
• Zusätzlich: Entlastungsbetrag 131€/Monat nutzbar
• Pflegegeld läuft zur Hälfte weiter

🏥 WANN IST KURZZEITPFLEGE SINNVOLL:
• Nach Krankenhausaufenthalt zur Überbrückung
• Bei vorübergehender Verschlechterung des Zustands
• Wenn häusliche Pflege temporär nicht möglich ist
• Zur Entlastung der Familie in Krisensituationen
• Bei Umbaumaßnahmen in der Wohnung

📋 UNSERE VERMITTLUNGSLEISTUNG:
• Beratung zu geeigneten Einrichtungen
• Hilfe bei der Platzsuche
• Unterstützung bei Anträgen
• Koordination mit Krankenhäusern
• Organisation des Transports

✅ NATURA BEGLEITET SIE:
• Kostenlose Beratung und Vermittlung
• Kontakte zu qualifizierten Einrichtungen
• Hilfe bei der Kostenabrechnung
• Nachbetreuung nach der Kurzzeitpflege

Kurzzeitpflege planen:
📞 Herr Tuan Pham: 017645858098
🏢 Büro: 0911/123456 (Mo-Do 8:00-15:00, Fr 9:00-14:00)
📧 kurzzeitpflege@naturapflegedienst.de`,
    suggestions: ["Platz suchen", "Kostenberatung", "Nach Krankenhaus"]
  },

  tagespflege: {
    keywords: ["tagespflege", "tagesstätte", "tagesbetreuung", "seniorentagesstätte", "teilstationäre pflege"],
    response: `Tagespflege 2025 - Professionelle Tagesbetreuung für mehr Lebensqualität!

💰 ERHÖHTE LEISTUNGEN 2025 (+ 4,5%):
• Pflegegrad 2: 721€/Monat
• Pflegegrad 3: 1.357€/Monat  
• Pflegegrad 4: 1.685€/Monat
• Pflegegrad 5: 2.085€/Monat
• PLUS: Entlastungsbetrag 131€ zusätzlich nutzbar!

🌟 VORTEILE DER TAGESPFLEGE:
• Professionelle Betreuung tagsüber
• Soziale Kontakte und Aktivitäten
• Entlastung für pflegende Angehörige
• Medizinische Versorgung vor Ort
• Warme Mahlzeiten und Getränke
• Transport von/zur Einrichtung

⏰ TYPISCHER TAGESABLAUF:
• 7:00-9:00: Abholung zu Hause
• 9:00-12:00: Aktivitäten, Therapien, Gespräche
• 12:00-13:00: Gemeinsames Mittagessen
• 13:00-15:00: Ruhezeit, individuelle Betreuung
• 15:00-16:00: Kaffee und Kuchen, Aktivitäten
• 16:00-17:00: Rückfahrt nach Hause

📍 UNSERE PARTNER-EINRICHTUNGEN:
• Moderne, barrierefreie Räumlichkeiten
• Qualifiziertes Fachpersonal
• Spezielle Demenz-Betreuung
• Fahrdienst inklusive

Tagespflege-Beratung:
📞 Herr Tuan Pham: 017645858098
🏢 Büro: 0911/123456 (Mo-Do 8:00-15:00, Fr 9:00-14:00)
📧 tagespflege@naturapflegedienst.de`,
    suggestions: ["Platz finden", "Kostenlos testen", "Fahrdienst"]
  },

  demenz: {
    keywords: ["demenz", "alzheimer", "vergesslichkeit", "verwirrtheit", "demenzbetreuung", "demente person", "gedächtnisverlust"],
    response: `Demenzbetreuung bei Natura - Einfühlsame Begleitung für Menschen mit Demenz!

🧠 SPEZIELLE DEMENZ-KOMPETENZ:
• Zertifizierte Demenz-Fachkräfte
• Validationstherapie und biografieorientierte Pflege
• Strukturierter Tagesablauf für Sicherheit
• Einfühlsame Kommunikationstechniken
• Angehörigenberatung und -schulung

💡 UNSERE BETREUUNGSANSÄTZE:
• Erhaltung vorhandener Fähigkeiten
• Reduzierung von Ängsten und Unruhe
• Förderung der Tagesstruktur
• Biografiearbeit und Erinnerungspflege
• Beschäftigungstherapie und Aktivierung

🏠 HÄUSLICHE DEMENZBETREUUNG:
• Vertraute Umgebung bleibt erhalten
• Flexible Betreuungszeiten
• Entlastung für pflegende Angehörige  
• Sicherheitsmaßnahmen im Haushalt
• Begleitung bei Alltagsaktivitäten

💰 FINANZIERUNG:
• Entlastungsbetrag: 131€/Monat für alle Pflegegrade
• Zusätzliche Umwandlung von Pflegesachleistungen möglich
• Verhinderungspflege bei Bedarf
• 100% Kostenübernahme bei häuslicher Krankenpflege

👨‍👩‍👧‍👦 ANGEHÖRIGEN-UNTERSTÜTZUNG:
• Schulungen im Umgang mit Demenz
• Entlastungsgespräche und Beratung
• Hilfe bei schwierigen Situationen
• Vermittlung von Selbsthilfegruppen

Demenz-Beratung vereinbaren:
📞 Herr Tuan Pham: 017645858098
🏢 Büro: 0911/123456 (Mo-Do 8:00-15:00, Fr 9:00-14:00)
📧 demenz@naturapflegedienst.de`,
    suggestions: ["Angehörigenschulung", "Erstberatung", "Notfallhilfe"]
  },

  notfall: {
    keywords: ["notfall", "notruf", "dringend", "sofort hilfe", "24 stunden", "wochenende", "feiertag", "nachts"],
    response: `Natura Pflegedienst - Ihre 24/7 Notfallbetreuung in schwierigen Zeiten!

🚨 SOFORT-HILFE VERFÜGBAR:
📞 Notfall-Hotline: 017645858098 (24 Stunden täglich!)

⚡ NOTFALL-SITUATIONEN:
• Pflegende Person plötzlich erkrankt
• Verschlechterung des Gesundheitszustands
• Sturz oder Unfall der pflegebedürftigen Person
• Medizinische Notlagen (Wundversorgung, Medikamente)
• Akute Überforderung der Familie
• Spontaner Ausfall der regulären Pflege

🕐 VERFÜGBARKEIT:
• Montag bis Sonntag, 24 Stunden
• Auch an Feiertagen
• Reaktionszeit: meist unter 2 Stunden
• Qualifizierte Pflegefachkräfte im Bereitschaftsdienst

🚑 NOTFALL-KOORDINATION:
• Erste Einschätzung der Situation telefonisch
• Sofortige Entsendung einer Pflegefachkraft
• Koordination mit Ärzten und Rettungsdienst
• Organisation weiterführender Hilfen
• Familienkommunikation und Beratung

💰 KOSTENABRECHNUNG:
• Verhinderungspflege bei spontanem Ausfall
• Häusliche Krankenpflege bei medizinischen Notlagen
• Entlastungsbetrag für zusätzliche Betreuung
• Transparente Kostenaufklärung

✅ IHRE SICHERHEIT:
• Geprüfte und versicherte Pflegekräfte
• Medizinische Notfallausstattung
• Direkter Draht zu Haus- und Fachärzten
• Lückenlose Dokumentation

🚨 NOTFALL-KONTAKT:
📞 017645858098 (Tag und Nacht erreichbar)
📧 notfall@naturapflegedienst.de`,
    suggestions: ["Sofort anrufen", "Notfallplan erstellen", "Bereitschaftsdienst"]
  },

  medikamente: {
    keywords: ["medikamente", "tabletten", "medikamentengabe", "insulin", "spritzen", "tropfen", "medikamentenplan", "injektionen"],
    response: `Sichere Medikamentengabe bei Natura - Ihre Gesundheit in kompetenten Händen!

💊 MEDIKAMENTENMANAGEMENT 2025:
• Erstellung individueller Medikamentenpläne
• Sichere Verabreichung aller Arzneimittel
• Kontrolle von Wirkungen und Nebenwirkungen
• Koordination mit Ärzten und Apotheken
• Digitale Dokumentation für lückenlose Nachverfolgung

🔬 SPEZIELLE MEDIKATIONEN:
• Insulin-Injektionen bei Diabetes
• Schmerzmedikation nach ärztlicher Verordnung
• Blutgerinnungshemmer (Marcumar, NOAK)
• Antibiotika-Therapien
• Tropfen und Salben
• Inhalationen und Sprays

⚕️ QUALIFIKATION UNSERER KRÄFTE:
• Examinierte Pflegefachkräfte
• Regelmäßige Fortbildungen in Pharmakologie
• Zertifizierte Injektionstechniken
• Hygieneschulungen nach aktuellen Standards
• Notfalltraining bei Medikamentennebenwirkungen

📋 SICHERHEITSSTANDARDS:
• Vier-Augen-Prinzip bei kritischen Medikamenten
• Regelmäßige Kontrolle der Medikamentenschränke
• Dokumentation jeder Medikamentengabe
• Koordination mit behandelnden Ärzten
• Sofortige Meldung bei Auffälligkeiten

💰 KOSTENÜBERNAHME 2025:
• 100% Übernahme durch Krankenkasse bei ärztlicher Verordnung
• Keine Zuzahlung für Patienten
• Direkte Abrechnung mit der Krankenkasse
• Transparente Kostenaufklärung

🚨 NOTFALL-MANAGEMENT:
• 24/7 erreichbar bei Medikamentenproblemen
• Sofortige ärztliche Rücksprache
• Notfallmedikamente verfügbar

Medikamentenberatung:
📞 Herr Tuan Pham: 017645858098
🏢 Büro: 0911/123456 (Mo-Do 8:00-15:00, Fr 9:00-14:00)
📧 medikamente@naturapflegedienst.de`,
    suggestions: ["Medikamentenplan", "Injektionstraining", "Notfall-Medikamente"]
  },

  wunden: {
    keywords: ["wunde", "wundversorgung", "verbandswechsel", "dekubitus", "chronische wunden", "ulcus", "wundheilung"],
    response: `Moderne Wundversorgung bei Natura - Für optimale Heilung und Schmerzlinderung!

🩹 WUNDARTEN & BEHANDLUNG:
• Chronische Wunden (Ulcus cruris, diabetisches Fußsyndrom)
• Dekubitus (Druckgeschwüre) aller Schweregrade
• Postoperative Wunden und Nähte
• Akute Verletzungen und Schürfwunden
• Tumorbedingte Wunden
• Fistelversorgung

🔬 MODERNE WUNDTHERAPIE:
• Feuchte Wundbehandlung nach neuesten Standards
• Spezielle Wundauflagen für jeden Wundtyp
• Vakuumtherapie (V.A.C.) bei komplexen Wunden
• Kompressionstherapie bei venösen Problemen
• Schmerzarme Verbandswechsel
• Wunddokumentation mit Fotografie

👨‍⚕️ WUND-EXPERTISE:
• Zertifizierte Wundmanager im Team
• Regelmäßige Fortbildungen in Wundversorgung
• Enge Zusammenarbeit mit Wundzentren
• Koordination mit Hausärzten und Chirurgen
• Moderne Wundauflagen und -materialien

📊 WUNDDOKUMENTATION:
• Digitale Wundakte mit Verlaufskontrolle
• Regelmäßige Fotodokumentation
• Schmerzprotokoll und Heilungsverlauf
• Abstimmung mit behandelnden Ärzten
• Qualitätssicherung durch Supervision

💰 KOSTENÜBERNAHME:
• 100% Übernahme durch Krankenkasse
• Kostenfreie Verbandsmaterialien
• Direkte Abrechnung ohne Vorlage
• Zusätzlich: Entlastungsbetrag 131€ für ergänzende Hilfen

⚡ BESONDERE LEISTUNGEN:
• Wundsprechstunde zu Hause
• Notfallversorgung bei Wundproblemen
• Angehörigenschulung für einfache Verbände
• Koordination mit Sanitätshäusern

Wundversorgung anfragen:
📞 Herr Tuan Pham: 017645858098
🏢 Büro: 0911/123456 (Mo-Do 8:00-15:00, Fr 9:00-14:00)
📧 wunden@naturapflegedienst.de`,
    suggestions: ["Wundberatung", "Schmerztherapie", "Spezialverbände"]
  }
};

// Smart Logic for Knowledge Base
export class SmartChatLogic {
  static calculateConfidence(message: string, keywords: string[]): number {
    const lowerMessage = message.toLowerCase();
    const matches = keywords.filter(keyword => lowerMessage.includes(keyword));
    return matches.length / keywords.length;
  }

  static checkKnowledgeBase(userMessage: string): KnowledgeMatch | null {
    const message = userMessage.toLowerCase().trim();
    
    // Enhanced direct keyword matching for better accuracy
    for (const [key, knowledge] of Object.entries(naturaKnowledgeBase)) {
      for (const keyword of knowledge.keywords) {
        if (message.includes(keyword.toLowerCase())) {
          return {
            response: knowledge.response,
            suggestions: knowledge.suggestions,
            source: 'knowledge_base',
            confidence: 1.0
          };
        }
      }
    }
    
    // Fallback to confidence calculation with higher threshold
    for (const [key, knowledge] of Object.entries(naturaKnowledgeBase)) {
      const confidence = this.calculateConfidence(message, knowledge.keywords);
      
      if (confidence > 0.3) {
        return {
          response: knowledge.response,
          suggestions: knowledge.suggestions,
          source: 'knowledge_base',
          confidence
        };
      }
    }
    return null;
  }

  static shouldUseAPI(userMessage: string, knowledgeMatch: KnowledgeMatch | null): boolean {
    const apiTriggers = [
      'beschwerde', 'problem', 'unzufrieden', 'fehler',
      'wann', 'wie lange', 'termin', 'verfügbar', 'frei', 'buchen',
      'complaint', 'when', 'schedule', 'appointment'
    ];
    
    const needsAPI = apiTriggers.some(trigger => 
      userMessage.toLowerCase().includes(trigger)
    );
    
    return !knowledgeMatch || (knowledgeMatch.confidence < 0.7 && needsAPI);
  }

  static getFallbackResponse(): KnowledgeMatch {
    return {
      response: `Vielen Dank für Ihre Anfrage! Für eine persönliche und detaillierte Beratung zu Ihrem individuellen Pflegebedarf stehen wir Ihnen gerne zur Verfügung.

Unsere Pflegeexperten beraten Sie umfassend zu:
• Den neuen Pflegeleistungen 2025
• Optimaler Nutzung des erhöhten Entlastungsbetrags (131€)
• Individuellen Pflegelösungen für Ihr Zuhause
• Kostenübernahme und Finanzierungsmöglichkeiten

📞 **Direkter Kontakt:**
Herr Tuan Pham: 017645858098

🏢 **Bürozeiten:**
Mo-Do: 8:00-15:00 Uhr, Fr: 9:00-14:00 Uhr

📧 **E-Mail:**
info@naturapflegedienst.de

Gerne besuchen wir Sie auch zu Hause für eine kostenlose Erstberatung!`,
      suggestions: ["📞 Jetzt anrufen", "🏠 Hausbesuch vereinbaren", "📧 E-Mail senden"],
      source: 'fallback',
      confidence: 1.0
    };
  }
}

// Contact Information - Updated 2025
export const naturaContactInfo = {
  companyName: "Natura Pflegedienst GmbH",
  slogan: "Liebevolle Pflege zuhause",
  manager: "Herr Tuan Pham",
  phone: "017645858098",
  office: "0911/123456", 
  email: "info@naturapflegedienst.de",
  emergency: "017645858098",
  hours: "Mo-Do: 8:00-15:00 Uhr, Fr: 9:00-14:00 Uhr",
  emergencyNote: "24/7 Notfallbereitschaft verfügbar",
  year: "2025"
};