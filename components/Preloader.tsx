import React, { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

interface PreloaderProps {
  onFinish: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
  const [shouldRender, setShouldRender] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Failsafe: Ensure preloader disappears after max 3.5 seconds even if something stalls
    const timer = setTimeout(() => {
      handleFinish();
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const handleFinish = () => {
    setIsFading(true);
    setTimeout(() => {
      setShouldRender(false);
      onFinish();
    }, 500); // Wait for fade out transition
  };

  if (!shouldRender) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-etalas-dark flex items-center justify-center transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center">
        <div className="relative mb-6">
          <div className="w-20 h-20 bg-etalas-teal rounded-xl flex items-center justify-center text-etalas-dark animate-bounce">
             <Terminal size={48} />
          </div>
          <div className="absolute inset-0 bg-etalas-teal rounded-xl blur-xl opacity-40 animate-pulse"></div>
        </div>
        
        <h1 className="text-3xl font-bold text-white tracking-tighter mb-2 overflow-hidden">
          <span className="inline-block animate-[fadeInUp_0.5s_ease-out_forwards]">etalas</span>
          <span className="inline-block text-etalas-teal animate-[fadeInUp_0.5s_ease-out_0.2s_forwards]">.aug</span>
        </h1>
        
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mt-4">
          <div className="h-full bg-etalas-teal animate-[width_2s_ease-in-out_forwards]" style={{ width: '0%', animationName: 'growWidth', animationDuration: '2.5s', animationFillMode: 'forwards' }}></div>
        </div>
      </div>
      
      <style>{`
        @keyframes growWidth {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};