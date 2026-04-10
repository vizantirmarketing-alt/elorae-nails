import type { Metadata } from "next";
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
  telephone: "+17023725051",
  email: "hello@eloraenails.com",
  description:
    "Private appointment-only luxury nail studio in Las Vegas offering manicures, pedicures, nail enhancements, and CBD spa treatments.",
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

export const metadata: Metadata = {
  title: "Eloraé Nails | Private Luxury Nail Studio in Las Vegas",
  description:
    "Eloraé Nails is a private appointment-only nail studio in Las Vegas offering luxury manicures, pedicures, nail enhancements, and CBD spa treatments in a clean, structured setting.",
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
      "Eloraé Nails is a private appointment-only nail studio in Las Vegas offering luxury manicures, pedicures, nail enhancements, and CBD spa treatments in a clean, structured setting.",
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
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
    `,
          }}
        />
      </head>
      <body className="bg-cream text-charcoal leading-relaxed">
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
