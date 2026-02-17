import { motion } from "framer-motion";
import { Users, Target, TrendingUp } from "lucide-react";

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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            É a metodologia refinada e validada ao longo de mais de 4 anos, baseada em 3 fundamentos:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              <div
                className="glass border-glow rounded-2xl p-8 text-center h-full hover:border-primary/30 transition-all duration-500"
                style={{ boxShadow: `0 0 40px -15px ${pillar.glow}` }}
              >
                <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-black text-gradient-blue">{pillar.letter}</span>
                </div>
                <pillar.icon className="mx-auto mb-4 text-primary opacity-60" size={28} />
                <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
