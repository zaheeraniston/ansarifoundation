"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-gradient-section" ref={ref}>
      <div className="container-premium mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark dark:text-gold text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Voices of <span className="text-gradient-royal">Hope</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Hear from the people whose lives have been touched by our work. Their
            stories inspire us to keep pushing forward.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="card-premium p-5 sm:p-8 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-royal/10 group-hover:text-royal/20 transition-colors" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-royal to-emerald flex items-center justify-center text-white font-heading font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Stars */}
              <div className="flex gap-1 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
