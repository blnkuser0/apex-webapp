import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white pt-16">
        <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#c01130]">
            Projects
          </p>
          <h1 className="mb-4 text-3xl font-black text-gray-900 sm:text-4xl">
            Project highlights are coming soon.
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            We are preparing a dedicated projects page to showcase recent deployments,
            solution rollouts, and client success stories.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
