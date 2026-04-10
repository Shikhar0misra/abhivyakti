import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";

import streetPlay from "@/assets/street-play.jpg";
import shortFilm from "@/assets/short-film.jpg";
import stagePlay from "@/assets/stage-play.jpg";
import stageSpotlight from "@/assets/stage-spotlight.jpg";

const galleryItems = [
  { title: "Riha", subtitle: "Street Play", image: streetPlay },
  { title: "Short Film Festival", subtitle: "Cinema", image: shortFilm },
  { title: "Akshara", subtitle: "Theatre Performances", image: stagePlay },
  { title: "Ilhaam", subtitle: "The Grand Event", image: stageSpotlight },
];

const EventGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [sectionHeight, setSectionHeight] = useState(0);
  const [scrollDistance, setScrollDistance] = useState(0);

  // ✅ Calculate correct width AFTER render
  useLayoutEffect(() => {
    const calculate = () => {
      if (!containerRef.current) return;

      const totalWidth = containerRef.current.scrollWidth;
      const screenWidth = window.innerWidth;

      const distance = Math.max(totalWidth - screenWidth, 0);

      setScrollDistance(distance);
      setSectionHeight(distance + window.innerHeight);
    };

    // Delay ensures images are loaded
    setTimeout(calculate, 300);

    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  // ✅ Track scroll ONLY for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // ✅ Map vertical scroll → horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section
      ref={sectionRef} // ✅ CRITICAL FIX
      className="relative overflow-hidden grain-overlay"
      style={{ height: sectionHeight || "200vh" }}
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Header */}
        <div className="absolute top-20 left-6 z-10 max-w-xl">
          <motion.h2
            className="font-heading text-4xl md:text-6xl font-bold text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Event Gallery
          </motion.h2>

          <p className="text-muted-foreground font-body text-sm mt-2">
            Scroll to explore →
          </p>
        </div>

        {/* Horizontal Gallery */}
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex gap-6 px-6 h-full items-center"
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="relative flex-shrink-0 w-[70vw] md:w-[45vw] lg:w-[35vw] aspect-video rounded-lg overflow-hidden group"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-6 left-6">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 font-body text-sm">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default EventGallery;