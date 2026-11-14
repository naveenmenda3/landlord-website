import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { GuideCards, TrackedGrid } from "@/components/sections";
import { CtaBand, FaqList, GetApp, IconTile, PhoneShot, SectionHeading, StatusPill, type Screen } from "@/components/ui";
import { defaultLeadDays, freePlan, plusPlans, trialDays } from "@/lib/plans";
import { faqSchema, pageMetadata, softwareApplicationSchema, type Faq } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Landlord Ready: Landlord Compliance App for England",
    description:
      "The landlord compliance app for England. Track gas safety, EICR, EPC, alarm and deposit records, get reminders before they expire, and get ready to register your rental property.",
    path: "/",
  }),
  title: { absolute: "Landlord Ready: Landlord Compliance App for England" },
};

const faqs: Faq[] = [
  {
    q: "What is Landlord Ready?",
    a: "Landlord Ready is an Android app for private landlords in England. It tracks each property's certificates and expiry dates, reminds you before anything expires, keeps your documents in one place and helps you get ready for the government's rental property register.",
  },
  {
    q: "Is Landlord Ready free?",
    a: `The free plan covers ${freePlan.properties} property, with certificate tracking, reminders, up to ${freePlan.documents} stored documents and a preview of the registration checklist. Landlord Ready Plus costs ${plusPlans[1].price} a month or ${plusPlans[0].price} a year for unlimited properties and documents and the full registration checklist, with a ${trialDays}-day free trial.`,
  },
  {
    q: "Does the app register my property on the government register?",
    a: "No. You register on the official GOV.UK service yourself. The app shows your region's window, a checklist of what to have ready and the details to copy into the form. Landlord Ready is not affiliated with GOV.UK.",
  },
  {
    q: "Where do the expiry dates come from?",
    a: "From the certificates you add. When you enter an issue date the app suggests a usual renewal date, but the date printed on your certificate always wins, so check it and change it if needed.",
  },
  {
    q: "Which parts of the UK are covered?",
    a: "England only for now. Scotland, Wales and Northern Ireland have different rules.",
  },
  {
    q: "Is my data safe?",
    a: "Your records are private to your account, files are stored privately, and the app has no fields for tenant details or identity documents. You can delete your account and all of its data at any time.",
  },
  {
    q: "Is this legal advice?",
    a: "No. Landlord Ready is an organiser and reminder tool. Always check GOV.UK or a qualified adviser for your situation.",
  },
];

const steps = [
  {
    icon: "home" as const,
    title: "Add your property",
    body: "Enter the address, region, whether it is let and whether it has gas. Landlord Ready lists the certificates and records that property needs.",
  },
  {
    icon: "camera" as const,
    title: "Add your certificates",
    body: "Type the date on each certificate, check the suggested expiry date, and snap a photo or attach the PDF.",
  },
  {
    icon: "bell" as const,
    title: "Get reminded in good time",
    body: `By default you are reminded ${defaultLeadDays.join(", ").replace(/, (\d+)$/, " and $1")} days before anything expires, so there is time to book an engineer.`,
  },
];

