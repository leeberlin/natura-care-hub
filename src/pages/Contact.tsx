import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react";
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

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
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

          {/* Map Section */}
          <div className="bg-white rounded-xl p-8 shadow-soft">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-nature-charcoal mb-4 font-nunito">
                <span className="text-nature-sage">Unseren Standort</span> finden
              </h2>
              <p className="text-lg text-muted-foreground font-source">
                Besuchen Sie uns in unserem Büro in Nürnberg oder nutzen Sie die Karte für die Anfahrt
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Map */}
              <div className="lg:col-span-2">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500.123456789!2d11.044445!3d49.456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f573b2b0b1b0b%3A0x123456789abcdef!2sKillianstraße%20119a%2C%2090425%20Nürnberg%2C%20Germany!5e0!3m2!1sen!2sde!4v1234567890123!5m2!1sen!2sde"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Natura Pflegedienst Standort"
                    className="w-full"
                  ></iframe>
                  {/* Map overlay with company info */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-5 w-5 text-nature-coral" />
                      <h3 className="font-bold text-nature-charcoal font-nunito">Natura Pflegedienst</h3>
                    </div>
                    <p className="text-sm text-muted-foreground font-source">
                      Killianstraße 119a<br />
                      90425 Nürnberg
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Info & Actions */}
              <div className="space-y-6">
                <div className="bg-nature-sage/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-nature-charcoal mb-4 font-nunito flex items-center">
                    <Navigation className="h-5 w-5 mr-2 text-nature-sage" />
                    Anfahrt
                  </h3>
                  <div className="space-y-3 text-sm font-source">
                    <div>
                      <p className="font-semibold text-nature-charcoal">Mit dem Auto:</p>
                      <p className="text-muted-foreground">Parkplätze direkt vor dem Gebäude verfügbar</p>
                    </div>
                    <div>
                      <p className="font-semibold text-nature-charcoal">Öffentliche Verkehrsmittel:</p>
                      <p className="text-muted-foreground">Bus-Haltestelle "Killianplatz" - 2 Min. Fußweg</p>
                    </div>
                    <div>
                      <p className="font-semibold text-nature-charcoal">Barrierefreiheit:</p>
                      <p className="text-muted-foreground">Rollstuhlgerechter Zugang vorhanden</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://www.google.com/maps/dir//Killianstraße+119a,+90425+Nürnberg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-nature-sage text-white rounded-lg hover:bg-nature-sage/90 transition-colors font-source font-semibold"
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Route planen
                  </a>
                  
                  <a
                    href="tel:0911123456"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-nature-coral text-nature-coral rounded-lg hover:bg-nature-coral hover:text-white transition-colors font-source font-semibold"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Anrufen vor Besuch
                  </a>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-800 font-source">
                    💡 <strong>Tipp:</strong> Vereinbaren Sie vorab einen Termin für eine persönliche Beratung!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;