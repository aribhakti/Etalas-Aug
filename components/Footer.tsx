import React from 'react';
import { Terminal, Github, Linkedin, Instagram, Mail, Phone } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export const Footer: React.FC = () => {
  const { t } = useApp();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-etalas-gray pt-20 pb-10 border-t border-slate-200 dark:border-white/5 transition-colors duration-300 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-etalas-teal rounded flex items-center justify-center text-etalas-dark">
                 <Terminal size={18} />
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">etalas<span className="text-etalas-teal">.team</span></span>
            </div>
            
            <div className="space-y-4 mb-8">
               <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  PT Etalas Karya Internasional (ID) <br/> 
                  Etalas LLC (US)
               </div>
               
               <div className="flex items-center gap-2 text-slate-600 dark:text-etalas-white/60 text-sm">
                  <Mail size={16} />
                  <a href="mailto:hello@etalas.com" className="hover:text-etalas-cyan dark:hover:text-etalas-teal transition-colors">hello@etalas.com</a>
               </div>
               
               <div className="flex items-center gap-2 text-slate-600 dark:text-etalas-white/60 text-sm">
                  <Phone size={16} />
                  <a href="tel:+62811297339" className="hover:text-etalas-cyan dark:hover:text-etalas-teal transition-colors">+62 811-297-339</a>
               </div>
            </div>

            <div className="flex gap-4">
               <a 
                 href="https://www.linkedin.com/company/etalas" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-etalas-white/60 hover:bg-[#0077b5] hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg"
                 aria-label="LinkedIn"
               >
                 <Linkedin size={20} />
               </a>
               <a 
                 href="https://www.instagram.com/etalas.id/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-etalas-white/60 hover:bg-gradient-to-br hover:from-purple-500 hover:to-orange-500 hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg"
                 aria-label="Instagram"
               >
                 <Instagram size={20} />
               </a>
               <a 
                 href="#" 
                 className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-etalas-white/60 hover:bg-black dark:hover:bg-white dark:hover:text-black hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-lg"
                 aria-label="Github"
               >
                 <Github size={20} />
               </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-slate-600 dark:text-etalas-white/60 text-sm">
              <li><a href="#" className="hover:text-etalas-cyan dark:hover:text-etalas-teal hover:pl-2 transition-all">Staff Outsourcing</a></li>
              <li><a href="#" className="hover:text-etalas-cyan dark:hover:text-etalas-teal hover:pl-2 transition-all">Dedicated Teams</a></li>
              <li><a href="#" className="hover:text-etalas-cyan dark:hover:text-etalas-teal hover:pl-2 transition-all">Software Outsourcing</a></li>
              <li><a href="#" className="hover:text-etalas-cyan dark:hover:text-etalas-teal hover:pl-2 transition-all">QA & Testing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-slate-600 dark:text-etalas-white/60 text-sm">
              <li><a href="#about" className="hover:text-etalas-cyan dark:hover:text-etalas-teal hover:pl-2 transition-all">About Us</a></li>
              <li><a href="#" className="hover:text-etalas-cyan dark:hover:text-etalas-teal hover:pl-2 transition-all">Careers</a></li>
              <li><a href="#blog" className="hover:text-etalas-cyan dark:hover:text-etalas-teal hover:pl-2 transition-all">Blog</a></li>
              <li><a href="#" className="hover:text-etalas-cyan dark:hover:text-etalas-teal hover:pl-2 transition-all">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="text-slate-500 dark:text-etalas-white/30 text-sm">
              © {currentYear} Etalas Digital. {t('footer.rights')}
           </div>
           <div className="flex gap-8 text-sm text-slate-500 dark:text-etalas-white/30">
              <a href="#" className="hover:text-slate-900 dark:hover:text-etalas-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-etalas-white transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};