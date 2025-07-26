'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  Clock, 
  Users, 
  Search, 
  Phone, 
  Mail, 
  Video,
  Download,
  Eye,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

interface Booking {
  id: string;
  kunde: string;
  email: string;
  telefon: string;
  datum: Date;
  uhrzeit: string;
  status: 'confirmed' | 'cancelled' | 'completed';
  pflegegrad: string;
  kommunikationsart: string;
  anliegen: string;
  berater?: string;
  meetingLink?: string;
}

export default function AdminDigitalBeratung() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    confirmed: 0,
    completed: 0,
    cancelled: 0,
    todayBookings: 0,
    weekBookings: 0
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch bookings and stats
        const [bookingsResponse, statsResponse] = await Promise.all([
          fetch('/api/admin/bookings'),
          fetch('/api/admin/bookings?action=stats')
        ]);
        
        const bookingsData = await bookingsResponse.json();
        const statsData = await statsResponse.json();
        
        if (bookingsData.success) {
          const formattedBookings = bookingsData.bookings.map((booking: any) => ({
            id: booking.id,
            kunde: booking.contactData.name,
            email: booking.contactData.email,
            telefon: booking.contactData.telefonnummer,
            datum: new Date(booking.selectedDate),
            uhrzeit: booking.selectedTime,
            status: booking.status,
            pflegegrad: booking.contactData.pflegegrad
              .replace('pflegegrad_', 'Pflegegrad ')
              .replace('noch_nicht_beantragt', 'Noch nicht beantragt')
              .replace('abgelehnt', 'Antrag abgelehnt'),
            kommunikationsart: booking.contactData.kommunikations_praeferenz === 'video' ? 'Video-Beratung' : 
                              booking.contactData.kommunikations_praeferenz === 'telefon' ? 'Telefon-Beratung' : 'Vor-Ort-Beratung',
            anliegen: booking.contactData.unterstuetzung_benoetigt || 'Keine Angabe',
            berater: booking.berater.name,
            meetingLink: booking.meetingLink
          }));
          
          setBookings(formattedBookings);
          setFilteredBookings(formattedBookings);
        }
        
        if (statsData.success) {
          setStats(statsData.stats);
        }
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  useEffect(() => {
    let filtered = bookings;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(booking =>
        booking.kunde.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by status
    if (filterStatus !== 'all') {
      filtered = filtered.filter(booking => booking.status === filterStatus);
    }

    setFilteredBookings(filtered);
  }, [searchTerm, filterStatus, bookings]);

  const updateBookingStatus = async (bookingId: string, action: string) => {
    try {
      const response = await fetch('/api/admin/bookings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookingId, action }),
      });

      const data = await response.json();

      if (data.success) {
        // Reload data
        window.location.reload();
      } else {
        alert('Fehler beim Aktualisieren der Buchung');
      }
    } catch (error) {
      console.error('Error updating booking:', error);
      alert('Fehler beim Aktualisieren der Buchung');
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Bestätigt</Badge>;
      case 'completed':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Abgeschlossen</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Storniert</Badge>;
      default:
        return <Badge variant="secondary">Unbekannt</Badge>;
    }
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Kunde', 'E-Mail', 'Telefon', 'Datum', 'Uhrzeit', 'Status', 'Pflegegrad', 'Kommunikationsart', 'Anliegen'];
    const csvData = filteredBookings.map(booking => [
      booking.id,
      booking.kunde,
      booking.email,
      booking.telefon,
      booking.datum.toLocaleDateString('de-DE'),
      booking.uhrzeit,
      booking.status,
      booking.pflegegrad,
      booking.kommunikationsart,
      booking.anliegen
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `pflegeberatung-termine_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg">Lade Daten...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold font-nunito text-nature-charcoal">Digitale Pflegeberatung</h2>
        <Button onClick={exportToCSV} className="bg-nature-sage hover:bg-nature-sage/90 font-nunito">
          <Download className="w-4 h-4 mr-2" />
          CSV Export
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-nature-sage" />
              <div>
                <p className="text-sm text-muted-foreground font-nunito">Gesamt</p>
                <p className="text-2xl font-bold font-nunito">{stats.total}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground font-nunito">Bestätigt</p>
                <p className="text-2xl font-bold font-nunito">{stats.confirmed}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-muted-foreground font-nunito">Abgeschlossen</p>
                <p className="text-2xl font-bold font-nunito">{stats.completed}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <XCircle className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-sm text-muted-foreground font-nunito">Storniert</p>
                <p className="text-2xl font-bold font-nunito">{stats.cancelled}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              <div>
                <p className="text-sm text-muted-foreground font-nunito">Heute</p>
                <p className="text-2xl font-bold font-nunito">{stats.todayBookings}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm text-muted-foreground font-nunito">Diese Woche</p>
                <p className="text-2xl font-bold font-nunito">{stats.weekBookings}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="font-nunito">Filter & Suche</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 items-end">
            <div className="flex-1">
              <label className="text-sm font-medium font-nunito">Suche nach Name, E-Mail oder ID</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Suche..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 font-source"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium font-nunito">Status</label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md font-source"
              >
                <option value="all">Alle Status</option>
                <option value="confirmed">Bestätigt</option>
                <option value="completed">Abgeschlossen</option>
                <option value="cancelled">Storniert</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bookings Table */}
      <Card>
        <CardHeader>
          <CardTitle className="font-nunito">Termine ({filteredBookings.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium font-nunito">ID</th>
                  <th className="text-left p-3 font-medium font-nunito">Kunde</th>
                  <th className="text-left p-3 font-medium font-nunito">Kontakt</th>
                  <th className="text-left p-3 font-medium font-nunito">Termin</th>
                  <th className="text-left p-3 font-medium font-nunito">Art</th>
                  <th className="text-left p-3 font-medium font-nunito">Status</th>
                  <th className="text-left p-3 font-medium font-nunito">Aktionen</th>
                </tr>
              </thead>
              <tbody>
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-mono text-sm">{booking.id}</td>
                    <td className="p-3">
                      <div>
                        <div className="font-medium font-source">{booking.kunde}</div>
                        <div className="text-sm text-gray-600 font-source">{booking.pflegegrad}</div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-sm font-source">
                          <Mail className="w-3 h-3" />
                          {booking.email}
                        </div>
                        <div className="flex items-center gap-1 text-sm font-source">
                          <Phone className="w-3 h-3" />
                          {booking.telefon}
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div>
                        <div className="font-medium font-source">{booking.datum.toLocaleDateString('de-DE')}</div>
                        <div className="text-sm text-gray-600 font-source">{booking.uhrzeit}</div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-1">
                        {booking.kommunikationsart.includes('Video') && <Video className="w-4 h-4" />}
                        {booking.kommunikationsart.includes('Telefon') && <Phone className="w-4 h-4" />}
                        {booking.kommunikationsart.includes('Vor-Ort') && <Users className="w-4 h-4" />}
                        <span className="text-sm font-source">{booking.kommunikationsart}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      {getStatusBadge(booking.status)}
                    </td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        {booking.status === 'confirmed' && (
                          <Button
                            size="sm"
                            onClick={() => updateBookingStatus(booking.id, 'complete')}
                            className="bg-blue-600 hover:bg-blue-700 font-nunito"
                          >
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Abschließen
                          </Button>
                        )}
                        {booking.status === 'confirmed' && (
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => updateBookingStatus(booking.id, 'cancel')}
                            className="font-nunito"
                          >
                            <XCircle className="w-3 h-3 mr-1" />
                            Stornieren
                          </Button>
                        )}
                        {booking.meetingLink && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => window.open(booking.meetingLink, '_blank')}
                            className="font-nunito"
                          >
                            <Video className="w-3 h-3 mr-1" />
                            Meeting
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {filteredBookings.length === 0 && (
              <div className="text-center py-8 text-gray-500 font-source">
                Keine Termine gefunden.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 