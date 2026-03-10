/*
 * Y-Clean — Trust Section with FAQ Accordion
 * Design: Text content + accordion FAQ
 */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Do you bring your own cleaning products?",
    a: "Yes, our cleaning teams bring all necessary cleaning products and equipment. We use eco-friendly, professional-grade products that are safe for your home and the environment. If you have specific product preferences, please let us know when booking.",
  },
  {
    q: "What cleaning services can I book online?",
    a: "You can book regular house cleaning, deep cleaning, end-of-tenancy cleaning, office cleaning, window cleaning, and Airbnb cleaning directly through our online platform. Simply select your service, choose your preferred date and time, and confirm your booking.",
  },
  {
    q: "Who employs your agents?",
    a: "All our cleaning agents are directly employed by Y-Clean. We handle all administrative aspects including social security declarations, insurance, and payroll. This means zero administrative burden for you.",
  },
  {
    q: "What are the different types of cleaning?",
    a: "We offer regular maintenance cleaning, deep cleaning for thorough sanitization, end-of-lease cleaning to meet landlord standards, office and commercial cleaning, window cleaning, and specialized Airbnb turnover cleaning.",
  },
  {
    q: "How much will a cleaning service in Geneva cost me?",
    a: "Our rates start from CHF 138 for a 3-hour session. The cost depends on the size of your property and the type of cleaning required. You can get an instant quote by using our online booking system or contacting us directly.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Your trusted cleaning services company
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our company, Y-Clean, specializes in{" "}
              <a href="#services" className="text-primary underline underline-offset-2">house cleaning and maintenance</a>{" "}
              as well as{" "}
              <a href="#commercial" className="text-primary underline underline-offset-2">commercial premises cleaning</a>.
              We work efficiently to save you time and money while providing a perfectly clean environment.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              We are your cleanliness partner for all your housekeeping needs, apartment or house cleaning,{" "}
              <a href="#services" className="text-primary underline underline-offset-2">end-of-lease cleaning</a>,
              and office maintenance in Geneva and throughout French-speaking Switzerland. We offer you our{" "}
              <strong>expertise</strong> in the cleaning and housekeeping sector while caring for the environment
              by using eco-friendly products for all our services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-xl mb-4">How does your service work?</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border/60">
                  <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:text-primary transition-colors">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
