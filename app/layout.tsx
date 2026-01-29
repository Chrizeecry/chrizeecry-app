import { Analytics } from "@vercel/analytics/react"
import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  // --- BRANDING & SEO ---
  title: 'Chrizeecry Collective: Exclusion to Engineer | STEM Mentorship & Civil Engineering',
  description: 'The official site of Samson Chrizeecry Senyatsi. Learn technical Maths, Physics, Civil Engineering survival skills, and creative arts from an engineer who overcame academic exclusion.',
  generator: 'Next.js, Vercel',
  metadataBase: new URL('https://www.chrizeecry.com'),
  alternates: {
    canonical: '/',
  },
  
  // --- ICON CONFIGURATION ---
  // Updated to match your filename: favicon.ico
  icons: {
    icon: [
      { 
        url: '/favicon.ico', 
        sizes: '32x32', 
        type: 'image/x-icon' 
      },
      { 
        url: '/favicon.ico', 
        sizes: '192x192', 
        type: 'image/x-icon' 
      },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  // --- SOCIAL MEDIA PREVIEW (OpenGraph) ---
  openGraph: {
    title: 'Chrizeecry Collective',
    description: 'From Exclusion to Engineer. Join the Collective for STEM mentorship.',
    url: 'https://www.chrizeecry.com',
    siteName: 'Chrizeecry Collective',
    images: [
      {
        url: '/favicon.ico', 
        width: 500,
        height: 500,
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-TBTFX79D" /> 
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}