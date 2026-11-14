import Link from "next/link";
import type { ReactNode } from "react";
import { Callout } from "@/components/ui";
import { registrationWindows, readinessSteps } from "@/lib/registration";
import { defaultLeadDays, dueSoonDays } from "@/lib/plans";

const ext = { rel: "noopener" } as const;

/** How the app helps, in plain words, with no promises it cannot keep. */
function InTheApp({ children }: { children: ReactNode }) {
  return (
    <aside aria-label="How Landlord Ready helps" className="not-prose rounded-2xl border border-tint-2 bg-tint p-5 sm:p-6">
      <p className="text-sm font-extrabold uppercase tracking-wider text-on-brand">How Landlord Ready helps</p>
      <div className="mt-2 space-y-2 leading-relaxed text-ink">{children}</div>
    </aside>
  );
}

const reminderLine = `${defaultLeadDays.slice(0, -1).join(", ")} and ${defaultLeadDays.at(-1)} days`;

function ComplianceChecklist() {
  return (
    <>
      <p>
        This checklist covers the main legal duties for a private landlord letting a home in England on an assured
        tenancy. Your own list may be longer: a house in multiple occupation (HMO), a property in a selective licensing
        area or a property you let furnished can carry extra rules. Ask your local council whether your property needs a
        licence.
      </p>

      <h2 id="checklist">The checklist at a glance</h2>
      <div className="table-wrap">
        <table>
          <caption className="visually-hidden">Main landlord compliance duties in England and how often they apply</caption>
          <thead>
            <tr>
              <th scope="col">Duty</th>
              <th scope="col">How often</th>
              <th scope="col">What you must do</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><Link href="/guides/gas-safety-certificate-landlords">Gas safety record</Link></th>
              <td>Every 12 months</td>
              <td>Gas Safe registered engineer checks the appliances and flues you provide. Copy to existing tenants within 28 days, new tenants before they move in.</td>
            </tr>
            <tr>
              <th scope="row"><Link href="/guides/eicr-landlords">Electrical report (EICR)</Link></th>
              <td>At least every 5 years</td>
              <td>Qualified person inspects and tests the electrics. Copy to existing tenants within 28 days. Remedial work within 28 days.</td>
            </tr>
            <tr>
              <th scope="row"><Link href="/guides/epc-rental-property">Energy Performance Certificate</Link></th>
              <td>Valid for 10 years</td>
              <td>Rating of E or above, unless a valid exemption is registered.</td>
            </tr>
            <tr>
              <th scope="row"><Link href="/guides/smoke-carbon-monoxide-alarms-landlords">Smoke and CO alarms</Link></th>
              <td>Checked on day one of each new tenancy</td>
              <td>A smoke alarm on every storey with living accommodation; a CO alarm in rooms with a fixed combustion appliance (not gas cookers).</td>
            </tr>
            <tr>
              <th scope="row"><Link href="/guides/tenancy-deposit-protection">Deposit protection</Link></th>
              <td>Within 30 days of taking a deposit</td>
              <td>Protect it in an approved scheme and give the tenant the required information.</td>
            </tr>
            <tr>
              <th scope="row"><Link href="/guides/register-your-rental-property">Register your rental property</Link></th>
              <td>By your region&apos;s deadline, then yearly</td>
              <td>Register yourself and each let property on the GOV.UK service. £65 per property per year.</td>
            </tr>
            <tr>
              <th scope="row"><Link href="/guides/renters-rights-act-2025-landlords">Renters&apos; Rights Act changes</Link></th>
              <td>From 1 May 2026</td>
              <td>Rolling (periodic) tenancies, no section 21, rent increases once a year by section 13 notice.</td>
            </tr>
            <tr>
              <th scope="row"><Link href="/guides/landlord-ombudsman">Landlord ombudsman</Link></th>
              <td>Expected in 2028</td>
              <td>Join the Private Rented Sector Landlord Ombudsman once membership becomes compulsory.</td>
            </tr>
            <tr>
              <th scope="row">Right to rent checks</th>
              <td>Before each new tenancy</td>
              <td>Check that adult occupiers have the right to rent in England.</td>
            </tr>
            <tr>
              <th scope="row">Legionella risk</th>
              <td>Assess and review</td>
              <td>Assess and control the risk of legionella in the water system. There is no certificate.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="safety">1. Safety certificates</h2>
      <p>
        <strong>Gas.</strong> If the property has gas appliances or flues that you provide, they must be checked every 12
        months by a Gas Safe registered engineer. The record they give you is often called a CP12. See the{" "}
        <Link href="/guides/gas-safety-certificate-landlords">gas safety guide</Link>.
      </p>
      <p>
        <strong>Electrics.</strong> The fixed electrical installation must be inspected and tested at least every 5
        years. See the <Link href="/guides/eicr-landlords">EICR guide</Link>.
      </p>
      <p>
        <strong>Alarms.</strong> Smoke alarms on every storey with living accommodation and carbon monoxide alarms where
        required, checked on the first day of each new tenancy. See the{" "}
        <Link href="/guides/smoke-carbon-monoxide-alarms-landlords">alarm rules</Link>.
      </p>

      <h2 id="energy">2. Energy performance</h2>
      <p>
        You need a valid EPC to let most homes, and the rating must be E or above unless you have registered an
        exemption. See <Link href="/guides/epc-rental-property">EPC rules for rental property</Link>.
      </p>

      <h2 id="money">3. The deposit</h2>
      <p>
        Protect any deposit in a government-approved scheme within 30 days and give your tenant the required
        information. Since the Renters&apos; Rights Act, an unprotected deposit can stop a court granting you possession.
        See <Link href="/guides/tenancy-deposit-protection">tenancy deposit protection</Link>.
      </p>

      <h2 id="register">4. The rental property register</h2>
      <p>
        The government&apos;s Register your rental property service opens region by region from 15 December 2026. Every
        private landlord with assured or regulated tenancies must register themselves and their let properties, and keep
        safety certificates up to date on the service. See{" "}
        <Link href="/guides/register-your-rental-property">how to register your rental property</Link>.
      </p>

      <h2 id="tenancy">5. Tenancy rules under the Renters&apos; Rights Act</h2>
      <p>
        From 1 May 2026, assured shorthold tenancies became assured periodic tenancies, section 21 ended and rent
        increases moved to a once-a-year section 13 process. Landlords with existing written tenancies had to give
        tenants the government information sheet by 31 May 2026. See the{" "}
        <Link href="/guides/renters-rights-act-2025-landlords">Renters&apos; Rights Act guide</Link>.
      </p>

      <h2 id="other">6. Other checks</h2>
      <ul>
        <li>
          <strong>Right to rent.</strong> Check that every adult who will live in the property has the right to rent in
          England before the tenancy starts.
        </li>
        <li>
          <strong>Legionella.</strong> HSE guidance says landlords must assess and control the risk of exposure to
          legionella. For most homes this is a simple assessment, not a test or certificate.
        </li>
        <li>
          <strong>Licensing.</strong> Many HMOs need a licence, and some councils license other rented homes too.
        </li>
      </ul>

      <InTheApp>
        <p>
          Add a property and Landlord Ready lists what it expects for that property: gas safety (only if it has gas),
          EICR, EPC, smoke and CO alarms, deposit protection and the register entry, plus optional records such as
          insurance, legionella and the ombudsman. Each item shows as in date, due soon (within {dueSoonDays} days),
          expired or missing.
        </p>
      </InTheApp>
    </>
  );
}

