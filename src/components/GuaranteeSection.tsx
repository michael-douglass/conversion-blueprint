import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import juanPortrait from "@/assets/juan-portrait.jpeg";

const GuaranteeSection = () => {
  return (
    <section className="py-20 md:py-28 bg-dark-section relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="container px-4 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <ShieldCheck className="text-accent" size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Risco Zero
              </h2>
            </div>
            <h3 className="text-xl font-bold text-gold mb-4">
              Seu Risco é Zero. A Responsabilidade é Toda Minha.
            </h3>
            <p className="leading-relaxed text-muted-foreground mb-6">
              Eu confio tanto no Método CEO que te ofereço uma <strong className="text-foreground">Garantia Incondicional de 7 dias</strong>.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Acesse todo o conteúdo, veja os módulos, utilize os prompts e se por qualquer motivo você achar que não é para você, basta enviar um único e-mail e eu devolvo 100% do seu investimento.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full blur-3xl opacity-10" style={{ background: "hsl(43, 96%, 56%)" }} />
            </div>
            <img
              src={juanPortrait}
              alt="Juan Lucas - Especialista em Google Ads"
              className="relative rounded-2xl border-glow max-w-sm w-full"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
