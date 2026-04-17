import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CinematicBackground from "@/components/CinematicBackground";
import { events } from "@/data/events";

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CinematicBackground />
      <Navbar />
      <main className="relative z-10 pt-28">
        <section className="container mx-auto px-6 pb-16 pt-10">
          <Link to="/#ilhaam" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft size={16} />
            Back to featured events
          </Link>

          <div className="mb-14 max-w-3xl">
            <p className="font-body mb-4 text-xs uppercase tracking-[0.4em] text-primary">All events</p>
            <h1 className="font-heading text-5xl font-bold leading-tight md:text-7xl">Abhivyakti Events</h1>
            <p className="font-body mt-5 leading-relaxed text-muted-foreground">
              Featured events stay on the home page. This page keeps the complete list of what Abhivyakti has done and what is coming next.
            </p>
          </div>

          <div className="space-y-6">
            {events.map((event) => (
              <article
                key={event.id}
                id={event.id}
                className="grid overflow-hidden rounded-lg border border-border bg-card md:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="relative min-h-72 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover"
                    loading={event.featured ? "eager" : "lazy"}
                  />
                  <div className="absolute left-5 top-5 rounded-full bg-background/70 px-3 py-1 text-xs uppercase tracking-widest text-foreground backdrop-blur-sm">
                    {event.status}
                  </div>
                </div>
                <div className="flex flex-col justify-center p-7 md:p-10">
                  <p className="text-xs uppercase tracking-widest text-primary">{event.date}</p>
                  <h2 className="font-heading mt-3 text-4xl font-bold">{event.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{event.subtitle}</p>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{event.long}</p>
                  {event.status === "Upcoming" && (
                    <button className="mt-7 w-max rounded-sm bg-primary px-6 py-2.5 text-sm uppercase tracking-wider text-primary-foreground transition-colors hover:bg-electric-glow">
                      Register Now
                    </button>
                  )}
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

export default EventsPage;
