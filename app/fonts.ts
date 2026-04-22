import { Cormorant_Garamond, Montserrat } from "next/font/google";

export const fontSans = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
});

export const fontSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
  preload: true,
});
