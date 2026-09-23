import Link from "next/link";
import type { CaseBlock } from "@/content/case-types";
import { groupSections } from "@/content/group-sections";
import { diagrams } from "./diagrams";
import { ImageSlot } from "./image-slot";
import { Placeholder, showPlaceholders } from "./placeholder";

const prose = "max-w-[65ch] font-sans text-lg leading-relaxed text-muted";

function Block({ block }: { block: CaseBlock }) {
  switch (block.type) {
    case "section":
      return null;
    case "paragraph":
      return <p className={prose}>{block.text}</p>;
    case "subheading":
      return <h3 className="pt-4 font-serif text-2xl">{block.text}</h3>;
    case "list":
      return (
        <ul className={`${prose} list-disc space-y-1 pl-5 marker:text-line`}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <p className="max-w-[40ch] border-l-2 border-accent pl-6 font-serif text-title">
          {block.text}
        </p>
      );
    case "link":
      return (
        <p>
          <Link href={block.href} className="font-sans text-sm text-accent underline-offset-4 hover:underline">
            {block.text} <span aria-hidden="true">→</span>
          </Link>
        </p>
      );
    case "image":
      return <ImageSlot block={block} />;
    case "diagram": {
      const Diagram = diagrams[block.id];
      if (!Diagram && !showPlaceholders) return null;
      return (
        <figure>
          {Diagram ? <Diagram /> : <Placeholder kind="diagram" label={block.caption} />}
          <figcaption className="mt-3 font-sans text-sm text-muted">{block.caption}</figcaption>
        </figure>
      );
    }
  }
}

export function CaseBlocks({ blocks }: { blocks: CaseBlock[] }) {
  return groupSections(blocks).map((section) => (
    <section
      key={section.label}
      className="border-t border-line py-16 sm:py-20 md:grid md:grid-cols-[10rem_1fr] md:gap-12"
    >
      <p className="mb-6 font-sans text-xs uppercase tracking-[0.18em] text-muted md:mb-0">
        {section.label}
      </p>
      <div className="space-y-8">
        <h2 className="font-serif text-title">{section.title}</h2>
        {section.blocks.map((block, index) => (
          <Block key={index} block={block} />
        ))}
      </div>
    </section>
  ));
}
