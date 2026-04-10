import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import theatreMasks from "@/assets/theatre-masks.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 3.5 }}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group">
          <img src={theatreMasks} alt="Logo" className="w-8 h-8 group-hover:scale-110 transition-transform" />
          <span className="font-heading text-xl font-bold text-foreground">Abhivyakti</span>
        </button>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Home", id: "home" },
            { label: "Events", id: "ilhaam" },
            { label: "About Us", id: "about" },
            { label: "Contact", id: "footer" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
