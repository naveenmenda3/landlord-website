import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/** The shared social card: light orange glow, the mark, a title and a line. */
export function renderOg({ title, eyebrow, footer }: { title: string; eyebrow: string; footer: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 45%, #FDBA74 100%)",
          color: "#1C1917",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 40 40">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#F97316" />
                <stop offset="1" stopColor="#C2410C" />
              </linearGradient>
            </defs>
            <rect width="40" height="40" rx="11" fill="url(#g)" />
            <path
              fill="#fff"
              d="M20 9.5 8.6 18.9c-.6.5-.25 1.5.55 1.5h2.35V29c0 .83.67 1.5 1.5 1.5h4.5v-6h5v6H27c.83 0 1.5-.67 1.5-1.5v-8.6h2.35c.8 0 1.15-1 .55-1.5Z"
            />
          </svg>
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>Landlord Ready</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              background: "#FB923C",
              color: "#431407",
              fontSize: 26,
              fontWeight: 700,
              padding: "8px 22px",
              borderRadius: 999,
            }}
          >
            {eyebrow}
          </div>
          <div style={{ fontSize: title.length > 48 ? 60 : 72, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2, maxWidth: 1000 }}>
            {title}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#57534E" }}>{footer}</div>
      </div>
    ),
    ogSize,
  );
}
