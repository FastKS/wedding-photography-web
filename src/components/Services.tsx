import { Camera, Heart, Image, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Camera,
    title: "Full Day Coverage",
    description: "Complete documentation of your wedding day from getting ready to the last dance, ensuring no moment is missed.",
  },
  {
    icon: Heart,
    title: "Engagement Sessions",
    description: "Pre-wedding photoshoots to capture your love story and get comfortable in front of the camera.",
  },
  {
    icon: Image,
    title: "Custom Albums",
    description: "Beautifully crafted, heirloom-quality albums featuring your favorite moments in stunning print.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Receive your professionally edited photos within 4-6 weeks, with sneak peeks within 48 hours.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
            Services & Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored packages to perfectly capture your special day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Custom packages available to suit your needs and budget
          </p>
          <a 
            href="#contact" 
            className="text-primary hover:text-primary/80 font-semibold underline underline-offset-4 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in touch for pricing details →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
