import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const demos = {
  plumber: {
    label: 'Trades one-pager',
    blurb: 'An example one-page site for a plumber, electrician or builder.',
  },
  cafe: {
    label: 'Cafe one-pager',
    blurb: 'An example one-page site for a cafe, salon or local food business.',
  },
} as const;

type Slug = keyof typeof demos;

export function generateStaticParams() {
  return Object.keys(demos).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const demo = demos[slug as Slug];
  return {
    title: demo ? `${demo.label} example | Cian O'Rourke` : "Example | Cian O'Rourke",
    robots: { index: false },
  };
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const demo = demos[slug as Slug];
  if (!demo) notFound();

  return (
    <div className="bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl py-8 sm:py-10">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark mb-5"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
          Back to services
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-1">{demo.label}</h1>
        <p className="text-text-secondary mb-6">
          {demo.blurb} It uses a sample business, not a real client.
        </p>
        <div className="rounded-2xl overflow-hidden border border-neutral/20 shadow-sm bg-white">
          <iframe
            src={`/demos/${slug}.html`}
            title={`${demo.label} live example`}
            className="w-full border-0"
            style={{ height: '80vh' }}
          />
        </div>
        <div className="text-center mt-8">
          <Link
            href="/services#enquiry"
            className="inline-block bg-secondary hover:bg-secondary-dark text-primary font-semibold px-8 py-3 rounded-xl transition-all duration-300"
          >
            I want a site like this
          </Link>
        </div>
      </div>
    </div>
  );
}
