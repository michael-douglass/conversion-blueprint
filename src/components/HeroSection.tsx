import { motion } from "framer-motion";
import { ArrowDown, Target, TrendingUp, Zap } from "lucide-react";

const HeroSection = () => {
  const scrollToCTA = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Ambient glow orbs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: "hsla(30, 90%, 50%, 0.12)" }} />
      <div className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none" style={{ background: "hsla(142, 72%, 40%, 0.08)" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsla(217,91%,60%,0.3) 1px, transparent 1px), linear-gradient(90deg, hsla(217,91%,60%,0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container relative z-10 px-4 pt-20 pb-0 md:pt-28">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-center min-h-[70vh] lg:min-h-[85vh] lg:items-stretch">
          {/* Left: Text — no mobile fica acima da foto (order-1); no desktop à esquerda (lg:order-1) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-12 lg:pt-4 order-1 lg:order-1 relative z-20"
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

            <h1 className="text-3xl md:text-4xl lg:text-[32px] xl:text-5xl font-medium leading-[1.1] tracking-tighter mb-6 text-foreground">
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
                  {i < 2 && <span className="text-border ml-2 hidden sm:inline">|</span>}
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
                <span className="line-through opacity-60">De R$ 899,00</span>
                <br />
                <span className="text-accent font-bold text-base">Por 12x de R$ 51,40</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Photo — no mobile fica abaixo do texto (order-2); no desktop à direita (lg:order-2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end lg:items-end order-2 lg:order-2 p-0 m-0 lg:h-full lg:min-h-0 lg:-mr-4 lg:pr-0"
          >
            {/* Orange/gold accent ring behind */}
            <div className="absolute top-1/2 right-1/2 lg:right-1/4 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full border-2 opacity-20" style={{ borderColor: "hsla(30, 90%, 50%, 0.4)" }} />
            <div className="absolute top-1/2 right-1/2 lg:right-1/4 -translate-y-1/2 w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full opacity-15 blur-3xl" style={{ background: "hsla(30, 80%, 45%, 0.2)" }} />

            <img
              src="/images/juan-banner.png"
              alt="Juan Lucas - Especialista em Google Ads"
              className="relative z-10 block w-full max-w-md md:max-w-lg lg:max-w-none lg:w-full lg:h-full min-h-[320px] lg:min-h-0 rounded-2xl lg:rounded-tl-2xl lg:rounded-tr-none lg:rounded-b-none hero-image-glow object-cover object-right-top lg:object-[50%_100%] m-0 shrink-0"
              loading="eager"
            />

            {/* Floating stats cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-4 left-4 lg:-left-4 z-20 glass border-glow rounded-xl p-4"
            >
              <p className="text-xs text-muted-foreground">Resultados dos alunos</p>
              <p className="text-xl font-bold text-accent">+R$ 150K</p>
              <p className="text-xs text-muted-foreground">em 45 dias</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, delay: 1 }}
              className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-2 z-20 glass border-glow rounded-xl p-4"
            >
              <p className="text-xs text-muted-foreground">Resultados dos alunos</p>
              <p className="text-xl font-bold text-accent">+R$ 300K</p>
              <p className="text-xs text-muted-foreground">em 90 dias</p>
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
