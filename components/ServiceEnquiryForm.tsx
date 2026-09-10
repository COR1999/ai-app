'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const isEmailJsConfigured = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
);

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const ServiceEnquiryForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: HTMLFormElement): boolean => {
    const newErrors: Record<string, string> = {};

    const name = form.elements.namedItem('enquiry_name') as HTMLInputElement;
    const business = form.elements.namedItem('enquiry_business') as HTMLInputElement;
    const email = form.elements.namedItem('enquiry_email') as HTMLInputElement;
    const phone = form.elements.namedItem('enquiry_phone') as HTMLInputElement;
    const location = form.elements.namedItem('enquiry_location') as HTMLInputElement;

    if (!name.value.trim()) newErrors.name = 'Name is required.';
    if (!business.value.trim()) newErrors.business = 'Business name is required.';
    if (!email.value.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!phone.value.trim()) newErrors.phone = 'Phone number is required.';
    if (!location.value.trim()) newErrors.location = 'Business location is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const honeypot = form.elements.namedItem('website') as HTMLInputElement | null;
    if (honeypot?.value) {
      setFormState('success');
      form.reset();
      return;
    }

    if (!validate(form)) return;

    if (!isEmailJsConfigured) {
      setFormState('error');
      return;
    }

    setFormState('submitting');

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID!,
        EMAILJS_TEMPLATE_ID!,
        form,
        EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setFormState('success');
          form.reset();
          setErrors({});
        },
        () => {
          setFormState('error');
        }
      );
  };

  if (formState === 'success') {
    return (
      <div className="text-center py-12" role="status">
        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-3">Thanks!</h3>
        <p className="text-text-secondary text-lg">
          I&apos;ll be in touch shortly to discuss your website.
        </p>
      </div>
    );
  }

  const inputBase =
    'w-full border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-light/60 focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors outline-none';
  const inputBorder = (field: string) =>
    errors[field] ? 'border-red-400' : 'border-neutral/30';

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot */}
      <div className="absolute -left-[9999px] top-auto" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="enquiry_name" className="block text-primary font-medium mb-1.5">
          Your name <span className="text-secondary">*</span>
        </label>
        <input
          id="enquiry_name"
          name="enquiry_name"
          type="text"
          required
          className={`${inputBase} ${inputBorder('name')}`}
          placeholder="e.g. John Murphy"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="enquiry_business" className="block text-primary font-medium mb-1.5">
          Business name <span className="text-secondary">*</span>
        </label>
        <input
          id="enquiry_business"
          name="enquiry_business"
          type="text"
          required
          className={`${inputBase} ${inputBorder('business')}`}
          placeholder="e.g. Murphy's Hardware"
        />
        {errors.business && <p className="text-red-500 text-sm mt-1">{errors.business}</p>}
      </div>

      <div>
        <label htmlFor="enquiry_email" className="block text-primary font-medium mb-1.5">
          Email <span className="text-secondary">*</span>
        </label>
        <input
          id="enquiry_email"
          name="enquiry_email"
          type="email"
          required
          className={`${inputBase} ${inputBorder('email')}`}
          placeholder="john@murphyshardware.ie"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="enquiry_phone" className="block text-primary font-medium mb-1.5">
          Phone <span className="text-secondary">*</span>
        </label>
        <input
          id="enquiry_phone"
          name="enquiry_phone"
          type="tel"
          required
          className={`${inputBase} ${inputBorder('phone')}`}
          placeholder="087 123 4567"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="enquiry_location" className="block text-primary font-medium mb-1.5">
          Business location <span className="text-secondary">*</span>
        </label>
        <input
          id="enquiry_location"
          name="enquiry_location"
          type="text"
          required
          className={`${inputBase} ${inputBorder('location')}`}
          placeholder="e.g. Greystones, Co. Wicklow"
        />
        {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
      </div>

      <div>
        <label htmlFor="enquiry_website_url" className="block text-primary font-medium mb-1.5">
          Business website <span className="text-text-light text-sm font-normal">(optional)</span>
        </label>
        <input
          id="enquiry_website_url"
          name="enquiry_website_url"
          type="url"
          className={`${inputBase} ${inputBorder('website_url')}`}
          placeholder="https://..."
        />
      </div>

      <div>
        <label htmlFor="enquiry_social" className="block text-primary font-medium mb-1.5">
          Facebook / Instagram <span className="text-text-light text-sm font-normal">(optional)</span>
        </label>
        <input
          id="enquiry_social"
          name="enquiry_social"
          type="text"
          className={`${inputBase} ${inputBorder('social')}`}
          placeholder="Links to your pages"
        />
      </div>

      <div>
        <label htmlFor="enquiry_description" className="block text-primary font-medium mb-1.5">
          What does your business do?
        </label>
        <textarea
          id="enquiry_description"
          name="enquiry_description"
          rows={3}
          className={`${inputBase} resize-y`}
          placeholder="Tell me briefly about your business..."
        />
      </div>

      <div>
        <label htmlFor="enquiry_services" className="block text-primary font-medium mb-1.5">
          What services do you offer?
        </label>
        <textarea
          id="enquiry_services"
          name="enquiry_services"
          rows={3}
          className={`${inputBase} resize-y`}
          placeholder="List your main services..."
        />
      </div>

      <div>
        <label className="block text-primary font-medium mb-2">
          Do you have photos you&apos;d like to use?
        </label>
        <div className="flex flex-wrap gap-3">
          {['Yes', 'No', 'Some'].map((option) => (
            <label key={option} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="enquiry_photos"
                value={option}
                className="w-4 h-4 text-secondary border-neutral/30 focus:ring-secondary"
              />
              <span className="text-text-primary">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="enquiry_notes" className="block text-primary font-medium mb-1.5">
          Anything else you&apos;d like on the website? <span className="text-text-light text-sm font-normal">(optional)</span>
        </label>
        <textarea
          id="enquiry_notes"
          name="enquiry_notes"
          rows={3}
          className={`${inputBase} resize-y`}
          placeholder="Any special requests or additional info..."
        />
      </div>

      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="w-full bg-secondary hover:bg-secondary-dark text-white font-semibold py-3.5 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
      >
        {formState === 'submitting' ? 'Sending…' : 'Send Enquiry'}
      </button>

      {formState === 'error' && (
        <p role="alert" className="text-red-500 text-center text-sm mt-2">
          Something went wrong. Please try again or{' '}
          <a href="mailto:cian.orourke@gmail.com" className="underline hover:text-red-600">
            email me directly
          </a>.
        </p>
      )}
    </form>
  );
};

ServiceEnquiryForm.displayName = 'ServiceEnquiryForm';
export default ServiceEnquiryForm;
