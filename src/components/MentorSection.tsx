import { motion } from "framer-motion";
import juanPortrait from "@/assets/juan-portrait.jpeg";

const MentorSection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glow behind */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full blur-3xl opacity-10" style={{ background: "hsl(217, 91%, 60%)" }} />
            </div>
            <img
              src={juanPortrait}
              alt="Juan Lucas - Especialista em Google Ads"
              className="relative rounded-2xl border-glow w-full max-w-md mx-auto"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
              Quem será seu mentor
            </h2>
            <p className="text-gradient-gold text-2xl font-bold mb-6">Juan Lucas</p>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Especialista em Google Ads com mais de <strong className="text-foreground">4 anos de experiência</strong> focado 100% em Negócios Locais e Prestadores de Serviços.
              </p>
              <p>
                Diferente da teoria que confunde e faz perder tempo, eu vivo Google Ads 24h por dia, 7 dias por semana.
              </p>
              <p>
                O método foi validado ao longo de mais de 4 anos de prática intensa. Não é achismo — é um <strong className="text-foreground">método validado</strong> que aplico para todos os meus clientes.
              </p>
              <p>
                É o caminho mais direto e comprovado para usar o Google Ads de forma inteligente e consistente.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
