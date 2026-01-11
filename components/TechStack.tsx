import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Code2, Database, Smartphone, Cloud, Brain, Search, X } from 'lucide-react';
import { Tooltip } from './Tooltip';
import { ScrollReveal } from './ScrollReveal';
import { ParallaxTitle } from './ParallaxTitle';

const technologies: Record<string, string[]> = {
  frontend: ['React.js', 'Angular', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Svelte', 'Three.js'],
  backend: ['Node.js', 'Python', 'Java', 'Go', '.NET Core', 'PHP', 'Ruby on Rails', 'Rust', 'GraphQL', 'PostgreSQL'],
  mobile: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)', 'Ionic', 'Expo'],
  cloud: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions'],
  ai: ['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'Computer Vision', 'NLP', 'Data Science', 'Pandas'],
};

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <Code2 size={18} />,
  backend: <Database size={18} />,
  mobile: <Smartphone size={18} />,
  cloud: <Cloud size={18} />,
  ai: <Brain size={18} />,
};

const TOOLTIP_DATA: Record<string, string> = {
  'React.js': 'A popular JavaScript library for building user interfaces, maintained by Meta.',
  'Angular': 'A platform and framework for building single-page client applications using HTML and TypeScript.',
  'Vue.js': 'A progressive JavaScript framework for building UIs.',
  'Next.js': 'A React framework that enables functionality such as server-side rendering.',
  'TypeScript': 'A strict syntactical superset of JavaScript that adds optional static typing.',
  'Node.js': 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
  'Python': 'A high-level programming language known for its readability and versatility.',
  'AWS': 'Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.',
  'Docker': 'A set of platform as a service products that use OS-level virtualization.',
};

// Internal Spotlight Card Component
const SpotlightCard = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 transition-all duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(124, 58, 237, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export const TechStack: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>('frontend');

  const filteredTechnologies = useMemo(() => {
    let techs: string[] = [];
    
    if (activeCategory) {
      techs = technologies[activeCategory] || [];
    } else {
      Object.values(technologies).forEach(list => techs.push(...list));
      techs = [...new Set(techs)];
    }

    if (searchTerm) {
      return techs.filter(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    
    return techs;
  }, [searchTerm, activeCategory]);

  const getDisplayName = (key: string) => {
    if (key === 'ai') return 'AI';
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <section id="tech-stack" className="py-24 md:py-32 bg-white dark:bg-etalas-dark transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Title, Description & Vertical Menu */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <ScrollReveal>
                <ParallaxTitle velocity={-0.05} direction="y">
                   <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
                    Tech <br/> <span className="text-etalas-cyan dark:text-etalas-teal">Ecosystem</span>
                  </h2>
                </ParallaxTitle>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                  We specialize in the modern stack. From AI-driven backends to pixel-perfect frontends.
                </p>
                <div className="hidden lg:block w-20 h-1 bg-etalas-cyan dark:bg-etalas-teal rounded-full mb-10"></div>

                {/* Vertical Category Menu for Desktop / Horizontal for Mobile */}
                <div className="flex flex-row lg:flex-col flex-wrap gap-2 mb-8">
                  {Object.keys(technologies).map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            setActiveCategory(category);
                            setSearchTerm('');
                        }}
                        className={`group flex items-center justify-between px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 border w-full text-left ${
                            activeCategory === category
                                ? 'bg-etalas-cyan text-white border-etalas-cyan shadow-lg shadow-etalas-cyan/25'
                                : 'bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-white/10 hover:border-etalas-cyan dark:hover:border-etalas-teal hover:text-etalas-cyan dark:hover:text-etalas-teal'
                        }`}
                    >
                        <div className="flex items-center gap-3">
                           {categoryIcons[category]}
                           {getDisplayName(category)}
                        </div>
                        <span className={`hidden lg:block opacity-0 transform -translate-x-2 transition-all duration-300 ${activeCategory === category ? 'opacity-100 translate-x-0' : 'group-hover:opacity-100 group-hover:translate-x-0'}`}>
                           →
                        </span>
                    </button>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Search & Grid */}
          <div className="lg:col-span-7">
             <ScrollReveal delay={100}>
                {/* Search Bar */}
                <div className="relative mb-8 group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-slate-400 group-focus-within:text-etalas-cyan transition-colors" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-12 pr-10 py-4 border border-slate-200 dark:border-white/10 rounded-2xl leading-5 bg-slate-50 dark:bg-white/5 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-etalas-cyan focus:border-transparent transition-all shadow-sm"
                    placeholder={`Search ${activeCategory ? getDisplayName(activeCategory) + ' ' : ''}technology...`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer" onClick={() => setSearchTerm('')}>
                      <X className="h-5 w-5 text-slate-400 hover:text-slate-600 dark:hover:text-white" />
                    </div>
                  )}
                </div>

                {/* Grid */}
                <div className="min-h-[400px]">
                  {filteredTechnologies.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {filteredTechnologies.map((tech, idx) => (
                        <div key={`${tech}-${idx}`} className="animate-fade-in" style={{ animationDelay: `${idx * 30}ms` }}>
                          <Tooltip className="w-full block h-full" content={TOOLTIP_DATA[tech] || `${tech} - Expert developers available.`}>
                            <SpotlightCard className="h-32 w-full group cursor-default">
                                <div className="absolute inset-0 flex items-center justify-center p-6">
                                  <span className="text-slate-700 dark:text-slate-200 font-medium text-center text-sm group-hover:font-bold transition-all relative z-20">
                                    {tech}
                                  </span>
                                </div>
                            </SpotlightCard>
                          </Tooltip>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-64 text-slate-400 animate-fade-in">
                      <Search size={48} className="mb-4 opacity-20" />
                      <p>No technologies found matching "{searchTerm}"</p>
                    </div>
                  )}
                </div>
             </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};