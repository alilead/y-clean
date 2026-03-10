/*
 * Y-Clean — Services Section
 * Design: 6 service cards with images on teal background
 */
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HOUSE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/115019203/aRfgCVzyCCUpEuVcLtvUmN/house-cleaning-JVzgr5KbPNHBhUARkqPQKS.webp";
const OFFICE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/115019203/aRfgCVzyCCUpEuVcLtvUmN/office-cleaning-Y5hUBCAAZKD4KMwoXmHXCF.webp";
const WINDOW_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/115019203/aRfgCVzyCCUpEuVcLtvUmN/window-cleaning-RY3Q6T79UwXRMmYdxzGJnz.webp";

const services = [
  {
    title: "House cleaning",
    description: "Y-Clean offers a high quality cleaning service and makes your apartment or house shine throughout the canton of Geneva.",
    image: HOUSE_IMG,
  },
  {
    title: "Office cleaning",
    description: "We clean your offices and premises. For an impeccable cleanliness and a healthy work environment for your employees. 100% flexible offers.",
    image: OFFICE_IMG,
  },
  {
    title: "End of tenancy cleaning",
    description: "Y-Clean is the specialist in end-of-lease cleaning in Geneva. Our company also carries out the cleaning before moving in.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop",
  },
  {
    title: "Window cleaning",
    description: "Our professionals in Geneva ensure the cleaning of your glass surfaces. For companies and individuals. Enjoy a perfect service.",
    image: WINDOW_IMG,
  },
  {
    title: "Job check",
    description: "Free yourself from household and administrative chores! We declare your domestic employees, so that you are in compliance with the law.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
  {
    title: "Airbnb cleaning",
    description: "Our Airbnb concierge service provides cleaning and concierge services for your rental apartments. For the greatest satisfaction of your guests.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
  },
];

export default function ServicesSection() {
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
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Our Cleaning Services in Geneva</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From regular housekeeping to end-of-lease cleaning, discover our services tailored to all your needs in Geneva.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border/30"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {service.description}
                </p>
                <a
                  href="#booking"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-teal-700 transition-colors"
                >
                  Learn more <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
