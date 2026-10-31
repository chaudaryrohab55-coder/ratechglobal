import type { Metadata } from "next";
import { inter, playfair, notoArabic } from "./fonts";
import "../styles/globals.css";
import SiteChrome from "@/components/layout/SiteChrome";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { ThemeProvider, themeInitScript } from "@/components/providers/ThemeProvider";
import Analytics from "@/components/analytics/Analytics";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ratechglobal.com"),
  title: {
    default: "Digital Marketing Agency in Pakistan | Ratech Global",
    template: "%s | Ratech Global",
  },
  description:
    "Ratech Global is a results-driven digital marketing agency in Pakistan. We grow businesses with Meta Ads, Google Ads, SEO, Shopify and web development. Free consultation.",
  keywords: [
    "digital marketing agency Pakistan","digital marketing agency Sahiwal",
    "Meta Ads agency Pakistan","Google Ads Pakistan","SEO services Pakistan",
    "social media marketing Pakistan","Shopify development Pakistan",
    "YouTube automation","lead generation agency Pakistan","Ratech Global",
  ],
  authors: [{ name: "Ratech Global", url: "https://www.ratechglobal.com" }],
  creator: "Ratech Global",
  openGraph: {
    type: "website", locale: "en_PK",
    url: "https://www.ratechglobal.com",
    siteName: "Ratech Global",
    title: "Ratech Global — Results-Driven Digital Marketing Agency",
    description: "Meta Ads, Google Ads, SEO, YouTube Automation, Shopify & AI. Serving businesses in Pakistan, UAE, UK & USA.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Ratech Global Digital Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ratech Global — Results-Driven Digital Marketing Agency",
    description: "Meta Ads, Google Ads, SEO, YouTube Automation & more. Proven results.",
    creator: "@ratechglobal",
  },
  robots: { index: true, follow: true },
  verification: {
    google: "TsWZj-bZ3ii9Q_Rfk9AoI1eFzagPGWpyqPoFjMJ_M7A",
  },
  alternates: { canonical: "https://www.ratechglobal.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.ratechglobal.com/#org",
      name: "Ratech Global",
      alternateName: "Ratech Global Digital Marketing Agency",
      url: "https://www.ratechglobal.com",
      logo: "https://www.ratechglobal.com/logo.png",
      image: "https://www.ratechglobal.com/logo.png",
      foundingDate: "2025",
      slogan: "Results-driven digital marketing that turns ad spend into real revenue.",
      description: "Results-driven digital marketing agency offering Meta Ads, Google Ads, SEO, social media marketing, Shopify & web development, YouTube automation and AI automation for businesses in Pakistan and worldwide.",
      knowsAbout: [
        "Meta Ads", "Facebook Advertising", "Google Ads", "Search Engine Optimization",
        "Local SEO", "Social Media Marketing", "Shopify Development", "Web Development",
        "YouTube Automation", "Lead Generation", "Branding", "AI Automation", "eCommerce Marketing",
      ],
      foundingLocation: { "@type": "Place", name: "Sahiwal, Pakistan" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "M439+5P4, Pakpattan Chowk Flyover, near New Bulbul Hotel, Canal View Town",
        addressLocality: "Sahiwal",
        addressRegion: "Punjab",
        postalCode: "57000",
        addressCountry: "PK",
      },
      contactPoint: { "@type": "ContactPoint", telephone: "+92-316-8612919", contactType: "customer service", email: "ratechglobal1@gmail.com" },
      areaServed: [
        { "@type": "Country", name: "Pakistan" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Qatar" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United States" },
      ],
      sameAs: [
        "https://web.facebook.com/ratechglobal",
        "https://www.instagram.com/ratechglobal",
        "https://www.tiktok.com/@ratechglobal",
        "https://www.linkedin.com/in/ratechglobal",
        "https://www.youtube.com/@ratechglobal",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.ratechglobal.com/#website",
      url: "https://www.ratechglobal.com",
      name: "Ratech Global",
      publisher: { "@id": "https://www.ratechglobal.com/#org" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.ratechglobal.com/#localbusiness",
      name: "Ratech Global — Digital Marketing Agency",
      image: "https://www.ratechglobal.com/logo.png",
      url: "https://www.ratechglobal.com",
      telephone: "+92-316-8612919",
      email: "ratechglobal1@gmail.com",
      priceRange: "$$",
      parentOrganization: { "@id": "https://www.ratechglobal.com/#org" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "M439+5P4, Pakpattan Chowk Flyover, near New Bulbul Hotel, Canal View Town",
        addressLocality: "Sahiwal",
        addressRegion: "Punjab",
        postalCode: "57000",
        addressCountry: "PK",
      },
      areaServed: [
        { "@type": "Country", name: "Pakistan" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Qatar" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United States" },
      ],
      geo: { "@type": "GeoCoordinates", latitude: 30.6641, longitude: 73.1114 },
      hasMap: "https://www.google.com/maps?q=RatechGlobal+Sahiwal",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "17:00",
        },
      ],
      sameAs: [
        "https://web.facebook.com/ratechglobal",
        "https://www.instagram.com/ratechglobal",
        "https://www.tiktok.com/@ratechglobal",
        "https://www.linkedin.com/in/ratechglobal",
        "https://www.youtube.com/@ratechglobal",
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${inter.variable} ${playfair.variable} ${notoArabic.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Ahrefs Web Analytics — site verification */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="H3/FgiLIdj1PE6krnya/kA"
          async
        />
      </head>
      <body>
        <Analytics />
        <ThemeProvider>
          <LanguageProvider>
            <SiteChrome>{children}</SiteChrome>
          </LanguageProvider>
        </ThemeProvider>
        {/* Vercel Web Analytics (traffic) + Speed Insights (real-user Core Web Vitals).
            Both beacon to same-origin /_vercel/* endpoints, so the existing CSP covers them. */}
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
