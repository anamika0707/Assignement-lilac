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
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      <ScrollReveal>
        <FulfillingLife />
      </ScrollReveal>
      <ScrollReveal>
        <Specialties />   {/* ← THIS SECTION */}
      </ScrollReveal>
      <ScrollReveal>
        <NotAlone />
      </ScrollReveal>
      <ScrollReveal>
        <Intro />
      </ScrollReveal>
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
      <ScrollReveal>
        <Background />
      </ScrollReveal>
      <ScrollReveal>
        <CTA />
      </ScrollReveal>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </>
  );
}
