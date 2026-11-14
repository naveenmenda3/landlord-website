import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Landlord Ready: the landlord compliance app for England";
export const size = ogSize;
export const contentType = ogContentType;

export default function TwitterImage() {
  return renderOg({
    eyebrow: "Landlord compliance app for England",
    title: "Every certificate, every deadline, in one calm app",
    footer: "Gas safety · EICR · EPC · Alarms · Deposits · Register your rental property",
  });
}
