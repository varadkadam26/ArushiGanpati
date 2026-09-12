import { motion } from "framer-motion";
import { invitation } from "../data/config.js";

export default function Entrance({ reduceMotion }) {
  if (reduceMotion) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.1, duration: 0.7, ease: "easeInOut" }}
      style={{ pointerEvents: "none" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-transparent"
    >
      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.1em" }}
        animate={{ opacity: 1, letterSpacing: "0.3em" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="deva text-copper text-xl"
      >
        {invitation.mantra}
      </motion.p>
    </motion.div>
  );
}
