import { Phone, Menu, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
              <img 
                src="/lovable-uploads/7e9df2db-9333-4d29-85cc-b32f727b93cc.png" 
                alt="Natura Pflegedienst Logo"
                className="w-full h-full object-contain"
              />
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
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-source">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-source">
              Über uns
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors font-source">
              Leistungen
            </Link>
            <Link to="/team" className="text-foreground hover:text-primary transition-colors font-source">
              Team
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors font-source">
              Blog
            </Link>
            <Link to="/faq" className="text-foreground hover:text-primary transition-colors font-source">
              FAQ
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-source">
              Kontakt
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span className="font-source">0911-123456</span>
            </div>
            <Button variant="coral" size="lg" className="font-nunito" asChild>
              <Link to="/digital-beratung">Termin buchen</Link>
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
              <Link to="/" className="text-foreground hover:text-primary transition-colors font-source py-2">
                Home
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors font-source py-2">
                Über uns
              </Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors font-source py-2">
                Leistungen
              </Link>
              <Link to="/team" className="text-foreground hover:text-primary transition-colors font-source py-2">
                Team
              </Link>
              <Link to="/blog" className="text-foreground hover:text-primary transition-colors font-source py-2">
                Blog
              </Link>
              <Link to="/faq" className="text-foreground hover:text-primary transition-colors font-source py-2">
                FAQ
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-source py-2">
                Kontakt
              </Link>
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