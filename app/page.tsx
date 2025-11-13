"use client";
import AboutSection from "@/components/sections/AboutSection";
import LandingArea from "@/components/sections/LandingSection";
import MyWorkSection from "@/components/sections/MyWorkSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div>
      <LandingArea />
      <MyWorkSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
