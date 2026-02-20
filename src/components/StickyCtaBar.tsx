import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/constants";

const StickyCtaBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 md:hidden"
    >
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-offer-btn group inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-bold text-xs text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        <span>QUERO ENTRAR NO MÉTODO CEO</span>
        <span className="floating-offer-btn-icon flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15">
          <ChevronRight className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
        </span>
      </a>
    </motion.div>
  );
};

export default StickyCtaBar;
