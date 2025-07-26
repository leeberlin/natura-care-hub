import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AGB = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-nature-charcoal mb-8 font-nunito">
            Allgemeine Geschäftsbedingungen
          </h1>
          
          <div className="bg-white rounded-xl p-8 shadow-soft space-y-6 font-source">
            <div>
              <h2 className="text-xl font-bold text-nature-charcoal mb-4 font-nunito">§ 1 Geltungsbereich</h2>
              <p className="mb-4">
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der Natura Pflegedienst GmbH 
                und den Auftraggebern über die Erbringung von Pflegeleistungen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-nature-charcoal mb-4 font-nunito">§ 2 Vertragsabschluss</h2>
              <p className="mb-4">
                Der Vertrag kommt durch schriftliche Vereinbarung zwischen dem Auftraggeber und der Natura Pflegedienst GmbH 
                zustande. Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-nature-charcoal mb-4 font-nunito">§ 3 Leistungsumfang</h2>
              <p className="mb-4">
                Art und Umfang der zu erbringenden Pflegeleistungen werden im individuellen Pflegevertrag festgelegt. 
                Grundlage sind die jeweils gültigen Rahmenverträge mit den Pflegekassen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-nature-charcoal mb-4 font-nunito">§ 4 Vergütung</h2>
              <p className="mb-4">
                Die Vergütung richtet sich nach den mit den Kostenträgern vereinbarten Preisen. 
                Eigenanteile werden dem Auftraggeber in Rechnung gestellt.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-nature-charcoal mb-4 font-nunito">§ 5 Kündigung</h2>
              <p>
                Der Vertrag kann von beiden Seiten mit einer Frist von 14 Tagen zum Monatsende gekündigt werden. 
                Das Recht zur fristlosen Kündigung aus wichtigem Grund bleibt unberührt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AGB;