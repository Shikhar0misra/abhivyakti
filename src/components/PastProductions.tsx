import { motion } from "framer-motion";

const productions = [
  { title: "The Man with the Blue Umbrella", type: "Stage Play", year: "2025" },
  { title: "System Hang Hai", type: "Street Play", year: "2024" },
  { title: "Gul", type: "Stage Play", year: "2024" },
  { title: "Xenophobia", type: "Stage Play", year: "2023" },
  { title: "Antardvandva", type: "Stage Play", year: "2023" },
  { title: "Family Business", type: "Stage Play", year: "2022" },
];

const films = [
  { title: "The Act", type: "Short Film", year: "2025" },
  { title: "Riwayat", type: "Short Film", year: "2024" },
];

const ProductionCard = ({ item, index }: { item: typeof productions[0]; index: number }) => (
  <motion.div
    className="group relative cursor-pointer overflow-hidden rounded-lg border border-border bg-card p-6"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    whileHover={{ scale: 1.03, borderColor: "hsl(217, 91%, 60%)" }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    <p className="relative z-10 mb-2 font-body text-xs uppercase tracking-widest text-primary">
      {item.type} - {item.year}
    </p>
    <h3 className="relative z-10 font-heading text-xl font-semibold text-foreground transition-colors group-hover:text-gradient-electric md:text-2xl">
      {item.title}
    </h3>
  </motion.div>
);

const PastProductions = () => {
  return (
    <section className="relative z-50 overflow-hidden bg-background py-24 shadow-[0_-36px_80px_rgba(0,0,0,0.72)] grain-overlay md:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--secondary)/0.42),hsl(var(--background))_48%,hsl(0_0%_3%))]" />
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading mb-4 text-4xl font-bold text-foreground md:text-6xl">Past Productions</h2>
          <p className="font-body text-muted-foreground">Stories we've told, stages we've set ablaze.</p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <motion.p
            className="font-body mb-6 text-xs uppercase tracking-[0.3em] text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Theatre
          </motion.p>
          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {productions.map((p, i) => (
              <ProductionCard key={p.title} item={p} index={i} />
            ))}
          </div>

          <motion.p
            className="font-body mb-6 text-xs uppercase tracking-[0.3em] text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Short Films
          </motion.p>
          <div className="grid gap-4 sm:grid-cols-2">
            {films.map((f, i) => (
              <ProductionCard key={f.title} item={f} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastProductions;
