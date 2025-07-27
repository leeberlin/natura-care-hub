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
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity group">
            <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-nature-sage/10 to-nature-teal/10 ring-2 ring-nature-sage/20 group-hover:ring-nature-sage/40 transition-all">
              <img 
                src="/lovable-uploads/7e9df2db-9333-4d29-85cc-b32f727b93cc.png" 
                alt="Natura Pflegedienst Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline space-x-1">
                <h1 className="text-xl font-bold text-nature-charcoal font-nunito">
                  Natura Pflegedienst
                </h1>
                <span className="text-xs font-medium text-nature-charcoal/50 font-nunito">
                  GmbH
                </span>
              </div>
              <p className="text-sm text-nature-coral font-source font-medium">
                Liebevolle Pflege zuhause
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-nature-sage transition-colors font-source font-medium">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-nature-sage transition-colors font-source font-medium">
              Über uns
            </Link>
            <Link to="/services" className="text-foreground hover:text-nature-sage transition-colors font-source font-medium">
              Leistungen
            </Link>
            <Link to="/pflegeberatung" className="text-foreground hover:text-nature-sage transition-colors font-source font-medium">
              Pflegeberatung
            </Link>
            <Link to="/team" className="text-foreground hover:text-nature-sage transition-colors font-source font-medium">
              Team
            </Link>
            <Link to="/blog" className="text-foreground hover:text-nature-sage transition-colors font-source font-medium">
              Blog
            </Link>
            <Link to="/faq" className="text-foreground hover:text-nature-sage transition-colors font-source font-medium">
              FAQ
            </Link>
            <Link to="/contact" className="text-foreground hover:text-nature-sage transition-colors font-source font-medium">
              Kontakt
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-nature-coral" />
              <span className="font-source font-medium">0911-123456</span>
            </div>
            <Button variant="coral" size="lg" className="font-nunito font-semibold" asChild>
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
              <Link to="/" className="text-foreground hover:text-nature-sage transition-colors font-source font-medium py-2">
                Home
              </Link>
              <Link to="/about" className="text-foreground hover:text-nature-sage transition-colors font-source font-medium py-2">
                Über uns
              </Link>
              <Link to="/services" className="text-foreground hover:text-nature-sage transition-colors font-source font-medium py-2">
                Leistungen
              </Link>
              <Link to="/pflegeberatung" className="text-foreground hover:text-nature-sage transition-colors font-source font-medium py-2">
                Pflegeberatung
              </Link>
              <Link to="/team" className="text-foreground hover:text-nature-sage transition-colors font-source font-medium py-2">
                Team
              </Link>
              <Link to="/blog" className="text-foreground hover:text-nature-sage transition-colors font-source font-medium py-2">
                Blog
              </Link>
              <Link to="/faq" className="text-foreground hover:text-nature-sage transition-colors font-source font-medium py-2">
                FAQ
              </Link>
              <Link to="/contact" className="text-foreground hover:text-nature-sage transition-colors font-source font-medium py-2">
                Kontakt
              </Link>
            </nav>
            <div className="mt-4 pt-4 border-t border-border/50">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                <Phone className="h-4 w-4 text-nature-coral" />
                <span className="font-source font-medium">0911-123456</span>
              </div>
              <Button variant="coral" size="lg" className="w-full font-nunito font-semibold">
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