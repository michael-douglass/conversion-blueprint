import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/constants";

const FloatingOfferButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.4 }}
      className="fixed bottom-6 left-0 right-0 z-40 flex justify-center pointer-events-none"
    >
      <div className="pointer-events-auto">
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-offer-btn group inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-bold text-sm text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <span>Aproveitar a oferta</span>
          <span className="floating-offer-btn-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/15">
            <ChevronRight className="h-4 w-4 text-white" strokeWidth={2.5} />
          </span>
        </a>
      </div>
    </motion.div>
  );
};

export default FloatingOfferButton;
