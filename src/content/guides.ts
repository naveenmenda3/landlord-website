import type { IconName } from "@/components/Icon";
import type { Faq } from "@/lib/seo";

export type Source = { label: string; url: string };

export type GuideMeta = {
  slug: string;
  /** Short label for menus and cards. */
  navLabel: string;
  /** The one search phrase this page is written for. */
  keyword: string;
  /** <title>, kept under about 60 characters. */
  title: string;
  h1: string;
  description: string;
  /** One-paragraph answer shown at the top of the page. */
  summary: string;
  icon: IconName;
  published: string;
  modified: string;
  sources: Source[];
  related: string[];
  faqs: Faq[];
};

const published = "2026-11-12";
const modified = "2026-11-12";

const src = {
  responsibilities: { label: "GOV.UK: Renting out your property, landlord responsibilities", url: "https://www.gov.uk/renting-out-a-property/landlord-responsibilities" },
  hseGas: { label: "HSE: Landlords' responsibility for gas safety", url: "https://www.hse.gov.uk/gas/landlords/index.htm" },
  hseGasRecord: { label: "HSE: Gas safety check records and what to keep", url: "https://www.hse.gov.uk/gas/landlords/gassaferecord.htm" },
  electrical: {
    label: "GOV.UK: Electrical safety standards in the private and social rented sectors, guidance",
    url: "https://www.gov.uk/government/publications/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance/electrical-safety-standards-in-the-private-and-social-rented-sectors-guidance",
  },
  mees: {
    label: "GOV.UK: Domestic private rented property minimum energy efficiency standard, landlord guidance",
    url: "https://www.gov.uk/guidance/domestic-private-rented-property-minimum-energy-efficiency-standard-landlord-guidance",
  },
  epc: { label: "GOV.UK: Energy Performance Certificates", url: "https://www.gov.uk/buy-sell-your-home/energy-performance-certificates" },
  findEpc: { label: "GOV.UK: Find an energy certificate", url: "https://www.gov.uk/find-energy-certificate" },
  alarms: {
    label: "GOV.UK: Smoke and Carbon Monoxide Alarm (Amendment) Regulations 2022, guidance for landlords and tenants",
    url: "https://www.gov.uk/government/publications/smoke-and-carbon-monoxide-alarms-explanatory-booklet-for-landlords",
  },
  deposit: { label: "GOV.UK: Tenancy deposit protection", url: "https://www.gov.uk/tenancy-deposit-protection" },
  depositInfo: {
    label: "GOV.UK: Information landlords must give tenants",
    url: "https://www.gov.uk/tenancy-deposit-protection/information-landlords-must-give-tenants",
  },
  depositCourt: {
    label: "GOV.UK: If your landlord does not protect your deposit",
    url: "https://www.gov.uk/tenancy-deposit-protection/if-your-landlord-doesnt-protect-your-deposit",
  },
  tenantFees: { label: "GOV.UK: Tenant Fees Act 2019 guidance", url: "https://www.gov.uk/government/publications/tenant-fees-act-2019-guidance" },
  register: {
    label: "GOV.UK: Register your rental property service, guidance for landlords",
    url: "https://www.gov.uk/guidance/register-your-rental-property-service-guidance-for-landlords",
  },
  rraOverview: { label: "GOV.UK: Renters' Rights Act, an overview for landlords", url: "https://www.gov.uk/guidance/renters-rights-act-an-overview-for-landlords" },
  rraGuide: {
    label: "GOV.UK: Guide to the Renters' Rights Act",
    url: "https://www.gov.uk/government/publications/guide-to-the-renters-rights-act/guide-to-the-renters-rights-act",
  },
  rraRoadmap: {
    label: "GOV.UK: Implementing the Renters' Rights Act 2025, our roadmap",
    url: "https://www.gov.uk/government/publications/renters-rights-act-2025-implementation-roadmap/implementing-the-renters-rights-act-2025-our-roadmap-for-reforming-the-private-rented-sector",
  },
  rraEnforcement: {
    label: "GOV.UK: Enforcement measures for landlords, Renters' Rights Act 2025",
    url: "https://www.gov.uk/guidance/enforcement-measures-for-landlords-renters-rights-act-2025",
  },
  infoSheet: {
    label: "GOV.UK: The Renters' Rights Act Information Sheet 2026",
    url: "https://www.gov.uk/government/publications/the-renters-rights-act-information-sheet-2026",
  },
  rightToRent: { label: "GOV.UK: Check your tenant's right to rent", url: "https://www.gov.uk/check-tenant-right-to-rent-documents" },
  legionella: { label: "HSE: Legionnaires' disease", url: "https://www.hse.gov.uk/legionnaires/" },
} satisfies Record<string, Source>;

