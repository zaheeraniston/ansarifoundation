"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <section className="section-padding bg-gradient-to-r from-royal to-emerald relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-premium mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-gold" />
          </div>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4">
            Stay Updated with Our Work
          </h2>
          <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-6 sm:mb-8">
            Subscribe to our newsletter and get the latest updates on our programs,
            events, and impact stories delivered directly to your inbox.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 border border-white/20"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-light" />
              <span className="text-white font-medium">
                Thank you for subscribing!
              </span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl h-12 flex-1"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-gray-900 font-bold px-6 h-12 rounded-xl shadow-lg shadow-gold/25"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
