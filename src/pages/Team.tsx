import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
              Unser <span className="text-nature-sage">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground font-source">
              Lernen Sie unser erfahrenes und einfühlsames Pflegeteam kennen
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;