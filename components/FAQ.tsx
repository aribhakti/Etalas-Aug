import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ParallaxTitle } from './ParallaxTitle';

const faqs = [
  {
    question: "How rigorously do you vet your developers?",
    answer: "Extremely. Only top 1% pass our process. We conduct 4 stages: Resume Screening, Coding Challenge (Algorithm & Data Structures), Live Technical Interview with a Senior Engineer, and a Soft Skills/English Proficiency check. You only see candidates who have passed all four."
  },
  {
    question: "What if the developer isn't the right fit?",
    answer: "We offer a 2-week risk-free trial. If you're not satisfied within the first 14 days, you pay nothing, and we'll immediately replace the developer with a better match at no extra cost."
  },
  {
    question: "How fast can I start?",
    answer: "Typically, we can present you with shortlisted candidates within 24-48 hours. Once you select a developer, they can usually start onboarding within 2-3 business days."
  },
  {
    question: "Do you handle payroll and legal compliance?",
    answer: "Yes. You sign a contract with our US or Indonesian entity. We handle all local labor laws, taxes, benefits, and equipment for the developers. You just receive one simple monthly invoice."
  },
  {
    question: "Are the developers working in my timezone?",
    answer: "We have developers across Southeast Asia who are accustomed to working shifted hours to overlap with US (EST/PST), UK, and Australian timezones. We ensure at least 4 hours of overlap for synchronous collaboration."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
                      Common <br/> Questions
                    </h2>
                  </ParallaxTitle>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    Everything you need to know about building your remote team. Can't find the answer? Contact us directly.
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
                          {faq.question}
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
                          {faq.answer}
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