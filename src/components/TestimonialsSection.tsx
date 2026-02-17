import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Fabiano Camoleze",
    role: "CEO do Toc e Art",
    text: "Estava cansado de gastar dinheiro com agências e freelancers que não traziam resultados. Decidi que eu mesmo precisava aprender Google Ads e, felizmente, encontrei o curso do Juan. Foi um divisor de águas! Apliquei as estratégias e, no período de 45 dias, a nossa campanha já tinha gerado mais de R$ 150.000,00 em vendas!",
  },
  {
    name: "Denner Toledo",
    role: "CEO da AnanMED",
    text: "Após o método aplicado, meu resultado foi em questão de 2 ou 3 semanas, estava chegando dúvidas no meu escritório que não tinha nada haver com meu público. Fechei 3 contratos logo após 3 semanas aplicando o método.",
  },
  {
    name: "João Prompero",
    role: "Gestor de tráfego",
    text: "Teve um cliente que investia R$ 4.500 por mês sem resultados e, no primeiro mês, ele teve um faturamento de mais de R$ 23.000. Outro cliente, no segundo mês pra frente, a gente dobrou o número de leads deles.",
  },
  {
    name: "Jefferson Leao",
    role: "Gestor de tráfego",
    text: "O curso me ajudou muito. A questão da IA me abriu muito a cabeça e me ajuda bastante na criação da campanha. Isso aumentou muito a minha produtividade.",
  },
  {
    name: "Jose Geovani",
    role: "Gestor de tráfego",
    text: "Juan, o seu curso de Google Ads é incrível e me trouxe muitos resultados! Recomendo a todos que desejam se tornar gestores de tráfego: procurem o seu curso. É completo, direto ao ponto e sem enrolação!",
  },
  {
    name: "Adinaildo Macedo",
    role: "Gestor de tráfego",
    text: "Curto muito seu estilo de pensar de maneira lógica e estratégica. Aplico seu método com meus clientes de Google e consigo gerar resultado pra eles e pra mim, consigo reter eles e aumentar o LTV, ter indicações.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-dark-section" id="depoimentos">
      <div className="container px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: "white" }}>
            Veja o que meus alunos estão dizendo
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "hsl(220 14% 60%)" }}>
            Se você ainda tem dúvidas se o Método CEO realmente funciona, veja quem já aplicou a metodologia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl p-6 border"
              style={{ 
                background: "hsl(220 20% 12%)", 
                borderColor: "hsl(220 20% 18%)" 
              }}
            >
              <Quote className="mb-4 text-gold" size={24} />
              <p className="mb-6 leading-relaxed" style={{ color: "hsl(220 14% 75%)" }}>
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "white" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "hsl(220 14% 50%)" }}>{t.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 mt-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="text-gold fill-gold" size={14} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
