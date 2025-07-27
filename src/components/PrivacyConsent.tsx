import React, { useState, useEffect } from 'react';
import { Shield, Cookie, X, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const PrivacyConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('natura-privacy-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('natura-privacy-consent', 'accepted');
    localStorage.setItem('natura-privacy-date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('natura-privacy-consent', 'declined');
    localStorage.setItem('natura-privacy-date', new Date().toISOString());
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    // For selected cookies, we'll implement this later
    localStorage.setItem('natura-privacy-consent', 'selected');
    localStorage.setItem('natura-privacy-date', new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999]" />
      
      {/* Privacy Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[10000] p-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-nature-sage/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-nature-sage" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-nature-charcoal font-nunito">
                    Datenschutz & Cookies
                  </h3>
                  <p className="text-sm text-muted-foreground font-source">
                    Natura Pflegedienst respektiert Ihre Privatsphäre
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleDecline}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Basic Information */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground font-source leading-relaxed">
                Wir verwenden Cookies und ähnliche Technologien, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                Einige Cookies sind notwendig für die Funktionalität der Website, andere helfen uns, unsere Inhalte zu verbessern 
                und Ihnen relevante Informationen zu unseren Pflegeleistungen anzuzeigen.
              </p>
            </div>

            {/* Cookie Categories - Only show if details are expanded */}
            {showDetails && (
              <div className="mb-6 space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-nature-charcoal mb-2 font-nunito flex items-center">
                    <Cookie className="w-4 h-4 mr-2" />
                    Notwendige Cookies
                  </h4>
                  <p className="text-sm text-muted-foreground font-source">
                    Diese Cookies sind für die grundlegende Funktionalität der Website erforderlich und können nicht deaktiviert werden. 
                    Sie speichern beispielsweise Ihre Datenschutz-Einstellungen.
                  </p>
                </div>

                <div className="bg-nature-sage/5 rounded-lg p-4">
                  <h4 className="font-semibold text-nature-charcoal mb-2 font-nunito">
                    Funktionale Cookies
                  </h4>
                  <p className="text-sm text-muted-foreground font-source">
                    Diese Cookies ermöglichen erweiterte Funktionen wie den Chatbot und merken sich Ihre Präferenzen 
                    für zukünftige Besuche.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-nature-charcoal mb-2 font-nunito">
                    Analyse & Performance
                  </h4>
                  <p className="text-sm text-muted-foreground font-source">
                    Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen, damit wir sie verbessern können. 
                    Alle Daten werden anonymisiert erhoben.
                  </p>
                </div>
              </div>
            )}

            {/* Legal Information */}
            <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-800 font-source">
                <strong>Rechtliche Grundlage:</strong> Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. a DSGVO auf Basis Ihrer Einwilligung. 
                Sie können Ihre Einwilligung jederzeit widerrufen.
              </p>
            </div>

            {/* Links */}
            <div className="mb-6 flex flex-wrap gap-4 text-sm font-source">
              <a 
                href="/datenschutz" 
                className="text-nature-sage hover:text-nature-sage/80 underline flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Vollständige Datenschutzerklärung
              </a>
              <a 
                href="/impressum" 
                className="text-nature-sage hover:text-nature-sage/80 underline flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Impressum
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={handleAccept}
                className="bg-nature-sage hover:bg-nature-sage/90 text-white font-nunito"
              >
                Alle akzeptieren
              </Button>
              
              <Button
                onClick={handleDecline}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-nunito"
              >
                Alle ablehnen
              </Button>

              <Button
                onClick={() => setShowDetails(!showDetails)}
                variant="ghost"
                className="text-nature-sage hover:text-nature-sage/80 font-nunito"
              >
                {showDetails ? 'Weniger anzeigen' : 'Details anzeigen'}
              </Button>
            </div>

            {/* Additional Info */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-muted-foreground font-source">
                Natura Pflegedienst GmbH • Killianstraße 119a, 90425 Nürnberg • 
                Diese Einstellungen können Sie jederzeit in der Fußzeile unserer Website ändern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyConsent; 