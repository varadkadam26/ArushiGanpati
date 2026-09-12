import { motion } from "framer-motion";
import ganpatiImg from "../assets/ganpati_hd.jpg";

/**
 * Renders the family-chosen Ganpati illustration (src/assets/ganpati_hd.jpg)
 * with a soft ambient glow and slow breathing animation.
 */
export default function GanpatiMark({ className = "" }) {
  return (
    <div className={`relative ${className} flex items-center justify-center`}>
      <img
        src={ganpatiImg}
        alt="Ganpati"
        className="relative w-full h-full object-contain"
        style={{ filter: "brightness(0) invert(1)" }}
      />
    </div>
  );
}
