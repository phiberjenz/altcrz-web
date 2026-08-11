import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "ALT CRZ Solutions | IT-tjänster för flygbranschen";
const description =
  "ALT CRZ Solutions utvecklar och driver IT-tjänster med primärt fokus på flygbranschen – digitala lösningar för en bransch i ständig rörelse.";

export const metadata: Metadata = {
  metadataBase: new URL("https://altcrz.se"),
  title,
  description,
  applicationName: "ALT CRZ Solutions",
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "/",
    siteName: "ALT CRZ Solutions",
    title,
    description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ALT CRZ Solutions – IT-tjänster för flygbranschen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071a24",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