const showcase: { screen: Screen; eyebrow: string; title: string; body: string; points: string[] }[] = [
  {
    screen: "property",
    eyebrow: "Status at a glance",
    title: "See what is in date, due soon or missing",
    body: "Every property gets a compliance score from its required items. Each certificate shows its status with an icon and a word, never colour alone.",
    points: ["In date, due soon (within 60 days), expired or missing", "Most urgent items listed first on the home screen", "Properties without gas skip the gas safety check"],
  },
  {
    screen: "certificate-form",
    eyebrow: "Certificates",
    title: "Add a certificate in under a minute",
    body: "Pick the type, enter the date on the certificate and Landlord Ready suggests the usual renewal date. Change it if your certificate shows a different one.",
    points: ["Suggested expiry for gas (12 months), EICR (5 years) and EPC (10 years)", "Reference number and notes, such as the engineer's details", "Attach a photo or PDF of the certificate"],
  },
  {
    screen: "documents",
    eyebrow: "Document vault",
    title: "Every certificate one tap away",
    body: "Scan a paper certificate with your camera or upload a PDF. Search by name and filter by type, grouped by property.",
    points: ["Photos and PDFs up to 20 MB", "Stored privately, opened with a link that expires after 10 minutes", "Ready to send to a tenant, agent or council"],
  },
  {
    screen: "registration-property",
    eyebrow: "Rental property register",
    title: "Ready to register, region by region",
    body: "See when your region's registration window opens, what to have ready, and copy-ready details to paste into the GOV.UK form.",
    points: ["Your region's opening date and deadline", "Certificate steps tick themselves when records are in date", "You register on GOV.UK yourself; the app never does it for you"],
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={[softwareApplicationSchema(), faqSchema(faqs)]} />

      {/* Hero */}
      <section className="hero-glow overflow-hidden border-b border-line" aria-labelledby="hero-title">
        <div className="container-page grid items-center gap-12 pb-16 pt-10 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
          <div className="max-w-2xl">
            <p className="eyebrow">
              <Icon name="home" className="size-4" />
              For private landlords in England
            </p>
            <h1 id="hero-title" className="mt-5 text-[2.5rem] font-extrabold leading-[1.05] sm:text-6xl">
              The landlord compliance app that keeps every certificate{" "}
              <span className="relative">
                <span className="relative z-10">in date</span>
                <span aria-hidden="true" className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full bg-brand-light/70 sm:h-4" />
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-2 sm:text-xl">
              Track gas safety, EICR, EPC, alarm and deposit records for each property, get reminded before anything
              expires, and have every detail ready for the new rental property register.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <GetApp />
              <Link href="#how-it-works" className="btn btn-secondary">
                How it works
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[0.95rem] font-semibold text-ink">
              {[`Free for ${freePlan.properties} property`, "England's rules, in plain English", "No tenant details stored"].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <span className="inline-flex size-6 items-center justify-center rounded-full bg-ok-soft text-ok">
                    <Icon name="check" className="size-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-[340px]">
            <div aria-hidden="true" className="absolute -inset-10 -z-0 rounded-full bg-[radial-gradient(closest-side,rgb(251_146_60_/_0.35),transparent)]" />
            <PhoneShot screen="home" preload sizes="(min-width: 1024px) 300px, (min-width: 640px) 300px, 80vw" className="relative" />
            <div aria-hidden="true" className="absolute -left-12 top-[58%] hidden rotate-[-4deg] sm:block">
              <div className="card px-3 py-2">
                <StatusPill status="soon">Gas safety due in 21 days</StatusPill>
              </div>
            </div>
            <div aria-hidden="true" className="absolute -right-10 top-[22%] hidden rotate-[3deg] sm:block">
              <div className="card px-3 py-2">
                <StatusPill status="ok">EICR in date</StatusPill>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register notice */}
      <section aria-labelledby="register-title" className="container-page -mt-8 relative z-10">
        <div className="card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex gap-4">
            <IconTile name="register" />
            <div className="min-w-0">
              <h2 id="register-title" className="text-lg font-extrabold sm:text-xl">
                Register your rental property opens on 15 December 2026
              </h2>
              <p className="mt-1 leading-relaxed text-ink-2">
                Every let property in England must be registered, region by region, with a fee of £65 per property per
                year. Find your region&apos;s deadline and what to have ready.
              </p>
            </div>
          </div>
          <Link href="/guides/register-your-rental-property" className="btn btn-secondary shrink-0">
            Registration dates
            <Icon name="arrowRight" className="size-4" />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" aria-labelledby="how-title" className="container-page py-20 sm:py-24">
        <SectionHeading
          id="how-title"
          eyebrow="How it works"
          title="Three steps to a calm compliance routine"
          intro="No spreadsheets and no folders of paper. Landlord Ready tells you what each property needs and when."
          center
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="card relative p-6 sm:p-7">
              <span className="absolute right-6 top-6 text-5xl font-extrabold text-tint-2" aria-hidden="true">
                {i + 1}
              </span>
              <IconTile name={s.icon} />
              <h3 className="mt-5 text-xl font-bold">
                <span className="visually-hidden">Step {i + 1}: </span>
                {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-2">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Feature showcase with real screenshots */}
      <section aria-labelledby="features-title" className="border-y border-line bg-stone-soft py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            id="features-title"
            eyebrow="Inside the app"
            title="Built for landlords with one property or ten"
            intro="Real screens from the Landlord Ready app, shown with example properties."
          />
          <div className="mt-14 space-y-20 sm:space-y-24">
            {showcase.map((f, i) => (
              <div key={f.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <p className="text-sm font-extrabold uppercase tracking-wider text-link">{f.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">{f.title}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-ink-2">{f.body}</p>
                  <ul className="mt-6 space-y-3">
                    {f.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-tint-2 text-on-brand">
                          <Icon name="check" className="size-4" />
                        </span>
                        <span className="min-w-0 leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <PhoneShot screen={f.screen} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/features" className="btn btn-secondary">
              See every feature
              <Icon name="arrowRight" className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* What it tracks */}
      <section aria-labelledby="tracks-title" className="container-page py-20 sm:py-24">
        <SectionHeading
          id="tracks-title"
          eyebrow="What it tracks"
          title="Every certificate a let property in England usually needs"
          intro="Required items count towards each property's score. Optional records are there when you want them."
        />
        <div className="mt-12">
          <TrackedGrid />
        </div>
      </section>

      {/* Pricing teaser */}
      <section aria-labelledby="pricing-title" className="border-y border-line bg-tint py-20 sm:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <SectionHeading
            id="pricing-title"
            eyebrow="Pricing"
            title="Free for one property. Plus when you need more."
            intro={`Start with one property free. Plus unlocks unlimited properties, unlimited documents and the full registration checklist, with a ${trialDays}-day free trial.`}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="card p-6">
              <p className="font-bold text-ink-2">Free</p>
              <p className="mt-2 text-4xl font-extrabold">{freePlan.price}</p>
              <p className="mt-2 text-ink-2">{freePlan.properties} property, {freePlan.documents} documents</p>
            </div>
            <div className="card border-brand p-6 ring-2 ring-brand">
              <p className="font-bold text-ink-2">Plus</p>
              <p className="mt-2 text-4xl font-extrabold">
                {plusPlans[1].price}
                <span className="text-base font-semibold text-ink-2"> / month</span>
              </p>
              <p className="mt-2 text-ink-2">
                or {plusPlans[0].price} a year ({plusPlans[0].perMonth} a month)
              </p>
            </div>
            <Link href="/pricing" className="btn btn-primary sm:col-span-2">
              Compare plans
              <Icon name="arrowRight" className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section aria-labelledby="guides-title" className="container-page py-20 sm:py-24">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            id="guides-title"
            eyebrow="Free guides"
            title="Landlord rules, explained plainly"
            intro="Short guides to the rules in England, with links to the official GOV.UK sources."
          />
          <Link href="/guides" className="btn btn-secondary shrink-0">
            All guides
          </Link>
        </div>
        <div className="mt-10">
          <GuideCards limit={6} />
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-title" className="border-t border-line bg-stone-soft py-20 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading id="faq-title" eyebrow="Questions" title="Frequently asked questions" />
          <FaqList faqs={faqs} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
