import type React from "react"
import { Suspense } from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/core/theme-provider"
import { LenisProvider } from "@/components/anim/lenis-provider"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Clínica Dental Sonrisa Perfecta | Tratamientos Dentales Modernos",
  description:
    "Clínica dental moderna con múltiples sedes. Tratamientos de ortodoncia, implantes, blanqueamiento y más. Agenda tu cita hoy.",
  keywords: "clínica dental, ortodoncia, implantes dentales, blanqueamiento, dentista, Perú",
  authors: [{ name: "Bytecore Motion Studio" }],
  creator: "Bytecore Motion Studio",
  publisher: "Clínica Dental Sonrisa Perfecta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://clinica-dental.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Clínica Dental Sonrisa Perfecta | Tratamientos Dentales Modernos",
    description:
      "Clínica dental moderna con múltiples sedes. Tratamientos de ortodoncia, implantes, blanqueamiento y más.",
    url: "https://clinica-dental.vercel.app",
    siteName: "Clínica Dental Sonrisa Perfecta",
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "Clínica Dental Sonrisa Perfecta",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Dental Sonrisa Perfecta | Tratamientos Dentales Modernos",
    description:
      "Clínica dental moderna con múltiples sedes. Tratamientos de ortodoncia, implantes, blanqueamiento y más.",
    images: ["/og/home.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className={`${GeistSans.className} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LenisProvider>
            <Suspense fallback={null}>{children}</Suspense>
          </LenisProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
