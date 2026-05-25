"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Heart,
  Trophy,
  Leaf,
  Home,
  Users,
} from "lucide-react";
import { PROGRAMS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Heart,
  Trophy,
  Leaf,
  Home,
  Users,
};

const colorStyles: Record<string, { gradient: string; iconBg: string; iconText: string; border: string }> = {
  royal: {
    gradient: "from-royal to-royal-light",
    iconBg: "bg-royal/10",
    iconText: "text-royal",
    border: "hover:border-royal/30",
  },
  emerald: {
    gradient: "from-emerald to-emerald-light",
    iconBg: "bg-emerald/10",
    iconText: "text-emerald",
    border: "hover:border-emerald/30",
  },
  gold: {
    gradient: "from-gold to-gold-light",
    iconBg: "bg-gold/10",
    iconText: "text-gold",
    border: "hover:border-gold/30",
  },
};

export function ProgramsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="programs"
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-royal/10 text-royal dark:text-royal-light text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Our <span className="text-gradient-royal">Programs</span> &amp;{" "}
            <span className="text-gradient-emerald">Activities</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Through diverse programs spanning education, health, environment, and
            community development, we create lasting impact across Assam.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program, i) => {
            const Icon = iconMap[program.icon] || Users;
            const styles = colorStyles[program.color] || colorStyles.royal;

            return (
              <motion.a
                key={program.title}
                href={program.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(program.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className={`card-premium p-6 group cursor-pointer ${styles.border} relative overflow-hidden`}
              >
                {/* Top gradient line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${styles.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                <div
                  className={`w-14 h-14 rounded-xl ${styles.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-7 h-7 ${styles.iconText}`} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-royal dark:group-hover:text-royal-light transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {program.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-royal dark:text-royal-light text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More →
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
