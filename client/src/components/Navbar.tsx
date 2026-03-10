/*
 * Y-Clean Navbar
 * Design: Swiss Precision — clean horizontal nav with teal accents
 * Logo: Y-Clean teal/dark teal with window + squeegee
 */
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/115019203/aRfgCVzyCCUpEuVcLtvUmN/Clipboard_0_BFB96CCE_c3f5de0f.png";

const navLinks = [
  { label: "Households", href: "#services" },
  { label: "Companies", href: "#commercial" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#why-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img
            src={LOGO_URL}
            alt="Y-Clean Logo"
            className="h-12 md:h-14 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            Log in
          </a>
          <Button asChild className="bg-primary hover:bg-teal-700 text-white rounded-full px-6">
            <a href="#booking">Book online</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border animate-in slide-in-from-top-2 duration-200">
          <nav className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground/70 hover:text-primary py-2 tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-border" />
            <a href="#contact" className="text-sm font-medium text-foreground/70 py-2">Log in</a>
            <Button asChild className="bg-primary hover:bg-teal-700 text-white rounded-full w-full">
              <a href="#booking">Book online</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
