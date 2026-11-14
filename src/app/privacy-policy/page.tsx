import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/ui";
import { privacyHtml, privacyToc, privacyUpdated } from "@/content/privacy-policy";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How the Landlord Ready app collects, uses, stores and deletes your information, who it is shared with, and the privacy rights you have under UK law.",
  path: "/privacy-policy",
});

function Toc() {
  return (
    <ol className="space-y-0.5 text-[0.95rem]">
      {privacyToc.map((item, i) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className="flex min-h-10 items-center gap-2 rounded-lg px-2 font-medium text-ink-2 no-underline hover:bg-tint hover:text-ink"
          >
            <span className="w-6 shrink-0 text-right text-link">{i + 1}.</span>
            {item.label}
          </a>
        </li>
      ))}
    </ol>
  );
}

export default function PrivacyPolicyPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Privacy policy", path: "/privacy-policy" },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="hero-glow border-b border-line" aria-labelledby="page-title">
        <div className="container-page pb-12 pt-8">
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow mt-8">Privacy</p>
          <h1 id="page-title" className="mt-4 text-4xl font-extrabold leading-[1.08] sm:text-5xl">
            Landlord Ready Privacy Policy
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
            How the Landlord Ready app and this website collect, use, store and delete your information, and the choices
            you have.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-[0.95rem]">
            <span>
              <strong>Last updated:</strong> <time dateTime={privacyUpdated.iso}>{privacyUpdated.label}</time>
            </span>
            <span>
              <strong>Applies to:</strong> the Landlord Ready mobile app and this website
            </span>
          </div>
        </div>
      </section>

      <div className="container-page grid gap-10 py-12 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-14">
        <aside>
          <details className="card p-4 lg:hidden">
            <summary className="flex min-h-12 cursor-pointer items-center font-bold">Contents</summary>
            <nav aria-label="Privacy policy contents" className="mt-2">
              <Toc />
            </nav>
          </details>
          <nav aria-label="Privacy policy contents" className="sticky top-24 hidden max-h-[calc(100dvh-7rem)] overflow-y-auto lg:block">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-wider text-ink-2">Contents</p>
            <Toc />
          </nav>
        </aside>
        {/* Policy text ported verbatim from the previous static site. */}
        <article className="policy-body prose-lr min-w-0 max-w-3xl" dangerouslySetInnerHTML={{ __html: privacyHtml }} />
      </div>
    </>
  );
}
