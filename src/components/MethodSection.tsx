import { motion } from "framer-motion";
import { Users, Target, TrendingUp } from "lucide-react";

const pillars = [
  {
    letter: "C",
    title: "Cliente",
    description: "Atrair o cliente certo com intenção real de compra.",
    icon: Users,
  },
  {
    letter: "E",
    title: "Estratégia",
    description: "Fazer o cliente escolher você e não seu concorrente.",
    icon: Target,
  },
  {
    letter: "O",
    title: "Otimização",
    description: "Aprenda como vender mais sem precisar investir mais no Google Ads.",
    icon: TrendingUp,
  },
];

const MethodSection = () => {
  return (
    <section className="py-20 md:py-28">
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
            É a metodologia que eu refinei e validei ao longo de mais de 4 anos de experiência no mercado, baseada em 3 fundamentos:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-black text-primary">{pillar.letter}</span>
                </div>
                <pillar.icon className="mx-auto mb-4 text-primary" size={32} />
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
