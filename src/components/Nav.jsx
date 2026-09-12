import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#arrival" },
  { label: "Invitation", href: "#invitation" },
  { label: "Details", href: "#details" },
  { label: "Location", href: "#home" },
];

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-5 left-0 right-0 mx-auto md:left-auto md:right-8 md:mx-0 md:translate-x-0 z-50 w-[92%] md:w-max max-w-md md:max-w-none"
    >
      <div className="flex items-center justify-between md:justify-center md:gap-12 rounded-full border border-white/20 bg-white/15 backdrop-blur-md px-5 py-2.5 sm:px-6 sm:py-3 md:px-10 md:py-3.5">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-sans text-[11px] sm:text-xs tracking-[0.15em] text-ivory/70 hover:text-copper transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
