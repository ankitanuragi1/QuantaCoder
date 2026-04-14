import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vjtn8ok",     // replace
        "template_ni2j8c7",    // replace
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "Ta_i4bWigl6QvdccY"      // replace
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error);
          alert("Failed to send ❌");
        }
      );
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Contact <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground mt-2">
            Let's work together on your next project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left Info */}
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "ankitanuragi10@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91-6267339258" },
              { icon: MapPin, label: "Location", value: "Bhopal, mp, india" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              required
            />

            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              required
            />

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;