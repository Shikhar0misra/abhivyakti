import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryItems } from "@/data/events";

const EventGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const topX = useTransform(scrollYProgress, [0, 1], ["-18%", "10%"]);
  const bottomX = useTransform(scrollYProgress, [0, 1], ["10%", "-18%"]);
  const topRow = [...galleryItems, ...galleryItems];
  const bottomRow = [...galleryItems].reverse().concat(galleryItems);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative z-30 overflow-hidden bg-background py-24 shadow-[0_-36px_80px_rgba(0,0,0,0.72)] grain-overlay md:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--secondary)/0.52),hsl(var(--background))_36%,hsl(var(--secondary)/0.36))]" />
      <div className="relative z-10">
        <div className="container mx-auto mb-12 flex flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-body mb-4 text-xs uppercase tracking-[0.4em] text-primary">Moments in motion</p>
            <motion.h2
              className="font-heading text-4xl font-bold text-foreground md:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Event Gallery
            </motion.h2>
            <p className="font-body mt-3 max-w-xl text-sm text-muted-foreground">
              Scroll down to move through two opposing streams of performances, rehearsals, screenings, and stage lights.
            </p>
          </div>
          <Link
            to="/event-gallery"
            className="inline-flex items-center gap-2 self-start rounded-sm border border-primary/50 px-5 py-2.5 text-xs uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View full gallery
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="space-y-6">
          {[{ items: topRow, x: topX }, { items: bottomRow, x: bottomX }].map((row, rowIndex) => (
            <motion.div key={rowIndex} className="flex w-max gap-5 px-6" style={{ x: row.x }}>
              {row.items.map((item, i) => (
                <motion.div
                  key={`${rowIndex}-${item.id}-${i}`}
                  className="group relative h-56 w-[78vw] flex-shrink-0 overflow-hidden rounded-lg border border-border bg-card md:h-72 md:w-[38rem]"
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: Math.min(i * 0.04, 0.24), duration: 0.5 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">{item.title}</h3>
                    <p className="font-body text-sm text-gray-300">
                      {item.subtitle} - {item.year}
                    </p>
                  </div>
                  <div className="absolute right-4 top-4 font-heading text-xs tracking-widest text-white/40">
                    0{(i % galleryItems.length) + 1}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
