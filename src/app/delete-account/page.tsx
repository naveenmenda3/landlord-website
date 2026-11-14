import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { DeletionForm } from "@/components/DeletionForm";
import { Breadcrumbs, Callout, IconTile } from "@/components/ui";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Request Account and Data Deletion",
  description:
    "Delete your Landlord Ready account and data: instantly in the app, or request it here without the app. See what is deleted and how long it takes.",
  path: "/delete-account",
});

const mailtoDelete = `mailto:${site.supportEmail}?subject=${encodeURIComponent("Delete my Landlord Ready account")}`;

const deleted: [string, string][] = [
  [
    "Account and sign-in details (name, email address, password)",
    "Permanently deleted. Your sign-in account is removed from our authentication service, so you can no longer sign in. You can create a new account with the same email address later.",
  ],
  ["Properties", "Every property and its details are deleted."],
  ["Certificates", "Every certificate record is deleted, including dates, reference numbers and notes."],
  ["Uploaded documents", "Every file is deleted from storage, and the document records are deleted."],
  ["Checklist, reminder settings and notifications", "Deleted."],
  ["Other related records", "Every record in our database is linked to your account and is deleted with it."],
];

const requestSteps: [string, string][] = [
  ["We receive your request", "It is stored securely, and you see a confirmation on screen. Nothing has been deleted at this point."],
  [
    "We check it's you",
    `Within two working days, we email your registered address from ${site.supportEmail}. Reply from that address to confirm. We will never ask for your password.`,
  ],
  [
    "We delete your account",
    "Once you confirm, we delete your uploaded files, then your account and all related data. We do this promptly, and always within one month of receiving your request.",
  ],
  ["You get a confirmation", "We email you to confirm that your account and data have been deleted."],
];

