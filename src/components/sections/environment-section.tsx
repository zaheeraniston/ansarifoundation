"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, TreePine, Droplets, Recycle, Wind, Sun } from "lucide-react";

export function EnvironmentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const initiatives = [
    {
      icon: TreePine,
      title: "Tree Plantation Drives",
      description:
        "Large-scale tree plantation campaigns across villages and public spaces in Assam, engaging communities in creating green cover, combating deforestation, and building a sustainable environment for future generations.",
    },
    {
      icon: Droplets,
      title: "Clean Water Initiatives",
      description:
        "Programs focused on ensuring access to clean drinking water for rural communities, including water purification systems, well maintenance, and advocacy for improved water infrastructure and conservation.",
    },
    {
      icon: Recycle,
      title: "Waste Management",
      description:
        "Community-based waste management and recycling programs that educate citizens about proper waste disposal, reduce pollution, and create sustainable waste management systems in rural and semi-urban areas.",
    },
    {
      icon: Wind,
      title: "Climate Awareness",
      description:
        "Educating communities about climate change, its local impacts, and adaptation strategies through workshops, campaigns, and community engagement programs designed for grassroots understanding and action.",
    },
    {
      icon: Sun,
      title: "Renewable Energy Advocacy",
      description:
        "Promoting adoption of renewable energy solutions like solar power in rural communities, reducing dependence on fossil fuels and creating sustainable energy access for schools and community centers.",
    },
    {
      icon: Leaf,
      title: "Biodiversity Conservation",
      description:
        "Programs to protect local biodiversity, preserve natural habitats, and promote sustainable agricultural practices that work in harmony with the environment and protect Assam's unique ecological heritage.",
    },
  ];

  return (
    <section
      id="environment"
      className="section-padding bg-gradient-section relative"
      ref={ref}
    >
      <div className="container-premium mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Right Content (reversed) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:order-2"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald/10 text-emerald dark:text-emerald-light text-sm font-medium mb-4">
              Environmental Awareness
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
              Protecting Our{" "}
              <span className="text-gradient-emerald">Planet</span>, Securing Our{" "}
              <span className="text-gradient-royal">Future</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-5 sm:mb-8">
              Assam is home to some of India&apos;s most biodiverse ecosystems, and
              protecting this natural heritage is a responsibility we take seriously.
              Our environmental programs address the urgent challenges of climate
              change, deforestation, water pollution, and waste management through a
              combination of grassroots action, community education, and advocacy for
              sustainable policies. We believe that environmental protection and
              community development must go hand in hand, creating solutions that are
              both ecologically sound and socially equitable.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { value: "500+", label: "Trees Planted" },
                { value: "10+", label: "Villages Covered" },
                { value: "8+", label: "Campaigns Run" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-2 sm:p-4 rounded-xl bg-emerald/5 border border-emerald/10">
                  <div className="text-lg sm:text-2xl font-heading font-bold text-emerald">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Left - Initiatives Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-1">
            {initiatives.map((initiative, i) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-5 rounded-xl bg-card border border-border/50 hover:border-emerald/30 hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald/10 flex items-center justify-center mb-3 group-hover:bg-emerald/20 transition-colors">
                  <initiative.icon className="w-5 h-5 text-emerald" />
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
