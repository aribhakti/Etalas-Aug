import React from 'react';
import { useApp } from '../contexts/AppContext';
import { Linkedin, Briefcase } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ParallaxTitle } from './ParallaxTitle';

const founders = [
  {
    name: "Pandu Hartanto",
    role: "Co-Founder",
    badges: ["Midtrans", "GoTo"],
    desc: {
      en: "Helps founders build impactful businesses with deep expertise in product management. Background includes bootstrapping SaaS, growing Veritrans into Indonesia's leading payment gateway, and developing business tools at Gojek.",
      id: "Membantu para pendiri membangun bisnis berdampak dengan keahlian mendalam dalam manajemen produk. Latar belakang meliputi bootstrapping SaaS, mengembangkan Veritrans menjadi payment gateway terkemuka di Indonesia, dan mengembangkan alat bisnis di Gojek."
    }
  },
  {
    name: "Andre",
    role: "Co-Founder",
    badges: ["Yahoo", "Prism", "Midtrans", "GoTo"],
    desc: {
      en: "A product leader with over a decade of experience. Co-founded Coral (acquired by Midtrans), Prism, and Selly Keyboard. Specializes in 'Vibe Coding'—leveraging AI to craft intuitive, practical products.",
      id: "Pemimpin produk dengan pengalaman lebih dari satu dekade. Mendirikan Coral (diakuisisi oleh Midtrans), Prism, dan Selly Keyboard. Spesialis dalam 'Vibe Coding'—memanfaatkan AI untuk menciptakan produk yang intuitif dan praktis."
    }
  },
  {
    name: "Ari Bhakti Subagja",
    role: "Co-Founder",
    badges: ["Kartuku", "Midtrans", "GoTo", "VIDA"],
    desc: {
      en: "Accomplished PM with 14 years in fintech and payments. Excels in B2B/B2C environments with a strong track record in enterprise and startup settings. Expert in driving growth, QA, and strategic project management.",
      id: "PM berprestasi dengan 14 tahun pengalaman di fintech dan pembayaran. Unggul dalam lingkungan B2B/B2C dengan rekam jejak yang kuat di perusahaan besar dan startup. Ahli dalam mendorong pertumbuhan, QA, dan manajemen proyek strategis."
    }
  }
];

const builders = [
  { name: "Dina", role: "Product Manager", badges: ["Accenture"], desc: { en: "Ex-Accenture PM. Ensures product vision aligns with strategic business goals.", id: "Mantan PM Accenture. Memastikan visi produk selaras dengan tujuan bisnis strategis." } },
  { name: "Hanif", role: "Tech Lead", badges: ["Revido"], desc: { en: "Leading engineering excellence and technical decision-making for complex systems.", id: "Memimpin keunggulan teknik dan pengambilan keputusan teknis untuk sistem yang kompleks." } },
  { name: "Rifqy", role: "Senior Fullstack Product Engineer", badges: [], desc: { en: "Building scalable, high-performance applications with deep expertise in modern full-stack architectures.", id: "Membangun aplikasi yang skalabel dan berkinerja tinggi dengan keahlian mendalam dalam arsitektur full-stack modern." } },
  { name: "Rois", role: "Senior Fullstack Product Engineer", badges: ["ThinkDigital", "Nodeflux", "Vida"], desc: { en: "Specialist in robust backend systems and seamless frontend integrations.", id: "Spesialis dalam sistem backend yang tangguh dan integrasi frontend yang mulus." } },
  { name: "Delia", role: "Fullstack Product Engineer", badges: [], desc: { en: "Turning complex requirements into clean, maintainable code.", id: "Mengubah persyaratan kompleks menjadi kode yang bersih dan mudah dipelihara." } },
  { name: "Thufail", role: "Fullstack Product Engineer", badges: [], desc: { en: "Passionate about creating efficient digital solutions with a focus on user-centric development.", id: "Bersemangat menciptakan solusi digital yang efisien dengan fokus pada pengembangan yang berpusat pada pengguna." } },
  { name: "Hilmi", role: "Fullstack Product Engineer", badges: [], desc: { en: "Delivering end-to-end features with a strong emphasis on code quality.", id: "Menyampaikan fitur end-to-end dengan penekanan kuat pada kualitas kode." } },
  { name: "Bagas", role: "Frontend Product Engineer", badges: [], desc: { en: "Crafting pixel-perfect, responsive, and accessible user interfaces that delight users.", id: "Menciptakan antarmuka pengguna yang pixel-perfect, responsif, dan mudah diakses." } },
  { name: "Prima", role: "Frontend Product Engineer", badges: ["Lazada", "Shopee"], desc: { en: "Focused on frontend architecture and delivering smooth, high-performance web experiences.", id: "Fokus pada arsitektur frontend dan memberikan pengalaman web yang mulus dan berkinerja tinggi." } },
  { name: "Aziz", role: "UI/UX Designer", badges: [], desc: { en: "Designing intuitive and aesthetically pleasing digital experiences that solve real user problems.", id: "Merancang pengalaman digital yang intuitif dan estetis yang memecahkan masalah pengguna nyata." } }
];

