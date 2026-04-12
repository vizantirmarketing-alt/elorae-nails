import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MicrosoftClarity from "@/src/components/MicrosoftClarity";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  name: "Eloraé Nails",
  url: "https://www.eloraenails.com",
  telephone: "+17026132115",
  email: "hello@eloraenails.com",
  description:
    "Private appointment-only luxury nail studio in Las Vegas offering manicures, pedicures, nail enhancements, and hemp-infused spa treatments.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6035 S. Durango Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89113",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.0484,
    longitude: -115.2466,
  },
  priceRange: "$$$",
  sameAs: ["https://www.instagram.com/eloraenails"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you accept walk-ins?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — Eloraé Nails is appointment-only. This keeps the experience focused and ensures every client gets dedicated time and attention.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book an appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book directly through the booking link on the site. New clients are welcome.",
      },
    },
    {
      "@type": "Question",
      name: "What is your cancellation policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We require 24 hours notice for cancellations. Late cancellations and no-shows may forfeit the deposit.",
      },
    },
    {
      "@type": "Question",
      name: "Do you require a deposit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, a deposit is required to secure your appointment. This is applied toward your service total.",
      },
    },
    {
      "@type": "Question",
      name: "What services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer manicures, pedicures, nail enhancements, and hemp-infused spa treatments in a private appointment-only setting.",
      },
    },
    {
      "@type": "Question",
      name: "Where are you located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are located at 6035 S. Durango Dr, Las Vegas, NV 89113.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Eloraé Nails | Private Luxury Nail Studio in Las Vegas",
  description:
    "Eloraé Nails is a private appointment-only nail studio in Las Vegas offering luxury manicures, pedicures, nail enhancements, and hemp-infused spa treatments in a clean, structured setting.",
  alternates: {
    canonical: "https://www.eloraenails.com",
  },
  icons: {
    icon: "/logos/elorae-icon.svg",
    apple: "/logos/elorae-icon.svg",
  },
  openGraph: {
    title: "Eloraé Nails",
    description: "Luxury Nail Art Studio · Las Vegas",
    url: "https://www.eloraenails.com",
    siteName: "Eloraé Nails",
    images: [
      {
        url: "https://www.eloraenails.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eloraé Nails - Luxury Nail Art Studio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eloraé Nails | Private Luxury Nail Studio in Las Vegas",
    description:
      "Eloraé Nails is a private appointment-only nail studio in Las Vegas offering luxury manicures, pedicures, nail enhancements, and hemp-infused spa treatments in a clean, structured setting.",
    images: ["https://www.eloraenails.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd),
          }}
        />
      </head>
      <body className="bg-cream text-charcoal leading-relaxed">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="lazyOnload"
        />
        <Script
          id="google-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
    `,
          }}
        />
        <MicrosoftClarity />
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
