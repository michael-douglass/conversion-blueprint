import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import juanAwards from "@/assets/juan-awards.jpeg";

const GuaranteeSection = () => {
  return (
    <section className="py-20 md:py-28 bg-dark-section">
      <div className="container px-4 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-accent" size={40} />
              <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: "white" }}>
                Risco Zero
              </h2>
            </div>
            <h3 className="text-xl font-bold mb-4" style={{ color: "hsl(43 96% 56%)" }}>
              Seu Risco é Zero. A Responsabilidade é Toda Minha.
            </h3>
            <p className="leading-relaxed mb-6" style={{ color: "hsl(220 14% 70%)" }}>
              Eu confio tanto no Método CEO que te ofereço uma <strong style={{ color: "white" }}>Garantia Incondicional de 7 dias</strong>.
            </p>
            <p className="leading-relaxed" style={{ color: "hsl(220 14% 70%)" }}>
              Acesse todo o conteúdo, veja os módulos, utilize os prompts e se por qualquer motivo você achar que não é para você, basta enviar um único e-mail e eu devolvo 100% do seu investimento. Sem perguntas, sem ressentimentos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={juanAwards}
              alt="Juan Lucas - Resultados comprovados"
              className="rounded-2xl shadow-2xl max-w-sm w-full"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
