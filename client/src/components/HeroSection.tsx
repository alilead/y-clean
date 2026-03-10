/*
 * Y-Clean Hero Section
 * Design: Split layout — text left, hero image right
 * Features: Booking form with postcode, trust badges, Google rating
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/115019203/aRfgCVzyCCUpEuVcLtvUmN/hero-cleaner-R43tVxs2MR5uJKsEQsYurN.webp";

const trustBadges = [
  "Book online easily",
  "Dedicated house cleaner",
  "0% administrative work",
];

export default function HeroSection() {
  const [postcode, setPostcode] = useState("");

  const handleContinue = () => {
    // Placeholder action
    if (postcode) {
      alert(`Booking for postcode: ${postcode}`);
    }
  };

  return (
    <section id="booking" className="pt-24 md:pt-28 pb-12 md:pb-20 bg-gradient-to-br from-white via-white to-teal-50/40 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] leading-tight text-foreground mb-6">
              <em>Cleaning Company in Geneva:</em>{" "}
              <span className="text-foreground">Your cleanliness, our priority</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg">
              Y-Clean is a cleaning company in Geneva offering its{" "}
              <strong>services</strong> to{" "}
              <a href="#services" className="text-primary underline underline-offset-2 hover:text-teal-700">individuals</a>{" "}
              and{" "}
              <a href="#commercial" className="text-primary underline underline-offset-2 hover:text-teal-700">professionals</a>{" "}
              throughout the canton of Geneva.
            </p>

            {/* Booking Form */}
            <div className="bg-white rounded-xl shadow-lg border border-border/60 p-5 md:p-6 max-w-md mb-6">
              <h3 className="font-semibold text-lg mb-4">Book your cleaning</h3>
              <div className="flex gap-3">
                <input
                  type="number"
                  placeholder="Postcode"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className="flex-1 px-4 py-3 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
                <Button
                  onClick={handleContinue}
                  className="bg-primary hover:bg-teal-700 text-white rounded-lg px-6 gap-2"
                >
                  Continue <ArrowRight size={16} />
                </Button>
              </div>
              {/* Google Rating */}
              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1 text-sm font-medium text-muted-foreground">Google</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle size={18} className="text-primary shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src={HERO_IMG}
                alt="Professional cleaner holding fresh towels"
                className="w-full max-w-md lg:max-w-lg rounded-2xl object-cover"
              />
              {/* Decorative blob */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-72 h-72 bg-teal-100/60 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
