/*
 * Y-Clean — Trust Section with FAQ Accordion
 * Design: Text content + accordion FAQ
 */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TrustSection() {
  const { t } = useLanguage();

  const faqs = [
    { q: t("trust.faq1_q"), a: t("trust.faq1_a") },
    { q: t("trust.faq2_q"), a: t("trust.faq2_a") },
    { q: t("trust.faq3_q"), a: t("trust.faq3_a") },
    { q: t("trust.faq4_q"), a: t("trust.faq4_a") },
    { q: t("trust.faq5_q"), a: t("trust.faq5_a") },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">{t("trust.title")}</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {t("trust.p1")}{" "}
              <a href="#services" className="text-primary underline underline-offset-2">{t("trust.p1_link1")}</a>{" "}
              {t("trust.p1_mid")}{" "}
              <a href="#commercial" className="text-primary underline underline-offset-2">{t("trust.p1_link2")}</a>
              {t("trust.p1_end")}
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              {t("trust.p2")}{" "}
              <a href="#services" className="text-primary underline underline-offset-2">{t("trust.p2_link")}</a>
              {t("trust.p2_end")}{" "}
              <strong>{t("trust.p2_bold")}</strong>{" "}
              {t("trust.p2_final")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-xl mb-4">{t("trust.faq_title")}</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border/60">
                  <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
