import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Brain, RefreshCw, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MessageList from './MessageList';
import QuickReplies from './QuickReplies';
import { detectLanguage, getContactInfo, getWelcomeMessage, getServiceOptions } from '../utils/languageUtils';
import { SmartChatLogic, KnowledgeMatch } from './KnowledgeBase';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  language?: string;
  source?: 'knowledge_base' | 'api' | 'fallback';
  suggestions?: string[];
}

interface ChatStats {
  knowledgeResponses: number;
  apiCalls: number;
  costSaved: number;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [detectedLanguage, setDetectedLanguage] = useState<string>('de');
  const [isTyping, setIsTyping] = useState(false);
  const [stats, setStats] = useState<ChatStats>({ knowledgeResponses: 0, apiCalls: 0, costSaved: 0 });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, sender: 'user' | 'bot', language?: string, source?: string, suggestions?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      language,
      source: source as 'knowledge_base' | 'api' | 'fallback',
      suggestions
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleFirstMessage = (message: string) => {
    const language = detectLanguage(message);
    setDetectedLanguage(language);
    
    addMessage(message, 'user');
    
    // Bot response with welcome message
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(getWelcomeMessage(language), 'bot', language);
    }, 1000);
  };

  const handleResetChat = () => {
    setMessages([]);
    setDetectedLanguage('de');
    setStats({ knowledgeResponses: 0, apiCalls: 0, costSaved: 0 });
    setInputMessage('');
    setIsTyping(false);
    
    // Show welcome message after reset
    setTimeout(() => {
      const welcomeText = `Hallo! Wie können wir Ihnen bei Natura Pflegedienst helfen? 🌿

Wählen Sie eine Option oder stellen Sie Ihre eigene Frage:`;
      
      const quickOptions = [
        "Ich benötige eine Pflegeberatung",
        "Ich brauche eine Haushaltshilfe", 
        "Ich brauche Unterstützung bei der Körperpflege",
        "Ich suche häusliche Krankenpflege",
        "Welche Leistungen bietet Natura Pflegedienst an?",
        "Kostenübernahme durch Pflegekasse"
      ];
      
      addMessage(welcomeText, 'bot', 'de', 'knowledge_base', quickOptions);
    }, 500);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    if (messages.length === 0) {
      handleFirstMessage(inputMessage);
    } else {
      addMessage(inputMessage, 'user');
      
      // Smart Knowledge Base First approach
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        
        // Check Knowledge Base first (FREE)
        const knowledgeMatch = SmartChatLogic.checkKnowledgeBase(inputMessage);
        
        if (knowledgeMatch && knowledgeMatch.confidence > 0.5) {
          // Use Knowledge Base response
          addMessage(knowledgeMatch.response, 'bot', detectedLanguage, knowledgeMatch.source, knowledgeMatch.suggestions);
          setStats(prev => ({ 
            ...prev, 
            knowledgeResponses: prev.knowledgeResponses + 1,
            costSaved: prev.costSaved + 0.02 // Estimated API cost per message
          }));
        } else if (SmartChatLogic.shouldUseAPI(inputMessage, knowledgeMatch)) {
          // Use API for complex queries (costs money - demo fallback for now)
          const fallback = SmartChatLogic.getFallbackResponse();
          addMessage(fallback.response, 'bot', detectedLanguage, fallback.source, fallback.suggestions);
          setStats(prev => ({ ...prev, apiCalls: prev.apiCalls + 1 }));
        } else {
          // Fallback response
          const fallback = SmartChatLogic.getFallbackResponse();
          addMessage(fallback.response, 'bot', detectedLanguage, fallback.source, fallback.suggestions);
        }
      }, 1000);
    }
    
    setInputMessage('');
  };

  const handleQuickReply = (service: string) => {
    addMessage(service, 'user');
    
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      
      // Use Knowledge Base for quick replies
      const knowledgeMatch = SmartChatLogic.checkKnowledgeBase(service);
      if (knowledgeMatch) {
        addMessage(knowledgeMatch.response, 'bot', detectedLanguage, knowledgeMatch.source, knowledgeMatch.suggestions);
        setStats(prev => ({ 
          ...prev, 
          knowledgeResponses: prev.knowledgeResponses + 1,
          costSaved: prev.costSaved + 0.02
        }));
      } else {
        addMessage(getContactInfo(detectedLanguage), 'bot', detectedLanguage);
      }
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    // Auto-start with welcome message if no messages exist
    if (messages.length === 0) {
      setTimeout(() => {
        const welcomeText = `Hallo! Wie können wir Ihnen bei Natura Pflegedienst helfen? 🌿

Wählen Sie eine Option oder stellen Sie Ihre eigene Frage:`;
        
        const quickOptions = [
          "Ich benötige eine Pflegeberatung",
          "Ich brauche eine Haushaltshilfe", 
          "Ich brauche Unterstützung bei der Körperpflege",
          "Ich suche häusliche Krankenpflege",
          "Welche Leistungen bietet Natura Pflegedienst an?",
          "Kostenübernahme durch Pflegekasse"
        ];
        
        addMessage(welcomeText, 'bot', 'de', 'knowledge_base', quickOptions);
      }, 800);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleOpenChat}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-nature-sage to-nature-teal hover:from-nature-sage/90 hover:to-nature-teal/90 text-white shadow-2xl transform transition-all duration-300 hover:scale-110 group border-2 border-white/20"
          size="icon"
        >
          <div className="flex items-center justify-center">
            <Sparkles className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
          </div>
        </Button>
        {/* Floating helper text */}
        <div className="absolute -top-8 -right-2 bg-nature-sage text-white text-xs px-3 py-1 rounded-full shadow-lg animate-pulse whitespace-nowrap">
          <span className="font-medium">Brauchen Sie Hilfe?</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-[380px] h-[600px] flex flex-col animate-fade-in border border-nature-sage/20 backdrop-blur-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-nature-sage to-nature-teal text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-nature-sage" />
            </div>
            <div>
              <h3 className="font-bold text-base font-nunito">Natura Assistant</h3>
              <p className="text-xs opacity-90 font-source">Ihre persönliche Pflegeberatung</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              onClick={handleResetChat}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 h-8 w-8"
              title="Chat zurücksetzen"
            >
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 h-8 w-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Status indicator - no cost display for customers */}
        {stats.knowledgeResponses > 0 && (
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-b border-emerald-200/50 p-3">
            <div className="flex items-center justify-center text-emerald-700 text-xs font-source">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="font-medium">Natura Smart Assistant aktiv</span>
              </div>
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-white to-nature-cream/10">
          {messages.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              <div className="w-16 h-16 bg-nature-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-nature-sage" />
              </div>
              <h4 className="font-semibold text-nature-charcoal mb-2 font-nunito">
                Willkommen bei Natura Assistant
              </h4>
              <p className="text-sm font-source">
                {detectedLanguage === 'vi' ? 'Xin chào! Hãy nhắn tin để bắt đầu cuộc trò chuyện.' :
                 detectedLanguage === 'en' ? 'Hello! Send a message to start the conversation.' :
                 'Stellen Sie Ihre Frage zur Pflege und Betreuung.'}
              </p>
            </div>
          )}
          
          <MessageList messages={messages} isTyping={isTyping} />
          
          {messages.length > 0 && messages[messages.length - 1].sender === 'bot' && (
            <QuickReplies
              options={messages[messages.length - 1].suggestions || getServiceOptions(detectedLanguage)}
              onSelect={handleQuickReply}
              isKnowledgeBased={messages[messages.length - 1].source === 'knowledge_base'}
            />
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-nature-sage/10 bg-white rounded-b-2xl">
          <div className="flex space-x-3">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                detectedLanguage === 'vi' ? 'Ihre Nachricht...' :
                detectedLanguage === 'en' ? 'Type your message...' :
                'Ihre Nachricht eingeben...'
              }
              className="flex-1 border-nature-sage/20 focus:border-nature-sage focus:ring-nature-sage/20 rounded-xl font-source"
              disabled={isTyping}
            />
            <Button
              onClick={handleSendMessage}
              disabled={isTyping || !inputMessage.trim()}
              className="bg-gradient-to-r from-nature-sage to-nature-teal hover:from-nature-sage/90 hover:to-nature-teal/90 text-white rounded-xl px-4 shadow-lg transition-all duration-200 disabled:opacity-50"
              size="icon"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          {isTyping && (
            <div className="flex items-center space-x-2 mt-2 text-nature-sage text-xs font-source">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-nature-sage rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-nature-sage rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-1 h-1 bg-nature-sage rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <span>Assistant tippt...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;