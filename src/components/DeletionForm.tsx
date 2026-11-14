"use client";

// Account deletion request form, ported from the static site's
// assets/js/delete-account.js. It sends the request to the
// request_account_deletion() database function in Supabase. The function
// checks everything again on the server, limits repeat requests and stores
// the request in a private table. It never deletes anything: the owner
// verifies the request by email first, and the page says so.

import { useEffect, useRef, useState, type FormEvent } from "react";
import { deletionConfig, site } from "@/lib/site";
import { Icon } from "./Icon";

// Keep these in step with request_account_deletion() on the server.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_REASON = 1000;

type FieldKey = "fullName" | "email" | "reason" | "confirm";
type Values = { fullName: string; email: string; reason: string; confirm: boolean };
type Errors = Partial<Record<FieldKey, string>>;

const FIELD_ORDER: FieldKey[] = ["fullName", "email", "reason", "confirm"];

const validators: Record<FieldKey, (v: Values) => string> = {
  fullName: (v) => {
    const value = v.fullName.trim();
    if (!value) return "Enter your full name";
    if (value.length > MAX_NAME) return `Your name must be ${MAX_NAME} characters or fewer`;
    return "";
  },
  email: (v) => {
    const value = v.email.trim();
    if (!value) return "Enter the email address you use for Landlord Ready";
    if (value.length > MAX_EMAIL) return `Your email address must be ${MAX_EMAIL} characters or fewer`;
    if (!EMAIL_PATTERN.test(value)) return "Enter an email address in the correct format, like name@example.com";
    return "";
  },
  reason: (v) =>
    v.reason.trim().length > MAX_REASON ? `Your reason must be ${MAX_REASON.toLocaleString("en-GB")} characters or fewer` : "",
  confirm: (v) => (v.confirm ? "" : "Tick the box to confirm that you understand deletion is permanent"),
};

const SERVER_FIELD_ERRORS: Record<string, { key: FieldKey; message: string }> = {
  invalid_name: { key: "fullName", message: `Enter your full name (up to ${MAX_NAME} characters)` },
  invalid_email: { key: "email", message: "Enter an email address in the correct format, like name@example.com" },
  invalid_reason: { key: "reason", message: `Your reason must be ${MAX_REASON.toLocaleString("en-GB")} characters or fewer` },
  confirmation_required: { key: "confirm", message: "Tick the box to confirm that you understand deletion is permanent" },
};

const mailtoDelete = `mailto:${site.supportEmail}?subject=${encodeURIComponent("Delete my Landlord Ready account")}`;

