import { motion } from "framer-motion";
import { ArrowDown, Target, TrendingUp, Zap } from "lucide-react";
import juanBanner from "@/assets/juan-banner.jpeg";

const HeroSection = () => {
  const scrollToCTA = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background photo with gradient fade */}
      <div className="absolute inset-0 z-0">
        <img
          src={juanBanner}
          alt=""
          className="absolute w-full h-full object-cover object-top opacity-30 md:opacity-40"
          loading="eager"
          aria-hidden="true"
        />
        {/* Dark gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: "hsla(217, 91%, 60%, 0.15)" }} />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none" style={{ background: "hsla(142, 72%, 40%, 0.1)" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsla(217,91%,60%,0.3) 1px, transparent 1px), linear-gradient(90deg, hsla(217,91%,60%,0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container relative z-10 px-4 py-20 md:py-0">
        <div className="flex flex-col items-center justify-center min-h-screen text-center max-w-3xl mx-auto">
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

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] mb-6 text-foreground"
          >
            Você não precisa de mais aulas soltas no YouTube.{" "}
            <span className="text-gradient-blue">
              Você precisa de um caminho estruturado e validado
            </span>{" "}
            para vender todos os dias.
          </motion.h1>

          {/* Feature tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {[
              { icon: Target, label: "Vendas Previsíveis" },
              { icon: TrendingUp, label: "Resultados Reais" },
              { icon: Zap, label: "Método Validado" },
            ].map((tag, i) => (
              <div key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                <tag.icon size={16} className="text-primary" />
                <span>{tag.label}</span>
                {i < 2 && <span className="text-border ml-2 hidden sm:inline">|</span>}
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.button
              onClick={scrollToCTA}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-cta px-8 py-4 rounded-xl text-lg font-bold glow-green text-accent-foreground transition-all"
            >
              QUERO VENDER NO GOOGLE ADS
            </motion.button>

            <div className="text-sm text-muted-foreground">
              <span className="line-through opacity-60">De R$ 1.997</span>
              <span className="mx-2">·</span>
              <span className="text-accent font-bold text-base">Por 12x R$ 97</span>
            </div>
          </motion.div>

          {/* Floating stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 glass border-glow rounded-xl p-4 inline-flex items-center gap-6"
          >
            <div className="text-center">
              <p className="text-xl font-bold text-accent">+R$ 150K</p>
              <p className="text-xs text-muted-foreground">faturados por alunos</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <p className="text-xl font-bold text-primary">500+</p>
              <p className="text-xs text-muted-foreground">alunos ativos</p>
            </div>
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
