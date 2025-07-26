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
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">
              Verfügbare Tage
            </h3>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevMonth}
                className="h-8 w-8 p-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm font-medium min-w-[120px] text-center">
                {format(currentMonth, 'MMMM yyyy', { locale: de })}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={nextMonth}
                className="h-8 w-8 p-0"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              disabled={(date) => !isDateAvailable(date)}
              month={currentMonth}
              onMonthChange={setCurrentMonth}
              locale={de}
              className="w-full"
            />
          </div>
          
          <div className="text-sm text-muted-foreground space-y-1">
            <p>• Termine sind Montag bis Freitag verfügbar</p>
            <p>• Keine Termine an Wochenenden</p>
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