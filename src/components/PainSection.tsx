import { motion } from "framer-motion";
import { X } from "lucide-react";

const ORANGE = "#FF8C00";

const PainSection = () => {
  const pains = [
    "Gasta dinheiro com anúncios e não vê retorno real",
    "Depende de agências ou freelancers que não trazem resultado",
    "Fica perdido entre tantas métricas sem saber o que realmente importa",
    "Curtidas não pagam contas — e você sabe disso",
  ];

  const solutions = [
    "Retorno real com anúncios",
    "Parceria que entrega resultado",
    "Clareza do que realmente importa",
    "Foco no que paga contas",
  ];

  return (
    <section className="py-20 md:py-28 bg-section-alt relative overflow-hidden">
      {/* Grid sutil no fundo */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsla(0,0%,100%,0.08) 1px, transparent 1px), linear-gradient(90deg, hsla(0,0%,100%,0.08) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Se você se identifica com isso,{" "}
            <span style={{ color: ORANGE }}>preste atenção:</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A maioria dos empresários e gestores de tráfego estão presos num ciclo de tentativa e erro.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1.25fr_1fr] gap-6 lg:gap-8 items-stretch">
          {/* Card esquerdo: dores — fundo branco, ícones laranja */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white p-6 lg:p-8 shadow-xl border border-white/10"
          >
            <div className="flex justify-center mb-6">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ backgroundColor: ORANGE }}
              >
                <X className="text-white" size={28} strokeWidth={2.5} />
              </div>
            </div>
            <h3 className="text-center text-xl font-bold text-black mb-6">
              O ciclo de tentativa e erro
            </h3>
            <ul className="space-y-3">
              {pains.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-black">
                  <X
                    className="shrink-0 mt-0.5"
                    size={20}
                    style={{ color: ORANGE }}
                  />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card direito: solução — mais estreito, levemente por cima do esquerdo, efeito pulsar */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl glass border-glow p-6 lg:p-8 card-pulsar md:-mt-8 lg:-mt-10 relative z-10"
          >
            <div className="flex justify-center mb-4">
              <div className="text-2xl font-bold text-foreground">CEO</div>
            </div>
            <h3 className="text-center text-xl font-bold text-foreground mb-1">
              O que você pode ter:
            </h3>
            <p className="text-center text-sm text-muted-foreground mb-6">
              Um caminho estruturado e validado.
            </p>
            <ul className="space-y-3">
              {solutions.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground">
                  <span
                    className="shrink-0 w-5 h-5 rounded-full border-2 mt-0.5"
                    style={{ borderColor: ORANGE }}
                    aria-hidden
                  />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