export default function DeleteAccountPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Delete account", path: "/delete-account" },
  ];
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <section className="hero-glow border-b border-line" aria-labelledby="page-title">
        <div className="container-page pb-12 pt-8">
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow mt-8">Account</p>
          <h1 id="page-title" className="mt-4 text-4xl font-extrabold leading-[1.08] sm:text-5xl">
            Request Account and Data Deletion
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
            Delete your Landlord Ready account and the data stored with it. You can do it in the app straight away, or
            send us a request from this page. You don&apos;t need the app installed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-danger" href="#request">
              Go to the deletion request form
            </a>
            <a className="btn btn-secondary" href="#what-is-deleted">
              What gets deleted
            </a>
          </div>
        </div>
      </section>

      <section className="container-page py-16" aria-labelledby="ways-heading">
        <h2 id="ways-heading" className="text-3xl font-extrabold">
          Two ways to delete your account
        </h2>
        <p className="mt-3 text-lg text-ink-2">Both delete the same information. The only difference is how quickly it happens.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card p-7">
            <div className="flex items-center justify-between gap-3">
              <IconTile name="phone" />
              <span className="rounded-full bg-tint-2 px-3 py-1 text-sm font-bold text-on-brand">Immediate</span>
            </div>
            <h3 className="mt-4 text-xl font-extrabold">Delete in the app</h3>
            <p className="mt-2 leading-relaxed text-ink-2">If you can still sign in, this is the fastest way. In the app, go to:</p>
            <ol aria-label="Where to find account deletion in the app" className="mt-3 flex flex-wrap items-center gap-2 font-bold">
              {["Settings", "Account details", "Delete my account"].map((s, i) => (
                <li key={s} className="inline-flex items-center gap-2">
                  {i > 0 ? <span aria-hidden="true" className="text-ink-2">&rarr;</span> : null}
                  <span className="rounded-lg bg-stone-soft px-2.5 py-1 ring-1 ring-line">{s}</span>
                </li>
              ))}
            </ol>
            <p className="mt-3 leading-relaxed text-ink-2">
              Enter your password to confirm. Your files, account and all related data are deleted straight away, and you
              are signed out.
            </p>
          </div>
          <div className="card p-7">
            <div className="flex items-center justify-between gap-3">
              <IconTile name="document" className="!bg-bad-soft !text-bad" />
              <span className="rounded-full bg-tint-2 px-3 py-1 text-sm font-bold text-on-brand">No app needed</span>
            </div>
            <h3 className="mt-4 text-xl font-extrabold">Request deletion here</h3>
            <p className="mt-2 leading-relaxed text-ink-2">
              Use the form on this page if you have uninstalled the app, can&apos;t sign in, or would rather we did it for
              you.
            </p>
            <p className="mt-2 leading-relaxed text-ink-2">
              We will email your registered address to confirm the request came from you, then delete your account and
              send you a confirmation.
            </p>
            <a className="btn btn-secondary mt-5" href="#request">
              Fill in the request form
            </a>
          </div>
        </div>
      </section>

      <section id="what-is-deleted" className="scroll-mt-24 border-y border-line bg-stone-soft py-16" aria-labelledby="deleted-heading">
        <div className="container-page max-w-4xl">
          <h2 id="deleted-heading" className="text-3xl font-extrabold">
            What gets deleted
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-ink-2">
            Deleting your account permanently deletes everything stored with it. It is not a suspension or deactivation:
            nothing is kept in a paused state, and it cannot be undone.
          </p>
          <div className="policy-body prose-lr mt-8">
            <div className="table-wrap bg-white">
              <table className="data-table">
                <caption className="visually-hidden">What happens to each type of information when your account is deleted</caption>
                <thead>
                  <tr>
                    <th scope="col">Information</th>
                    <th scope="col">What happens</th>
                  </tr>
                </thead>
                <tbody>
                  {deleted.map(([what, happens]) => (
                    <tr key={what}>
                      <th scope="row">{what}</th>
                      <td data-label="What happens">{happens}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3>What we may keep</h3>
            <ul>
              <li>
                <strong>Your deletion request.</strong> Your name, email address, the request date and the outcome, plus
                our emails about it. We keep these for <span className="ph">[TO CONFIRM: retention period, e.g. 12 months]</span>{" "}
                to show the request was handled, then delete them.
              </li>
              <li>
                <strong>Backups and logs.</strong> Our database provider, Supabase, keeps backups and technical logs for a
                limited period: <span className="ph">[TO CONFIRM: backup and log retention for your Supabase plan]</span>.
                Copies of deleted data stay in these only until they expire. We never use them to restore a deleted
                account.
              </li>
              <li>
                <strong>Records held by others.</strong> If you bought anything through Google Play or the App Store, they
                keep their own purchase records under their own privacy policies.
              </li>
            </ul>
            <p>
              We don&apos;t keep anything else. If a legal obligation ever required us to keep specific information, we
              would tell you what and why when we reply to your request.
            </p>
          </div>

          <div className="mt-8">
            <Callout tone="warn" icon="warning">
              <p>
                <strong>Before you delete</strong>
              </p>
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  Want a copy of your records? Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> before
                  you delete, and we will send them to you.
                </li>
                <li>Deleting your account does not cancel a Google Play or App Store subscription. Cancel it in your store account.</li>
              </ul>
            </Callout>
          </div>
        </div>
      </section>

      <section className="container-page max-w-4xl py-16" aria-labelledby="process-heading">
        <h2 id="process-heading" className="text-3xl font-extrabold">
          What happens after you send a request
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-ink-2">
          We never delete an account just because someone typed an email address into a form. We first check that the
          request really comes from the account owner.
        </p>
        <ol className="mt-8 space-y-5">
          {requestSteps.map(([title, body], i) => (
            <li key={title} className="flex gap-4">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-tint-2 text-lg font-extrabold text-on-brand">
                {i + 1}
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="mt-1 leading-relaxed text-ink-2">{body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="request" className="scroll-mt-20 border-t border-line bg-stone-soft py-16" aria-labelledby="request-heading">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <DeletionForm />
          <aside aria-label="Help with your request" className="space-y-4">
            <div className="card p-6">
              <h3 className="font-extrabold">Prefer email?</h3>
              <p className="mt-2 leading-relaxed text-ink-2">
                Email <a href={mailtoDelete}>{site.supportEmail}</a> from your registered email address with the subject
                &ldquo;Delete my Landlord Ready account&rdquo;.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-extrabold">Can&apos;t use your registered email?</h3>
              <p className="mt-2 leading-relaxed text-ink-2">
                Email us from another address and explain. We will tell you how we can confirm that you own the account.
                We can&apos;t delete an account until we&apos;ve confirmed that.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-extrabold">How long it takes</h3>
              <p className="mt-2 leading-relaxed text-ink-2">
                In the app: immediately. By request: we contact you within two working days, and the deletion is always
                finished within one month of your request.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
