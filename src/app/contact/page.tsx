import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { Breadcrumbs, Callout, IconTile } from "@/components/ui";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact Landlord Ready Support",
  description: `Contact Landlord Ready by email at ${site.supportEmail}. We reply within two working days.`,
  path: "/contact",
});

export default function ContactPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          { "@type": "ContactPage", name: "Contact Landlord Ready", url: `${site.url}/contact` },
        ]}
      />
      <section className="hero-glow border-b border-line" aria-labelledby="page-title">
        <div className="container-page pb-14 pt-8">
          <Breadcrumbs items={crumbs} />
          <h1 id="page-title" className="mt-8 text-4xl font-extrabold leading-[1.08] sm:text-5xl">
            Contact us
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2 sm:text-xl">
            Questions about the app, your account or your data? Email us and a person will reply within two working days.
          </p>
        </div>
      </section>

      <section className="container-page grid gap-6 py-16 md:grid-cols-2 lg:grid-cols-3" aria-label="Ways to contact us">
        <div className="card flex flex-col gap-4 p-7 md:col-span-2 lg:col-span-1">
          <IconTile name="mail" />
          <h2 className="text-xl font-extrabold">Email support</h2>
          <p className="leading-relaxed text-ink-2">For help with the app, billing, feedback or anything else.</p>
          <a href={`mailto:${site.supportEmail}`} className="btn btn-primary mt-auto self-start break-all">
            <Icon name="mail" className="size-5" />
            {site.supportEmail}
          </a>
        </div>
        <div className="card flex flex-col gap-4 p-7">
          <IconTile name="lock" />
          <h2 className="text-xl font-extrabold">Privacy requests</h2>
          <p className="leading-relaxed text-ink-2">
            To use your data rights, email us from the address on your account. Read our{" "}
            <Link href="/privacy-policy">privacy policy</Link>.
          </p>
        </div>
        <div className="card flex flex-col gap-4 p-7">
          <IconTile name="trash" />
          <h2 className="text-xl font-extrabold">Delete your account</h2>
          <p className="leading-relaxed text-ink-2">
            Delete it in the app straight away, or <Link href="/delete-account">request deletion on this website</Link>.
          </p>
        </div>
      </section>

      <section className="container-page max-w-3xl pb-20">
        <Callout icon="info">
          <p>
            We can explain how the app works, but we cannot give legal advice about your tenancy or property. For that,
            check GOV.UK or a qualified adviser. Our <Link href="/guides">landlord guides</Link> link to the official
            sources.
          </p>
        </Callout>
      </section>
    </>
  );
}
