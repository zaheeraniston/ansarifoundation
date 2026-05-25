"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, ArrowRight, Clock } from "lucide-react";
import { EVENTS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const categoryColors: Record<string, string> = {
  Health: "bg-rose-500/10 text-rose-600 border-rose-500/20",
  Environment: "bg-emerald/10 text-emerald border-emerald/20",
  Sports: "bg-gold/10 text-gold-dark dark:text-gold border-gold/20",
  Education: "bg-royal/10 text-royal dark:text-royal-light border-royal/20",
};

export function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="events"
      className="section-padding bg-gradient-section-alt relative"
      ref={ref}
    >
      <div className="container-premium mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark dark:text-gold text-sm font-medium mb-4">
            <Calendar className="w-4 h-4 inline mr-1" />
            Events & Campaigns
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Upcoming <span className="text-gradient-royal">Events</span> &amp;{" "}
            <span className="text-gradient-emerald">Campaigns</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Stay updated with our latest events, campaigns, and community activities.
            Join us in making a difference.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {EVENTS.map((event, i) => {
            const dateObj = new Date(event.date);
            const month = dateObj.toLocaleString("default", { month: "short" });
            const day = dateObj.getDate();
            const year = dateObj.getFullYear();
            const colors = categoryColors[event.category] || categoryColors.Education;

            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="card-premium p-4 sm:p-6 flex gap-4 sm:gap-6 group"
              >
                {/* Date Badge */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-royal to-royal-light flex flex-col items-center justify-center text-white">
                  <span className="text-xs font-medium uppercase">{month}</span>
                  <span className="text-xl font-heading font-bold leading-tight">{day}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className={colors}>
                      {event.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{year}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-royal dark:group-hover:text-royal-light transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {event.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-xl border-2 border-royal/30 text-royal dark:text-royal-light hover:bg-royal/5"
          >
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>
              View All Events
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
