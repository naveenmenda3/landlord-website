import type { IconName } from "@/components/Icon";

// The records the app tracks (CertificateType in the app), with how the app
// treats each one for a let property (ComplianceRules.requirementFor).
export const trackedItems: {
  label: string;
  body: string;
  icon: IconName;
  required: boolean;
  cycle: string;
  guide?: string;
}[] = [
  {
    label: "Gas safety certificate",
    body: "A Gas Safe registered engineer checks the gas appliances and flues. Only listed if the property has gas.",
    icon: "flame",
    required: true,
    cycle: "Suggested renewal: 12 months",
    guide: "/guides/gas-safety-certificate-landlords",
  },
  {
    label: "Electrical safety report (EICR)",
    body: "An electrical installation condition report from a qualified electrician.",
    icon: "bolt",
    required: true,
    cycle: "Suggested renewal: 5 years",
    guide: "/guides/eicr-landlords",
  },
  {
    label: "Energy performance certificate",
    body: "Shows the property's energy rating.",
    icon: "leaf",
    required: true,
    cycle: "Suggested renewal: 10 years",
    guide: "/guides/epc-rental-property",
  },
  {
    label: "Smoke and CO alarm check",
    body: "Alarms fitted and checked as working at the start of each tenancy.",
    icon: "alarm",
    required: true,
    cycle: "Recorded per tenancy",
    guide: "/guides/smoke-carbon-monoxide-alarms-landlords",
  },
  {
    label: "Deposit protection",
    body: "Proof that the tenant's deposit is protected in a government-approved scheme.",
    icon: "shield",
    required: true,
    cycle: "Recorded per deposit",
    guide: "/guides/tenancy-deposit-protection",
  },
  {
    label: "Rental property register",
    body: "Your entry on the government's rental property register, renewed each year.",
    icon: "register",
    required: true,
    cycle: "Suggested renewal: 12 months",
    guide: "/guides/register-your-rental-property",
  },
  {
    label: "Landlord ombudsman membership",
    body: "Membership of the landlord ombudsman scheme, once it applies to you.",
    icon: "scale",
    required: false,
    cycle: "Suggested renewal: 12 months",
    guide: "/guides/landlord-ombudsman",
  },
  {
    label: "Landlord insurance",
    body: "Buildings, contents or rent guarantee cover for the property.",
    icon: "home",
    required: false,
    cycle: "Suggested renewal: 12 months",
  },
  {
    label: "Legionella risk assessment",
    body: "A risk assessment for legionella bacteria in the water system.",
    icon: "document",
    required: false,
    cycle: "Recorded when done",
  },
];
