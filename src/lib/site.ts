// Site-wide settings. Everything public comes from NEXT_PUBLIC_* variables
// with safe defaults, so the site builds without any configuration.

function clean(value: string | undefined): string {
  return (value ?? "").trim().replace(/\/+$/, "");
}

export const site = {
  name: "Landlord Ready",
  url: clean(process.env.NEXT_PUBLIC_SITE_URL) || "https://landlordready.app",
  supportEmail: "support@landlordready.app",
  description:
    "Landlord Ready is a landlord compliance app for England. Track gas safety, EICR, EPC, alarm and deposit records, get reminders before anything expires, and get each property ready for the new rental property register.",
  /** The date the guides and legal facts on this site were last checked. */
  lastReviewed: "November 2026",
  lastReviewedIso: "2026-11-12",
  locale: "en_GB",
} as const;

/** Google Play listing. Empty until the app is published. */
export const playStoreUrl = clean(process.env.NEXT_PUBLIC_PLAY_STORE_URL);

/**
 * Public settings for the account deletion request form. The publishable key
 * is the same public key the app ships with; database grants and row-level
 * security control what it can reach. On this website it is only used to call
 * request_account_deletion(), which can add a request to a private list and
 * cannot read or change any data. NEVER put a secret key here.
 */
export const deletionConfig = {
  supabaseUrl: clean(process.env.NEXT_PUBLIC_SUPABASE_URL) || "https://bhfcchxmwaczzumyrorz.supabase.co",
  supabasePublishableKey:
    (process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "").trim() ||
    "sb_publishable_R6TtvmhlvBSFp-dFKRwKgQ_dPuhsCv5",
  requestTimeoutMs: 15000,
} as const;

export function absoluteUrl(path: string): string {
  return `${site.url}${path === "/" ? "" : path}`;
}
