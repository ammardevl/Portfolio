import { useEffect, useRef } from "react";
import anime from "animejs";

/** True if the user has requested reduced motion at the OS level. */
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const forceVisible = (targets) => {
  const els = Array.isArray(targets) ? targets : targets instanceof NodeList ? Array.from(targets) : [targets];
  els.forEach((el) => {
    if (!el) return;
    el.style.opacity = "1";
    el.style.transform = "none";
  });
};

/**
 * Runs an anime.js entrance safely: hides the target only inside the same
 * synchronous try block that also starts the tween toward visible, so a
 * failure anywhere (import, bundling, browser quirk) can never leave
 * content stuck invisible. Falls back to forcing full opacity immediately.
 */
const safeReveal = (targets, { translateY = 22, duration = 900, delay = 0 } = {}) => {
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

/**
 * useReveal - reveals an element (or its direct children) with a single
 * restrained anime.js entrance when it scrolls into view. Content is
 * visible by default; it is only hidden for the brief, guaranteed window
 * right before animating in, so nothing can get stuck blank.
 *
 * @param {Object} options
 * @param {boolean} options.stagger - animate direct children with a stagger
 * @param {number} options.delay - extra delay in ms before the animation starts
 * @param {("up"|"none")} options.direction - translateY entrance or fade only
 */
export function useReveal({ stagger = false, delay = 0, direction = "up" } = {}) {
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
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);

    // Safety net: if the element never intersects (edge-case viewport math)
    // or the observer never fires, guarantee visibility after a short wait.
    const fallback = setTimeout(() => forceVisible(targets), 2500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [stagger, delay, direction]);

  return ref;
}

/**
 * useHeroEntrance - the single orchestrated page-load animation, used once
 * per page on the hero. Same guaranteed-visible-on-failure guardrails as
 * useReveal above.
 */
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

/** Animated count-up used for stat numbers. Runs once, on scroll into view. */
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
      { threshold: 0.5 }
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

/** Shared hover micro-interaction: a slight lift with a quick, consistent easing. */
export function hoverLift(node, { scale = 1.015, translateY = -3 } = {}) {
  if (!node || prefersReducedMotion()) return { onMouseEnter: () => {}, onMouseLeave: () => {} };

  const enter = () => {
    try {
      anime({ targets: node, scale, translateY, duration: 320, easing: "easeOutQuart" });
    } catch {
      /* no-op: hover styling is purely decorative */
    }
  };
  const leave = () => {
    try {
      anime({ targets: node, scale: 1, translateY: 0, duration: 320, easing: "easeOutQuart" });
    } catch {
      /* no-op */
    }
  };

  return { onMouseEnter: enter, onMouseLeave: leave };
}

export default anime;
