import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emily & Michael",
    quote: "Sarah captured our wedding day perfectly! Every photo tells a story and brings back beautiful memories. We couldn't be happier with the results.",
    rating: 5,
  },
  {
    name: "Jessica & David",
    quote: "Professional, creative, and so easy to work with. Sarah made us feel comfortable the entire day and the photos are absolutely stunning.",
    rating: 5,
  },
  {
    name: "Lauren & James",
    quote: "We are blown away by the quality and artistry of our wedding photos. Sarah has an incredible eye for detail and emotion. Highly recommend!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
            What Couples Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from happy couples who trusted me with their special day
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover-lift border-border/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <p className="font-display font-semibold text-foreground">
                  {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
