import { motion } from "framer-motion";
import { ArrowDown, Target, TrendingUp, Zap } from "lucide-react";
import juanBanner from "@/assets/juan-banner.jpeg";

const HeroSection = () => {
  const scrollToCTA = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-hero relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: "hsla(217, 91%, 60%, 0.15)" }} />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none" style={{ background: "hsla(142, 72%, 40%, 0.1)" }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsla(217,91%,60%,0.3) 1px, transparent 1px), linear-gradient(90deg, hsla(217,91%,60%,0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container relative z-10 px-4 py-20 md:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-20 lg:pt-0"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass border-glow rounded-full px-4 py-2 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">Método exclusivo para Google Ads</span>
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] mb-6 text-foreground">
              Você não precisa de mais aulas soltas no YouTube.{" "}
              <span className="text-gradient-blue">
                Você precisa de um caminho estruturado e validado
              </span>{" "}
              para vender todos os dias.
            </h1>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: Target, label: "Vendas Previsíveis" },
                { icon: TrendingUp, label: "Resultados Reais" },
                { icon: Zap, label: "Método Validado" },
              ].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                  <tag.icon size={16} className="text-primary" />
                  <span>{tag.label}</span>
                  {i < 2 && <span className="text-border ml-2">|</span>}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <motion.button
                onClick={scrollToCTA}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-cta px-8 py-4 rounded-xl text-lg font-bold glow-green text-accent-foreground transition-all"
              >
                QUERO VENDER NO GOOGLE ADS
              </motion.button>

              <div className="text-sm text-muted-foreground mt-2 sm:mt-3">
                <span className="line-through opacity-60">De R$ 1.997</span>
                <br />
                <span className="text-accent font-bold text-base">Por 12x R$ 97</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full blur-3xl opacity-20" style={{ background: "hsla(217, 91%, 60%, 0.3)" }} />
            </div>
            
            <img
              src={juanBanner}
              alt="Juan Lucas - Especialista em Google Ads"
              className="relative z-10 w-full max-w-lg rounded-2xl hero-image-glow"
              loading="eager"
            />

            {/* Floating stats card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-8 left-0 lg:-left-4 z-20 glass border-glow rounded-xl p-4"
            >
              <p className="text-xs text-muted-foreground">Resultados dos alunos</p>
              <p className="text-xl font-bold text-accent">+R$ 150K</p>
              <p className="text-xs text-muted-foreground">em 45 dias</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
