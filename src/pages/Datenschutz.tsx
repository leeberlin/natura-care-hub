import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

const Datenschutz = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Shield className="h-12 w-12 text-nature-sage mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-nature-charcoal mb-4 font-nunito">
              Datenschutzerklärung
            </h1>
            <p className="text-lg text-muted-foreground font-source">
              Informationen zum Schutz Ihrer personenbezogenen Daten
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Verantwortlicher */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-nunito">Verantwortlicher</CardTitle>
              </CardHeader>
              <CardContent className="font-source space-y-4">
                <div>
                  <h3 className="font-semibold text-nature-charcoal mb-2">Natura Pflegedienst GmbH</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-nature-sage" />
                      <span>Killianstraße 119a, 90425 Nürnberg</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-nature-sage" />
                      <span>0911-123456</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-nature-sage" />
                      <span>info@natura-pflegedienst.de</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Datenschutz auf einen Blick */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-nunito">1. Datenschutz auf einen Blick</CardTitle>
              </CardHeader>
              <CardContent className="font-source space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-nature-charcoal mb-2">Allgemeine Hinweise</h3>
                  <p className="text-muted-foreground">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                    passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                    persönlich identifiziert werden können.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-nature-charcoal mb-2">Datenerfassung auf unserer Website</h3>
                  <p className="text-muted-foreground">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                    können Sie dem Impressum dieser Website entnehmen.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Allgemeine Hinweise */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-nunito">2. Allgemeine Hinweise und Pflichtinformationen</CardTitle>
              </CardHeader>
              <CardContent className="font-source space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-nature-charcoal mb-2">Datenschutz</h3>
                  <p className="text-muted-foreground mb-4">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                    personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie 
                    dieser Datenschutzerklärung.
                  </p>
                  <p className="text-muted-foreground">
                    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
                    Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-nature-charcoal mb-2">Hinweis zur verantwortlichen Stelle</h3>
                  <p className="text-muted-foreground">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist die Natura Pflegedienst GmbH. 
                    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen 
                    über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Datenerfassung */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-nunito">3. Datenerfassung auf unserer Website</CardTitle>
              </CardHeader>
              <CardContent className="font-source space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-nature-charcoal mb-2">Cookies</h3>
                  <p className="text-muted-foreground mb-4">
                    Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner 
                    keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, 
                    effektiver und sicherer zu machen.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-nature-charcoal mb-2">Kontaktformular und Terminbuchung</h3>
                  <p className="text-muted-foreground mb-4">
                    Wenn Sie uns per Kontaktformular oder über unser Terminbuchungssystem Anfragen zukommen lassen, 
                    werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                    zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  </p>
                  <p className="text-muted-foreground">
                    Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt 
                    auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags 
                    zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-nature-charcoal mb-2">Gesundheitsdaten</h3>
                  <p className="text-muted-foreground">
                    Als Pflegedienst verarbeiten wir besondere Kategorien personenbezogener Daten (Gesundheitsdaten) 
                    gemäß Art. 9 DSGVO. Die Verarbeitung erfolgt zur Gesundheitsvorsorge oder für die Erbringung von 
                    Gesundheitsdienstleistungen und ist durch Berufsgeheimnisse geschützt.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Ihre Rechte */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="font-nunito">4. Ihre Rechte</CardTitle>
              </CardHeader>
              <CardContent className="font-source space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-nature-charcoal mb-2">Auskunft, Berichtigung und Löschung</h3>
                  <p className="text-muted-foreground mb-4">
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                    gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                    oder Löschung dieser Daten zu verlangen.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-nature-charcoal mb-2">Einschränkung der Verarbeitung</h3>
                  <p className="text-muted-foreground mb-4">
                    Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. 
                    Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-nature-charcoal mb-2">Widerspruchsrecht</h3>
                  <p className="text-muted-foreground">
                    Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 
                    lit. f DSGVO verarbeitet werden, haben Sie das Recht, Widerspruch gegen die Verarbeitung Ihrer 
                    personenbezogenen Daten einzulegen.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Kontakt */}
            <Card className="shadow-soft bg-nature-sage/5">
              <CardHeader>
                <CardTitle className="font-nunito">Fragen zum Datenschutz?</CardTitle>
              </CardHeader>
              <CardContent className="font-source">
                <p className="text-muted-foreground mb-4">
                  Wenn Sie Fragen zu dieser Datenschutzerklärung haben, wenden Sie sich bitte an uns:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-nature-sage" />
                    <span>0911-123456</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-nature-sage" />
                    <span>datenschutz@natura-pflegedienst.de</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Datenschutz;