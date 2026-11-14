import type { Metadata } from "next";
import Link from "next/link";
import { GuideCards } from "@/components/sections";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page does not exist. Find landlord guides, features and pricing from Landlord Ready.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <section className="hero-glow border-b border-line" aria-labelledby="page-title">
        <div className="container-page py-20 text-center">
          <p className="eyebrow">Error 404</p>
          <h1 id="page-title" className="mx-auto mt-5 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
            We can&apos;t find that page
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-2">
            The link may be old or mistyped. Try the home page, or one of the guides below.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn btn-primary">
              Go to the home page
            </Link>
            <Link href="/guides" className="btn btn-secondary">
              Browse guides
            </Link>
          </div>
        </div>
      </section>
      <section aria-label="Popular guides" className="container-page py-16">
        <GuideCards limit={3} />
      </section>
    </>
  );
}
