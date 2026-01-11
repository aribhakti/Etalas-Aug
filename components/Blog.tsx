import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight, X } from 'lucide-react';
import { BlogPost } from '../types';
import { ScrollReveal } from './ScrollReveal';
import { ParallaxTitle } from './ParallaxTitle';

const posts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of IT Staff Augmentation in 2025",
    excerpt: "How AI and remote-first cultures are reshaping the way enterprises build engineering teams.",
    date: "Oct 12, 2024",
    author: "Pandu Hartanto",
    category: "Industry Trends",
    image: "https://picsum.photos/800/600?random=101"
  },
  {
    id: 2,
    title: "Remote vs In-House: A Cost Analysis",
    excerpt: "Breaking down the TCO of hiring locally versus augmenting with global talent.",
    date: "Oct 08, 2024",
    author: "Ari Bhakti",
    category: "Business Strategy",
    image: "https://picsum.photos/800/600?random=102"
  },
  {
    id: 3,
    title: "Managing High-Performance Remote Teams",
    excerpt: "Best practices for async communication, sprint planning, and maintaining culture distributedly.",
    date: "Oct 05, 2024",
    author: "Andre",
    category: "Management",
    image: "https://picsum.photos/800/600?random=103"
  }
];

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPost(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedPost]);

  return (
    <section id="blog" className="py-24 md:py-32 bg-slate-50 dark:bg-etalas-dark transition-colors duration-300 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
           
           {/* Left Column */}
           <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-32">
                 <ScrollReveal>
                    <ParallaxTitle velocity={-0.05} direction="y">
                      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                        Latest <br/> <span className="text-etalas-cyan dark:text-etalas-teal">Insights</span>
                      </h2>
                    </ParallaxTitle>
                    <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                      Thoughts on technology, management, and the future of work. Stay ahead of the curve with our expert analysis.
                    </p>
                    <a href="#" className="hidden lg:flex items-center gap-2 font-bold text-slate-900 dark:text-white hover:text-etalas-cyan transition-colors">
                      View All Posts <ArrowRight size={18} />
                    </a>
                 </ScrollReveal>
              </div>
           </div>

           {/* Right Column */}
           <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post, idx) => (
                  <ScrollReveal key={post.id} delay={idx * 100} className="h-full">
                    <div className="group h-full flex flex-col bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-slate-100 dark:border-white/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer" onClick={() => setSelectedPost(post)}>
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                          decoding="async"
                          width="800"
                          height="600"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-white">
                          {post.category}
                        </div>
                      </div>
                      
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                          <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                          <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-etalas-cyan dark:group-hover:text-etalas-teal transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="mt-auto">
                          <button className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 group/btn hover:text-etalas-cyan transition-colors">
                            Read Article 
                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <div className="mt-8 text-center lg:hidden">
                  <a href="#" className="inline-flex items-center gap-2 font-bold text-slate-900 dark:text-white hover:text-etalas-cyan transition-colors">
                    View All Posts <ArrowRight size={18} />
                  </a>
              </div>
           </div>

        </div>
      </div>

      {/* Blog Reading Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" 
            onClick={() => setSelectedPost(null)}
          ></div>
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl animate-fade-in-up">
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-white/10 rounded-full hover:bg-slate-200 dark:hover:bg-white/20 transition-colors z-10"
            >
              <X size={20} className="text-slate-900 dark:text-white" />
            </button>
            
            <div className="h-64 sm:h-80 w-full relative">
               <img 
                 src={selectedPost.image} 
                 alt={selectedPost.title} 
                 className="w-full h-full object-cover" 
                 width="800"
                 height="600"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
               <div className="absolute bottom-6 left-6 md:left-10 text-white">
                  <div className="inline-block bg-etalas-cyan px-3 py-1 rounded-full text-xs font-bold uppercase mb-3">
                    {selectedPost.category}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold leading-tight">{selectedPost.title}</h2>
               </div>
            </div>

            <div className="p-6 md:p-10">
               <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-8 pb-8 border-b border-slate-200 dark:border-white/10">
                  <span className="flex items-center gap-2"><User size={16} /> By {selectedPost.author}</span>
                  <span className="flex items-center gap-2"><Calendar size={16} /> {selectedPost.date}</span>
               </div>

               <div className="prose dark:prose-invert max-w-none text-lg text-slate-700 dark:text-slate-300 leading-relaxed space-y-6">
                  <p className="font-semibold text-xl text-slate-900 dark:text-white">{selectedPost.excerpt}</p>
                  
                  <p>In the rapidly evolving landscape of global technology, the traditional model of in-house team building is facing unprecedented challenges. Companies are no longer constrained by geography when searching for top-tier engineering talent.</p>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">The Shift to Distributed Teams</h3>
                  <p>The rise of remote work has democratized access to high-quality software development. This article explores how modern enterprises are leveraging staff augmentation not just as a cost-saving measure, but as a strategic advantage to access niche skills (like AI and Blockchain) that are scarce in local markets.</p>
                  
                  <blockquote className="border-l-4 border-etalas-cyan pl-6 py-2 my-8 italic text-slate-900 dark:text-white bg-slate-50 dark:bg-white/5 rounded-r-xl">
                    "The future of work isn't about where you are, but what you can deliver. Etalas bridges the gap between ambition and execution."
                  </blockquote>

                  <p>We break down the key metrics for success: Time-to-hire, code quality, and retention rates. Our data shows that distributed teams often outperform co-located teams in productivity due to fewer distractions and a focus on output over presence.</p>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};