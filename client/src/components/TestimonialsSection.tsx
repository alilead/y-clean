/*
 * Y-Clean — Testimonials Section
 * Design: Customer review cards with star ratings
 */
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Marie L.",
    text: "Excellent service! The team was punctual, thorough, and very professional. My apartment has never been this clean. Highly recommend Y-Clean!",
    rating: 5,
  },
  {
    name: "Pierre D.",
    text: "We've been using Y-Clean for our office cleaning for 6 months now. Consistent quality, reliable team, and great communication. Very satisfied.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    text: "The end-of-tenancy cleaning was impeccable. Got my full deposit back without any issues. Thank you Y-Clean for the outstanding work!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-teal-50/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-4">What our customers say about us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our clients appreciate our professionalism, responsiveness and the consistent quality of our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-border/40"
            >
              <Quote size={24} className="text-primary/30 mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">{t.name}</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
