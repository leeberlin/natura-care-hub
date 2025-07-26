import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MessageList from './MessageList';
import QuickReplies from './QuickReplies';
import { detectLanguage, getContactInfo, getWelcomeMessage, getServiceOptions } from '../utils/languageUtils';

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  language?: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [detectedLanguage, setDetectedLanguage] = useState<string>('de');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, sender: 'user' | 'bot', language?: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      language
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

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    if (messages.length === 0) {
      handleFirstMessage(inputMessage);
    } else {
      addMessage(inputMessage, 'user');
      
      // Simple bot response for demo
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        addMessage(getContactInfo(detectedLanguage), 'bot', detectedLanguage);
      }, 1000);
    }
    
    setInputMessage('');
  };

  const handleQuickReply = (service: string) => {
    addMessage(service, 'user');
    
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(getContactInfo(detectedLanguage), 'bot', detectedLanguage);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-[#4A90E2] hover:bg-[#357ABD] text-white shadow-lg transform transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-lg shadow-2xl w-[350px] h-[500px] flex flex-col animate-fade-in border border-gray-200">
        {/* Header */}
        <div className="bg-[#4A90E2] text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-[#4A90E2]" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Natura Pflegedienst</h3>
              <p className="text-xs opacity-90">Online</p>
            </div>
          </div>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 text-sm py-8">
              {detectedLanguage === 'vi' ? 'Xin chào! Hãy nhắn tin để bắt đầu cuộc trò chuyện.' :
               detectedLanguage === 'en' ? 'Hello! Send a message to start the conversation.' :
               'Hallo! Senden Sie eine Nachricht, um das Gespräch zu beginnen.'}
            </div>
          )}
          
          <MessageList messages={messages} isTyping={isTyping} />
          
          {messages.length > 0 && messages[messages.length - 1].sender === 'bot' && (
            <QuickReplies
              options={getServiceOptions(detectedLanguage)}
              onSelect={handleQuickReply}
            />
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                detectedLanguage === 'vi' ? 'Nhập tin nhắn...' :
                detectedLanguage === 'en' ? 'Type a message...' :
                'Nachricht eingeben...'
              }
              className="flex-1"
            />
            <Button
              onClick={handleSendMessage}
              className="bg-[#4A90E2] hover:bg-[#357ABD] text-white"
              size="icon"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;