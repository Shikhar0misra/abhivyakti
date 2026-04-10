import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import theatreMasks from "@/assets/theatre-masks.png";

const OpeningAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"masks" | "split" | "done">("masks");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("split"), 2200);
    const t2 = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100]">
        {/* Left half */}
        <motion.div
          className="absolute inset-0 bg-background"
          style={{ clipPath: "polygon(0 0, 55% 0, 45% 100%, 0 100%)" }}
          animate={phase === "split" ? { x: "-110%", skewX: "-5deg" } : {}}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
        />
        {/* Right half */}
        <motion.div
          className="absolute inset-0 bg-background"
          style={{ clipPath: "polygon(55% 0, 100% 0, 100% 100%, 45% 100%)" }}
          animate={phase === "split" ? { x: "110%", skewX: "5deg" } : {}}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
        />
        {/* Masks */}
        {phase === "masks" && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={theatreMasks}
              alt="Theatre Masks"
              className="w-32 h-32 md:w-48 md:h-48 mb-6"
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.h1
              className="font-heading text-3xl md:text-5xl font-bold text-foreground tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Abhivyakti
            </motion.h1>
            <motion.p
              className="text-muted-foreground text-sm md:text-base mt-2 tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              Drama Society
            </motion.p>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default OpeningAnimation;
