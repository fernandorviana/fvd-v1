import { Section } from "@/components/section";

const links = [
  { label: "Email", href: "mailto:fernando.rodrigues.viana@gmail.com" },
  { label: "LinkedIn", href: "#" },
  { label: "CV (PDF)", href: "#" },
];

export function Contact() {
  return (
    <Section id="contacto" label="03 — Contacto">
      <div className="max-w-2xl">
        <h2 className="font-serif text-title">
          Aberto a conversas sobre produto, AI e equipas em formação.
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
