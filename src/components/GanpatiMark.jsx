import { motion } from "framer-motion";
import ganpatiImg from "../assets/ganpati.png";

/**
 * Renders the family-chosen Ganpati illustration (src/assets/ganpati.png)
 * with a soft ambient glow and slow breathing animation.
 */
export default function GanpatiMark({ className = "" }) {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <img
        src={ganpatiImg}
        alt="Ganpati"
        className="relative w-full h-full object-contain [clip-path:inset(0_0_15%_0)]"
      />
    </div>
  );
}
