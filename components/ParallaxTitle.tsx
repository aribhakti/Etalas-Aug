import React, { useRef, useEffect } from 'react';

interface ParallaxTitleProps {
  children: React.ReactNode;
  className?: string;
  velocity?: number; // How fast it moves. Negative for left/up, positive for right/down.
  direction?: 'x' | 'y';
}

export const ParallaxTitle: React.FC<ParallaxTitleProps> = ({ 
  children, 
  className = "", 
  velocity = 0.1, 
  direction = 'y'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!elementRef.current) return;
      
      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Optimization: only animate if visible or close to visible
      if (rect.top < windowHeight + 100 && rect.bottom > -100) {
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;
        const distanceFromCenter = viewportCenter - elementCenter;
        
        // Move based on distance from center
        const move = distanceFromCenter * velocity;
        
        if (direction === 'x') {
          elementRef.current.style.transform = `translateX(${move}px)`;
        } else {
          elementRef.current.style.transform = `translateY(${move}px)`;
        }
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [velocity, direction]);

  return (
    <div className={`w-full ${direction === 'x' ? 'overflow-hidden' : ''} py-2`}>
      <div 
        ref={elementRef} 
        className={`will-change-transform ${className}`}
      >
        {children}
      </div>
    </div>
  );
};