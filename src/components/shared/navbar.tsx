"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, GraduationCap, Sparkles } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPos = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const element = section as HTMLElement;
          if (
            scrollPos >= element.offsetTop &&
            scrollPos < element.offsetTop + element.offsetHeight
          ) {
            setActiveSection(NAV_LINKS[index].href.replace("#", ""));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = useCallback((href: string) => {
    // Close menu first
    setIsOpen(false);

    // Small delay to let the menu close animation start, then scroll
    requestAnimationFrame(() => {
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      }
    });
  }, []);

  return (
    <>
      {/* Scholarship Announcement Banner */}
      <div className="bg-gradient-to-r from-royal via-emerald to-gold text-white text-xs sm:text-sm font-semibold py-2 px-4 shadow-md relative z-[60] border-b border-white/10 animate-pulse-glow">
        <div className="container-premium mx-auto flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
          <div className="flex items-center gap-2 flex-1 justify-center sm:justify-start">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
            <span className="tracking-wide text-[11px] sm:text-xs md:text-sm leading-tight text-center sm:text-left">
              🎓 <strong>Apply for Scholarship 2026-27</strong> is now open! Meritorious & underprivileged students can apply online.
            </span>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:block">
            <a
              href={SITE_CONFIG.scholarshipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-white/20 hover:bg-white/35 text-white hover:text-gold px-3 py-1 rounded text-xs font-bold transition-all border border-white/20 whitespace-nowrap active:scale-95 cursor-pointer"
            >
              Apply Now
              <Sparkles className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Top bar */}
      <div className="hidden xl:block bg-royal text-white text-sm">
        <div className="container-premium mx-auto px-6 flex items-center justify-between py-2">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              {SITE_CONFIG.email}
            </a>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {SITE_CONFIG.phone}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/70">Registered under Societies Registration Act XXI of 1860</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg shadow-royal/5 dark:shadow-royal/20 border-b border-border/50"
            : "bg-white dark:bg-gray-900 border-b border-transparent"
        }`}
      >
        <div className="container-premium mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center gap-2 sm:gap-3 group flex-shrink-0"
            >
              <img
                src="/logo.png"
                alt="Ansari Foundation Assam"
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl object-contain p-0.5 flex-shrink-0"
              />
              <div className="flex-shrink-0">
                <h1 className="text-royal dark:text-white font-heading font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-none sm:leading-tight whitespace-nowrap">
                  Ansari Foundation
                </h1>
                <p className="text-emerald dark:text-emerald-light text-[8px] sm:text-[10px] md:text-xs font-semibold tracking-wider whitespace-nowrap mt-0.5 sm:mt-1">
                  EDUCATION • ENDURANCE • EXPOSURE
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    link.label === "Scholarship"
                      ? "bg-gold/15 text-gold-dark dark:text-gold-light border border-gold/30 hover:bg-gold/25 shadow-sm shadow-gold/5 flex items-center gap-1 font-semibold"
                      : activeSection === link.href.replace("#", "")
                      ? "bg-royal text-white shadow-md shadow-royal/25"
                      : "text-foreground/70 hover:text-royal dark:hover:text-white hover:bg-royal/5 dark:hover:bg-royal/10"
                  }`}
                >
                  {link.label}
                  {link.label === "Scholarship" && <GraduationCap className="w-4 h-4 text-gold" />}
                </a>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <Button
                asChild
                className="hidden md:flex bg-gradient-to-r from-royal to-royal-light hover:from-royal-light hover:to-royal text-white shadow-lg shadow-royal/25 hover:shadow-royal/40 transition-all"
              >
                <a href="#donate" onClick={(e) => { e.preventDefault(); handleNavClick("#donate"); }}>
                  Donate Now
                </a>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="xl:hidden rounded-full min-w-[44px] min-h-[44px]"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="xl:hidden bg-white dark:bg-gray-900 border-t border-border/50"
            >
              <div className="px-4 py-3 space-y-1">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all min-h-[44px] flex items-center justify-between touch-manipulation ${
                        link.label === "Scholarship"
                          ? "bg-gold/15 text-gold-dark dark:text-gold-light border border-gold/30 font-semibold"
                          : activeSection === link.href.replace("#", "")
                          ? "bg-royal text-white shadow-md"
                          : "text-foreground/70 hover:bg-royal/5 active:bg-royal/10 hover:text-royal"
                      }`}
                    >
                      <span>{link.label}</span>
                      {link.label === "Scholarship" && <GraduationCap className="w-5 h-5 text-gold-dark dark:text-gold-light" />}
                    </button>
                  </motion.div>
                ))}
                <div className="pt-2 pb-1">
                  <button
                    onClick={() => handleNavClick("#donate")}
                    className="w-full min-h-[44px] flex items-center justify-center px-4 py-3 rounded-xl bg-gradient-to-r from-royal to-royal-light text-white text-sm font-bold shadow-lg shadow-royal/25 touch-manipulation"
                  >
                    Donate Now
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll Progress Bar */}
      <ScrollProgress />
    </>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (window.scrollY / totalHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-royal via-emerald to-gold transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