function GasSafety() {
  return (
    <>
      <h2 id="who">Who needs a gas safety check</h2>
      <p>
        The duty applies to landlords of residential property where they provide gas appliances, pipework or flues. HSE
        sets out the rules under the Gas Safety (Installation and Use) Regulations 1998. If the property has no gas
        supply, there is nothing to check.
      </p>

      <h2 id="what">What the law requires</h2>
      <ul>
        <li>
          <strong>An annual check.</strong> Each gas appliance and flue you provide must be checked at least every 12
          months by a Gas Safe registered engineer.
        </li>
        <li>
          <strong>Maintenance.</strong> Pipework, appliances and flues must be kept in a safe condition, not just checked.
        </li>
        <li>
          <strong>A record of the check.</strong> The engineer gives you a landlord gas safety record (formerly the CP12
          form).
        </li>
        <li>
          <strong>Copies for tenants.</strong> Give existing tenants a copy within 28 days of the check, and give new
          tenants a copy before they move in. An electronic copy is fine if the tenant is happy to receive it that way,
          but they can ask for paper.
        </li>
        <li>
          <strong>Keep records.</strong> Keep each record for at least 2 years.
        </li>
      </ul>

      <h2 id="record">What the record must show</h2>
      <p>According to HSE, the record must include at least:</p>
      <ul>
        <li>a description and the location of each appliance or flue checked;</li>
        <li>the engineer&apos;s name, Gas Safe registration number and signature;</li>
        <li>the date of the check and the property address;</li>
        <li>the landlord&apos;s (or agent&apos;s) name and address;</li>
        <li>any safety defect found and any remedial action taken.</li>
      </ul>

      <h2 id="early">Checking up to 2 months early</h2>
      <p>
        Since 2018 you can have the check done up to 2 months before it is due and keep the original renewal date, as if
        it had been done exactly 12 months after the previous one. To rely on this, keep each record until two further
        checks have been carried out, so you can show every check was on time.
      </p>

      <h2 id="register">Gas safety and the rental property register</h2>
      <p>
        GOV.UK says that when you register a property with a gas supply on the{" "}
        <Link href="/guides/register-your-rental-property">Register your rental property</Link> service, you will be
        asked for evidence of the gas safety certificate, and you must update information that changes or expires within
        28 days.
      </p>

      <InTheApp>
        <p>
          When you add a gas safety certificate, the app suggests an expiry date 12 months after the issue date. The date
          printed on your certificate always wins, so you can change it. The certificate shows as due soon from{" "}
          {dueSoonDays} days before it expires, and by default you are reminded {reminderLine} before. Attach a photo or
          PDF of the record so it is one tap away.
        </p>
      </InTheApp>
    </>
  );
}

