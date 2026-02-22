import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  // 🔴 ESTO ES LO QUE LE DICE A GOOGLE CUÁL ES TU DOMINIO REAL
  metadataBase: new URL('https://visualcraftagency.com'),

  title: 'VisualCraft | Soluciones Digitales para Restaurantes',
  description:
    'Transformamos tu restaurante en digital. Sitios web, menus digitales con QR y sistemas de reservas. Especialistas en gastronomia digital en Argentina.',
  keywords: [
    'restaurantes',
    'menu digital',
    'pagina web restaurante',
    'reservas online',
    'gastronomia digital',
    'Argentina',
  ],

  // 🔴 DEFINE LA URL CANÓNICA GLOBAL (soluciona el error de duplicada)
  alternates: {
    canonical: '/',
  },

  // ✅ Corrección de favicon (sin /public)
  icons: {
    icon: '/images/logo.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
