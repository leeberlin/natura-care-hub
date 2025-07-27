import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, MapPin, Globe, Users } from 'lucide-react';
import { format, isWeekend, isBefore, startOfDay, addMonths, subMonths, isSameDay } from 'date-fns';
import { de } from 'date-fns/locale';

interface KalenderAuswahlProps {
  onDateTimeSelect: (date: Date, time: string) => void;
}

interface Service {
  id: string;
  name: string;
  duration: number;
  description: string;
}

interface BookingSettings {
  blockedDates: Date[];
  workingDays: string[];
  holidays: Date[];
  timeSlots: string[];
  services: Service[];
}

export function KalenderAuswahl({ onDateTimeSelect }: KalenderAuswahlProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [selectedService, setSelectedService] = useState<string>();
  const [selectedTimezone, setSelectedTimezone] = useState<string>('MEZ');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Mock data - would come from API in real implementation
  const services: Service[] = [
    {
      id: 'pflegeberatung',
      name: 'Pflegeberatung nach § 37.3',
      duration: 45,
      description: 'Kostenlose Beratung für Pflegebedürftige'
    },
    {
      id: 'haushaltshilfe',
      name: 'Haushaltshilfe Beratung',
      duration: 30,
      description: 'Beratung zu hauswirtschaftlichen Leistungen'
    },
    {
      id: 'pflegegrad',
      name: 'Pflegegrad Beratung',
      duration: 60,
      description: 'Unterstützung bei der Pflegegrad-Beantragung'
    }
  ];

  const timezones = [
    { value: 'MEZ', label: 'Mitteleuropäische Zeit (MEZ)' },
    { value: 'MESZ', label: 'Mitteleuropäische Sommerzeit (MESZ)' }
  ];

  // Bayern public holidays 2025-2026 (simplified)
  const holidays = useMemo(() => [
    new Date(2025, 0, 1),   // Neujahr
    new Date(2025, 0, 6),   // Heilige Drei Könige
    new Date(2025, 3, 18),  // Karfreitag (example)
    new Date(2025, 3, 21),  // Ostermontag (example)
    new Date(2025, 4, 1),   // Tag der Arbeit
    new Date(2025, 4, 29),  // Christi Himmelfahrt (example)
    new Date(2025, 5, 9),   // Pfingstmontag (example)
    new Date(2025, 5, 19),  // Fronleichnam (example)
    new Date(2025, 9, 3),   // Tag der Deutschen Einheit
    new Date(2025, 10, 1),  // Allerheiligen
    new Date(2025, 11, 25), // 1. Weihnachtsfeiertag
    new Date(2025, 11, 26), // 2. Weihnachtsfeiertag
  ], []);

  // Mock admin blocked dates
  const adminBlockedDates = useMemo(() => [
    new Date(2025, 0, 15),  // Admin vacation
    new Date(2025, 0, 16),
    new Date(2025, 1, 10),  // Training day
  ], []);

  const timeSlots = useMemo(() => {
    const selectedServiceData = services.find(s => s.id === selectedService);
    if (!selectedServiceData) return [];

    const slots = [
      '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
      '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
      '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
      '17:00'
    ];

    // Filter based on service duration
    if (selectedServiceData.duration >= 60) {
      return slots.filter((_, index) => index % 2 === 0); // Only full hours for long appointments
    }
    
    return slots;
  }, [selectedService, services]);

  const isDateUnavailable = (date: Date) => {
    const today = startOfDay(new Date());
    
    // Past dates
    if (isBefore(date, today)) return true;
    
    // Weekends
    if (isWeekend(date)) return true;
    
    // Holidays
    if (holidays.some(holiday => isSameDay(holiday, date))) return true;
    
    // Admin blocked dates
    if (adminBlockedDates.some(blocked => isSameDay(blocked, date))) return true;
    
    return false;
  };

  const getDateStatus = (date: Date) => {
    const today = startOfDay(new Date());
    
    if (isSameDay(date, today)) return 'today';
    if (isWeekend(date)) return 'weekend';
    if (holidays.some(holiday => isSameDay(holiday, date))) return 'holiday';
    if (adminBlockedDates.some(blocked => isSameDay(blocked, date))) return 'blocked';
    if (isBefore(date, today)) return 'past';
    
    return 'available';
  };

  const availableTimeSlots = useMemo(() => {
    if (!selectedDate || !selectedService) return [];
    
    // Mock booked slots for the selected date
    const bookedSlots = ['09:00', '14:00', '15:30'];
    return timeSlots.filter(slot => !bookedSlots.includes(slot));
  }, [selectedDate, selectedService, timeSlots]);

  const handleDateSelect = (date: Date | undefined) => {
    if (date && !isDateUnavailable(date)) {
      setSelectedDate(date);
      setSelectedTime(undefined);
    }
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setSelectedTime(undefined);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      onDateTimeSelect(selectedDate, selectedTime);
    }
  };

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const generateCalendarDays = () => {
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
    
    // Get the first Monday of the calendar (might be from previous month)
    const firstMonday = new Date(firstDayOfMonth);
    const dayOfWeek = firstDayOfMonth.getDay();
    const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Sunday = 0, make Monday = 0
    firstMonday.setDate(firstDayOfMonth.getDate() - daysToSubtract);
    
    const days = [];
    const currentDate = new Date(firstMonday);
    
    // Generate 42 days (6 weeks)
    for (let i = 0; i < 42; i++) {
      days.push({
        date: new Date(currentDate),
        isCurrentMonth: currentDate.getMonth() === currentMonth.getMonth()
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return days;
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-nature-sage to-nature-teal flex items-center justify-center shadow-lg">
            <CalendarIcon className="w-6 h-6 text-white" />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-bold text-nature-charcoal font-nunito">
              Termin vereinbaren
            </h2>
            <p className="text-muted-foreground font-source">
              Wählen Sie Ihren bevorzugten Termin für die Beratung
            </p>
          </div>
        </div>
      </div>

      {/* Service Selection */}
      <div className="bg-gradient-to-r from-nature-cream/20 to-nature-sage/5 rounded-2xl p-6 border border-nature-sage/10">
        <div className="flex items-center gap-3 mb-4">
          <Users className="w-5 h-5 text-nature-sage" />
          <h3 className="text-lg font-semibold text-nature-charcoal font-nunito">
            Art der Beratung
          </h3>
        </div>
        
        <Select value={selectedService} onValueChange={handleServiceSelect}>
          <SelectTrigger className="w-full h-12 bg-white border-nature-sage/20 font-source">
            <SelectValue placeholder="Wählen Sie eine Beratungsart" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.id} value={service.id} className="font-source">
                <div className="flex flex-col">
                  <span className="font-medium">{service.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {service.duration} Min • {service.description}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {selectedServiceData && (
          <div className="mt-4 p-4 bg-nature-sage/5 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-nature-charcoal font-nunito">
                  {selectedServiceData.name}
                </p>
                <p className="text-sm text-muted-foreground font-source">
                  {selectedServiceData.description}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-nature-sage font-nunito">
                  {selectedServiceData.duration} Min
                </p>
                <p className="text-sm text-muted-foreground font-source">Dauer</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Timezone Selection */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-nature-sage" />
          <span className="text-sm font-medium text-nature-charcoal font-nunito">Zeitzone:</span>
        </div>
        <Select value={selectedTimezone} onValueChange={setSelectedTimezone}>
          <SelectTrigger className="w-auto min-w-[200px] h-10 bg-white border-nature-sage/20 font-source">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {timezones.map((tz) => (
              <SelectItem key={tz.value} value={tz.value} className="font-source">
                {tz.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedService && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-nature-charcoal font-nunito flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-nature-sage/10 flex items-center justify-center">
                  <CalendarIcon className="w-4 h-4 text-nature-sage" />
                </div>
                Verfügbare Termine
              </h3>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevMonth}
                  className="h-10 w-10 p-0 rounded-xl border-2 hover:bg-nature-sage/5 hover:border-nature-sage/20 transition-all"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="bg-gradient-to-r from-nature-sage/10 to-nature-sage/5 rounded-xl px-4 py-2 min-w-[140px] text-center">
                  <span className="text-sm font-bold text-nature-sage font-nunito">
                    {format(currentMonth, 'MMMM yyyy', { locale: de })}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextMonth}
                  className="h-10 w-10 p-0 rounded-xl border-2 hover:bg-nature-sage/5 hover:border-nature-sage/20 transition-all"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg border border-nature-sage/10 p-6">
              <div className="custom-calendar">
                {/* Calendar Header */}
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((day) => (
                    <div key={day} className="h-10 flex items-center justify-center">
                      <span className="text-sm font-bold text-nature-sage">{day}</span>
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1">
                  {generateCalendarDays().map((day, index) => {
                    const isToday = isSameDay(day.date, new Date());
                    const isSelected = selectedDate && isSameDay(day.date, selectedDate);
                    const isDisabled = isDateUnavailable(day.date);
                    const isWeekendDay = isWeekend(day.date);
                    const isHoliday = holidays.some(holiday => isSameDay(holiday, day.date));
                    const isBlocked = adminBlockedDates.some(blocked => isSameDay(blocked, day.date));
                    const isCurrentMonth = day.date.getMonth() === currentMonth.getMonth();

                    return (
                      <div key={index} className="h-10 flex items-center justify-center">
                        <button
                          onClick={() => !isDisabled && handleDateSelect(day.date)}
                          disabled={isDisabled}
                          className={`
                            w-9 h-9 rounded-lg text-sm font-medium transition-all duration-200
                            ${!isCurrentMonth ? 'text-gray-300 opacity-50' : ''}
                            ${isSelected ? 'bg-nature-sage text-white hover:bg-nature-sage/90' : ''}
                            ${isToday && !isSelected ? 'border-2 border-nature-coral font-bold' : ''}
                            ${isWeekendDay && !isSelected ? 'text-red-500 line-through opacity-50' : ''}
                            ${isHoliday && !isSelected ? 'text-red-600 bg-red-50 line-through' : ''}
                            ${isBlocked && !isSelected ? 'text-gray-400 bg-gray-100 line-through' : ''}
                            ${isDisabled ? 'cursor-not-allowed opacity-30' : 'cursor-pointer hover:bg-nature-sage/10 hover:text-nature-sage'}
                            ${!isSelected && !isDisabled && !isWeekendDay && !isHoliday && !isBlocked && isCurrentMonth ? 'text-nature-charcoal' : ''}
                          `}
                        >
                          {day.date.getDate()}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Legend */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
              <h4 className="font-semibold text-amber-800 mb-3 font-nunito flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-500"></div>
                Legende
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm font-source">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded border-2 border-nature-coral"></div>
                  <span>Heute</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-nature-sage"></div>
                  <span>Ausgewählt</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-red-100 text-red-500 text-xs flex items-center justify-center">×</div>
                  <span>Wochenende</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gray-100 text-gray-400 text-xs flex items-center justify-center">×</div>
                  <span>Nicht verfügbar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Time Slots */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-nature-sage" />
              <h3 className="text-lg font-semibold text-nature-charcoal font-nunito">
                Verfügbare Uhrzeiten
              </h3>
            </div>
            
            {selectedDate ? (
              <div className="space-y-4">
                <div className="bg-nature-sage/5 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground font-source mb-1">
                    Ausgewählter Tag:
                  </p>
                  <p className="font-semibold text-nature-charcoal font-nunito">
                    {format(selectedDate, 'EEEE, dd. MMMM yyyy', { locale: de })}
                  </p>
                  {selectedServiceData && (
                    <p className="text-sm text-nature-sage font-source mt-2">
                      Beratungsdauer: {selectedServiceData.duration} Minuten
                    </p>
                  )}
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {availableTimeSlots.map((time) => (
                    <Button
                      key={time}
                      variant="outline"
                      size="sm"
                      onClick={() => handleTimeSelect(time)}
                      className={`h-12 font-source transition-all duration-200 ${
                        selectedTime === time 
                          ? 'bg-nature-sage hover:bg-nature-sage/90 text-white border-nature-sage' 
                          : 'border-nature-sage/20 text-nature-charcoal hover:bg-nature-sage/10 hover:border-nature-sage/40'
                      }`}
                    >
                      {time}
                    </Button>
                  ))}
                </div>

                {availableTimeSlots.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Clock className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p className="font-source">
                      Keine freien Termine an diesem Tag verfügbar
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <CalendarIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium font-nunito">
                  Wählen Sie zuerst einen Tag
                </p>
                <p className="text-sm font-source">
                  Klicken Sie auf einen verfügbaren Termin im Kalender
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Continue Button */}
      {selectedDate && selectedTime && selectedService && (
        <div className="text-center pt-8 border-t border-nature-sage/10">
          <div className="bg-gradient-to-r from-nature-sage/5 to-nature-teal/5 rounded-2xl p-6 mb-6">
            <h4 className="font-semibold text-nature-charcoal mb-4 font-nunito">
              Zusammenfassung Ihres Termins:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm font-source">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-nature-sage" />
                <span>{selectedServiceData?.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-nature-sage" />
                <span>{format(selectedDate, 'dd.MM.yyyy', { locale: de })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-nature-sage" />
                <span>{selectedTime} Uhr ({selectedServiceData?.duration} Min)</span>
              </div>
            </div>
          </div>
          
          <Button 
            onClick={handleContinue}
            size="lg"
            className="bg-gradient-to-r from-nature-sage to-nature-teal hover:from-nature-sage/90 hover:to-nature-teal/90 text-white font-nunito px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Weiter zu den Kontaktdaten
          </Button>
        </div>
      )}
    </div>
  );
}