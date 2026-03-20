import { Navbar } from "@/sections/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { SkillStrip } from "@/sections/SkillStrip";
import { ServicesSection } from "@/sections/ServicesSection";
import { AboutSection } from "@/sections/AboutSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen relative selection:bg-accent/30">
      <Navbar />

      <main>
        <HeroSection />
        <SkillStrip />

        {/* Services & About Section combined lower section */}
        <section id="about" className="py-24 relative border-b border-card-border overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

          <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row gap-16 md:gap-24 relative z-10">
              <ServicesSection />
              <AboutSection />
            </div>
          </div>
        </section>

        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
