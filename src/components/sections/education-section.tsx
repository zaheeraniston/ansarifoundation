"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Library, PenTool, School, Lightbulb } from "lucide-react";

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const initiatives = [
    {
      icon: BookOpen,
      title: "Literacy Programs",
      description:
        "Comprehensive literacy programs targeting both children and adults in rural Assam, providing basic reading, writing, and numeracy skills that form the foundation for lifelong learning and personal development.",
    },
    {
      icon: School,
      title: "Educational Infrastructure",
      description:
        "Building and upgrading schools, libraries, and learning centers in underserved areas. We provide books, computers, and modern teaching tools to create conducive learning environments for students.",
    },
    {
      icon: PenTool,
      title: "Skill Development",
      description:
        "Vocational training and skill development programs that equip youth with practical skills for employment and entrepreneurship, bridging the gap between education and economic opportunity.",
    },
    {
      icon: Library,
      title: "Library Initiatives",
      description:
        "Establishing community libraries and digital learning centers that provide access to books, educational resources, and technology for communities that previously had limited access to knowledge.",
    },
    {
      icon: Lightbulb,
      title: "Awareness Campaigns",
      description:
        "Conducting awareness campaigns on the importance of education, particularly for girls and marginalized communities, working to change attitudes and increase school enrollment rates across villages.",
    },
    {
      icon: GraduationCap,
      title: "Scholarship Support",
      description:
        "Providing financial assistance and scholarships to deserving students from underprivileged backgrounds, ensuring that economic constraints never become a barrier to quality education and achievement.",
    },
  ];

  return (
    <section id="education" className="section-padding bg-background" ref={ref}>
      <div className="container-premium mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-royal/10 text-royal dark:text-royal-light text-sm font-medium mb-4">
              Education Initiatives
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
              Empowering Through{" "}
              <span className="text-gradient-royal">Education</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-5 sm:mb-8">
              Education is the most powerful tool for transforming lives and
              communities. At Ansari Foundation Assam, we believe that every child
              deserves access to quality education, regardless of their socio-economic
              background or geographic location. Our comprehensive education programs
              span from early childhood literacy to adult education and vocational
              training, creating a complete ecosystem of learning and empowerment.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { value: "10+", label: "Schools Supported" },
                { value: "500+", label: "Students Enrolled" },
                { value: "5", label: "Libraries Built" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-2 sm:p-4 rounded-xl bg-royal/5 border border-royal/10">
                  <div className="text-lg sm:text-2xl font-heading font-bold text-royal">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Initiatives Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {initiatives.map((initiative, i) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-5 rounded-xl bg-card border border-border/50 hover:border-royal/30 hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-royal/10 flex items-center justify-center mb-3 group-hover:bg-royal/20 transition-colors">
                  <initiative.icon className="w-5 h-5 text-royal" />
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
