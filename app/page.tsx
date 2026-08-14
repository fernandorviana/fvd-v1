import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { FeaturedWork } from "@/components/featured-work";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FeaturedWork />
      <About />
      <Contact />
      <footer className="border-t border-line">
        <div className="mx-auto w-full max-w-5xl px-6 py-10 font-sans text-xs uppercase tracking-[0.18em] text-muted">
          © {new Date().getFullYear()} Fernando Viana
        </div>
      </footer>
    </main>
  );
}
