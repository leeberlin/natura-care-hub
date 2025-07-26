import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { User, Mail, Phone, MessageSquare, Video, MapPin } from 'lucide-react';

interface KontaktdatenFormProps {
  onFormSubmit: (contactData: any, bookingId: string) => void;
  bookingData: any;
}

export function KontaktdatenForm({ onFormSubmit, bookingData }: KontaktdatenFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pflegegrad: '',
    kommunikations_praeferenz: 'video',
    anmerkungen: '',
    datenschutz_akzeptiert: false,
    agb_akzeptiert: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Bitte geben Sie Ihren Namen ein';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Bitte geben Sie Ihre Telefonnummer ein';
    }

    if (!formData.pflegegrad) {
      newErrors.pflegegrad = 'Bitte wählen Sie Ihren Pflegegrad aus';
    }

    if (!formData.datenschutz_akzeptiert) {
      newErrors.datenschutz_akzeptiert = 'Bitte akzeptieren Sie die Datenschutzerklärung';
    }

    if (!formData.agb_akzeptiert) {
      newErrors.agb_akzeptiert = 'Bitte akzeptieren Sie die AGB';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const bookingId = `NP-${Date.now()}`;
      onFormSubmit(formData, bookingId);
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <User className="w-8 h-8 text-nature-sage" />
          <h2 className="text-2xl font-bold text-foreground">
            Ihre Kontaktdaten
          </h2>
        </div>
        <p className="text-muted-foreground">
          Bitte geben Sie Ihre Daten für die Terminbestätigung ein
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Vollständiger Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => updateFormData('name', e.target.value)}
              placeholder="Max Mustermann"
              className={errors.name ? 'border-destructive' : ''}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-Mail-Adresse *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => updateFormData('email', e.target.value)}
              placeholder="max@beispiel.de"
              className={errors.email ? 'border-destructive' : ''}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Telefonnummer *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormData('phone', e.target.value)}
              placeholder="+49 123 456789"
              className={errors.phone ? 'border-destructive' : ''}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="pflegegrad">Pflegegrad *</Label>
            <Select
              value={formData.pflegegrad}
              onValueChange={(value) => updateFormData('pflegegrad', value)}
            >
              <SelectTrigger className={errors.pflegegrad ? 'border-destructive' : ''}>
                <SelectValue placeholder="Pflegegrad auswählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pflegegrad-1">Pflegegrad 1</SelectItem>
                <SelectItem value="pflegegrad-2">Pflegegrad 2</SelectItem>
                <SelectItem value="pflegegrad-3">Pflegegrad 3</SelectItem>
                <SelectItem value="pflegegrad-4">Pflegegrad 4</SelectItem>
                <SelectItem value="pflegegrad-5">Pflegegrad 5</SelectItem>
                <SelectItem value="nicht-beantragt">Noch nicht beantragt</SelectItem>
                <SelectItem value="abgelehnt">Antrag abgelehnt</SelectItem>
              </SelectContent>
            </Select>
            {errors.pflegegrad && (
              <p className="text-sm text-destructive">{errors.pflegegrad}</p>
            )}
          </div>
        </div>

        {/* Communication Preference */}
        <div className="space-y-4">
          <Label>Bevorzugte Beratungsart *</Label>
          <RadioGroup
            value={formData.kommunikations_praeferenz}
            onValueChange={(value) => updateFormData('kommunikations_praeferenz', value)}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="flex items-center space-x-2 border rounded-lg p-4">
              <RadioGroupItem value="video" id="video" />
              <Label htmlFor="video" className="flex items-center gap-2 cursor-pointer flex-1">
                <Video className="w-5 h-5 text-nature-sage" />
                <div>
                  <div className="font-medium">Video-Beratung</div>
                  <div className="text-sm text-muted-foreground">Über Zoom/Teams</div>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-2 border rounded-lg p-4">
              <RadioGroupItem value="telefon" id="telefon" />
              <Label htmlFor="telefon" className="flex items-center gap-2 cursor-pointer flex-1">
                <Phone className="w-5 h-5 text-nature-sage" />
                <div>
                  <div className="font-medium">Telefon-Beratung</div>
                  <div className="text-sm text-muted-foreground">Klassischer Anruf</div>
                </div>
              </Label>
            </div>

            <div className="flex items-center space-x-2 border rounded-lg p-4">
              <RadioGroupItem value="vor-ort" id="vor-ort" />
              <Label htmlFor="vor-ort" className="flex items-center gap-2 cursor-pointer flex-1">
                <MapPin className="w-5 h-5 text-nature-sage" />
                <div>
                  <div className="font-medium">Vor-Ort-Beratung</div>
                  <div className="text-sm text-muted-foreground">Bei Ihnen zu Hause</div>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Additional Notes */}
        <div className="space-y-2">
          <Label htmlFor="anmerkungen">Anmerkungen (optional)</Label>
          <Textarea
            id="anmerkungen"
            value={formData.anmerkungen}
            onChange={(e) => updateFormData('anmerkungen', e.target.value)}
            placeholder="Haben Sie spezielle Fragen oder Wünsche für das Beratungsgespräch?"
            rows={4}
          />
        </div>

        {/* Legal Checkboxes */}
        <div className="space-y-4 border-t pt-6">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="datenschutz"
              checked={formData.datenschutz_akzeptiert}
              onCheckedChange={(checked) => updateFormData('datenschutz_akzeptiert', checked)}
              className={errors.datenschutz_akzeptiert ? 'border-destructive' : ''}
            />
            <Label htmlFor="datenschutz" className="text-sm leading-relaxed">
              Ich akzeptiere die{' '}
              <a href="/datenschutz" className="text-nature-sage hover:underline" target="_blank">
                Datenschutzerklärung
              </a>{' '}
              und stimme der Verarbeitung meiner Daten für die Terminbuchung zu. *
            </Label>
          </div>
          {errors.datenschutz_akzeptiert && (
            <p className="text-sm text-destructive">{errors.datenschutz_akzeptiert}</p>
          )}

          <div className="flex items-start space-x-2">
            <Checkbox
              id="agb"
              checked={formData.agb_akzeptiert}
              onCheckedChange={(checked) => updateFormData('agb_akzeptiert', checked)}
              className={errors.agb_akzeptiert ? 'border-destructive' : ''}
            />
            <Label htmlFor="agb" className="text-sm leading-relaxed">
              Ich akzeptiere die{' '}
              <a href="/agb" className="text-nature-sage hover:underline" target="_blank">
                Allgemeinen Geschäftsbedingungen
              </a>{' '}
              der Natura Pflegedienst GmbH. *
            </Label>
          </div>
          {errors.agb_akzeptiert && (
            <p className="text-sm text-destructive">{errors.agb_akzeptiert}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <Button 
            type="submit"
            size="lg"
            className="w-full bg-nature-sage hover:bg-nature-sage/90"
          >
            Termin verbindlich buchen
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-2">
            * Pflichtfelder
          </p>
        </div>
      </form>
    </div>
  );
}