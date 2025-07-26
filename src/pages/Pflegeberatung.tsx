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
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full mb-8 font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
              <CheckCircle className="h-5 w-5" />
              Kostenlose Pflegeberatung
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Professionelle Beratung für Ihre Familie
            </h2>
            <p className="text-xl mb-10 leading-relaxed max-w-4xl mx-auto text-gray-700">
              Wir unterstützen Sie dabei, die besten Pflege- und Betreuungsangebote zu finden 
              und helfen Ihnen durch den Dschungel der Pflegeversicherung.
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl transform hover:scale-105 transition-all duration-300 rounded-2xl font-semibold" 
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
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Warum unsere Pflegeberatung?
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Kompetente Beratung nach § 37.3 SGB XI – vollständig kostenfrei für Sie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-3xl shadow-xl border-2 border-transparent hover:border-emerald-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Euro className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Vollständig kostenfrei</h3>
              <p className="text-gray-600 leading-relaxed">Alle Kosten werden von der Pflegekasse übernommen. Keine versteckten Gebühren oder Zusatzkosten.</p>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-xl border-2 border-transparent hover:border-blue-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Für die ganze Familie</h3>
              <p className="text-gray-600 leading-relaxed">Beratung für Pflegebedürftige und Angehörige. Gemeinsam finden wir die beste Lösung.</p>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-xl border-2 border-transparent hover:border-yellow-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Sofortige Hilfe</h3>
              <p className="text-gray-600 leading-relaxed">Schnelle Antworten auf dringende Fragen von unseren Pflegeexperten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          
          {/* When Care is Needed */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ein Pflegefall in der Familie – was ist zu tun?
            </h2>
            
            <div className="p-8 mb-12 rounded-3xl border-l-8 border-gradient-to-b from-blue-500 to-purple-500 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 shadow-lg">
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
                  description: "Wir bereiten Sie optimal auf die Begutachtung durch den Medizinischen Dienst vor.",
                  color: "from-pink-400 to-red-500"
                },
                {
                  step: "2", 
                  title: "Pflegegrad bestimmen",
                  description: "Der Pflegegrad bestimmt die Höhe der finanziellen Unterstützung durch die Pflegekasse.",
                  color: "from-blue-400 to-indigo-500"
                },
                {
                  step: "3",
                  title: "Leistungen beantragen", 
                  description: "Wir unterstützen Sie bei allen Antrags- und Widerspruchsverfahren.",
                  color: "from-green-400 to-emerald-500"
                },
                {
                  step: "4",
                  title: "Pflege organisieren",
                  description: "Gemeinsam finden wir die passenden Pflegeangebote für Ihre Situation.",
                  color: "from-purple-400 to-violet-500"
                }
              ].map((item, index) => (
                <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-blue-200 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center font-bold text-lg text-white group-hover:scale-110 transition-transform duration-300`}>
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
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Leistungen unserer Pflegeberatung nach § 37.3 SGB XI
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-lg border border-blue-100">
                <h4 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-4"></div>
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
                      <CheckCircle className="h-6 w-6 mt-0.5 flex-shrink-0 text-blue-500 group-hover:text-indigo-600 transition-colors duration-300" />
                      <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-3xl shadow-lg border border-emerald-100">
                <h4 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <div className="w-3 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full mr-4"></div>
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
                      <CheckCircle className="h-6 w-6 mt-0.5 flex-shrink-0 text-emerald-500 group-hover:text-teal-600 transition-colors duration-300" />
                      <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl shadow-lg border border-purple-100 group hover:shadow-xl transition-all duration-300">
              <h4 className="flex items-center text-2xl font-bold mb-6 text-gray-800">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                Rechtliche Vorsorge
              </h4>
              <p className="mb-6 text-gray-700 text-lg">
                Wichtige Dokumente für den Ernstfall:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <div className="w-3 h-3 rounded-full mr-4 bg-gradient-to-r from-purple-400 to-pink-500"></div>
                  <span className="font-medium">Vorsorgevollmacht</span>
                </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <div className="w-3 h-3 rounded-full mr-4 bg-gradient-to-r from-purple-400 to-pink-500"></div>
                  <span className="font-medium">Patientenverfügung</span>
                </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <div className="w-3 h-3 rounded-full mr-4 bg-gradient-to-r from-purple-400 to-pink-500"></div>
                  <span className="font-medium">Betreuungsverfügung</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-3xl shadow-lg border border-orange-100 group hover:shadow-xl transition-all duration-300">
              <h4 className="flex items-center text-2xl font-bold mb-6 text-gray-800">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                Pflegezeit & Freistellung
              </h4>
              <p className="mb-6 text-gray-700 text-lg">
                Ihre Rechte als pflegender Angehöriger:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <div className="w-3 h-3 rounded-full mr-4 bg-gradient-to-r from-orange-400 to-yellow-500"></div>
                  <span className="font-medium">Kurzzeitige Arbeitsbefreiung (10 Tage)</span>
                </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <div className="w-3 h-3 rounded-full mr-4 bg-gradient-to-r from-orange-400 to-yellow-500"></div>
                  <span className="font-medium">Pflegezeit (bis zu 6 Monate)</span>
                </li>
                <li className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <div className="w-3 h-3 rounded-full mr-4 bg-gradient-to-r from-orange-400 to-yellow-500"></div>
                  <span className="font-medium">Familienpflegezeit (reduzierte Arbeitszeit)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cost Coverage Info */}
          <div className="p-10 rounded-3xl bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-2 border-amber-200 shadow-xl">
            <h4 className="flex items-center text-3xl font-bold mb-6 text-gray-800">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mr-4">
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
      <section className="py-20 text-white bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white rounded-full blur-3xl"></div>
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
              className="text-lg px-10 py-6 bg-white text-blue-600 border-2 border-white hover:bg-blue-50 hover:border-blue-100 hover:text-blue-700 shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-2xl font-bold" 
              asChild
            >
              <a href="/digital-beratung" className="inline-flex items-center gap-3">
                <Calendar className="h-6 w-6" />
                Beratungstermin vereinbaren
              </a>
            </Button>
            <Button 
              size="lg" 
              className="text-lg px-10 py-6 bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-2xl font-bold" 
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