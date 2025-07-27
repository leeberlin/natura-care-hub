import { Button } from "./ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const serviceCategories = [{
    title: "Pflegeleistungen",
    links: ["Grundpflege", "Behandlungspflege", "Hauswirtschaft", "Betreuungsleistungen", "Verhinderungspflege", "Pflegeberatung"]
  }, {
    title: "Kostenübernahme",
    links: ["Pflegegrade", "Pflegekasse", "Krankenkasse", "Selbstzahler", "Beihilfe", "Sozialamt"]
  }, {
    title: "Über uns",
    links: ["Unser Team", "Qualitätsstandards", "Karriere", "Fortbildungen", "Zertifizierungen", "Referenzen"]
  }];
  return <footer className="bg-nature-charcoal text-white">


      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white/10 p-1">
                <img src="/lovable-uploads/7e9df2db-9333-4d29-85cc-b32f727b93cc.png" alt="Natura Pflegedienst Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-white font-nunito">
                  Natura Pflegedienst
                </h1>
                <p className="text-sm text-white/80 font-source">
                  Zuhause umsorgt
                </p>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 font-source leading-relaxed">
              Ihr neuer vertrauensvoller Partner für 
              professionelle Pflege und Betreuung in Nürnberg und Umgebung.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-nature-coral flex-shrink-0 mt-0.5" />
                <div className="font-source">
                  <div className="font-semibold">Natura Pflegedienst GmbH</div>
                  <div className="text-white/80">Killianstraße 119a</div>
                  <div className="text-white/80">90425 Nürnberg</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-nature-coral" />
                <div className="font-source">
                  <div className="font-semibold">Tel.: 0911-123456</div>
                  <div className="text-white/80 text-sm">24/7 erreichbar</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-nature-coral" />
                <div className="font-source">
                  <div className="font-semibold">info@natura-pflegedienst.de</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-nature-coral flex-shrink-0 mt-0.5" />
                <div className="font-source">
                  <div className="font-semibold">Bürozeiten:</div>
                  <div className="text-white/80 text-sm">Mo-Fr: 8:00 - 18:00 Uhr</div>
                  <div className="text-white/80 text-sm">Sa: 9:00 - 14:00 Uhr</div>
                  <div className="text-white/80 text-sm">Notfall: 24/7</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4 mt-8">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-nature-coral transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-nature-coral transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-nature-coral transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Service Categories */}
          {serviceCategories.map((category, index) => <div key={index}>
              <h4 className="text-lg font-semibold mb-6 font-nunito">
                {category.title}
              </h4>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => <li key={linkIndex}>
                    <a href="#" className="text-white/80 hover:text-white transition-colors font-source text-sm">
                      {link}
                    </a>
                  </li>)}
              </ul>
            </div>)}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm font-source">
              © {currentYear} Natura Pflegedienst GmbH. Alle Rechte vorbehalten.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="/impressum" className="text-white/60 hover:text-white transition-colors font-source">
                Impressum
              </a>
              <a href="/datenschutz" className="text-white/60 hover:text-white transition-colors font-source">
                Datenschutz
              </a>
              <a href="/agb" className="text-white/60 hover:text-white transition-colors font-source">
                AGBs
              </a>
            </div>
            
            {/* Quality Badges */}
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 rounded-lg px-3 py-2 text-xs font-semibold font-nunito">
                Start 2025
              </div>
              <div className="bg-white/10 rounded-lg px-3 py-2 text-xs font-semibold font-nunito">
                Qualifiziert
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;