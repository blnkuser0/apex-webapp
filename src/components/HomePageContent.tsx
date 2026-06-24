import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProductsCarousel from "@/components/ProductsCarousel";
import IndustriesSection from "@/components/IndustriesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { PendingSectionScroller } from "@/components/ScrollLink";

export default function HomePageContent() {
  return (
    <>
      <PendingSectionScroller />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <ProductsCarousel />
        <IndustriesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
