import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-nature-charcoal mb-8 font-nunito">Datenschutzerklärung</h1>
          
          <div className="bg-white rounded-xl p-8 shadow-soft space-y-6 font-source">
            <div>
              <h2 className="text-xl font-bold text-nature-charcoal mb-4 font-nunito">1. Datenschutz auf einen Blick</h2>
              <p className="mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-nature-charcoal mb-4 font-nunito">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-lg font-semibold text-nature-charcoal mb-2 font-nunito">Datenschutz</h3>
              <p className="mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
                personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie 
                dieser Datenschutzerklärung.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-nature-charcoal mb-4 font-nunito">3. Datenerfassung auf unserer Website</h2>
              <h3 className="text-lg font-semibold text-nature-charcoal mb-2 font-nunito">Kontaktformular</h3>
              <p className="mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                von Anschlussfragen bei uns gespeichert.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-nature-charcoal mb-4 font-nunito">4. Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, 
                Sperrung oder Löschung dieser Daten zu verlangen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Datenschutz;