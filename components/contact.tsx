import { ContactForm } from "@/components/contact-form";
import { Section } from "@/components/section";

// LinkedIn and CV (PDF) join this list once their URLs exist.
const links = [
  { label: "Email", href: "mailto:fernando.rodrigues.viana@gmail.com" },
];

export function Contact() {
  return (
    <Section id="contact" label="03 — Contact">
      <div className="max-w-2xl">
        <h2 className="font-serif text-title">
          Research, product design and design systems for teams building complex products. Tell me what you&apos;re building.
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

        <ContactForm />
      </div>
    </Section>
  );
}
