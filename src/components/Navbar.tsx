import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import theatreMasks from "@/assets/theatre-masks.png";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Events", id: "ilhaam" },
  { label: "Gallery", id: "gallery" },
  { label: "About", id: "about" },
  { label: "Contact", id: "footer" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(location.pathname.includes("event-gallery") ? "gallery" : "ilhaam");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.08, 0.2, 0.4, 0.6],
      },
    );

    navItems.forEach((item) => {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-border/50 bg-background/55 backdrop-blur-md" : "bg-background/20 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 3.5 }}
    >
      <div className="container mx-auto grid grid-cols-[1fr_auto_1fr] items-center px-6 py-4">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group">
          <img src={theatreMasks} alt="Logo" className="h-8 w-8 transition-transform group-hover:scale-110" />
          <span className="font-heading text-xl font-bold text-foreground">Abhivyakti</span>
        </button>

        <div className="hidden items-center justify-center gap-2 rounded-full border border-border/50 bg-background/30 px-2 py-1 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`rounded-full px-4 py-2 font-body text-sm transition-colors ${
                activeSection === item.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div />
      </div>
    </motion.nav>
  );
};

export default Navbar;
