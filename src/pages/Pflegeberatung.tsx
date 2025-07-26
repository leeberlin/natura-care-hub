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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-full mb-8 font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
              <CheckCircle className="h-5 w-5" />
              Kostenlose Pflegeberatung
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Professionelle Beratung für Ihre Familie
            </h2>
            <p className="text-xl mb-10 leading-relaxed max-w-4xl mx-auto text-gray-600">
              Wir unterstützen Sie dabei, die besten Pflege- und Betreuungsangebote zu finden 
              und helfen Ihnen durch den Dschungel der Pflegeversicherung.
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 bg-blue-600 hover:bg-blue-700 text-white shadow-xl transform hover:scale-105 transition-all duration-300 rounded-2xl font-semibold" 
                asChild
              >
                <a href="/digital-beratung" className="inline-flex items-center gap-3">
                  <Calendar className="h-6 w-6" />
                  Termin online buchen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Warum unsere Pflegeberatung?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Kompetente Beratung nach § 37.3 SGB XI – vollständig kostenfrei für Sie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors duration-300">
                <Euro className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Vollständig kostenfrei</h3>
              <p className="text-gray-600 leading-relaxed">Alle Kosten werden von der Pflegekasse übernommen. Keine versteckten Gebühren oder Zusatzkosten.</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Für die ganze Familie</h3>
              <p className="text-gray-600 leading-relaxed">Beratung für Pflegebedürftige und Angehörige. Gemeinsam finden wir die beste Lösung.</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors duration-300">
                <Lightbulb className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Sofortige Hilfe</h3>
              <p className="text-gray-600 leading-relaxed">Schnelle Antworten auf dringende Fragen von unseren Pflegeexperten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4">
          
          {/* When Care is Needed */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Ein Pflegefall in der Familie – was ist zu tun?
            </h2>
            
            <div className="p-8 mb-12 rounded-2xl border-l-4 border-blue-500 bg-white shadow-lg">
              <p className="text-xl leading-relaxed mb-6 text-gray-700">
                Die Pflege eines Familienangehörigen bedeutet oft ein Zurückstecken im Beruf – 
                manchmal sogar die komplette Berufsaufgabe. Diese anhaltende Belastung kann 
                selbst den stärksten Menschen überfordern.
              </p>
              <p className="text-xl leading-relaxed font-semibold text-gray-800">
                <span className="text-blue-600">Wir helfen Ihnen dabei,</span> passende Pflege- und Betreuungsangebote zu finden 
                und sich im Dschungel der Pflegeversicherung zurechtzufinden.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center font-bold text-lg text-white group-hover:bg-blue-700 transition-colors duration-300">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Overview */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-gray-800">
                Leistungen unserer Pflegeberatung nach § 37.3 SGB XI
              </h3>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h4 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <div className="w-3 h-8 bg-blue-500 rounded-full mr-4"></div>
                  Beratung & Information
                </h4>
                <div className="space-y-4">
                  {[
                    "Leistungen der Pflegeversicherung",
                    "Sozialrechtliche Fragen", 
                    "Auswahl geeigneter Pflegeangebote",
                    "Organisation der häuslichen Pflege"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <CheckCircle className="h-6 w-6 mt-0.5 flex-shrink-0 text-blue-500" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h4 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <div className="w-3 h-8 bg-emerald-500 rounded-full mr-4"></div>
                  Praktische Unterstützung
                </h4>
                <div className="space-y-4">
                  {[
                    "Antrags- und Widerspruchsverfahren",
                    "Vorbereitung auf MDK-Begutachtung",
                    "Kostenträger-Kommunikation",
                    "Rechtliche Absicherung"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <CheckCircle className="h-6 w-6 mt-0.5 flex-shrink-0 text-emerald-500" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
              <h4 className="flex items-center text-2xl font-bold mb-6 text-gray-800">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                Rechtliche Vorsorge
              </h4>
              <p className="mb-6 text-gray-700 text-lg">
                Wichtige Dokumente für den Ernstfall:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-3 h-3 rounded-full mr-4 bg-blue-500"></div>
                  <span className="font-medium">Vorsorgevollmacht</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-3 h-3 rounded-full mr-4 bg-blue-500"></div>
                  <span className="font-medium">Patientenverfügung</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-3 h-3 rounded-full mr-4 bg-blue-500"></div>
                  <span className="font-medium">Betreuungsverfügung</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
              <h4 className="flex items-center text-2xl font-bold mb-6 text-gray-800">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center mr-4 group-hover:bg-amber-200 transition-colors duration-300">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                Pflegezeit & Freistellung
              </h4>
              <p className="mb-6 text-gray-700 text-lg">
                Ihre Rechte als pflegender Angehöriger:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-3 h-3 rounded-full mr-4 bg-amber-500"></div>
                  <span className="font-medium">Kurzzeitige Arbeitsbefreiung (10 Tage)</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-3 h-3 rounded-full mr-4 bg-amber-500"></div>
                  <span className="font-medium">Pflegezeit (bis zu 6 Monate)</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-3 h-3 rounded-full mr-4 bg-amber-500"></div>
                  <span className="font-medium">Familienpflegezeit (reduzierte Arbeitszeit)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cost Coverage Info */}
          <div className="p-10 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 shadow-lg">
            <h4 className="flex items-center text-3xl font-bold mb-6 text-gray-800">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center mr-4">
                <Euro className="h-6 w-6 text-white" />
              </div>
              Kostenübernahme durch die Pflegekasse
            </h4>
            <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              Jedem Versicherten stehen kostenlose Beratungsleistungen zu, da sie von der Pflegekasse finanziert werden. 
              Die Beratung wird nach den gesetzlichen Regelungen vollständig durch die Pflegeversicherung übernommen.
            </p>
            <p className="font-bold text-xl text-amber-700">
              Eine bequeme Möglichkeit, Ihr Pflegegeld zu sichern und optimal zu nutzen.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white bg-blue-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Jetzt kostenlose Pflegeberatung vereinbaren
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Lassen Sie sich von unseren Experten beraten und finden Sie die beste Lösung für Ihre Familie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="text-lg px-10 py-6 bg-white text-blue-600 border-2 border-white hover:bg-gray-50 hover:text-blue-700 shadow-xl transform hover:scale-105 transition-all duration-300 rounded-2xl font-bold" 
              asChild
            >
              <a href="/digital-beratung" className="inline-flex items-center gap-3">
                <Calendar className="h-6 w-6" />
                Beratungstermin vereinbaren
              </a>
            </Button>
            <Button 
              size="lg" 
              className="text-lg px-10 py-6 bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 shadow-xl transform hover:scale-105 transition-all duration-300 rounded-2xl font-bold" 
              asChild
            >
              <a href="tel:0911244533" className="inline-flex items-center gap-3">
                <Phone className="h-6 w-6" />
                Kostenlos anrufen: 0911 244 35 33
              </a>
            </Button>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-2xl mb-4 text-lg font-semibold border border-white/30">
              Rechtlicher Hinweis
            </div>
            <p className="text-lg opacity-90">
              Pflegeberatung nach § 37.3 SGB XI • Kosten werden vollständig von der Pflegekasse übernommen
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}