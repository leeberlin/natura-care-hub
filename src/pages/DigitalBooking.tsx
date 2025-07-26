import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CalendarDays, Clock, User, Phone, Mail, CheckCircle, Printer } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { format, addDays, isWeekend, isBefore, startOfToday } from "date-fns";
import { de } from "date-fns/locale";

const formSchema = z.object({
  name: z.string().min(1, "Name ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z.string().min(1, "Telefonnummer ist erforderlich"),
  careLevel: z.string().min(1, "Pflegegrad ist erforderlich"),
  consultationType: z.enum(["video", "phone", "inperson"]).refine((val) => val, {
    message: "Beratungsart ist erforderlich",
  }),
  privacy: z.boolean().refine((val) => val, "Datenschutz muss akzeptiert werden"),
  terms: z.boolean().refine((val) => val, "AGB müssen akzeptiert werden"),
});

type FormData = z.infer<typeof formSchema>;

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
  "14:00", "14:30", "15:00", "15:30", "16:00"
];

const DigitalBooking = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [bookingData, setBookingData] = useState<FormData & { selectedDate?: Date; selectedTime?: string }>();
  const [bookingId] = useState(`NP-${Date.now().toString().slice(-6)}`);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      privacy: false,
      terms: false,
    },
  });

  const isDateAvailable = (date: Date) => {
    const today = startOfToday();
    return !isBefore(date, today) && !isWeekend(date);
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const onSubmit = (data: FormData) => {
    const finalData = { ...data, selectedDate, selectedTime };
    setBookingData(finalData);
    setStep(3);
  };

  const handlePrint = () => {
    window.print();
  };

  if (step === 1) {
    return (
      <div className="min-h-screen">
        <Header />
        
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
                Digitale <span className="text-nature-sage">Beratung</span> buchen
              </h1>
              <p className="text-xl text-muted-foreground font-source">
                Schritt 1 von 3: Wählen Sie Ihren Wunschtermin
              </p>
            </div>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-nunito">
                  <CalendarDays className="h-5 w-5 text-nature-sage" />
                  Terminkalender
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 font-nunito">Verfügbare Termine</h3>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={handleDateSelect}
                      disabled={(date) => !isDateAvailable(date)}
                      locale={de}
                      className="rounded-md border"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-4 font-nunito">Verfügbare Uhrzeiten</h3>
                    {selectedDate ? (
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={selectedTime === time ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleTimeSelect(time)}
                            className="font-source"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground font-source">
                        Bitte wählen Sie zuerst ein Datum aus.
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex justify-between pt-6 border-t">
                  <div></div>
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!selectedDate || !selectedTime}
                    className="font-nunito"
                  >
                    Weiter zu Schritt 2
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="min-h-screen">
        <Header />
        
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
                Digitale <span className="text-nature-sage">Beratung</span> buchen
              </h1>
              <p className="text-xl text-muted-foreground font-source">
                Schritt 2 von 3: Ihre Kontaktdaten
              </p>
            </div>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-nunito">
                  <User className="h-5 w-5 text-nature-sage" />
                  Kontaktformular
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-nunito">Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Ihr vollständiger Name" {...field} className="font-source" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-nunito">E-Mail *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="ihre@email.de" {...field} className="font-source" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-nunito">Telefon *</FormLabel>
                            <FormControl>
                              <Input placeholder="0911-123456" {...field} className="font-source" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="careLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-nunito">Pflegegrad *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="font-source">
                                  <SelectValue placeholder="Wählen Sie Ihren Pflegegrad" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="1">Pflegegrad 1</SelectItem>
                                <SelectItem value="2">Pflegegrad 2</SelectItem>
                                <SelectItem value="3">Pflegegrad 3</SelectItem>
                                <SelectItem value="4">Pflegegrad 4</SelectItem>
                                <SelectItem value="5">Pflegegrad 5</SelectItem>
                                <SelectItem value="not-applied">Noch nicht beantragt</SelectItem>
                                <SelectItem value="rejected">Abgelehnt</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="consultationType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-nunito">Art der Beratung *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="font-source">
                                <SelectValue placeholder="Wählen Sie die Beratungsart" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="video">Videoberatung</SelectItem>
                              <SelectItem value="phone">Telefonberatung</SelectItem>
                              <SelectItem value="inperson">Persönliche Beratung vor Ort</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="privacy"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="font-source">
                                Ich habe die Datenschutzerklärung gelesen und akzeptiere sie. *
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="terms"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="font-source">
                                Ich akzeptiere die Allgemeinen Geschäftsbedingungen. *
                              </FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex justify-between pt-6 border-t">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setStep(1)}
                        className="font-nunito"
                      >
                        Zurück
                      </Button>
                      <Button type="submit" className="font-nunito">
                        Termin bestätigen
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Step 3 - Confirmation
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <CheckCircle className="h-16 w-16 text-nature-sage mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
              Buchung <span className="text-nature-sage">bestätigt</span>
            </h1>
            <p className="text-xl text-muted-foreground font-source">
              Ihre Beratung wurde erfolgreich gebucht
            </p>
          </div>

          <Card className="shadow-soft mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-nunito">
                <CheckCircle className="h-5 w-5 text-nature-sage" />
                Buchungsbestätigung #{bookingId}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 font-nunito">Termininformationen</h3>
                  <div className="space-y-2 font-source">
                    <p><strong>Datum:</strong> {selectedDate && format(selectedDate, "dd.MM.yyyy", { locale: de })}</p>
                    <p><strong>Uhrzeit:</strong> {selectedTime}</p>
                    <p><strong>Art:</strong> {
                      bookingData?.consultationType === "video" ? "Videoberatung" :
                      bookingData?.consultationType === "phone" ? "Telefonberatung" :
                      "Persönliche Beratung vor Ort"
                    }</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 font-nunito">Kontaktdaten</h3>
                  <div className="space-y-2 font-source">
                    <p><strong>Name:</strong> {bookingData?.name}</p>
                    <p><strong>E-Mail:</strong> {bookingData?.email}</p>
                    <p><strong>Telefon:</strong> {bookingData?.phone}</p>
                    <p><strong>Pflegegrad:</strong> {bookingData?.careLevel}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4 font-nunito">Vorbereitung auf Ihr Beratungsgespräch</h3>
                <ul className="space-y-2 font-source text-muted-foreground">
                  <li>• Halten Sie relevante Unterlagen bereit (Pflegegutachten, Arztberichte)</li>
                  <li>• Notieren Sie sich Fragen zum Pflegedienst und unseren Leistungen</li>
                  <li>• Bei Videoberatung: Testen Sie vorab Ihre Internetverbindung</li>
                  <li>• Planen Sie ca. 30-45 Minuten für das Gespräch ein</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-2 font-nunito">Kontakt</h3>
                <div className="flex flex-col sm:flex-row gap-4 font-source">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-nature-sage" />
                    <span>0911-123456</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-nature-sage" />
                    <span>info@natura-pflegedienst.de</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-6 border-t">
                <Button onClick={handlePrint} variant="outline" className="font-nunito">
                  <Printer className="h-4 w-4 mr-2" />
                  Drucken
                </Button>
                <Button onClick={() => window.location.href = "/"} className="font-nunito">
                  Zur Startseite
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalBooking;