import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const ForWhoSection = () => {
  const forYou = [
    "Empresários que precisam vender na internet mas estão quebrando a cabeça com campanhas que não funcionam",
    "Empresários que já estão vendendo e querem escalar suas vendas e diminuir seus custos",
    "Gestores de Tráfego que querem se profissionalizar e entregar resultados reais",
    "Negócios Locais de qualquer segmento: advogados, dentistas, clínicas, lojas, imobiliárias",
    "Prestadores de Serviços que querem atrair clientes com intenção real de compra",
  ];

  const notForYou = [
    "Pessoas que estão procurando por uma fórmula mágica e resultados milagrosos sem fazer esforços",
    "Quem não está disposto a aplicar o método de forma consistente",
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            O Método CEO serve para o <span className="text-primary">meu negócio?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For you */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-accent/30 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-accent mb-6 flex items-center gap-2">
              <CheckCircle size={24} />
              É para você se...
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={18} />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not for you */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-destructive/30 rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-destructive mb-6 flex items-center gap-2">
              <XCircle size={24} />
              NÃO é para você se...
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="text-destructive shrink-0 mt-0.5" size={18} />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
