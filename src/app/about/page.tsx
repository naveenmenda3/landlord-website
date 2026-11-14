import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CtaBand, IconTile } from "@/components/ui";
import type { IconName } from "@/components/Icon";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Landlord Ready",
  description:
    "Why Landlord Ready exists: a calm, plain-English app that helps private landlords in England keep certificates in date and get ready for the rental property register.",
  path: "/about",
});

const principles: { icon: IconName; title: string; body: string }[] = [
  { icon: "checkCircle", title: "Status first", body: "Every screen answers one question: what do I need to do next, and how soon?" },
  { icon: "info", title: "Plain English", body: "No legal jargon. Status always has an icon and a word, never colour alone." },
  { icon: "lock", title: "Minimal data", body: "No tenant records, no advertising, no tracking tools. Your records are private to your account." },
  { icon: "scale", title: "Honest limits", body: "Not legal advice and not affiliated with GOV.UK. We link to the official source for every rule." },
];

export default function AboutPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="hero-glow border-b border-line" aria-labelledby="page-title">
        <div className="container-page pb-14 pt-8">
          <Breadcrumbs items={crumbs} />
          <h1 id="page-title" className="mt-8 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl">
            About Landlord Ready
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2 sm:text-xl">
            A calm, simple app for private landlords in England who would rather not miss a deadline.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr]" aria-labelledby="why-title">
        <div className="prose-lr max-w-2xl">
          <h2 id="why-title" className="!mt-0">Why we built it</h2>
          <p>
            Landlords carry a growing list of dated obligations. Gas safety, electrical, energy, alarm and deposit
            paperwork each run on their own cycle, and most landlords track them with memory, email, folders or a
            spreadsheet. The Renters&apos; Rights Act adds a new rental property register, with every let property in
            England to be registered region by region from 15 December 2026.
          </p>
          <p>
            Landlord Ready is built for landlords with one to ten properties who manage them personally. It does three
            things: it tracks each property&apos;s certificates, reminds you before they expire, and gets each property
            ready for the register.
          </p>
          <h2>What it is not</h2>
          <p>
            Landlord Ready does not register anyone, give legal advice or connect to GOV.UK. You complete the official
            registration yourself; the app prepares the details and keeps the evidence. It covers England only.
          </p>
          <h2>Keeping the rules current</h2>
          <p>
            Rules change. Our <Link href="/guides">guides</Link> link to GOV.UK for every fact and show when they were
            last reviewed. If you spot something out of date, please email{" "}
            <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
          </p>
        </div>
        <ul className="grid content-start gap-4">
          {principles.map((p) => (
            <li key={p.title} className="card flex gap-4 p-5">
              <IconTile name={p.icon} />
              <div className="min-w-0">
                <h3 className="font-bold">{p.title}</h3>
                <p className="mt-1 leading-relaxed text-ink-2">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
