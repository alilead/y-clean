/*
 * Y-Clean — CTA Section
 * Design: Dark background with booking CTA and phone mockup
 */
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const CTA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/115019203/aRfgCVzyCCUpEuVcLtvUmN/cta-booking-iZJWZ3tPDRyGgM5Lv8tLZ5.webp";

export default function CTASection() {
  const { t } = useLanguage();

  const features = [t("cta.f1"), t("cta.f2"), t("cta.f3")];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 text-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-teal-400 text-sm font-semibold tracking-widest uppercase">
              {t("cta.tag")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl mt-3 mb-4 text-white">
              {t("cta.title")}
            </h2>
            <p className="text-white/70 mb-6">{t("cta.desc")}</p>

            <Button asChild size="lg" className="bg-primary hover:bg-teal-600 text-white rounded-full px-8 gap-2 mb-6">
              <a href="#booking">{t("nav.book")} <ArrowRight size={16} /></a>
            </Button>

            <div className="flex flex-col gap-2">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-white/80">
                  <CheckCircle size={16} className="text-teal-400 shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* Google Rating */}
            <div className="flex items-center gap-1 mt-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-1 text-sm font-medium text-white/60">Google</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center"
          >
            <img
              src={CTA_IMG}
              alt="Y-Clean booking app on phone"
              className="w-full max-w-lg rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
