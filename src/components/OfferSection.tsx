import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const OfferSection = () => {
  const scrollToCTA = () => {
    window.open("#", "_self");
  };

  const benefits = [
    "Método CEO completo com acesso vitalício",
    "Atualizações constantes do conteúdo",
    "Suporte direto com Juan Lucas",
    "Prompts de IA exclusivos para Google Ads",
    "Comunidade de alunos engajados",
    "Análise personalizada de campanhas em chamada",
  ];

  return (
    <section className="py-20 md:py-28 bg-section-alt" id="oferta">
      <div className="container px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
            AGORA É A SUA VEZ!
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Você está a uma decisão de mudar a realidade das vendas da sua empresa (para sempre).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border-2 border-primary/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-primary/5"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-6">
              <Zap className="text-primary" size={16} />
              <span className="text-primary font-semibold text-sm">Oferta Especial</span>
            </div>

            <p className="text-muted-foreground mb-2">Por menos do que o valor de um único cliente que você fecha:</p>
            
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-muted-foreground line-through text-2xl">R$ 1.997</span>
              <span className="text-4xl md:text-5xl font-black text-foreground">
                12x <span className="text-accent">R$ 97</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm">ou R$ 997 à vista</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="text-accent shrink-0" size={20} />
                <span className="text-foreground text-sm font-medium">{b}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block bg-cta px-10 py-5 rounded-xl text-lg font-bold shadow-lg shadow-accent/30 animate-pulse-slow"
              style={{ color: "white" }}
            >
              QUERO TER ACESSO AO MÉTODO CEO
            </motion.a>
            <p className="text-muted-foreground text-xs mt-4">Pagamento seguro • Acesso imediato</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
