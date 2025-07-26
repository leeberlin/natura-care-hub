import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
              <span className="text-nature-sage">Kontakt</span> aufnehmen
            </h1>
            <p className="text-xl text-muted-foreground font-source">
              Wir sind jederzeit für Sie da - 24 Stunden am Tag, 7 Tage die Woche
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-soft">
                <h2 className="text-2xl font-bold text-nature-charcoal mb-6 font-nunito">
                  Kontaktinformationen
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-nature-coral flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-nature-charcoal font-nunito">Telefon</h3>
                      <p className="text-muted-foreground font-source">0911-123456</p>
                      <p className="text-sm text-nature-sage font-source">24/7 erreichbar</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-nature-coral flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-nature-charcoal font-nunito">E-Mail</h3>
                      <p className="text-muted-foreground font-source">info@natura-pflegedienst.de</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-nature-coral flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-nature-charcoal font-nunito">Adresse</h3>
                      <p className="text-muted-foreground font-source">
                        Killianstraße 119a<br />
                        90425 Nürnberg
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-nature-coral flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-nature-charcoal font-nunito">Bürozeiten</h3>
                      <p className="text-muted-foreground font-source">
                        Mo-Fr: 8:00 - 18:00 Uhr<br />
                        Sa: 9:00 - 14:00 Uhr<br />
                        Notfall: 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-nature-cream/30 rounded-xl p-8">
                <h3 className="text-xl font-bold text-nature-charcoal mb-4 font-nunito">
                  Sofortige Hilfe benötigt?
                </h3>
                <p className="text-muted-foreground mb-6 font-source">
                  Bei Notfällen sind wir rund um die Uhr für Sie erreichbar.
                </p>
                <Button variant="coral" size="lg" className="w-full font-nunito">
                  <Phone className="h-5 w-5" />
                  Notfall-Hotline: 0911-123456
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-nature-charcoal mb-6 font-nunito">
                Nachricht senden
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-nature-charcoal mb-2 font-source">
                      Vorname
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nature-sage font-source"
                      placeholder="Ihr Vorname"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-nature-charcoal mb-2 font-source">
                      Nachname
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nature-sage font-source"
                      placeholder="Ihr Nachname"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-nature-charcoal mb-2 font-source">
                    E-Mail Adresse
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nature-sage font-source"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-nature-charcoal mb-2 font-source">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nature-sage font-source"
                    placeholder="0911-123456"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-nature-charcoal mb-2 font-source">
                    Nachricht
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nature-sage font-source"
                    placeholder="Teilen Sie uns mit, wie wir Ihnen helfen können..."
                  />
                </div>

                <Button type="submit" variant="sage" size="lg" className="w-full font-nunito">
                  Nachricht senden
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;