import { useEffect, useRef } from "react";
import anime from "animejs";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const forceVisible = (targets) => {
  const els = Array.isArray(targets)
    ? targets
    : targets instanceof NodeList
      ? Array.from(targets)
      : [targets];
  els.forEach((el) => {
    if (!el) return;
    el.style.opacity = "1";
    el.style.transform = "none";
  });
};

const safeReveal = (
  targets,
  { translateY = 22, duration = 900, delay = 0 } = {},
) => {
  try {
    anime.set(targets, { opacity: 0, translateY });
    anime({
      targets,
      opacity: [0, 1],
      translateY: [translateY, 0],
      easing: "easeOutQuart",
      duration,
      delay,
      complete: () => forceVisible(targets),
    });
  } catch {
    forceVisible(targets);
  }
};

export function useReveal({
  stagger = false,
  delay = 0,
  direction = "up",
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const targets = stagger ? Array.from(node.children) : node;
    if (stagger && targets.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            safeReveal(targets, {
              translateY: direction === "up" ? 22 : 0,
              delay: stagger ? anime.stagger(90, { start: delay }) : delay,
            });
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    const fallback = setTimeout(() => forceVisible(targets), 2500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [stagger, delay, direction]);

  return ref;
}

export function useHeroEntrance(selector) {
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const targets = document.querySelectorAll(selector);
    if (!targets.length) return undefined;

    safeReveal(targets, {
      translateY: 18,
      duration: 900,
      delay: anime.stagger(110, { start: 80 }),
    });

    const fallback = setTimeout(() => forceVisible(targets), 2500);
    return () => clearTimeout(fallback);
  }, [selector]);
}

export function useCountUp(targetValue, { duration = 1400, suffix = "" } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      node.textContent = `${targetValue}${suffix}`;
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            try {
              const counter = { value: 0 };
              anime({
                targets: counter,
                value: targetValue,
                round: 1,
                duration,
                easing: "easeOutCubic",
                update: () => {
                  node.textContent = `${counter.value}${suffix}`;
                },
              });
            } catch {
              node.textContent = `${targetValue}${suffix}`;
            }
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(node);
    const fallback = setTimeout(() => {
      node.textContent = `${targetValue}${suffix}`;
    }, 2500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [targetValue, duration, suffix]);

  return ref;
}

export function hoverLift(node, { scale = 1.015, translateY = -3 } = {}) {
  if (!node || prefersReducedMotion())
    return { onMouseEnter: () => {}, onMouseLeave: () => {} };

  const enter = () => {
    try {
      anime({
        targets: node,
        scale,
        translateY,
        duration: 320,
        easing: "easeOutQuart",
      });
    } catch {}
  };
  const leave = () => {
    try {
      anime({
        targets: node,
        scale: 1,
        translateY: 0,
        duration: 320,
        easing: "easeOutQuart",
      });
    } catch {}
  };

  return { onMouseEnter: enter, onMouseLeave: leave };
}

export default anime;
