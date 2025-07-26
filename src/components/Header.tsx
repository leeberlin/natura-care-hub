import { Phone, Menu, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl font-nunito">N</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-nature-charcoal font-nunito">
                Natura Pflegedienst
              </h1>
              <p className="text-sm text-muted-foreground font-source">
                Zuhause umsorgt
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-source">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors font-source">
              Leistungen
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-source">
              Über uns
            </a>
            <a href="#costs" className="text-foreground hover:text-primary transition-colors font-source">
              Kosten
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-source">
              Kontakt
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="font-source">0911-123456</span>
            </div>
            <Button variant="coral" size="lg" className="font-nunito">
              Kostenlose Beratung
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu öffnen"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-border/50 pt-4 mt-4">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-source py-2">
                Home
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-source py-2">
                Leistungen
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-source py-2">
                Über uns
              </a>
              <a href="#costs" className="text-foreground hover:text-primary transition-colors font-source py-2">
                Kosten
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-source py-2">
                Kontakt
              </a>
            </nav>
            <div className="mt-4 pt-4 border-t border-border/50">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                <Phone className="h-4 w-4" />
                <span className="font-source">0911-123456</span>
              </div>
              <Button variant="coral" size="lg" className="w-full font-nunito">
                Kostenlose Beratung
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;