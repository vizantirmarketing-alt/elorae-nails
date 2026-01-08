import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Eloraé Nails | Luxury Nail Art Studio",
  description: "Private nail studio in Las Vegas. Clean standards, clear policies, and an appointment-only experience for better clients.",
  icons: {
    icon: "/logos/elorae-icon.svg",
    apple: "/logos/elorae-icon.svg",
  },
  openGraph: {
    title: "Eloraé Nails",
    description: "Luxury Nail Art Studio · Las Vegas",
    url: "https://eloraenails.com",
    siteName: "Eloraé Nails",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eloraé Nails - Luxury Nail Art Studio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cream text-charcoal leading-relaxed">
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
