import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-display font-semibold text-gradient"
          >
            Eternal Moments
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              Testimonials
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left px-4 py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left px-4 py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left px-4 py-2"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-foreground/80 hover:text-foreground transition-colors text-left px-4 py-2"
              >
                Testimonials
              </button>
              <Button onClick={() => scrollToSection("contact")} className="mx-4 bg-primary hover:bg-primary/90">
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
