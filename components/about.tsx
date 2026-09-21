import { Section } from "@/components/section";

export function About() {
  return (
    <Section id="about" label="02 — About">
      <div className="max-w-2xl space-y-6 font-sans text-lg leading-relaxed">
        <p className="font-serif text-title">
          I join early and build design from the ground up.
        </p>
        <p className="text-muted">
          At Upvio, Automaise, Public Mint and Unimoney I was the first
          designer. The job is the same each time: learn the domain fast, set
          up a lean design system so features can ship, and grow both while
          the product is already in customers&apos; hands.
        </p>
        <p className="text-muted">
          I do my own research, from the interview guide to the synthesis and
          the competitor analysis. When the problem sits below the interface I
          go there, into domain models and the rules a system has to
          guarantee. And I stay through implementation, working directly with
          engineers and founders, with design QA that hands engineering a
          ranked backlog.
        </p>
        <p className="text-muted">
          Twelve-plus years in. Seven of them were at Seegno, a product
          studio, where I started as a junior on products like Uphold,
          Followistic and Mapp and left as lead, with the Automaise, Public
          Mint and Unimoney work along the way. Before that I freelanced in
          editorial and web design.
        </p>
      </div>
    </Section>
  );
}
