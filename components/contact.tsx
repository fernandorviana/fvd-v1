import { Section } from "@/components/section";

const links = [
  { label: "Email", href: "mailto:fernando.rodrigues.viana@gmail.com" },
  { label: "LinkedIn", href: "#" },
  { label: "CV (PDF)", href: "#" },
];

export function Contact() {
  return (
    <Section id="contact" label="03 — Contact">
      <div className="max-w-2xl">
        <h2 className="font-serif text-title">
          Open to conversations about product, AI, and teams taking shape.
        </h2>

        <ul className="mt-8 space-y-3 font-sans text-lg">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
