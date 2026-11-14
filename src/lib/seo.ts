import type { Metadata } from "next";
import { absoluteUrl, playStoreUrl, site } from "./site";
import { freePlan, plusPlans } from "./plans";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  /** "article" for guides, "website" for everything else. */
  type?: "website" | "article";
  modified?: string;
  noindex?: boolean;
};

/**
 * Unique title, description, canonical URL and social cards for one page.
 * Open Graph images come from the nearest opengraph-image file.
 */
const defaultImage = { url: "/opengraph-image", width: 1200, height: 630, alt: "Landlord Ready: the landlord compliance app for England" };

export function pageMetadata({ title, description, path, type = "website", modified, noindex }: PageMeta): Metadata {
  // Guides have their own generated image (app/guides/[slug]/opengraph-image).
  // Other pages set openGraph themselves, which would drop the inherited root
  // image, so they name it explicitly.
  const own = type === "article";
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      title,
      description,
      siteName: site.name,
      locale: site.locale,
      ...(own && modified ? { modifiedTime: modified } : {}),
      ...(own ? {} : { images: [defaultImage] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(own ? {} : { images: [{ ...defaultImage, url: "/twitter-image" }] }),
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export const organizationId = `${site.url}/#organization`;
export const websiteId = `${site.url}/#website`;
export const appId = `${site.url}/#app`;

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: site.name,
    url: site.url,
    logo: absoluteUrl("/logo.svg"),
    email: site.supportEmail,
    areaServed: { "@type": "Country", name: "England" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: site.supportEmail,
      availableLanguage: "en-GB",
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: site.name,
    url: site.url,
    inLanguage: "en-GB",
    publisher: { "@id": organizationId },
  };
}

/** Offers come from the app's real plans. No ratings or reviews, by design. */
export function softwareApplicationSchema() {
  return {
    "@type": "SoftwareApplication",
    "@id": appId,
    name: site.name,
    operatingSystem: "Android",
    applicationCategory: "BusinessApplication",
    description: site.description,
    url: site.url,
    ...(playStoreUrl ? { downloadUrl: playStoreUrl, installUrl: playStoreUrl } : {}),
    inLanguage: "en-GB",
    publisher: { "@id": organizationId },
    offers: [
      {
        "@type": "Offer",
        name: `${freePlan.name} plan`,
        price: "0",
        priceCurrency: "GBP",
        description: `${freePlan.properties} property and ${freePlan.documents} stored documents`,
      },
      ...plusPlans.map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: p.amount,
        priceCurrency: "GBP",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: p.amount,
          priceCurrency: "GBP",
          unitCode: p.period === "year" ? "ANN" : "MON",
          referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: p.period === "year" ? "ANN" : "MON" },
        },
      })),
    ],
  };
}

export type Faq = { q: string; a: string };

export function faqSchema(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(a: { title: string; description: string; path: string; published: string; modified: string }) {
  return {
    "@type": "Article",
    headline: a.title,
    description: a.description,
    url: absoluteUrl(a.path),
    mainEntityOfPage: absoluteUrl(a.path),
    inLanguage: "en-GB",
    datePublished: a.published,
    dateModified: a.modified,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@id": organizationId },
    image: absoluteUrl("/screens/home.png"),
    about: { "@type": "Place", name: "England" },
  };
}
