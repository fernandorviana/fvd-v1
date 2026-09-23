import Image from "next/image";
import type { CaseBlock } from "@/content/case-types";

type ImageBlock = Extract<CaseBlock, { type: "image" }>;

const sourceLabel: Record<ImageBlock["source"], string> = {
  figma: "Design",
  screenshot: "Screenshot",
};

/** Holds the place of an image still to be made, at its final proportions, in every environment. */
function ImagePlaceholder({ block }: { block: ImageBlock }) {
  return (
    <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-sm border border-dashed border-line bg-foreground/[0.02] px-6 text-center">
      <span className="font-sans text-xs uppercase tracking-[0.18em] text-muted">
        {sourceLabel[block.source]} to come
      </span>
      <span className="max-w-[40ch] font-sans text-sm text-muted">{block.alt}</span>
    </div>
  );
}

export function ImageSlot({ block }: { block: ImageBlock }) {
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
        <ImagePlaceholder block={block} />
      )}
      <figcaption className="mt-3 font-sans text-sm text-muted">{block.caption}</figcaption>
    </figure>
  );
}
