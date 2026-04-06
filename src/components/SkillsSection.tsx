import { Code, Hash, FileCode, Atom, Palette, Database, Globe, GitBranch } from "lucide-react";

const skills = [
  { name: "HTML", icon: Code, items: ["Semantic HTML5", "Accessibility", "SEO Optimized"] },
  { name: "CSS", icon: Hash, items: ["Responsive Design", "Flexbox & Grid", "Animations"] },
  { name: "JavaScript", icon: FileCode, items: ["Modern ES6+", "DOM Manipulation", "Async/Await"] },
  { name: "React", icon: Atom, items: ["React Hooks", "State Management", "Component Design"] },
  { name: "Tailwind", icon: Palette, items: ["Utility-first CSS", "Custom Themes", "Responsive"] },
  { name: "Node.js", icon: Database, items: ["Express.js", "REST APIs", "Authentication"] },
  { name: "Git", icon: GitBranch, items: ["Version Control", "Branching", "Collaboration"] },
  { name: "Web APIs", icon: Globe, items: ["Fetch API", "WebSockets", "LocalStorage"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            Here are some of the technologies I work with
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card-cosmic border-glow rounded-xl p-5 hover:border-glow-strong transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <skill.icon
                  size={36}
                  className="text-primary group-hover:scale-110 transition-transform"
                />
                <h3 className="font-bold text-foreground">{skill.name}</h3>
                <ul className="space-y-1">
                  {skill.items.map((item) => (
                    <li key={item} className="text-muted-foreground text-xs">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
