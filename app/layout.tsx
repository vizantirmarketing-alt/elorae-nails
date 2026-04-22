import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { fontSans, fontSerif } from "@/app/fonts";
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Nail Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gel Manicure",
          description:
            "Professional gel manicure with long-lasting color and shine.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Luxury Pedicure",
          description:
            "Premium pedicure with salt soak, organic oils, hot stones, and paraffin treatment.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gel-X Nail Extensions",
          description:
            "Soft gel nail extensions for natural-looking length and strength.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Acrylic Nails",
          description:
            "Full set acrylic nails with durable, long-lasting results.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nail Art",
          description:
            "Custom nail art designs from minimalist accents to detailed hand-painted looks.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hemp Wellness Pedicure",
          description:
            "Organic hemp-infused pedicure with anti-inflammatory relief and deep relaxation.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hot Stone Pedicure",
          description:
            "Tension-melting hot stone massage with full spa pedicure treatment.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cosmo Spa Pedicure",
          description:
            "6-step spa pedicure with 16 natural ingredients, callus softening, and aromatherapy soak.",
        },
      },
    ],
  },
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
        text: "No — we're appointment only. That keeps things calm and gives each client enough time.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book an appointment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book through the link on this site, and yes, we do take new clients.",
      },
    },
    {
      "@type": "Question",
      name: "What is your cancellation policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We ask for 24 hours' notice for cancellations. Late cancellations and no-shows may lose the deposit.",
      },
    },
    {
      "@type": "Question",
      name: "Do you require a deposit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we take a deposit to hold your appointment, and it goes toward your total.",
      },
    },
    {
      "@type": "Question",
      name: "What services do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer manicures, pedicures, nail enhancements, and hemp spa treatments by appointment.",
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
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable}`}>
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
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
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
