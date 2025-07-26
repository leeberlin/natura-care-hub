import { Button } from "./ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const serviceCategories = [
    {
      title: "Pflegeleistungen",
      links: [
        "Grundpflege",
        "Behandlungspflege", 
        "Hauswirtschaft",
        "Betreuungsleistungen",
        "Verhinderungspflege",
        "24-Stunden-Pflege"
      ]
    },
    {
      title: "Kostenübernahme",
      links: [
        "Pflegegrade", 
        "Pflegekasse",
        "Krankenkasse",
        "Selbstzahler",
        "Beihilfe",
        "Sozialamt"
      ]
    },
    {
      title: "Über uns",
      links: [
        "Unser Team",
        "Qualitätsstandards",
        "Karriere",
        "Fortbildungen",
        "Zertifizierungen",
        "Referenzen"
      ]
    }
  ];

  return (
    <footer className="bg-nature-charcoal text-white">
      {/* Beautiful Image Gallery Section */}
      <div className="border-b border-white/10 bg-gradient-to-r from-nature-sage/30 via-nature-cream/20 to-nature-sage/40">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-nunito text-nature-charcoal">
              Pflege mit Herz und Professionalität
            </h3>
            <p className="text-lg text-nature-charcoal/80 mb-8 font-source max-w-2xl mx-auto">
              Erleben Sie die warme Atmosphäre und professionelle Betreuung, 
              die unsere Pflegekräfte täglich mit Hingabe leisten.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            <div className="group relative overflow-hidden rounded-2xl aspect-square bg-white/20 backdrop-blur-sm border border-white/30">
              <img 
                src="/src/assets/care-assistance.jpg" 
                alt="Pflegeberatung"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nature-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold font-nunito">Beratung</h4>
                  <p className="text-sm font-source">Individuelle Pflege</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl aspect-square bg-white/20 backdrop-blur-sm border border-white/30">
              <img 
                src="/src/assets/companion-care.jpg" 
                alt="Betreuung"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nature-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold font-nunito">Betreuung</h4>
                  <p className="text-sm font-source">Mit Einfühlungsvermögen</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl aspect-square bg-white/20 backdrop-blur-sm border border-white/30">
              <img 
                src="/src/assets/household-help.jpg" 
                alt="Hauswirtschaft"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nature-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold font-nunito">Hauswirtschaft</h4>
                  <p className="text-sm font-source">Alltagsunterstützung</p>
                </div>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl aspect-square bg-white/20 backdrop-blur-sm border border-white/30">
              <img 
                src="/src/assets/hero-care.jpg" 
                alt="24h Pflege"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nature-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-semibold font-nunito">24h Betreuung</h4>
                  <p className="text-sm font-source">Rund um die Uhr</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="default" size="lg" className="bg-nature-charcoal hover:bg-nature-charcoal/90 text-white font-nunito">
              Mehr über unsere Leistungen erfahren
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white/10 p-1">
                <img 
                  src="/lovable-uploads/7e9df2db-9333-4d29-85cc-b32f727b93cc.png" 
                  alt="Natura Pflegedienst Logo"
                  className="w-full h-full object-contain"
                />
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
              Seit über 15 Jahren sind wir Ihr vertrauensvoller Partner für 
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
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6 font-nunito">
                {category.title}
              </h4>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-white/80 hover:text-white transition-colors font-source text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
                MDK Note 1,2
              </div>
              <div className="bg-white/10 rounded-lg px-3 py-2 text-xs font-semibold font-nunito">
                ISO 9001
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;