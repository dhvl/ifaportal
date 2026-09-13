import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#08232C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ifamedia.co.uk"),
  title: {
    default: "IFA Media | Websites for Financial Advisors, Planners & Wealth Managers",
    template: "%s | IFA Media",
  },
  description:
    "Specialist web studio creating high-performance, FCA-compliant websites for UK Financial Advisers, Planners, and Wealth Managers. Turnkey Next.js architecture with 24/7 AI Concierge, Consumer Duty safeguards, and a built-in 3-month Done-For-You social media retainer.",
  keywords: [
    "IFA Websites",
    "Financial Advisor Website UK",
    "Wealth Management Web Design",
    "FCA Compliant Websites",
    "Consumer Duty Disclosures",
    "IFA Marketing UK",
    "Financial Adviser AI Concierge",
    "IFA Client Portal",
    "Independent Financial Adviser Web Studio",
    "IFA Media",
    "Wealth Manager Website Builder",
    "Pension Drawdown Calculator UK",
    "Inheritance Tax Calculator IFA",
  ],
  authors: [{ name: "IFA Media", url: "https://ifamedia.co.uk" }],
  creator: "IFA Media",
  publisher: "IFA Media",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://ifamedia.co.uk",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://ifamedia.co.uk",
    siteName: "IFA Media",
    title: "IFA Media | Websites for Financial Advisors, Planners & Wealth Managers",
    description:
      "Specialist web studio creating high-performance, FCA-compliant websites for UK Financial Advisers. Built-in AI Concierge and 3-month Done-For-You social growth retainer.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "IFA Media - Websites for UK Financial Advisers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IFA Media | Websites for Financial Advisors, Planners & Wealth Managers",
    description:
      "Turnkey high-performance websites for UK IFAs with 24/7 AI Concierge, FCA compliance, and built-in 3-month social media retainers.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: {
    "geo.region": "GB",
    "geo.placename": "United Kingdom",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

const jsonLdStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ifamedia.co.uk/#organization",
      name: "IFA Media",
      url: "https://ifamedia.co.uk",
      logo: "https://ifamedia.co.uk/icon-512.png",
      description:
        "Specialist web studio creating high-performance, FCA-compliant websites and digital growth engines for UK Financial Advisers, Planners, and Wealth Managers.",
      email: "inquiry@ifamedia.co.uk",
      areaServed: "GB",
      knowsAbout: [
        "Financial Adviser Websites",
        "FCA Consumer Duty FG22/5",
        "Wealth Management Marketing",
        "UK Pension Calculators",
        "AI Concierge Chatbots",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://ifamedia.co.uk/#website",
      url: "https://ifamedia.co.uk",
      name: "IFA Media",
      publisher: {
        "@id": "https://ifamedia.co.uk/#organization",
      },
      inLanguage: "en-GB",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://ifamedia.co.uk/#service",
      name: "IFA Media",
      url: "https://ifamedia.co.uk",
      priceRange: "££",
      address: {
        "@type": "PostalAddress",
        addressCountry: "GB",
      },
      areaServed: "GB",
      serviceType: "Financial Adviser Website Design & AI Concierge Systems",
    },
    {
      "@type": "FAQPage",
      "@id": "https://ifamedia.co.uk/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is included in the IFA Media Starter Plan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Starter Plan includes a turnkey Next.js practice website, direct WhatsApp and phone consultation routing, FCA FRN and FSCS £85,000 protection badges, a transparent Consumer Duty fee grid, ultra-fast UK hosting, and our built-in 3-month Done-For-You social media and newsletter retainer.",
          },
        },
        {
          "@type": "Question",
          name: "How does the built-in 3-month social media retainer work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every website build includes our 3-month social growth retainer as standard. We write and schedule weekly thought-leadership LinkedIn articles, seasonal client newsletters, and tax year-end guides tailored specifically for UK independent financial advisers.",
          },
        },
        {
          "@type": "Question",
          name: "Are IFA Media websites compliant with FCA Consumer Duty rules?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Every website includes automated FCA FRN verification, standard COBS 4 disclaimers, clear Consumer Duty (FG22/5) fee disclosures, and full UK GDPR data protection controls.",
          },
        },
        {
          "@type": "Question",
          name: "How fast can an advisory firm launch with IFA Media?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most practices go live within 5 to 7 business days, completely bypassing the typical 3-month delays and high upfront costs of traditional web design agencies.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdStructuredData),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

