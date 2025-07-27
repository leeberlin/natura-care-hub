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
    <div className="space-y-3 mt-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-xs text-nature-sage font-source font-medium">Schnelle Antworten:</p>
        {isKnowledgeBased && (
          <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
            💡 Smart
          </span>
        )}
      </div>
      <div className="grid gap-2">
        {normalizedOptions.map((option, index) => (
          <Button
            key={index}
            onClick={() => onSelect(option.text)}
            variant="outline"
            className={`justify-start text-sm h-auto py-3 px-4 transition-all duration-200 rounded-xl font-source text-left leading-relaxed ${
              isKnowledgeBased 
                ? 'hover:bg-emerald-500 hover:text-white border-emerald-300 text-emerald-700 bg-emerald-50/50 hover:shadow-lg hover:scale-[1.02]'
                : 'hover:bg-nature-sage hover:text-white border-nature-sage/30 text-nature-sage bg-nature-sage/5 hover:shadow-lg hover:scale-[1.02]'
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