import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import stagePlayImg from "@/assets/stage-play.jpg";
import mimeImg from "@/assets/mime-performance.jpg";

interface EventData {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  short: string;
  long: string;
  image: string;
}

const events: EventData[] = [
  {
    id: "lamhe",
    title: "Lamhe",
    subtitle: "Intercollege Stage Play Event",
    date: "15 April 2026",
    short: "A platform for theatrical storytelling where teams bring powerful narratives to life on stage.",
    long: "Lamhe is a grand intercollege stage play competition that celebrates the art of theatrical storytelling. Teams from across the region come together to present powerful narratives, weaving together acting, direction, stagecraft, and emotion. Emphasizing acting prowess, compelling storytelling, commanding stage presence, and creative set design — Lamhe is where raw talent meets theatrical brilliance. Whether it's a social commentary, a timeless classic, or an original creation, every performance on this stage leaves an indelible mark on the audience.",
    image: stagePlayImg,
  },
  {
    id: "rahi",
    title: "Rahi",
    subtitle: "Intercollege Mime Event",
    date: "16 April 2026",
    short: "An expressive mime competition where silence speaks louder than words.",
    long: "Rahi is an intercollege mime competition that pushes the boundaries of non-verbal expression. In a world where words dominate, Rahi celebrates the art of silence — where every gesture, every expression, every movement tells a story. Emphasizing body language mastery, emotional depth, creative choreography, and the power of visual storytelling — Rahi challenges performers to convey complex narratives without uttering a single word. It's where creativity meets discipline, and silence becomes the most powerful language.",
    image: mimeImg,
  },
];

const IlhaamSection = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="ilhaam" className="py-24 md:py-32 relative grain-overlay">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
            Ilhaam
          </h2>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Two stages. Two art forms. One celebration of expression.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <motion.div
                className="relative overflow-hidden rounded-lg border border-border bg-card cursor-pointer group"
                onClick={() => setExpanded(expanded === event.id ? null : event.id)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width={1280}
                    height={720}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <p className="text-primary text-xs tracking-widest uppercase font-body mb-1">{event.date}</p>
                    <h3 className="font-heading text-3xl font-bold text-foreground">{event.title}</h3>
                    <p className="text-muted-foreground text-sm font-body">{event.subtitle}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">{event.short}</p>
                  <p className="text-primary text-xs mt-3 font-body tracking-wider uppercase">
                    {expanded === event.id ? "Click to collapse ↑" : "Click to learn more →"}
                  </p>
                </div>
              </motion.div>

              <AnimatePresence>
                {expanded === event.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 p-6 rounded-lg border border-border bg-secondary">
                      <p className="text-foreground font-body text-sm leading-relaxed mb-6">
                        {event.long}
                      </p>
                      <button className="px-6 py-2.5 bg-primary text-primary-foreground font-body text-sm rounded-sm tracking-wider uppercase hover:bg-electric-glow transition-colors">
                        Register Now
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IlhaamSection;
