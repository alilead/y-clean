/*
 * Y-Clean — Why Choose Us Section
 * Design: Light teal background, 4 feature cards with icons
 */
import { CalendarCheck, FileCheck, ThumbsUp, Heart } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: CalendarCheck,
    title: "Book online easily",
    description: "Book your service online, choose your extra services and receive instant booking confirmation.",
  },
  {
    icon: FileCheck,
    title: "0% administrative work",
    description: "We declare all our cleaners. This way you are free of any administrative burden.",
  },
  {
    icon: ThumbsUp,
    title: "Optimal satisfaction",
    description: "We collect feedback on our employees to ensure that they meet your highest standards.",
  },
  {
    icon: Heart,
    title: "A lasting relationship",
    description: "Our agents and clients develop a relationship of trust and proximity, going beyond a simple working relationship.",
  },
];

export default function WhyChooseUs() {
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
            #1 House Cleaning Service in Geneva
          </span>
          <h2 className="font-serif text-3xl md:text-4xl mt-3 mb-4">Why choose us?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine efficiency, flexibility and discretion to offer you a reliable and local cleaning service in Geneva.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
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
