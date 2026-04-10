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
    className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 cursor-pointer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    whileHover={{ scale: 1.03, borderColor: "hsl(217, 91%, 60%)" }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <p className="text-primary text-xs tracking-widest uppercase font-body mb-2 relative z-10">{item.type} · {item.year}</p>
    <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground relative z-10 group-hover:text-gradient-electric transition-colors">
      {item.title}
    </h3>
  </motion.div>
);

const PastProductions = () => {
  return (
    <section className="py-24 md:py-32 grain-overlay">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
            Past Productions
          </h2>
          <p className="text-muted-foreground font-body">Stories we've told, stages we've set ablaze.</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.p
            className="text-primary text-xs tracking-[0.3em] uppercase font-body mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Theatre
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {productions.map((p, i) => (
              <ProductionCard key={p.title} item={p} index={i} />
            ))}
          </div>

          <motion.p
            className="text-primary text-xs tracking-[0.3em] uppercase font-body mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Short Films
          </motion.p>
          <div className="grid sm:grid-cols-2 gap-4">
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
