import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Icon, type IconName } from "@/components/Icon";
import { TrackedGrid } from "@/components/sections";
import { Breadcrumbs, CtaBand, FaqList, GetApp, IconTile, PhoneShot, SectionHeading, StatusPill } from "@/components/ui";
import { defaultLeadDays, dueSoonDays, reminderLeadDays } from "@/lib/plans";
import { breadcrumbSchema, faqSchema, pageMetadata, type Faq } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Landlord Certificate Reminder App: Features",
  description:
    "A landlord certificate reminder app for England. Choose reminders from 90 days to 1 day before expiry, see each property's status, store certificates and prepare for the register.",
  path: "/features",
});

const faqs: Faq[] = [
  {
    q: "When does Landlord Ready remind me?",
    a: `You choose: ${reminderLeadDays.join(", ").replace(/, (\d+)$/, " or $1")} days before something expires (${defaultLeadDays.join(", ").replace(/, (\d+)$/, " and $1")} by default), plus an optional final alert on the day it expires. Choose at least one.`,
  },
  {
    q: "Can I change my reminder schedule later?",
    a: "Yes. Open Settings, then Reminders, to change the lead times, the on-the-day alert and the weekly summary at any time.",
  },
  {
    q: "Does Landlord Ready store tenant details?",
    a: "No. The app has no fields for tenant names, contact details or identity documents.",
  },
  {
    q: "Can I use it for properties in Scotland or Wales?",
    a: "No. The rules, register and regions in the app are for England only.",
  },
];

const reminderFeatures: { icon: IconName; title: string; body: string }[] = [
  { icon: "calendar", title: "Your choice of lead times", body: `Pick any of ${reminderLeadDays.join(", ").replace(/, (\d+)$/, " and $1")} days before expiry. The default is ${defaultLeadDays.join(", ").replace(/, (\d+)$/, " and $1")} days.` },
  { icon: "alert", title: "A final alert on the day", body: "An optional reminder on the expiry date itself, if the certificate has not been renewed." },
  { icon: "list", title: "Weekly summary", body: "An optional Monday summary of what is coming up. Off unless you turn it on." },
  { icon: "bell", title: "Notifications in the app", body: "Reminders about expiring certificates appear in the app's notifications, and open the right property." },
];

const more: { icon: IconName; title: string; body: string }[] = [
  { icon: "home", title: "Properties", body: "Address, postcode, region, property type (house, flat, bungalow, HMO), bedrooms, whether it is let and whether it has gas." },
  { icon: "folder", title: "Document vault", body: "Photos and PDFs up to 20 MB, searchable and filtered by type. Scan paper certificates with your camera." },
  { icon: "register", title: "Register readiness", body: "Each property's regional window, an 8-step checklist and copy-ready details for the GOV.UK form." },
  { icon: "lock", title: "Private by design", body: "Each account can reach only its own records. Files are stored privately. No advertising or tracking tools." },
  { icon: "trash", title: "Delete any time", body: "Delete your account and all of its data in the app, or request deletion on this website." },
  { icon: "info", title: "Plain English", body: "No jargon: \"Gas safety certificate, expires 3 March\" rather than a code. Text scales with your phone settings." },
];

export default function FeaturesPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
  ];
  return (
    <>
      <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(faqs)]} />

      <section className="hero-glow border-b border-line" aria-labelledby="page-title">
        <div className="container-page grid items-center gap-12 pb-16 pt-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Breadcrumbs items={crumbs} />
            <h1 id="page-title" className="mt-8 text-4xl font-extrabold leading-[1.08] sm:text-5xl">
              The landlord certificate reminder app for England
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-2 sm:text-xl">
              Landlord Ready tracks every certificate&apos;s expiry date, reminds you early enough to book an engineer or
              electrician, and keeps the documents ready if anyone asks.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <GetApp />
              <Link href="/pricing" className="btn btn-secondary">
                See plans
              </Link>
            </div>
          </div>
          <PhoneShot screen="property" preload />
        </div>
      </section>

      <section aria-labelledby="reminders-title" className="container-page py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              id="reminders-title"
              eyebrow="Reminders"
              title="Reminded early, not on the day"
              intro="Gas engineers and electricians get booked up. Landlord Ready reminds you weeks ahead, so a renewal never becomes a rush."
            />
            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {reminderFeatures.map((f) => (
                <li key={f.title} className="flex flex-col gap-3">
                  <IconTile name={f.icon} />
                  <h3 className="text-lg font-bold">{f.title}</h3>
                  <p className="leading-relaxed text-ink-2">{f.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-6 sm:p-8">
            <h3 className="text-lg font-bold">How status works</h3>
            <p className="mt-2 leading-relaxed text-ink-2">
              Every item shows an icon and a word, so it works without relying on colour.
            </p>
            <dl className="mt-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <dt><StatusPill status="ok" /></dt>
                <dd className="text-ink-2">More than {dueSoonDays} days left</dd>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <dt><StatusPill status="soon" /></dt>
                <dd className="text-ink-2">Expires within {dueSoonDays} days</dd>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <dt><StatusPill status="bad" /></dt>
                <dd className="text-ink-2">Past its expiry date</dd>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <dt><StatusPill status="missing" /></dt>
                <dd className="text-ink-2">Required but not added yet</dd>
              </div>
            </dl>
            <p className="mt-6 rounded-xl bg-stone-soft p-4 text-sm leading-relaxed text-ink-2">
              Expiry dates come from the certificates you add. The app suggests a usual renewal date, but the date
              printed on your certificate always wins.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="screens-title" className="border-y border-line bg-stone-soft py-20">
        <div className="container-page">
          <SectionHeading id="screens-title" eyebrow="Screens" title="A look inside" intro="Real screens from the app, shown with example properties." />
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {(
              [
                ["properties", "Every property and its status"],
                ["certificate", "Each certificate, its dates and its document"],
                ["registration", "Registration windows for each property"],
              ] as const
            ).map(([screen, caption]) => (
              <li key={screen}>
                <figure>
                  <PhoneShot screen={screen} sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 80vw" />
                  <figcaption className="mt-4 text-center font-semibold">{caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="tracks-title" className="container-page py-20">
        <SectionHeading
          id="tracks-title"
          eyebrow="What it tracks"
          title="Nine records, set up for each property"
          intro="Items that apply to a let property in England are marked as required and count towards its score."
        />
        <div className="mt-12">
          <TrackedGrid />
        </div>
      </section>

      <section aria-labelledby="more-title" className="border-t border-line bg-tint py-20">
        <div className="container-page">
          <SectionHeading id="more-title" eyebrow="And more" title="Everything else in the app" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((f) => (
              <li key={f.title} className="card p-6">
                <IconTile name={f.icon} />
                <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-2">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="not-title" className="container-page py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              id="not-title"
              eyebrow="Honest limits"
              title="What Landlord Ready does not do"
              intro="It stays simple on purpose."
            />
          </div>
          <ul className="space-y-4">
            {[
              "It does not register you on the government register. You do that on GOV.UK, with your details ready.",
              "It does not give legal advice or connect to GOV.UK.",
              "It does not hold tenant records, track rent or message tenants.",
              "It does not read your uploaded documents automatically. You enter the dates.",
              "It covers England only, not Scotland, Wales or Northern Ireland.",
            ].map((t) => (
              <li key={t} className="flex gap-3 rounded-2xl border border-line p-4">
                <Icon name="info" className="mt-0.5 size-5 shrink-0 text-link" />
                <span className="min-w-0 leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="border-t border-line bg-stone-soft py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading id="faq-title" eyebrow="Questions" title="About reminders and features" />
          <FaqList faqs={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
