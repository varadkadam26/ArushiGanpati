import { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * A small, cheap set of drifting particles. Count is deliberately low
 * to keep performance excellent — this is atmosphere, not a light show.
 */
export default function Particles({ count = 14, reduceMotion = false, className = "" }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 8,
        duration: 14 + Math.random() * 10,
        drift: Math.random() * 40 - 20,
      })),
    [count]
  );

  if (reduceMotion) return null;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-copper/40"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            bottom: -20,
          }}
          animate={{
            y: [0, -600],
            x: [0, p.drift],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
