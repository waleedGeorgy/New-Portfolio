"use client";
import AboutSection from "@/components/sections/AboutSection";
import MyWorkSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactsSection from "@/components/sections/ContactsSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <AboutSection />
      <ExperienceSection />
      <MyWorkSection />
      <ContactsSection />
      <Footer />
    </main>
  );
}
