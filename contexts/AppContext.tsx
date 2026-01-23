import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'id';
export type Theme = 'dark' | 'light';

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
  'nav.switch': { en: 'Switch to Indonesian', id: 'Ganti ke Bahasa Inggris' },
  
  // Hero
  'hero.available': { en: 'Available Immediately', id: 'Tersedia Segera' },
  'hero.title.prefix': { en: 'Hire Top 1%', id: 'Rekrut 1% Terbaik' },
  'hero.title.suffix': { en: 'Remote Developers', id: 'Developer Remote' },
  'hero.desc': { en: 'Your trusted offshore development partner. Access pre-vetted engineers, specialized in React, Python, Node, and AI. Save 40% on hiring costs without compromising quality.', id: 'Mitra pengembangan offshore terpercaya Anda. Akses insinyur yang telah divaidasi, berspesialisasi dalam React, Python, Node, dan AI. Hemat 40% biaya perekrutan tanpa mengorbankan kualitas.' },
  'hero.cta.primary': { en: 'Hire Developers Now', id: 'Rekrut Developer Sekarang' },
  'hero.cta.secondary': { en: 'Explore Technologies', id: 'Lihat Teknologi' },

  // Common UI
  'ui.readMore': { en: 'Learn more', id: 'Pelajari lebih lanjut' },
  'ui.loading': { en: 'Loading...', id: 'Memuat...' },
  'ui.error': { en: 'Something went wrong', id: 'Terjadi kesalahan' },
  'ui.search': { en: 'Search...', id: 'Cari...' },
  'ui.scroll': { en: 'Scroll to explore', id: 'Gulir untuk melihat' },

  // Services
  'services.title': { en: 'Our Expertise', id: 'Keahlian Kami' },
  'services.desc': { en: 'We cover the entire product lifecycle, from initial concept to final deployment and scaling. Our flexible engagement models adapt to your business needs.', id: 'Kami mencakup seluruh siklus hidup produk, dari konsep awal hingga penerapan akhir dan penskalaan. Model keterlibatan fleksibel kami beradaptasi dengan kebutuhan bisnis Anda.' },

  // Process
  'process.title': { en: 'Streamlined Workflow', id: 'Alur Kerja Efisien' },
  'process.desc': { en: 'From initial consultation to code deployment in four simple steps. We have optimized every stage to be fast, transparent, and effective.', id: 'Dari konsultasi awal hingga penerapan kode dalam empat langkah sederhana. Kami telah mengoptimalkan setiap tahap agar cepat, transparan, dan efektif.' },

  // Benefits
  'benefits.label': { en: 'Why Choose Etalas', id: 'Mengapa Memilih Etalas' },
  'benefits.title': { en: 'Engineered for Performance', id: 'Dirancang untuk Performa' },
  'benefits.desc': { en: 'We have refined the remote engagement model to eliminate friction and maximize output. It is not just outsourcing; it is a partnership.', id: 'Kami telah menyempurnakan model keterlibatan jarak jauh untuk menghilangkan hambatan dan memaksimalkan output. Ini bukan sekadar outsourcing; ini adalah kemitraan.' },

  // Stats
  'stats.active': { en: 'Active Developers', id: 'Developer Aktif' },
  'stats.retention': { en: 'Retention Rate', id: 'Tingkat Retensi' },
  'stats.speed': { en: 'Hiring Speed', id: 'Kecepatan Rekrut' },
  'stats.reach': { en: 'Global Reach', id: 'Jangkauan Global' },
  'stats.countries': { en: 'Countries Served', id: 'Negara Terlayani' },

  // FAQ
  'faq.title': { en: 'Common Questions', id: 'Pertanyaan Umum' },
  'faq.desc': { en: 'Everything you need to know about building your remote team. Cannot find the answer? Contact us directly.', id: 'Segala hal yang perlu Anda ketahui tentang membangun tim jarak jauh Anda. Tidak menemukan jawabannya? Hubungi kami langsung.' },

  // Team
  'team.title': { en: 'Meet The Team', id: 'Tim Kami' },
  'team.subtitle': { en: 'The minds behind Etalas.', id: 'Para pemikir di balik Etalas.' },
  'team.founders': { en: 'The Founders', id: 'Para Pendiri' },
  'team.builders': { en: 'The Builders', id: 'Para Pengembang' },
  
  // Contact
  'contact.title': { en: 'Ready to Scale Your Team?', id: 'Siap Mengembangkan Tim Anda?' },
  'contact.desc': { en: 'Fill out the form to schedule a free consultation. We\'ll verify your requirements and send you candidate profiles within 48 hours.', id: 'Isi formulir untuk menjadwalkan konsultasi gratis. Kami akan memverifikasi kebutuhan Anda dan mengirimkan profil kandidat dalam 48 jam.' },
  'contact.name': { en: 'Full Name', id: 'Nama Lengkap' },
  'contact.company': { en: 'Company', id: 'Perusahaan' },
  'contact.email': { en: 'Work Email', id: 'Email Kerja' },
  'contact.message': { en: 'Project Requirements', id: 'Kebutuhan Proyek' },
  'contact.submit': { en: 'Send Request', id: 'Kirim Permintaan' },
  'contact.success': { en: 'Message sent successfully! We will contact you shortly.', id: 'Pesan berhasil terkirim! Kami akan segera menghubungi Anda.' },
  'contact.error': { en: 'Please fill in all required fields.', id: 'Mohon isi semua kolom yang wajib diisi.' },
  
  // AI Consultant
  'ai.title': { en: 'Not sure who you need?', id: 'Bingung siapa yang dibutuhkan?' },
  'ai.subtitle': { en: 'Ask Gemini.', id: 'Tanya Gemini.' },
  'ai.desc': { en: 'Describe your project, and our AI will instantly architect your ideal team structure.', id: 'Jelaskan proyek Anda, dan AI kami akan merancang struktur tim ideal Anda secara instan.' },
  'ai.placeholder': { en: 'e.g., I need to build a scalable fintech mobile app with real-time trading features...', id: 'misal, Saya butuh aplikasi fintech mobile yang skalabel dengan fitur trading realtime...' },
  'ai.analyze': { en: 'Analyze Needs', id: 'Analisa Kebutuhan' },
  'ai.summary': { en: 'Executive Summary', id: 'Ringkasan Eksekutif' },
  'ai.roles': { en: 'Recommended Roles', id: 'Rekomendasi Peran' },
  'ai.time': { en: 'Estimated Assembly Time', id: 'Estimasi Waktu Perakitan' },

  // Footer
  'footer.rights': { en: 'All rights reserved.', id: 'Hak cipta dilindungi.' },
  'footer.privacy': { en: 'Privacy Policy', id: 'Kebijakan Privasi' },
  'footer.terms': { en: 'Terms of Service', id: 'Syarat Ketentuan' },
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