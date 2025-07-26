import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Users, Clock, CheckCircle, XCircle, Download, Search, Moon, Sun } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { format } from "date-fns";
import { de } from "date-fns/locale";

type BookingStatus = "confirmed" | "completed" | "cancelled" | "pending";

interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  type: "video" | "phone" | "inperson";
  careLevel: string;
  status: BookingStatus;
  createdAt: string;
}

// Mock data
const mockBookings: Booking[] = [
  {
    id: "NP-001234",
    name: "Maria Schmidt",
    email: "maria.schmidt@email.de",
    phone: "0911-234567",
    date: "2024-01-15",
    time: "09:00",
    type: "video",
    careLevel: "2",
    status: "confirmed",
    createdAt: "2024-01-10"
  },
  {
    id: "NP-001235",
    name: "Hans Müller",
    email: "hans.mueller@email.de",
    phone: "0911-345678",
    date: "2024-01-16",
    time: "14:00",
    type: "inperson",
    careLevel: "3",
    status: "completed",
    createdAt: "2024-01-11"
  },
  {
    id: "NP-001236",
    name: "Anna Weber",
    email: "anna.weber@email.de",
    phone: "0911-456789",
    date: "2024-01-17",
    time: "11:30",
    type: "phone",
    careLevel: "1",
    status: "pending",
    createdAt: "2024-01-12"
  }
];

const Admin = () => {
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [darkMode, setDarkMode] = useState(false);

  // Filter bookings
  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Statistics
  const stats = {
    total: bookings.length,
    confirmed: bookings.filter(b => b.status === "confirmed").length,
    completed: bookings.filter(b => b.status === "completed").length,
    cancelled: bookings.filter(b => b.status === "cancelled").length,
    pending: bookings.filter(b => b.status === "pending").length
  };

  const getStatusColor = (status: BookingStatus) => {
    switch (status) {
      case "confirmed": return "bg-blue-100 text-blue-800";
      case "completed": return "bg-green-100 text-green-800";
      case "cancelled": return "bg-red-100 text-red-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: BookingStatus) => {
    switch (status) {
      case "confirmed": return "Bestätigt";
      case "completed": return "Abgeschlossen";
      case "cancelled": return "Abgesagt";
      case "pending": return "Wartend";
      default: return status;
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case "video": return "Video";
      case "phone": return "Telefon";
      case "inperson": return "Vor Ort";
      default: return type;
    }
  };

  const updateBookingStatus = (id: string, newStatus: BookingStatus) => {
    setBookings(bookings.map(booking => 
      booking.id === id ? { ...booking, status: newStatus } : booking
    ));
  };

  const exportToCSV = () => {
    const headers = ["ID", "Name", "E-Mail", "Telefon", "Datum", "Zeit", "Typ", "Pflegegrad", "Status", "Erstellt"];
    const csvContent = [
      headers.join(","),
      ...filteredBookings.map(booking => [
        booking.id,
        booking.name,
        booking.email,
        booking.phone,
        booking.date,
        booking.time,
        getTypeText(booking.type),
        booking.careLevel,
        getStatusText(booking.status),
        booking.createdAt
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `bookings-${format(new Date(), "yyyy-MM-dd")}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-nature-charcoal mb-6 font-nunito">
                Admin <span className="text-nature-sage">Dashboard</span>
              </h1>
              <p className="text-xl text-muted-foreground font-source">
                Verwaltung der Buchungen und Termine
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Sun className="h-4 w-4" />
                <Switch
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />
                <Moon className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground font-nunito">
                  Gesamt
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-nature-sage mr-2" />
                  <span className="text-2xl font-bold font-nunito">{stats.total}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground font-nunito">
                  Bestätigt
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                  <span className="text-2xl font-bold font-nunito">{stats.confirmed}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground font-nunito">
                  Abgeschlossen
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-2xl font-bold font-nunito">{stats.completed}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground font-nunito">
                  Abgesagt
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center">
                  <XCircle className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-2xl font-bold font-nunito">{stats.cancelled}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground font-nunito">
                  Wartend
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-2xl font-bold font-nunito">{stats.pending}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Export */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-nunito">Buchungsverwaltung</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Suchen nach Name, E-Mail oder Buchungs-ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 font-source"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-48 font-source">
                    <SelectValue placeholder="Status filtern" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Alle Status</SelectItem>
                    <SelectItem value="confirmed">Bestätigt</SelectItem>
                    <SelectItem value="completed">Abgeschlossen</SelectItem>
                    <SelectItem value="cancelled">Abgesagt</SelectItem>
                    <SelectItem value="pending">Wartend</SelectItem>
                  </SelectContent>
                </Select>
                <Button onClick={exportToCSV} variant="outline" className="font-nunito">
                  <Download className="h-4 w-4 mr-2" />
                  CSV Export
                </Button>
              </div>

              {/* Bookings Table */}
              <div className="rounded-md border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-nunito">Buchungs-ID</TableHead>
                      <TableHead className="font-nunito">Name</TableHead>
                      <TableHead className="font-nunito">Kontakt</TableHead>
                      <TableHead className="font-nunito">Termin</TableHead>
                      <TableHead className="font-nunito">Typ</TableHead>
                      <TableHead className="font-nunito">Pflegegrad</TableHead>
                      <TableHead className="font-nunito">Status</TableHead>
                      <TableHead className="font-nunito">Aktionen</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-mono text-sm">{booking.id}</TableCell>
                        <TableCell className="font-source">{booking.name}</TableCell>
                        <TableCell className="font-source">
                          <div className="text-sm">
                            <div>{booking.email}</div>
                            <div className="text-muted-foreground">{booking.phone}</div>
                          </div>
                        </TableCell>
                        <TableCell className="font-source">
                          <div className="text-sm">
                            <div>{format(new Date(booking.date), "dd.MM.yyyy", { locale: de })}</div>
                            <div className="text-muted-foreground">{booking.time}</div>
                          </div>
                        </TableCell>
                        <TableCell className="font-source">{getTypeText(booking.type)}</TableCell>
                        <TableCell className="font-source">{booking.careLevel}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(booking.status)}>
                            {getStatusText(booking.status)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Select
                            value={booking.status}
                            onValueChange={(value: BookingStatus) => updateBookingStatus(booking.id, value)}
                          >
                            <SelectTrigger className="w-32 font-source">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="pending">Wartend</SelectItem>
                              <SelectItem value="confirmed">Bestätigt</SelectItem>
                              <SelectItem value="completed">Abgeschlossen</SelectItem>
                              <SelectItem value="cancelled">Abgesagt</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {filteredBookings.length === 0 && (
                <div className="text-center py-8 text-muted-foreground font-source">
                  Keine Buchungen gefunden.
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;