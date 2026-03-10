/*
 * Y-Clean — Pricing Section
 * Design: Clean table with pricing tiers
 */
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const pricingData = [
  { hours: "3H", kitchen: true, bedroom: "–", bathrooms: "1", price: "CHF 138" },
  { hours: "4H", kitchen: true, bedroom: "1", bathrooms: "1", price: "CHF 184" },
  { hours: "5H", kitchen: true, bedroom: "2", bathrooms: "2", price: "CHF 230" },
  { hours: "6H+", kitchen: true, bedroom: "3+", bathrooms: "3+", price: "CHF 276+" },
];

export default function PricingSection() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-4">{t("pricing.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("pricing.desc")}{" "}
            <strong>{t("pricing.desc_bold")}</strong>!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-teal-50/60 rounded-2xl p-6 md:p-8 border border-teal-100">
            <h3 className="font-semibold text-lg text-center mb-2">{t("pricing.how_many")}</h3>
            <p className="text-sm text-muted-foreground text-center mb-6">{t("pricing.estimate")}</p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-teal-200">
                    <th className="py-3 px-4 text-left font-medium text-muted-foreground"></th>
                    {pricingData.map((col) => (
                      <th key={col.hours} className="py-3 px-4 text-center font-semibold text-foreground">
                        {col.hours}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-teal-100/60">
                    <td className="py-3 px-4 font-medium">{t("pricing.kitchen")}</td>
                    {pricingData.map((col) => (
                      <td key={col.hours} className="py-3 px-4 text-center">
                        {col.kitchen && <Check size={18} className="text-primary mx-auto" />}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-teal-100/60">
                    <td className="py-3 px-4 font-medium">{t("pricing.bedroom")}</td>
                    {pricingData.map((col) => (
                      <td key={col.hours} className="py-3 px-4 text-center text-muted-foreground">
                        {col.bedroom}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-teal-100/60">
                    <td className="py-3 px-4 font-medium">{t("pricing.bathrooms")}</td>
                    {pricingData.map((col) => (
                      <td key={col.hours} className="py-3 px-4 text-center text-muted-foreground">
                        {col.bathrooms}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-teal-100/40">
                    <td className="py-3 px-4 font-semibold text-xs uppercase tracking-wider">{t("pricing.rate")}</td>
                    {pricingData.map((col) => (
                      <td key={col.hours} className="py-3 px-4 text-center font-bold text-primary">
                        {col.price}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild className="bg-primary hover:bg-teal-700 text-white rounded-full px-8 py-3 gap-2">
              <a href="#booking">{t("nav.book")} <ArrowRight size={16} /></a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
