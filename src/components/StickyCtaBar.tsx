import { motion } from "framer-motion";

const StickyCtaBar = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border py-3 px-4 md:hidden"
    >
      <a
        href="#"
        className="block text-center bg-cta rounded-xl py-3.5 font-bold text-sm shadow-lg"
        style={{ color: "white" }}
      >
        QUERO ENTRAR NO MÉTODO CEO
      </a>
    </motion.div>
  );
};

export default StickyCtaBar;
