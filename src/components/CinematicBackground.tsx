import { motion } from "framer-motion";

const CinematicBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.12]">
      {/* Film Reel - Top Left */}
      <motion.svg
        className="absolute -top-10 -left-10 w-64 h-64 text-primary"
        viewBox="0 0 200 200"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="4" />
        <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="100" r="15" fill="currentColor" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const x = 100 + 50 * Math.cos((angle * Math.PI) / 180);
          const y = 100 + 50 * Math.sin((angle * Math.PI) / 180);
          return <circle key={angle} cx={x} cy={y} r="10" fill="none" stroke="currentColor" strokeWidth="2" />;
        })}
        {/* Sprocket holes */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
          const x = 100 + 82 * Math.cos((angle * Math.PI) / 180);
          const y = 100 + 82 * Math.sin((angle * Math.PI) / 180);
          return <circle key={`s-${angle}`} cx={x} cy={y} r="4" fill="currentColor" />;
        })}
      </motion.svg>

      {/* Clapperboard - Top Right */}
      <svg className="absolute top-20 right-16 w-40 h-40 text-accent" viewBox="0 0 120 100" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="10" y="30" width="100" height="65" rx="3" />
        <polygon points="10,30 110,30 110,10 10,10" />
        {/* Clapper stripes */}
        <line x1="25" y1="10" x2="35" y2="30" />
        <line x1="45" y1="10" x2="55" y2="30" />
        <line x1="65" y1="10" x2="75" y2="30" />
        <line x1="85" y1="10" x2="95" y2="30" />
      </svg>

      {/* Vintage Camera - Bottom Left */}
      <svg className="absolute bottom-32 left-10 w-48 h-48 text-accent" viewBox="0 0 160 120" fill="none" stroke="currentColor" strokeWidth="2">
        {/* Camera body */}
        <rect x="20" y="35" width="100" height="70" rx="5" />
        {/* Lens */}
        <circle cx="70" cy="70" r="22" />
        <circle cx="70" cy="70" r="15" />
        <circle cx="70" cy="70" r="6" fill="currentColor" />
        {/* Viewfinder */}
        <rect x="95" y="40" width="20" height="12" rx="2" />
        {/* Film reel on top */}
        <circle cx="45" cy="30" r="12" />
        <circle cx="45" cy="30" r="4" fill="currentColor" />
        <circle cx="85" cy="30" r="12" />
        <circle cx="85" cy="30" r="4" fill="currentColor" />
        {/* Tripod legs */}
        <line x1="50" y1="105" x2="30" y2="118" />
        <line x1="70" y1="105" x2="70" y2="118" />
        <line x1="90" y1="105" x2="110" y2="118" />
      </svg>

      {/* Film Reel - Bottom Right */}
      <motion.svg
        className="absolute -bottom-16 -right-16 w-56 h-56 text-primary"
        viewBox="0 0 200 200"
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="100" r="12" fill="currentColor" />
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const x = 100 + 45 * Math.cos((angle * Math.PI) / 180);
          const y = 100 + 45 * Math.sin((angle * Math.PI) / 180);
          return <circle key={angle} cx={x} cy={y} r="12" fill="none" stroke="currentColor" strokeWidth="2" />;
        })}
      </motion.svg>

      {/* Spotlight / Cinematography Light - Mid Left */}
      <svg className="absolute top-1/2 -translate-y-1/2 -left-4 w-36 h-36 text-accent" viewBox="0 0 120 140" fill="none" stroke="currentColor" strokeWidth="2">
        {/* Light head */}
        <path d="M30,20 L90,20 L100,60 L20,60 Z" />
        {/* Barn doors */}
        <line x1="30" y1="20" x2="25" y2="8" />
        <line x1="90" y1="20" x2="95" y2="8" />
        {/* Lens */}
        <ellipse cx="60" cy="40" rx="20" ry="12" />
        {/* Stand */}
        <line x1="60" y1="60" x2="60" y2="110" />
        <line x1="40" y1="110" x2="80" y2="110" />
        {/* Light rays */}
        <line x1="60" y1="60" x2="40" y2="80" strokeDasharray="4 4" opacity="0.5" />
        <line x1="60" y1="60" x2="80" y2="80" strokeDasharray="4 4" opacity="0.5" />
        <line x1="60" y1="60" x2="60" y2="85" strokeDasharray="4 4" opacity="0.5" />
      </svg>

      {/* Film Strip - Right side vertical */}
      <svg className="absolute top-1/3 right-0 w-12 h-80 text-primary" viewBox="0 0 40 300" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="0" width="30" height="300" rx="2" />
        {Array.from({ length: 10 }).map((_, i) => (
          <g key={i}>
            <rect x="10" y={5 + i * 30} width="20" height="20" rx="1" />
            <circle cx="8" cy={15 + i * 30} r="2" fill="currentColor" />
            <circle cx="32" cy={15 + i * 30} r="2" fill="currentColor" />
          </g>
        ))}
      </svg>

      {/* Small Spotlight - Top center-right */}
      <svg className="absolute top-8 right-1/3 w-24 h-24 text-primary" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="40" cy="25" r="15" />
        <circle cx="40" cy="25" r="8" />
        <line x1="40" y1="40" x2="40" y2="70" />
        <line x1="25" y1="70" x2="55" y2="70" />
      </svg>
    </div>
  );
};

export default CinematicBackground;
