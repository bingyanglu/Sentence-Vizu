import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
      <body className={`${inter.className} bg-slate-50 text-gray-900 antialiased`}>{children}</body>
    </html>
  )
} 