function Eicr() {
  return (
    <>
      <h2 id="rules">The rules in short</h2>
      <p>
        The Electrical Safety Standards in the Private Rented Sector (England) Regulations 2020 apply to private
        landlords in England. In 2025 they were extended to the social rented sector. Under them, landlords must:
      </p>
      <ul>
        <li>make sure the electrical safety standards in the Wiring Regulations (BS 7671) are met;</li>
        <li>have the electrical installations inspected and tested by a qualified person at least every 5 years;</li>
        <li>get a report, usually an Electrical Installation Condition Report (EICR), which sets the date of the next inspection;</li>
        <li>give a copy to the existing tenant within 28 days of the inspection;</li>
        <li>give a copy to a new tenant before they occupy the property;</li>
        <li>give a copy to a prospective tenant within 28 days of them asking;</li>
        <li>give a copy to the local council within 7 days of it asking;</li>
        <li>keep a copy until the next inspection is due, and give a copy to the person doing the next inspection.</li>
      </ul>

      <h2 id="remedial">If the report finds problems</h2>
      <p>
        Where the report says remedial work or further investigation is needed, you must complete it within 28 days, or
        sooner if the report says so. Then, within 28 days of finishing, give the tenant and the local council the report
        and written confirmation from the qualified person who did the work.
      </p>
      <p>
        Reports use observation codes. C1 (danger present) and C2 (potentially dangerous) mean the installation is
        unsatisfactory and work is needed. FI means further investigation is needed. C3 is a recommended improvement that
        does not by itself make the report unsatisfactory. Ask your electrician if any code is unclear.
      </p>

      <h2 id="penalties">Penalties</h2>
      <p>
        GOV.UK guidance says local councils can impose a financial penalty of up to £40,000 on landlords who breach these
        duties. Councils can also serve remedial notices and arrange urgent work themselves.
      </p>

      <h2 id="register">EICRs and the rental property register</h2>
      <p>
        When you <Link href="/guides/register-your-rental-property">register your rental property</Link>, GOV.UK says you
        will be asked for evidence of the electrical safety certificate.
      </p>

      <InTheApp>
        <p>
          Add your EICR and the app suggests a renewal date 5 years after the issue date. If your report gives an earlier
          date for the next inspection, enter that date instead: the date on the report always wins. You are reminded
          before it is due, and the copy you attach is ready to send to a tenant or council.
        </p>
      </InTheApp>
    </>
  );
}

