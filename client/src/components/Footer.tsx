/*
 * Y-Clean — Footer
 * Design: Dark footer with columns of links, contact info, social media
 */
import { Mail, Phone, Clock, CreditCard, Facebook, Instagram, Linkedin } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/115019203/aRfgCVzyCCUpEuVcLtvUmN/Clipboard_0_BFB96CCE_c3f5de0f.png";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white/80 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Contact & Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">Contact & Infos</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:info@y-clean.ch" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} className="text-primary shrink-0" />
                info@y-clean.ch
              </a>
              <div className="flex items-center gap-2">
                <CreditCard size={16} className="text-primary shrink-0" />
                American Express, MasterCard, Visa
              </div>
            </div>

            <h4 className="text-xs font-bold uppercase tracking-widest text-white mt-8 mb-3">Follow us on social media</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Open Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">Open Hours</h4>
            <div className="flex items-start gap-2 text-sm">
              <Clock size={16} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p>Monday – Friday:</p>
                <p>9:00 – 16:00</p>
              </div>
            </div>

            <h4 className="text-xs font-bold uppercase tracking-widest text-white mt-8 mb-3">Resources</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Checklists</a>
              <a href="#" className="hover:text-primary transition-colors">Terms and conditions</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy policy</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#services" className="hover:text-primary transition-colors">Our services</a>
              <a href="#commercial" className="hover:text-primary transition-colors">Office cleaning</a>
              <a href="#booking" className="hover:text-primary transition-colors">Online quote for office cleaning</a>
              <a href="#" className="hover:text-primary transition-colors">Jobs</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact us</a>
              <a href="#" className="hover:text-primary transition-colors">Blog</a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-5">Legal</h4>
            <div className="flex flex-col gap-2 text-sm">
              <a href="#" className="hover:text-primary transition-colors">Legal notice</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy policy</a>
            </div>

            <h4 className="text-xs font-bold uppercase tracking-widest text-white mt-8 mb-3">Available in</h4>
            <p className="text-sm">Geneva and surroundings</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Y-Clean" className="h-10 w-auto brightness-0 invert" />
          </div>
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} All rights reserved by Y-Clean
          </p>
        </div>
      </div>
    </footer>
  );
}
