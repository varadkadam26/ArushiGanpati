import { motion } from "framer-motion";
import Modak from "../components/Modak.jsx";
import { invitation } from "../data/config.js";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function InvitationSection({ reduceMotion }) {
  return (
    <section
      id="invitation"
      className="relative w-full text-white py-16 sm:py-20 px-6 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto grid gap-8 sm:grid-cols-[1.2fr_0.8fr] items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ show: { transition: { staggerChildren: 0.18 } } }}
        >
          <motion.p variants={reveal} className="text-xs tracking-[0.3em] text-ivory/80 mb-6">
            THE INVITATION
          </motion.p>

          {invitation.invitationLines.map((line, i) => (
            <motion.p
              key={i}
              variants={reveal}
              className={`deva text-xl sm:text-2xl leading-relaxed mb-6 ${
                i === 0 ? "text-white" : "text-white/80 italic"
              }`}
            >
              {line}
            </motion.p>
          ))}


        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="w-full max-w-[180px] aspect-[160/90]">
            <Modak reduceMotion={reduceMotion} className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
