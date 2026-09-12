import { motion } from "framer-motion";
import { invitation } from "../data/config.js";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Details() {
  return (
    <section id="details" className="relative w-full bg-ink text-ivory py-16 sm:py-20 px-6">
      <div className="max-w-3xl mx-auto">


        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="divide-y divide-copper/15"
        >
          {invitation.details.map((d) => (
            <motion.div
              key={d.label}
              variants={reveal}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between py-8 gap-1"
            >
              <span className="font-sans text-xs tracking-[0.2em] text-ivory/50">
                {d.label.toUpperCase()}
              </span>
              <div className="text-right">
                <p className="font-display text-2xl sm:text-3xl text-ivory">{d.value}</p>
                <p className="font-sans text-sm text-mist mt-1">{d.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
