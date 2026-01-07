import React from 'react';
import { ScrollReveal } from './ScrollReveal';

const clients = [
  "Swissbel", "DJKI", "Swasana", "KarmaClub", "YOLO Padel", 
  "Plumber", "Runchise", "Angkas", "Let's Grow", "WorldHub", 
  "Kamon", "Deka Insight", "Ditajaya", "Musicology", "Skedul", 
  "pont", "prodago", "metion"
];

export const Clients: React.FC = () => {
  return (
    <section className="py-12 bg-white dark:bg-etalas-dark border-b border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <ScrollReveal>
          <p className="text-sm font-semibold text-slate-500 dark:text-etalas-white/50 uppercase tracking-widest">
            Trusted by Innovative Companies
          </p>
        </ScrollReveal>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
          {clients.concat(clients).map((client, idx) => (
            <span 
              key={idx} 
              className="text-2xl font-bold text-slate-400 dark:text-etalas-white/30 hover:text-etalas-cyan dark:hover:text-etalas-teal transition-colors cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 ml-16">
           {clients.concat(clients).map((client, idx) => (
            <span 
              key={`dup-${idx}`} 
              className="text-2xl font-bold text-slate-400 dark:text-etalas-white/30 hover:text-etalas-cyan dark:hover:text-etalas-teal transition-colors cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};