export const Team: React.FC = () => {
  const { t, language } = useApp();

  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50 dark:bg-etalas-dark transition-colors duration-300 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Sticky Title */}
          <div className="lg:col-span-5">
             <div className="lg:sticky lg:top-32">
                <ScrollReveal>
                  <ParallaxTitle velocity={-0.05} direction="y">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                      {t('team.title')}
                    </h2>
                  </ParallaxTitle>
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                    {t('team.subtitle')} We are a collective of product leaders and senior engineers who have built some of Southeast Asia's biggest tech unicorns.
                  </p>
                </ScrollReveal>
             </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-20">
            
            {/* Founders Section */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-white/10 pb-4">
                 {t('team.founders')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {founders.map((founder, idx) => (
                  <ScrollReveal key={idx} delay={idx * 150} className="h-full">
                    <div className="group h-full bg-white dark:bg-white/5 rounded-3xl p-6 transition-all hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-black/50 duration-500 border border-slate-200 dark:border-white/5 relative overflow-hidden flex flex-col items-center text-center">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-etalas-cyan to-etalas-teal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                      <div className="w-24 h-24 rounded-2xl bg-slate-100 dark:bg-white/10 overflow-hidden shadow-inner flex-shrink-0 mb-4">
                        <img 
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${founder.name}&backgroundColor=transparent`} 
                          alt={founder.name} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="flex-1 flex flex-col items-center w-full">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-etalas-cyan dark:group-hover:text-etalas-teal transition-colors leading-tight">{founder.name}</h3>
                        <div className="text-etalas-cyan dark:text-etalas-teal font-medium text-sm mb-3">{founder.role}</div>
                        
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                          {founder.badges.map((badge, bIdx) => (
                            <span key={bIdx} className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 text-[10px] font-semibold uppercase tracking-wide">
                              {badge}
                            </span>
                          ))}
                        </div>
                        
                        <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                          {founder.desc[language]}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Builders Section */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-white/10 pb-4">
                 {t('team.builders')}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                 {builders.map((member, idx) => (
                    <ScrollReveal key={idx} delay={idx * 50} className="h-full">
                      <div className="h-full bg-white dark:bg-white/5 rounded-2xl p-4 border border-slate-200 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 flex flex-col items-center text-center">
                         <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-white/10 overflow-hidden mb-3">
                            <img 
                               src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}&backgroundColor=transparent`} 
                               alt={member.name} 
                               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                               loading="lazy"
                            />
                         </div>
                         <div className="w-full">
                            <h4 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-etalas-cyan dark:group-hover:text-etalas-teal transition-colors truncate w-full">{member.name}</h4>
                            <span className="text-etalas-cyan dark:text-etalas-teal text-[10px] font-semibold block truncate w-full mb-2">{member.role}</span>
                         </div>
                         <p className="text-slate-500 dark:text-slate-400 text-[10px] leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors line-clamp-2 w-full">
                            {member.desc[language]}
                         </p>
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