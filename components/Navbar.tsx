import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Terminal, Sun, Moon, Globe } from 'lucide-react';
import { Button } from './Button';
import { useApp } from '../contexts/AppContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, theme, toggleTheme, t } = useApp();
  const requestRef = useRef<number>();

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.talent'), href: '#tech-stack' },
    { name: t('nav.about'), href: '#about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smooth performance
      if (requestRef.current) return;
      
      requestRef.current = requestAnimationFrame(() => {
        // Handle Navbar background
        const currentScrollY = window.scrollY;
        setIsScrolled(currentScrollY > 20);

        // Handle Scroll Progress Bar
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
        setScrollProgress(Math.min(Math.max(scroll, 0), 1));
        
        // Handle Scroll Spy (Active Section)
        // We add a simplified check to see which section is currently in the viewport
        let current = '';
        for (const link of navLinks) {
          const sectionId = link.href.substring(1);
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            // If the top of the section is near the top of the viewport (with some offset)
            // or if the section covers the middle of the screen
            if (rect.top <= 150 && rect.bottom >= 150) {
              current = link.href;
            }
          }
        }
        if (current) setActiveSection(current);

        requestRef.current = undefined;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [navLinks]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-etalas-dark/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-etalas-teal rounded-lg flex items-center justify-center text-etalas-dark font-bold group-hover:rotate-12 transition-transform duration-300">
               <Terminal size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white">etalas<span className="text-etalas-teal">.aug</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative text-sm font-medium uppercase tracking-wider group py-1 transition-colors ${
                  activeSection === link.href 
                    ? 'text-etalas-cyan dark:text-etalas-teal' 
                    : 'text-slate-600 dark:text-etalas-white hover:text-etalas-cyan dark:hover:text-etalas-teal'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-etalas-cyan dark:bg-etalas-teal transition-all duration-300 ${activeSection === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            ))}

            <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-700 pl-4">
              <button 
                onClick={toggleTheme} 
                className="text-slate-500 dark:text-etalas-white hover:text-etalas-cyan transition-colors hover:rotate-45 duration-300"
                title="Toggle Theme"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button 
                onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
                className="text-slate-500 dark:text-etalas-white hover:text-etalas-cyan transition-colors flex items-center gap-1 text-sm font-semibold hover:scale-105 duration-200"
                title="Switch Language"
                aria-label="Switch Language"
              >
                <Globe size={18} />
                {language.toUpperCase()}
              </button>
            </div>

            <Button size="sm" variant="hire" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}>
              {t('nav.quote')}
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="text-slate-600 dark:text-etalas-white"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-600 dark:text-etalas-white p-2" aria-label="Menu">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-etalas-cyan to-etalas-teal transition-all duration-150 z-50" style={{ width: `${scrollProgress * 100}%` }}></div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-etalas-gray/95 backdrop-blur-xl absolute top-full left-0 w-full border-t border-slate-200 dark:border-slate-700 shadow-xl animate-fade-in h-screen">
          <div className="px-4 py-6 space-y-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className={`block text-xl font-medium ${
                   activeSection === link.href ? 'text-etalas-cyan' : 'text-slate-900 dark:text-etalas-white'
                }`}
              >
                {link.name}
              </a>
            ))}
             <button 
                onClick={() => {
                  setLanguage(language === 'en' ? 'id' : 'en');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-slate-900 dark:text-etalas-white hover:text-etalas-cyan text-xl font-medium"
              >
                Switch to {language === 'en' ? 'Indonesian' : 'English'}
              </button>
            <Button className="w-full text-lg py-4" variant="hire" onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'});
            }}>{t('nav.quote')}</Button>
          </div>
        </div>
      )}
    </nav>
  );
};