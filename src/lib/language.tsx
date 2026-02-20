import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'th';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (en: string, th?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'sunnyday_language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  // Load language preference from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && (stored === 'en' || stored === 'th')) {
        setLanguageState(stored);
      }
      setIsLoaded(true);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'th' : 'en';
    setLanguage(newLang);
  };

  // Helper function to get translated text
  const t = (en: string, th?: string): string => {
    if (language === 'th' && th) {
      return th;
    }
    return en;
  };

  // Prevent hydration mismatch by not rendering until loaded
  if (!isLoaded) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// Hook for bilingual content
export function useBilingual<T extends { [key: string]: any }>(content: T) {
  const { language } = useLanguage();
  
  const get = (key: string): string => {
    const thKey = `${key}Th`;
    if (language === 'th' && thKey in content && content[thKey]) {
      return content[thKey];
    }
    return content[key] || '';
  };

  const getArray = (key: string): string[] => {
    const thKey = `${key}Th`;
    if (language === 'th' && thKey in content && content[thKey]) {
      return content[thKey];
    }
    return content[key] || [];
  };

  return { get, getArray, language };
}
