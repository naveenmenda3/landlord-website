// Plans and prices exactly as the app defines them in
// landlord_ready/lib/features/subscription/domain/subscription.dart
// (SubscriptionPlan and PlanLimits) and the paywall page.

export const freePlan = {
  name: "Free",
  price: "£0",
  properties: 1,
  documents: 3,
  readinessSteps: 3,
} as const;

export const plusPlans = [
  {
    id: "yearly",
    name: "Plus yearly",
    label: "Yearly",
    price: "£59.99",
    amount: "59.99",
    period: "year",
    perMonth: "£5.00",
    note: "£5.00 a month, billed yearly",
    badge: "Save 37%",
  },
  {
    id: "monthly",
    name: "Plus monthly",
    label: "Monthly",
    price: "£7.99",
    amount: "7.99",
    period: "month",
    perMonth: "£7.99",
    note: "Billed monthly",
    badge: null,
  },
] as const;

export const trialDays = 7;

/** Reminder lead times the app offers (ReminderPreferences.availableLeadDays). */
export const reminderLeadDays = [90, 60, 30, 14, 7, 1] as const;
/** The app's default reminder schedule. */
export const defaultLeadDays = [60, 30, 14, 7] as const;
/** Items expiring within this many days show as "Due soon" (ComplianceRules.dueSoonDays). */
export const dueSoonDays = 60;
