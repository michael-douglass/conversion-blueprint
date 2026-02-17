import { motion } from "framer-motion";
import { BookOpen, MessageSquare, Sparkles, FileText, BarChart3, Video } from "lucide-react";

const modules = [
  { icon: BookOpen, title: "Método CEO Completo", desc: "Todos os módulos: Cliente, Estratégia e Otimização com passo a passo prático." },
  { icon: Sparkles, title: "Prompts de IA Exclusivos", desc: "Agentes de ChatGPT para criação de persona, campanhas e análise de métricas." },
  { icon: Video, title: "Aulas Práticas em Vídeo", desc: "Conteúdo direto ao ponto, sem enrolação. Foco no que funciona HOJE." },
  { icon: MessageSquare, title: "Suporte e Análise", desc: "Suporte direto com Juan Lucas, incluindo chamadas ao vivo para analisar suas campanhas." },
  { icon: FileText, title: "Materiais e Templates", desc: "Checklists, guias completos e templates prontos para acelerar resultados." },
  { icon: BarChart3, title: "Métricas que Importam", desc: "Aprenda a ler as métricas certas e tomar decisões baseadas em dados reais." },
];

const ModulesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            O que você vai encontrar dentro do <span className="text-gradient-gold">Método CEO</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass border-glow rounded-2xl p-6 hover:border-primary/25 hover:glow-blue transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <mod.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{mod.title}</h3>
              <p className="text-muted-foreground text-sm">{mod.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#oferta"
            className="inline-block bg-cta px-8 py-4 rounded-xl text-lg font-bold glow-green text-accent-foreground hover:scale-105 active:scale-95 transition-transform"
          >
            QUERO ENTRAR NO MÉTODO CEO
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
