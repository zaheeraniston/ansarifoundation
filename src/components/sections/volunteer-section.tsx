"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Users, CheckCircle2, ArrowRight, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function VolunteerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const benefits = [
    { icon: Heart, title: "Make a Real Difference", description: "Directly impact lives through hands-on community work and meaningful projects that create lasting change." },
    { icon: Users, title: "Join a Community", description: "Connect with like-minded individuals who share your passion for social change and community development." },
    { icon: Sparkles, title: "Develop New Skills", description: "Gain valuable experience in project management, community organizing, and leadership through practical engagement." },
  ];

  return (
    <section id="volunteer" className="section-padding bg-background" ref={ref}>
      <div className="container-premium mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald/10 text-emerald dark:text-emerald-light text-sm font-medium mb-4">
            <Users className="w-4 h-4 inline mr-1" />
            Join Our Team
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
            Become a <span className="text-gradient-emerald">Volunteer</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Your time and skills can create extraordinary impact. Join our growing
            family of volunteers and be the change you wish to see in the world.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="card-premium p-6 flex gap-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-emerald" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-1">{benefit.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Volunteer stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
              {[
                { value: "100+", label: "Active Volunteers" },
                { value: "25+", label: "Villages Served" },
                { value: "10+", label: "Events Monthly" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-2 sm:p-4 rounded-xl bg-emerald/5 border border-emerald/10">
                  <div className="text-lg sm:text-2xl font-heading font-bold text-emerald">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="card-premium p-5 sm:p-8"
          >
            <h3 className="font-heading font-bold text-xl mb-6">
              Volunteer Registration Form
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald" />
                </div>
                <h4 className="font-heading font-bold text-lg mb-2">Thank You!</h4>
                <p className="text-muted-foreground text-sm">
                  Your volunteer application has been submitted successfully. We will
                  contact you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="Enter your full name" required className="rounded-xl h-11" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required className="rounded-xl h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required className="rounded-xl h-11" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Your address" className="rounded-xl h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="skills">Skills & Interests</Label>
                  <Input id="skills" placeholder="e.g., Teaching, Healthcare, Event Management" className="rounded-xl h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reason">Why do you want to join us? *</Label>
                  <Textarea
                    id="reason"
                    placeholder="Tell us about your motivation and how you'd like to contribute..."
                    required
                    className="rounded-xl min-h-[100px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald to-emerald-light hover:from-emerald-light hover:to-emerald text-white font-bold py-6 rounded-xl shadow-lg shadow-emerald/25 hover:shadow-emerald/40 transition-all"
                >
                  Submit Application
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
