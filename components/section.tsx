import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
};

/**
 * Invólucro das secções: numeração/rótulo à esquerda, conteúdo à direita.
 * Dá o ritmo editorial sem impor decoração — o estilo fino vem a seguir.
 */
export function Section({ id, label, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-line scroll-mt-24">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28 md:grid md:grid-cols-[10rem_1fr] md:gap-12">
        <p className="mb-8 font-sans text-xs uppercase tracking-[0.18em] text-muted md:mb-0">
          {label}
        </p>
        <div>{children}</div>
      </div>
    </section>
  );
}
