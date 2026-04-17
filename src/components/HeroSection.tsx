import { Suspense, useEffect, useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Model = () => {
  const { scene } = useGLTF("/model_hero.glb");
  const groupRef = useRef<THREE.Group>(null);
  const { invalidate } = useThree();

  const { scrollYProgress } = useScroll();
  const rotateY = useTransform(scrollYProgress, [0, 0.45], [0, Math.PI * 2], {
    clamp: false,
  });

  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.frustumCulled = true;
        child.castShadow = false;
        child.receiveShadow = false;
      }
    });
  }, [scene]);

  useMotionValueEvent(rotateY, "change", (latest) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = latest;
    invalidate();
  });

  useEffect(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = rotateY.get();
    invalidate();
  }, [invalidate, rotateY]);

  return <primitive ref={groupRef} object={scene} scale={16} />;
};

useGLTF.preload("/model_hero.glb");

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative h-screen overflow-hidden grain-overlay spotlight-glow">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <motion.div
        className="absolute right-6 top-24 z-30 md:right-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.2, duration: 0.7 }}
      >
        <button
          onClick={() => scrollTo("ilhaam")}
          className="group relative overflow-hidden rounded-sm shadow-2xl"
          style={{
            background: "linear-gradient(145deg, #f5e6c0, #e8d49a, #d4b86a, #e8d49a, #f5e6c0)",
            border: "2px solid #9a7a3a",
            boxShadow: "0 4px 24px rgba(180,140,40,0.4), inset 0 1px 0 rgba(255,255,255,0.4)",
          }}
        >
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute left-1 top-1 h-3 w-3 border-l border-t" style={{ borderColor: "#9a7a3a" }} />
          <div className="absolute right-1 top-1 h-3 w-3 border-r border-t" style={{ borderColor: "#9a7a3a" }} />
          <div className="absolute bottom-1 left-1 h-3 w-3 border-b border-l" style={{ borderColor: "#9a7a3a" }} />
          <div className="absolute bottom-1 right-1 h-3 w-3 border-b border-r" style={{ borderColor: "#9a7a3a" }} />
          <div className="relative px-5 py-3 text-center">
            <p className="font-body mb-0.5 text-[9px] uppercase tracking-[0.4em]" style={{ color: "#6b4f1a" }}>
              Register Now
            </p>
            <p className="font-heading text-lg font-bold italic leading-tight" style={{ color: "#3d2a08" }}>
              Lamhe
            </p>
            <p className="font-body mt-0.5 text-[9px] tracking-wider" style={{ color: "#6b4f1a" }}>
              Stage Play - 15 Apr 2026
            </p>
          </div>
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: "rgba(157,120,50,0.1)" }}
          />
        </button>
      </motion.div>

      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8, duration: 1.4 }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(232,180,34,0.07) 0%, rgba(59,130,246,0.04) 40%, transparent 70%)",
          }}
        />
        <Canvas
          camera={{ position: [0, -1, 7], fov: 45 }}
          dpr={[1, 1.25]}
          frameloop="demand"
          gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[3, 3, 4]} intensity={4} color="#e8b422" />
          <pointLight position={[-3, -2, 3]} intensity={2.5} color="#3b82f6" />
          <directionalLight position={[0, 5, -3]} intensity={0.6} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Canvas>
      </motion.div>

      <motion.div
        className="absolute left-6 top-1/2 z-20 max-w-xs -translate-y-1/2 md:left-16"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 4, duration: 0.8 }}
      >
        <p className="font-body mb-3 text-[10px] uppercase tracking-[0.4em] text-primary">Abhivyakti Presents</p>
        <h1 className="font-heading mb-4 text-4xl font-bold leading-tight text-foreground md:text-6xl">
          The Stage
          <br />
          <span className="text-gradient-electric">Awaits</span>
        </h1>
        <p className="font-body mb-6 text-sm leading-relaxed text-muted-foreground">
          Where silence speaks, stories breathe, and every spotlight illuminates a new world.
        </p>
        <motion.button
          onClick={() => scrollTo("ilhaam")}
          className="rounded-sm border border-primary/50 px-5 py-2 font-body text-xs uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          whileHover={{ scale: 1.04 }}
        >
          Explore Events
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.5, duration: 0.6 }}
      >
        <motion.div
          className="h-8 w-px bg-gradient-to-b from-primary/60 to-transparent"
          animate={{ scaleY: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
