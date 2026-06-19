import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NewsInsightsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#c01130]">
            News & Insights
          </p>
          <h1 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl">
            Insights and updates will be published here.
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            This page is reserved for company updates, technology insights, and
            thought leadership content.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
