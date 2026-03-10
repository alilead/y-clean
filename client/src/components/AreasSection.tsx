/*
 * Y-Clean — Areas We Serve Section
 * Design: Map area with commune list
 */
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const communes = [
  "Aire-la-Ville", "Anières", "Avully", "Avusy", "Bardonnex", "Bellevue",
  "Bernex", "Carouge", "Cartigny", "Céligny", "Chancy", "Chêne-Bougeries",
  "Chêne-Bourg", "Choulex", "Collex-Bossy", "Collonge-Bellerive", "Cologny",
  "Confignon", "Corsier", "Dardagny", "Genève", "Genthod", "Gy", "Hermance",
  "Jussy", "Laconnex", "Lancy", "Le Grand-Saconnex", "Meinier", "Meyrin",
  "Onex", "Perly-Certoux", "Plan-les-Ouates", "Pregny-Chambésy", "Presinge",
  "Russin", "Satigny", "Soral", "Thônex", "Troinex", "Vandoeuvres", "Vernier",
  "Versoix", "Veyrier",
];

export default function AreasSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-border/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">{t("areas.title")}</h2>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center">
                <MapPin size={20} className="text-primary" />
              </div>
              <span className="font-semibold">{t("areas.canton")}</span>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t("areas.desc")}
            </p>

            <Button asChild className="bg-primary hover:bg-teal-700 text-white rounded-full px-8 gap-2 mb-8">
              <a href="#booking">{t("areas.contact")}</a>
            </Button>

            {/* Commune Tags */}
            <div className="bg-muted/50 rounded-xl p-6 border border-border/40">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                {t("areas.available")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {communes.map((c) => (
                  <span
                    key={c}
                    className="text-xs text-muted-foreground bg-white px-2.5 py-1 rounded-full border border-border/50"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
