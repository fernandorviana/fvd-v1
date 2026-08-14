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
        Senior/Lead Product Designer with 10+ years building products in AI,
        Fintech, and Healthcare — almost always as the first designer on the
        team, setting up the design practice from scratch.
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