export const guides: GuideMeta[] = [
  {
    slug: "landlord-compliance-checklist-england",
    navLabel: "Compliance checklist",
    keyword: "landlord compliance checklist England",
    title: "Landlord Compliance Checklist for England (2026)",
    h1: "Landlord compliance checklist for England",
    description:
      "A plain-English landlord compliance checklist for England: gas safety, EICR, EPC, alarms, deposit protection, the new rental property register and the Renters' Rights Act.",
    summary:
      "Most private landlords in England need an in-date gas safety record (if there is gas), an electrical report (EICR) no older than 5 years, a valid EPC rated E or above, working smoke and carbon monoxide alarms, a protected deposit, and, from their region's window, a registration on the government's Register your rental property service.",
    icon: "list",
    published,
    modified,
    sources: [src.responsibilities, src.hseGas, src.electrical, src.mees, src.alarms, src.deposit, src.register, src.rraOverview, src.rightToRent, src.legionella],
    related: ["gas-safety-certificate-landlords", "eicr-landlords", "register-your-rental-property"],
    faqs: [
      {
        q: "What certificates does a landlord need in England?",
        a: "A gas safety record every 12 months if the property has gas appliances, an electrical installation condition report (EICR) at least every 5 years, and an Energy Performance Certificate (EPC) rated E or above. You also need working smoke alarms and, where required, carbon monoxide alarms, and the tenant's deposit must be protected in a government-approved scheme.",
      },
      {
        q: "Do I need to register my rental property?",
        a: "Yes, if you let a property in England on an assured or regulated tenancy. GOV.UK says registration opens region by region from 15 December 2026, with each region given a three-month window. The annual fee is £65 per property.",
      },
      {
        q: "Does this checklist apply in Scotland, Wales or Northern Ireland?",
        a: "No. This checklist covers England only. Scotland, Wales and Northern Ireland have their own landlord registration and safety rules.",
      },
    ],
  },
  {
    slug: "gas-safety-certificate-landlords",
    navLabel: "Gas safety (CP12)",
    keyword: "gas safety certificate for landlords",
    title: "Gas Safety Certificate for Landlords (CP12)",
    h1: "Gas safety certificates for landlords (CP12)",
    description:
      "What landlords in England must do about gas safety: the annual check by a Gas Safe registered engineer, giving tenants a copy within 28 days, keeping records and checking early.",
    summary:
      "If your let property has gas appliances or flues that you provide, a Gas Safe registered engineer must check them every 12 months. You must give existing tenants a copy of the record (often called a CP12 or landlord gas safety record) within 28 days of the check, and give new tenants a copy before they move in.",
    icon: "flame",
    published,
    modified,
    sources: [src.hseGas, src.hseGasRecord, src.responsibilities, src.register],
    related: ["eicr-landlords", "smoke-carbon-monoxide-alarms-landlords", "landlord-compliance-checklist-england"],
    faqs: [
      {
        q: "How often does a landlord need a gas safety certificate?",
        a: "Every 12 months. A Gas Safe registered engineer must check the gas appliances and flues you provide at least once a year.",
      },
      {
        q: "Is a CP12 the same as a gas safety certificate?",
        a: "Yes. CP12 is the old name of the form. HSE now calls it the landlord gas safety record. People use all three names for the same document.",
      },
      {
        q: "Can I have the gas safety check done early?",
        a: "Yes. Since 2018 you can have the check done up to 2 months before the deadline and keep the original renewal date, as long as you keep the records that show the checks were done on time.",
      },
      {
        q: "How long must I keep gas safety records?",
        a: "At least 2 years. If you use the early-check flexibility, keep each record until two further checks have been carried out.",
      },
    ],
  },
  {
    slug: "eicr-landlords",
    navLabel: "EICR (electrical safety)",
    keyword: "EICR for landlords",
    title: "EICR for Landlords: Electrical Safety in England",
    h1: "EICR for landlords: electrical safety every 5 years",
    description:
      "Landlords in England must have the electrics inspected and tested at least every 5 years. What the EICR is, who gets a copy and when, remedial work deadlines and penalties.",
    summary:
      "Landlords in England must have the fixed electrical installation inspected and tested by a qualified person at least every 5 years, or sooner if the report says so. The result is usually an Electrical Installation Condition Report (EICR). Existing tenants must get a copy within 28 days, and any remedial work must be done within 28 days or sooner if the report says so.",
    icon: "bolt",
    published,
    modified,
    sources: [src.electrical, src.responsibilities, src.register],
    related: ["gas-safety-certificate-landlords", "epc-rental-property", "landlord-compliance-checklist-england"],
    faqs: [
      {
        q: "How often do landlords need an EICR?",
        a: "At least every 5 years. If the electrician's report sets an earlier date for the next inspection, the earlier date applies.",
      },
      {
        q: "Who must get a copy of the EICR?",
        a: "Existing tenants within 28 days of the inspection, new tenants before they move in, prospective tenants within 28 days of asking, and the local council within 7 days of asking.",
      },
      {
        q: "What happens if the EICR finds problems?",
        a: "You must complete the remedial or further investigative work within 28 days, or sooner if the report says so, then give the tenant and the council written confirmation within 28 days of finishing it.",
      },
      {
        q: "What is the penalty for not having an EICR?",
        a: "GOV.UK guidance says local councils can impose a financial penalty of up to £40,000 for breaching the electrical safety duties.",
      },
    ],
  },
  {
    slug: "epc-rental-property",
    navLabel: "EPC for rentals",
    keyword: "EPC for rental property",
    title: "EPC for Rental Property: Minimum Rating Rules",
    h1: "EPC for rental property: the minimum rating rules",
    description:
      "Rental properties in England need an EPC rated E or above unless an exemption is registered. How long an EPC lasts, the £3,500 cost cap, exemptions and penalties.",
    summary:
      "Most rented homes in England need a valid Energy Performance Certificate. Under the minimum energy efficiency standard, you cannot let or continue to let a property rated F or G unless you have registered a valid exemption. An EPC is valid for 10 years.",
    icon: "leaf",
    published,
    modified,
    sources: [src.mees, src.epc, src.findEpc, src.register],
    related: ["eicr-landlords", "register-your-rental-property", "landlord-compliance-checklist-england"],
    faqs: [
      {
        q: "What is the minimum EPC rating for a rental property?",
        a: "E. Since 1 April 2020 landlords cannot let or continue to let a domestic property covered by the regulations if its EPC rating is F or G, unless a valid exemption is registered.",
      },
      {
        q: "How long is an EPC valid for?",
        a: "10 years. You can look up an existing certificate on GOV.UK's Find an energy certificate service.",
      },
      {
        q: "What if improvements would cost too much?",
        a: "You are not currently required to spend more than £3,500 including VAT. If you cannot reach E within that amount, make the improvements you can and register an 'all improvements made' exemption.",
      },
    ],
  },
  {
    slug: "smoke-carbon-monoxide-alarms-landlords",
    navLabel: "Smoke and CO alarms",
    keyword: "smoke and carbon monoxide alarm rules for landlords",
    title: "Smoke and Carbon Monoxide Alarm Rules for Landlords",
    h1: "Smoke and carbon monoxide alarm rules for landlords",
    description:
      "The smoke and carbon monoxide alarm rules for landlords in England: one smoke alarm per storey, CO alarms by fixed combustion appliances, checks on day one and repairs.",
    summary:
      "Landlords in England must have at least one smoke alarm on every storey used as living accommodation, and a carbon monoxide alarm in any room used as living accommodation that has a fixed combustion appliance (gas cookers excepted). Alarms must be checked on the day a new tenancy begins and repaired or replaced once reported faulty.",
    icon: "alarm",
    published,
    modified,
    sources: [src.alarms, src.responsibilities],
    related: ["gas-safety-certificate-landlords", "eicr-landlords", "landlord-compliance-checklist-england"],
    faqs: [
      {
        q: "How many smoke alarms does a rental property need?",
        a: "At least one on every storey that has a room used wholly or partly as living accommodation.",
      },
      {
        q: "Where must a carbon monoxide alarm go?",
        a: "In any room used as living accommodation that contains a fixed combustion appliance, such as a gas boiler or a wood burner. Gas cookers are excluded.",
      },
      {
        q: "When must landlords test the alarms?",
        a: "On the day a new tenancy begins. After that, if a tenant reports an alarm is faulty, you must repair or replace it.",
      },
      {
        q: "What is the fine for breaking the alarm rules?",
        a: "The council can serve a remedial notice. Failing to comply can lead to a fine of up to £5,000, applied per breach.",
      },
    ],
  },
  {
    slug: "tenancy-deposit-protection",
    navLabel: "Deposit protection",
    keyword: "tenancy deposit protection",
    title: "Tenancy Deposit Protection for Landlords",
    h1: "Tenancy deposit protection for landlords",
    description:
      "Landlords in England must protect a tenant's deposit in a government-approved scheme within 30 days and give the required information. The schemes, deadlines and penalties.",
    summary:
      "If you take a deposit for an assured periodic tenancy in England, you must protect it in a government-approved scheme within 30 days of receiving it, and give your tenant the required information about the deposit within the same 30 days.",
    icon: "shield",
    published,
    modified,
    sources: [src.deposit, src.depositInfo, src.depositCourt, src.tenantFees, src.rraOverview],
    related: ["renters-rights-act-2025-landlords", "register-your-rental-property", "landlord-compliance-checklist-england"],
    faqs: [
      {
        q: "How long does a landlord have to protect a deposit?",
        a: "30 days from receiving it. Within the same 30 days you must give the tenant the information about where and how the deposit is protected.",
      },
      {
        q: "Which deposit protection schemes are approved in England?",
        a: "Deposit Protection Service, MyDeposits and Tenancy Deposit Scheme.",
      },
      {
        q: "What happens if a landlord does not protect the deposit?",
        a: "The tenant can apply to court. The court can order the deposit to be repaid or protected, and can order the landlord to pay the tenant up to 3 times the deposit. An unprotected deposit can also stop you getting a possession order.",
      },
      {
        q: "Does a holding deposit need protecting?",
        a: "No. A holding deposit does not need protecting, but once the person becomes your tenant it becomes a deposit and must be protected.",
      },
    ],
  },
  {
    slug: "register-your-rental-property",
    navLabel: "Register your rental property",
    keyword: "register your rental property (private rented sector database)",
    title: "PRS Database: Register Your Rental Property",
    h1: "Register your rental property: the private rented sector database",
    description:
      "How the private rented sector database (Register your rental property) works in England: who must register, each region's dates from 15 December 2026, the £65 fee and penalties.",
    summary:
      "Under the Renters' Rights Act, private landlords in England must register themselves and their let properties on the government's Register your rental property service. Registration opens region by region from 15 December 2026, each region has a three-month window, and the fee is £65 per property per year.",
    icon: "register",
    published,
    modified,
    sources: [src.register, src.rraRoadmap, src.rraGuide],
    related: ["renters-rights-act-2025-landlords", "landlord-ombudsman", "landlord-compliance-checklist-england"],
    faqs: [
      {
        q: "When do I need to register my rental property?",
        a: "By the end date of your property's region. The first window, West Midlands, runs from 15 December 2026 to 14 March 2027, and the last, South West, from 15 August 2027 to 14 November 2027. You can register before your region's start date.",
      },
      {
        q: "How much does it cost to register a rental property?",
        a: "GOV.UK says the annual fee is £65 per property and is not subject to VAT. During the rollout, the first fee is reduced so that no one pays for days before 15 November 2027.",
      },
      {
        q: "Can my letting agent register for me?",
        a: "You must start the registration yourself and you stay responsible for it. Once you have the property registration number and the property is occupied, you can ask a letting or managing agent to provide the tenancy and safety information.",
      },
      {
        q: "What is the penalty for not registering?",
        a: "GOV.UK says penalties of up to £7,000 for failing to register, and up to £40,000 for knowingly or recklessly giving false or misleading information or for continuing or repeated breaches.",
      },
      {
        q: "Does Landlord Ready register my property for me?",
        a: "No. You register on the official GOV.UK service yourself. Landlord Ready shows your region's window, a checklist of what to have ready and the details to copy into the form.",
      },
    ],
  },
  {
    slug: "renters-rights-act-2025-landlords",
    navLabel: "Renters' Rights Act 2025",
    keyword: "Renters' Rights Act 2025 guide for landlords",
    title: "Renters' Rights Act 2025: Guide for Landlords",
    h1: "Renters' Rights Act 2025: a guide for landlords",
    description:
      "What the Renters' Rights Act 2025 means for landlords in England: the changes from 1 May 2026, the information sheet, rent increases, the register, the ombudsman and what comes next.",
    summary:
      "The Renters' Rights Act 2025 received Royal Assent on 27 October 2025. Its first phase took effect on 1 May 2026: section 21 evictions ended, tenancies became assured periodic tenancies, and rent increases are limited to once a year. The rental property register and a landlord ombudsman follow in later phases.",
    icon: "scale",
    published,
    modified,
    sources: [src.rraOverview, src.rraGuide, src.rraRoadmap, src.rraEnforcement, src.infoSheet, src.register],
    related: ["register-your-rental-property", "landlord-ombudsman", "tenancy-deposit-protection"],
    faqs: [
      {
        q: "When did the Renters' Rights Act come into force?",
        a: "It received Royal Assent on 27 October 2025. The new tenancy rules took effect on 1 May 2026. The rental property register starts rolling out from 15 December 2026, and other measures follow in later phases.",
      },
      {
        q: "Can landlords still use section 21?",
        a: "No. Section 21 'no fault' evictions ended on 1 May 2026. Landlords now need a legal reason, called a ground for possession, and must serve a section 8 notice.",
      },
      {
        q: "What did landlords have to give existing tenants?",
        a: "If the tenancy has a written agreement, landlords had to give tenants the government's Renters' Rights Act Information Sheet by 31 May 2026. If the tenancy was only verbal, they had to give written information about its key terms by the same date.",
      },
      {
        q: "How often can I increase the rent?",
        a: "Once a year, using the section 13 process (Form 4A) with at least 2 months' notice. Tenants can challenge an increase above the open market rent.",
      },
    ],
  },
  {
    slug: "landlord-ombudsman",
    navLabel: "Landlord ombudsman",
    keyword: "landlord ombudsman",
    title: "Landlord Ombudsman: What Landlords Need to Know",
    h1: "The landlord ombudsman: what private landlords need to know",
    description:
      "The Renters' Rights Act creates a Private Rented Sector Landlord Ombudsman that landlords in England will have to join. What it does, when membership is expected and the penalties.",
    summary:
      "The Renters' Rights Act creates a Private Rented Sector Landlord Ombudsman. All private landlords in England with assured or regulated tenancies will have to join, including those who use a managing agent. The government's roadmap expects membership to become compulsory in 2028, with notice given beforehand.",
    icon: "scale",
    published,
    modified,
    sources: [src.rraGuide, src.rraRoadmap],
    related: ["renters-rights-act-2025-landlords", "register-your-rental-property", "landlord-compliance-checklist-england"],
    faqs: [
      {
        q: "Do private landlords have to join the landlord ombudsman?",
        a: "Yes, once the requirement starts. The Renters' Rights Act requires all private landlords in England with assured or regulated tenancies to join, including landlords who use a managing agent.",
      },
      {
        q: "When do landlords have to join the ombudsman?",
        a: "The government's implementation roadmap says it expects to require membership in 2028, and that landlords will be given notice before then. Check GOV.UK for the confirmed date.",
      },
      {
        q: "How much will the landlord ombudsman cost?",
        a: "The fee has not been confirmed. The government has said it expects landlords to pay a small annual fee per property, set by the ombudsman service.",
      },
      {
        q: "Can landlords complain to the ombudsman about tenants?",
        a: "No. Only tenants can bring complaints to the ombudsman. The government has said it is exploring other dispute resolution options for landlords.",
      },
    ],
  },
];

export function getGuide(slug: string): GuideMeta | undefined {
  return guides.find((g) => g.slug === slug);
}
