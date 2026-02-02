import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FulfillingLife from "@/components/FulfillingLife";
import Specialties from "@/components/Specialties";
import NotAlone from "@/components/NotAlone";
import Intro from "@/components/Intro";
import FAQ from "@/components/FAQ";
import Background from "@/components/Background";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FulfillingLife />
      <Specialties />   {/* ← THIS SECTION */}
      <NotAlone />
      <Intro />
      <FAQ />
      <Background />
      <CTA />
      <Footer />
    </>
  );
}
