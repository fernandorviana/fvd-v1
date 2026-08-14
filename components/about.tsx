import { Section } from "@/components/section";

export function About() {
  return (
    <Section id="about" label="02 — About">
      <div className="max-w-2xl space-y-6 font-sans text-lg leading-relaxed">
        <p className="font-serif text-title">
          Placeholder — the line that sums up how I work.
        </p>
        <p className="text-muted">
          Two or three short paragraphs: the pattern of joining early and
          building design from the ground up, how that translates into
          research, systems, and delivery, and the kind of team this works
          best with.
        </p>
        <p className="text-muted">
          Space for the second paragraph — method, collaboration with
          engineering and product, and what I&apos;m looking for next.
        </p>
      </div>
    </Section>
  );
}
