"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Camera, X, ChevronLeft, ChevronRight, Heart, GraduationCap, TreePine, Trophy, Users, Droplets, BookOpen, Syringe } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  GraduationCap,
  TreePine,
  Trophy,
  Users,
  Droplets,
  BookOpen,
  Syringe,
};

const galleryItems = [
  {
    title: "Community Health Camp",
    category: "Health",
    color: "from-rose-500/20 to-rose-600/20",
    iconColor: "text-rose-500",
    icon: "Heart",
  },
  {
    title: "Education Initiative",
    category: "Education",
    color: "from-royal/20 to-royal-light/20",
    iconColor: "text-royal",
    icon: "GraduationCap",
  },
  {
    title: "Tree Plantation Drive",
    category: "Environment",
    color: "from-emerald/20 to-emerald-light/20",
    iconColor: "text-emerald",
    icon: "TreePine",
  },
  {
    title: "Youth Sports Tournament",
    category: "Sports",
    color: "from-gold/20 to-gold-light/20",
    iconColor: "text-gold",
    icon: "Trophy",
  },
  {
    title: "Volunteer Training",
    category: "Community",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-500",
    icon: "Users",
  },
  {
    title: "Clean Water Program",
    category: "Environment",
    color: "from-cyan-500/20 to-cyan-600/20",
    iconColor: "text-cyan-500",
    icon: "Droplets",
  },
  {
    title: "Literacy Campaign",
    category: "Education",
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-500",
    icon: "BookOpen",
  },
  {
    title: "Blood Donation Camp",
    category: "Health",
    color: "from-red-500/20 to-red-600/20",
    iconColor: "text-red-500",
    icon: "Syringe",
  },
];

const categories = ["All", "Education", "Health", "Environment", "Sports", "Community"];

export function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding bg-background" ref={ref}>
      <div className="container-premium mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-royal/10 text-royal dark:text-royal-light text-sm font-medium mb-4">
            <Camera className="w-4 h-4 inline mr-1" />
            Photo Gallery
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Moments of <span className="text-gradient-royal">Impact</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            A visual journey through our programs, events, and the communities we serve.
            Every image tells a story of hope, resilience, and transformation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all min-h-[44px] ${
                activeCategory === cat
                  ? "bg-royal text-white shadow-md shadow-royal/25"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => {
            const Icon = iconMap[item.icon] || Camera;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setLightbox(i)}
                className="group cursor-pointer relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color}`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <Icon className={`w-10 h-10 mb-3 ${item.iconColor}`} />
                  <h4 className="font-heading font-semibold text-sm">{item.title}</h4>
                  <span className="text-xs text-muted-foreground mt-1">{item.category}</span>
                </div>
                <div className="absolute inset-0 bg-royal/0 group-hover:bg-royal/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Camera className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setLightbox(null)}
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <button
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(lightbox > 0 ? lightbox - 1 : filtered.length - 1);
              }}
            >
              <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>
            <button
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(lightbox < filtered.length - 1 ? lightbox + 1 : 0);
              }}
            >
              <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>
            <div
              className="max-w-sm sm:max-w-md md:max-w-2xl w-full aspect-square rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`w-full h-full bg-gradient-to-br ${filtered[lightbox]?.color || ""} flex flex-col items-center justify-center`}>
                {(() => {
                  const LIcon = iconMap[filtered[lightbox]?.icon || ""] || Camera;
                  return <LIcon className={`w-16 h-16 mb-4 ${filtered[lightbox]?.iconColor || "text-white"}`} />;
                })()}
                <h3 className="text-white font-heading font-bold text-xl">
                  {filtered[lightbox]?.title}
                </h3>
                <p className="text-white/60 mt-2">{filtered[lightbox]?.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
