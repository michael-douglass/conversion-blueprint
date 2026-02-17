import { motion } from "framer-motion";
import juanPortrait from "@/assets/juan-portrait.jpeg";

const MentorSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={juanPortrait}
              alt="Juan Lucas - Especialista em Google Ads"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
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
                Sou especialista em Google Ads com mais de <strong className="text-foreground">4 anos de experiência</strong> focado 100% em Negócios Locais e Prestadores de Serviços.
              </p>
              <p>
                Diferente da teoria que confunde e faz perder tempo, eu vivo Google Ads 24h por dia, 7 dias por semana.
              </p>
              <p>
                O método que vou te ensinar foi validado ao longo de mais de 4 anos de prática intensa. Não é achismo ou cópia de blogs — é um <strong className="text-foreground">método validado</strong> que aplico para todos os meus clientes.
              </p>
              <p>
                Foi desenvolvido ouvindo e atendendo especificamente Negócios Locais e Prestadores de Serviços. É o caminho mais direto e comprovado para você usar o Google Ads de forma inteligente e consistente.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
