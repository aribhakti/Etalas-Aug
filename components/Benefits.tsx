import React from 'react';
import { DollarSign, Clock, Shield, Zap, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ParallaxTitle } from './ParallaxTitle';
import { useApp } from '../contexts/AppContext';

export const Benefits: React.FC = () => {
  const { language, t } = useApp();

  const benefits = [
    {
      icon: <DollarSign size={24} />,
      title: { en: "Cost Efficiency", id: "Efisiensi Biaya" },
      desc: { 
        en: "Save up to 40% compared to local hiring without sacrificing quality. Optimize budget without cutting corners.",
        id: "Hemat hingga 40% dibandingkan perekrutan lokal tanpa mengorbankan kualitas. Optimalkan anggaran tanpa mengurangi standar."
      },
      color: "from-green-400 to-emerald-600"
    },
    {
      icon: <Clock size={24} />,
      title: { en: "Timezone Aligned", id: "Zona Waktu Selaras" },
      desc: {
        en: "Seamless overlap with US, UK, and Australian business hours. Real-time collaboration, just like they're down the hall.",
        id: "Overlap yang mulus dengan jam kerja AS, Inggris, dan Australia. Kolaborasi real-time, seperti mereka ada di ruangan sebelah."
      },
      color: "from-blue-400 to-indigo-600"
    },
    {
      icon: <Zap size={24} />,
      title: { en: "Fast Scaling", id: "Penskalaan Cepat" },
      desc: {
        en: "Skip the 60-day hiring cycle. Start building in days, not months. Pre-vetted engineers ready to deploy.",
        id: "Lewati siklus perekrutan 60 hari. Mulai membangun dalam hitungan hari, bukan bulan. Insinyur yang telah divalidasi siap diterjunkan."
      },
      color: "from-yellow-400 to-orange-600"
    },
    {
      icon: <Shield size={24} />,
      title: { en: "IP Protection", id: "Perlindungan IP" },
      desc: {
        en: "Strict NDAs and compliance standards ensure your code is safe. International security protocols and data privacy.",
        id: "NDA ketat dan standar kepatuhan memastikan kode Anda aman. Protokol keamanan internasional dan privasi data."
      },
      color: "from-purple-400 to-pink-600"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-900 relative">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-etalas-cyan/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-etalas-teal/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
             <div className="lg:sticky lg:top-32">
                <ScrollReveal>
                  <span className="text-etalas-teal font-bold tracking-widest text-sm uppercase mb-4 block">{t('benefits.label')}</span>
                  <ParallaxTitle velocity={-0.05} direction="y">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
                      {t('benefits.title').split(' ')[0]} <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-etalas-cyan to-etalas-teal">{t('benefits.title').split(' ').slice(1).join(' ')}</span>
                    </h2>
                  </ParallaxTitle>
                  <p className="text-lg text-slate-400 leading-relaxed mb-8">
                    {t('benefits.desc')}
                  </p>
                  <div className="hidden lg:block w-20 h-1 bg-etalas-cyan rounded-full"></div>
                </ScrollReveal>
             </div>
          </div>

          {/* Right Column: Grid */}
          <div className="lg:col-span-7">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, idx) => (
                  <ScrollReveal key={idx} delay={idx * 100}>
                    <div className="group relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/0 hover:from-etalas-cyan/50 hover:to-etalas-teal/50 transition-all duration-500 h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                      
                      <div className="relative h-full bg-slate-900/95 backdrop-blur-xl rounded-[23px] p-8 flex flex-col items-start transition-transform duration-300 group-hover:-translate-y-1">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.color} p-0.5 mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                          <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-white">
                            {benefit.icon}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-colors">
                          {benefit.title[language]}
                        </h3>
                        
                        <p className="text-slate-400 leading-relaxed mb-6 text-sm flex-1">
                          {benefit.desc[language]}
                        </p>

                        <div className="mt-auto flex items-center text-xs font-bold text-white opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          <span className="mr-2">{t('ui.readMore')}</span>
                          <ArrowRight size={14} />
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