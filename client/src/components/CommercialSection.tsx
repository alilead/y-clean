/*
 * Y-Clean — Commercial Cleaning Services Section
 * Design: Text with checklist of services
 */
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CommercialSection() {
  const { t } = useLanguage();

  const servicesLeft = [t("commercial.s1"), t("commercial.s2"), t("commercial.s3")];
  const servicesRight = [t("commercial.s4"), t("commercial.s5"), t("commercial.s6")];

  return (
    <section id="commercial" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">{t("commercial.title")}</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">{t("commercial.p1")}</p>
            <p className="text-muted-foreground mb-8">{t("commercial.p2")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8"
          >
            <div className="flex flex-col gap-3">
              {servicesLeft.map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <Check size={18} className="text-primary shrink-0" />
                  <span className="text-sm font-medium">{s}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {servicesRight.map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <Check size={18} className="text-primary shrink-0" />
                  <span className="text-sm font-medium">{s}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <Button asChild className="bg-primary hover:bg-teal-700 text-white rounded-full px-8 gap-2">
            <a href="#booking">{t("commercial.cta")} <ArrowRight size={16} /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}
