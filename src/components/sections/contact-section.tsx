"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        `Village: ${SITE_CONFIG.address.village}`,
        `PO: ${SITE_CONFIG.address.po}, PS: ${SITE_CONFIG.address.ps}`,
        `District: ${SITE_CONFIG.address.district}, ${SITE_CONFIG.address.state}`,
        `PIN: ${SITE_CONFIG.address.pin}, ${SITE_CONFIG.address.country}`,
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [SITE_CONFIG.phone],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [SITE_CONFIG.email],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"],
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-section-alt relative"
      ref={ref}
    >
      <div className="container-premium mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-royal/10 text-royal dark:text-royal-light text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Contact <span className="text-gradient-royal">Us</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-lg max-w-2xl mx-auto">
            We would love to hear from you. Whether you have a question, feedback, or
            want to get involved, reach out to us anytime.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="card-premium p-5 flex gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-royal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-royal/20 transition-colors">
                  <info.icon className="w-5 h-5 text-royal" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-sm mb-1">{info.title}</h4>
                  {info.details.map((detail, j) => (
                    <p key={j} className="text-muted-foreground text-xs leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="card-premium p-5"
            >
              <h4 className="font-heading font-semibold text-sm mb-4">Follow Us</h4>
              <div className="flex gap-2">
                {[
                  { name: "Facebook", href: SITE_CONFIG.social.facebook, color: "hover:bg-blue-600", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                  { name: "Twitter", href: SITE_CONFIG.social.twitter, color: "hover:bg-sky-500", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                  { name: "Instagram", href: SITE_CONFIG.social.instagram, color: "hover:bg-pink-600", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                  { name: "YouTube", href: SITE_CONFIG.social.youtube, color: "hover:bg-red-600", path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
                  { name: "LinkedIn", href: SITE_CONFIG.social.linkedin, color: "hover:bg-blue-700", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                ].map(({ name, href, color, path }, i) => (
                  <a
                    key={i}
                    href={href}
                    aria-label={name}
                    className={`w-11 h-11 rounded-xl bg-muted/50 flex items-center justify-center transition-all hover:text-white active:scale-95 ${color}`}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 card-premium p-5 sm:p-8"
          >
            <h3 className="font-heading font-bold text-xl mb-6">Send Us a Message</h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald" />
                </div>
                <h4 className="font-heading font-bold text-lg mb-2">Message Sent!</h4>
                <p className="text-muted-foreground text-sm">
                  Thank you for reaching out. We will get back to you as soon as
                  possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Full Name *</Label>
                    <Input id="contact-name" placeholder="Your name" required className="rounded-xl h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input id="contact-email" type="email" placeholder="your@email.com" required className="rounded-xl h-11" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone</Label>
                    <Input id="contact-phone" type="tel" placeholder="+91 XXXXX XXXXX" className="rounded-xl h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">Subject *</Label>
                    <Input id="contact-subject" placeholder="How can we help?" required className="rounded-xl h-11" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message *</Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Write your message here..."
                    required
                    className="rounded-xl min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-royal to-royal-light hover:from-royal-light hover:to-royal text-white font-bold py-6 px-8 rounded-xl shadow-lg shadow-royal/25 hover:shadow-royal/40 transition-all"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 rounded-3xl overflow-hidden border border-border/50"
        >
          <div className="bg-muted/50 p-8 text-center">
            <MapPin className="w-8 h-8 text-royal mx-auto mb-3" />
            <h3 className="font-heading font-bold text-lg mb-2">Find Us on the Map</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Kokila Nayapara, Bongaigaon, Assam - 783392
            </p>
            <a
              href="https://www.google.com/maps/search/Kokila+Nayapara+Abhayapuri+Bongaigaon+Assam+783392"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-royal text-white text-sm font-medium hover:bg-royal-light transition-colors shadow-lg shadow-royal/25"
            >
              <MapPin className="w-4 h-4" />
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
