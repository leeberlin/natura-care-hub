import React from 'react';
import { Message } from './ChatWidget';

interface MessageListProps {
  messages: Message[];
  isTyping: boolean;
}

const MessageList: React.FC<MessageListProps> = ({ messages, isTyping }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('de-DE', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} group`}
        >
          <div
            className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm transition-all duration-200 ${
              message.sender === 'user'
                ? 'bg-gradient-to-r from-nature-sage to-nature-teal text-white rounded-br-md'
                : 'bg-white border border-nature-sage/10 text-nature-charcoal rounded-bl-md'
            }`}
          >
            <p className="text-sm whitespace-pre-wrap font-source leading-relaxed">{message.text}</p>
            <div className="flex items-center justify-between mt-2">
              <p className={`text-xs font-source ${
                message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
              }`}>
                {formatTime(message.timestamp)}
              </p>
              {message.source === 'knowledge_base' && (
                <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full font-medium">
                  💡 Smart
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
      
      {isTyping && (
        <div className="flex justify-start">
          <div className="bg-white border border-nature-sage/10 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-nature-sage rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-nature-sage rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-nature-sage rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageList;