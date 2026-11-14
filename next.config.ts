import type { NextConfig } from "next";

// The Supabase project that receives account deletion requests. It is the
// only outside address the site ever connects to.
const supabaseUrl = (
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://bhfcchxmwaczzumyrorz.supabase.co"
).replace(/\/+$/, "");

const isDev = process.env.NODE_ENV !== "production";

// Same policy as the old static site's vercel.json, with two changes Next.js
// needs: statically generated pages carry small inline scripts (the React
// payload) and inline styles (next/font, next/image), so script-src and
// style-src allow 'unsafe-inline'. Per-request nonces would avoid that, but
// they force every page to render on demand instead of being static.
// Development also needs 'unsafe-eval' for fast refresh.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self' ${supabaseUrl}${isDev ? " ws: wss:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "manifest-src 'self'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const nextConfig: NextConfig = {
  // Pin the project root: a package-lock.json higher up the folder tree
  // would otherwise be picked as the workspace root.
  turbopack: { root: process.cwd() },
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
          ...(isDev
            ? []
            : [
                {
                  key: "Strict-Transport-Security",
                  value: "max-age=63072000; includeSubDomains",
                },
              ]),
        ],
      },
      {
        source: "/screens/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, must-revalidate" }],
      },
    ];
  },
};

export default nextConfig;
