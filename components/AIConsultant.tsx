import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { getTeamRecommendation } from '../services/geminiService';
import { TeamRecommendation } from '../types';
import { Sparkles, Cpu, Clock, Bot, AlertCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ParallaxTitle } from './ParallaxTitle';
import { useApp } from '../contexts/AppContext';

// Helper component for typewriter effect
const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    setDisplayedText(''); // Reset on new text
    
    // Faster typing speed (20ms) for better UX on longer texts
    const intervalId = setInterval(() => {
      if (index < text.length - 1) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 20);

    return () => clearInterval(intervalId);
  }, [text]);

  return <span>{displayedText}</span>;
};

export const AIConsultant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [recommendation, setRecommendation] = useState<TeamRecommendation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { t } = useApp();

  const handleConsult = async () => {
    if (!prompt.trim()) {
      setError('Please enter a project description.');
      return;
    }
    setLoading(true);
    setError('');
    setRecommendation(null);
    try {
      const result = await getTeamRecommendation(prompt);
      setRecommendation(result);
    } catch (err) {
      console.error(err);
      setError('Failed to generate recommendation. The AI service might be busy or the API key is invalid.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-consultant" className="py-24 md:py-32 bg-white dark:bg-slate-900 transition-colors duration-300 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-20">
             <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-500/30 dark:bg-purple-600 rounded-full blur-[120px]"></div>
             <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/30 dark:bg-blue-600 rounded-full blur-[120px]"></div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
             <div className="lg:sticky lg:top-32">
                <ScrollReveal>
                  <div className="inline-flex items-center gap-2 justify-center px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white mb-6 border border-slate-200 dark:border-white/10 backdrop-blur-sm">
                     <Bot size={16} />
                     <span className="text-sm font-semibold">AI Team Architect</span>
                  </div>
                  <ParallaxTitle velocity={-0.05} direction="y">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
                      {t('ai.title').split(' ').slice(0, 3).join(' ')} <br/> {t('ai.title').split(' ').slice(3).join(' ')} <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400">{t('ai.subtitle')}</span>
                    </h2>
                  </ParallaxTitle>
                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-8">
                    {t('ai.desc')}
                  </p>
                  <div className="hidden lg:block w-20 h-1 bg-purple-500 rounded-full"></div>
                </ScrollReveal>
             </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
             <ScrollReveal delay={200}>
                <div className="bg-slate-50 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl transition-all duration-300">
                  <div className="flex flex-col gap-4">
                    <div className="relative">
                      <textarea
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder={t('ai.placeholder')}
                        className="w-full bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-2xl p-6 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none h-40 text-lg leading-relaxed shadow-inner pb-16" // Added extra padding bottom for mobile button
                        aria-label="Project Description Input"
                      />
                      <div className="absolute bottom-4 right-4 z-10">
                         <Button 
                            onClick={handleConsult} 
                            isLoading={loading} 
                            className="bg-etalas-cyan text-white hover:bg-violet-700 shadow-lg shadow-etalas-cyan/25 border-none"
                            aria-label="Analyze Needs with AI"
                          >
                           <Sparkles size={18} className="mr-2 text-yellow-300" />
                           {t('ai.analyze')}
                         </Button>
                      </div>
                    </div>
                  </div>

                  {error && (
                    <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-200 rounded-xl animate-fade-in flex items-center gap-2" role="alert">
                      <AlertCircle size={20} />
                      {error}
                    </div>
                  )}

                  {recommendation && (
                    <div className="mt-8 animate-fade-in-up bg-white dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 p-6 md:p-8 shadow-sm">
                       <div className="flex flex-col md:flex-row gap-10">
                          <div className="flex-1">
                             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{t('ai.summary')}</h3>
                             <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                <TypewriterText text={recommendation.summary} />
                             </p>
                             
                             <div className="flex flex-wrap gap-2 mb-6">
                                {recommendation.technologies.map((tech, idx) => (
                                  <span key={idx} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white text-sm font-medium border border-slate-200 dark:border-white/5 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                                    {tech}
                                  </span>
                                ))}
                             </div>
                             
                             <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <Clock size={16} />
                                {t('ai.time')}: <span className="text-slate-900 dark:text-white font-semibold">{recommendation.estimatedTimeline}</span>
                             </div>
                          </div>

                          <div className="flex-1 border-t md:border-t-0 md:border-l border-slate-200 dark:border-white/10 pt-8 md:pt-0 md:pl-10">
                             <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <Cpu size={20} className="text-purple-600 dark:text-purple-400" />
                                {t('ai.roles')}
                             </h3>
                             <div className="space-y-4">
                                {recommendation.roles.map((role, idx) => (
                                   <div key={idx} className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors animate-fade-in" style={{ animationDelay: `${500 + (idx * 100)}ms` }}>
                                      <div className="flex justify-between items-center mb-1">
                                         <h4 className="font-bold text-slate-900 dark:text-white">{role.title}</h4>
                                         <span className="bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 text-xs px-2 py-1 rounded font-bold">x{role.count}</span>
                                      </div>
                                      <p className="text-sm text-slate-500 dark:text-slate-400">{role.description}</p>
                                   </div>
                                ))}
                             </div>
                          </div>
                       </div>
                    </div>
                  )}
                  
                  {!recommendation && !loading && !error && (
                     <div className="text-center py-6 text-slate-400 dark:text-slate-500 text-sm mt-2">
                        Try specific requests to get detailed staffing plans.
                     </div>
                  )}
                </div>
             </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};