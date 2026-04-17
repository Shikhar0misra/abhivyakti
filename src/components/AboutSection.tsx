import { motion } from "framer-motion";
import streetPlay from "@/assets/street-play.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative z-40 overflow-hidden bg-background py-24 shadow-[0_-36px_80px_rgba(0,0,0,0.72)] grain-overlay spotlight-glow md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,hsl(var(--accent)/0.08),transparent_45%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--secondary)/0.50))]" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body mb-4 text-xs uppercase tracking-[0.4em] text-primary">Our Story</p>
            <h2 className="font-heading mb-8 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Born on the Streets,
              <br />
              <span className="text-gradient-electric">Raised on Stage</span>
            </h2>
            <div className="space-y-5 font-body text-sm leading-relaxed text-muted-foreground">
              <p>
                Abhivyakti began with street theatre - <em>nukkad natak</em> - performing under open skies, fueled by the
                raw energy of social awareness and the desire to spark change. Our roots lie in the streets of JIIT 128,
                where every performance was an act of courage, every story a mirror to society.
              </p>
              <p>
                What started as passionate outcries against injustice, inequality, and apathy has blossomed into a
                full-fledged drama society that embraces every facet of theatrical expression - from powerful stage plays
                that leave audiences breathless, to evocative mime performances where silence carries the weight of a
                thousand words, to short films that push the boundaries of visual storytelling.
              </p>
              <p>
                Today, Abhivyakti stands as one of the most vibrant cultural forces at JIIT 128, driven by the same fire
                that lit our first street performance. We don't just perform -{" "}
                <strong className="text-foreground">express, provoke, and inspire</strong>.
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
            <div className="relative overflow-hidden rounded-lg border-glow">
              <img
                src={streetPlay}
                alt="Abhivyakti street play performance"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-lg border border-primary/20" />
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-lg border border-primary/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
