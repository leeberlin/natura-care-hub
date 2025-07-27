'use client';

import { useState } from 'react';
import { CalendarCheck, Clock, User, Phone, Video, CheckCircle, Calendar, Globe, MapPin } from 'lucide-react';
import { KalenderAuswahl } from '@/components/booking/kalender-auswahl';
import { KontaktdatenForm } from '@/components/booking/kontaktdaten-form';
import { TerminBestaetigung } from '@/components/booking/termin-bestaetigung';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type BookingStep = 'calendar' | 'contact' | 'confirmation';

interface BookingData {
  selectedDate?: Date;
  selectedTime?: string;
  contactData?: any;
  bookingId?: string;
}

export default function DigitalBooking() {
  const [currentStep, setCurrentStep] = useState<BookingStep>('calendar');
  const [bookingData, setBookingData] = useState<BookingData>({});

  const handleDateTimeSelect = (date: Date, time: string) => {
    setBookingData(prev => ({
      ...prev,
      selectedDate: date,
      selectedTime: time
    }));
    setCurrentStep('contact');
  };

  const handleContactSubmit = (contactData: any, bookingId: string) => {
    setBookingData(prev => ({
      ...prev,
      contactData,
      bookingId
    }));
    setCurrentStep('confirmation');
  };

  const formatDate = (date?: Date) => {
    if (!date) return '';
    return date.toLocaleDateString('de-DE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const beraterInfo = {
    name: 'Herr Tuan Pham',
    titel: 'Qualifizierte Pflegeberater',
    avatar: '/berater-avatar.jpg'
  };

  const steps = [
    { id: 'calendar', label: 'Termin wählen', icon: Calendar },
    { id: 'contact', label: 'Kontaktdaten', icon: User },
    { id: 'confirmation', label: 'Bestätigung', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      {/* Modern Header */}
      <div className="bg-white shadow-sm border-b" style={{ marginTop: '80px' }}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-gradient-to-r from-nature-sage to-nature-teal">
                <CalendarCheck className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-3xl font-bold text-nature-charcoal font-nunito">
                  Pflegeberatung nach § 37.3
                </h1>
                <p className="text-muted-foreground text-lg font-source">
                  Qualifizierte Pflegeberatung - Kostenlos für Versicherte
                </p>
              </div>
            </div>
            
            {/* Progress Steps */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-4">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = step.id === currentStep;
                  const isCompleted = 
                    (step.id === 'calendar' && (currentStep === 'contact' || currentStep === 'confirmation')) ||
                    (step.id === 'contact' && currentStep === 'confirmation');
                  
                  return (
                    <div key={step.id} className="flex items-center">
                      <div className={`flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-300 ${
                        isActive 
                          ? 'bg-nature-sage/10 text-nature-sage shadow-md' 
                          : isCompleted
                          ? 'bg-nature-sage/5 text-nature-sage'
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        <Icon className="w-5 h-5" />
                        <span className="font-medium font-nunito">{step.label}</span>
                      </div>
                      {index < steps.length - 1 && (
                        <div className={`w-8 h-0.5 mx-2 ${
                          isCompleted ? 'bg-nature-sage' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Service Info Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden sticky top-24">
              {/* Company Branding */}
              <div className="p-6 text-white bg-gradient-to-r from-nature-sage to-nature-teal">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <User className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-nunito">
                      Natura Pflegedienst GmbH
                    </h2>
                    <p className="text-white/80 font-source">
                      Pflegeberatung nach § 37.3
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-nature-charcoal mb-4 font-nunito">
                    Was Sie erwartet:
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock className="w-5 h-5 flex-shrink-0 text-nature-sage" />
                      <span className="font-source">Dauer: 30-45 Minuten</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 text-nature-sage" />
                      <span className="font-source">Kostenlos für Versicherte</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Video className="w-5 h-5 flex-shrink-0 text-nature-sage" />
                      <span className="font-source">Video, Telefon oder Vor-Ort</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <User className="w-5 h-5 flex-shrink-0 text-nature-sage" />
                      <span className="font-source">Qualifizierte Pflegeberater</span>
                    </div>
                  </div>
                </div>

                {/* Selected Details */}
                {(bookingData.selectedDate && bookingData.selectedTime) && (
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-semibold text-nature-charcoal mb-4 font-nunito">Ihr Termin:</h4>
                    <div className="rounded-xl p-4 space-y-3 bg-nature-sage/5">
                      <div className="flex items-center gap-3 text-nature-charcoal">
                        <Calendar className="w-4 h-4 text-nature-sage" />
                        <span className="font-medium font-source">{formatDate(bookingData.selectedDate)}</span>
                      </div>
                      <div className="flex items-center gap-3 text-nature-charcoal">
                        <Clock className="w-4 h-4 text-nature-sage" />
                        <span className="font-source">{bookingData.selectedTime} Uhr</span>
                      </div>
                      <div className="flex items-center gap-3 text-nature-charcoal">
                        <Globe className="w-4 h-4 text-nature-sage" />
                        <span className="font-source">Mitteleuropäische Zeit (MEZ)</span>
                      </div>
                      {bookingData.contactData?.kommunikations_praeferenz && (
                        <div className="flex items-center gap-3 text-nature-charcoal">
                          {bookingData.contactData.kommunikations_praeferenz === 'video' ? (
                            <Video className="w-4 h-4 text-nature-sage" />
                          ) : bookingData.contactData.kommunikations_praeferenz === 'telefon' ? (
                            <Phone className="w-4 h-4 text-nature-sage" />
                          ) : (
                            <MapPin className="w-4 h-4 text-nature-sage" />
                          )}
                          <span className="font-source">
                            {bookingData.contactData.kommunikations_praeferenz === 'video' 
                              ? 'Video-Beratung' 
                              : bookingData.contactData.kommunikations_praeferenz === 'telefon'
                              ? 'Telefon-Beratung'
                              : 'Vor-Ort-Beratung'
                            }
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Legal Notice */}
                <div className="bg-nature-coral/5 border border-nature-coral/20 rounded-xl p-4">
                  <h4 className="font-semibold text-nature-coral mb-2 font-nunito">
                    § 37.3 SGB XI Beratung
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-source">
                    Die Kosten werden vollständig von der Pflegekasse übernommen. 
                    Sie zahlen nichts für diese Beratung.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-8">
                {currentStep === 'calendar' && (
                  <KalenderAuswahl onDateTimeSelect={handleDateTimeSelect} />
                )}
                
                {currentStep === 'contact' && (
                  <KontaktdatenForm 
                    onFormSubmit={handleContactSubmit}
                    bookingData={bookingData}
                  />
                )}
                
                {currentStep === 'confirmation' && (
                  <TerminBestaetigung 
                    bookingData={bookingData}
                    beraterInfo={beraterInfo}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}