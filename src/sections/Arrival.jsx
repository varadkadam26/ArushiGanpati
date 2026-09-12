import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GanpatiMark from "../components/GanpatiMark.jsx";
import Particles from "../components/Particles.jsx";
import { invitation } from "../data/config.js";

export default function Arrival({ reduceMotion }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const markY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -80]);
  const markScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 0.92]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="arrival"
      ref={ref}
      className="relative min-h-[92svh] w-full flex flex-col items-center justify-center overflow-hidden text-ivory px-6 pb-32 pt-20"
    >
      {/* radial ambient backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 38%, rgba(193,64,31,0.26), transparent 65%), radial-gradient(ellipse 90% 60% at 50% 100%, rgba(214,154,62,0.16), transparent 70%)",
        }}
      />
      <Particles reduceMotion={reduceMotion} />

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 flex flex-col items-center text-center max-w-lg"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="deva text-copper text-lg sm:text-xl mb-6"
        >
          {invitation.mantra}
        </motion.p>

        <motion.div
          style={{ y: markY, scale: markScale }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-44 sm:w-56 aspect-[260/280] text-copper mb-6"
        >
          <GanpatiMark reduceMotion={reduceMotion} className="w-full h-full" />
        </motion.div>

        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-4xl sm:text-6xl leading-[1.08] text-ivory">
            {invitation.heroHeadlineTop}
            <br />
            <span className="italic text-copper">{invitation.heroHeadlineBottom}</span>
          </h1>

          <div className="hairline w-16 mx-auto my-6" />

          <p className="font-sans text-sm sm:text-base tracking-[0.25em] text-ivory/70 mb-2">
            {invitation.heroInviteLine.toUpperCase()}
          </p>
          <p className="font-display text-lg sm:text-xl text-mist">{invitation.heroDateRange}</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/50"
      >
        <span className="text-[10px] tracking-[0.3em]">SCROLL</span>
        <motion.span
          animate={reduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-8 bg-gradient-to-b from-copper to-transparent"
        />
      </motion.div>
    </section>
  );
}
