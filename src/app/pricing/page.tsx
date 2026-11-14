import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { Breadcrumbs, CtaBand, FaqList, GetApp, SectionHeading } from "@/components/ui";
import { freePlan, plusPlans, trialDays } from "@/lib/plans";
import { breadcrumbSchema, faqSchema, pageMetadata, softwareApplicationSchema, type Faq } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Pricing: Free for One Property",
  description: `Landlord Ready is free for one property. Plus costs ${plusPlans[1].price} a month or ${plusPlans[0].price} a year for unlimited properties and documents and the full registration checklist.`,
  path: "/pricing",
});

const faqs: Faq[] = [
  {
    q: "Is there a free trial of Plus?",
    a: `Yes. Plus starts with a ${trialDays}-day free trial. After the trial you pay ${plusPlans[0].price} a year or ${plusPlans[1].price} a month, depending on the plan you chose.`,
  },
  {
    q: "How do I pay and cancel?",
    a: "Plus is bought inside the app through Google Play, and you manage or cancel it in your Google Play subscriptions. Deleting your Landlord Ready account does not cancel a subscription, so cancel it in Google Play too.",
  },
  {
    q: "What happens if I cancel Plus?",
    a: "Your records stay. You keep full access until the end of the period you paid for, then return to the free plan limits.",
  },
  {
    q: "Do prices include VAT?",
    a: "Google Play shows the final price, including any tax, before you confirm a purchase. The prices on this page are the ones shown in the app.",
  },
];

const rows: { label: string; free: string | boolean; plus: string | boolean }[] = [
  { label: "Properties", free: `${freePlan.properties}`, plus: "Unlimited" },
  { label: "Certificate tracking with expiry dates", free: true, plus: true },
  { label: "Status for every item: in date, due soon, expired, missing", free: true, plus: true },
  { label: "Reminders before anything expires", free: true, plus: true },
  { label: "Document vault (photos and PDFs)", free: `${freePlan.documents} files`, plus: "Unlimited" },
  { label: "Registration window for each property", free: true, plus: true },
  { label: "Registration readiness checklist", free: `First ${freePlan.readinessSteps} steps`, plus: "All steps" },
  { label: "Copy-ready details for the GOV.UK form", free: false, plus: true },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true)
    return (
      <span className="inline-flex items-center gap-1.5 font-semibold text-ok">
        <Icon name="checkCircle" className="size-5" />
        Included
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex items-center gap-1.5 text-ink-2">
        <Icon name="info" className="size-5" />
        Not included
      </span>
    );
  return <span className="font-semibold">{value}</span>;
}

export default function PricingPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
  ];
  const [yearly, monthly] = plusPlans;
  return (
    <>
      <JsonLd data={[softwareApplicationSchema(), breadcrumbSchema(crumbs), faqSchema(faqs)]} />

      <section className="hero-glow border-b border-line" aria-labelledby="page-title">
        <div className="container-page pb-14 pt-8 text-center">
          <div className="flex justify-start">
            <Breadcrumbs items={crumbs} />
          </div>
          <h1 id="page-title" className="mx-auto mt-10 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl">
            Simple pricing for landlords
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-2 sm:text-xl">
            Start free with one property. Upgrade to Plus for every property you let, with a {trialDays}-day free trial.
          </p>
        </div>
      </section>

      <section aria-label="Plans" className="container-page -mt-2 py-14">
        <ul className="grid gap-6 lg:grid-cols-3">
          <li className="card flex flex-col p-7">
            <h2 className="text-xl font-extrabold">Free</h2>
            <p className="mt-1 text-ink-2">For a single property</p>
            <p className="mt-6 text-5xl font-extrabold">{freePlan.price}</p>
            <p className="mt-1 text-ink-2">Free for as long as you like</p>
            <ul className="mt-6 space-y-3">
              {[`${freePlan.properties} property`, "Certificate tracking and reminders", `${freePlan.documents} stored documents`, "Registration checklist preview"].map((t) => (
                <li key={t} className="flex gap-2.5">
                  <Icon name="check" className="mt-0.5 size-5 shrink-0 text-ok" />
                  {t}
                </li>
              ))}
            </ul>
          </li>

          <li className="card relative flex flex-col border-brand p-7 ring-2 ring-brand">
            <span className="absolute -top-3.5 left-7 inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1 text-sm font-extrabold text-on-brand">
              <Icon name="check" className="size-4" />
              {yearly.badge}
            </span>
            <h2 className="text-xl font-extrabold">Plus yearly</h2>
            <p className="mt-1 text-ink-2">Best value for small portfolios</p>
            <p className="mt-6 text-5xl font-extrabold">
              {yearly.price}
              <span className="text-lg font-semibold text-ink-2"> / year</span>
            </p>
            <p className="mt-1 text-ink-2">{yearly.note}</p>
            <PlusList />
          </li>

          <li className="card flex flex-col p-7">
            <h2 className="text-xl font-extrabold">Plus monthly</h2>
            <p className="mt-1 text-ink-2">Flexible, cancel any time</p>
            <p className="mt-6 text-5xl font-extrabold">
              {monthly.price}
              <span className="text-lg font-semibold text-ink-2"> / month</span>
            </p>
            <p className="mt-1 text-ink-2">{monthly.note}</p>
            <PlusList />
          </li>
        </ul>
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <GetApp />
          <p className="max-w-xl text-sm leading-relaxed text-ink-2">
            Plus is bought inside the app through Google Play. After the {trialDays}-day free trial you pay the price of
            the plan you chose. Cancel any time in your Google Play settings.
          </p>
        </div>
      </section>

      <section aria-labelledby="compare-title" className="border-y border-line bg-stone-soft py-16">
        <div className="container-page">
          <SectionHeading id="compare-title" title="Compare plans" />
          <div className="table-wrap mt-8 bg-white">
            <table className="w-full !min-w-0 text-left">
              <caption className="visually-hidden">What the Free and Plus plans include</caption>
              <thead className="bg-tint text-on-brand">
                <tr>
                  <th scope="col" className="p-4 font-bold">Feature</th>
                  <th scope="col" className="p-4 font-bold">Free</th>
                  <th scope="col" className="p-4 font-bold">Plus</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.label} className="border-t border-line">
                    <th scope="row" className="p-4 font-medium">{r.label}</th>
                    <td className="p-4"><Cell value={r.free} /></td>
                    <td className="p-4"><Cell value={r.plus} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-2">
            For comparison, GOV.UK sets the Register your rental property fee at £65 per property per year. That fee is
            paid to the government service, not to Landlord Ready.
          </p>
        </div>
      </section>

      <section aria-labelledby="faq-title" className="container-page grid gap-10 py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading id="faq-title" eyebrow="Questions" title="About plans and billing" />
        <FaqList faqs={faqs} />
      </section>

      <CtaBand />
    </>
  );
}

function PlusList() {
  return (
    <ul className="mt-6 space-y-3">
      {["Unlimited properties", "Unlimited document vault", "Full registration checklist", "Copy-ready details for GOV.UK"].map((t) => (
        <li key={t} className="flex gap-2.5">
          <Icon name="check" className="mt-0.5 size-5 shrink-0 text-ok" />
          {t}
        </li>
      ))}
    </ul>
  );
}
