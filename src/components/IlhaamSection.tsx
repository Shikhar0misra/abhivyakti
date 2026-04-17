import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { featuredEvents } from "@/data/events";

const IlhaamSection = () => {
  return (
    <section
      id="ilhaam"
      className="relative z-20 overflow-hidden bg-background py-24 shadow-[0_-36px_80px_rgba(0,0,0,0.72)] grain-overlay md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--primary)/0.10),transparent_55%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--secondary)/0.42))]" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading mb-4 text-4xl font-bold text-foreground md:text-6xl">Ilhaam</h2>
          <p className="font-body mx-auto max-w-lg text-muted-foreground">
            Featured events on the main stage. Open the full events page for every upcoming and past event.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {featuredEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <motion.div
                className="group relative overflow-hidden rounded-lg border border-border bg-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/events#${event.id}`} className="block">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      width={1280}
                      height={720}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6">
                      <p className="font-body mb-1 text-xs uppercase tracking-widest text-primary">{event.date}</p>
                      <h3 className="font-heading text-3xl font-bold text-foreground">{event.title}</h3>
                      <p className="font-body text-sm text-muted-foreground">{event.subtitle}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-body text-sm leading-relaxed text-muted-foreground">{event.short}</p>
                    <p className="mt-4 inline-flex items-center gap-2 font-body text-xs uppercase tracking-wider text-primary">
                      View all events
                      <ArrowRight size={14} />
                    </p>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 rounded-sm border border-primary/50 px-6 py-3 text-xs uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Explore every event
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IlhaamSection;
