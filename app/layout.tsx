import "./globals.css";
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'
import { PERSONAL_INFO } from '@/constants/personal-info'

export const metadata: Metadata = {
  title: PERSONAL_INFO.siteTitle,
  description: PERSONAL_INFO.siteDescription,
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
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
      </body>
    </html>
  )
}