function Epc() {
  return (
    <>
      <h2 id="need">When you need an EPC</h2>
      <p>
        You normally need a valid Energy Performance Certificate to let a home, and you must give the tenant a copy. An
        EPC is valid for 10 years. You can check whether your property already has one on GOV.UK&apos;s{" "}
        <a href="https://www.gov.uk/find-energy-certificate" {...ext}>
          Find an energy certificate
        </a>{" "}
        service, and book a new one through an accredited assessor.
      </p>

      <h2 id="minimum">The minimum rating: E</h2>
      <p>
        The Minimum Energy Efficiency Standard (MEES) Regulations set a minimum rating for domestic private rented
        property. Since 1 April 2020 you cannot let, or continue to let, a property covered by the regulations if its EPC
        rating is F or G, unless you have registered a valid exemption.
      </p>
      <ul>
        <li>Planning to let a property rated F or G: improve it to E, or register an exemption, before the tenancy starts.</li>
        <li>Already letting a property rated F or G: improve it to E straight away, or register an exemption.</li>
      </ul>

      <h2 id="cap">The £3,500 cost cap and exemptions</h2>
      <p>
        You are not currently required to spend more than £3,500 including VAT on energy efficiency improvements. If you
        cannot reach E within that amount, make every recommended improvement you can within the cap and then register an
        &lsquo;all improvements made&rsquo; exemption. Improvements made since 1 October 2017 count towards the cap.
        Exemptions go on the PRS Exemptions Register, and other exemptions exist, for example where consent is refused.
      </p>

      <h2 id="penalties">Penalties</h2>
      <p>GOV.UK says the maximum penalties apply per property and per breach, including:</p>
      <ul>
        <li>up to £2,000 and/or a publication penalty for letting a non-compliant property for less than 3 months;</li>
        <li>up to £4,000 and/or a publication penalty for letting a non-compliant property for 3 months or more.</li>
      </ul>

      <h2 id="future">Higher standards in future</h2>
      <p>
        GOV.UK states the government&apos;s aim for as many privately rented homes as possible to reach EPC band C or
        equivalent by 2030. Check the official guidance before planning work, as the rules for future standards are set
        separately from today&apos;s minimum of E.
      </p>

      <InTheApp>
        <p>
          Add your EPC with its expiry date (the app suggests 10 years after the issue date) and keep a copy in the
          document vault. The EPC also appears on the register checklist, which ticks itself once your EPC is on file and
          in date.
        </p>
      </InTheApp>
    </>
  );
}

function Alarms() {
  return (
    <>
      <h2 id="rules">What the rules require</h2>
      <p>
        The Smoke and Carbon Monoxide Alarm (Amendment) Regulations 2022 came into force on 1 October 2022. Relevant
        landlords in England must:
      </p>
      <ol>
        <li>fit at least one smoke alarm on each storey of the home where there is a room used as living accommodation;</li>
        <li>
          fit a carbon monoxide alarm in any room used as living accommodation that contains a fixed combustion appliance,
          excluding gas cookers;
        </li>
        <li>make sure the alarms are repaired or replaced once they are told an alarm is faulty.</li>
      </ol>
      <p>
        A fixed combustion appliance is any fixed apparatus that burns fuel to make heat, such as a gas boiler, an oil
        boiler or a wood burner. GOV.UK guidance says a purely decorative fireplace that does not work is not one.
      </p>

      <h2 id="check">Checking alarms at the start of a tenancy</h2>
      <p>
        You, or someone on your behalf, must check that each required alarm is in proper working order on the day a new
        tenancy begins. GOV.UK suggests one way to show this: test the alarms while going through the inventory on day
        one, and have the tenant sign to confirm they work.
      </p>

      <h2 id="faulty">When an alarm is faulty</h2>
      <p>
        Landlords are responsible for repairing or replacing faulty alarms once they are told about them. Keep a note of
        when a fault was reported and when it was fixed.
      </p>

      <h2 id="penalties">Enforcement</h2>
      <p>
        Local councils enforce these rules. They can serve a remedial notice, and failing to comply with a remedial
        notice can lead to a fine of up to £5,000. GOV.UK says fines apply per breach, not per landlord or per property.
      </p>

      <InTheApp>
        <p>
          The app lists &ldquo;Smoke and CO alarm check&rdquo; as a required item for every let property. Record the date
          you checked the alarms at the start of each tenancy and attach a photo of the signed inventory if you use one.
        </p>
      </InTheApp>
    </>
  );
}

