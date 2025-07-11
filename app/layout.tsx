import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'] 
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sentencevizu.com'),
  title: 'SentenceVizu | Sentence Diagramming & Visual Analysis Tool',
  description: 'Instantly diagram and analyze English sentences with SentenceVizu. Our visual tool makes grammar easy with color-coding, mind maps, and Reed-Kellogg diagrams.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SentenceVizu | Sentence Diagramming & Visual Analysis Tool',
    description: 'From color-coding to full Reed-Kellogg diagrams, master English grammar visually.',
    url: 'https://sentencevizu.com',
    siteName: 'SentenceVizu',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SentenceVizu | Sentence Diagramming & Visual Analysis Tool',
    description: 'From color-coding to full Reed-Kellogg diagrams, master English grammar visually.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FHHBKBQ4SD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FHHBKBQ4SD');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
} 