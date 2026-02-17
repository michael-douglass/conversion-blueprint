import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

const PainSection = () => {
  const pains = [
    "Gasta dinheiro com anúncios e não vê retorno real",
    "Depende de agências ou freelancers que não trazem resultado",
    "Fica perdido entre tantas métricas sem saber o que realmente importa",
    "Curtidas não pagam contas — e você sabe disso",
  ];

  return (
    <section className="py-20 md:py-28 bg-section-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Se você se identifica com isso, <span className="text-destructive">preste atenção:</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A maioria dos empresários e gestores de tráfego estão presos num ciclo de tentativa e erro.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-xl glass border-glow"
            >
              <XCircle className="text-destructive shrink-0 mt-0.5" size={24} />
              <p className="text-foreground font-medium text-lg">{pain}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainSection;