export function DeletionForm() {
  const [values, setValues] = useState<Values>({ fullName: "", email: "", reason: "", confirm: false });
  const [errors, setErrors] = useState<Errors>({});
  const [summary, setSummary] = useState<{ key: FieldKey; message: string }[]>([]);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [doneEmail, setDoneEmail] = useState<string | null>(null);
  const trap = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const summaryVersion = useRef(0);
  const [summaryTick, setSummaryTick] = useState(0);

  useEffect(() => {
    if (summaryTick > 0 && summary.length > 0) summaryRef.current?.focus();
  }, [summaryTick, summary.length]);

  useEffect(() => {
    if (status) statusRef.current?.scrollIntoView({ block: "nearest" });
  }, [status]);

  useEffect(() => {
    if (doneEmail) {
      successRef.current?.focus({ preventScroll: true });
      // Scroll to the whole card so its icon isn't hidden under the sticky header.
      cardRef.current?.scrollIntoView({ block: "start" });
    }
  }, [doneEmail]);

  function showSummary(list: { key: FieldKey; message: string }[]) {
    setSummary(list);
    summaryVersion.current += 1;
    setSummaryTick(summaryVersion.current);
  }

  function update<K extends FieldKey>(key: K, value: Values[K]) {
    const next = { ...values, [key]: value };
    setValues(next);
    // Once a field has shown an error, clear it as soon as the input is fixed.
    if (errors[key] && !validators[key](next)) {
      setErrors((e) => ({ ...e, [key]: "" }));
    }
  }

  function handleFailure(body: unknown) {
    const code =
      body && typeof body === "object" && typeof (body as { message?: unknown }).message === "string"
        ? (body as { message: string }).message
        : "";
    const serverError = SERVER_FIELD_ERRORS[code];
    if (serverError) {
      setErrors((e) => ({ ...e, [serverError.key]: serverError.message }));
      showSummary([serverError]);
      return;
    }
    if (code === "rate_limited") {
      setStatus("We are receiving a lot of requests right now, so we couldn't accept yours. Please try again in an hour.");
      return;
    }
    setStatus("Sorry, we couldn't send your request. Please check your connection and try again.");
  }

  async function send() {
    const payload = {
      p_full_name: values.fullName.trim(),
      p_email: values.email.trim(),
      p_reason: values.reason.trim() || null,
      p_confirmed: values.confirm,
      p_website: trap.current ? trap.current.value : "",
    };

    setBusy(true);
    const controller = typeof AbortController === "function" ? new AbortController() : null;
    const timer = controller ? window.setTimeout(() => controller.abort(), deletionConfig.requestTimeoutMs || 15000) : null;
    let succeeded = false;

    try {
      const response = await fetch(`${deletionConfig.supabaseUrl}/rest/v1/rpc/request_account_deletion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          apikey: deletionConfig.supabasePublishableKey,
        },
        body: JSON.stringify(payload),
        credentials: "omit",
        cache: "no-store",
        signal: controller ? controller.signal : undefined,
      });
      const body: unknown = await response.json().catch(() => null);
      if (response.ok && body && typeof body === "object" && (body as { status?: unknown }).status === "received") {
        succeeded = true;
        setDoneEmail(payload.p_email);
      } else {
        handleFailure(body);
      }
    } catch {
      setStatus("Sorry, we couldn't reach our server. Please check your connection and try again.");
    } finally {
      if (timer) window.clearTimeout(timer);
      if (!succeeded) setBusy(false);
    }
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy || doneEmail) return; // ignore double clicks and repeat submits
    setStatus("");
    const found: { key: FieldKey; message: string }[] = [];
    const nextErrors: Errors = {};
    for (const key of FIELD_ORDER) {
      const message = validators[key](values);
      nextErrors[key] = message;
      if (message) found.push({ key, message });
    }
    setErrors(nextErrors);
    showSummary(found);
    if (found.length > 0) return;
    void send();
  }

  function focusField(key: FieldKey) {
    const input = document.getElementById(key);
    if (input) {
      input.focus();
      input.scrollIntoView({ block: "center" });
    }
  }

  const fieldWrap = (key: FieldKey) =>
    `flex flex-col gap-2 ${errors[key] ? "border-l-4 border-bad pl-4" : ""}`;
  const inputCls = (key: FieldKey) =>
    `min-h-12 w-full rounded-xl border-2 bg-white px-4 py-3 text-base text-ink outline-none focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ink ${
      errors[key] ? "border-bad" : "border-[#a8a29e]"
    }`;

  function fieldError(k: FieldKey) {
    if (!errors[k]) return null;
    return (
      <p id={`${k}-error`} className="font-bold text-bad">
        <span className="visually-hidden">Error: </span>
        {errors[k]}
      </p>
    );
  }

  return (
    <div ref={cardRef} className="card scroll-mt-24 p-6 sm:p-8">
      {doneEmail === null ? (
        <div>
          <h2 id="request-heading" className="text-2xl font-extrabold">
            Deletion request form
          </h2>
          <p className="mt-2 leading-relaxed text-ink-2">
            All fields are required unless marked optional. Submitting this form does not delete anything yet. We will
            confirm the request with you by email first.
          </p>

          {summary.length > 0 ? (
            <div
              ref={summaryRef}
              tabIndex={-1}
              role="alert"
              aria-labelledby="error-summary-title"
              className="mt-6 rounded-2xl border-2 border-bad bg-bad-soft p-5"
            >
              <h3 id="error-summary-title" className="text-lg font-extrabold">
                Please check the form
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {summary.map((item) => (
                  <li key={item.key}>
                    <a
                      href={`#${item.key}`}
                      className="font-bold text-bad"
                      onClick={(e) => {
                        e.preventDefault();
                        focusField(item.key);
                      }}
                    >
                      {item.message}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {status ? (
            <div ref={statusRef} role="alert" className="mt-6 flex gap-3 rounded-2xl border border-[#fecaca] bg-bad-soft p-5">
              <Icon name="alert" className="mt-0.5 size-5 shrink-0 text-bad" />
              <div className="space-y-2">
                <p>{status}</p>
                <p>
                  You can also email <a href={mailtoDelete}>{site.supportEmail}</a> from your registered email address.
                </p>
              </div>
            </div>
          ) : null}

          <form noValidate onSubmit={onSubmit} aria-busy={busy} className="mt-6 space-y-6">
            <div className={fieldWrap("fullName")}>
              <label htmlFor="fullName" className="font-bold">
                Full name
              </label>
              {fieldError("fullName")}
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                maxLength={MAX_NAME}
                required
                aria-invalid={errors.fullName ? true : undefined}
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                className={inputCls("fullName")}
                value={values.fullName}
                onChange={(e) => update("fullName", e.target.value)}
              />
            </div>

            <div className={fieldWrap("email")}>
              <label htmlFor="email" className="font-bold">
                Registered email address
              </label>
              <span id="email-hint" className="text-ink-2">
                The email address you use to sign in to Landlord Ready.
              </span>
              {fieldError("email")}
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                autoCapitalize="off"
                spellCheck={false}
                maxLength={MAX_EMAIL}
                required
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={`email-hint${errors.email ? " email-error" : ""}`}
                className={inputCls("email")}
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="appName" className="font-bold">
                App
              </label>
              <input
                id="appName"
                name="appName"
                type="text"
                value="Landlord Ready"
                readOnly
                className="min-h-12 w-full rounded-xl border-2 border-line bg-stone-soft px-4 py-3 text-base text-ink-2"
              />
            </div>

            <div className={fieldWrap("reason")}>
              <label htmlFor="reason" className="font-bold">
                Reason for deleting <span className="font-normal text-ink-2">(optional)</span>
              </label>
              <span id="reason-hint" className="text-ink-2">
                This helps us improve Landlord Ready. Please don&apos;t include sensitive personal information.
              </span>
              {fieldError("reason")}
              <textarea
                id="reason"
                name="reason"
                rows={4}
                maxLength={MAX_REASON}
                aria-invalid={errors.reason ? true : undefined}
                aria-describedby={`reason-hint${errors.reason ? " reason-error" : ""}`}
                className={inputCls("reason")}
                value={values.reason}
                onChange={(e) => update("reason", e.target.value)}
              />
            </div>

            {/* Spam trap: hidden from people and screen readers. Bots that fill it in are ignored. */}
            <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
              <label htmlFor="website">Leave this field empty</label>
              <input ref={trap} id="website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
            </div>

            <div className={fieldWrap("confirm")}>
              {fieldError("confirm")}
              <div className="flex gap-3">
                <input
                  id="confirm"
                  name="confirm"
                  type="checkbox"
                  required
                  aria-invalid={errors.confirm ? true : undefined}
                  aria-describedby={errors.confirm ? "confirm-error" : undefined}
                  className="mt-0.5 size-7 shrink-0 accent-[#b91c1c]"
                  checked={values.confirm}
                  onChange={(e) => update("confirm", e.target.checked)}
                />
                <label htmlFor="confirm" className="leading-relaxed">
                  I own this Landlord Ready account. I understand that once my request is verified, my account,
                  properties, certificates, documents and all related data will be permanently deleted and cannot be
                  recovered.
                </label>
              </div>
            </div>

            <div>
              <button type="submit" className="btn btn-danger w-full sm:w-auto" disabled={busy}>
                {busy ? (
                  <>
                    <span aria-hidden="true" className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending request…
                  </>
                ) : (
                  "Submit deletion request"
                )}
              </button>
            </div>
            <p className="text-sm leading-relaxed text-ink-2">
              We will never ask for your password. Your details are sent securely and used only to handle this request,
              as explained in our <a href="/privacy-policy">privacy policy</a>.
            </p>
          </form>

          <noscript>
            <div className="mt-6 rounded-2xl border border-[#fcd34d] bg-warn-soft p-5">
              <p>
                This form needs JavaScript. You can still request deletion by emailing{" "}
                <a href={mailtoDelete}>{site.supportEmail}</a> from your registered email address with the subject
                &ldquo;Delete my Landlord Ready account&rdquo;.
              </p>
            </div>
          </noscript>
        </div>
      ) : (
        <div>
          <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-ok-soft text-ok">
            <Icon name="checkCircle" className="size-7" />
          </span>
          <h2 ref={successRef} tabIndex={-1} className="mt-4 text-2xl font-extrabold focus:outline-none">
            Request received
          </h2>
          <div className="mt-4 flex gap-3 rounded-2xl border border-[#fcd34d] bg-warn-soft p-4">
            <Icon name="info" className="mt-0.5 size-5 shrink-0 text-warn" />
            <p>
              <strong>Your account has not been deleted yet.</strong> Your request is waiting for verification.
            </p>
          </div>
          <p className="mt-4">
            If <strong className="break-all">{doneEmail}</strong> is registered with Landlord Ready, this is what happens
            next:
          </p>
          <ol className="mt-4 space-y-4">
            {[
              ["Check your inbox", `Within two working days, we will email that address from ${site.supportEmail} to confirm the request came from you.`],
              ["Reply to confirm", "Reply from the same email address. We will never ask for your password."],
              ["We delete your account", "We delete your files, account and all related data, and email you when it's done. This always happens within one month of your request."],
            ].map(([title, body], i) => (
              <li key={title} className="flex gap-4">
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-tint-2 font-extrabold text-on-brand">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 leading-relaxed text-ink-2">{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm leading-relaxed text-ink-2">
            No email after two working days? Check your spam folder, or email{" "}
            <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>. If you can still sign in to the app, you can
            also delete your account there straight away.
          </p>
        </div>
      )}
    </div>
  );
}
