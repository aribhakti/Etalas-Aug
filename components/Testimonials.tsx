import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Star } from 'lucide-react';
import { ParallaxTitle } from './ParallaxTitle';

const testimonials = [
  {
    quote: "Etalas helped us scale from 3 to 15 engineers in just two months. The quality of talent is indistinguishable from our in-house SF team.",
    author: "Sarah Jenkins",
    role: "CTO",
    company: "FinFlow",
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    quote: "The ability to use their AI matcher to draft a team structure saved us weeks of planning. We got exactly the senior React devs we needed.",
    author: "Michael Chang",
    role: "VP of Engineering",
    company: "DataSphere",
    image: "https://picsum.photos/100/100?random=3"
  },
  {
    quote: "We were skeptical about remote teams, but Etalas developers integrated perfectly. Communication is flawless, and the code quality is superb.",
    author: "Elena Rodriguez",
    role: "Product Director",
    company: "HealthTech Solutions",
    image: "https://picsum.photos/100/100?random=4"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50 dark:bg-etalas-dark overflow-hidden transition-colors duration-300">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
             
             {/* Left Column */}
             <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-32">
                   <ScrollReveal>
                      <div className="inline-flex items-center justify-start gap-1 mb-4 bg-yellow-400/10 px-3 py-1 rounded-full">
                         {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
                         ))}
                         <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 ml-1">5.0</span>
                      </div>
                      <ParallaxTitle velocity={-0.05} direction="y">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                           Trusted by <br/> <span className="text-etalas-cyan dark:text-etalas-teal">Tech Leaders</span>
                        </h2>
                      </ParallaxTitle>
                      <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                         Don't just take our word for it. See what CTOs and VPs of Engineering are saying about their experience with Etalas.
                      </p>
                   </ScrollReveal>
                </div>
             </div>

             {/* Right Column */}
             <div className="lg:col-span-7">
                <div className="grid grid-cols-1 gap-6">
                   {testimonials.map((t, idx) => (
                      <ScrollReveal key={idx} delay={idx * 150}>
                        <div className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-slate-100 dark:border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row gap-6">
                           <div className="flex-shrink-0">
                              <img 
                                src={t.image} 
                                alt={t.author} 
                                className="w-16 h-16 rounded-full object-cover border-2 border-slate-100 dark:border-white/10"
                                loading="lazy"
                              />
                           </div>
                           <div>
                              <div className="flex gap-1 mb-4">
                                 {[1, 2, 3, 4, 5].map((s) => (
                                   <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
                                 ))}
                              </div>
                              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-4 italic">
                                 "{t.quote}"
                              </p>
                              <div>
                                 <div className="text-slate-900 dark:text-white font-bold">{t.author}</div>
                                 <div className="text-slate-500 dark:text-slate-500 text-sm">{t.role}, {t.company}</div>
                              </div>
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