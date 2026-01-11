import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
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
  },
  {
    quote: "Their strict NDA and security protocols gave us the peace of mind we needed to outsource critical components of our banking infrastructure.",
    author: "James Peterson",
    role: "Head of Security",
    company: "SecureBank",
    image: "https://picsum.photos/100/100?random=5"
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50 dark:bg-etalas-dark overflow-hidden transition-colors duration-300">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
             
             {/* Left Column */}
             <div className="lg:col-span-5">
                <div className="lg:sticky lg:top-32">
                   <ScrollReveal>
                      <div className="inline-flex items-center justify-start gap-1 mb-4 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20">
                         {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
                         ))}
                         <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 ml-1">5.0/5.0 Rating</span>
                      </div>
                      <ParallaxTitle velocity={-0.05} direction="y">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                           Trusted by <br/> <span className="text-etalas-cyan dark:text-etalas-teal">Tech Leaders</span>
                        </h2>
                      </ParallaxTitle>
                      <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                         Don't just take our word for it. See what CTOs and VPs of Engineering are saying about their experience scaling with Etalas.
                      </p>
                      
                      {/* Navigation Buttons */}
                      <div className="flex gap-4">
                        <button 
                          onClick={handlePrev}
                          className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-white hover:bg-etalas-cyan hover:text-white hover:border-etalas-cyan dark:hover:bg-etalas-teal dark:hover:text-etalas-dark dark:hover:border-etalas-teal transition-all duration-300 active:scale-90"
                          aria-label="Previous Testimonial"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button 
                          onClick={handleNext}
                          className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-white hover:bg-etalas-cyan hover:text-white hover:border-etalas-cyan dark:hover:bg-etalas-teal dark:hover:text-etalas-dark dark:hover:border-etalas-teal transition-all duration-300 active:scale-90"
                          aria-label="Next Testimonial"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                   </ScrollReveal>
                </div>
             </div>

             {/* Right Column: Active Slide */}
             <div className="lg:col-span-7">
                <ScrollReveal delay={100} className="relative">
                   {/* Decorative Quote Icon */}
                   <div className="absolute -top-10 -left-6 text-slate-200 dark:text-white/5 z-0">
                      <Quote size={120} />
                   </div>

                   {/* Card Container */}
                   <div className="relative z-10 min-h-[300px]">
                      <div 
                        key={currentIndex} 
                        className="bg-white dark:bg-white/5 p-8 md:p-10 rounded-3xl border border-slate-100 dark:border-white/5 shadow-xl animate-fade-in-up"
                      >
                         <div className="flex gap-1 mb-6">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} size={18} className="fill-yellow-400 text-yellow-400" />
                            ))}
                         </div>
                         
                         <p className="text-xl md:text-2xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-8">
                            "{current.quote}"
                         </p>

                         <div className="flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-white/10">
                            <div className="w-14 h-14 rounded-full p-1 bg-gradient-to-br from-etalas-cyan to-etalas-teal">
                              <img 
                                src={current.image} 
                                alt={current.author} 
                                className="w-full h-full rounded-full object-cover border-2 border-white dark:border-slate-800"
                                loading="lazy"
                                decoding="async"
                                width="56"
                                height="56"
                              />
                            </div>
                            <div>
                               <div className="text-lg font-bold text-slate-900 dark:text-white">{current.author}</div>
                               <div className="text-slate-500 dark:text-slate-400 text-sm">{current.role}, <span className="text-etalas-cyan dark:text-etalas-teal font-medium">{current.company}</span></div>
                            </div>
                         </div>
                      </div>
                   </div>
                   
                   {/* Pagination Dots */}
                   <div className="flex justify-center mt-8 gap-2">
                      {testimonials.map((_, idx) => (
                         <button 
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              currentIndex === idx 
                                ? 'w-8 bg-etalas-cyan dark:bg-etalas-teal' 
                                : 'w-2 bg-slate-300 dark:bg-white/20 hover:bg-slate-400'
                            }`}
                            aria-label={`Go to testimonial ${idx + 1}`}
                         />
                      ))}
                   </div>
                </ScrollReveal>
             </div>

          </div>
       </div>
    </section>
  );
};