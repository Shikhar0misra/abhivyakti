import mimeImg from "@/assets/mime-performance.jpg";
import shortFilm from "@/assets/short-film.jpg";
import stagePlayImg from "@/assets/stage-play.jpg";
import stageSpotlight from "@/assets/stage-spotlight.jpg";
import streetPlay from "@/assets/street-play.jpg";

export interface EventData {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  status: "Upcoming" | "Past";
  featured?: boolean;
  short: string;
  long: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string;
  image: string;
}

export const events: EventData[] = [
  {
    id: "lamhe",
    title: "Lamhe",
    subtitle: "Intercollege Stage Play Event",
    date: "15 April 2026",
    status: "Upcoming",
    featured: true,
    short: "A platform for theatrical storytelling where teams bring powerful narratives to life on stage.",
    long: "Lamhe is a grand intercollege stage play competition celebrating acting, direction, stagecraft, and emotional storytelling. Teams bring social commentary, classics, and original scripts into one charged theatre space where every performance is built to leave a mark.",
    image: stagePlayImg,
  },
  {
    id: "rahi",
    title: "Rahi",
    subtitle: "Intercollege Mime Event",
    date: "16 April 2026",
    status: "Upcoming",
    featured: true,
    short: "An expressive mime competition where silence speaks louder than words.",
    long: "Rahi pushes performers into the language of gesture, rhythm, stillness, and expression. The event rewards body control, emotional clarity, creative choreography, and the ability to tell complete stories without a spoken line.",
    image: mimeImg,
  },
  {
    id: "riha",
    title: "Riha",
    subtitle: "Street Play Showcase",
    date: "2025",
    status: "Past",
    short: "A high-energy nukkad natak showcase rooted in social awareness and public performance.",
    long: "Riha brought theatre back to open spaces, using voice, rhythm, chorus, and urgency to turn everyday locations into performance circles. It reflects Abhivyakti's oldest instinct: direct, fearless expression.",
    image: streetPlay,
  },
  {
    id: "short-film-festival",
    title: "Short Film Festival",
    subtitle: "Cinema and Visual Storytelling",
    date: "2025",
    status: "Past",
    short: "A screening space for compact, experimental stories told through film.",
    long: "The Short Film Festival gives creators room to explore cinematic language, editing, framing, sound, and performance in a concentrated format. It connects theatre instincts with the lens.",
    image: shortFilm,
  },
  {
    id: "akshara",
    title: "Akshara",
    subtitle: "Theatre Performances",
    date: "2024",
    status: "Past",
    short: "A theatre evening built around layered writing, ensemble performance, and stage presence.",
    long: "Akshara focused on crafted stage work, bringing together actors, writers, designers, and directors for performances shaped by detail, timing, and ensemble trust.",
    image: stageSpotlight,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "riha-gallery",
    title: "Riha",
    subtitle: "Street Play",
    year: "2025",
    description: "Street-side performance energy, chorus work, and social theatre in motion.",
    image: streetPlay,
  },
  {
    id: "short-film-gallery",
    title: "Short Film Festival",
    subtitle: "Cinema",
    year: "2025",
    description: "Frames, screenings, and stories shaped for the camera.",
    image: shortFilm,
  },
  {
    id: "akshara-gallery",
    title: "Akshara",
    subtitle: "Theatre Performances",
    year: "2024",
    description: "Stage compositions, dramatic moments, and ensemble work.",
    image: stagePlayImg,
  },
  {
    id: "ilhaam-gallery",
    title: "Ilhaam",
    subtitle: "The Grand Event",
    year: "2026",
    description: "The scale, lights, and anticipation of Abhivyakti's flagship celebration.",
    image: stageSpotlight,
  },
  {
    id: "rahi-gallery",
    title: "Rahi",
    subtitle: "Mime",
    year: "2026",
    description: "Silent performance, precision, and expressive physical storytelling.",
    image: mimeImg,
  },
];

export const featuredEvents = events.filter((event) => event.featured);
