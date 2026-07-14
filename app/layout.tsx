import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { PERSONAL_INFO } from '@/constants/personal-info'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  metadataBase: new URL(PERSONAL_INFO.siteUrl),
  title: PERSONAL_INFO.siteTitle,
  description: PERSONAL_INFO.siteDescription,
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: PERSONAL_INFO.siteTitle,
    description: PERSONAL_INFO.siteDescription,
    url: PERSONAL_INFO.siteUrl,
    siteName: PERSONAL_INFO.siteTitle,
    locale: 'en_IE',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: PERSONAL_INFO.siteTitle,
    description: PERSONAL_INFO.siteDescription,
  },
  alternates: {
    canonical: PERSONAL_INFO.siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
