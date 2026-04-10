import { motion } from "framer-motion";
import parchmentBg from "@/assets/parchment-bg.jpg";

const HeroSection = () => {
  const scrollToEvents = () => {
    document.getElementById("ilhaam")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-start justify-end spotlight-glow grain-overlay overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Left side hero text */}
      <motion.div
        className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2 z-10 max-w-md"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 4, duration: 0.8 }}
      >
        <h2 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-tight mb-4">
          The Stage<br />
          <span className="text-gradient-electric">Awaits</span>
        </h2>
        <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">
          Where silence speaks, stories breathe, and every spotlight illuminates a new world.
        </p>
      </motion.div>

      {/* Parchment card - top right, reduced size */}
      <motion.div
        className="relative z-10 mt-28 mr-6 md:mr-16 max-w-xs md:max-w-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8, duration: 1 }}
      >
        <div className="relative rounded-sm overflow-hidden shadow-2xl">
          <img
            src={parchmentBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            width={1920}
            height={1080}
          />
          <div className="relative px-6 py-8 md:px-10 md:py-12 text-center">
            <motion.p
              className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3"
              style={{ color: "hsl(35, 30%, 30%)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.2, duration: 0.6 }}
            >
              Abhivyakti presents
            </motion.p>
            <motion.h1
              className="font-heading text-4xl md:text-5xl font-bold mb-4 italic"
              style={{ color: "hsl(35, 30%, 15%)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.4, duration: 0.8 }}
            >
              Ilhaam
            </motion.h1>
            <motion.div
              className="space-y-1.5 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.8, duration: 0.6 }}
            >
              <p className="font-heading text-sm md:text-base" style={{ color: "hsl(35, 30%, 25%)" }}>
                Lamhe <span className="text-xs font-body">— Stage Play</span>
              </p>
              <p className="font-heading text-sm md:text-base" style={{ color: "hsl(35, 30%, 25%)" }}>
                Rahi <span className="text-xs font-body">— Mime</span>
              </p>
            </motion.div>
            <motion.button
              onClick={scrollToEvents}
              className="px-6 py-2 font-body text-xs tracking-widest uppercase border-2 transition-all duration-300 hover:scale-105"
              style={{
                color: "hsl(35, 30%, 20%)",
                borderColor: "hsl(35, 30%, 35%)",
                backgroundColor: "transparent",
              }}
              whileHover={{ backgroundColor: "hsl(35, 30%, 20%)", color: "hsl(38, 40%, 85%)" }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5.2, duration: 0.6 }}
            >
              Explore Events
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
