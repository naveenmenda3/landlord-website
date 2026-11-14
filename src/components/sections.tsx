import Link from "next/link";
import { Icon } from "./Icon";
import { IconTile } from "./ui";
import { trackedItems } from "@/lib/certificates";
import { guides } from "@/content/guides";

/** Every record the app tracks, with a "Required" or "Optional" label (icon + word). */
export function TrackedGrid() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {trackedItems.map((item) => (
        <li key={item.label} className="card flex flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-3">
            <IconTile name={item.icon} />
            {item.required ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-tint-2 px-2.5 py-1 text-xs font-bold text-on-brand">
                <Icon name="check" className="size-3.5" />
                Required for lets
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-stone-soft px-2.5 py-1 text-xs font-bold text-ink-2 ring-1 ring-line">
                <Icon name="info" className="size-3.5" />
                Optional
              </span>
            )}
          </div>
          <h3 className="text-lg font-bold leading-snug">{item.label}</h3>
          <p className="text-[0.95rem] leading-relaxed text-ink-2">{item.body}</p>
          <p className="mt-auto text-sm font-semibold text-ink">{item.cycle}</p>
          {item.guide ? (
            <Link href={item.guide} className="inline-flex min-h-10 items-center gap-1.5 text-sm font-bold">
              Read the guide
              <span className="visually-hidden">: {item.label}</span>
              <Icon name="arrowRight" className="size-4" />
            </Link>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function GuideCards({ limit }: { limit?: number }) {
  const list = limit ? guides.slice(0, limit) : guides;
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((g) => (
        <li key={g.slug}>
          <Link
            href={`/guides/${g.slug}`}
            className="card group flex h-full flex-col gap-3 p-6 text-ink no-underline transition-[border-color,box-shadow] hover:border-brand-light hover:shadow-[var(--shadow-lift)]"
          >
            <IconTile name={g.icon} />
            <h3 className="text-lg font-bold leading-snug">{g.h1}</h3>
            <p className="text-[0.95rem] leading-relaxed text-ink-2">{g.description}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-bold text-link">
              Read the guide
              <Icon name="arrowRight" className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
