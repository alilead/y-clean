/*
 * Y-Clean — Services Section
 * Design: 6 service cards with images on teal background
 */
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const HOUSE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/115019203/aRfgCVzyCCUpEuVcLtvUmN/house-cleaning-JVzgr5KbPNHBhUARkqPQKS.webp";
const OFFICE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/115019203/aRfgCVzyCCUpEuVcLtvUmN/office-cleaning-Y5hUBCAAZKD4KMwoXmHXCF.webp";
const WINDOW_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/115019203/aRfgCVzyCCUpEuVcLtvUmN/window-cleaning-RY3Q6T79UwXRMmYdxzGJnz.webp";

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    { titleKey: "services.s1_title", descKey: "services.s1_desc", image: HOUSE_IMG },
    { titleKey: "services.s2_title", descKey: "services.s2_desc", image: OFFICE_IMG },
    { titleKey: "services.s3_title", descKey: "services.s3_desc", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop" },
    { titleKey: "services.s4_title", descKey: "services.s4_desc", image: WINDOW_IMG },
    { titleKey: "services.s5_title", descKey: "services.s5_desc", image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop" },
    { titleKey: "services.s6_title", descKey: "services.s6_desc", image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop" },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-teal-50/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-4">{t("services.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t("services.desc")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border/30"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={t(service.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{t(service.titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{t(service.descKey)}</p>
                <a
                  href="#booking"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-teal-700 transition-colors"
                >
                  {t("services.learn_more")} <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
