import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Fabiano Camoleze",
    role: "CEO do Toc e Art",
    text: "Apliquei as estratégias e, no período de 45 dias, a nossa campanha já tinha gerado mais de R$ 150.000,00 em vendas! O suporte do Juan é algo fora do comum.",
  },
  {
    name: "Denner Toledo",
    role: "CEO da AnanMED",
    text: "Após o método aplicado, meu resultado foi em questão de 2 ou 3 semanas. Fechei 3 contratos logo após 3 semanas aplicando o método.",
  },
  {
    name: "João Prompero",
    role: "Gestor de tráfego",
    text: "Teve um cliente que investia R$ 4.500/mês sem resultados e, no primeiro mês, faturou mais de R$ 23.000. Outro cliente, dobramos o número de leads.",
  },
  {
    name: "Jefferson Leao",
    role: "Gestor de tráfego",
    text: "A questão da IA me abriu muito a cabeça e me ajuda bastante na criação da campanha. Isso aumentou muito a minha produtividade.",
  },
  {
    name: "Jose Geovani",
    role: "Gestor de tráfego",
    text: "Seu curso de Google Ads é incrível e me trouxe muitos resultados! Completo, direto ao ponto e sem enrolação!",
  },
  {
    name: "Adinaildo Macedo",
    role: "Gestor de tráfego",
    text: "Aplico seu método com meus clientes de Google e consigo gerar resultado pra eles e pra mim, consigo reter eles e aumentar o LTV.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-dark-section relative overflow-hidden" id="depoimentos">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-5 pointer-events-none" style={{ background: "hsl(217, 91%, 60%)" }} />

      <div className="container px-4 max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Veja o que meus alunos estão dizendo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Se você ainda tem dúvidas, veja quem já aplicou a metodologia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass border-glow rounded-2xl p-6 hover:border-primary/25 transition-all duration-300"
            >
              <Quote className="mb-4 text-primary/40" size={22} />
              <p className="mb-6 leading-relaxed text-muted-foreground text-sm">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mt-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="text-gold fill-gold" size={12} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 text-center"
        >
          <a
            href="#oferta"
            className="inline-block bg-cta px-6 py-3 rounded-lg font-bold text-sm text-accent-foreground hover:scale-105 active:scale-95 transition-transform"
          >
            QUERO UM CAMINHO VALIDADO
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
