import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { Breadcrumbs, CtaBand, Disclaimer, FaqList, IconTile } from "@/components/ui";
import { getGuide, guides } from "@/content/guides";
import { guideBodies } from "@/content/guide-bodies";
import { articleSchema, breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    type: "article",
    modified: guide.modified,
  });
}

export default async function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const guide = getGuide(slug);
  const Body = guideBodies[slug];
  if (!guide || !Body) notFound();

  const path = `/guides/${guide.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: guide.navLabel, path },
  ];
  const related = guide.related.map(getGuide).filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <>
      <JsonLd
        data={[
          articleSchema({ title: guide.h1, description: guide.description, path, published: guide.published, modified: guide.modified }),
          breadcrumbSchema(crumbs),
          faqSchema(guide.faqs),
        ]}
      />

      <div className="hero-glow border-b border-line">
        <div className="container-page pb-10 pt-8 sm:pb-14 sm:pt-10">
          <Breadcrumbs items={crumbs} />
          <div className="mt-8 flex max-w-3xl flex-col gap-5">
            <IconTile name={guide.icon} className="bg-white shadow-[var(--shadow-soft)]" />
            <h1 className="text-4xl font-extrabold leading-[1.1] sm:text-5xl">{guide.h1}</h1>
            <p className="text-lg leading-relaxed text-ink-2 sm:text-xl">{guide.summary}</p>
            <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-2">
              <span className="inline-flex items-center gap-1.5">
                <Icon name="calendar" className="size-4" />
                Last reviewed: <time dateTime={guide.modified}>{site.lastReviewed}</time>
              </span>
              <span>By {site.name}</span>
              <span>England only</span>
            </p>
          </div>
        </div>
      </div>

      <div className="container-page grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
        <article className="min-w-0 max-w-3xl">
          <Disclaimer />
          <div className="prose-lr mt-8">
            <Body />
          </div>

          <section aria-labelledby="faq-title" className="mt-14">
            <h2 id="faq-title" className="text-2xl font-extrabold">
              Common questions
            </h2>
            <div className="mt-5">
              <FaqList faqs={guide.faqs} />
            </div>
          </section>

          <section aria-labelledby="sources-title" className="mt-14 rounded-2xl border border-line bg-stone-soft p-5 sm:p-6">
            <h2 id="sources-title" className="text-lg font-extrabold">
              Official sources
            </h2>
            <p className="mt-1 text-sm text-ink-2">
              Checked in {site.lastReviewed}. Rules change: always confirm on GOV.UK before you act.
            </p>
            <ul className="mt-4 space-y-2">
              {guide.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} rel="noopener" className="inline-flex min-h-8 items-start gap-2 font-semibold">
                    <Icon name="external" className="mt-1 size-4 shrink-0" />
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>

        <aside aria-label="Related guides" className="lg:pt-2">
          <div className="lg:sticky lg:top-24">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-ink-2">Related guides</h2>
            <ul className="mt-4 space-y-3">
              {related.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/guides/${g.slug}`}
                    className="card flex min-h-12 items-center gap-3 p-4 font-bold text-ink no-underline transition-colors hover:border-brand-light"
                  >
                    <Icon name={g.icon} className="size-5 shrink-0 text-link" />
                    <span>{g.navLabel}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/guides" className="inline-flex min-h-12 items-center gap-2 font-bold">
                  All landlord guides
                  <Icon name="arrowRight" className="size-4" />
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <CtaBand />
    </>
  );
}
