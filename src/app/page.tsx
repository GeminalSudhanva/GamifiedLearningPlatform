import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import SubjectsGames from "@/components/sections/SubjectsGames";
import Gamification from "@/components/sections/Gamification";
import TrustSection from "@/components/sections/TrustSection";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <SubjectsGames />
      <Gamification />
      <TrustSection />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
