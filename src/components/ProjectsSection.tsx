import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Tailwind CSS showcasing projects and skills.",
    tags: ["React", "Tailwind", "TypeScript"],
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with cart, checkout, and payment integration.",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects with drag-and-drop functionality.",
    tags: ["React", "Firebase", "DnD"],
  },
  {
    title: "Chat Application",
    description: "Real-time chat application with rooms, direct messages, and file sharing.",
    tags: ["React", "Socket.io", "Express"],
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current conditions and forecasts using API data.",
    tags: ["React", "API", "Charts"],
  },
  {
    title: "Blog Platform",
    description: "A full-stack blogging platform with markdown support and user authentication.",
    tags: ["React", "Node.js", "MongoDB"],
  },
];

const showProjects = false;

const ProjectsSection = () => {
  return (
    <>
    {showProjects && (
      <section id="projects" className="py-20 relative">
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            Some of the projects I've built
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card-cosmic border-glow rounded-xl overflow-hidden hover:border-glow-strong transition-all duration-300 group"
            >
              <div className="h-40 bg-muted/30 flex items-center justify-center">
                <span className="text-4xl text-primary/40 font-bold">&lt;/&gt;</span>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="font-bold text-lg text-foreground">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <button className="flex items-center gap-1 text-sm text-primary hover:underline">
                    <ExternalLink size={14} /> Live Demo
                  </button>
                  <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
                    <Github size={14} /> Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
       </section>
    )}
  </>
  );
};

export default ProjectsSection;
