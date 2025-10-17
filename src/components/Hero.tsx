import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wedding.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in">
          Capturing Love Stories
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Elegant wedding photography that preserves your most precious moments forever
        </p>
        <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8"
          >
            Book Your Date
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
            className="border-white text-white hover:bg-white hover:text-foreground"
          >
            View Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
