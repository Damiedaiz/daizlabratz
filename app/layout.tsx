import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Newsreader({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  metadataBase: new URL("https://daizlabratz.online"),
  title: "DaizLabRatZ | 21-Day Frontend Sprint",
  description: "A free 21-day frontend training for learners who apply, and a paid one-on-one track with personal mentorship.",
  openGraph: { title: "DaizLabRatZ | 21-Day Frontend Sprint", siteName: "DaizLabRatZ", url: "https://daizlabratz.online", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        {client && (
          <Script async strategy="afterInteractive" crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`} />
        )}
        <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="font-display text-xl font-bold">Daiz<span className="text-emerald">Lab</span>RatZ</Link>
          <nav className="flex gap-6 text-sm"><Link href="/apply">Apply</Link><Link href="/privacy">Privacy</Link></nav>
        </header>
        <main>{children}</main>
        <footer className="mx-auto mt-24 max-w-5xl border-t border-line px-6 py-8 text-sm text-ink/60">
          © {new Date().getFullYear()} DaizSign Multimedia Ltd. · daizsign@gmail.com
        </footer>
      </body>
    </html>
  );
}
