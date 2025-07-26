import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Send, 
  Bot, 
  User, 
  Settings, 
  Save, 
  MessageSquare, 
  Trash2,
  Key,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  triage?: {
    priority: string;
    category: string;
    keywords: string[];
  };
}

interface ChatSession {
  id: string;
  guestId: string;
  messages: Message[];
  createdAt: string;
  status: 'active' | 'archived';
}

const AdminChatbox = () => {
  const [apiKey, setApiKey] = useState('');
  const [baseURL, setBaseURL] = useState('https://api.yescale.io/v1');
  const [model, setModel] = useState('gpt-4o');
  const [isApiConfigured, setIsApiConfigured] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [selectedSession, setSelectedSession] = useState<string>('');
  const [showSettings, setShowSettings] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Load saved API configuration
    const savedApiKey = localStorage.getItem('natura_admin_api_key');
    const savedBaseURL = localStorage.getItem('natura_admin_base_url');
    const savedModel = localStorage.getItem('natura_admin_model');
    
    if (savedApiKey) {
      setApiKey(savedApiKey);
      setIsApiConfigured(true);
    }
    if (savedBaseURL) setBaseURL(savedBaseURL);
    if (savedModel) setModel(savedModel);

    // Load chat sessions
    loadChatSessions();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const loadChatSessions = () => {
    const saved = localStorage.getItem('natura_admin_chat_sessions');
    if (saved) {
      setChatSessions(JSON.parse(saved));
    }
  };

  const saveChatSessions = (sessions: ChatSession[]) => {
    localStorage.setItem('natura_admin_chat_sessions', JSON.stringify(sessions));
    setChatSessions(sessions);
  };

  const saveApiConfiguration = () => {
    if (!apiKey.trim()) {
      toast({
        title: "Fehler",
        description: "Bitte geben Sie einen API Key ein",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem('natura_admin_api_key', apiKey);
    localStorage.setItem('natura_admin_base_url', baseURL);
    localStorage.setItem('natura_admin_model', model);
    setIsApiConfigured(true);
    setShowSettings(false);
    
    toast({
      title: "Erfolgreich",
      description: "API Konfiguration gespeichert",
    });
  };

  const testApiConnection = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: 'Test Nachricht',
          guestId: 'admin-test',
          apiKey,
          baseURL,
          model
        }),
      });

      if (response.ok) {
        toast({
          title: "Verbindung erfolgreich",
          description: "API funktioniert korrekt",
        });
      } else {
        throw new Error('API Test fehlgeschlagen');
      }
    } catch (error) {
      toast({
        title: "Verbindungsfehler",
        description: "API Test fehlgeschlagen",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const createNewSession = () => {
    const newSession: ChatSession = {
      id: `session-${Date.now()}`,
      guestId: `admin-${Date.now()}`,
      messages: [],
      createdAt: new Date().toISOString(),
      status: 'active'
    };
    
    const updatedSessions = [...chatSessions, newSession];
    saveChatSessions(updatedSessions);
    setSelectedSession(newSession.id);
    setMessages([]);
  };

  const selectSession = (sessionId: string) => {
    const session = chatSessions.find(s => s.id === sessionId);
    if (session) {
      setSelectedSession(sessionId);
      setMessages(session.messages);
    }
  };

  const deleteSession = (sessionId: string) => {
    const updatedSessions = chatSessions.filter(s => s.id !== sessionId);
    saveChatSessions(updatedSessions);
    
    if (selectedSession === sessionId) {
      setSelectedSession('');
      setMessages([]);
    }
  };

  const sendMessage = async () => {
    if (!currentMessage.trim() || !isApiConfigured) return;

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: currentMessage,
      timestamp: new Date().toISOString()
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setCurrentMessage('');
    setIsLoading(true);

    try {
      const conversation = updatedMessages.map(msg => ({
        sender: msg.sender,
        text: msg.text
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentMessage,
          conversation,
          guestId: selectedSession || 'admin-test',
          apiKey,
          baseURL,
          model
        }),
      });

      const data = await response.json();

      if (response.ok && data.response) {
        const botMessage: Message = {
          id: `msg-${Date.now()}-bot`,
          sender: 'assistant',
          text: data.response,
          timestamp: new Date().toISOString(),
          triage: data.triage
        };

        const finalMessages = [...updatedMessages, botMessage];
        setMessages(finalMessages);

        // Update session
        if (selectedSession) {
          const updatedSessions = chatSessions.map(session => 
            session.id === selectedSession 
              ? { ...session, messages: finalMessages }
              : session
          );
          saveChatSessions(updatedSessions);
        }
      } else {
        throw new Error(data.fallbackResponse || 'Fehler beim Senden der Nachricht');
      }
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Nachricht konnte nicht gesendet werden",
        variant: "destructive",
      });
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'URGENT':
        return <Badge variant="destructive" className="text-xs">Dringend</Badge>;
      case 'HIGH':
        return <Badge className="bg-orange-100 text-orange-800 text-xs">Hoch</Badge>;
      case 'MEDIUM':
        return <Badge className="bg-yellow-100 text-yellow-800 text-xs">Mittel</Badge>;
      case 'LOW':
        return <Badge variant="secondary" className="text-xs">Niedrig</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* API Configuration */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2 font-nunito">
              <Key className="h-5 w-5" />
              API Konfiguration
            </CardTitle>
            <div className="flex items-center gap-2">
              {isApiConfigured ? (
                <Badge className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Konfiguriert
                </Badge>
              ) : (
                <Badge variant="destructive">
                  <XCircle className="h-3 w-3 mr-1" />
                  Nicht konfiguriert
                </Badge>
              )}
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowSettings(!showSettings)}
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        {showSettings && (
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block font-source">API Key</label>
                <Input
                  type="password"
                  placeholder="Ihr OpenAI API Key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="font-source"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block font-source">Base URL</label>
                <Input
                  placeholder="https://api.yescale.io/v1"
                  value={baseURL}
                  onChange={(e) => setBaseURL(e.target.value)}
                  className="font-source"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block font-source">Modell</label>
              <Input
                placeholder="gpt-4o"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="font-source"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={saveApiConfiguration} className="font-nunito">
                <Save className="h-4 w-4 mr-2" />
                Speichern
              </Button>
              <Button variant="outline" onClick={testApiConnection} disabled={isLoading} className="font-nunito">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Verbindung testen
              </Button>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Chat Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Chat Sessions Sidebar */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-sm font-nunito">Chat Sessions</CardTitle>
              <Button size="sm" onClick={createNewSession} className="font-nunito">
                <MessageSquare className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-2">
            {chatSessions.map((session) => (
              <div
                key={session.id}
                className={`p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedSession === session.id 
                    ? 'bg-nature-sage/10 border border-nature-sage/20' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => selectSession(session.id)}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-sm font-medium font-source">
                      {session.guestId}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(session.createdAt).toLocaleDateString('de-DE')}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {session.messages.length} Nachrichten
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteSession(session.id);
                    }}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="font-nunito">Admin Chat Test</CardTitle>
          </CardHeader>
          <CardContent>
            {!isApiConfigured ? (
              <div className="text-center py-8 text-muted-foreground font-source">
                <Key className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                <p>Bitte konfigurieren Sie zuerst Ihren API Key</p>
              </div>
            ) : (
              <>
                {/* Messages */}
                <div className="h-96 overflow-y-auto mb-4 p-4 border rounded-lg space-y-4">
                  {messages.length === 0 ? (
                    <div className="text-center text-muted-foreground font-source">
                      <Bot className="h-8 w-8 mx-auto mb-2 text-muted-foreground/50" />
                      <p>Starten Sie eine Unterhaltung...</p>
                    </div>
                  ) : (
                    messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex gap-3 ${
                          message.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md p-3 rounded-lg ${
                            message.sender === 'user'
                              ? 'bg-nature-sage text-white'
                              : 'bg-gray-100 text-gray-900'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            {message.sender === 'user' ? (
                              <User className="h-4 w-4" />
                            ) : (
                              <Bot className="h-4 w-4" />
                            )}
                            <span className="text-xs opacity-75">
                              {new Date(message.timestamp).toLocaleTimeString('de-DE')}
                            </span>
                            {message.triage && getPriorityBadge(message.triage.priority)}
                          </div>
                          <p className="text-sm font-source">{message.text}</p>
                          {message.triage && (
                            <div className="mt-2 pt-2 border-t border-gray-200/50">
                              <p className="text-xs opacity-75">
                                Kategorie: {message.triage.category}
                              </p>
                              {message.triage.keywords.length > 0 && (
                                <p className="text-xs opacity-75">
                                  Keywords: {message.triage.keywords.join(', ')}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                  )}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-900 p-3 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Bot className="h-4 w-4" />
                          <span className="text-sm font-source">Schreibt...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Message Input */}
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Nachricht eingeben..."
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        sendMessage();
                      }
                    }}
                    className="flex-1 min-h-[60px] font-source"
                    disabled={isLoading}
                  />
                  <Button 
                    onClick={sendMessage} 
                    disabled={isLoading || !currentMessage.trim()}
                    className="self-end font-nunito"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminChatbox;