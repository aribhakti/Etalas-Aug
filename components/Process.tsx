import React from 'react';
import { Search, PenTool, Users, Rocket, Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ParallaxTitle } from './ParallaxTitle';

const steps = [
  {
    icon: <Search size={24} />,
    title: "Discovery",
    subtitle: "Define Needs",
    desc: "We analyze your requirements, technical stack, and team culture to create the perfect candidate profile.",
    items: ["Requirement Analysis", "Culture Fit Assessment", "Timeline Planning"]
  },
  {
    icon: <PenTool size={24} />,
    title: "Agreement",
    subtitle: "Transparent Contract",
    desc: "Simple, transparent pricing models. No hidden fees. We sign NDA & MSA to ensure your IP is protected.",
    items: ["Engagement Model Selection", "Sign NDA & MSA", "SLA Definition"]
  },
  {
    icon: <Users size={24} />,
    title: "Selection",
    subtitle: "Vetted Talent",
    desc: "Interview our top 1% pre-vetted candidates. Conduct technical assessments and meet the team before deciding.",
    items: ["Candidate Shortlisting", "Technical Interview", "Final Selection"]
  },
  {
    icon: <Rocket size={24} />,
    title: "Onboarding",
    subtitle: "Start Building",
    desc: "Seamless onboarding process. We handle access setup, workflow synchronization, and kick off within 48 hours.",
    items: ["Access & Tools Setup", "Workflow Sync", "Project Kickoff"]
  }
];

export const Process: React.FC = () => {
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
                     Streamlined <br/> <span className="text-etalas-cyan dark:text-etalas-teal">Workflow</span>
                   </h2>
                </ParallaxTitle>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  From initial consultation to code deployment in four simple steps. We've optimized every stage to be fast, transparent, and effective.
                </p>
                <div className="hidden lg:flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                   <span>Scroll to explore</span>
                   <div className="w-1 h-1 bg-etalas-cyan rounded-full animate-bounce"></div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Vertical Steps */}
          <div className="lg:col-span-7">
             <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-200 dark:bg-white/10 hidden md:block"></div>

                <div className="space-y-12">
                   {steps.map((step, idx) => (
                      <ScrollReveal key={idx} delay={idx * 100}>
                         <div className="relative flex flex-col md:flex-row gap-8">
                            {/* Icon Marker */}
                            <div className="flex-shrink-0 z-10">
                               <div className="w-12 h-12 rounded-full bg-etalas-cyan text-white flex items-center justify-center shadow-lg shadow-etalas-cyan/30 ring-4 ring-slate-50 dark:ring-etalas-dark transition-transform duration-300 hover:scale-110">
                                  {step.icon}
                               </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-1">
                               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{step.subtitle}</h3>
                               <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                  {step.desc}
                               </p>
                               <div className="bg-white dark:bg-white/5 rounded-xl p-4 border border-slate-100 dark:border-white/5">
                                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                     {step.items.map((item, i) => (
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