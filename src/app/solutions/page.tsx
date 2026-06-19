import Navbar from "@/components/Navbar";
import SolutionsSection from "@/components/SolutionsSection";
import ProductsCarousel from "@/components/ProductsCarousel";
import Footer from "@/components/Footer";

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <SolutionsSection />
        <ProductsCarousel />
      </main>
      <Footer />
    </>
  );
}
