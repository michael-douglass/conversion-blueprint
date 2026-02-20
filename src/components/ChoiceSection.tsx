import { motion } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/constants";

const ChoiceSection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Agora você tem uma escolha:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 relative overflow-hidden"
            style={{ border: "1px solid hsla(0, 72%, 51%, 0.15)" }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-destructive/50" />
            <RotateCcw className="text-destructive/60 mb-4" size={28} />
            <h3 className="text-xl font-bold text-foreground mb-4">Continuar no ciclo</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tentativa e erro, perdendo tempo e dinheiro com conteúdos soltos no YouTube, sem direção clara.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass border-glow-green rounded-2xl p-8 relative overflow-hidden glow-green"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
            <ArrowRight className="text-accent mb-4" size={28} />
            <h3 className="text-xl font-bold text-foreground mb-4">Agarrar a oportunidade</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Ter uma metodologia validada para ter uma máquina de vendas no Google.
            </p>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cta px-6 py-3 rounded-lg font-bold text-sm text-accent-foreground hover:scale-105 active:scale-95 transition-transform"
            >
              QUERO UM CAMINHO VALIDADO
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChoiceSection;
