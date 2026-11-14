import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { GuideCards } from "@/components/sections";
import { Breadcrumbs, CtaBand, Disclaimer } from "@/components/ui";
import { guides } from "@/content/guides";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Landlord Guides for England",
  description:
    "Free plain-English guides for landlords in England: gas safety, EICR, EPC, smoke and CO alarms, deposit protection, the rental property register, the Renters' Rights Act and the ombudsman.",
  path: "/guides",
});

export default function GuidesPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
  ];
  const itemList = {
    "@type": "ItemList",
    name: "Landlord guides for England",
    itemListElement: guides.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(`/guides/${g.slug}`),
      name: g.h1,
    })),
  };

  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), itemList]} />
      <section className="hero-glow border-b border-line" aria-labelledby="page-title">
        <div className="container-page pb-14 pt-8">
          <Breadcrumbs items={crumbs} />
          <h1 id="page-title" className="mt-8 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl">
            Landlord guides for England
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2 sm:text-xl">
            Short, plain-English guides to the certificates, deadlines and new rules that private landlords in England
            deal with. Each one links to the official GOV.UK sources. Last reviewed: {site.lastReviewed}.
          </p>
          <p className="mt-6">
            New to letting? Start with the{" "}
            <Link href="/guides/landlord-compliance-checklist-england" className="font-bold">
              landlord compliance checklist for England
            </Link>
            .
          </p>
        </div>
      </section>

      <section aria-label="All guides" className="container-page py-14">
        <div className="mb-10 max-w-3xl">
          <Disclaimer />
        </div>
        <GuideCards />
      </section>

      <CtaBand />
    </>
  );
}
