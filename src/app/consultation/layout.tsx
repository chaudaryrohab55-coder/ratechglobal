import type { Metadata } from "next";

export const metadata: Metadata = {
     title: "Free Consultation",
  description: "Book a free strategy consultation with Ratech Global. Tell us your goals and we will reply with a clear plan within 24 hours.",
  alternates: { canonical: "/consultation" },
};

export default function ConsultationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
