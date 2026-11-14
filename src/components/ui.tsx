import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";
import { playStoreUrl, site } from "@/lib/site";
import type { Faq } from "@/lib/seo";

/**
 * The main download action. With NEXT_PUBLIC_PLAY_STORE_URL set it links to
 * Google Play; without it, it says the app is coming soon (never a dead link).
 */
export function GetApp({ className = "", size = "lg" }: { className?: string; size?: "lg" | "md" }) {
  const pad = size === "lg" ? "!px-6 !text-[1.05rem]" : "";
  if (playStoreUrl) {
    return (
      <a href={playStoreUrl} rel="noopener" className={`btn btn-primary ${pad} ${className}`}>
        <Icon name="play" className="size-5 fill-current" />
        Get it on Google Play
      </a>
    );
  }
  return (
    <p
      className={`inline-flex min-h-12 items-center gap-2 rounded-full border border-dashed border-brand bg-tint px-5 py-3 font-bold text-on-brand ${className}`}
    >
      <Icon name="play" className="size-5" />
      Coming soon to Google Play
    </p>
  );
}

export type Screen =
  | "home"
  | "properties"
  | "property"
  | "property-station"
  | "certificate"
  | "certificate-form"
  | "documents"
  | "registration"
  | "registration-property";

/** Alt text describes what each real app screen shows. */
export const screenAlt: Record<Screen, string> = {
  home: "Landlord Ready home screen showing a compliance overview ring at 65% in date, counts of expired, due soon and missing items, a registration banner and a list of items that need attention",
  properties: "Landlord Ready properties list, with a compliance status for each let property",
  property:
    "Property screen for an example flat in the West Midlands, showing 5 of 6 required items in date, the register readiness bar and certificates marked due soon or in date",
  "property-station": "Property screen for an example house, listing its required certificates with their status",
  certificate: "Certificate detail screen in Landlord Ready showing the expiry date, status and attached document",
  "certificate-form":
    "Add certificate form for a gas safety certificate, with the issue date, a suggested expiry date 12 months later, reference number, notes and an option to attach a photo or PDF",
  documents: "Documents vault listing PDF and photo certificates grouped by property, with search and filters for gas, electrical, EPC and deposit",
  registration:
    "Rental property register screen explaining that registration opens region by region, with each property's registration window and readiness percentage",
  "registration-property":
    "Registration checklist for an example West Midlands flat: opens 15 December 2026, deadline 14 March 2027, 6 of 8 steps ready",
};

/** A real app screenshot (1080 x 2400) in a simple phone frame. */
export function PhoneShot({
  screen,
  sizes = "(min-width: 1024px) 300px, (min-width: 640px) 280px, 70vw",
  preload = false,
  className = "",
}: {
  screen: Screen;
  sizes?: string;
  preload?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[300px] rounded-[2.6rem] border border-line bg-white p-2.5 shadow-[var(--shadow-lift)] ${className}`}
    >
      <Image
        src={`/screens/${screen}.png`}
        alt={screenAlt[screen]}
        width={1080}
        height={2400}
        sizes={sizes}
        preload={preload}
        loading={preload ? "eager" : "lazy"}
        className="h-auto w-full rounded-[2rem]"
      />
    </div>
  );
}

const statusStyles = {
  ok: { icon: "checkCircle", cls: "bg-ok-soft text-ok", word: "In date" },
  soon: { icon: "clock", cls: "bg-warn-soft text-warn", word: "Due soon" },
  bad: { icon: "alert", cls: "bg-bad-soft text-bad", word: "Expired" },
  missing: { icon: "alert", cls: "bg-bad-soft text-bad", word: "Missing" },
} as const;

/** Status is always an icon plus a word, never colour alone. */
export function StatusPill({ status, children }: { status: keyof typeof statusStyles; children?: ReactNode }) {
  const s = statusStyles[status];
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold ${s.cls}`}>
      <Icon name={s.icon as IconName} className="size-4" />
      {children ?? s.word}
    </span>
  );
}

export function IconTile({ name, className = "" }: { name: IconName; className?: string }) {
  return (
    <span className={`inline-flex size-12 shrink-0 items-center justify-center rounded-2xl bg-tint-2 text-link ${className}`}>
      <Icon name={name} className="size-6" />
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  id?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={id} className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-lg leading-relaxed text-ink-2">{intro}</p> : null}
    </div>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line overflow-hidden rounded-[var(--radius-card)] border border-line bg-white">
      {faqs.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-[1.05rem] font-bold text-ink hover:bg-stone-soft [&::-webkit-details-marker]:hidden">
            <span className="min-w-0">{f.q}</span>
            <span
              aria-hidden="true"
              className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-tint text-link transition-transform group-open:rotate-45"
            >
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <div className="px-5 pb-5 leading-relaxed text-ink-2">{f.a}</div>
        </details>
      ))}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-2">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="inline-flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="font-semibold text-ink">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="inline-flex min-h-8 items-center font-semibold">
                    {item.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function Callout({
  tone = "brand",
  icon = "info",
  children,
}: {
  tone?: "brand" | "warn" | "bad";
  icon?: IconName;
  children: ReactNode;
}) {
  const cls =
    tone === "warn"
      ? "border-[#fcd34d] bg-warn-soft text-ink [&_svg]:text-warn"
      : tone === "bad"
        ? "border-[#fecaca] bg-bad-soft text-ink [&_svg]:text-bad"
        : "border-tint-2 bg-tint text-ink [&_svg]:text-link";
  return (
    <div className={`flex gap-3 rounded-2xl border p-4 sm:p-5 ${cls}`}>
      <Icon name={icon} className="mt-0.5 size-5 shrink-0" />
      <div className="min-w-0 space-y-2 leading-relaxed">{children}</div>
    </div>
  );
}

export function Disclaimer() {
  return (
    <Callout icon="info">
      <p className="text-[0.95rem]">
        <strong>General information, not legal advice. Landlord Ready is not affiliated with GOV.UK.</strong> This guide
        covers England only. Scotland, Wales and Northern Ireland have different rules.
      </p>
    </Callout>
  );
}

export function CtaBand({
  title = "Keep every certificate in date, without the spreadsheet",
  body = "Add your property, enter the dates on your certificates and Landlord Ready shows what is in date, what is due soon and what is missing.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="container-page py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-light via-brand to-brand-strong px-6 py-12 text-on-brand sm:px-12 sm:py-14">
        <div className="relative max-w-2xl">
          <h2 id="cta-title" className="text-3xl font-extrabold leading-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-on-brand/90">{body}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {playStoreUrl ? (
              <a href={playStoreUrl} rel="noopener" className="btn bg-on-brand !text-white hover:bg-ink">
                <Icon name="play" className="size-5 fill-current" />
                Get it on Google Play
              </a>
            ) : (
              <p className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white/70 px-5 py-3 font-bold">
                <Icon name="play" className="size-5" />
                Coming soon to Google Play
              </p>
            )}
            <Link href="/pricing" className="btn border border-on-brand/30 bg-white/40 text-on-brand hover:bg-white/70">
              See plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SupportLink({ subject }: { subject?: string }) {
  const href = `mailto:${site.supportEmail}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
  return <a href={href}>{site.supportEmail}</a>;
}
