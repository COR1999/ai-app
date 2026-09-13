import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceEnquiryForm from '@/components/ServiceEnquiryForm';
import { serviceFeatures, serviceSteps, serviceFaqs } from '@/constants/services';

export const metadata: Metadata = {
  title: 'Simple Business Websites | Cian O\'Rourke',
  description:
    'Professional, mobile-first one-page websites for local businesses. From €99 setup + €25/month for hosting, maintenance and updates, and the domain is registered in your name.',
  openGraph: {
    title: 'Simple Business Websites | Cian O\'Rourke',
    description:
      'Professional, mobile-first one-page websites for local businesses. From €99 setup + €25/month for hosting, maintenance and updates, and the domain is registered in your name.',
    type: 'website',
    locale: 'en_IE',
    images: ['/opengraph-image'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simple Business Websites | Cian O\'Rourke',
    description:
      'Professional, mobile-first one-page websites for local businesses. From €99 setup + €25/month for hosting, maintenance and updates, and the domain is registered in your name.',
  },
  alternates: {
    canonical: '/services',
  },
};

const featureIcons: Record<string, React.ReactNode> = {
  'Your own domain': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  'One-page website': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
    </svg>
  ),
  'Mobile friendly': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  'Contact buttons': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  ),
  'Google Maps': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  ),
  'Hosting included': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
    </svg>
  ),
  'SSL included': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  ),
  'Basic SEO': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  ),
  'Updates included': (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
    </svg>
  ),
};

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function ServicesPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: serviceFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background-secondary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-light to-gunmetal text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 py-16 sm:py-20 lg:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              A Simple Website for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                Your Business
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Professional one-page websites for local businesses, built mobile-first so they look great on phones. Hosting and ongoing maintenance included, and the domain is yours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-secondary">from €99</div>
                <div className="text-sm text-white/60 mt-1">one-off setup *</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/20" />
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-secondary">€25</div>
                <div className="text-sm text-white/60 mt-1">per month</div>
              </div>
            </div>
            <a
              href="#enquiry"
              className="inline-block bg-secondary hover:bg-secondary-dark text-primary font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Your Website Started
            </a>
            <p className="text-xs text-white/70 mt-6">* Setup cost may vary depending on the domain name you choose.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Your customers are looking for you online.
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              When someone hears about a local business, they often search for it online.
              A professional website gives customers somewhere simple to:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              'See what you do',
              'See your services',
              'Find your phone number',
              'Find your location',
              'Check opening hours',
              'Contact you',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-background-secondary rounded-lg p-4">
                <CheckIcon />
                <span className="text-text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Everything you need. Nothing you don&apos;t.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral/20 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-4">
                  {featureIcons[feature.title]}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Your website address
            </h2>
            <p className="text-lg text-text-secondary">
              A professional <code className="bg-background-secondary px-2 py-1 rounded text-secondary font-medium">.ie</code> or <code className="bg-background-secondary px-2 py-1 rounded text-secondary font-medium">.com</code> domain, registered in your name, so it&apos;s always yours.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {['murphyshardware.ie', 'greystonescafe.com', 'wicklowplumbing.ie', 'yourbusinessname.com'].map((domain) => (
              <div
                key={domain}
                className="bg-background-secondary rounded-lg px-5 py-3 text-text-primary font-medium text-sm sm:text-base border border-neutral/20"
              >
                {domain}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">How it works</h2>
            <p className="text-lg text-text-secondary">Three simple steps.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-14 h-14 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              You don&apos;t need to know anything about websites.
            </h2>
            <p className="text-lg text-text-secondary">
              Just send me the basics about your business. I&apos;ll handle everything else.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-neutral/20 max-w-2xl mx-auto">
            <ul className="space-y-4">
              {[
                'Business name',
                'Short description of the business',
                'List of services',
                'Phone number',
                'Email address',
                'Address',
                'Opening hours',
                'Social media links',
                'A few photos, if available',
                'Logo, if they have one',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-text-primary">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-text-secondary text-center">
              Everything technical is handled by me.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Pricing</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              A one-time setup fee <span className="font-semibold text-primary">from €99</span> to design
              and launch your site (this varies with the domain you choose), then a simple monthly plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Care plan - recommended */}
            <div className="relative bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white shadow-xl ring-2 ring-secondary md:scale-[1.03]">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-primary text-xs font-bold uppercase tracking-wide px-4 py-1 rounded-full shadow">
                Most popular
              </span>
              <h3 className="text-xl font-bold mb-1">Care plan</h3>
              <p className="text-white/70 text-sm mb-4">Everything handled for you.</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-secondary">€25</span>
                <span className="text-white/70"> / month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Hosting, SSL and uptime',
                  'Your domain managed for you',
                  'Reasonable changes anytime, included',
                  'Priority support, straight to me',
                  'No hourly fees, no surprises',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-white/90 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#enquiry"
                className="block text-center bg-secondary hover:bg-secondary-dark text-primary font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Get started
              </a>
            </div>

            {/* Hosting-only - simpler option */}
            <div className="bg-white border border-neutral/20 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-1">Hosting-only</h3>
              <p className="text-text-secondary text-sm mb-4">Keep it simple.</p>
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary">€10</span>
                <span className="text-text-secondary"> / month</span>
              </div>
              <ul className="space-y-3 mb-4">
                {[
                  'Hosting, SSL and uptime',
                  'Your domain managed for you',
                  'Your site stays online',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-text-primary text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-text-secondary mb-8">
                Changes are not included: if you need one, it is charged at an hourly rate.
              </p>
              <a
                href="#enquiry"
                className="block text-center border-2 border-primary text-primary hover:bg-background-secondary font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                Choose hosting-only
              </a>
            </div>
          </div>

          <p className="text-sm text-text-secondary text-center mt-8">
            No complicated packages. No hidden fees. The domain stays registered in your name.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              See what your one-page site could look like.
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Two live examples, built from the same one-page template I&apos;d use for you.
              Click either one to open the full site (these use example businesses).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { view: '/demos/plumber', src: '/demos/plumber.html', title: 'Trades one-pager', blurb: 'A plumber, electrician or builder style site.' },
              { view: '/demos/cafe', src: '/demos/cafe.html', title: 'Cafe one-pager', blurb: 'A cafe, salon or local food style site.' },
            ].map((demo) => (
              <Link
                key={demo.view}
                href={demo.view}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral/20 hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-neutral/10 bg-white">
                  <iframe
                    src={demo.src}
                    title={`${demo.title} preview`}
                    loading="lazy"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="absolute left-0 top-0 border-0 pointer-events-none"
                    style={{ width: '300%', height: '300%', transform: 'scale(0.3333)', transformOrigin: 'top left' }}
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-semibold text-primary mb-1">{demo.title}</h3>
                  <p className="text-sm text-text-secondary mb-2">{demo.blurb}</p>
                  <span className="text-primary font-medium group-hover:text-primary-dark">View live example</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-neutral/20">
            <p className="text-center text-text-secondary mb-6">
              I also build larger, multi-page sites for clients. Here is a live one:
            </p>
            <div className="max-w-md mx-auto bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral/20">
              <div className="relative aspect-[16/10] bg-background-secondary">
                <Image
                  src="/images/projects/mamaamayas.jpeg"
                  alt="Mama Amaya's website, a production website built for an artisan hot sauce brand"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 448px"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-primary mb-2">Mama Amaya&apos;s</h3>
                <p className="text-text-secondary text-sm mb-4">
                  Artisan East African-inspired hot sauce brand: product storytelling, recipes and brand content.
                </p>
                <a
                  href="https://www.mamaamayas.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-primary font-medium hover:text-primary-dark transition-colors"
                >
                  Visit live site
                </a>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="/projects"
                className="inline-block border-2 border-primary text-primary hover:bg-secondary hover:border-secondary hover:text-primary font-semibold px-6 py-3 rounded-xl transition-all duration-300"
              >
                View my other projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-background-secondary">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-neutral/20 flex flex-col sm:flex-row items-center gap-8">
            <Image
              src="/images/about/cianheadshotNew.jpg"
              alt="Cian O'Rourke, the developer who builds and maintains your website"
              width={160}
              height={160}
              className="rounded-full object-cover w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 shadow-md"
            />
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-3">
                Built and looked after by me
              </h2>
              <p className="text-text-primary leading-relaxed mb-4">
                You deal with me directly, start to finish. I design and build your site, set up
                your domain and hosting, and I&apos;m the one who answers when you need a change.
                Personal, local, and no runaround.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2">
                <Link
                  href="/about"
                  className="text-primary font-medium hover:text-primary-dark underline underline-offset-4"
                >
                  More about me
                </Link>
                <Link
                  href="/projects"
                  className="text-primary font-medium hover:text-primary-dark underline underline-offset-4"
                >
                  View my other projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Questions?</h2>
          </div>
          <div className="space-y-4">
            {serviceFaqs.map((faq) => (
              <details key={faq.question} className="group bg-background-secondary rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-semibold text-primary hover:text-primary-dark transition-colors list-none">
                  {faq.question}
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-text-light group-open:rotate-180 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-text-secondary leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry" className="py-16 sm:py-20 lg:py-24 bg-background-secondary scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Let&apos;s get your business online.
            </h2>
            <p className="text-lg text-text-secondary">
              Tell me a little about your business and I&apos;ll get back to you.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-neutral/20 p-6 sm:p-8">
            <ServiceEnquiryForm />
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary to-primary-light text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-white/70 mb-8">
            Fill in the form above or get in touch directly.
          </p>
          <a
            href="#enquiry"
            className="inline-block bg-secondary hover:bg-secondary-dark text-primary font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Have a Question? Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
