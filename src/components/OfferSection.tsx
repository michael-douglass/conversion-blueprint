import { motion } from "framer-motion";
import { Check, Zap, ShieldCheck } from "lucide-react";

const OfferSection = () => {
  const benefits = [
    "Método CEO completo com acesso vitalício",
    "Atualizações constantes do conteúdo",
    "Suporte direto com Juan Lucas",
    "Prompts de IA exclusivos para Google Ads",
    "Comunidade de alunos engajados",
    "Análise personalizada de campanhas em chamada",
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="oferta">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      {/* Glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-5 pointer-events-none" style={{ background: "hsl(142, 72%, 40%)" }} />

      <div className="container px-4 max-w-4xl mx-auto relative z-10">
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
            Você está a uma decisão de mudar a realidade das vendas da sua empresa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 border-glow-green glow-green"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-5 py-2 mb-6">
              <Zap className="text-accent" size={16} />
              <span className="text-accent font-semibold text-sm">Oferta Especial</span>
            </div>

            <p className="text-muted-foreground mb-3">Por menos do que o valor de um único cliente:</p>
            
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-muted-foreground line-through text-xl opacity-60">R$ 1.997</span>
            </div>
            <div className="text-4xl md:text-5xl font-black text-foreground mb-1">
              12x <span className="text-accent">R$ 97</span>
            </div>
            <p className="text-muted-foreground text-sm">ou R$ 997 à vista</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="text-accent shrink-0" size={18} />
                <span className="text-foreground text-sm">{b}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block bg-cta px-10 py-5 rounded-xl text-lg font-bold glow-green text-accent-foreground animate-pulse-slow"
            >
              QUERO TER ACESSO AO MÉTODO CEO
            </motion.a>

            <div className="flex items-center justify-center gap-2 mt-5 text-muted-foreground text-xs">
              <ShieldCheck size={14} />
              <span>Pagamento seguro • Acesso imediato • Garantia de 7 dias</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
