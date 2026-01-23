import React, { useState } from 'react';
import { Button } from './Button';
import { Send, Mail, MessageSquare, AlertCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { ParallaxTitle } from './ParallaxTitle';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formState.name || !formState.email || !formState.message) {
      setErrorMessage('Please fill in all required fields.');
      setStatus('error');
      return;
    }

    if (!validateEmail(formState.email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', company: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
    // Clear error when user types
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-white dark:bg-etalas-dark relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
             <div className="lg:sticky lg:top-32">
                <ScrollReveal>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-6">
                    Get Started
                  </div>
                  <ParallaxTitle velocity={-0.05} direction="y">
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                      Ready to <br/> Scale Your <br/> <span className="text-etalas-cyan dark:text-etalas-teal">Team?</span>
                    </h2>
                  </ParallaxTitle>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
                    Fill out the form to schedule a free consultation. We'll verify your requirements and send you candidate profiles within 48 hours.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-900 dark:text-white">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">Email Us</h4>
                        <p className="text-slate-500 dark:text-slate-400">hello@etalas.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-white/5 flex items-center justify-center text-slate-900 dark:text-white">
                        <MessageSquare size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white">WhatsApp</h4>
                        <p className="text-slate-500 dark:text-slate-400">+62 811-297-339</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
             </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={100}>
              <div className="bg-slate-50 dark:bg-white/5 p-8 rounded-3xl border border-slate-100 dark:border-white/5">
                <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact Form" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-900 dark:text-white">Full Name <span className="text-red-500" aria-hidden="true">*</span></label>
                      <input 
                        id="name"
                        type="text" 
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        aria-invalid={status === 'error' && !formState.name}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:border-etalas-cyan focus:ring-2 focus:ring-etalas-cyan/20 outline-none transition-all dark:text-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-semibold text-slate-900 dark:text-white">Company</label>
                      <input 
                        id="company"
                        type="text" 
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:border-etalas-cyan focus:ring-2 focus:ring-etalas-cyan/20 outline-none transition-all dark:text-white"
                        placeholder="Tech Corp"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-900 dark:text-white">Work Email <span className="text-red-500" aria-hidden="true">*</span></label>
                    <input 
                      id="email"
                      type="email" 
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={status === 'error' && (!formState.email || !validateEmail(formState.email))}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:border-etalas-cyan focus:ring-2 focus:ring-etalas-cyan/20 outline-none transition-all dark:text-white"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-900 dark:text-white">Project Requirements <span className="text-red-500" aria-hidden="true">*</span></label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      aria-invalid={status === 'error' && !formState.message}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:border-etalas-cyan focus:ring-2 focus:ring-etalas-cyan/20 outline-none transition-all h-32 resize-none dark:text-white"
                      placeholder="Tell us about the roles you need..."
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm rounded-lg flex items-center gap-2 animate-fade-in" role="alert">
                      <AlertCircle size={16} />
                      {errorMessage}
                    </div>
                  )}

                  {status === 'success' ? (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-center rounded-xl font-bold animate-fade-in" role="alert">
                      Message sent successfully! We will contact you shortly.
                    </div>
                  ) : (
                    <Button type="submit" variant="hire" className="w-full py-4 text-lg" isLoading={status === 'submitting'} aria-label="Send Contact Request">
                      Send Request
                      <Send size={18} />
                    </Button>
                  )}
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};