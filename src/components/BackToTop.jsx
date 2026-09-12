import { useEffect, useState, useRef } from "react";
import anime from "animejs";
import { prefersReducedMotion } from "../lib/animate";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef(null);
  const shown = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 560;
      if (shouldShow !== shown.current) {
        shown.current = shouldShow;
        setVisible(shouldShow);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!btnRef.current) return;
    if (prefersReducedMotion()) {
      btnRef.current.style.opacity = visible ? "1" : "0";
      return;
    }
    try {
      anime({
        targets: btnRef.current,
        opacity: visible ? [0, 1] : [1, 0],
        scale: visible ? [0.8, 1] : [1, 0.8],
        duration: 280,
        easing: "easeOutQuart",
      });
    } catch {
      btnRef.current.style.opacity = visible ? "1" : "0";
    }
  }, [visible]);

  const scrollToTop = () => {
    if (prefersReducedMotion()) {
      window.scrollTo(0, 0);
      return;
    }
    const scrollObj = { y: window.scrollY };
    anime({
      targets: scrollObj,
      y: 0,
      duration: 700,
      easing: "easeInOutQuart",
      update: () => window.scrollTo(0, scrollObj.y),
    });
  };

  return (
    <button
      ref={btnRef}
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-7 right-7 z-40 w-12 h-12 rounded-full bg-ink text-paper flex items-center justify-center shadow-soft transition-colors duration-300 hover:bg-brass ${
        visible ? "" : "pointer-events-none"
      }`}
      style={{ opacity: 0 }}
    >
      <i className="ri-arrow-up-line text-xl" aria-hidden="true"></i>
    </button>
  );
};

export default BackToTop;
