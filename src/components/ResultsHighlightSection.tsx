import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const highlights = [
  {
    name: "Fabiano Camoleze",
    role: "CEO do Toc e Art",
    quote: "No período de 45 dias, a nossa campanha já tinha gerado mais de R$ 150.000,00 em vendas!",
  },
  {
    name: "João Prompero",
    role: "Gestor de tráfego",
    quote: "Teve um cliente que investia R$ 4.500 por mês sem resultados e, no primeiro mês, ele teve um faturamento de mais de R$ 23.000.",
  },
  {
    name: "Denner Toledo",
    role: "CEO da AnanMED",
    quote: "Fechei 3 contratos logo após 3 semanas aplicando o método.",
  },
];

const ResultsHighlightSection = () => {
  return (
    <section className="py-16 md:py-20 bg-primary" style={{ background: "hsl(217 91% 55%)" }}>
      <div className="container px-4 max-w-5xl mx-auto">
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
              <Quote className="mx-auto mb-3 opacity-40" style={{ color: "white" }} size={24} />
              <p className="font-bold text-lg mb-3 leading-snug" style={{ color: "white" }}>
                "{h.quote}"
              </p>
              <p className="text-sm font-semibold" style={{ color: "hsla(0,0%,100%,0.9)" }}>{h.name}</p>
              <p className="text-xs" style={{ color: "hsla(0,0%,100%,0.6)" }}>{h.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsHighlightSection;
