import { useState, useMemo } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, isWeekend, isBefore, startOfDay, addMonths, subMonths } from 'date-fns';
import { de } from 'date-fns/locale';

interface KalenderAuswahlProps {
  onDateTimeSelect: (date: Date, time: string) => void;
}

export function KalenderAuswahl({ onDateTimeSelect }: KalenderAuswahlProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00'
  ];

  const isDateAvailable = (date: Date) => {
    const today = startOfDay(new Date());
    return !isBefore(date, today) && !isWeekend(date);
  };

  const availableTimeSlots = useMemo(() => {
    if (!selectedDate) return timeSlots;
    
    // Simulate some booked slots
    const bookedSlots = ['09:00', '14:00', '15:30'];
    return timeSlots.filter(slot => !bookedSlots.includes(slot));
  }, [selectedDate]);

  const handleDateSelect = (date: Date | undefined) => {
    if (date && isDateAvailable(date)) {
      setSelectedDate(date);
      setSelectedTime(undefined);
    }
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

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <CalendarIcon className="w-8 h-8 text-nature-sage" />
          <h2 className="text-2xl font-bold text-foreground">
            Wählen Sie einen Termin
          </h2>
        </div>
        <p className="text-muted-foreground">
          Buchen Sie Ihren kostenlosen Beratungstermin nach § 37.3
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calendar */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <CalendarIcon className="w-4 h-4 text-primary" />
              </div>
              Verfügbare Tage
            </h3>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={prevMonth}
                className="h-10 w-10 p-0 rounded-xl border-2 hover:bg-primary/5 hover:border-primary/20 transition-all"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl px-4 py-2 min-w-[140px] text-center">
                <span className="text-sm font-bold text-primary">
                  {format(currentMonth, 'MMMM yyyy', { locale: de })}
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={nextMonth}
                className="h-10 w-10 p-0 rounded-xl border-2 hover:bg-primary/5 hover:border-primary/20 transition-all"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-card via-card to-primary/5 rounded-2xl shadow-lg border-2 border-primary/10 p-6">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              disabled={(date) => !isDateAvailable(date)}
              month={currentMonth}
              onMonthChange={setCurrentMonth}
              locale={de}
              className="w-full pointer-events-auto [&_.rdp-day]:rounded-xl [&_.rdp-day]:h-10 [&_.rdp-day]:w-10 [&_.rdp-day_button]:h-10 [&_.rdp-day_button]:w-10 [&_.rdp-day_button]:rounded-xl [&_.rdp-day_button]:font-medium [&_.rdp-day_button:hover]:bg-primary/10 [&_.rdp-day_button:hover]:text-primary [&_.rdp-day_selected]:bg-primary [&_.rdp-day_selected]:text-primary-foreground [&_.rdp-day_selected]:shadow-lg [&_.rdp-day_disabled]:opacity-30 [&_.rdp-day_outside]:opacity-50 [&_.rdp-head_cell]:font-bold [&_.rdp-head_cell]:text-primary [&_.rdp-head_cell]:text-sm [&_.rdp-table]:w-full"
            />
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">!</span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-amber-800">Verfügbarkeit:</p>
                <p className="text-sm text-amber-700">• Termine sind Montag bis Freitag verfügbar</p>
                <p className="text-sm text-amber-700">• Keine Termine an Wochenenden</p>
              </div>
            </div>
          </div>
        </div>

        {/* Time Slots */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-nature-sage" />
            <h3 className="text-lg font-semibold text-foreground">
              Verfügbare Zeiten
            </h3>
          </div>
          
          {selectedDate ? (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Termin am {format(selectedDate, 'EEEE, dd. MMMM yyyy', { locale: de })}
              </p>
              
              <div className="grid grid-cols-3 gap-2">
                {availableTimeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleTimeSelect(time)}
                    className="h-10"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Bitte wählen Sie zuerst einen Tag aus</p>
            </div>
          )}
        </div>
      </div>

      {/* Continue Button */}
      {selectedDate && selectedTime && (
        <div className="text-center pt-6 border-t">
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">
              Ausgewählter Termin:
            </p>
            <p className="font-semibold text-foreground">
              {format(selectedDate, 'EEEE, dd. MMMM yyyy', { locale: de })} um {selectedTime} Uhr
            </p>
          </div>
          
          <Button 
            onClick={handleContinue}
            size="lg"
            className="bg-nature-sage hover:bg-nature-sage/90"
          >
            Weiter zu den Kontaktdaten
          </Button>
        </div>
      )}
    </div>
  );
}