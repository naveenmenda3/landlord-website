import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { absoluteUrl } from "@/lib/site";
import { privacyUpdated } from "@/content/privacy-policy";

const siteReviewed = new Date("2026-11-12");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; freq: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/features", priority: 0.8, freq: "monthly" },
    { path: "/pricing", priority: 0.8, freq: "monthly" },
    { path: "/guides", priority: 0.9, freq: "weekly" },
    { path: "/about", priority: 0.5, freq: "yearly" },
    { path: "/contact", priority: 0.5, freq: "yearly" },
    { path: "/delete-account", priority: 0.3, freq: "yearly" },
  ];
  return [
    ...pages.map((p) => ({
      url: absoluteUrl(p.path),
      lastModified: siteReviewed,
      changeFrequency: p.freq,
      priority: p.priority,
    })),
    {
      url: absoluteUrl("/privacy-policy"),
      lastModified: new Date(privacyUpdated.iso),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    ...guides.map((g) => ({
      url: absoluteUrl(`/guides/${g.slug}`),
      lastModified: new Date(g.modified),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
