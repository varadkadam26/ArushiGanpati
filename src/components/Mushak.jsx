import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * A small stylised line-art mushak (mouse) that walks in from one side,
 * pauses as if looking toward Bappa, then continues — triggered once
 * when the section scrolls into view.
 */
export default function Mushak({ className = "", reduceMotion = false }) {
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
          controls.start("walk");
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
        initial={reduceMotion ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
        animate={
          reduceMotion
            ? {}
            : controls
        }
        variants={{
          walk: {
            x: [-60, 0, 6, 0],
            opacity: [0, 1, 1, 1],
            transition: { duration: 2.4, ease: "easeOut", times: [0, 0.6, 0.8, 1] },
          },
        }}
      >
        {/* body */}
        <path
          d="M20 60 C20 42 38 30 60 30 C86 30 108 40 118 56 C124 65 120 74 108 76
             C96 78 40 78 28 72 C22 69 20 66 20 60 Z"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
        />
        {/* ear */}
        <circle cx="46" cy="26" r="10" stroke="currentColor" strokeWidth="1.4" fill="none" />
        {/* tail */}
        <path
          d="M118 60 C136 58 148 46 150 30"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
        />
        {/* eye, looking toward Ganpati */}
        <circle cx="34" cy="46" r="2" fill="currentColor" />
        {/* legs, simple suggestion of motion */}
        <path d="M40 76 L36 84 M64 78 L62 86 M92 78 L94 86" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </motion.svg>
    </div>
  );
}
