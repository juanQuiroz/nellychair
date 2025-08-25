import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Deisy - Manzanas Premium de Yauyos | Distribuidora de Frutas",
  description:
    "Deisy: distribuidora de manzanas premium del interior del Perú (Yauyos). Variedades frescas, calidad garantizada. Contacto exclusivo por WhatsApp.",
  generator: "Next.js",
  keywords: "manzanas, frutas, Yauyos, Perú, distribuidora, premium, calidad",
  openGraph: {
    title: "Deisy - Manzanas Premium de Yauyos",
    description: "Manzanas de altura, sabor incomparable. Suministro confiable para mercados y negocios.",
    type: "website",
    locale: "es_PE",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Deisy - Distribuidora de Frutas",
  description: "Distribuidora de manzanas premium de Yauyos, Perú",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Yauyos",
    addressCountry: "PE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: "Spanish",
  },
  sameAs: "https://wa.me/{WHATSAPP_PHONE}",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={poppins.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
