"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Home, Heart, Activity } from "lucide-react";
import { IMPACT_STATS } from "@/lib/constants";

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
  isInView,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const iconMap: Record<string, React.ElementType> = {
    Users,
    Home,
    Heart,
    Activity,
  };

  const colorMap: Record<string, { bg: string; text: string }> = {
    Users: { bg: "bg-royal/10", text: "text-royal" },
    Home: { bg: "bg-emerald/10", text: "text-emerald" },
    Heart: { bg: "bg-rose-500/10", text: "text-rose-500" },
    Activity: { bg: "bg-gold/10", text: "text-gold" },
  };

  return (
    <section
      id="impact"
      className="section-padding bg-gradient-to-br from-royal via-royal-dark to-[#061a40] relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container-premium mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-gold text-sm font-medium mb-4 border border-white/20">
            Our Impact
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6">
            Numbers That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-emerald-light">
              Speak Volumes
            </span>
          </h2>
          <p className="text-white/70 text-sm md:text-lg max-w-2xl mx-auto">
            Every number represents a life touched, a community strengthened, and a
            future brightened through our collective efforts.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {IMPACT_STATS.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Activity;
            const colors = colorMap[stat.icon] || { bg: "bg-white/10", text: "text-white" };

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="text-center p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 active:bg-white/15 transition-all group"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl ${colors.bg} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${colors.text}`} />
                </div>
                <div className="text-xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-1 sm:mb-2">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    isInView={isInView}
                  />
                </div>
                <p className="text-white/60 text-[11px] sm:text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Impact Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white/5 border border-white/10 text-center sm:text-left">
            <Heart className="w-6 h-6 text-gold" />
            <p className="text-white/80 font-heading font-medium">
              Every contribution counts. Every life matters. Together, we make the
              difference.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