function Deposit() {
  return (
    <>
      <h2 id="protect">Protect the deposit within 30 days</h2>
      <p>
        If you rent a home on an assured periodic tenancy (the tenancy type that replaced assured shorthold tenancies on
        1 May 2026), you must put the tenant&apos;s deposit in a government-approved tenancy deposit protection scheme
        within 30 days of receiving it. In England the approved schemes are:
      </p>
      <ul>
        <li>Deposit Protection Service</li>
        <li>MyDeposits</li>
        <li>Tenancy Deposit Scheme</li>
      </ul>
      <p>
        The rule applies even if someone else pays the deposit, such as a parent or a rent deposit scheme. A holding
        deposit does not need protecting, but once the person becomes your tenant it becomes a deposit and must be
        protected.
      </p>

      <h2 id="information">Give your tenant the required information</h2>
      <p>Within the same 30 days, tell your tenant:</p>
      <ul>
        <li>the address of the rented property;</li>
        <li>how much deposit they paid and how it is protected;</li>
        <li>the name and contact details of the scheme and its dispute resolution service;</li>
        <li>your (or your letting agent&apos;s) name and contact details;</li>
        <li>the name and contact details of any third party that paid the deposit;</li>
        <li>why you would keep some or all of the deposit, and how to apply to get it back;</li>
        <li>what to do if they cannot reach you at the end of the tenancy, and what to do if there is a dispute.</li>
      </ul>

      <h2 id="cap">How much deposit you can take</h2>
      <p>
        Under the Tenant Fees Act 2019, a tenancy deposit is capped at 5 weeks&apos; rent where the annual rent is under
        £50,000, and 6 weeks&apos; rent where it is £50,000 or more.
      </p>

      <h2 id="end">At the end of the tenancy</h2>
      <p>
        You must return the deposit within 10 days of you and the tenant agreeing how much they will get back. If you
        disagree, the deposit stays protected in the scheme until the dispute is settled.
      </p>

      <h2 id="penalties">If a deposit is not protected</h2>
      <ul>
        <li>
          The tenant can apply to the county court. The court can order you to repay the deposit or pay it into a scheme
          within 14 days, and can also order you to pay the tenant up to 3 times the deposit.
        </li>
        <li>
          Under the <Link href="/guides/renters-rights-act-2025-landlords">Renters&apos; Rights Act</Link>, a court will
          only grant possession where a deposit was taken if you protected it and gave the correct information, returned
          it, or the tenant&apos;s court challenge about it has been decided, settled or withdrawn.
        </li>
      </ul>

      <InTheApp>
        <p>
          &ldquo;Deposit protection&rdquo; is a required item for every let property. Add the scheme reference and attach
          the protection certificate. The register checklist ticks the deposit step for you once the record is added.
        </p>
      </InTheApp>
    </>
  );
}

