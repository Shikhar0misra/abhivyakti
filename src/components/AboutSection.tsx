import { motion } from "framer-motion";
import streetPlay from "@/assets/street-play.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative grain-overlay spotlight-glow">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-xs tracking-[0.4em] uppercase font-body mb-4">Our Story</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              Born on the Streets,<br />
              <span className="text-gradient-electric">Raised on Stage</span>
            </h2>
            <div className="space-y-5 text-muted-foreground font-body text-sm leading-relaxed">
              <p>
                Abhivyakti began with street theatre — <em>nukkad natak</em> — performing under open skies, fueled by the
                raw energy of social awareness and the desire to spark change. Our roots lie in the streets of JIIT 128,
                where every performance was an act of courage, every story a mirror to society.
              </p>
              <p>
                What started as passionate outcries against injustice, inequality, and apathy has blossomed into a
                full-fledged drama society that embraces every facet of theatrical expression — from powerful stage plays
                that leave audiences breathless, to evocative mime performances where silence carries the weight of a
                thousand words, to short films that push the boundaries of visual storytelling.
              </p>
              <p>
                Today, Abhivyakti stands as one of the most vibrant cultural forces at JIIT 128, driven by the same fire
                that lit our first street performance. We don't just perform — we <strong className="text-foreground">express, provoke, and inspire</strong>.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden border-glow">
              <img
                src={streetPlay}
                alt="Abhivyakti street play performance"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/20 rounded-lg" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-primary/10 rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
