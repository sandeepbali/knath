import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Providers } from "./providers"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Kamal Nath — Statesman, Visionary, Leader",
    template: "%s | Kamal Nath",
  },
  description:
    "The most comprehensive resource on Kamal Nath — nine-time Member of Parliament, Former Chief Minister of Madhya Pradesh, and one of India's most influential political leaders spanning over four decades of public service.",
  keywords: [
    "Kamal Nath",
    "Indian politician",
    "Madhya Pradesh",
    "Chief Minister",
    "Chhindwara",
    "Congress",
    "WTO",
    "Member of Parliament",
  ],
  openGraph: {
    title: "Kamal Nath — Statesman, Visionary, Leader",
    description:
      "Nine-time MP, Former Chief Minister of Madhya Pradesh, champion of India's trade interests, and transformative leader of Chhindwara.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Providers>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
