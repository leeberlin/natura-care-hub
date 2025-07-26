import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Allgemeine Fragen",
      items: [
        {
          question: "Was ist ein Pflegedienst?",
          answer: "Ein Pflegedienst bietet professionelle Pflege und Betreuung für Menschen, die aufgrund von Alter, Krankheit oder Behinderung Unterstützung benötigen."
        },
        {
          question: "Wer kann Pflegeleistungen in Anspruch nehmen?",
          answer: "Alle Personen mit einem anerkannten Pflegegrad können unsere Leistungen in Anspruch nehmen."
        }
      ]
    },
    {
      title: "Kosten & Finanzierung",
      items: [
        {
          question: "Was kostet ambulante Pflege?",
          answer: "Die Kosten variieren je nach Pflegegrad und benötigten Leistungen. Die Pflegekasse übernimmt einen Teil der Kosten."
        },
        {
          question: "Wie beantrage ich einen Pflegegrad?",
          answer: "Den Antrag stellen Sie bei Ihrer Pflegekasse. Wir unterstützen Sie gerne bei der Antragstellung."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
              Häufig gestellte <span className="text-nature-sage">Fragen</span>
            </h1>
            <p className="text-xl text-muted-foreground font-source">
              Hier finden Sie Antworten auf die wichtigsten Fragen
            </p>
          </div>

          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl p-8 shadow-soft">
                <h2 className="text-2xl font-bold text-nature-charcoal mb-6 font-nunito">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible>
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`item-${categoryIndex}-${itemIndex}`}>
                      <AccordionTrigger className="text-left font-source font-semibold">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground font-source">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;