import React, { useRef } from 'react';
import { Button } from './Button';
import { ArrowRight, Users, CheckCircle, Sparkles } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { ScrollReveal } from './ScrollReveal';

export const Hero: React.FC = () => {
  const { t } = useApp();
  const cardRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  
  const titlePrefix = t('hero.title.prefix').split(' ');
  const titleSuffix = t('hero.title.suffix').split(' ');

  const allWords = [
    ...titlePrefix.map(word => ({ text: word, gradient: false })),
    ...titleSuffix.map(word => ({ text: word, gradient: true }))
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !cardContainerRef.current) return;
    
    // Use requestAnimationFrame to decouple event firing from DOM updates
    requestAnimationFrame(() => {
        const card = cardContainerRef.current;
        if (!card) return;
        
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        
        if (cardRef.current) {
            cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    });
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
        cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-transparent z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 text-center lg:text-left z-20">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-etalas-cyan dark:bg-etalas-teal animate-pulse"></span>
                {t('hero.available')}
                <Sparkles size={12} className="ml-1 text-yellow-500 animate-sparkle-pulse" />
              </div>
            </ScrollReveal>
            
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1">
                {allWords.map((item, i) => (
                  <span 
                    key={i} 
                    className={`inline-block animate-[fadeInUp_0.8s_ease-out_forwards] hover:scale-105 transition-transform duration-300 cursor-default ${
                      item.gradient 
                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-etalas-cyan via-purple-500 to-pink-500 pb-2' 
                        : ''
                    }`} 
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {item.text}
                  </span>
                ))}
              </h1>
            </div>
            
            <ScrollReveal delay={500}>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                {t('hero.desc')}
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16">
                <Button variant="hire" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})} className="shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  {t('hero.cta.primary')}
                  <ArrowRight size={18} />
                </Button>
                <Button variant="secondary" size="lg" onClick={() => document.getElementById('tech-stack')?.scrollIntoView({ behavior: 'smooth'})} className="bg-white/50 dark:bg-white/5 border-slate-200 dark:border-white/10 backdrop-blur-md">
                  {t('hero.cta.secondary')}
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={700}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2 group cursor-default">
                  <CheckCircle size={18} className="text-etalas-cyan dark:text-etalas-teal group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Risk-Free Trial</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <CheckCircle size={18} className="text-etalas-cyan dark:text-etalas-teal group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Strict NDA</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <CheckCircle size={18} className="text-etalas-cyan dark:text-etalas-teal group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Timezone Aligned</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex-1 relative w-full max-w-lg lg:max-w-none hidden md:block perspective-1000">
             <ScrollReveal delay={300} className="w-full h-full flex items-center justify-center">
               <div 
                 ref={cardContainerRef}
                 onMouseMove={handleMouseMove}
                 onMouseLeave={handleMouseLeave}
                 className="relative z-10 w-full" // Added w-full to ensure hit area
               >
                 <div
                    ref={cardRef}
                    className="preserve-3d transition-transform duration-100 ease-out"
                    style={{ transformStyle: 'preserve-3d' }}
                 >
                    {/* Main Card */}
                    <div className="bg-white/90 dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-2xl transform transition-all duration-300">
                        <div className="flex items-start justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <img 
                                src="https://picsum.photos/200/200?random=10" 
                                className="w-16 h-16 rounded-2xl object-cover shadow-md" 
                                alt="David Chen - Senior Full Stack Developer" 
                                width="64"
                                height="64"
                                // Performance: Eager load LCP image
                                loading="eager"
                                decoding="async"
                            />
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">David Chen</h3>
                                <p className="text-etalas-cyan dark:text-etalas-teal font-medium">Senior Full Stack Developer</p>
                            </div>
                        </div>
                        <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wide rounded-full border border-green-500/20 animate-pulse">
                            Available
                        </span>
                        </div>
                        
                        <div className="space-y-4 mb-8">
                        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-default">
                            <span className="text-sm text-slate-500 dark:text-slate-400">Experience</span>
                            <span className="text-sm font-bold text-slate-900 dark:text-white">8+ Years</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-default">
                            <span className="text-sm text-slate-500 dark:text-slate-400">Stack</span>
                            <span className="text-sm font-bold text-slate-900 dark:text-white">React, Node.js, AWS</span>
                        </div>
                        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-default">
                            <span className="text-sm text-slate-500 dark:text-slate-400">English</span>
                            <span className="text-sm font-bold text-slate-900 dark:text-white">C1 Advanced</span>
                        </div>
                        </div>

                        <div className="flex gap-2 flex-wrap">
                        {['React', 'Next.js', 'PostgreSQL', 'TypeScript'].map(tech => (
                            <span key={tech} className="px-3 py-1.5 bg-slate-100 dark:bg-white/5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5 hover:border-etalas-cyan/50 dark:hover:border-etalas-teal/50 transition-colors cursor-default">
                            {tech}
                            </span>
                        ))}
                        </div>
                    </div>

                    {/* Floating Metric Card - With 3D transform effect */}
                    <div 
                        className="absolute -left-12 bottom-12 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-xl flex items-center gap-4 animate-bounce duration-[3000ms] z-20 max-w-xs"
                        style={{ transform: 'translateZ(40px)' }}
                    >
                        <div className="w-12 h-12 rounded-xl bg-etalas-cyan text-white flex items-center justify-center shadow-lg shadow-etalas-cyan/30">
                            <Users size={24} />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-slate-900 dark:text-white">48h</div>
                            <div className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wide">Avg. Hiring Time</div>
                        </div>
                    </div>
                 </div>
               </div>
             </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};