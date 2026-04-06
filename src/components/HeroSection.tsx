import heroCharacter from "@/assets/hero-character.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="starfield min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm a
              <br />
              <span className="text-gradient glow-text">Creative Developer</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-md">
              I build modern, responsive & powerful websites
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={heroCharacter}
              alt="Developer character"
              width={1024}
              height={1024}
              className="w-full max-w-md animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
