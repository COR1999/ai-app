'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '@/constants/personal-info';

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const isEmailJsConfigured = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
);

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot: real users never see or fill this field. If a bot does,
    // pretend success and drop the message without calling EmailJS.
    const honeypot = form.elements.namedItem('company') as HTMLInputElement | null;
    if (honeypot?.value) {
      setIsSuccess(true);
      setStateMessage('✅ Message sent successfully!');
      form.reset();
      setTimeout(() => setStateMessage(null), 5000);
      return;
    }

    if (!isEmailJsConfigured) {
      setIsSuccess(false);
      setStateMessage('❌ Something went wrong. Please try again later.');
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID!,
        EMAILJS_TEMPLATE_ID!,
        form,
        EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setIsSuccess(true);
          setStateMessage('✅ Message sent successfully!');
          form.reset();
        },
        () => {
          setIsSuccess(false);
          setStateMessage('❌ Something went wrong. Please try again later.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStateMessage(null), 5000);
      });
  };

  if (!isEmailJsConfigured) {
    return (
      <div className="text-center space-y-4" role="alert">
        <p className="text-text-secondary">
          The contact form isn&apos;t available right now — please email me directly instead.
        </p>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary-dark transition-colors"
        >
          {PERSONAL_INFO.email}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={sendEmail} className="space-y-6 max-w-lg mx-auto">
      {/* Honeypot field — hidden from humans, irresistible to bots */}
      <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="user_name" className="block text-primary font-medium mb-2">
          Name
        </label>
        <input
          id="user_name"
          type="text"
          name="user_name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label htmlFor="user_email" className="block text-primary font-medium mb-2">
          Email
        </label>
        <input
          id="user_email"
          type="email"
          name="user_email"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-primary font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors resize-vertical"
          placeholder="Your message..."
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-secondary-dark transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending…' : 'Send'}
      </button>

      {/* Status message with CSS animation */}
      {stateMessage && (
        <p
          role="status"
          className={`animate-fade-slide-in text-center font-medium mt-4 ${
            isSuccess ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {stateMessage}
        </p>
      )}
    </form>
  );
};

ContactForm.displayName = 'ContactForm';
export default ContactForm;
