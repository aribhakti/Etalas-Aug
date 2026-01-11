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
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Optimization: Only run animation loop when element is in viewport
    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry.isIntersecting;
    }, { threshold: 0, rootMargin: '100px' });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    const animate = () => {
      if (!elementRef.current) return;
      
      if (isVisibleRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
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
      if (elementRef.current) observer.unobserve(elementRef.current);
      observer.disconnect();
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