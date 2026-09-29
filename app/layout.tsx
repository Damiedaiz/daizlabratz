import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DaizLabRatZ.Online | The 21-Day Sprint",
  description:
    "The DaizLabRatZ Expert-to-Expert 21-Day Sprint — an intensive engineering protocol for experts moving into scalable digital infrastructure.",
  metadataBase: new URL("https://daizlabratz.online"),
  openGraph: {
    title: "DaizLabRatZ.Online | The 21-Day Sprint",
    description:
      "Systems Over Hustle. Expert-to-Expert protocol for engineering automated, scalable digital infrastructures.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}