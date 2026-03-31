/*
 * Y-Clean Home Page
 * Design: Swiss Precision Clean — Neo-Bauhaus meets Swiss International Style
 * Color: Teal primary (#0d9488 range), dark charcoal text, white/light backgrounds
 * Typography: DM Serif Display (headings) + DM Sans (body)
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingSection from "@/components/PricingSection";
import ProductsSection from "@/components/ProductsSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import CommercialSection from "@/components/CommercialSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import AreasSection from "@/components/AreasSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <PricingSection />
        <ProductsSection />
        <TrustSection />
        <ServicesSection />
        <CTASection />
        <CommercialSection />
        <TestimonialsSection />
        <BlogSection />
        <AreasSection />
      </main>
      <Footer />
    </div>
  );
}
