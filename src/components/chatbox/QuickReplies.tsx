import React from 'react';
import { Button } from '@/components/ui/button';

interface QuickRepliesProps {
  options: Array<{ emoji: string; text: string; }>;
  onSelect: (option: string) => void;
}

const QuickReplies: React.FC<QuickRepliesProps> = ({ options, onSelect }) => {
  return (
    <div className="space-y-2">
      <p className="text-xs text-gray-500 text-center">Schnelle Antworten:</p>
      <div className="grid gap-2">
        {options.map((option, index) => (
          <Button
            key={index}
            onClick={() => onSelect(option.text)}
            variant="outline"
            className="justify-start text-sm h-auto py-2 px-3 hover:bg-[#4A90E2] hover:text-white border-[#4A90E2] text-[#4A90E2]"
          >
            <span className="mr-2">{option.emoji}</span>
            {option.text}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickReplies;