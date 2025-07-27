import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Banner */}
      <section className="relative py-32 overflow-hidden">
        {/* Banner Background */}
        <div className="absolute inset-0">
          <img 
            src="/src/assets/hero-care.jpg" 
            alt="Natura Pflegedienst GmbH Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-nature-charcoal/80 via-nature-charcoal/60 to-nature-charcoal/80"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-nunito leading-tight">
              Über <span className="text-nature-coral">Natura Pflegedienst GmbH</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-source leading-relaxed">
              Ihr neuer vertrauensvoller Partner für professionelle Pflege in Nürnberg
            </p>
            
            {/* Decorative Elements */}
            <div className="flex items-center justify-center space-x-4 mt-12">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-nature-coral"></div>
              <div className="w-3 h-3 bg-nature-coral rounded-full"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-nature-coral"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Story Section */}
      <section className="py-20 bg-gradient-to-br from-nature-sage/5 via-nature-cream/20 to-nature-teal/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-nature-coral rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-nature-sage rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-nature-teal rounded-full blur-2xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-nature-sage/10 px-4 py-2 rounded-full text-sm font-source text-nature-sage mb-4">
                  <div className="w-2 h-2 bg-nature-sage rounded-full animate-pulse"></div>
                  <span>Neu ab Oktober 2025</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-nature-charcoal font-nunito leading-tight">
                  Willkommen bei{" "}
                  <span className="text-transparent bg-gradient-to-r from-nature-sage to-nature-teal bg-clip-text">
                    Natura Pflegedienst
                  </span>{" "}
                  GmbH
                </h2>
                
                <h3 className="text-2xl font-semibold text-nature-coral font-nunito">
                  Moderne Pflege mit Herz und Verstand
                </h3>
              </div>
              
              <div className="space-y-6 text-lg font-source text-muted-foreground leading-relaxed">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-nature-sage shadow-soft">
                  <p>
                    Willkommen bei Natura Pflegedienst GmbH. Wir starten ab 2025 mit einem jungen, dynamischen und leidenschaftlichen
                    Team von Pflegefachkräften – bei uns steht die <strong className="text-nature-sage">Leidenschaft für den Beruf</strong> immer an erster Stelle.
                  </p>
                </div>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border-l-4 border-nature-coral shadow-soft">
                  <p>
                    Wir sind überzeugt, dass Pflege mehr ist als nur medizinische Versorgung. Bei Natura Pflege verbinden wir
                    <strong className="text-nature-coral"> traditionelle Fürsorge mit innovativen Konzepten</strong>, um eine Betreuung zu bieten, die
                    sowohl fachlich exzellent als auch menschlich nah ist.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-nature-sage/10 to-nature-teal/10 rounded-xl p-6 border border-nature-sage/20 shadow-soft">
                  <p className="text-nature-charcoal font-semibold text-xl">
                    <span className="text-2xl">🌿</span> Vertrauen Sie Natura Pflege – weil Ihre Gesundheit und Ihr Wohlbefinden in den besten Händen sind.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Stats Grid */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white to-nature-cream/50 rounded-2xl p-8 shadow-lg border border-nature-sage/10">
                <h4 className="text-2xl font-bold text-nature-charcoal mb-8 text-center font-nunito">
                  Unser Versprechen
                </h4>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Users, title: "2025", subtitle: "Unser Start", color: "nature-sage", bgColor: "nature-sage/10" },
                    { icon: Award, title: "100%", subtitle: "Qualifiziert", color: "nature-coral", bgColor: "nature-coral/10" },
                    { icon: Heart, title: "24/7", subtitle: "Verfügbarkeit", color: "nature-teal", bgColor: "nature-teal/10" },
                    { icon: Users, title: "Jung", subtitle: "Dynamisches Team", color: "nature-beige", bgColor: "nature-beige/20" }
                  ].map((stat, index) => (
                    <div key={index} className={`text-center p-4 bg-${stat.bgColor} rounded-xl border border-${stat.color}/20 hover:scale-105 transition-transform duration-300`}>
                      <div className={`w-12 h-12 mx-auto mb-3 bg-${stat.color} rounded-full flex items-center justify-center`}>
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className={`text-2xl font-bold text-${stat.color} font-nunito`}>{stat.title}</div>
                      <div className="text-sm text-muted-foreground font-source">{stat.subtitle}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-nature-sage to-nature-teal text-white px-6 py-3 rounded-full font-semibold">
                    <span>🌍</span>
                    <span>Internationale Pflegequalität</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-nature-cream/30 via-white to-nature-sage/5 relative">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-nature-teal/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-nature-coral/10 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-nature-sage/10 px-4 py-2 rounded-full text-sm font-source text-nature-sage mb-6">
              <span>💎</span>
              <span>Unsere Grundwerte</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
              Unsere{" "}
              <span className="text-transparent bg-gradient-to-r from-nature-coral to-nature-teal bg-clip-text">
                Werte
              </span>
            </h2>
            <p className="text-xl text-muted-foreground font-source max-w-3xl mx-auto leading-relaxed">
              Diese Prinzipien leiten unser tägliches Handeln und prägen unsere Beziehung zu unseren Klienten
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Lebensentfaltung und Selbstbestimmung",
                description: "Bei Natura Pflege fördern wir die individuelle Entfaltung jedes Einzelnen. Unser Ziel ist es, unsere Klienten dabei zu unterstützen, ihre eigenen Wünsche und Ziele zu verfolgen und ihr volles Potenzial auszuschöpfen – immer begleitet von professioneller, empathischer Unterstützung.",
                icon: "🌱",
                gradient: "from-nature-sage to-nature-teal",
                borderColor: "nature-sage"
              },
              {
                title: "Herzliche Wertschätzung und Verbundenheit",
                description: "Unsere Pflege basiert auf einer tief empfundenen, authentischen Wertschätzung. Wir begegnen jedem Menschen mit Wärme, Empathie und Offenheit, sodass sich unsere Klienten und deren Angehörige als Teil einer unterstützenden Gemeinschaft fühlen. Für uns ist Pflege ein partnerschaftlicher Prozess, der auf echtem Miteinander beruht.",
                icon: "❤️",
                gradient: "from-nature-coral to-rose-400",
                borderColor: "nature-coral"
              },
              {
                title: "Inspiration und Empowerment",
                description: "Wir sind überzeugt, dass echte Pflege mehr bedeutet als reine Versorgung – sie soll inspirieren und befähigen. Durch individuell zugeschnittene Betreuung ermutigen wir unsere Klienten, ihre innere Stärke zu entdecken, selbstbewusst neue Wege zu gehen und aktiv am Leben teilzuhaben.",
                icon: "⭐",
                gradient: "from-nature-teal to-blue-400",
                borderColor: "nature-teal"
              },
              {
                title: "Ganzheitliche Fürsorge",
                description: "Unsere Philosophie vereint körperliche, emotionale und soziale Betreuung zu einem umfassenden Pflegeansatz. Wir schaffen ein Umfeld, in dem sich jeder sicher, verstanden und gestärkt fühlt – weil wir wissen, dass wahre Fürsorge auf einer ganzheitlichen Balance beruht.",
                icon: "🌸",
                gradient: "from-nature-beige to-amber-300",
                borderColor: "nature-beige"
              }
            ].map((value, index) => (
              <div key={index} className={`group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-${value.borderColor}/20 hover:border-${value.borderColor}/40 transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`text-4xl p-3 bg-gradient-to-r ${value.gradient} rounded-xl text-white flex items-center justify-center w-16 h-16 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold text-nature-charcoal mb-2 font-nunito group-hover:text-${value.borderColor} transition-colors duration-300`}>
                      {value.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground font-source leading-relaxed text-base group-hover:text-nature-charcoal transition-colors duration-300">
                  {value.description}
                </p>
                
                {/* Decorative bottom accent */}
                <div className={`mt-6 h-1 bg-gradient-to-r ${value.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-nature-sage via-nature-teal to-nature-coral text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <span>🌍</span>
              <span>Internationale Werte • Deutsche Standards</span>
              <span>🌿</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pflegeleitbild Section */}
      <section className="py-20 bg-gradient-to-br from-nature-teal/5 via-nature-cream/10 to-nature-coral/5 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" 
               style={{
                 backgroundImage: `radial-gradient(circle at 25% 25%, #84cc16 0%, transparent 50%), 
                                  radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)`,
               }}>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-nature-teal/10 px-4 py-2 rounded-full text-sm font-source text-nature-teal mb-6">
                <span>📋</span>
                <span>Unser Leitbild</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
                Unser{" "}
                <span className="text-transparent bg-gradient-to-r from-nature-teal to-nature-sage bg-clip-text">
                  Pflegeleitbild
                </span>
              </h2>
              <p className="text-xl text-muted-foreground font-source max-w-3xl mx-auto">
                Leitlinien und Werte unserer täglichen Arbeit
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-12">
              {/* Introduction Cards */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-white to-nature-cream/30 rounded-2xl p-8 shadow-lg border border-nature-sage/20">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-nature-sage to-nature-teal rounded-xl flex items-center justify-center text-white text-2xl">
                      🌍
                    </div>
                    <h4 className="text-xl font-bold text-nature-charcoal font-nunito">
                      Internationale Pflegetradition
                    </h4>
                  </div>
                  <p className="text-muted-foreground font-source leading-relaxed">
                    Als qualifizierter Pflegedienst in Nürnberg sind wir überzeugt, dass jeder Mensch das
                    Recht hat, in Übereinstimmung mit seinen individuellen Wünschen, Bedürfnissen, seinem Glauben und seiner
                    kulturellen Identität gepflegt zu werden. Unser Ansatz verbindet moderne Pflegestandards mit den zeitlosen
                    Werten internationaler Pflegetradition – <strong className="text-nature-sage">Respekt, Herzlichkeit und gegenseitige Verbundenheit</strong>.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-white to-nature-coral/10 rounded-2xl p-8 shadow-lg border border-nature-coral/20">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-nature-coral to-rose-400 rounded-xl flex items-center justify-center text-white text-2xl">
                      💝
                    </div>
                    <h4 className="text-xl font-bold text-nature-charcoal font-nunito">
                      Ganzheitliche Betreuung
                    </h4>
                  </div>
                  <p className="text-muted-foreground font-source leading-relaxed">
                    Unsere Mitarbeiterinnen und Mitarbeiter haben sich bewusst für die Arbeit mit älteren und
                    pflegebedürftigen Menschen sowie deren Angehörigen entschieden. Für uns steht der Mensch im Mittelpunkt:
                    Wir legen großen Wert auf eine ganzheitliche Betreuung, bei der <strong className="text-nature-coral">Körper, Geist und Seele</strong> gleichermaßen
                    Beachtung finden.
                  </p>
                </div>
              </div>

              {/* Partnership Section */}
              <div className="bg-gradient-to-r from-nature-cream/20 via-white to-nature-sage/10 rounded-2xl p-10 shadow-lg border border-nature-sage/20">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-3 bg-nature-sage/10 px-6 py-3 rounded-full">
                    <span className="text-2xl">🤝</span>
                    <h4 className="text-2xl font-bold text-nature-charcoal font-nunito">
                      Einfühlsame Betreuung und partnerschaftliche Zusammenarbeit
                    </h4>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground font-source leading-relaxed text-center max-w-4xl mx-auto">
                  Die Zufriedenheit und das Wohlbefinden unserer Patienten haben für uns oberste Priorität. Wir
                  berücksichtigen individuelle Lebensgewohnheiten, kulturelle Hintergründe und persönliche Fähigkeiten, um
                  maßgeschneiderte Pflegekonzepte zu entwickeln, die zur Erhaltung und Förderung der Selbstständigkeit
                  beitragen. Unser Team arbeitet zielorientiert, ressourcenschonend und stets mit dem Bestreben, eine
                  Atmosphäre des Vertrauens und der gegenseitigen Wertschätzung zu schaffen.
                </p>
              </div>

              {/* Goals Section */}
              <div className="bg-white rounded-2xl p-10 shadow-xl border border-nature-teal/20">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center space-x-3 bg-nature-teal/10 px-6 py-3 rounded-full mb-6">
                    <span className="text-2xl">🎯</span>
                    <h4 className="text-2xl font-bold text-nature-charcoal font-nunito">
                      Unsere Ziele
                    </h4>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Ganzheitliche Beratung und Betreuung",
                      description: "Wir beraten alle Betroffenen kompetent und sorgen dafür, dass sich Patienten und Angehörige gut aufgehoben fühlen.",
                      icon: "🩺",
                      gradient: "from-nature-sage to-nature-teal"
                    },
                    {
                      title: "Vermeidung von Isolation",
                      description: "Durch aktive Förderung sozialer Kontakte stellen wir sicher, dass unsere Patienten nicht allein gelassen werden, sondern in eine lebendige Gemeinschaft eingebunden sind.",
                      icon: "🤗",
                      gradient: "from-nature-coral to-rose-400"
                    },
                    {
                      title: "Förderung der Selbstständigkeit",
                      description: "Wir unterstützen unsere Klienten dabei, ihre Selbstbestimmung zu bewahren und aktiv an der Gestaltung ihres Alltags teilzunehmen.",
                      icon: "💪",
                      gradient: "from-nature-teal to-blue-400"
                    },
                    {
                      title: "Lebensqualität steigern",
                      description: "Unser Ziel ist es, jedem Menschen ein erfülltes und würdevolles Leben zu ermöglichen, das auf seinen individuellen Wünschen basiert.",
                      icon: "🌈",
                      gradient: "from-nature-beige to-amber-300"
                    }
                  ].map((goal, index) => (
                    <div key={index} className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${goal.gradient} rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {goal.icon}
                        </div>
                        <h5 className="font-bold text-nature-charcoal font-nunito text-lg group-hover:text-nature-sage transition-colors duration-300">
                          {goal.title}
                        </h5>
                      </div>
                      <p className="text-muted-foreground font-source leading-relaxed group-hover:text-nature-charcoal transition-colors duration-300">
                        {goal.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Closing Statement */}
              <div className="text-center bg-gradient-to-r from-nature-sage/10 via-nature-teal/10 to-nature-coral/10 rounded-2xl p-10 border border-nature-sage/20">
                <div className="max-w-4xl mx-auto">
                  <div className="text-4xl mb-6">🌸</div>
                  <p className="text-xl text-nature-charcoal font-semibold font-nunito leading-relaxed mb-4">
                    Wir bei Natura Pflege glauben, dass Pflege mehr ist als nur ein Beruf – sie ist eine Berufung, die wir mit
                    Leidenschaft, Engagement und tiefem Respekt für den Menschen leben.
                  </p>
                  <p className="text-lg text-muted-foreground font-source">
                    Vertrauen Sie auf unsere Pflege mit Herz, Verstand und der warmen Verbundenheit unserer interkulturellen Erfahrung.
                  </p>
                  
                  <div className="flex justify-center items-center space-x-4 mt-8">
                    <div className="w-16 h-1 bg-gradient-to-r from-nature-sage to-nature-teal rounded-full"></div>
                    <span className="text-2xl">🌟</span>
                    <div className="w-16 h-1 bg-gradient-to-r from-nature-teal to-nature-coral rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-nature-sage/10 via-nature-cream/20 to-nature-coral/10 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-24 h-24 bg-nature-teal rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-nature-coral rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-nature-sage rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white via-nature-cream/30 to-white rounded-3xl p-12 md:p-16 text-center shadow-2xl border border-nature-sage/20 relative overflow-hidden">
              {/* Inner decoration */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-nature-sage via-nature-teal to-nature-coral"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-nature-sage/10 px-4 py-2 rounded-full text-sm font-source text-nature-sage mb-6">
                  <span>🤝</span>
                  <span>Persönlicher Kontakt</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-nunito">
                  Lernen Sie{" "}
                  <span className="text-transparent bg-gradient-to-r from-nature-sage to-nature-teal bg-clip-text">
                    uns persönlich
                  </span>{" "}
                  kennen
                </h2>
                
                <p className="text-xl mb-8 text-muted-foreground font-source leading-relaxed max-w-2xl mx-auto">
                  Vereinbaren Sie noch heute ein unverbindliches Beratungsgespräch und erfahren Sie mehr über unseren 
                  einzigartigen Pflegeansatz
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button size="lg" className="bg-gradient-to-r from-nature-sage to-nature-teal hover:from-nature-sage/90 hover:to-nature-teal/90 text-white font-nunito group px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                    <a href="/contact">
                      <span>📞</span>
                      Kontakt aufnehmen
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  
                  <Button variant="outline" size="lg" className="border-2 border-nature-coral text-nature-coral hover:bg-nature-coral hover:text-white font-nunito px-8 py-4 text-lg transition-all duration-300" asChild>
                    <a href="/digital-beratung">
                      <span>💬</span>
                      Kostenlose Beratung
                    </a>
                  </Button>
                </div>
                
                <div className="flex items-center justify-center space-x-8 mt-12 pt-8 border-t border-nature-sage/20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-nature-sage font-nunito">24/7</div>
                    <div className="text-sm text-muted-foreground font-source">Erreichbarkeit</div>
                  </div>
                  <div className="w-px h-12 bg-nature-sage/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-nature-teal font-nunito">100%</div>
                    <div className="text-sm text-muted-foreground font-source">Kostenlos</div>
                  </div>
                  <div className="w-px h-12 bg-nature-sage/20"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-nature-coral font-nunito">⭐</div>
                    <div className="text-sm text-muted-foreground font-source">Qualität</div>
                  </div>
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

export default About;