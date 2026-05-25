"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, CheckCircle, FileText, Calendar, ArrowRight, UserCheck, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export function ScholarshipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const criteria = [
    {
      title: "Academic Merit",
      desc: "Deserving students with strong academic records in their previous examinations.",
    },
    {
      title: "Financial Need",
      desc: "Students belonging to economically weaker sections or underprivileged families in Assam.",
    },
    {
      title: "Eligible Courses",
      desc: "Open to students of all classes and courses, from school-level to higher education.",
    },
    {
      title: "Domicile of Assam",
      desc: "Applicants must be permanent residents of Assam, India.",
    },
  ];

  const steps = [
    {
      icon: FileText,
      title: "1. Fill Application",
      desc: "Click the Apply button and complete the Google Form with your details.",
    },
    {
      icon: UserCheck,
      title: "2. Document Submission",
      desc: "Upload previous marksheets, income certificate, and identity proof.",
    },
    {
      icon: Award,
      title: "3. Selection Process",
      desc: "Our committee reviews applications and interviews shortlisted candidates.",
    },
    {
      icon: GraduationCap,
      title: "4. Scholarship Award",
      desc: "Selected scholars receive direct financial aid and pairing with a mentor.",
    },
  ];

  return (
    <section
      id="scholarship"
      className="section-padding relative overflow-hidden bg-gradient-section"
      ref={ref}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-royal/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald/5 rounded-full blur-3xl -z-10" />

      <div className="container-premium mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold/15 text-gold-dark dark:text-gold-light text-sm font-semibold mb-4 border border-gold/20 animate-pulse">
              <GraduationCap className="w-4 h-4" />
              Applications Open for 2026-27
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4 text-royal dark:text-white"
          >
            Ansari Foundation <span className="text-gradient-royal">Scholarship Program</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed"
          >
            At Ansari Foundation Assam, we believe that economic constraints should never block a brilliant mind. 
            Our scholarship program provides financial aid and academic mentorship to students from underprivileged 
            backgrounds to help them complete their education.
          </motion.p>
        </div>

        {/* Highlighted Banner Call-to-Action Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-gold/30 bg-gradient-to-r from-royal to-royal-dark text-white p-6 sm:p-10 md:p-12 shadow-2xl mb-12 sm:mb-16 glow-royal group"
        >
          {/* Shimmer & Glow Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-gold/10 rounded-full blur-2xl" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-block px-3 py-1 rounded bg-gold/20 text-gold-light text-xs font-bold uppercase tracking-wider">
                Special Announcement
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold tracking-tight">
                Empower Your Educational Journey
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl">
                Are you a student in Assam facing financial hurdles in completing your studies? 
                Apply today for our annual scholarship fund and receive funding for tuition, books, and educational expenses.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-gold-light text-sm font-semibold">
                  <Calendar className="w-4 h-4" />
                  <span>Cycle: 2026-2027</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-light text-sm font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span>Form Status: Active</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold active:from-gold-dark active:to-gold text-gray-900 font-extrabold text-base px-8 py-7 rounded-xl shadow-xl shadow-gold/20 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <a
                  href={SITE_CONFIG.scholarshipUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 justify-center"
                >
                  Apply for Scholarship Now
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Eligibility & How to Apply Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start mb-12">
          {/* Eligibility Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-6 sm:p-8 rounded-2xl bg-card border border-border/80 shadow-md h-full relative"
          >
            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-6 text-royal dark:text-white flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-royal/10 text-royal flex items-center justify-center">
                <CheckCircle className="w-5 h-5" />
              </span>
              Eligibility Criteria
            </h3>
            <div className="space-y-6">
              {criteria.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald/10 text-emerald flex items-center justify-center font-bold text-xs mt-0.5">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* How to Apply Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 sm:p-8 rounded-2xl bg-card border border-border/80 shadow-md h-full relative"
          >
            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-6 text-royal dark:text-white flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-emerald/10 text-emerald flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </span>
              Application Process
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-background border border-border/50 hover:border-royal/20 transition-all hover:shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-lg bg-royal/5 text-royal flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-heading font-semibold text-xs sm:text-sm text-foreground mb-1">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground text-[11px] sm:text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Need Help Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="p-6 rounded-xl bg-background border border-border/60 max-w-2xl mx-auto text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5 text-royal font-medium dark:text-royal-light">
              <HelpCircle className="w-4 h-4" />
              Need Assistance?
            </span>
            <span className="hidden sm:block text-border">|</span>
            <span>Email us: <a href={`mailto:${SITE_CONFIG.email}`} className="text-foreground hover:underline font-medium">{SITE_CONFIG.email}</a></span>
            <span className="hidden sm:block text-border">|</span>
            <span>WhatsApp: <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline font-medium">{SITE_CONFIG.phone}</a></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
