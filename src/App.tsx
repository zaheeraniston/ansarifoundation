import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import { FloatingButtons } from "@/components/shared/floating-buttons";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { FounderSection } from "@/components/sections/founder-section";
import { MissionSection } from "@/components/sections/mission-section";
import { ImpactSection } from "@/components/sections/impact-section";
import { ProgramsSection } from "@/components/sections/programs-section";
import { EducationSection } from "@/components/sections/education-section";
import { HealthSection } from "@/components/sections/health-section";
import { SportsSection } from "@/components/sections/sports-section";
import { EnvironmentSection } from "@/components/sections/environment-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { EventsSection } from "@/components/sections/events-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { DonateSection } from "@/components/sections/donate-section";
import { VolunteerSection } from "@/components/sections/volunteer-section";
import { ContactSection } from "@/components/sections/contact-section";
import { FAQSection } from "@/components/sections/faq-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { ScholarshipSection } from "@/components/sections/scholarship-section";
import { ScholarshipPopup } from "@/components/shared/scholarship-popup";

import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background text-foreground font-sans antialiased">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <ScholarshipSection />
          <AboutSection />
          <FounderSection />
          <MissionSection />
          <ImpactSection />
          <ProgramsSection />
          <EducationSection />
          <HealthSection />
          <SportsSection />
          <EnvironmentSection />
          <GallerySection />
          <EventsSection />
          <TestimonialsSection />
          <DonateSection />
          <VolunteerSection />
          <ContactSection />
          <FAQSection />
          <NewsletterSection />
        </main>
        <Footer />
        <FloatingButtons />
        <ScholarshipPopup />
      </div>
      <Toaster />
    </>
  );
}
