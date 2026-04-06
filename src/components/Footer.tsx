import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm">
        © 2026 Quanta Coder. All rights reserved.
      </p>
      <div className="flex gap-4">
        {[Github, Linkedin, Twitter].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
