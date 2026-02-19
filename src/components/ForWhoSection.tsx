import { motion } from "framer-motion";
import { CheckCircle, XCircle, TrendingUp, DollarSign, BarChart3 } from "lucide-react";

const resultCards = [
  {
    icon: TrendingUp,
    title: "Faturamento aumentado em 100%",
    sub: "Gráfico subindo",
  },
  {
    icon: DollarSign,
    title: "Venda mensal de 100K a mais",
    sub: "Resultados reais",
  },
  {
    icon: BarChart3,
    title: "E mais resultados",
    sub: "Subindo pelo método",
  },
];

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
    <section className="py-20 md:py-28 relative overflow-hidden bg-method-gradient">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* Dois cards sobem juntos; o primeiro sai no topo, 2s depois o outro; próximo ciclo vem de canto diferente */}
      <div className="absolute left-0 right-0 top-0 bottom-0 overflow-hidden pointer-events-none z-0">
        <div className="results-scroll-one-by-one h-full flex flex-col">
          {[
            [0, 1],
            [2, 0],
            [1, 2],
            [0, 1],
            [2, 0],
            [1, 2],
          ].map(([idxFirst, idxSecond], i) => {
            const rFirst = resultCards[idxFirst];
            const rSecond = resultCards[idxSecond];
            const firstOnRight = i % 2 === 0;
            return (
              <div key={i} className="results-scroll-slot results-scroll-slot-duo shrink-0 flex flex-col">
                <div className="flex-1 min-h-0" aria-hidden />
                <div className={`flex shrink-0 px-4 md:px-6 opacity-90 ${firstOnRight ? "justify-end" : "justify-start"}`}>
                  <div className="glass border-glow rounded-xl p-4 w-[200px] md:w-[240px]">
                    <rFirst.icon className="text-primary mb-2" size={20} />
                    <p className="text-foreground text-sm font-semibold leading-tight">{rFirst.title}</p>
                    <p className="text-muted-foreground text-xs mt-1">{rFirst.sub}</p>
                  </div>
                </div>
                <div className="results-scroll-gap-2s shrink-0" aria-hidden />
                <div className={`flex shrink-0 px-4 md:px-6 opacity-90 ${firstOnRight ? "justify-start" : "justify-end"}`}>
                  <div className="glass border-glow rounded-xl p-4 w-[200px] md:w-[240px]">
                    <rSecond.icon className="text-primary mb-2" size={20} />
                    <p className="text-foreground text-sm font-semibold leading-tight">{rSecond.title}</p>
                    <p className="text-muted-foreground text-xs mt-1">{rSecond.sub}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container px-4 max-w-5xl mx-auto relative z-10">
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
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
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
