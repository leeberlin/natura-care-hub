import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Users, Clock, Shield, Heart, FileText, Lightbulb, Euro, Calendar, ArrowRight, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-care.jpg";

export default function Pflegeberatung() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pflegeberatung</h1>
          <p className="text-xl md:text-2xl">Professionelle Pflegeberatung für Ihre Familie</p>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full mb-6 font-medium shadow-lg">
              ✓ Kostenlose Pflegeberatung
            </div>
            <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto text-muted-foreground">
              Wir unterstützen Sie dabei, die besten Pflege- und Betreuungsangebote zu finden 
              und helfen Ihnen durch den Dschungel der Pflegeversicherung.
            </p>
            <div className="flex justify-center">
              <Button variant="coral" size="lg" className="text-lg px-8 py-4 shadow-lg" asChild>
                <a href="/digital-beratung" className="inline-flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Termin online buchen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-secondary/20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-center mb-4">
              Warum unsere Pflegeberatung?
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto text-muted-foreground">
              Kompetente Beratung nach § 37.3 SGB XI – vollständig kostenfrei für Sie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-2xl shadow-lg border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Euro className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vollständig kostenfrei</h3>
              <p className="text-muted-foreground">Alle Kosten werden von der Pflegekasse übernommen. Keine versteckten Gebühren oder Zusatzkosten.</p>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-lg border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Für die ganze Familie</h3>
              <p className="text-muted-foreground">Beratung für Pflegebedürftige und Angehörige. Gemeinsam finden wir die beste Lösung.</p>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-lg border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sofortige Hilfe</h3>
              <p className="text-muted-foreground">Schnelle Antworten auf dringende Fragen von unseren Pflegeexperten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          
          {/* When Care is Needed */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Ein Pflegefall in der Familie – was ist zu tun?
            </h2>
            
            <div className="p-6 mb-8 rounded-lg border-l-4 border-primary bg-secondary/20">
              <p className="text-lg leading-relaxed mb-4">
                Die Pflege eines Familienangehörigen bedeutet oft ein Zurückstecken im Beruf – 
                manchmal sogar die komplette Berufsaufgabe. Diese anhaltende Belastung kann 
                selbst den stärksten Menschen überfordern.
              </p>
              <p className="text-lg leading-relaxed font-medium">
                <strong>Wir helfen Ihnen dabei,</strong> passende Pflege- und Betreuungsangebote zu finden 
                und sich im Dschungel der Pflegeversicherung zurechtzufinden.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  step: "1",
                  title: "MDK-Begutachtung vorbereiten",
                  description: "Wir bereiten Sie optimal auf die Begutachtung durch den Medizinischen Dienst vor."
                },
                {
                  step: "2", 
                  title: "Pflegegrad bestimmen",
                  description: "Der Pflegegrad bestimmt die Höhe der finanziellen Unterstützung durch die Pflegekasse."
                },
                {
                  step: "3",
                  title: "Leistungen beantragen", 
                  description: "Wir unterstützen Sie bei allen Antrags- und Widerspruchsverfahren."
                },
                {
                  step: "4",
                  title: "Pflege organisieren",
                  description: "Gemeinsam finden wir die passenden Pflegeangebote für Ihre Situation."
                }
              ].map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm border">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-bold text-sm text-primary-foreground">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Overview */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">
              Leistungen unserer Pflegeberatung nach § 37.3 SGB XI
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">
                  Beratung & Information
                </h4>
                <div className="space-y-3">
                  {[
                    "Leistungen der Pflegeversicherung",
                    "Sozialrechtliche Fragen", 
                    "Auswahl geeigneter Pflegeangebote",
                    "Organisation der häuslichen Pflege"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">
                  Praktische Unterstützung
                </h4>
                <div className="space-y-3">
                  {[
                    "Antrags- und Widerspruchsverfahren",
                    "Vorbereitung auf MDK-Begutachtung",
                    "Kostenträger-Kommunikation",
                    "Rechtliche Absicherung"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-primary" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h4 className="flex items-center text-lg font-semibold mb-4">
                <Shield className="mr-3 h-6 w-6 text-primary" />
                <span>Rechtliche Vorsorge</span>
              </h4>
              <p className="mb-4">
                Wichtige Dokumente für den Ernstfall:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3 bg-primary"></div>
                  Vorsorgevollmacht
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3 bg-primary"></div>
                  Patientenverfügung
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3 bg-primary"></div>
                  Betreuungsverfügung
                </li>
              </ul>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-sm border">
              <h4 className="flex items-center text-lg font-semibold mb-4">
                <Clock className="mr-3 h-6 w-6 text-primary" />
                <span>Pflegezeit & Freistellung</span>
              </h4>
              <p className="mb-4">
                Ihre Rechte als pflegender Angehöriger:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3 bg-primary"></div>
                  Kurzzeitige Arbeitsbefreiung (10 Tage)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3 bg-primary"></div>
                  Pflegezeit (bis zu 6 Monate)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-3 bg-primary"></div>
                  Familienpflegezeit (reduzierte Arbeitszeit)
                </li>
              </ul>
            </div>
          </div>

          {/* Cost Coverage Info */}
          <div className="p-6 rounded-lg border-2 border-primary bg-gradient-to-br from-secondary/30 to-primary/10">
            <h4 className="flex items-center text-xl font-semibold mb-4 text-primary">
              <Euro className="mr-3 h-6 w-6" />
              Kostenübernahme durch die Pflegekasse
            </h4>
            <p className="mb-4">
              Jedem Versicherten stehen kostenlose Beratungsleistungen zu, da sie von der Pflegekasse finanziert werden. 
              Die Beratung wird nach den gesetzlichen Regelungen vollständig durch die Pflegeversicherung übernommen.
            </p>
            <p className="font-semibold text-primary">
              Eine bequeme Möglichkeit, Ihr Pflegegeld zu sichern und optimal zu nutzen.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-primary-foreground bg-primary">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Jetzt kostenlose Pflegeberatung vereinbaren
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Lassen Sie sich von unseren Experten beraten und finden Sie die beste Lösung für Ihre Familie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white text-primary border-white hover:bg-white/90" asChild>
              <a href="/digital-beratung" className="inline-flex items-center gap-3">
                <Calendar className="h-5 w-5" />
                Beratungstermin vereinbaren
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white text-primary border-white hover:bg-white/90" asChild>
              <a href="tel:0911244533" className="inline-flex items-center gap-3">
                <Phone className="h-5 w-5" />
                Kostenlos anrufen: 0911 244 35 33
              </a>
            </Button>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-2 text-sm font-medium">
              Rechtlicher Hinweis
            </div>
            <p className="text-sm opacity-90">
              Pflegeberatung nach § 37.3 SGB XI • Kosten werden vollständig von der Pflegekasse übernommen
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}