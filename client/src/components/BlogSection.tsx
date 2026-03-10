/*
 * Y-Clean — Blog Section
 * Design: 4 blog post cards with images
 */
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const images = [
  "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&h=350&fit=crop",
  "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500&h=350&fit=crop",
];

export default function BlogSection() {
  const { t } = useLanguage();

  const posts = [
    { titleKey: "blog.p1", image: images[0] },
    { titleKey: "blog.p2", image: images[1] },
    { titleKey: "blog.p3", image: images[2] },
    { titleKey: "blog.p4", image: images[3] },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-4">{t("blog.title")}</h2>
          <p className="text-muted-foreground max-w-2xl">{t("blog.desc")}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group block"
              onClick={(e) => e.preventDefault()}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3">
                <img
                  src={post.image}
                  alt={t(post.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors uppercase tracking-wide">
                {t(post.titleKey)}
              </h3>
              <span className="inline-flex items-center gap-1 text-xs text-primary mt-2 font-medium">
                {t("blog.read_more")} <ArrowRight size={12} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
