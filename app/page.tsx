"use client";
import AboutSection from "@/components/sections/AboutSection";
import LandingArea from "@/components/sections/LandingSection";
import MyWorkSection from "@/components/sections/MyWorkSection";
import ContactMe from "@/components/sections/ContactMe";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div>
      <LandingArea /> 
      <MyWorkSection />
      <AboutSection />
      <ContactMe />
      <Footer />
    </div>
  );
}
