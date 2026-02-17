import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToCTA = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-hero relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-primary text-sm md:text-base font-semibold tracking-widest uppercase mb-6">
            Método exclusivo para Google Ads
          </p>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6" style={{ color: "white" }}>
            Você não precisa de mais aulas soltas no YouTube.{" "}
            <span className="text-gradient-gold">
              Você precisa de um caminho estruturado e validado
            </span>{" "}
            para vender todos os dias.
          </h1>

          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: "hsl(220 14% 70%)" }}>
            O Método CEO é exclusivo para quem quer vendas previsíveis no Google Ads — e não métricas de vaidade.
          </p>

          <motion.button
            onClick={scrollToCTA}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-cta px-8 py-4 rounded-lg text-lg font-bold shadow-lg shadow-accent/30 transition-all"
            style={{ color: "white" }}
          >
            QUERO VENDER NO GOOGLE ADS
          </motion.button>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16"
          >
            <ArrowDown className="mx-auto" style={{ color: "hsl(220 14% 50%)" }} size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
