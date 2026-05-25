"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export function ScholarshipPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a small delay (1 second) when the website opens
    const isDismissed = sessionStorage.getItem("scholarship-popup-dismissed");
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("scholarship-popup-dismissed", "true");
  };

  const handleApply = () => {
    window.open(SITE_CONFIG.scholarshipUrl, "_blank", "noopener,noreferrer");
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg bg-card border border-gold/30 rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white hover:text-gold transition-colors z-20"
              aria-label="Close Announcement"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header with Background Gradient */}
            <div className="relative h-44 bg-gradient-to-br from-royal via-royal-dark to-[#061a40] flex flex-col items-center justify-center text-center p-6 text-white">
              {/* Animated decorative shapes */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-gold rounded-full blur-xl" />
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-emerald rounded-full blur-xl" />
              </div>

              {/* Glowing Icon */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-gold to-gold-light text-gray-900 flex items-center justify-center shadow-lg shadow-gold/20 mb-3 border border-white/20"
              >
                <GraduationCap className="w-9 h-9" />
              </motion.div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/25 text-[10px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-gold" />
                Scholarship Open
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-5 text-center">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-royal dark:text-white leading-tight">
                  Ansari Foundation Scholarship 2026-27
                </h3>
                <p className="text-emerald font-semibold text-xs sm:text-sm tracking-wide">
                  EDUCATION • ENDURANCE • EXPOSURE
                </p>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                We are offering financial assistance and mentorship to underprivileged and meritorious students of Assam. 
                Don't let financial barriers stand in the way of your education!
              </p>

              {/* Highlight list */}
              <div className="bg-royal/5 dark:bg-royal/10 border border-royal/10 rounded-xl p-4 text-left space-y-2 text-xs sm:text-sm">
                <div className="flex items-start gap-2 text-foreground">
                  <span className="text-emerald mt-0.5 font-bold">✓</span>
                  <span><strong>Eligibility:</strong> Open to students of all classes/courses in Assam.</span>
                </div>
                <div className="flex items-start gap-2 text-foreground">
                  <span className="text-emerald mt-0.5 font-bold">✓</span>
                  <span><strong>Requirements:</strong> Past academic marksheets & income details.</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleApply}
                  className="flex-1 bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-gray-900 font-extrabold text-sm py-6 rounded-xl shadow-lg shadow-gold/25 hover:shadow-gold/40 transition-all"
                >
                  Apply Online Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  onClick={handleClose}
                  variant="outline"
                  className="sm:w-32 border-border/80 text-muted-foreground hover:text-foreground py-6 rounded-xl hover:bg-muted"
                >
                  Later
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
