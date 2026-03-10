/*
 * Y-Clean — Why Choose Us Section
 * Design: Light teal background, 4 feature cards with icons
 */
import { CalendarCheck, FileCheck, ThumbsUp, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    { icon: CalendarCheck, title: t("why.f1_title"), description: t("why.f1_desc") },
    { icon: FileCheck, title: t("why.f2_title"), description: t("why.f2_desc") },
    { icon: ThumbsUp, title: t("why.f3_title"), description: t("why.f3_desc") },
    { icon: Heart, title: t("why.f4_title"), description: t("why.f4_desc") },
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-teal-50/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">
            {t("why.subtitle")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-3 mb-4">{t("why.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("why.desc")}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border/40 group"
            >
              <div className="w-12 h-12 rounded-lg bg-teal-50 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <feature.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
