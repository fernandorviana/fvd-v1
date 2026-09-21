export function Hero() {
  return (
    <header className="mx-auto w-full max-w-5xl px-6 pt-20 pb-24 sm:pt-32 sm:pb-32">
      <p className="font-sans text-xs uppercase tracking-[0.18em] text-muted">
        Product Designer · Porto, Portugal
      </p>

      <h1 className="mt-8 font-serif text-display tracking-[-0.01em]">
        Fernando Viana
      </h1>

      <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-muted sm:text-xl">
        I design products in AI, fintech and healthcare, almost always as a
        team&apos;s first designer: building the practice, the system and the
        product at the same time. 12+ years in, most recently as Founding
        Designer and Head of Design at Upvio.
      </p>

      <nav className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-sans text-sm">
        <a className="underline-offset-4 hover:underline" href="#work">
          Work
        </a>
        <a className="underline-offset-4 hover:underline" href="#about">
          About
        </a>
        <a className="underline-offset-4 hover:underline" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}
