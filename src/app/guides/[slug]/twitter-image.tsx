import { getGuide, guides } from "@/content/guides";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Landlord Ready guide for landlords in England";
export const size = ogSize;
export const contentType = ogContentType;

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export default async function TwitterImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  return renderOg({
    eyebrow: "Landlord guide · England",
    title: guide?.h1 ?? "Landlord guides for England",
    footer: "Last reviewed November 2026 · General information, not legal advice",
  });
}
