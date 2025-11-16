"use client";
import ProfileSection from "@/components/sections/ProfileSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactsSection from "@/components/sections/ContactsSection";
import Footer from "@/components/sections/Footer";
import MenuToggleButton from "@/components/MenuToggleButton";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-[25%_75%] min-h-screen">
        <section className="pt-6 lg:p-0 md:sticky md:top-0 md:self-start md:bg-blue-cosmos/35">
          <div className="md:h-screen md:flex md:items-center md:justify-center">
            <ProfileSection />
          </div>
        </section>
        <section className="pt-12 md:pt-8">
          <MenuToggleButton />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactsSection />
        </section>
      </div>
      <Footer />
    </main>
  );
}
