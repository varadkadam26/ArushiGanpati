import { motion } from "framer-motion";
import GanpatiMark from "../components/GanpatiMark.jsx";
import { invitation } from "../data/config.js";

export default function HomeLocation({ reduceMotion }) {
  return (
    <section
      id="home"
      className="relative w-full bg-umber text-ivory py-16 sm:py-20 px-6 overflow-hidden"
    >
      <div className="absolute -right-16 -bottom-10 w-56 sm:w-72 opacity-[0.10] pointer-events-none">
        <GanpatiMark reduceMotion={true} className="w-full aspect-[260/280]" />
      </div>

      <div className="relative max-w-xl mx-auto text-center">




        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mb-6"
        >
          <p className="font-display text-xl sm:text-2xl leading-relaxed text-ivory/90">
            {invitation.address.line1}
            <br />
            {invitation.address.line2}
            <br />
            {invitation.address.line3}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-sm text-mist mb-6 italic"
        >
          {invitation.addressNote}
        </motion.p>
      </div>
    </section>
  );
}
