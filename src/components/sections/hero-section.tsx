"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Users, ChevronDown, Phone, MapPin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-royal via-royal-dark to-[#061a40]" />

      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full border border-white/5"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full border border-white/5"
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/3 w-2 h-2 bg-white/30 rounded-full"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-2/3 right-1/3 w-3 h-3 bg-gold/20 rounded-full"
        />
        <motion.div
          animate={{ x: [-15, 15, -15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-emerald/30 rounded-full"
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative container-premium mx-auto px-4 md:px-6 py-16 sm:py-20 md:py-0 md:min-h-screen md:flex md:items-center md:justify-center">
        <div className="flex flex-col items-center text-center">
          {/* Tagline above logo */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight mb-6 sm:mb-8 md:mb-10 tracking-wider"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-light to-emerald">
              EDUCATION
            </span>{" "}
            <span className="text-white/40">•</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold">
              ENDURANCE
            </span>{" "}
            <span className="text-white/40">•</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-light to-white">
              EXPOSURE
            </span>
          </motion.h1>

          {/* Big Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
            className="relative mb-8 sm:mb-10 md:mb-12"
          >
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-emerald/10 to-royal/20 rounded-full blur-3xl scale-110" />
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[24rem] lg:h-[24rem] xl:w-[28rem] xl:h-[28rem] rounded-3xl overflow-hidden p-3 sm:p-4 md:p-6"
            >
              <img
                src="/logo.png"
                alt="Ansari Foundation Assam"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Foundation Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-3 sm:mb-4"
          >
            Ansari Foundation Assam
          </motion.h2>

          {/* Badges Container */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Registered NGO &mdash; Assam, India
              </span>
            </motion.div>

            <motion.a
              href="#scholarship"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#scholarship")?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 hover:bg-gold/30 border border-gold/40 cursor-pointer hover:scale-105 active:scale-95 transition-all animate-pulse-glow"
            >
              <GraduationCap className="w-4 h-4 text-gold animate-bounce" />
              <span className="text-gold-light text-xs sm:text-sm font-bold tracking-wide">
                Scholarship Applications Open &rarr;
              </span>
            </motion.a>
          </div>

          {/* Phone & Address */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 mb-6 sm:mb-8"
          >
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 text-white/80 hover:text-white text-xs sm:text-sm transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold" />
              <span className="font-medium">{SITE_CONFIG.phone}</span>
            </a>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
            <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm">
              <MapPin className="w-3.5 h-3.5 text-emerald flex-shrink-0" />
              <span>Kokila Nayapara, Bongaigaon, Assam &mdash; 783392</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-white/80 text-sm sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 max-w-2xl"
          >
            {SITE_CONFIG.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14 w-full sm:w-auto justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-light to-emerald hover:from-emerald hover:to-emerald-light text-white font-extrabold text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-xl shadow-xl shadow-emerald/20 hover:shadow-emerald/35 hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto justify-center border border-white/10"
            >
              <a href="#scholarship" onClick={(e) => { e.preventDefault(); document.querySelector("#scholarship")?.scrollIntoView({ behavior: "smooth" }); }}>
                <GraduationCap className="w-5 h-5 mr-2 text-white animate-bounce" />
                Apply for Scholarship
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold active:from-gold-dark active:to-gold text-gray-900 font-bold text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-xl shadow-xl shadow-gold/25 hover:shadow-gold/40 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <a href="#donate" onClick={(e) => { e.preventDefault(); document.querySelector("#donate")?.scrollIntoView({ behavior: "smooth" }); }}>
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 active:bg-white/5 font-semibold text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-xl backdrop-blur-sm transition-all w-full sm:w-auto justify-center"
            >
              <a href="#volunteer" onClick={(e) => { e.preventDefault(); document.querySelector("#volunteer")?.scrollIntoView({ behavior: "smooth" }); }}>
                <Users className="w-5 h-5 mr-2" />
                Join As Volunteer
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 w-full max-w-lg sm:max-w-xl"
          >
            {[
              { value: "5000+", label: "Lives Impacted" },
              { value: "25+", label: "Villages Reached" },
              { value: "15+", label: "Active Programs" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="text-xl sm:text-3xl md:text-4xl font-heading font-bold text-gold">
                  {stat.value}
                </div>
                <div className="text-white/60 text-[10px] sm:text-xs md:text-sm mt-1 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-white/40" />
      </motion.div>
    </section>
  );
}
