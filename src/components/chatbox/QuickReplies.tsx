import React from 'react';
import { Button } from '@/components/ui/button';

interface QuickRepliesProps {
  options: Array<{ emoji?: string; text: string; }> | string[];
  onSelect: (option: string) => void;
  isKnowledgeBased?: boolean;
}

const QuickReplies: React.FC<QuickRepliesProps> = ({ options, onSelect, isKnowledgeBased = false }) => {
  // Handle both string arrays and object arrays
  const normalizedOptions = options.map(option => {
    if (typeof option === 'string') {
      return { text: option };
    }
    return option;
  });

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-center gap-2">
        <p className="text-xs text-gray-500">Schnelle Antworten:</p>
        {isKnowledgeBased && (
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
            💡 KB
          </span>
        )}
      </div>
      <div className="grid gap-2">
        {normalizedOptions.map((option, index) => (
          <Button
            key={index}
            onClick={() => onSelect(option.text)}
            variant="outline"
            className={`justify-start text-sm h-auto py-2 px-3 transition-all duration-200 ${
              isKnowledgeBased 
                ? 'hover:bg-green-500 hover:text-white border-green-500 text-green-700 bg-green-50'
                : 'hover:bg-[#4A90E2] hover:text-white border-[#4A90E2] text-[#4A90E2]'
            }`}
          >
            {option.emoji && <span className="mr-2">{option.emoji}</span>}
            {option.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickReplies;