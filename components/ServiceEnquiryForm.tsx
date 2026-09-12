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

type FormState = 'idle' | 'submitting' | 'success' | 'error';

const inputBase =
  'w-full border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-light/60 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors outline-none';
const inputBorder = (invalid: boolean) => (invalid ? 'border-red-400' : 'border-neutral/40');

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
    } else if (!/^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(email.value)) {
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
      setErrors({});
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
          setErrors({});
        }
      );
  };

  if (formState === 'success') {
    return (
      <div className="text-center py-12" role="status">
        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

  if (!isEmailJsConfigured) {
    return (
      <div className="text-center space-y-4" role="alert">
        <p className="text-text-secondary">
          The enquiry form isn&apos;t available right now — please email me directly instead.
        </p>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-block bg-secondary text-primary px-6 py-3 rounded-lg font-medium hover:bg-secondary-dark transition-colors"
        >
          {PERSONAL_INFO.email}
        </a>
      </div>
    );
  }

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
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
          className={`${inputBase} ${inputBorder(!!errors.name)}`}
          placeholder="e.g. John Murphy"
        />
        {errors.name && (
          <p id="enquiry-name-error" className="text-red-600 text-sm mt-1">
            {errors.name}
          </p>
        )}
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
          aria-invalid={!!errors.business}
          aria-describedby={errors.business ? 'enquiry-business-error' : undefined}
          className={`${inputBase} ${inputBorder(!!errors.business)}`}
          placeholder="e.g. Murphy's Hardware"
        />
        {errors.business && (
          <p id="enquiry-business-error" className="text-red-600 text-sm mt-1">
            {errors.business}
          </p>
        )}
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
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'enquiry-email-error' : undefined}
          className={`${inputBase} ${inputBorder(!!errors.email)}`}
          placeholder="john@murphyshardware.ie"
        />
        {errors.email && (
          <p id="enquiry-email-error" className="text-red-600 text-sm mt-1">
            {errors.email}
          </p>
        )}
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
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'enquiry-phone-error' : undefined}
          className={`${inputBase} ${inputBorder(!!errors.phone)}`}
          placeholder="087 123 4567"
        />
        {errors.phone && (
          <p id="enquiry-phone-error" className="text-red-600 text-sm mt-1">
            {errors.phone}
          </p>
        )}
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
          aria-invalid={!!errors.location}
          aria-describedby={errors.location ? 'enquiry-location-error' : undefined}
          className={`${inputBase} ${inputBorder(!!errors.location)}`}
          placeholder="e.g. Greystones, Co. Wicklow"
        />
        {errors.location && (
          <p id="enquiry-location-error" className="text-red-600 text-sm mt-1">
            {errors.location}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="enquiry_website_url" className="block text-primary font-medium mb-1.5">
          Business website or social links <span className="text-text-secondary text-sm font-normal">(optional)</span>
        </label>
        <input
          id="enquiry_website_url"
          name="enquiry_website_url"
          type="text"
          className={`${inputBase} ${inputBorder(false)}`}
          placeholder="e.g. facebook.com/yourbusiness"
        />
      </div>

      <div>
        <label htmlFor="enquiry_description" className="block text-primary font-medium mb-1.5">
          Tell me briefly about your business and the services you offer{' '}
          <span className="text-text-secondary text-sm font-normal">(optional)</span>
        </label>
        <textarea
          id="enquiry_description"
          name="enquiry_description"
          rows={3}
          className={`${inputBase} resize-y`}
          placeholder="e.g. A family-run hardware store in Greystones selling tools, paint and garden supplies. Photos welcome too!"
        />
      </div>

      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="w-full bg-secondary hover:bg-secondary-dark text-primary font-semibold py-3.5 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
      >
        {formState === 'submitting' ? 'Sending…' : 'Send Enquiry'}
      </button>

      {formState === 'error' && (
        <p role="alert" className="text-red-600 text-center text-sm mt-2">
          Something went wrong. Please try again or{' '}
          <a href={`mailto:${PERSONAL_INFO.email}`} className="underline hover:text-red-700">
            email me directly
          </a>.
        </p>
      )}
    </form>
  );
};

ServiceEnquiryForm.displayName = 'ServiceEnquiryForm';
export default ServiceEnquiryForm;
