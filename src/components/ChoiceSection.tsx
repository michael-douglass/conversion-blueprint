import { motion } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";

const ChoiceSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Agora você tem uma escolha:
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bad choice */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-destructive/20 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-destructive" />
            <RotateCcw className="text-destructive mb-4" size={32} />
            <h3 className="text-xl font-bold text-foreground mb-4">Continuar no ciclo</h3>
            <p className="text-muted-foreground leading-relaxed">
              Continuar no ciclo de tentativa e erro, perdendo tempo e dinheiro com conteúdos soltos no YouTube, sem uma direção clara.
            </p>
          </motion.div>

          {/* Good choice */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border-2 border-accent/40 rounded-2xl p-8 relative overflow-hidden shadow-lg shadow-accent/5"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-accent" />
            <ArrowRight className="text-accent mb-4" size={32} />
            <h3 className="text-xl font-bold text-foreground mb-4">Agarrar a oportunidade</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Agarrar a oportunidade única de ter uma metodologia validada para ter uma máquina de vendas no Google.
            </p>
            <a
              href="#oferta"
              className="inline-block bg-cta px-6 py-3 rounded-lg font-bold text-sm hover:scale-105 active:scale-95 transition-transform"
              style={{ color: "white" }}
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
