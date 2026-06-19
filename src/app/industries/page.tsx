import Navbar from "@/components/Navbar";
import IndustriesSection from "@/components/IndustriesSection";
import Footer from "@/components/Footer";

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <IndustriesSection />
      </main>
      <Footer />
    </>
  );
}
