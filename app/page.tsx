"use client";
import AboutSection from "@/components/sections/AboutSection";
import MyWorkSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactsSection from "@/components/sections/ContactsSection";
import Footer from "@/components/sections/Footer";
import Profile from "@/components/Profile";
import Header from "@/components/sections/Header";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-[25%_75%] min-h-screen">
        <section className="pt-6 lg:p-0 lg:sticky lg:top-0 lg:self-start bg-blue-cosmos/35">
          <div className="lg:h-screen lg:flex lg:items-center lg:justify-center">
            <Profile />
          </div>
        </section>
        <section className="pt-0 lg:pt-2">
          <Header />
          <AboutSection />
          <ExperienceSection />
          <MyWorkSection />
          <ContactsSection />
        </section>
      </div>
      <Footer />
    </main>
  );
}
