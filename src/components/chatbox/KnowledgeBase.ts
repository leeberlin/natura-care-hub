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

// Comprehensive Knowledge Base for Natura Pflegedienst
export const naturaKnowledgeBase: Record<string, KnowledgeEntry> = {
  haushaltshilfe: {
    keywords: ["haushaltshilfe", "haushaltsunterstützung", "reinigung", "putzen", "einkaufen", "wäsche"],
    response: `**Herzlich willkommen! 🏠**

Vielen Dank für Ihr Interesse an unserer Haushaltshilfe von Natura Pflegedienst!

### 🌟 **Unsere Premium-Haushaltshilfe umfasst:**
- ✨ **Komplette Wohnungsreinigung** - professionell und gründlich
- 🛒 **Persönlicher Einkaufsservice** - nach Ihren individuellen Wünschen  
- 👕 **Wäschepflege deluxe** - waschen, bügeln, falten
- 🪟 **Fensterreinigung** - für kristallklare Sicht
- 🌱 **Liebevolle Pflanzen- & Haustierpflege**

### 💰 **Ihr finanzieller Vorteil:**
Mit **Pflegegrad 1+** erhalten Sie **125€ monatlich** durch den Entlastungsbetrag - **völlig kostenfrei für Sie!** 
📌 *Nicht genutzte Beträge verfallen nicht und werden automatisch angespart.*

### 📞 **Sofort erreichbar:**
- **Herr Tuan Pham direkt:** 017645858098
- **Büro:** 0911/123456 (Mo-Do: 8:00-15:00, Fr: 9:00-14:00)
- **E-Mail:** info@naturapflegedienst.de
- **24/7 Notfälle:** 017645858098

**Wir verwandeln Ihr Zuhause in eine Wohlfühloase!**`,
    suggestions: ["💰 Kosten & Finanzierung", "📋 Pflegegrad beantragen", "📞 Beratungstermin"]
  },

  beratung: {
    keywords: ["beratung", "pflegeberatung", "beratungstermin", "information", "erstberatung", "tư vấn"],
    response: `**Professionelle Pflegeberatung - Ihr Wegweiser zu optimaler Betreuung! 🌟**

### 🏠 **Kostenfreie Beratung bei Ihnen zu Hause**
Unsere Pflegeexperten kommen direkt zu Ihnen - bequem, diskret und völlig **kostenfrei!**

### 📋 **Was wir gemeinsam klären:**
- 💡 **Finanzierungsmöglichkeiten** - bis zu 125€ monatlich Entlastungsbetrag
- 🏡 **Wohnraumanpassung** - für maximale Sicherheit und Komfort
- 👨‍👩‍👧‍👦 **Angehörigen-Entlastung** - praktische Lösungen für Familien  
- ⭐ **Qualitätssicherung** - beste Pflege nach modernsten Standards
- 📊 **Pflegegrad-Optimierung** - alle Möglichkeiten ausschöpfen

### ⚖️ **Rechtlicher Hintergrund:**
Ab Pflegegrad 2 ist die Beratung nach § 37.3 SGB XI verpflichtend - aber keine Sorge: **Wir machen das gerne und kompetent mit Ihnen!**

### 📞 **Beratungstermin vereinbaren:**
- **Herr Tuan Pham:** 017645858098  
- **Büro:** 0911/123456 (Mo-Do: 8:00-15:00, Fr: 9:00-14:00)
- **E-Mail:** info@naturapflegedienst.de

**Ihre optimale Pflege beginnt mit dem richtigen Wissen!**`,
    suggestions: ["📋 Pflegegrad beantragen", "💰 Kosten & Finanzierung", "🏥 Unsere Leistungen"]
  },

  körperpflege: {
    keywords: ["körperpflege", "waschen", "duschen", "baden", "rasieren", "anziehen", "personal care", "chăm sóc"],
    response: `**Einfühlsame Körperpflege - Würde und Wohlbefinden im Mittelpunkt! 🛁**

### 🌟 **Unsere respektvolle Körperpflege:**
- 🚿 **Sanfte Ganzkörperwäsche** - mit hochwertigen, hautschonenden Produkten
- 🪒 **Professionelle Rasur & Styling** - für Ihr persönliches Wohlbefinden
- 💆‍♀️ **Intensive Hautpflege** - Schutz und Pflege für gesunde Haut
- 👗 **Einfühlsames An- und Auskleiden** - mit Geduld und absoluter Würde
- 🦷 **Gründliche Mund- & Zahnhygiene** - für gesunde Ausstrahlung

### 🤝 **Warum Natura Pflegedienst?**
- **Feste, vertraute Bezugspersonen** - keine ständig wechselnden Gesichter
- **Flexible Zeiten** - ganz nach Ihrem persönlichen Rhythmus
- **Absolute Diskretion** - Ihre Privatsphäre ist uns heilig
- **Empathische Betreuung** - mit Herz und Verständnis

### 📞 **Vertrauen Sie uns:**
- **Direkt:** Herr Tuan Pham - 017645858098
- **Büro:** 0911/123456 (Mo-Do: 8:00-15:00, Fr: 9:00-14:00)
- **E-Mail:** info@naturapflegedienst.de
- **24/7 Notfälle:** 017645858098

**Ihre Würde und Ihr Komfort stehen bei uns an erster Stelle.**`,
    suggestions: ["🏥 Häusliche Krankenpflege", "💰 Kosten & Finanzierung", "📞 Beratungstermin"]
  },

  krankenpflege: {
    keywords: ["krankenpflege", "häusliche krankenpflege", "medizinische pflege", "injection", "wundversorgung", "nursing"],
    response: `**Häusliche Krankenpflege - Medizinische Kompetenz in gewohnter Umgebung! 🏥**

### 💉 **Unsere medizinischen Leistungen:**
- 💉 **Sichere Injektionen** - Insulin, Thrombosespritzen, Schmerztherapie
- 🩹 **Professionelle Wundversorgung** - moderne Techniken für optimale Heilung
- 💊 **Zuverlässiges Medikamentenmanagement** - sichere Dosierung und Überwachung
- 🩺 **Regelmäßige Vitalzeichenkontrolle** - Blutdruck, Blutzucker, Puls
- 🧤 **Fachgerechte Kompressionstherapie** - Strümpfe und Verbände professionell
- 🚰 **Sterile Katheterpflege** - hygienisch und schmerzfrei
- 🩹 **Spezialisierte Dekubitus-Behandlung** - moderne Druckgeschwür-Therapie
- 🔄 **Einfühlsame Stomaversorgung** - kompetent und diskret

### 💰 **100% Kostenübernahme:**
**Direkte Krankenkassen-Abrechnung** - keine versteckten Kosten oder Vorauskasse für Sie!

### ⚡ **24/7 Notfallbereitschaft:**
- **Sofort erreichbar:** Herr Tuan Pham - 017645858098
- **Büro:** 0911/123456 (Mo-Do: 8:00-15:00, Fr: 9:00-14:00)
- **E-Mail:** info@naturapflegedienst.de
- **Notfälle:** 017645858098

**Gesundheit hat bei uns oberste Priorität - vertrauen Sie unserem Expertenteam!**`,
    suggestions: ["💊 Medikamentengabe", "🩹 Wundversorgung", "📞 Notfall-Kontakt"]
  },

  leistungen: {
    keywords: ["leistungen", "services", "angebot", "was bieten sie", "dienstleistungen", "dịch vụ"],
    response: `**Natura Pflegedienst - Ihr Rundum-Sorglos-Partner für Lebensqualität! 🌟**

### 🏠 **HÄUSLICHE PFLEGE PREMIUM**
- Individueller Pflegeplan nach Ihren Bedürfnissen
- Körperpflege mit Respekt und absoluter Würde
- Medizinische Behandlungspflege auf höchstem Niveau

### 🧹 **HAUSHALTSHILFE DELUXE**  
- Komplette professionelle Haushaltsführung
- Persönlicher Einkaufsservice und Botengänge
- Wäschepflege und Tiefenreinigung
- **125€/Monat durch Entlastungsbetrag möglich**

### 👥 **BETREUUNG & BEGLEITUNG PLUS**
- Sozialer Kontakt und einfühlsame Gespräche
- Aktivierende Spaziergänge und Beschäftigungen
- Zuverlässige Arztbegleitung und Behördengänge
- Professionelle Angehörigen-Entlastung

### 🏥 **MEDIZINISCHE KRANKENPFLEGE**
- Injektionen und Wundversorgung nach neuesten Standards
- Sichere Medikamentengabe und Gesundheitskontrollen
- Fachgerechte Kompressionstherapie
- **100% direkte Krankenkassen-Abrechnung**

### 🎯 **Ihre exklusiven Vorteile:**
✅ **Feste Bezugspersonen** - Vertrauen durch Kontinuität
✅ **Flexible Zeiten** - wir richten uns nach Ihnen  
✅ **Kostenoptimiert** - maximale Kassenleistungen für Sie
✅ **24/7 Erreichbarkeit** - Sicherheit rund um die Uhr

### 📞 **Ihr direkter Draht:**
- **🔥 Herr Tuan Pham:** 017645858098 
- **📞 Büro:** 0911/123456 (Mo-Do: 8:00-15:00, Fr: 9:00-14:00)
- **📧 E-Mail:** info@naturapflegedienst.de
- **🚨 Notfälle:** 017645858098

**Kostenloses Beratungsgespräch? Rufen Sie uns einfach an!**`,
    suggestions: ["📞 Beratungstermin", "💰 Kosten & Finanzierung", "📋 Pflegegrad Info"]
  },

  kosten: {
    keywords: ["kosten", "preis", "finanzierung", "pflegegrad", "entlastungsbetrag", "kasse", "cost"],
    response: `**Finanzierung Ihrer Pflege - Transparent und Kostengünstig! 💰**

### 💳 **Entlastungsbetrag nutzen:**
- **Pflegegrad 1-5:** Automatisch 125€ monatlich
- **Komplett kostenfrei** für Sie bei korrekter Abrechnung
- **Ansparen möglich** - ungenutzte Beträge verfallen nicht

### 🏥 **Krankenkassen-Leistungen:**
- **Häusliche Krankenpflege:** 100% Übernahme durch Krankenkasse
- **Pflegeleistungen:** Nach Pflegegrad gestaffelt
- **Beratungsbesuche:** Komplett kostenfrei

### 📊 **Pflegegrade im Überblick:**
- **Pflegegrad 1:** 125€ Entlastungsbetrag + Beratung
- **Pflegegrad 2:** 316€ Pflegegeld oder 724€ Pflegesachleistung
- **Pflegegrad 3:** 545€ Pflegegeld oder 1.363€ Pflegesachleistung
- **Pflegegrad 4:** 728€ Pflegegeld oder 1.693€ Pflegesachleistung
- **Pflegegrad 5:** 901€ Pflegegeld oder 2.095€ Pflegesachleistung

### 🎯 **Unser Service für Sie:**
✅ **Kostenfreie Beratung** zur optimalen Finanzierung
✅ **Direkte Abrechnung** - keine Vorauskasse
✅ **Pflegegrad-Beantragung** professionell begleitet

### 📞 **Finanzierungsberatung:**
- **Herr Tuan Pham:** 017645858098
- **E-Mail:** info@naturapflegedienst.de

**Lassen Sie uns gemeinsam die beste Finanzierungslösung finden!**`,
    suggestions: ["📋 Pflegegrad beantragen", "📞 Beratungstermin", "🏥 Unsere Leistungen"]
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
    const message = userMessage.toLowerCase();
    
    for (const [key, knowledge] of Object.entries(naturaKnowledgeBase)) {
      const confidence = this.calculateConfidence(message, knowledge.keywords);
      
      if (confidence > 0.3) { // Increased sensitivity
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
      response: `Vielen Dank für Ihre Frage! Für eine detaillierte Beratung zu Ihrem spezifischen Anliegen rufen Sie uns gerne direkt an:

📞 **Herr Tuan Pham:** 017645858098
🏢 **Büro:** 0911/123456 (Mo-Do: 8:00-15:00, Fr: 9:00-14:00)
📧 **E-Mail:** info@naturapflegedienst.de

Unser Team berät Sie gerne persönlich und kompetent!`,
      suggestions: ["📞 Jetzt anrufen", "📧 E-Mail senden", "🏥 Unsere Leistungen"],
      source: 'fallback',
      confidence: 1.0
    };
  }
}

// Contact Information
export const naturaContactInfo = {
  companyName: "Natura Pflegedienst GmbH",
  manager: "Herr Tuan Pham",
  phone: "017645858098",
  office: "0911/123456", 
  email: "info@naturapflegedienst.de",
  emergency: "017645858098",
  hours: "Mo-Do: 8:00-15:00 Uhr, Fr: 9:00-14:00 Uhr",
  emergencyNote: "24/7 Notfallbereitschaft verfügbar"
};