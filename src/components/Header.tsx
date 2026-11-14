"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Wordmark } from "./Logo";
import { Icon } from "./Icon";
import { playStoreUrl } from "@/lib/site";

export const mainNav = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname() ?? "/";
  const menu = useRef<HTMLDetailsElement>(null);

  // Close the mobile menu after navigating.
  useEffect(() => {
    if (menu.current) menu.current.open = false;
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container-page flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="min-w-0 rounded-lg no-underline" aria-label="Landlord Ready home">
          <Wordmark />
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`inline-flex min-h-12 items-center rounded-full px-4 text-[0.95rem] font-semibold no-underline transition-colors ${
                      current ? "bg-tint-2 text-on-brand" : "text-ink-2 hover:bg-tint hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:block">
          {playStoreUrl ? (
            <a href={playStoreUrl} className="btn btn-primary !px-5 !text-[0.95rem]" rel="noopener">
              Get the app
            </a>
          ) : (
            <Link href="/pricing" className="btn btn-primary !px-5 !text-[0.95rem]">
              See plans
            </Link>
          )}
        </div>

        <details ref={menu} className="group relative shrink-0 md:hidden">
          <summary className="flex size-12 cursor-pointer list-none items-center justify-center rounded-full border border-line text-ink [&::-webkit-details-marker]:hidden">
            <Icon name="menu" className="size-6" />
            <span className="visually-hidden">Menu</span>
          </summary>
          <nav
            aria-label="Main"
            className="absolute right-0 top-14 w-[min(18rem,calc(100vw-2rem))] rounded-2xl border border-line bg-white p-2 shadow-[var(--shadow-lift)]"
          >
            <ul>
              {mainNav.map((item) => {
                const current = isCurrent(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      className={`flex min-h-12 items-center rounded-xl px-4 font-semibold no-underline ${
                        current ? "bg-tint-2 text-on-brand" : "text-ink hover:bg-tint"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
