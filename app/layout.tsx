import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ErrorBoundary from '@/components/ErrorBoundary'
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
    siteName: PERSONAL_INFO.siteTitle,
    locale: 'en_IE',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: PERSONAL_INFO.siteTitle,
    description: PERSONAL_INFO.siteDescription,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: PERSONAL_INFO.name,
        url: PERSONAL_INFO.siteUrl,
        jobTitle: PERSONAL_INFO.currentRole,
        email: PERSONAL_INFO.email,
        sameAs: [PERSONAL_INFO.linkedin, PERSONAL_INFO.github],
      },
      {
        '@type': 'WebSite',
        name: PERSONAL_INFO.siteTitle,
        url: PERSONAL_INFO.siteUrl,
      },
    ],
  }

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main id="main" className="flex-grow">
          <ErrorBoundary>{children}</ErrorBoundary>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
