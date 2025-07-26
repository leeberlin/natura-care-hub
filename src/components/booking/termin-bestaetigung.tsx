import { CheckCircle, Calendar, Clock, User, Phone, Mail, Download, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import { usePrintStyles } from './print-styles';

interface TerminBestaetigungProps {
  bookingData: any;
  beraterInfo: {
    name: string;
    titel: string;
    avatar: string;
  };
}

export function TerminBestaetigung({ bookingData, beraterInfo }: TerminBestaetigungProps) {
  usePrintStyles();
  
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Create formatted HTML for better download
    const htmlContent = `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Terminbestätigung - Natura Pflegedienst GmbH</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
    .header { text-align: center; background: #005F72; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
    .section { margin-bottom: 20px; padding: 15px; border: 1px solid #ddd; border-radius: 8px; }
    .highlight { background: #E6F3F7; padding: 10px; border-radius: 5px; }
    .two-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .contact-info { background: #f8f9fa; padding: 15px; border-radius: 8px; }
    h1, h2, h3 { color: #005F72; }
    .booking-id { font-weight: bold; color: #5DADE2; }
  </style>
</head>
<body>
  <div class="header">
    <h1>TERMINBESTÄTIGUNG</h1>
    <h2>Natura Pflegedienst GmbH</h2>
  </div>
  
  <div class="highlight">
    <p><strong>Buchungs-ID:</strong> <span class="booking-id">${bookingData.bookingId}</span></p>
  </div>
  
  <div class="two-columns">
    <div class="section">
      <h3>📅 Termin Details</h3>
      <p><strong>Datum:</strong> ${format(bookingData.selectedDate, 'EEEE, dd. MMMM yyyy', { locale: de })}</p>
      <p><strong>Uhrzeit:</strong> ${bookingData.selectedTime} Uhr (MEZ)</p>
      <p><strong>Art:</strong> ${getConsultationType(bookingData.contactData?.kommunikations_praeferenz)}</p>
    </div>
    
    <div class="section">
      <h3>👤 Ihre Kontaktdaten</h3>
      <p><strong>Name:</strong> ${bookingData.contactData?.name}</p>
      <p><strong>E-Mail:</strong> ${bookingData.contactData?.email}</p>
      <p><strong>Telefon:</strong> ${bookingData.contactData?.phone}</p>
      <p><strong>Pflegegrad:</strong> ${getPflegegradLabel(bookingData.contactData?.pflegegrad)}</p>
    </div>
  </div>
  
  <div class="section">
    <h3>👨‍⚕️ Ihr Berater</h3>
    <p><strong>Name:</strong> ${beraterInfo.name}</p>
    <p><strong>Titel:</strong> ${beraterInfo.titel}</p>
  </div>
  
  <div class="section">
    <h3>📋 Vorbereitung für Ihren Termin</h3>
    <ul>
      <li>✓ Versicherungskarte bereithalten (Kranken- und Pflegeversicherung)</li>
      <li>✓ Aktuelle Pflegebescheide sammeln (falls vorhanden)</li>
      <li>✓ Fragen zur Pflegesituation notieren</li>
      ${bookingData.contactData?.kommunikations_praeferenz === 'video' ? '<li>✓ Internetverbindung und Kamera/Mikrofon prüfen</li>' : ''}
    </ul>
  </div>
  
  <div class="contact-info">
    <h3>📞 Kontakt bei Fragen</h3>
    <p><strong>Natura Pflegedienst GmbH</strong><br>
    Killianstraße 119a<br>
    90425 Nürnberg</p>
    <p><strong>Telefon:</strong> +49 911 123456<br>
    <strong>E-Mail:</strong> info@natura-pflegedienst.de</p>
    <p><em>Bei Terminänderungen oder -absagen kontaktieren Sie uns bitte mindestens 24 Stunden im Voraus.</em></p>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Terminbestätigung_${bookingData.bookingId}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getConsultationType = (type: string) => {
    switch (type) {
      case 'video': return 'Video-Beratung';
      case 'telefon': return 'Telefon-Beratung';
      case 'vor-ort': return 'Vor-Ort-Beratung';
      default: return 'Video-Beratung';
    }
  };

  const getPflegegradLabel = (pflegegrad: string) => {
    switch (pflegegrad) {
      case 'pflegegrad-1': return 'Pflegegrad 1';
      case 'pflegegrad-2': return 'Pflegegrad 2';
      case 'pflegegrad-3': return 'Pflegegrad 3';
      case 'pflegegrad-4': return 'Pflegegrad 4';
      case 'pflegegrad-5': return 'Pflegegrad 5';
      case 'nicht-beantragt': return 'Noch nicht beantragt';
      case 'abgelehnt': return 'Antrag abgelehnt';
      default: return pflegegrad;
    }
  };

  return (
    <div className="space-y-8 print-area">
      {/* Success Header */}
      <div className="text-center print-header">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Termin erfolgreich gebucht!
        </h2>
        <p className="text-muted-foreground">
          Sie erhalten in Kürze eine Bestätigung per E-Mail
        </p>
      </div>

      {/* Booking Details Card */}
      <Card className="p-6 space-y-6 print-section print-avoid-break">
        <div className="text-center border-b pb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Ihre Terminbestätigung
          </h3>
          <div className="inline-block bg-nature-sage/10 text-nature-sage px-4 py-2 rounded-full font-mono text-sm">
            Buchungs-ID: {bookingData.bookingId}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print-two-column">
          {/* Appointment Details */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <Calendar className="w-5 h-5 text-nature-sage" />
              Termin Details
            </h4>
            
            <div className="space-y-3 pl-7">
              <div>
                <p className="text-sm text-muted-foreground">Datum</p>
                <p className="font-medium">
                  {format(bookingData.selectedDate, 'EEEE, dd. MMMM yyyy', { locale: de })}
                </p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Uhrzeit</p>
                <p className="font-medium">{bookingData.selectedTime} Uhr (MEZ)</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Art der Beratung</p>
                <p className="font-medium">
                  {getConsultationType(bookingData.contactData?.kommunikations_praeferenz)}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground flex items-center gap-2">
              <User className="w-5 h-5 text-nature-sage" />
              Ihre Angaben
            </h4>
            
            <div className="space-y-3 pl-7">
              <div>
                <p className="text-sm text-muted-foreground">Name</p>
                <p className="font-medium">{bookingData.contactData?.name}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">E-Mail</p>
                <p className="font-medium">{bookingData.contactData?.email}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Telefon</p>
                <p className="font-medium">{bookingData.contactData?.phone}</p>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Pflegegrad</p>
                <p className="font-medium">
                  {getPflegegradLabel(bookingData.contactData?.pflegegrad)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Consultant Info */}
        <div className="border-t pt-6">
          <h4 className="font-semibold text-foreground mb-4">Ihr Berater</h4>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-nature-sage/10 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-nature-sage" />
            </div>
            <div>
              <p className="font-medium text-foreground">{beraterInfo.name}</p>
              <p className="text-sm text-muted-foreground">{beraterInfo.titel}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Preparation Checklist */}
      <Card className="p-6">
        <h4 className="font-semibold text-foreground mb-4">
          Vorbereitung für Ihren Termin
        </h4>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Versicherungskarte bereithalten</p>
              <p className="text-sm text-muted-foreground">
                Ihre Kranken- und Pflegeversicherungskarte
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Aktuelle Pflegebescheide sammeln</p>
              <p className="text-sm text-muted-foreground">
                Falls vorhanden: Gutachten und Bescheide der Pflegekasse
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Fragen zur Pflegesituation notieren</p>
              <p className="text-sm text-muted-foreground">
                Überlegen Sie sich vorab, welche Themen Sie besprechen möchten
              </p>
            </div>
          </div>
          
          {bookingData.contactData?.kommunikations_praeferenz === 'video' && (
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Internetverbindung prüfen</p>
                <p className="text-sm text-muted-foreground">
                  Stellen Sie sicher, dass Ihre Kamera und Ihr Mikrofon funktionieren
                </p>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 no-print">
        <Button 
          onClick={handlePrint}
          variant="outline"
          className="flex-1"
        >
          <Printer className="w-4 h-4 mr-2" />
          Bestätigung drucken
        </Button>
        
        <Button 
          onClick={handleDownload}
          variant="outline"
          className="flex-1"
        >
          <Download className="w-4 h-4 mr-2" />
          Als Datei speichern
        </Button>
      </div>

      {/* Contact Information */}
      <Card className="p-6 bg-nature-sage/5">
        <h4 className="font-semibold text-foreground mb-4">
          Fragen zu Ihrem Termin?
        </h4>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-nature-sage" />
            <span>+49 911 123456</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-nature-sage" />
            <span>info@natura-pflegedienst.de</span>
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground mt-4">
          Bei Terminänderungen oder -absagen kontaktieren Sie uns bitte mindestens 
          24 Stunden im Voraus.
        </p>
      </Card>
    </div>
  );
}