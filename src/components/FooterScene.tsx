"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Trigger the decorative scene once, after hydration and on entering the viewport. */
export function FooterScene({ children }: { children: ReactNode }) {
  const scene = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = scene.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.dataset.visible = "true";
        observer.disconnect();
      }
    }, { threshold: .3 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div className="footer-scene" ref={scene}>{children}</div>;
}
