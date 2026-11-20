import React, { createContext, useContext, useState, useEffect } from 'react';

export type LanguageMode = 'both' | 'en' | 'am';

interface LanguageContextType {
  languageMode: LanguageMode;
  setLanguageMode: (mode: LanguageMode) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  languageMode: 'both',
  setLanguageMode: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [languageMode, setLanguageMode] = useState<LanguageMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('wina_lang_mode') as LanguageMode;
      if (saved && ['both', 'en', 'am'].includes(saved)) {
        return saved;
      }
    }
    return 'both';
  });

  useEffect(() => {
    localStorage.setItem('wina_lang_mode', languageMode);
  }, [languageMode]);

  return (
    <LanguageContext.Provider value={{ languageMode, setLanguageMode }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
