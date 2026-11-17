"use client";

import { useAnimate } from "framer-motion";
import { useEffect, type ReactNode } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const [scope, animate] = useAnimate<HTMLDivElement>();

  useEffect(() => {
    const element = scope.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || preference.matches) return;
    let played = false;
    let animation: ReturnType<typeof animate> | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || played || preference.matches) return;
      played = true;
      animation = animate(element, { opacity: [0, 1], y: [24, 0] }, { duration: .65, delay, ease: [.2, .75, .25, 1] });
      observer.disconnect();
    }, { threshold: .1 });
    const stopMotion = () => {
      if (preference.matches) {
        animation?.stop();
        element.style.opacity = "1";
        element.style.transform = "none";
        observer.disconnect();
      }
    };
    observer.observe(element);
    preference.addEventListener("change", stopMotion);
    return () => { observer.disconnect(); animation?.stop(); preference.removeEventListener("change", stopMotion); };
  }, [animate, delay, scope]);

  return <div ref={scope} className={className}>{children}</div>;
}
