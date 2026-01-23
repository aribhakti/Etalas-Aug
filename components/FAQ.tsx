import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ParallaxTitle } from './ParallaxTitle';
import { useApp } from '../contexts/AppContext';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language, t } = useApp();

  const faqs = [
    {
      question: { en: "How rigorously do you vet your developers?", id: "Seberapa ketat Anda menyeleksi developer?" },
      answer: {
        en: "Extremely. Only top 1% pass our process. We conduct 4 stages: Resume Screening, Coding Challenge (Algorithm & Data Structures), Live Technical Interview with a Senior Engineer, and a Soft Skills/English Proficiency check. You only see candidates who have passed all four.",
        id: "Sangat ketat. Hanya 1% teratas yang lolos. Kami melakukan 4 tahap: Screening Resume, Tes Coding (Algoritma & Struktur Data), Wawancara Teknis Langsung dengan Senior Engineer, dan Cek Soft Skills/Bahasa Inggris."
      }
    },
    {
      question: { en: "What if the developer isn't the right fit?", id: "Bagaimana jika developer tidak cocok?" },
      answer: {
        en: "We offer a 2-week risk-free trial. If you're not satisfied within the first 14 days, you pay nothing, and we'll immediately replace the developer with a better match at no extra cost.",
        id: "Kami menawarkan uji coba bebas risiko selama 2 minggu. Jika Anda tidak puas dalam 14 hari pertama, Anda tidak membayar apa pun, dan kami akan segera mengganti developer tersebut."
      }
    },
    {
      question: { en: "How fast can I start?", id: "Seberapa cepat saya bisa mulai?" },
      answer: {
        en: "Typically, we can present you with shortlisted candidates within 24-48 hours. Once you select a developer, they can usually start onboarding within 2-3 business days.",
        id: "Biasanya, kami dapat menyajikan kandidat terpilih dalam 24-48 jam. Setelah Anda memilih developer, mereka biasanya dapat mulai onboarding dalam 2-3 hari kerja."
      }
    },
    {
      question: { en: "Do you handle payroll and legal compliance?", id: "Apakah Anda menangani penggajian dan kepatuhan hukum?" },
      answer: {
        en: "Yes. You sign a contract with our US or Indonesian entity. We handle all local labor laws, taxes, benefits, and equipment for the developers. You just receive one simple monthly invoice.",
        id: "Ya. Anda menandatangani kontrak dengan entitas AS atau Indonesia kami. Kami menangani semua hukum ketenagakerjaan lokal, pajak, tunjangan, dan peralatan. Anda hanya menerima satu faktur bulanan yang sederhana."
      }
    },
    {
      question: { en: "Are the developers working in my timezone?", id: "Apakah developer bekerja di zona waktu saya?" },
      answer: {
        en: "We have developers across Southeast Asia who are accustomed to working shifted hours to overlap with US (EST/PST), UK, and Australian timezones. We ensure at least 4 hours of overlap for synchronous collaboration.",
        id: "Kami memiliki developer di seluruh Asia Tenggara yang terbiasa bekerja dengan jam kerja yang disesuaikan untuk overlap dengan zona waktu AS, Inggris, dan Australia. Kami memastikan setidaknya 4 jam overlap untuk kolaborasi sinkron."
      }
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-etalas-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
           
           {/* Left Column */}
           <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <ScrollReveal>
                  <ParallaxTitle velocity={-0.05} direction="y">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                      {t('faq.title').split(' ')[0]} <br/> {t('faq.title').split(' ').slice(1).join(' ')}
                    </h2>
                  </ParallaxTitle>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t('faq.desc')}
                  </p>
                </ScrollReveal>
              </div>
           </div>

           {/* Right Column: Accordion */}
           <div className="lg:col-span-7">
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <ScrollReveal key={idx} delay={idx * 50}>
                    <div 
                      className={`bg-slate-50 dark:bg-white/5 rounded-2xl transition-all duration-300 ${
                        openIndex === idx 
                          ? 'ring-2 ring-slate-200 dark:ring-white/10 shadow-lg' 
                          : 'hover:bg-slate-100 dark:hover:bg-white/10'
                      }`}
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                      >
                        <span className={`text-lg font-bold transition-colors ${openIndex === idx ? 'text-etalas-cyan dark:text-etalas-teal' : 'text-slate-900 dark:text-white'}`}>
                          {faq.question[language]}
                        </span>
                        {openIndex === idx ? (
                          <ChevronUp className="text-etalas-cyan dark:text-etalas-teal" />
                        ) : (
                          <ChevronDown className="text-slate-400" />
                        )}
                      </button>
                      
                      <div 
                        className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                          openIndex === idx ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                          {faq.answer[language]}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};