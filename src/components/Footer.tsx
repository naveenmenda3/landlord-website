import Link from "next/link";
import { Wordmark } from "./Logo";
import { guides } from "@/content/guides";
import { site } from "@/lib/site";

const product = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/guides", label: "All landlord guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legal = [
  { href: "/privacy-policy", label: "Privacy policy" },
  { href: "/delete-account", label: "Delete your account" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-stone-soft">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1.4fr_1fr]">
        <div className="max-w-xs">
          <Link href="/" className="no-underline" aria-label="Landlord Ready home">
            <Wordmark />
          </Link>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-2">
            Certificates, reminders and register readiness for landlords in England. Not affiliated with GOV.UK.
          </p>
          <p className="mt-4 text-[0.95rem]">
            <a href={`mailto:${site.supportEmail}`} className="font-semibold">
              {site.supportEmail}
            </a>
          </p>
        </div>
        <FooterColumn title="Landlord Ready" links={product} />
        <FooterColumn
          title="Guides for landlords"
          links={guides.map((g) => ({ href: `/guides/${g.slug}`, label: g.navLabel }))}
        />
        <FooterColumn title="Your data" links={legal} />
      </div>
      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-ink-2 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Landlord Ready. All rights reserved.</p>
          <p>General information, not legal advice. England only.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="text-sm font-extrabold uppercase tracking-wider text-ink">{title}</h2>
      <ul className="mt-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="inline-flex min-h-10 items-center py-1 text-[0.95rem] font-medium text-ink-2 no-underline hover:text-link hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
