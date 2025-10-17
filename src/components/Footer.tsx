import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-semibold mb-4">
              Eternal Moments
            </h3>
            <p className="text-background/80 leading-relaxed">
              Capturing love stories with elegance and artistry since 2014.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#about" className="hover:text-background transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-background transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-background transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@eternalmoments.com"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Eternal Moments Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
