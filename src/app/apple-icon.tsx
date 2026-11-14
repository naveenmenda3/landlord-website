import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #F97316 0%, #C2410C 100%)",
        }}
      >
        <svg width="120" height="120" viewBox="8 8 24 24">
          <path
            fill="#fff"
            d="M20 9.5 8.6 18.9c-.6.5-.25 1.5.55 1.5h2.35V29c0 .83.67 1.5 1.5 1.5h4.5v-6h5v6H27c.83 0 1.5-.67 1.5-1.5v-8.6h2.35c.8 0 1.15-1 .55-1.5Z"
          />
        </svg>
      </div>
    ),
    size,
  );
}
