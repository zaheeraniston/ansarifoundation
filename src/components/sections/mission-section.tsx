"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target, Sparkles } from "lucide-react";

export function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="section-padding bg-background" ref={ref}>
      <div className="container-premium mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald/10 text-emerald dark:text-emerald-light text-sm font-medium mb-4">
            Our Purpose
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Mission & <span className="text-gradient-emerald">Vision</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Guided by compassion and driven by purpose, we work tirelessly to create
            a world where every individual has the opportunity to thrive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="card-premium p-5 sm:p-8 text-center group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-royal to-royal-light" />
            <div className="w-16 h-16 mx-auto rounded-2xl bg-royal/10 flex items-center justify-center mb-6 group-hover:bg-royal/20 transition-colors">
              <Eye className="w-8 h-8 text-royal" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To create an empowered, educated, and self-sustaining society in Assam
              where every individual has access to quality education, healthcare, clean
              water, and opportunities for growth. We envision communities that are
              resilient, inclusive, and capable of shaping their own futures with
              dignity and confidence.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="card-premium p-5 sm:p-8 text-center group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald to-emerald-light" />
            <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald/10 flex items-center justify-center mb-6 group-hover:bg-emerald/20 transition-colors">
              <Target className="w-8 h-8 text-emerald" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower underserved communities in Assam through comprehensive
              programs in education, health, environmental protection, and social
              welfare. We are committed to building sustainable infrastructure,
              developing human capital, and creating lasting change through
              transparent, community-driven initiatives that respect local culture.
            </p>
          </motion.div>

          {/* Approach */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="card-premium p-5 sm:p-8 text-center group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light" />
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
              <Sparkles className="w-8 h-8 text-gold" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-4">Our Approach</h3>
            <p className="text-muted-foreground leading-relaxed">
              We follow a holistic, community-first approach that combines grassroots
              engagement with strategic partnerships. By working closely with local
              leaders, volunteers, and government bodies, we ensure our programs are
              culturally relevant, sustainable, and create measurable impact that
              transforms lives from within the community itself.
            </p>
          </motion.div>
        </div>

        {/* Mission Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 sm:mt-16 rounded-3xl bg-gradient-to-r from-royal/5 via-transparent to-emerald/5 dark:from-royal/10 dark:via-transparent dark:to-emerald/10 border border-border/50 p-5 sm:p-8 md:p-12"
        >
          <h3 className="font-heading font-bold text-2xl mb-8 text-center">
            Foundation <span className="text-gradient-royal">Objectives</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
            {[
              "Education & Literacy Programs",
              "Rural Development Initiatives",
              "Game & Sports Development",
              "Environmental Protection",
              "Health & Sanitation Awareness",
              "Youth Empowerment Programs",
              "Skill Development Training",
              "Human Rights Awareness",
              "Disaster Relief Operations",
              "Clean Water Awareness",
              "Library & Educational Infrastructure",
              "Blood Donation & Health Camps",
              "Climate Awareness Campaigns",
              "Community Development Programs",
              "Social Welfare Activities",
              "Awareness Campaigns",
            ].map((objective, i) => (
              <motion.div
                key={objective}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.03 }}
                className="flex items-center gap-2 p-2.5 sm:p-3 rounded-xl bg-card/50 border border-border/30 hover:border-royal/30 hover:bg-royal/5 transition-all cursor-default"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald flex-shrink-0" />
                <span className="text-[11px] sm:text-sm leading-tight">{objective}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
