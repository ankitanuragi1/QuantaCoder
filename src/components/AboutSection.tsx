import aboutAvatar from "@/assets/about-avatar.png";
import { Code, Monitor, Server } from "lucide-react";

const categories = [
  {
    title: "Web Development",
    icon: Code,
    items: ["HTML & CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    icon: Monitor,
    items: ["React", "Responsive Design", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "REST APIs", "Databases"],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card-cosmic border-glow rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="shrink-0">
            <img
              src={aboutAvatar}
              alt="About me"
              loading="lazy"
              width={512}
              height={512}
              className="w-40 h-40 sm:w-52 sm:h-52 rounded-xl object-cover border border-border"
            />
          </div>
          <div className="space-y-5">
            <h2 className="text-3xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              I'm a creative and detail-oriented developer interested in frontend,
              backend, and full-stack development. I love building responsive,
              accessible, and performant web applications with clean code and
              modern technologies.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <div key={cat.title} className="space-y-2">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    <cat.icon size={16} className="text-primary" />
                    {cat.title}
                  </div>
                  {cat.items.map((item) => (
                    <p key={item} className="text-muted-foreground text-sm pl-6">
                      {item}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
