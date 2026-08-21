import type { Metadata } from 'next';
import ContactForm from '@/components/Contactform';

export const metadata: Metadata = {
  title: "Contact | Cian O'Rourke",
  description:
    "Get in touch with Cian O'Rourke — Full Stack Developer available for collaborations and opportunities.",
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Get In Touch</h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
