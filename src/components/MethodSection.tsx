import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Users, Target, TrendingUp } from "lucide-react";
import juanPortrait from "@/assets/juan-portrait.jpeg";

/** Wrapper que adiciona iluminação radial suave seguindo o cursor (spotlight) */
const CardWithSpotlight = ({
  children,
  className = "",
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0, isHovering: false });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovering: true,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouse((prev) => ({ ...prev, isHovering: false }));
  }, []);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {/* Gradiente radial que acompanha o cursor */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: mouse.isHovering ? 1 : 0,
          background:
            mouse.isHovering
              ? `radial-gradient(480px circle at ${mouse.x}px ${mouse.y}px, rgba(255, 140, 0, 0.12), transparent 42%)`
              : "transparent",
        }}
      />
      {children}
    </div>
  );
};

const pillars = [
  {
    letter: "C",
    title: "Cliente",
    description: "Atrair o cliente certo com intenção real de compra.",
    icon: Users,
    glow: "hsla(217, 91%, 60%, 0.1)",
  },
  {
    letter: "E",
    title: "Estratégia",
    description: "Fazer o cliente escolher você e não seu concorrente.",
    icon: Target,
    glow: "hsla(142, 72%, 40%, 0.1)",
  },
  {
    letter: "O",
    title: "Otimização",
    description: "Aprenda como vender mais sem precisar investir mais no Google Ads.",
    icon: TrendingUp,
    glow: "hsla(43, 96%, 56%, 0.08)",
  },
];

const MethodSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Afinal, o que é o <span className="text-gradient-gold">Método CEO</span>?
          </h2>
        </motion.div>

        {/* Bloco método: foto + texto | vídeo */}
        <div className="grid md:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass border-glow rounded-2xl p-6 lg:p-8 max-w-sm md:max-w-[320px] md:justify-self-end"
          >
            <div className="flex flex-col items-center md:items-start gap-4 mb-6">
              <img
                src={juanPortrait}
                alt="Juan Lucas - Especialista em Google Ads"
                className="w-24 h-24 rounded-full object-cover border-2 border-primary/40 shrink-0"
                loading="lazy"
              />
              <div>
                <p className="text-xl font-bold text-foreground">Juan Lucas</p>
                <p className="text-sm text-muted-foreground">Criador do Método CEO · Especialista em Google Ads</p>
              </div>
            </div>
            <div className="h-px bg-border mb-6" />
            <p className="text-foreground text-[15px] leading-relaxed mb-4">
              O Método CEO nasceu da experiência de quem viveu na prática o que funciona no Google Ads. Não é teoria de curso: é o passo a passo que conecta Cliente, Estratégia e Otimização para você vender mais com anúncios.
            </p>
            <p className="text-muted-foreground text-sm italic">
              Quem aplica o método entende por que cada decisão importa — e para o seu negócio, o próximo resultado pode ser o seu.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-2xl overflow-hidden border-glow bg-black/40"
          >
            <iframe
              src="https://www.youtube.com/embed/xCwcf7PCNZM"
              title="Método CEO - Juan Lucas"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto text-center mb-12 font-semibold"
        >
          É a metodologia refinada e validada ao longo de mais de 4 anos, baseada em 3 fundamentos:
        </motion.h1>

        {/* Cards: Scroll Reveal com stagger (fade-in + slide-up) + spotlight no hover */}
        <div className="relative max-w-2xl mx-auto min-h-[380px] md:min-h-[420px]">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05, margin: "0px 0px 50px 0px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.14,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="relative w-full"
              style={{
                zIndex: pillars.length - i,
                marginTop: i === 0 ? 0 : 24,
              }}
            >
              <CardWithSpotlight
                className="rounded-2xl"
                style={{ boxShadow: `0 0 32px -12px ${pillar.glow}` }}
              >
                <div className="group glass border-glow rounded-2xl p-6 md:p-8 text-center md:text-left md:flex md:items-center md:gap-6 card-glow-hover transition-all duration-500">
                  <img
                    src={juanPortrait}
                    alt=""
                    className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover border border-primary/30 shadow-lg shrink-0 mx-auto md:mx-0"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                        <span className="text-xl md:text-2xl font-black text-gradient-blue">{pillar.letter}</span>
                      </div>
                      <pillar.icon className="text-primary opacity-60 shrink-0" size={22} />
                      <h3 className="text-lg md:text-xl font-bold text-foreground">{pillar.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base">{pillar.description}</p>
                  </div>
                </div>
              </CardWithSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
