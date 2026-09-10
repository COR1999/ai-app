import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

vi.stubEnv('NEXT_PUBLIC_EMAILJS_SERVICE_ID', 'test-service');
vi.stubEnv('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID', 'test-template');
vi.stubEnv('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY', 'test-key');

const ServicesPage = (await import('@/app/services/page')).default;

describe('ServicesPage', () => {
  it('renders the hero heading', () => {
    render(<ServicesPage />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('A Simple Website for');
  });

  it('displays the setup price in hero and pricing card', () => {
    render(<ServicesPage />);
    const prices = screen.getAllByText('€50');
    expect(prices.length).toBeGreaterThanOrEqual(2);
  });

  it('displays the monthly price in hero and pricing card', () => {
    render(<ServicesPage />);
    const prices = screen.getAllByText('€25');
    expect(prices.length).toBeGreaterThanOrEqual(2);
  });

  it('has a primary CTA linking to the enquiry form', () => {
    render(<ServicesPage />);
    const cta = screen.getByText('Get Your Website Started');
    expect(cta.getAttribute('href')).toBe('#enquiry');
  });

  it('renders the problem section', () => {
    render(<ServicesPage />);
    expect(screen.getByText('Your customers are looking for you online.')).toBeDefined();
  });

  it('renders all 9 features', () => {
    render(<ServicesPage />);
    const featureTitles = [
      'Your own domain',
      'One-page website',
      'Mobile friendly',
      'Contact buttons',
      'Google Maps',
      'Hosting included',
      'SSL included',
      'Basic SEO',
      'Updates included',
    ];
    for (const title of featureTitles) {
      expect(screen.getByText(title)).toBeDefined();
    }
  });

  it('renders the how it works section with 3 steps', () => {
    render(<ServicesPage />);
    expect(screen.getByText('How it works')).toBeDefined();
    expect(screen.getByText('You send me the information')).toBeDefined();
    expect(screen.getByText('I build your website')).toBeDefined();
    expect(screen.getByText('You approve it and go live')).toBeDefined();
  });

  it('renders the pricing section', () => {
    render(<ServicesPage />);
    expect(screen.getByText('Pricing')).toBeDefined();
    expect(screen.getByText('One-time setup')).toBeDefined();
    expect(screen.getByText('Monthly')).toBeDefined();
  });

  it('renders the example websites section', () => {
    render(<ServicesPage />);
    expect(screen.getByText("See what your website could look like.")).toBeDefined();
    expect(screen.getByText("Mama Amaya's")).toBeDefined();
    expect(screen.getByText(/Visit live site/)).toBeDefined();
    expect(screen.getAllByText('View my other projects').length).toBeGreaterThanOrEqual(1);
  });

  it('renders all 6 FAQ items', () => {
    render(<ServicesPage />);
    const faqQuestions = [
      'Do I need to buy the domain?',
      'What do I need to provide?',
      'Can I update the website later?',
      'Do I need to know anything technical?',
      'What happens if I cancel?',
      'How long does it take?',
    ];
    for (const q of faqQuestions) {
      expect(screen.getAllByText(q).length).toBeGreaterThanOrEqual(1);
    }
  });

  it('renders the enquiry form section with submit button', () => {
    render(<ServicesPage />);
    const headings = screen.getAllByText("Let's get your business online.");
    expect(headings.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('Send Enquiry')).toBeDefined();
  });

  it('shows the person behind the service', () => {
    render(<ServicesPage />);
    expect(screen.getByText(/Built and looked after by me/)).toBeDefined();
    expect(screen.getByText(/deal directly with me/)).toBeDefined();
    expect(screen.getByText('More about me')).toBeDefined();
  });

  it('renders the bottom CTA', () => {
    render(<ServicesPage />);
    const headings = screen.getAllByText('Ready to get started?');
    expect(headings.length).toBeGreaterThanOrEqual(1);
    const bottomCta = screen.getByText('Have a Question? Get in Touch');
    expect(bottomCta.getAttribute('href')).toBe('#enquiry');
  });

  it('has a domain cost footnote', () => {
    render(<ServicesPage />);
    const footnotes = screen.getAllByText(/Setup cost may vary depending on the domain/);
    expect(footnotes.length).toBeGreaterThanOrEqual(1);
  });
});
