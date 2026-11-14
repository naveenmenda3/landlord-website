import { useId } from "react";

/** The Landlord Ready mark: an orange tile with a house and a check badge. */
export function LogoMark({ className = "size-9 shrink-0" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`lr-${id}`} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0" stopColor="#F97316" />
          <stop offset="1" stopColor="#C2410C" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill={`url(#lr-${id})`} />
      <path
        fill="#fff"
        d="M20 9.5 8.6 18.9c-.6.5-.25 1.5.55 1.5h2.35V29c0 .83.67 1.5 1.5 1.5h4.5v-6h5v6H27c.83 0 1.5-.67 1.5-1.5v-8.6h2.35c.8 0 1.15-1 .55-1.5Z"
      />
      <circle cx="30" cy="30" r="7.2" fill={`url(#lr-${id})`} />
      <circle cx="30" cy="30" r="5.4" fill="#fff" />
      <path d="m27.5 30.1 1.75 1.75 3.3-3.5" fill="none" stroke="#C2410C" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="inline-flex min-w-0 items-center gap-2.5 text-lg font-extrabold leading-tight tracking-tight text-ink">
      <LogoMark />
      <span className="min-w-0 break-words">Landlord Ready</span>
    </span>
  );
}
