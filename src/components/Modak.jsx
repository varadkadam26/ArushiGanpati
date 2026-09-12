import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * A small stylised line-art Modak that fades/moves in from one side,
 * triggered once when the section scrolls into view.
 */
export default function Modak({ className = "", reduceMotion = false }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
          controls.start("enter");
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [controls, triggered, reduceMotion]);

  return (
    <div ref={ref} className={`overflow-visible ${className}`}>
      <motion.svg
        viewBox="0 0 160 90"
        className="w-full h-full text-copper"
        initial={reduceMotion ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
        animate={
          reduceMotion
            ? {}
            : controls
        }
        variants={{
          enter: {
            y: [-20, 0, -4, 0],
            opacity: [0, 1, 1, 1],
            transition: { duration: 2.0, ease: "easeOut", times: [0, 0.6, 0.8, 1] },
          },
        }}
      >
        {/* Modak outline */}
        <path
          d="M 80 15 C 100 40 115 55 115 70 C 115 82 45 82 45 70 C 45 55 60 40 80 15 Z"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Inner Folds */}
        <path
          d="M 80 15 C 75 40 65 55 63 79"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M 80 15 C 80 40 80 55 80 80"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M 80 15 C 85 40 95 55 97 79"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
        />
      </motion.svg>
    </div>
  );
}
