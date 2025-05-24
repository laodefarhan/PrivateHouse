import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import Hero from "@/components/home/Hero";
import Information from "@/components/home/Information";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <Information />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