function Register() {
  return (
    <>
      <Callout tone="warn" icon="calendar">
        <p>
          <strong>Registration opens on 15 December 2026, starting with the West Midlands.</strong> Each region has a
          three-month window. You can register before your region&apos;s start date, but not after its end date.
        </p>
      </Callout>

      <h2 id="who">Who must register</h2>
      <p>
        The Renters&apos; Rights Act requires private landlords to register themselves and their privately let
        properties in England on the Register your rental property service, also called the private rented sector (PRS)
        database. You must register if you let a property in England that is occupied by tenants on an assured or
        regulated tenancy. This includes organisations that act as landlords.
      </p>
      <ul>
        <li>You sign in with GOV.UK One Login. A paper application is available if you do not have digital access.</li>
        <li>
          Joint landlords must each register. One registers the property and invites the others. If you own part of a
          rental property and are entitled to possession, you register as a joint landlord even if you are not named on
          the tenancy.
        </li>
        <li>An HMO with a licence is registered once for the whole property, not room by room.</li>
        <li>Supported exempt accommodation is excluded.</li>
      </ul>

      <h2 id="dates">Regional registration dates</h2>
      <p>Use your property&apos;s postcode to find its council, and so its region.</p>
      <div className="table-wrap">
        <table>
          <caption className="visually-hidden">Register your rental property: start and end dates for each region of England</caption>
          <thead>
            <tr>
              <th scope="col">Region</th>
              <th scope="col">Registration opens</th>
              <th scope="col">Deadline (before midnight)</th>
            </tr>
          </thead>
          <tbody>
            {registrationWindows.map((w) => (
              <tr key={w.region}>
                <th scope="row">{w.region}</th>
                <td>
                  <time dateTime={w.opensIso}>{w.opens}</time>
                </td>
                <td>
                  <time dateTime={w.deadlineIso}>{w.deadline}</time>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-ink-2">
        Dates as published in GOV.UK guidance for landlords on 29 October 2026. Always confirm on GOV.UK before you act.
      </p>
      <p>
        During the rollout (15 December 2026 to 14 November 2027) you only need to register properties that are let, or
        become let, in that period. GOV.UK says that in future you will need to register an empty property before you
        advertise it, and adverts will need to show landlord and property registration numbers.
      </p>

      <h2 id="fee">The fee</h2>
      <p>
        The annual fee is <strong>£65 per property</strong> and is not subject to VAT. You pay when you register each
        property and then every year. There is no charge for your landlord registration or for updates. All your
        properties share one renewal date: one year after you registered your first property.
      </p>
      <p>
        During the rollout the first fee is reduced so that nobody pays for days before 15 November 2027. GOV.UK&apos;s
        worked example: a landlord who registers on 15 December 2026 pays £5.34 for the first year. GOV.UK also says the
        fee is tax-deductible.
      </p>

      <h2 id="what">What you will be asked for</h2>
      <p>To register a property you provide:</p>
      <ul>
        <li>property details, such as the address, number of bedrooms and whether it is let;</li>
        <li>a correspondence address in England or Wales;</li>
        <li>contact details for any managing agents, superior landlords and freeholders.</li>
      </ul>
      <p>You then pay the fee and get a rental property number. You will also be asked for:</p>
      <ul>
        <li>evidence of the <Link href="/guides/gas-safety-certificate-landlords">gas safety certificate</Link> (if there is a gas supply);</li>
        <li>evidence of the <Link href="/guides/eicr-landlords">electrical safety certificate</Link>;</li>
        <li>evidence of the <Link href="/guides/epc-rental-property">Energy Performance Certificate</Link>;</li>
        <li>tenancy information, including the rent;</li>
        <li>any licences, such as an HMO licence.</li>
      </ul>
      <p>
        You can give these at the same time or within 28 days of registering. If you do not, the property registration
        may be deactivated. After that, you must update any information that changes or expires, such as a safety
        certificate, within 28 days.
      </p>

      <h2 id="agents">Can a letting agent register for you?</h2>
      <p>
        You must start the registration, and you remain responsible for meeting the requirements. Once you have the
        property registration number and the property is occupied, you can ask a letting or managing agent to provide the
        tenancy and health and safety information. Third parties can act only in limited cases, such as when a landlord
        has died or is incapacitated.
      </p>

      <h2 id="penalties">Penalties</h2>
      <ul>
        <li>Up to £7,000 for failing to register yourself and your property.</li>
        <li>
          Up to £40,000 for knowingly or recklessly giving false or misleading information, or for continuing or repeated
          breaches.
        </li>
        <li>
          Tenants can apply for rent repayment orders in those cases once their region&apos;s registration period opens.
        </li>
        <li>Landlords in breach of the duty to register cannot get a possession order, except on antisocial behaviour grounds.</li>
      </ul>

      <h2 id="ready">Get ready before your window opens</h2>
      <p>Landlord Ready&apos;s registration checklist covers what to have ready for each property:</p>
      <ol>
        {readinessSteps.map((s) => (
          <li key={s.title}>
            <strong>{s.title}.</strong> {s.body}
          </li>
        ))}
      </ol>

      <InTheApp>
        <p>
          The app shows each property&apos;s registration window from its region, a readiness score, and copy-ready details
          to paste into the official form. Certificate steps tick themselves when the record is in date. You still
          register on GOV.UK yourself: Landlord Ready is not affiliated with GOV.UK and never registers on your behalf.
          The free plan shows the first 3 checklist steps; Plus unlocks the full checklist.
        </p>
      </InTheApp>
    </>
  );
}

function Rra() {
  return (
    <>
      <p>
        The Renters&apos; Rights Act 2025 completed its passage through Parliament on 22 October 2025 and received Royal
        Assent on 27 October 2025. The government is bringing it into force in three phases. This guide covers what it
        means for private landlords in England.
      </p>

      <h2 id="timeline">Timeline</h2>
      <div className="table-wrap">
        <table>
          <caption className="visually-hidden">Renters&apos; Rights Act 2025 implementation phases</caption>
          <thead>
            <tr>
              <th scope="col">When</th>
              <th scope="col">What</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">27 December 2025</th>
              <td>New investigatory powers for local councils.</td>
            </tr>
            <tr>
              <th scope="row">1 May 2026 (phase 1)</th>
              <td>New tenancy system: assured periodic tenancies, section 21 abolished, new rules on rent, bidding, pets and discrimination.</td>
            </tr>
            <tr>
              <th scope="row">31 May 2026</th>
              <td>Deadline to give existing tenants the information sheet, or written terms for verbal tenancies.</td>
            </tr>
            <tr>
              <th scope="row">From 15 December 2026 (phase 2)</th>
              <td>
                <Link href="/guides/register-your-rental-property">Register your rental property</Link> opens region by region.
              </td>
            </tr>
            <tr>
              <th scope="row">Expected 2028</th>
              <td>
                Membership of the <Link href="/guides/landlord-ombudsman">landlord ombudsman</Link> becomes compulsory.
              </td>
            </tr>
            <tr>
              <th scope="row">Phase 3, dates after consultation</th>
              <td>Decent Homes Standard and Awaab&apos;s Law extended to the private rented sector.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="tenancies">Changes to tenancies</h2>
      <ul>
        <li>
          All existing assured shorthold tenancies became assured periodic tenancies, and new tenancies are assured
          periodic. They roll on (for example monthly) and cannot have an end date.
        </li>
        <li>Tenants can end the tenancy by giving two months&apos; notice.</li>
        <li>
          If you had a written agreement, you did not need a new one, but you had to give tenants the{" "}
          <a href="https://www.gov.uk/government/publications/the-renters-rights-act-information-sheet-2026" {...ext}>
            Renters&apos; Rights Act Information Sheet
          </a>{" "}
          by 31 May 2026. For verbal tenancies, you had to give written information about the key terms by the same date.
        </li>
      </ul>

      <h2 id="letting">Letting a property</h2>
      <ul>
        <li>You cannot ask for or accept rent before the tenancy agreement is signed, and cannot require more than one month&apos;s rent in advance.</li>
        <li>You must not discriminate against people who receive benefits or have children.</li>
        <li>You must publish an asking rent and cannot accept offers above it (no rental bidding).</li>
        <li>Tenants can ask to keep a pet. You have 28 days to consider it and can refuse only for a valid reason.</li>
      </ul>

      <h2 id="rent">Rent increases</h2>
      <p>
        You can increase rent once a year, using Form 4A (the section 13 process) with at least 2 months&apos; notice.
        Tenants can challenge an increase above the open market rent at the First-tier Tribunal.
      </p>

      <h2 id="evictions">Ending a tenancy</h2>
      <p>
        Section 21 &lsquo;no fault&rsquo; evictions have ended. You need a ground for possession and must serve a section
        8 notice with the right notice period, which in many cases is 4 months. You cannot evict to sell or move in within
        the first 12 months of a tenancy. If a deposit was taken, a court will only grant possession if it was{" "}
        <Link href="/guides/tenancy-deposit-protection">protected correctly</Link>, returned, or any challenge has been
        resolved.
      </p>

      <h2 id="enforcement">Enforcement</h2>
      <ul>
        <li>Councils can fine landlords up to £7,000 for breaches such as claiming a fixed term or ending a tenancy verbally.</li>
        <li>Up to £40,000, as an alternative to prosecution, for offences such as reletting within the restricted period or repeated breaches.</li>
        <li>The maximum rent repayment order has doubled from 1 to 2 years&apos; rent.</li>
      </ul>

      <h2 id="next">What comes next</h2>
      <p>
        The <Link href="/guides/register-your-rental-property">rental property register</Link> opens from 15 December
        2026. The <Link href="/guides/landlord-ombudsman">landlord ombudsman</Link> follows, with membership expected to be
        required in 2028. The Decent Homes Standard is due to apply to private rented homes later: the government
        consulted on bringing it into force in 2035 or 2037.
      </p>

      <InTheApp>
        <p>
          Landlord Ready does not manage tenancies or rent. It keeps the safety certificates, deposit record and register
          details that the Act&apos;s new register asks for in one place, with reminders before anything expires.
        </p>
      </InTheApp>
    </>
  );
}

function Ombudsman() {
  return (
    <>
      <h2 id="what">What the landlord ombudsman is</h2>
      <p>
        The Renters&apos; Rights Act creates a new Private Rented Sector Landlord Ombudsman. Tenants will be able to use
        it for free to complain about a landlord&apos;s actions or behaviour. Its decisions will be binding on landlords.
      </p>
      <p>The ombudsman will be able to require a landlord to:</p>
      <ul>
        <li>issue an apology or an explanation;</li>
        <li>provide information;</li>
        <li>take, or stop taking, an action to put things right;</li>
        <li>pay compensation.</li>
      </ul>
      <p>
        Only tenants can bring complaints. The government has said it is exploring other ways for landlords to resolve
        disputes, such as landlord-initiated mediation.
      </p>

      <h2 id="who">Who must join</h2>
      <p>
        All private landlords in England with assured or regulated tenancies will have to join, including landlords who
        use a managing agent. The government expects landlords to stay members for a reasonable time after they stop
        letting. Letting agents keep their own existing redress schemes.
      </p>

      <h2 id="when">When it starts</h2>
      <p>
        The government&apos;s implementation roadmap says the ombudsman will be set up after the{" "}
        <Link href="/guides/register-your-rental-property">rental property register</Link>, in stages. First a scheme
        administrator is chosen and given time to prepare. Then landlords are required to join, which the roadmap expects
        in 2028, with notice given in advance. Until GOV.UK confirms a date, there is nothing for landlords to sign up
        to.
      </p>

      <h2 id="cost">What it will cost</h2>
      <p>
        The fee has not been confirmed. The government has said it expects landlords to pay a small annual fee per
        property, set by the ombudsman service and kept proportionate.
      </p>

      <h2 id="penalties">Penalties for not joining</h2>
      <ul>
        <li>Civil penalties of up to £7,000 for initial breaches.</li>
        <li>Up to £40,000, or criminal prosecution, for continuing or repeated breaches.</li>
        <li>Tenants can seek rent repayment orders if a landlord persistently fails to join.</li>
        <li>Landlords who do not follow the ombudsman&apos;s decisions can be expelled from the scheme and face council enforcement.</li>
      </ul>

      <h2 id="prepare">How to prepare now</h2>
      <ul>
        <li>Make sure tenants know how to raise a complaint with you, and reply in writing.</li>
        <li>Keep records of repairs, certificates and what you agreed with tenants.</li>
        <li>Keep your safety certificates in date, since many complaints start with repairs and safety.</li>
      </ul>

      <InTheApp>
        <p>
          The app includes &ldquo;Landlord ombudsman membership&rdquo; as an optional record you can add for each let
          property once membership applies to you, with a yearly renewal date and reminders.
        </p>
      </InTheApp>
    </>
  );
}

export const guideBodies: Record<string, () => ReactNode> = {
  "landlord-compliance-checklist-england": ComplianceChecklist,
  "gas-safety-certificate-landlords": GasSafety,
  "eicr-landlords": Eicr,
  "epc-rental-property": Epc,
  "smoke-carbon-monoxide-alarms-landlords": Alarms,
  "tenancy-deposit-protection": Deposit,
  "register-your-rental-property": Register,
  "renters-rights-act-2025-landlords": Rra,
  "landlord-ombudsman": Ombudsman,
};
