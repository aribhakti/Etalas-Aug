import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { Users, Clock, Globe, Award } from 'lucide-react';

const stats = [
  {
    label: "Active Developers",
    value: "300+",
    icon: <Users className="w-5 h-5" />,
    desc: "Top 1% Talent"
  },
  {
    label: "Retention Rate",
    value: "98%",
    icon: <Award className="w-5 h-5" />,
    desc: "Long-term Scale"
  },
  {
    label: "Hiring Speed",
    value: "48h",
    icon: <Clock className="w-5 h-5" />,
    desc: "Request to Interview"
  },
  {
    label: "Global Reach",
    value: "15+",
    icon: <Globe className="w-5 h-5" />,
    desc: "Countries Served"
  }
];

export const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-etalas-dark border-b border-slate-100 dark:border-white/5 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 divide-x-0 md:divide-x divide-slate-100 dark:divide-white/5">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div className="flex flex-col items-center text-center px-4">
                <div className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1 flex items-center gap-2">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {stat.desc}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};