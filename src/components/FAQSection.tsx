import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O Método CEO serve para qualquer nicho?",
    a: "Sim! O método foi desenvolvido especialmente para Negócios Locais e Prestadores de Serviços de qualquer segmento: advogados, dentistas, clínicas, lojas, imobiliárias, etc.",
  },
  {
    q: "Preciso de experiência com Google Ads?",
    a: "Não. O método foi criado para levar você do zero ao avançado. Mesmo que nunca tenha criado uma campanha, você vai aprender passo a passo.",
  },
  {
    q: "Quanto tempo terei acesso ao conteúdo?",
    a: "Você terá acesso vitalício a todo o conteúdo, incluindo atualizações futuras.",
  },
  {
    q: "E se eu não gostar do curso?",
    a: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não gostar, basta enviar um e-mail e devolvemos 100% do investimento.",
  },
  {
    q: "O curso é atualizado?",
    a: "Sim! O Google Ads muda constantemente e o conteúdo é atualizado para refletir as melhores práticas atuais.",
  },
  {
    q: "Terei suporte?",
    a: "Sim! Você terá suporte direto comigo, incluindo análise personalizada de campanhas em chamada ao vivo.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 md:py-28 bg-section-alt relative" id="faq">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass border-glow rounded-xl px-6 data-[state=open]:glow-blue transition-all duration-300"
              >
                <AccordionTrigger className="text-foreground font-semibold text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
