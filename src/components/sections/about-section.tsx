"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, BookOpen, Globe, Heart, Users } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description:
        "We maintain complete transparency in all our operations, ensuring every donation and resource reaches those who need it most, with full accountability and regular reporting.",
    },
    {
      icon: Heart,
      title: "Compassion",
      description:
        "Every initiative we undertake is driven by genuine compassion for the communities we serve, ensuring our programs are designed with empathy and understanding at their core.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in every program and initiative, implementing best practices and maintaining the highest standards of quality in all our social welfare activities.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We believe in the power of community-driven change, working hand-in-hand with local populations to create sustainable solutions that empower rather than create dependency.",
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description:
        "Our programs serve all communities regardless of background, caste, creed, or religion. We are committed to creating an inclusive environment where everyone has equal access to opportunities.",
    },
    {
      icon: BookOpen,
      title: "Education",
      description:
        "Education is the cornerstone of all our initiatives. We believe that knowledge and learning are the most powerful tools for transforming lives and building stronger communities.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-premium mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-royal/10 text-royal dark:text-royal-light text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Building a{" "}
            <span className="text-gradient-royal">Brighter Future</span> for
            Assam
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
            Founded in 2025 by Hafiz Adv. Elias Hossen Ansari, undergoing Barrister
            Training at The Honorable Society of Lincoln's Inn in London,
            Ansari Foundation Assam was established with a profound vision to uplift
            society through education, humanity, awareness, and sustainable development.
            Our foundation is registered under the Societies Registration Act XXI of
            1860, operating with full legal compliance and unwavering dedication to
            the people of Assam.
          </p>
        </motion.div>

        {/* About Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-royal/5 to-emerald/5 dark:from-royal/10 dark:to-emerald/10 p-4 sm:p-8 border border-border/50">
              <div className="max-w-[360px] sm:max-w-lg mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br from-royal/10 via-transparent to-emerald/10 flex items-center justify-center relative py-8 sm:py-12">
                <div className="absolute inset-0 bg-gradient-to-t from-royal/20 to-transparent rounded-2xl" />
                <div className="text-center relative z-10">
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto mb-5 sm:mb-7 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden p-4 sm:p-5"
                  >
                    <img
                      src="/logo.png"
                      alt="Ansari Foundation Assam"
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </motion.div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl mb-2">
                    Est. {SITE_CONFIG.founded}
                  </h3>
                  <p className="text-muted-foreground">
                    {SITE_CONFIG.address.district}, {SITE_CONFIG.address.state}
                  </p>
                </div>
              </div>

              {/* Registration badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-emerald/10 border border-emerald/20">
                <p className="text-emerald text-xs font-medium">Registered NGO</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-heading font-bold text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">
              Our Story of{" "}
              <span className="text-emerald">Hope & Dedication</span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ansari Foundation Assam was born from a deep-rooted belief that every
                individual, regardless of their circumstances, deserves access to
                education, healthcare, clean water, and opportunities for growth. Our
                founder, Hafiz Adv. Elias Hossen Ansari, witnessed firsthand the challenges
                facing rural communities in Assam and committed himself to creating
                lasting, meaningful change.
              </p>
              <p>
                Based in Bongaigaon district, our foundation works across multiple
                domains including education, health and sanitation, sports and youth
                development, environmental protection, rural development, and social
                welfare. We believe that sustainable development requires a holistic
                approach that addresses the interconnected challenges facing communities.
              </p>
              <p>
                With a growing team of dedicated volunteers and supporters, we are
                expanding our reach to more villages and communities across Assam,
                bringing hope, resources, and opportunities to those who need them most.
                Every program we run is designed with long-term impact in mind, ensuring
                that the benefits continue for generations to come.
              </p>
            </div>

            {/* Key facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8">
              {[
                { label: "Registered Under", value: "Societies Act XXI, 1860" },
                { label: "Founded", value: "2025" },
                { label: "District", value: "Bongaigaon, Assam" },
                { label: "Programs", value: "15+ Active" },
              ].map((fact, i) => (
                <div key={i} className="p-3 sm:p-4 rounded-xl bg-muted/50 border border-border/50">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {fact.label}
                  </p>
                  <p className="font-heading font-semibold text-sm">{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="font-heading font-bold text-2xl md:text-3xl text-center mb-12"
          >
            Our Core <span className="text-gradient-royal">Values</span>
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="card-premium p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-royal/10 flex items-center justify-center mb-4 group-hover:bg-royal/20 transition-colors">
                  <value.icon className="w-6 h-6 text-royal" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
