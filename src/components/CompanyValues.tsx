import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
const CompanyValues = () => {
  return <section className="py-20 bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-700 mb-6 font-nunito leading-tight">
            Immer für Sie da, wenn es wirklich zählt.
          </h2>
          
          <div className="space-y-6 mb-8">
            <p className="text-lg text-gray-700 font-source leading-relaxed">
              Wir sind Ihr <span className="font-semibold text-teal-600">ambulanter Pflegedienst</span> – erreichbar, engagiert und zuverlässig.
            </p>
            <p className="text-lg text-gray-700 font-source leading-relaxed">
              Ihr Wohlbefinden und die Zufriedenheit Ihrer Liebsten stehen für uns im Mittelpunkt.
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-teal-100">
            <p className="text-gray-700 font-source leading-relaxed mb-4">
              Vertrauen Sie auf unsere Erfahrung, unser Gespür für Ihre Bedürfnisse und die{" "}
              <span className="font-semibold text-teal-600">Herzlichkeit des Natura Pflegedienst-Teams</span>.
            </p>
            <p className="text-gray-700 font-source leading-relaxed">
              Wir begleiten und entlasten Sie – mit Ruhe, Kompetenz und einem offenen Ohr für alles, was Sie bewegt.
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 p-8 text-white relative overflow-hidden bg-yellow-300 rounded-lg">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-4 font-nunito">
                Werde teil des Teams!
              </h3>
              <h4 className="text-2xl md:text-3xl font-bold mb-6 font-nunito">
                Stellenangebote – Ambulante Pflege
              </h4>
              
              <div className="w-16 h-1 bg-white mx-auto mb-6 rounded-full"></div>
              
              <Button variant="outline" size="lg" className="bg-white text-orange-500 border-white hover:bg-orange-50 font-nunito font-semibold">
                JETZT BEWERBEN
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CompanyValues;