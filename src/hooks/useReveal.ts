import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Adds `.is-visible` semantics when the element scrolls into view.
 * Under prefers-reduced-motion the element starts visible and no observer runs.
 * A safety timeout guarantees content is never left hidden if the observer
 * somehow doesn't fire (slow devices, capture tools, edge cases).
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;

    // Already in view at mount (e.g. above-the-fold) — reveal on the next frame.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Fire a little before the element is fully in view.
      { threshold: 0, rootMargin: "0px 0px 12% 0px", ...options }
    );

    observer.observe(node);
    const safety = window.setTimeout(() => setVisible(true), 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, [options]);

  return { ref, visible };
}
