'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface ScrollAnimateProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export default function ScrollAnimate({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollAnimateProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context;

    // Dynamically register ScrollTrigger on client side
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      if (!elRef.current) return;

      let initialY = 0;
      let initialX = 0;

      if (direction === 'up') initialY = 40;
      if (direction === 'down') initialY = -40;
      if (direction === 'left') initialX = 40;
      if (direction === 'right') initialX = -40;

      ctx = gsap.context(() => {
        gsap.fromTo(
          elRef.current,
          {
            opacity: 0,
            y: initialY,
            x: initialX,
            scale: direction === 'fade' ? 0.95 : 1,
          },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: 0.9,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }, elRef);
    });

    return () => {
      if (ctx) ctx.revert();
    };
  }, [delay, direction]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}
