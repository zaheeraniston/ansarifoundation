"use client";

import { motion } from "framer-motion";
import { MessageCircle, Heart, GraduationCap } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da851] text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Floating Donate Button (mobile) */}
      <motion.a
        href="#donate"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#donate")?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 md:hidden w-14 h-14 rounded-full bg-gradient-to-r from-royal to-emerald text-white shadow-xl hover:shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-105"
        aria-label="Donate Now"
      >
        <Heart className="w-6 h-6" />
      </motion.a>

      {/* Floating Scholarship Button */}
      <motion.a
        href="#scholarship"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#scholarship")?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3, type: "spring", stiffness: 200 }}
        className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 md:bottom-6 md:right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold hover:to-gold-light text-gray-900 shadow-xl hover:shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-105 border border-gold-light/30 animate-pulse-glow cursor-pointer"
        aria-label="Apply for Scholarship"
      >
        <GraduationCap className="w-6 h-6" />
      </motion.a>
    </>
  );
}
