// Regional windows for the "Register your rental property" service, exactly as
// the app's RegistrationSchedule (features/registration/domain/registration.dart)
// lists them. The same dates appear in GOV.UK's guidance for landlords,
// published 29 October 2026.

export type RegionWindow = {
  region: string;
  opens: string;
  opensIso: string;
  deadline: string;
  deadlineIso: string;
};

export const registrationWindows: RegionWindow[] = [
  { region: "West Midlands", opens: "15 December 2026", opensIso: "2026-12-15", deadline: "14 March 2027", deadlineIso: "2027-03-14" },
  { region: "East of England", opens: "15 January 2027", opensIso: "2027-01-15", deadline: "14 April 2027", deadlineIso: "2027-04-14" },
  { region: "East Midlands", opens: "15 February 2027", opensIso: "2027-02-15", deadline: "14 May 2027", deadlineIso: "2027-05-14" },
  { region: "South East", opens: "15 March 2027", opensIso: "2027-03-15", deadline: "14 June 2027", deadlineIso: "2027-06-14" },
  { region: "Yorkshire and the Humber", opens: "15 April 2027", opensIso: "2027-04-15", deadline: "14 July 2027", deadlineIso: "2027-07-14" },
  { region: "North West", opens: "15 May 2027", opensIso: "2027-05-15", deadline: "14 August 2027", deadlineIso: "2027-08-14" },
  { region: "North East", opens: "15 June 2027", opensIso: "2027-06-15", deadline: "14 September 2027", deadlineIso: "2027-09-14" },
  { region: "London", opens: "15 July 2027", opensIso: "2027-07-15", deadline: "14 October 2027", deadlineIso: "2027-10-14" },
  { region: "South West", opens: "15 August 2027", opensIso: "2027-08-15", deadline: "14 November 2027", deadlineIso: "2027-11-14" },
];

/** The app's registration readiness checklist (ReadinessChecklist._steps). */
export const readinessSteps = [
  { title: "Property address and postcode", body: "Check the address matches official records, including the postcode.", auto: false },
  { title: "Your landlord details", body: "Your full name, contact address, email and phone number.", auto: false },
  { title: "Tenancy details", body: "The tenancy start date, the type of tenancy and how many tenants live there.", auto: false },
  { title: "Gas safety certificate in date", body: "Ticks itself when your gas safety certificate is in date (skipped for properties without gas).", auto: true },
  { title: "Electrical report in date", body: "Ticks itself when your EICR is in date.", auto: true },
  { title: "Energy performance certificate", body: "Ticks itself when your EPC is on file and in date.", auto: true },
  { title: "Deposit protection", body: "Ticks itself when you add your deposit protection record.", auto: true },
  { title: "Registration fee", body: "Be ready to pay the fee for each property when you register.", auto: false },
] as const;
