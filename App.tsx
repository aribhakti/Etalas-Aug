import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Clients } from './components/Clients';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { AppProvider } from './contexts/AppContext';
import { Preloader } from './components/Preloader';
import { ScrollToTop } from './components/ScrollToTop';
import { MessageCircle, Loader2 } from 'lucide-react';

// Lazy load components below the fold to improve initial load time
const TechStack = lazy(() => import('./components/TechStack').then(module => ({ default: module.TechStack })));
const Team = lazy(() => import('./components/Team').then(module => ({ default: module.Team })));
const Blog = lazy(() => import('./components/Blog').then(module => ({ default: module.Blog })));
const AIConsultant = lazy(() => import('./components/AIConsultant').then(module => ({ default: module.AIConsultant })));
const FAQ = lazy(() => import('./components/FAQ').then(module => ({ default: module.FAQ })));
const Contact = lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));

const SectionLoader = () => (
  <div className="py-24 flex justify-center items-center opacity-50">
    <Loader2 className="animate-spin text-etalas-cyan" size={40} />
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <AppProvider>
      <Preloader onFinish={() => setLoading(false)} />
      
      {!loading && (
        <div className="min-h-screen bg-slate-50 dark:bg-etalas-dark text-slate-900 dark:text-etalas-white selection:bg-etalas-cyan dark:selection:bg-etalas-teal selection:text-white dark:selection:text-etalas-dark transition-colors duration-300 animate-fade-in relative">
          
          {/* Global Animated Background Mesh */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-[120px] animate-blob"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-etalas-cyan/10 dark:bg-etalas-cyan/5 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
            <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-pink-500/10 dark:bg-pink-900/10 rounded-full blur-[80px] animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10">
            <Navbar />
            <main>
              {/* Critical Rendering Path: Load these immediately */}
              <Hero />
              <Clients />
              <Services />
              <Benefits />
              
              {/* Deferred Rendering: Load these only when needed */}
              <Suspense fallback={<SectionLoader />}>
                <TechStack />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <Team />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <AIConsultant />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <FAQ />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <Blog />
              </Suspense>

              <Suspense fallback={<SectionLoader />}>
                <Contact />
              </Suspense>
            </main>
            <Footer />
          </div>
          
          <ScrollToTop />

          {/* Floating WhatsApp Button */}
          <a 
            href="https://wa.me/62811297339" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-bounce hover:animate-none flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={28} fill="white" className="text-white" />
            <span className="absolute right-full mr-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
              Chat with us
            </span>
          </a>
        </div>
      )}
    </AppProvider>
  );
}

export default App;