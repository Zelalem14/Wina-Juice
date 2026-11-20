import React from 'react';
import { useLanguage, LanguageMode } from '../context/LanguageContext';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  compact?: boolean;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ compact = false }) => {
  const { languageMode, setLanguageMode } = useLanguage();

  const options: { mode: LanguageMode; label: string; shortLabel: string }[] = [
    { mode: 'both', label: 'Both / ሁለቱም', shortLabel: 'Both' },
    { mode: 'en', label: 'English', shortLabel: 'EN' },
    { mode: 'am', label: 'አማርኛ', shortLabel: 'አማ' },
  ];

  return (
    <div className="inline-flex items-center bg-stone-100 p-1 rounded-2xl border border-stone-200 shadow-inner">
      <div className="px-2 text-stone-400 hidden sm:flex items-center">
        <Languages className="w-3.5 h-3.5" />
      </div>
      {options.map((opt) => {
        const isActive = languageMode === opt.mode;
        return (
          <button
            key={opt.mode}
            onClick={() => setLanguageMode(opt.mode)}
            className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
              isActive
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/60'
            }`}
            title={`Switch language mode to ${opt.label}`}
          >
            {compact ? opt.shortLabel : opt.label}
          </button>
        );
      })}
    </div>
  );
};
