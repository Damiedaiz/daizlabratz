import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://daizlabratz.online"),

  title: {
    default: "DaizLabRatZ.Online | The 21-Day Sprint",
    template: "%s | DaizLabRatZ.Online",
  },

  description:
    "The DaizLabRatZ Expert-to-Expert 21-Day Sprint — an intensive engineering protocol for experts moving into scalable digital infrastructure.",

  openGraph: {
    title: "DaizLabRatZ.Online | The 21-Day Sprint",
    description:
      "Systems Over Hustle. Expert-to-Expert protocol for engineering automated, scalable digital infrastructures.",
    url: "https://daizlabratz.online",
    siteName: "DaizLabRatZ.Online",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "DaizLabRatZ.Online — The 21-Day Sprint",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DaizLabRatZ.Online | The 21-Day Sprint",
    description:
      "Systems Over Hustle. Expert-to-Expert protocol.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}