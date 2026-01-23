import React, { useEffect, useRef, useState } from 'react';
import { Search, PenTool, Users, Rocket, Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ParallaxTitle } from './ParallaxTitle';
import { useApp } from '../contexts/AppContext';

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progressHeight, setProgressHeight] = useState(0);
  const { language, t } = useApp();

  const steps = [
    {
      icon: <Search size={24} />,
      title: { en: "Discovery", id: "Penemuan" },
      subtitle: { en: "Define Needs", id: "Definisi Kebutuhan" },
      desc: { 
        en: "We analyze your requirements, technical stack, and team culture to create the perfect candidate profile.",
        id: "Kami menganalisis kebutuhan, tumpukan teknis, dan budaya tim Anda untuk membuat profil kandidat yang sempurna."
      },
      items: {
         en: ["Requirement Analysis", "Culture Fit Assessment", "Timeline Planning"],
         id: ["Analisis Kebutuhan", "Penilaian Kecocokan Budaya", "Perencanaan Waktu"]
      }
    },
    {
      icon: <PenTool size={24} />,
      title: { en: "Agreement", id: "Kesepakatan" },
      subtitle: { en: "Transparent Contract", id: "Kontrak Transparan" },
      desc: {
        en: "Simple, transparent pricing models. No hidden fees. We sign NDA & MSA to ensure your IP is protected.",
        id: "Model harga sederhana dan transparan. Tidak ada biaya tersembunyi. Kami menandatangani NDA & MSA untuk memastikan IP Anda terlindungi."
      },
      items: {
        en: ["Engagement Model Selection", "Sign NDA & MSA", "SLA Definition"],
        id: ["Pemilihan Model Kerjasama", "Tanda Tangan NDA & MSA", "Definisi SLA"]
      }
    },
    {
      icon: <Users size={24} />,
      title: { en: "Selection", id: "Seleksi" },
      subtitle: { en: "Vetted Talent", id: "Talenta Terkurasi" },
      desc: {
        en: "Interview our top 1% pre-vetted candidates. Conduct technical assessments and meet the team before deciding.",
        id: "Wawancarai kandidat 1% teratas kami. Lakukan penilaian teknis dan temui tim sebelum memutuskan."
      },
      items: {
        en: ["Candidate Shortlisting", "Technical Interview", "Final Selection"],
        id: ["Daftar Pendek Kandidat", "Wawancara Teknis", "Seleksi Akhir"]
      }
    },
    {
      icon: <Rocket size={24} />,
      title: { en: "Onboarding", id: "Onboarding" },
      subtitle: { en: "Start Building", id: "Mulai Membangun" },
      desc: {
        en: "Seamless onboarding process. We handle access setup, workflow synchronization, and kick off within 48 hours.",
        id: "Proses onboarding yang mulus. Kami menangani pengaturan akses, sinkronisasi alur kerja, dan memulai dalam 48 jam."
      },
      items: {
        en: ["Access & Tools Setup", "Workflow Sync", "Project Kickoff"],
        id: ["Pengaturan Akses & Alat", "Sinkronisasi Alur Kerja", "Kickoff Proyek"]
      }
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      const startOffset = windowHeight / 2;
      const relativeY = startOffset - rect.top;
      
      const progress = Math.min(Math.max(relativeY / elementHeight, 0), 1);
      setProgressHeight(progress * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" className="py-24 md:py-32 bg-slate-50 dark:bg-etalas-gray/20 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <ScrollReveal>
                <ParallaxTitle velocity={-0.05} direction="y">
                   <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                     {t('process.title').split(' ')[0]} <br/> <span className="text-etalas-cyan dark:text-etalas-teal">{t('process.title').split(' ').slice(1).join(' ')}</span>
                   </h2>
                </ParallaxTitle>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  {t('process.desc')}
                </p>
                <div className="hidden lg:flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                   <span>{t('ui.scroll')}</span>
                   <div className="w-1 h-1 bg-etalas-cyan rounded-full animate-bounce"></div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Vertical Steps */}
          <div className="lg:col-span-7">
             <div className="relative" ref={containerRef}>
                {/* Background Line - Hidden on Mobile */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200 dark:bg-white/10 hidden md:block"></div>
                
                {/* Active Progress Line - Hidden on Mobile */}
                <div 
                   className="absolute left-6 top-6 w-0.5 bg-gradient-to-b from-etalas-cyan to-etalas-teal hidden md:block transition-all duration-100 ease-out"
                   style={{ height: `calc(${progressHeight}% - 24px)`, maxHeight: 'calc(100% - 48px)' }}
                ></div>

                <div className="space-y-12">
                   {steps.map((step, idx) => (
                      <ScrollReveal key={idx} delay={idx * 100}>
                         <div className="relative flex flex-col md:flex-row gap-6 md:gap-8">
                            {/* Icon Marker */}
                            <div className="flex-shrink-0 z-10 flex items-start">
                               <div 
                                 className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ring-4 ring-slate-50 dark:ring-etalas-dark transition-all duration-500 ${
                                    (progressHeight > (idx / steps.length) * 100) 
                                       ? 'bg-etalas-cyan text-white scale-110 shadow-etalas-cyan/40' 
                                       : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                                 }`}
                               >
                                  {step.icon}
                               </div>
                               {/* Mobile Line Connector */}
                               {idx !== steps.length - 1 && (
                                 <div className="absolute left-6 top-12 bottom-[-48px] w-0.5 bg-slate-200 dark:bg-white/10 md:hidden"></div>
                               )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-1">
                               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{step.subtitle[language]}</h3>
                               <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                  {step.desc[language]}
                               </p>
                               <div className="bg-white dark:bg-white/5 rounded-xl p-4 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow">
                                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                     {step.items[language].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                                           <Check size={14} className="text-green-500 shrink-0" />
                                           {item}
                                        </li>
                                     ))}
                                  </ul>
                               </div>
                            </div>
                         </div>
                      </ScrollReveal>
                   ))}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};