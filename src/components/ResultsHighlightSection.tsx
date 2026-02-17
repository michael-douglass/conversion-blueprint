import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const highlights = [
  { name: "Fabiano Camoleze", role: "CEO do Toc e Art", quote: "R$ 150.000 em vendas em apenas 45 dias!" },
  { name: "João Prompero", role: "Gestor de tráfego", quote: "Faturamento de R$ 23.000 no primeiro mês" },
  { name: "Denner Toledo", role: "CEO da AnanMED", quote: "3 contratos fechados em 3 semanas" },
];

const ResultsHighlightSection = () => {
  return (
    <section className="py-14 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsla(217, 91%, 60%, 0.1), hsla(142, 72%, 40%, 0.05))" }}>
      <div className="absolute inset-0" style={{ background: "hsl(220 15% 5%)", opacity: 0.85 }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container px-4 max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <Quote className="mx-auto mb-3 text-primary/40" size={20} />
              <p className="font-bold text-lg mb-3 leading-snug text-foreground">
                "{h.quote}"
              </p>
              <p className="text-sm font-semibold text-primary">{h.name}</p>
              <p className="text-xs text-muted-foreground">{h.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsHighlightSection;
