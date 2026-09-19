import Image from "next/image";
import type { CaseBlock } from "@/content/case-types";
import { Placeholder, showPlaceholders } from "./placeholder";

type ImageBlock = Extract<CaseBlock, { type: "image" }>;

export function ImageSlot({ block }: { block: ImageBlock }) {
  if (!block.src && !showPlaceholders) return null;

  return (
    <figure className={block.width === "text" ? "max-w-[65ch]" : undefined}>
      {block.src ? (
        <Image
          src={block.src}
          alt={block.alt}
          width={1600}
          height={1000}
          sizes="(min-width: 1024px) 800px, 100vw"
          className="h-auto w-full rounded-sm border border-line"
        />
      ) : (
        <Placeholder kind={block.source} label={block.caption} />
      )}
      <figcaption className="mt-3 font-sans text-sm text-muted">{block.caption}</figcaption>
    </figure>
  );
}
