import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  subsets: ["latin", "latin-ext"],
  variable: "--font-noto-serif",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Australia eVisitor Guide — the free visa for European passports",
    template: "%s | eVisitor Guide",
  },
  description:
    "An independent, plain-English guide to Australia's eVisitor visa (subclass 651): free of charge, who is eligible, how long you can stay, and how it differs from the AUD $20 ETA.",
  keywords:
    "eVisitor, subclass 651, Australia visa, ETA subclass 601, Australian visitor visa, free Australian visa, European passport",
  robots: { index: true, follow: true },
  /** ⚠️ Search Consoleの所有権確認はMETA方式。
   *  FILE方式は trailingSlash:true のせいで /googleXXXX.html が308になり使えなかった。 */
  verification: { google: "3TYln4d1lpm1cITjE989pRaDpDBiADp_aA40JjboLIY" },
  openGraph: {
    title: "Australia eVisitor Guide — the free visa for European passports",
    description:
      "The eVisitor costs nothing — but it only covers European passports. Everyone else needs the AUD $20 ETA.",
    locale: "en",
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
      <head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}