import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicBackground from "@/components/CinematicBackground";
import { galleryItems } from "@/data/events";

const EventGalleryPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CinematicBackground />
      <Navbar />
      <main className="relative z-10 pt-28">
        <section className="container mx-auto px-6 pb-16 pt-10">
          <Link to="/#gallery" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="mb-14 max-w-3xl">
            <p className="font-body mb-4 text-xs uppercase tracking-[0.4em] text-primary">Archive</p>
            <h1 className="font-heading text-5xl font-bold leading-tight md:text-7xl">Event Gallery</h1>
            <p className="font-body mt-5 leading-relaxed text-muted-foreground">
              A fuller look at the events, performances, and visual memories that shape Abhivyakti.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {galleryItems.map((item, index) => (
              <article
                key={item.id}
                id={item.id}
                className={`group overflow-hidden rounded-lg border border-border bg-card ${index === 0 ? "md:col-span-2" : ""}`}
              >
                <div className={index === 0 ? "grid md:grid-cols-[1.25fr_0.75fr]" : ""}>
                  <div className="relative min-h-72 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>
                  <div className="p-7">
                    <p className="text-xs uppercase tracking-widest text-primary">
                      {item.subtitle} - {item.year}
                    </p>
                    <h2 className="font-heading mt-3 text-3xl font-bold">{item.title}</h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default EventGalleryPage;
