import photographerImage from "@/assets/photographer.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img
              src={photographerImage}
              alt="Wedding Photographer"
              className="rounded-2xl shadow-elegant w-full h-auto object-cover"
            />
          </div>
          
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gradient">
              Hello, I'm Sarah
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              With over 10 years of experience capturing love stories, I've had the privilege of 
              documenting hundreds of weddings across the country. My passion lies in creating 
              timeless, elegant images that tell your unique story.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              I believe every couple deserves to relive their special day through beautiful, 
              authentic photographs. My approach is unobtrusive yet personal, allowing me to 
              capture genuine emotions and candid moments that you'll cherish forever.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Let's create magic together and preserve your once-in-a-lifetime moments with 
              artistry and grace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
