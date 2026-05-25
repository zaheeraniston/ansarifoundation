"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Award, GraduationCap, Globe } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function FounderSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="founder"
      className="section-padding bg-gradient-section relative overflow-hidden"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container-premium mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark dark:text-gold text-sm font-medium mb-4">
            Our Founder
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            The Visionary{" "}
            <span className="text-gradient-royal">Behind Our Mission</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Founder Image / Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main card */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-royal to-royal-dark p-4 sm:p-8 shadow-2xl">
                <div className="aspect-square sm:aspect-[3/4] max-w-[260px] sm:max-w-sm mx-auto rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 relative overflow-hidden">
                  {/* Founder Photo */}
                  <img
                    src="/founder.jpg"
                    alt={SITE_CONFIG.founder}
                    className="w-full h-full object-cover object-top"
                  />

                  {/* Gradient overlay at bottom for text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-dark/90 via-royal-dark/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 text-center px-3 sm:px-4 pb-4 sm:pb-6">
                    <h3 className="text-white font-heading font-bold text-base sm:text-xl mb-1">
                      {SITE_CONFIG.founder}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm">
                      {SITE_CONFIG.founderTitle}
                    </p>
                  </div>

                  {/* Bottom decorative bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-emerald to-gold" />
                </div>

                {/* Founder title card */}
                <div className="mt-4 sm:mt-6 flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-heading font-semibold">
                      Founder & Chairman
                    </p>
                    <p className="text-white/60 text-sm">
                      Ansari Foundation Assam
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block absolute -top-3 -right-3 px-4 py-2 rounded-xl bg-white dark:bg-gray-800 shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-royal" />
                  <span className="text-sm font-medium">Lincoln&apos;s Inn</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="hidden sm:block absolute -bottom-3 -left-3 px-4 py-2 rounded-xl bg-white dark:bg-gray-800 shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-emerald" />
                  <span className="text-sm font-medium">London, UK</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Founder Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Quote */}
            <div className="relative mb-6 sm:mb-8">
              <Quote className="absolute -top-4 -left-2 w-12 h-12 text-gold/20 rotate-180" />
              <blockquote className="pl-6 sm:pl-8 space-y-3">
                <p className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold leading-relaxed italic text-gradient-royal pb-2">
                  &ldquo;শিক্ষাই জাতিৰ মেৰুদণ্ড,<br />
                  কলমেই হ’ল তাৰ অস্ত্ৰ।&rdquo;
                </p>
                <p className="text-base sm:text-lg md:text-xl font-heading font-medium leading-relaxed italic text-foreground/90">
                  &ldquo;True change begins when we invest in people. Education,
                  compassion, and opportunity are the foundations upon which we can
                  build a better world for every child, every family, and every
                  community in Assam.&rdquo;
                </p>
              </blockquote>
              <div className="mt-4 pl-6 sm:pl-8 flex items-center gap-3">
                <div className="w-10 h-0.5 bg-gold rounded" />
                <span className="text-gold font-heading font-semibold text-sm">
                  {SITE_CONFIG.founder}
                </span>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hafiz Adv. Elias Hossen Ansari, undergoing Barrister Training at
                The Honorable Society of Lincoln&apos;s Inn in London, United Kingdom,
                founded Ansari Foundation Assam with a profound vision to uplift
                society through education, humanity, awareness, and sustainable
                development. Despite being based abroad, his deep connection to
                his roots in Assam has driven him to establish this foundation as
                a bridge between opportunity and need.
              </p>
              <p>
                Having witnessed the challenges facing rural communities in Assam
                firsthand, Hafiz Adv. Elias Hossen Ansari resolved to create an
                organization that would not merely provide temporary relief, but
                would build lasting systems of education, healthcare, and community
                empowerment. His legal training at one of the most prestigious Inns
                of Court in London brings a unique perspective to the
                foundation&apos;s operations, ensuring that every initiative is grounded
                in principles of justice, equity, and human rights.
              </p>
              <p>
                Under his leadership, the foundation has grown rapidly, establishing
                programs across education, health, environment, and social welfare,
                all unified by the belief that every person deserves dignity,
                opportunity, and the chance to build a better life for themselves and
                their families.
              </p>
            </div>

            {/* Signature area */}
            <div className="mt-6 sm:mt-8 pt-6 border-t border-border/50">
              <p className="font-heading font-semibold text-royal dark:text-royal-light text-lg italic">
                Hafiz Adv. Elias Hossen Ansari
              </p>
              <p className="text-muted-foreground text-sm">
                Founder &amp; Chairman, Ansari Foundation Assam
              </p>
              <p className="text-gold text-xs mt-1">
                Barrister Training, The Honorable Society of Lincoln&apos;s Inn, London
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
