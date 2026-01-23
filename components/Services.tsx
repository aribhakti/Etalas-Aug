import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ParallaxTitle } from './ParallaxTitle';
import { useApp } from '../contexts/AppContext';

export const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language, t } = useApp();

  const services = [
    {
      title: { en: "Dedicated Teams", id: "Tim Berdedikasi" },
      description: { 
        en: "A full engineering squad integrated into your company. Scalable, managed, and exclusively focused on your product roadmap. We handle the HR, you handle the code.",
        id: "Skuad teknik lengkap yang terintegrasi ke dalam perusahaan Anda. Skalabel, terkelola, dan fokus secara eksklusif pada roadmap produk Anda. Kami menangani SDM, Anda menangani kodenya."
      },
      tags: { en: ["Scalable", "Managed", "Long-term", "Agile"], id: ["Skalabel", "Terkelola", "Jangka Panjang", "Agile"] }
    },
    {
      title: { en: "Staff Outsourcing", id: "Outsourcing Staf" },
      description: {
        en: "Fill specific skill gaps quickly. Add a Senior React Dev or a DevOps Engineer to your existing team in less than 48 hours. Perfect for meeting tight deadlines.",
        id: "Isi kesenjangan keahlian tertentu dengan cepat. Tambahkan Senior React Dev atau DevOps Engineer ke tim Anda dalam waktu kurang dari 48 jam."
      },
      tags: { en: ["Speed", "Skill Gap", "Flexible", "On-demand"], id: ["Cepat", "Keahlian Khusus", "Fleksibel", "Sesuai Permintaan"] }
    },
    {
      title: { en: "Project Outsourcing", id: "Outsourcing Proyek" },
      description: {
        en: "End-to-end software development. We take full responsibility for the delivery, quality, and timeline of your software project, from MVP to Enterprise scale.",
        id: "Pengembangan perangkat lunak end-to-end. Kami bertanggung jawab penuh atas pengiriman, kualitas, dan jadwal proyek perangkat lunak Anda, dari MVP hingga skala Enterprise."
      },
      tags: { en: ["End-to-End", "Delivery", "Quality", "Fixed Cost"], id: ["End-to-End", "Pengiriman", "Kualitas", "Biaya Tetap"] }
    },
    {
      title: { en: "Global Hiring", id: "Perekrutan Global" },
      description: {
        en: "We handle payroll, compliance, and benefits in over 30 countries. Access a global talent pool without the administrative headache of setting up local entities.",
        id: "Kami menangani penggajian, kepatuhan, dan tunjangan di lebih dari 30 negara. Akses kumpulan talenta global tanpa pusing mengurus administrasi entitas lokal."
      },
      tags: { en: ["Payroll", "Compliance", "Benefits", "Legal"], id: ["Penggajian", "Kepatuhan", "Tunjangan", "Legal"] }
    },
    {
      title: { en: "Product Design", id: "Desain Produk" },
      description: {
        en: "We craft intuitive and stunning user interfaces that drive engagement. From wireframing to high-fidelity prototyping, our design process is user-centric.",
        id: "Kami menciptakan antarmuka pengguna yang intuitif dan memukau. Dari wireframing hingga prototyping fidelitas tinggi, proses desain kami berpusat pada pengguna."
      },
      tags: { en: ["UI/UX", "Prototyping", "Design Systems", "User Research"], id: ["UI/UX", "Prototyping", "Sistem Desain", "Riset Pengguna"] }
    },
    {
      title: { en: "CTO as a Service", id: "CTO as a Service" },
      description: {
        en: "Strategic technical leadership to guide your startup's architecture, stack selection, and scalability planning. Get executive-level advice on demand.",
        id: "Kepemimpinan teknis strategis untuk memandu arsitektur startup, pemilihan stack, dan perencanaan skalabilitas Anda. Dapatkan saran tingkat eksekutif sesuai permintaan."
      },
      tags: { en: ["Strategy", "Architecture", "Leadership", "Audit"], id: ["Strategi", "Arsitektur", "Kepemimpinan", "Audit"] }
    }
  ];

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
                    {t('services.title').split(' ')[0]} <br/> <span className="text-etalas-cyan dark:text-etalas-teal">{t('services.title').split(' ').slice(1).join(' ')}</span>
                  </h2>
                </ParallaxTitle>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  {t('services.desc')}
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
                      aria-expanded={openIndex === idx}
                      aria-controls={`service-desc-${idx}`}
                      className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
                    >
                      <h3 className={`text-2xl md:text-3xl font-medium transition-colors duration-300 ${
                        openIndex === idx ? 'text-etalas-cyan dark:text-etalas-teal' : 'text-slate-900 dark:text-white group-hover:text-etalas-cyan/70 dark:group-hover:text-etalas-teal/70'
                      }`}>
                        {service.title[language]}
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
                      id={`service-desc-${idx}`}
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        openIndex === idx ? 'max-h-96 opacity-100 mb-8' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-2xl">
                        {service.description[language]}
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        {service.tags[language].map((tag, tagIdx) => (
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