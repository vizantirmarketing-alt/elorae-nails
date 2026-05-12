import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { fontSans, fontSerif } from "@/app/fonts";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { services, categories, schemaOfferPriceUsd, serviceCanonicalUrl } from "@/lib/services";

const hasOfferCatalog = {
  "@type": "OfferCatalog",
  name: "Nail Services",
  itemListElement: categories.map((category) => ({
    "@type": "OfferCatalog",
    name: category.title,
    itemListElement: services
      .filter((s) => s.category === category.slug)
      .map((service) => ({
        "@type": "Offer",
        price: String(schemaOfferPriceUsd(service)),
        priceCurrency: "USD",
        url: serviceCanonicalUrl(category.routeSegment, service.slug),
        itemOffered: {
          "@type": "Service",
          name: service.name,
          ...(service.description !== undefined
            ? { description: service.description }
            : {}),
        },
      })),
  })),
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  name: "Eloraé Nails",
  url: "https://www.eloraenails.com",
  telephone: "+17026132115",
  email: "hello@eloraenails.com",
  description:
    "Private appointment-only luxury nail studio in Las Vegas offering manicures, pedicures, nail enhancements, and hemp-infused spa treatments.",
  image: "https://www.eloraenails.com/og-image.png",
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
  hasOfferCatalog,
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
    title: "Eloraé Nails | Private Luxury Nail Studio in Las Vegas",
    description:
      "Eloraé Nails is a private appointment-only nail studio in Las Vegas offering luxury manicures, pedicures, nail enhancements, and hemp-infused spa treatments in a clean, structured setting.",
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
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}
