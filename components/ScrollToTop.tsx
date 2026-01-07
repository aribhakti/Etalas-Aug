import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const requestRef = useRef<number>();

  useEffect(() => {
    const toggleVisibility = () => {
      if (requestRef.current) return;
      
      requestRef.current = requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 300);
        requestRef.current = undefined;
      });
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      } mr-20 mb-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-etalas-cyan`}
      aria-label="Scroll to top of page"
    >
      <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};