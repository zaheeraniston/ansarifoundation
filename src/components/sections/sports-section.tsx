"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Dumbbell, Medal, Users, Star, Zap } from "lucide-react";

export function SportsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const initiatives = [
    {
      icon: Trophy,
      title: "Sports Tournaments",
      description:
        "Organizing annual inter-village sports tournaments that bring communities together, promote physical fitness, and identify talented athletes who can be nurtured for competitive sports at state and national levels.",
    },
    {
      icon: Dumbbell,
      title: "Youth Fitness Programs",
      description:
        "Structured fitness and wellness programs for youth in rural areas, providing access to training facilities, coaching, and mentorship to help young people develop discipline and healthy habits.",
    },
    {
      icon: Medal,
      title: "Talent Identification",
      description:
        "Scouting and nurturing sporting talent from grassroots level, providing training, equipment, and competitive opportunities to gifted athletes from economically disadvantaged backgrounds.",
    },
    {
      icon: Users,
      title: "Team Building Events",
      description:
        "Community sports events and team-building activities that foster social cohesion, leadership skills, and collaborative spirit among youth from diverse backgrounds and communities.",
    },
    {
      icon: Star,
      title: "Leadership Through Sports",
      description:
        "Programs that use sports as a vehicle for developing leadership qualities, decision-making skills, and resilience in young people, preparing them for challenges both on and off the field.",
    },
    {
      icon: Zap,
      title: "Youth Empowerment",
      description:
        "Comprehensive youth empowerment initiatives combining sports with life skills training, career guidance, and mentorship to help young people realize their full potential and contribute positively to society.",
    },
  ];

  return (
    <section id="sports" className="section-padding bg-background" ref={ref}>
      <div className="container-premium mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark dark:text-gold text-sm font-medium mb-4">
              Sports & Youth Development
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
              Nurturing Talent,{" "}
              <span className="text-gradient-royal">Building Character</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-5 sm:mb-8">
              Sports have the unique power to transform lives by building discipline,
              teamwork, and resilience. At Ansari Foundation Assam, our sports and
              youth development programs go beyond physical fitness. We use sports as a
              platform for character development, talent identification, and community
              building. By providing resources, training, and competitive opportunities,
              we aim to channel the energy of youth in rural Assam into productive and
              fulfilling pursuits that benefit both individuals and communities.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { value: "5+", label: "Tournaments Held" },
                { value: "200+", label: "Youth Engaged" },
                { value: "15+", label: "Villages Participated" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-2 sm:p-4 rounded-xl bg-gold/5 border border-gold/10">
                  <div className="text-lg sm:text-2xl font-heading font-bold text-gold">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Initiatives Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {initiatives.map((initiative, i) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-5 rounded-xl bg-card border border-border/50 hover:border-gold/30 hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                  <initiative.icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-heading font-semibold text-sm mb-1.5">{initiative.title}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
