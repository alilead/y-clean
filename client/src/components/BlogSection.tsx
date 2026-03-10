/*
 * Y-Clean — Blog Section
 * Design: 4 blog post cards with images
 */
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Cleaning Services in Geneva: How to Make the Right Choice?",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&h=350&fit=crop",
  },
  {
    title: "How to Choose the Right B2B Cleaning Company in Geneva?",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=500&h=350&fit=crop",
  },
  {
    title: "Why Use a Cleaning Company?",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=500&h=350&fit=crop",
  },
  {
    title: "How to Clean Marble",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=500&h=350&fit=crop",
  },
];

export default function BlogSection() {
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
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Discover Our Cleaning Blog</h2>
          <p className="text-muted-foreground max-w-2xl">
            Tips, advice and best practices: explore our blog to better maintain your spaces on a daily basis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
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
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors uppercase tracking-wide">
                {post.title}
              </h3>
              <span className="inline-flex items-center gap-1 text-xs text-primary mt-2 font-medium">
                Read more <ArrowRight size={12} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
