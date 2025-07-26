import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-nature-charcoal mb-8 font-nunito">Impressum</h1>
          
          <div className="bg-white rounded-xl p-8 shadow-soft space-y-6 font-source">
            <div>
              <h2 className="text-xl font-bold text-nature-charcoal mb-4 font-nunito">Angaben gemäß § 5 TMG</h2>
              <p>
                Natura Pflegedienst GmbH<br />
                Killianstraße 119a<br />
                90425 Nürnberg
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-nature-charcoal mb-4 font-nunito">Kontakt</h2>
              <p>
                Telefon: 0911-123456<br />
                E-Mail: info@natura-pflegedienst.de
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-nature-charcoal mb-4 font-nunito">Handelsregister</h2>
              <p>
                Handelsregister: HRB 12345<br />
                Registergericht: Amtsgericht Nürnberg
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-nature-charcoal mb-4 font-nunito">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                DE123456789
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impressum;