import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'id';
type Theme = 'dark' | 'light';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.services': { en: 'Services', id: 'Layanan' },
  'nav.process': { en: 'Process', id: 'Proses' },
  'nav.talent': { en: 'Talent', id: 'Talenta' },
  'nav.about': { en: 'About', id: 'Tentang' },
  'nav.quote': { en: 'Get a Quote', id: 'Minta Penawaran' },
  
  // Hero
  'hero.available': { en: 'Available Immediately', id: 'Tersedia Segera' },
  'hero.title.prefix': { en: 'Hire Top 1%', id: 'Rekrut 1% Terbaik' },
  'hero.title.suffix': { en: 'Remote Developers', id: 'Developer Remote' },
  'hero.desc': { en: 'Your trusted offshore development partner. Access pre-vetted engineers, specialized in React, Python, Node, and AI. Save 40% on hiring costs without compromising quality.', id: 'Mitra pengembangan offshore terpercaya Anda. Akses insinyur yang telah divaidasi, berspesialisasi dalam React, Python, Node, dan AI. Hemat 40% biaya perekrutan tanpa mengorbankan kualitas.' },
  'hero.cta.primary': { en: 'Hire Developers Now', id: 'Rekrut Developer Sekarang' },
  'hero.cta.secondary': { en: 'Explore Technologies', id: 'Lihat Teknologi' },

  // Team
  'team.title': { en: 'Meet The Team', id: 'Tim Kami' },
  'team.subtitle': { en: 'The minds behind Etalas.', id: 'Para pemikir di balik Etalas.' },
  'team.founders': { en: 'The Founders', id: 'Para Pendiri' },
  'team.builders': { en: 'The Builders', id: 'Para Pengembang' },
  
  // Footer
  'footer.rights': { en: 'All rights reserved.', id: 'Hak cipta dilindungi.' },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize state from localStorage if available, otherwise default
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('etalas-lang');
      return (saved === 'en' || saved === 'id') ? saved : 'en';
    }
    return 'en';
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('etalas-theme');
      return (saved === 'dark' || saved === 'light') ? saved : 'light';
    }
    return 'light';
  });

  // Persist Language
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('etalas-lang', lang);
  };

  // Persist Theme & Apply Class
  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem('etalas-theme', t);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, toggleTheme, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};