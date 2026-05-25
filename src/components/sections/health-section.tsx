"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Droplets, ShieldCheck, Stethoscope, Syringe, HandHeart } from "lucide-react";

export function HealthSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const initiatives = [
    {
      icon: Syringe,
      title: "Blood Donation Drives",
      description:
        "Organizing regular blood donation camps in collaboration with local hospitals and health authorities, ensuring a steady supply of blood for emergency medical needs in rural communities.",
    },
    {
      icon: Stethoscope,
      title: "Free Health Camps",
      description:
        "Conducting comprehensive health check-up camps in remote villages, providing free medical consultations, basic treatments, and referrals to specialists for serious conditions.",
    },
    {
      icon: Droplets,
      title: "Clean Water Awareness",
      description:
        "Educating communities about the importance of clean drinking water, water purification methods, and advocating for improved water infrastructure in underserved areas of Assam.",
    },
    {
      icon: ShieldCheck,
      title: "Sanitation Programs",
      description:
        "Promoting proper sanitation practices, building community toilets, and conducting hygiene awareness campaigns to prevent waterborne diseases and improve public health outcomes.",
    },
    {
      icon: HandHeart,
      title: "Maternal & Child Health",
      description:
        "Programs focused on maternal health awareness, prenatal care, immunization drives, and child nutrition to reduce maternal and infant mortality rates in rural Assam.",
    },
    {
      icon: Heart,
      title: "Mental Health Awareness",
      description:
        "Breaking the stigma around mental health through awareness campaigns, counseling support, and community-based mental wellness programs in collaboration with healthcare professionals.",
    },
  ];

  return (
    <section
      id="health"
      className="section-padding bg-gradient-section relative"
      ref={ref}
    >
      <div className="container-premium mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Right Content (reversed order on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:order-2"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald/10 text-emerald dark:text-emerald-light text-sm font-medium mb-4">
              Health & Sanitation
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
              Healing Communities,{" "}
              <span className="text-gradient-emerald">Saving Lives</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-5 sm:mb-8">
              Health is a fundamental right, yet millions in rural Assam lack access
              to basic healthcare. Our health and sanitation programs are designed to
              bridge this critical gap by providing free medical services, promoting
              hygiene practices, and advocating for improved health infrastructure. We
              believe that healthy communities are the foundation of a prosperous
              society, and every initiative we undertake is aimed at ensuring that no
              one is deprived of essential healthcare.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { value: "10+", label: "Health Camps" },
                { value: "200+", label: "Blood Donors" },
                { value: "1000+", label: "Patients Treated" },
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
