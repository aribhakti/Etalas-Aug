import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ParallaxTitle } from './ParallaxTitle';

const services = [
  {
    title: "Dedicated Teams",
    description: "A full engineering squad integrated into your company. Scalable, managed, and exclusively focused on your product roadmap. We handle the HR, you handle the code.",
    tags: ["Scalable", "Managed", "Long-term", "Agile"]
  },
  {
    title: "Staff Augmentation",
    description: "Fill specific skill gaps quickly. Add a Senior React Dev or a DevOps Engineer to your existing team in less than 48 hours. Perfect for meeting tight deadlines.",
    tags: ["Speed", "Skill Gap", "Flexible", "On-demand"]
  },
  {
    title: "Project Outsourcing",
    description: "End-to-end software development. We take full responsibility for the delivery, quality, and timeline of your software project, from MVP to Enterprise scale.",
    tags: ["End-to-End", "Delivery", "Quality", "Fixed Cost"]
  },
  {
    title: "Global Hiring",
    description: "We handle payroll, compliance, and benefits in over 30 countries. Access a global talent pool without the administrative headache of setting up local entities.",
    tags: ["Payroll", "Compliance", "Benefits", "Legal"]
  },
  {
    title: "Product Design",
    description: "We craft intuitive and stunning user interfaces that drive engagement. From wireframing to high-fidelity prototyping, our design process is user-centric.",
    tags: ["UI/UX", "Prototyping", "Design Systems", "User Research"]
  },
  {
    title: "CTO as a Service",
    description: "Strategic technical leadership to guide your startup's architecture, stack selection, and scalability planning. Get executive-level advice on demand.",
    tags: ["Strategy", "Architecture", "Leadership", "Audit"]
  }
];

export const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleService = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50 dark:bg-etalas-dark relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Sticky Title & Description */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <ScrollReveal>
                <ParallaxTitle velocity={-0.05} direction="y">
                  <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight"> 
                    Our <br/> <span className="text-etalas-cyan dark:text-etalas-teal">Expertise</span>
                  </h2>
                </ParallaxTitle>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  We cover the entire product lifecycle, from initial concept to final deployment and scaling. Our flexible engagement models adapt to your business needs.
                </p>
                <div className="hidden lg:block w-20 h-1 bg-etalas-cyan dark:bg-etalas-teal rounded-full"></div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7">
            <div className="space-y-0 divide-y divide-slate-200 dark:divide-white/10 border-t border-b border-slate-200 dark:border-white/10">
              {services.map((service, idx) => (
                <ScrollReveal key={idx} delay={idx * 100}>
                  <div className="group">
                    <button
                      onClick={() => toggleService(idx)}
                      className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
                    >
                      <h3 className={`text-2xl md:text-3xl font-medium transition-colors duration-300 ${
                        openIndex === idx ? 'text-etalas-cyan dark:text-etalas-teal' : 'text-slate-900 dark:text-white group-hover:text-etalas-cyan/70 dark:group-hover:text-etalas-teal/70'
                      }`}>
                        {service.title}
                      </h3>
                      <div className={`p-2 rounded-full border transition-all duration-300 ${
                         openIndex === idx 
                           ? 'border-etalas-cyan text-etalas-cyan rotate-180' 
                           : 'border-slate-300 dark:border-white/20 text-slate-400 group-hover:border-etalas-cyan group-hover:text-etalas-cyan'
                      }`}>
                        {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                      </div>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openIndex === idx ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-2xl">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        {service.tags.map((tag, tagIdx) => (
                          <span 
                            key={tagIdx} 
                            className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
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