import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const ForWhoSection = () => {
  const forYou = [
    "Empresários que precisam vender na internet mas campanhas não funcionam",
    "Empresários que já vendem e querem escalar e diminuir custos",
    "Gestores de Tráfego que querem se profissionalizar e entregar resultados",
    "Negócios Locais de qualquer segmento",
    "Prestadores de Serviços que querem clientes com intenção real de compra",
  ];

  const notForYou = [
    "Pessoas que procuram fórmula mágica sem fazer esforço",
    "Quem não está disposto a aplicar o método consistentemente",
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            O Método CEO serve para o <span className="text-gradient-blue">meu negócio?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass border-glow-green rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-accent mb-6 flex items-center gap-2">
              <CheckCircle size={22} /> É para você se...
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-accent shrink-0 mt-0.5" size={16} />
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
            style={{ border: "1px solid hsla(0, 72%, 51%, 0.15)" }}
          >
            <h3 className="text-xl font-bold text-destructive mb-6 flex items-center gap-2">
              <XCircle size={22} /> NÃO é para você se...
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="text-destructive shrink-0 mt-0.5" size={16} />
                  <span className="text-foreground text-sm">{item}</span>
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
